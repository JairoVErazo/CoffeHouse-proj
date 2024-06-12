using CoffeHouse.Server.Models.Custom;
using CoffeHouse.Server.Models;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace CoffeHouse.Server.Servicios
{
    public interface IRepositorioReceta
    {
        Task DispararTrigger();
    }
    public class RepositorioReceta : IRepositorioReceta
    {
        private readonly CoffehouseContext _context;
        private readonly IMapper _mapper;

        public RepositorioReceta(CoffehouseContext context,
                                   IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        public async Task DispararTrigger()
        {
            string ActualizarRecetas = "ActualizarRecetas";
            await _context.Database.ExecuteSqlAsync($"EXEC {nameof(ActualizarRecetas)}");
        }


    }
}
