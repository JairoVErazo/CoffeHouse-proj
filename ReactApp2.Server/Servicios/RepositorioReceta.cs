using CoffeHouse.Server.Models.Custom;
using CoffeHouse.Server.Models;
using AutoMapper;
using CoffeHouse.Server.Dto_s;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.HttpResults;

namespace CoffeHouse.Server.Servicios
{
    public interface IRepositorioReceta
    {
        Task<IEnumerable<RecetaDTO>> ObtenerReceta();
        Task<Receta> CrearReceta(Receta receta);
    }

    public class RepositorioReceta : IRepositorioReceta
    {
        private readonly CoffehouseContext _context;
        private readonly IMapper _mapper;

        public RepositorioReceta(CoffehouseContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Receta> CrearReceta(Receta receta)
        {
            var nuevaReceta = new Receta
            {
                Nombre = receta.Nombre,
                Descripcion = receta.Descripcion,
                Porciones = receta.Porciones,
                CostoTotal = 0,
                IdProducto = receta.IdProducto
            };

            await _context.AddAsync(nuevaReceta);
            await _context.SaveChangesAsync();

            return nuevaReceta;
        }

        public Task<Receta> CrearReceta(CrearRecetaRequest receta)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<RecetaDTO>> ObtenerReceta()
        {
            throw new NotImplementedException();
        }
    }
}
