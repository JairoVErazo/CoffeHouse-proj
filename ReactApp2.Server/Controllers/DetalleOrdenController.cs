using AutoMapper;
using CoffeHouse.Server.Models;
using CoffeHouse.Server.Models.Custom;
using CoffeHouse.Server.Servicios;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CoffeHouse.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DetalleOrdenController : ControllerBase
    {
        private readonly IRepositorioDetalleOrden _repositorioDetalleOrden;
        private readonly IMapper _mapper;

        public DetalleOrdenController(IRepositorioDetalleOrden repositorioDetalleOrden, IMapper mapper)
        {
            _repositorioDetalleOrden = repositorioDetalleOrden;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> ListarDetalleOrden()
        {
            var detalleorden = await _repositorioDetalleOrden.ObtenerDetalleOrden();
            return Ok(detalleorden);
        }

        [HttpPost]
        public async Task<IActionResult> CrearDetalleOrden( DetalleOrdenRequest request)
        {
          
            var detalleOrden = await _repositorioDetalleOrden.CrearDetalleOrden(request);
            return Ok(detalleOrden);
        }
    }
}
