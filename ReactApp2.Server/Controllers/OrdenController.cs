using AutoMapper;
using CoffeHouse.Server.Models.Custom;
using CoffeHouse.Server.Servicios;
using Microsoft.AspNetCore.Mvc;

namespace CoffeHouse.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdenController : ControllerBase
    {
        private readonly IRepositorioOrden _repositorioOrden;
        private readonly IMapper mapper;

        public OrdenController(IRepositorioOrden repositorioOrden, IMapper mapper)
        {
            _repositorioOrden = repositorioOrden;
            this.mapper = mapper;
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
                return NotFound(new { error = $"orden con el {id} no encontrada" });
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
