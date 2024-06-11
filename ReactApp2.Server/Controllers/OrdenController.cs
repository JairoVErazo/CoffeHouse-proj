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
                .GroupJoin(
                    _context.DetalleOrden,
                    o => o.IdOrden,
                    d => d.IdOrden,
                    (o, detalles) => new { o, detalles }
                )
                .SelectMany(
                    od => od.detalles.DefaultIfEmpty(),
                    (od, detalle) => new
                    {
                        od.o.IdOrden,
                        od.o.NombreCliente,
                        od.o.Comentarios,
                        od.o.IdUsuario,
                        od.o.IdEstado,
                        od.o.HoraRecibida,
                        od.o.HoraDespacho,
                        od.o.Fecha,
                        od.o.PrecioFinal,
                        DetalleOrden = detalle != null ? new
                        {
                            detalle.IdReceta,
                            detalle.CantidadProductos,
                            detalle.PrecioTotal
                        } : null
                    }
                )
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
