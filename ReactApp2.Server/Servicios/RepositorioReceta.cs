using CoffeHouse.Server.Models.Custom;
using CoffeHouse.Server.Models;
using AutoMapper;
using CoffeHouse.Server.Dto_s;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.Data.SqlClient;

namespace CoffeHouse.Server.Servicios
{
    public interface IRepositorioReceta
    {
        Task<IEnumerable<RecetaDTO>> ObtenerReceta();
        Task<Receta> CrearReceta(Recetarequest receta);
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

        public async Task<Receta> CrearReceta(Recetarequest receta)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    // Ejecutar el procedimiento almacenado para insertar la receta
                    await _context.Database.ExecuteSqlRawAsync(
                        "EXEC InsertReceta @Nombre, @Descripcion, @Porciones, @IdProducto",
                        new SqlParameter("@Nombre", receta.Nombre),
                        new SqlParameter("@Descripcion", receta.Descripcion),
                        new SqlParameter("@Porciones", receta.Porciones),
                        new SqlParameter("@IdProducto", receta.IdProducto));

                    // Obtener el ID de la nueva receta insertada
                    var nuevaRecetaId = await _context.Recetas
                        .Where(r => r.Nombre == receta.Nombre && r.IdProducto == receta.IdProducto)
                        .OrderByDescending(r => r.IdReceta) // Ajusta esto al nombre correcto de la columna de clave primaria
                        .Select(r => r.IdReceta) // Ajusta esto al nombre correcto de la columna de clave primaria
                        .FirstOrDefaultAsync();

                    var nuevaReceta = await _context.Recetas.FindAsync(nuevaRecetaId);

                    await transaction.CommitAsync();
                    return nuevaReceta;
                }
                catch (Exception)
                {
                    await transaction.RollbackAsync();
                    throw;
                }
            }
        }






        public Task<IEnumerable<RecetaDTO>> ObtenerReceta()
        {
            throw new NotImplementedException();
        }
    }
}
