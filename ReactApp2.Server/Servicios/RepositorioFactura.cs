using AutoMapper;
using CoffeHouse.Server.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CoffeHouse.Server.Servicios
{
    public interface IRepositorioFactura
    {
        Task<Factura> CrearFactura(Factura factura);
        Task<IEnumerable<Factura>> ObtenerFactura();
    }

    public class RepositorioFactura : IRepositorioFactura
    {
        private readonly CoffehouseContext _context;
        private readonly IMapper _mapper;

        public RepositorioFactura(CoffehouseContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<Factura>> ObtenerFactura()
        {
            var factura = await _context.Facturas.ToListAsync();
            return factura;
        }

        public async Task<Factura> CrearFactura(Factura factura)
        {
            DateOnly hoy = DateOnly.FromDateTime(DateTime.Now);
            var nuevaFactura = new Factura()
            {
                IdOrden = factura.IdOrden,
                Fecha = hoy,
                Total = factura.Total,
                IdMetodopago = factura.IdMetodopago
            };

            await _context.AddAsync(nuevaFactura);
            await _context.SaveChangesAsync();

            return nuevaFactura;
        }
    }
}
