using CoffeHouse.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace CoffeHouse.Server.Servicios
{
    public interface IRepositorioCategorias
    {
        Task<IEnumerable<CategoriaProducto>> ListarCategorias();
    }
    public class RepositorioCategorias: IRepositorioCategorias
    {
        private readonly CoffehouseContext _context;

        public RepositorioCategorias(CoffehouseContext context)
        {
            _context = context;
        }


        public async Task<IEnumerable<CategoriaProducto>> ListarCategorias()
        {
            var categorias = await _context.CategoriaProductos.ToListAsync();
        
            return categorias;
        }
    }
}
