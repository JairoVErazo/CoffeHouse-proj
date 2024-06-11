using AutoMapper;
using CoffeHouse.Server.Models.Custom;
using CoffeHouse.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace CoffeHouse.Server.Servicios
{
    public interface IRepositorioDetalleOrden
    {
        Task<DetalleOrden> CrearDetalleOrden(DetalleOrdenRequest detalleOrden);
        Task<IEnumerable<DetalleOrden>> ObtenerDetalleOrden();
    }

    public class RepositorioDetalleOrden : IRepositorioDetalleOrden
    {
        private readonly CoffehouseContext _context;
        private readonly IMapper _mapper;

        public RepositorioDetalleOrden(CoffehouseContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<DetalleOrden>> ObtenerDetalleOrden()
        {
            var detalleorden = await _context.DetalleOrden.ToListAsync();
            return detalleorden;
        }

        public async Task<DetalleOrden> CrearDetalleOrden(DetalleOrdenRequest detalleOrden)
        {
            var nuevoDetalleOrden = new DetalleOrden()
            {   IdOrden = detalleOrden.IdOrden,
                IdReceta = detalleOrden.IdReceta,
                CantidadProductos = detalleOrden.CantidadProductos,
                PrecioTotal = detalleOrden.PrecioTotal,
            };

             _context.Add(nuevoDetalleOrden);
            await _context.SaveChangesAsync();

            return nuevoDetalleOrden;
        }
    }
}
