using CoffeHouse.Server.Models;
using CoffeHouse.Server.Models.Custom;

namespace CoffeHouse.Server.Servicios
{
    public interface IRepositorioOrden
    {

    }
    public class RepositorioOrden
    {
        private readonly CoffehouseContext _context;

        public RepositorioOrden(CoffehouseContext context)
        {
            _context = context;
        }


        public async Task<int> CrearOrden( CrearOrdenRequest request)
        {
            var orden = new Orden()
            {
                NombreCliente = request.NombreCliente,
                Comentarios = request.Comentarios,
                IdUsuario = request.IdUsuario,
                IdEstado  = 1,

            };

        }
    }
}
