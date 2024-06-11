using CoffeHouse.Server.Models.Custom;
using CoffeHouse.Server.Models;
using AutoMapper;
using CoffeHouse.Server.Dto_s;
using Microsoft.EntityFrameworkCore;

namespace CoffeHouse.Server.Servicios
{
    public interface IRepositorioReceta
    {
        Task<IEnumerable<RecetaDTO>> ObtenerReceta();
        Task<Receta> CrearReceta(CrearRecetaRequest receta);
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

        public async Task<Receta> CrearReceta(CrearRecetaRequest receta)
        {

            var nuevaReceta = new Receta()
            {
                Nombre = receta.Nombre,
                Descripcion = receta.Descripcion,
                Porciones = receta.Porciones,
                CostoTotal = receta.CostoTotal,
                IdProducto = receta.IdProducto
                
            };

            await _context.AddAsync(nuevaReceta);
            await _context.SaveChangesAsync();

            return nuevaReceta;
        }

        public Task<IEnumerable<RecetaDTO>> ObtenerReceta()
        {
            throw new NotImplementedException();
        }

        
    }
}
