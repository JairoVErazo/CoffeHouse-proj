using AutoMapper;
using CoffeHouse.Server.Dto_s;
using CoffeHouse.Server.Models;
using CoffeHouse.Server.Models.Custom;
using Microsoft.EntityFrameworkCore;

namespace CoffeHouse.Server.Servicios
{
    public interface IRepositorioIngredientes
    {
        Task<Ingrediente> CrearIngrediente(Ingrediente ingrediente);
        Task<Ingrediente> EditarIngrediente(int id, IngredienteRequest request);
        Task<IEnumerable<Ingrediente>> ObtenerIngredientes();
    }
    public class RepositorioIngredientes: IRepositorioIngredientes
    {
        private readonly CoffehouseContext _context;
        private readonly IMapper _mapper;
        public RepositorioIngredientes(CoffehouseContext context,
                                    IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<IEnumerable<Ingrediente>> ObtenerIngredientes()
        {

            var ingredientes = await _context.Ingredientes.ToListAsync();


            return ingredientes;
        }

        public async Task<Ingrediente> CrearIngrediente( Ingrediente ingrediente )
        {
            

            var nuevoIngrediente = new Ingrediente()
            {
                Nombre = ingrediente.Nombre,
                Caducidad = ingrediente.Caducidad,
                PrecioUnitario = ingrediente.PrecioUnitario,
                Existencias = ingrediente.Existencias,         
                UnidadMedida = ingrediente.UnidadMedida,
            };

            await _context.AddAsync(nuevoIngrediente);
            await _context.SaveChangesAsync();

            return nuevoIngrediente;
        }

        public async Task<Ingrediente> EditarIngrediente(int id, IngredienteRequest request)
        {
            var ingrediente = await _context.Ingredientes.FirstOrDefaultAsync(x => x.IdIngrediente == id);

            if (ingrediente == null)
            {
                throw new KeyNotFoundException("Ingrediente no encontrado");
            }

            var requestProperties = request.GetType().GetProperties();

            foreach (var property in requestProperties)
            {
                // Obtener el nombre de la propiedad y el valor de la propiedad en el request
                var propertyName = property.Name;
                var requestPropertyValue = property.GetValue(request);

                // Si el valor de la propiedad en el request no es nulo
                if (requestPropertyValue != null)
                {
                    // Obtener la propiedad correspondiente en el objeto ingrediente
                    var ingredienteProperty = ingrediente.GetType().GetProperty(propertyName);

                    // Si la propiedad existe y es escribible, establecer el valor
                    if (ingredienteProperty != null && ingredienteProperty.CanWrite)
                    {
                        ingredienteProperty.SetValue(ingrediente, requestPropertyValue);
                    }
                }
            }

            _context.Ingredientes.Update(ingrediente);
            await _context.SaveChangesAsync();

            return ingrediente;
        }
    }
}
