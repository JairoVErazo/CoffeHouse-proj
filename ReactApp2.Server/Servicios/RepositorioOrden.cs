using AutoMapper;
using CoffeHouse.Server.Models;
using CoffeHouse.Server.Models.Custom;
using Microsoft.AspNetCore.Http.HttpResults;

namespace CoffeHouse.Server.Servicios
{
    public interface IRepositorioOrden
    {
        Task<int> CrearOrden(CrearOrdenRequest request);

    }
    public class RepositorioOrden : IRepositorioOrden
    {
        private readonly CoffehouseContext _context;
        private readonly IMapper _mapper;


        public RepositorioOrden(CoffehouseContext context,IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        public async Task<int> CrearOrden( CrearOrdenRequest request)
        {
            DateOnly hoy = DateOnly.FromDateTime(dateTime: DateTime.Now);
            TimeOnly hora = TimeOnly.FromDateTime(DateTime.Now);
            var orden = new Orden()
            {
                NombreCliente = request.NombreCliente,
                Comentarios = request.Comentarios,
                IdUsuario = request.IdUsuario,
                IdEstado  = 2,
                Fecha = hoy,
                HoraRecibida=hora,
                PrecioFinal = 0
            };
            await _context.AddAsync(orden);
            await _context.SaveChangesAsync();

            return orden.IdOrden;
        }

        
    }
}
