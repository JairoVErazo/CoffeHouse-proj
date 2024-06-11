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
        Task<IEnumerable<Ingrediente>> ObtenerIngredientes();
        Task<Ingrediente> ObtenerIngredienteDetalles(int idIngrediente);
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

        public async Task<Ingrediente> ObtenerIngredienteDetalles(int idIngrediente)
        {
            var ingrediente = await _context.Ingredientes
                .Where(p => p.IdIngrediente == idIngrediente)
                .FirstOrDefaultAsync();

            return ingrediente;
        }
        public async Task<Ingrediente> CrearIngrediente(  Ingrediente ingrediente )
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
    }
}
