using CoffeHouse.Server.Models;

namespace CoffeHouse.Server.Servicios
{
    public interface IRepositorioIngredientes
    {

    }
    public class RepositorioIngredientes: IRepositorioIngredientes
    {
        private readonly CoffehouseContext _context;

        public RepositorioIngredientes(CoffehouseContext context)
        {
            _context = context;
        }
    }
}
