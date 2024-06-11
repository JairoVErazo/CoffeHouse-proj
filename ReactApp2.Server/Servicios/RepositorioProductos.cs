using AutoMapper;
using CoffeHouse.Server.Dto_s;
using CoffeHouse.Server.Models;
using CoffeHouse.Server.Models.Custom;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace CoffeHouse.Server.Servicios
{
    public interface IRepositorioProductos
    {
        Task<string> CargarImagen(IFormFile file);
        Task<Producto> CrearProducto(CrearProductoRequest producto);
        Task<Producto> EditarProducto(int id, CrearProductoRequest producto);
        Task<MensajeRespuesta> EliminarProducto(int id);
        Task<string> ObtenerNombreCategoria(int id);
        Task<Producto> ObtenerProductoDetalles(int idProducto);
        Task<IEnumerable<ProductoDTO>> ObtenerProductos();
        Task<IEnumerable<Producto>> ObtenerProductosPorCategoria(int idCategoria);
    }
    public class RepositorioProductos : IRepositorioProductos
    {
        private readonly CoffehouseContext _context;
        private readonly IMapper _mapper;

        public RepositorioProductos(CoffehouseContext context,
                                    IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<string> ObtenerNombreCategoria(int id)
        {
           var cateogria = await _context.CategoriaProductos.Where(c => c.IdCategoria == id).FirstAsync();

           string nombre = cateogria.NombreCategoria;

           return nombre;
    
        }

        public async Task<IEnumerable<ProductoDTO>> ObtenerProductos()
        {
            var products = await _context.Productos.Include(p => p.Receta).ToListAsync();

            List<ProductoDTO>productoResponse = new();
            foreach (var producto in products)
            {
                ProductoDTO productoDTO = _mapper.Map<ProductoDTO>(producto);

                productoDTO.Categoria = await ObtenerNombreCategoria(productoDTO.IdCategoria);

                productoResponse.Add(productoDTO);
            }


            return productoResponse;
        }
           
        

        public async Task<Producto> ObtenerProductoDetalles(int idProducto)
        {
            var producto = await _context.Productos
                .Where(p => p.IdProducto == idProducto)
                .Include(p => p.Receta)
                .FirstOrDefaultAsync();

            return producto;
        }

        public async Task<string> CargarImagen(IFormFile file)
        {
            var ruta = String.Empty;

            if(file.Length > 0)
            {
                var nombreArchivo = Guid.NewGuid().ToString() + ".jpg";
                ruta = $"Imagenes/{nombreArchivo}";
                using (var stream = new FileStream(ruta, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                } 
            }

            return ruta;

        }


        public async Task<Producto> CrearProducto(CrearProductoRequest producto)
        {
            string rutaImagen = await CargarImagen(producto.Imagen);

            var nuevoProduct = new Producto()
            {
                IdCategoria = producto.IdCategoria,
                NombreProducto = producto.NombreProducto,
                DeTemporada = producto.DeTemporada,
                Disponible = producto.Disponible,
                Imagen = rutaImagen,
                Descripcion = producto.Descripcion,
                Precio = producto.Precio
            };

            await _context.AddAsync(nuevoProduct);
            await _context.SaveChangesAsync();

            return nuevoProduct;
        }


        public async Task<Producto> EditarProducto(int id, CrearProductoRequest request)
        {
            var producto = await _context.Productos.Where(c => c.IdProducto == id).FirstAsync();
            string rutaImagen = string.Empty;


            if (request.Imagen is not null)
            {
                rutaImagen = await CargarImagen(request.Imagen);
            }

            if(request.IdCategoria is 0)
            {
                request.IdCategoria = producto.IdCategoria; 
            }

            rutaImagen = producto.Imagen;

            // Obtener propiedades del objeto request
            var requestPropiedad = request.GetType().GetProperties();

            // Recorrer las propiedades del request
            foreach (var property in requestPropiedad)
            {
                // Obtener el nombre de la propiedad
                var NombrePropiedad = property.Name;

                // Obtener el valor de la propiedad
                var requestPropiedadValor = property.GetValue(request);


                var productoProperty = producto.GetType().GetProperty(NombrePropiedad);

                // Verificar si la propiedad del producto existe
                if (productoProperty != null)
                {
                    // Verificar si el valor del request es nulo
                    if (requestPropiedadValor != null)
                    {

                        productoProperty.SetValue(producto, requestPropiedadValor);
                    }
                }

            }
                _context.Productos.Update(producto);
            await _context.SaveChangesAsync();

            return producto;

        }


        public MensajeRespuesta CreateErrorResult(string titulo, string message)
        {
            return new MensajeRespuesta
            {
                Tipo = null,
                Titulo = titulo ,
                Mensaje = message
            };
        }

        public async Task<MensajeRespuesta> EliminarProducto(int id)
        {
            var producto = await _context.Productos.FindAsync(id);
            var recetas = await _context.Recetas.Where(r => r.IdProducto == id).FirstAsync();

            await _context.DetalleReceta.Where(p => p.IdRecetas == recetas.IdReceta).ExecuteDeleteAsync();
            _context.Recetas.Remove(recetas);
             _context.Productos.Remove(producto);
            await _context.SaveChangesAsync();

            return new MensajeRespuesta
            {
                Tipo = producto.NombreProducto,
                Titulo = "El producto ha sido Eliminado con exito",
                Mensaje = "ok"
            };

        }


        public async Task<IEnumerable<Producto>> ObtenerProductosPorCategoria(int idCategoria)
        {
            if(idCategoria is 0)
            {
                return null;
            }
            var productos = await _context.Productos.Where(i => i.IdCategoria == idCategoria).ToListAsync();

            return productos;

        }

    }
}
