using AutoMapper;
using CoffeHouse.Server.Models;
using CoffeHouse.Server.Models.Custom;
using CoffeHouse.Server.Servicios;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace CoffeHouse.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdenController : ControllerBase
    {
        private readonly IRepositorioOrden _repositorioOrden;
        private readonly IMapper mapper;
        private readonly CoffehouseContext _context;


        public OrdenController(IRepositorioOrden repositorioOrden, IMapper mapper, CoffehouseContext context)
        {
            _repositorioOrden = repositorioOrden;
            this.mapper = mapper;
            _context = context;

        }

        [HttpGet("detalle")]
        public async Task<IActionResult> ObtenerOrdenesConDetalle()
        {
            var ordenesConDetalle = await _context.Orden
                .Where(o => o.IdEstado == 2)
                .Select(o => new
                {
                    o.IdOrden,
                    o.NombreCliente,
                    o.Comentarios,
                    o.IdUsuario,
                    o.IdEstado,
                    o.HoraRecibida,
                    o.HoraDespacho,
                    o.Fecha,
                    o.PrecioFinal,
                    DetallesOrden = _context.DetalleOrden
                        .Where(d => d.IdOrden == o.IdOrden)
                        .Select(d => new
                        {
                            d.IdReceta,
                            d.CantidadProductos,
                            d.PrecioTotal,
                            Receta = _context.Recetas
                                .Where(r => r.IdReceta == d.IdReceta)
                                .Select(r => new
                                {
                                    r.IdReceta,
                                    r.Nombre,
                                    r.Descripcion,
                                    r.Porciones,
                                    
                                    // Añadir más campos según sea necesario
                                })
                                .FirstOrDefault()
                        }).ToList()
                })
                .ToListAsync();

            return Ok(ordenesConDetalle);
        }


        [HttpGet]
        public async Task<IActionResult> ListarOrden()
        {
            var orden = await _repositorioOrden.ObtenerOrden();
            return Ok(orden);
        }

       
        [HttpGet("{id}")]
        public async Task<IActionResult> ObtenerOrdenbyId(int id)
        {
            var orden = await _repositorioOrden.ObtenerOrdenbyId(id);
            if (orden == null)
            {
                return NotFound(new { error = "La orden con el {id} no fue encontrada" });
            }
            return Ok(orden);
        }

        [HttpPost]
        public async Task<IActionResult> CrearOrden(CrearOrdenRequest request)
        {
            var nuevaOrden = await _repositorioOrden.CrearOrden(request);
            return Ok(nuevaOrden);
        }
    }
}
