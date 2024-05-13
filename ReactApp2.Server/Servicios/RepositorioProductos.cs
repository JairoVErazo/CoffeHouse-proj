using AutoMapper;
using CoffeHouse.Server.Dto_s;
using CoffeHouse.Server.Models;
using CoffeHouse.Server.Models.Custom;
using Microsoft.EntityFrameworkCore;

namespace CoffeHouse.Server.Servicios
{
    public interface IRepositorioProductos
    {
        Task<string> CargarImagen(IFormFile file);
        Task<Producto> CrearProducto(CrearProductoRequest producto);
        Task<Producto> ObtenerProductoDetalles(int idProducto);
        Task<IEnumerable<Producto>> ObtenerProductos();
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



        public async Task<IEnumerable<Producto>> ObtenerProductos()
        {
            var products = await _context.Productos.Include(p => p.Receta).ToListAsync();

            return products;
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
            };

            await _context.AddAsync(nuevoProduct);
            await _context.SaveChangesAsync();

            return nuevoProduct;
        }

    }
}
