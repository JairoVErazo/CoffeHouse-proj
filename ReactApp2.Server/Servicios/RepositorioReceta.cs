using CoffeHouse.Server.Models.Custom;
using CoffeHouse.Server.Models;
using AutoMapper;
using CoffeHouse.Server.Dto_s;
using Microsoft.EntityFrameworkCore;

namespace CoffeHouse.Server.Servicios
{
    public interface IRepositorioReceta
    {
        Task<IEnumerable<RecetaDTO>> ObtenerRecetasDTO();
        Task<Receta> CrearReceta(CrearRecetaRequest receta);
        Task<IEnumerable<Receta>> ObtenerRecetas();
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

        public async Task<IEnumerable<Receta>> ObtenerRecetas()
        {
            return await _context.Recetas.ToListAsync();
        }

        public async Task<IEnumerable<RecetaDTO>> ObtenerRecetasDTO()
        {
            var recetas = await _context.Recetas.ToListAsync();
            return _mapper.Map<IEnumerable<RecetaDTO>>(recetas);
        }

        Task<IEnumerable<RecetaDTO>> IRepositorioReceta.ObtenerRecetasDTO()
        {
            throw new NotImplementedException();
        }
    }
}
