using AutoMapper;
using CoffeHouse.Server.Models;
using CoffeHouse.Server.Models.Custom;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CoffeHouse.Server.Servicios
{
    public interface IRepositorioPedidoIngredientes
    {
        Task<PedidoIngrediente> CrearPedidoIngredientes(PedidoIngredienteRequest pedidoingredientes);
        Task<IEnumerable<PedidoIngrediente>> ObtenerPedidoIngredientes();
    }

    public class RepositorioPedidoIngredientes : IRepositorioPedidoIngredientes
    {
        private readonly CoffehouseContext _context;
        private readonly IMapper _mapper;

        public RepositorioPedidoIngredientes(CoffehouseContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<PedidoIngrediente>> ObtenerPedidoIngredientes()
        {
            var pedidoingredientes = await _context.PedidoIngredientes.ToListAsync();
            return pedidoingredientes;
        }

        public async Task<PedidoIngrediente> CrearPedidoIngredientes(PedidoIngredienteRequest pedidoingredientes)
        {
            DateOnly hoy = DateOnly.FromDateTime(DateTime.Now);
            var nuevoPedidoIngredientes = new PedidoIngrediente()
            {
                Cantidad = pedidoingredientes.Cantidad,
                FechaPedido = hoy,
                PrecioUnitario = pedidoingredientes.PrecioUnitario,
                IdIngrediente = pedidoingredientes.IdIngrediente,
            };

            await _context.AddAsync(nuevoPedidoIngredientes);
            await _context.SaveChangesAsync();

            return nuevoPedidoIngredientes;
        }
    }
}
