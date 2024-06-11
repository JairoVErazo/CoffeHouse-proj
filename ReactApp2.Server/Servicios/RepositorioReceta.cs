using CoffeHouse.Server.Models.Custom;
using CoffeHouse.Server.Models;
using AutoMapper;

namespace CoffeHouse.Server.Servicios
{
    public interface IRepositorioReceta
    {
        
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




    }
}
