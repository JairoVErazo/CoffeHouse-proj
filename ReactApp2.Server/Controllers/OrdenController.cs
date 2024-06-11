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

        [HttpPost]
        public async Task<IActionResult> CrearOrden(CrearOrdenRequest request)
        {

            var nuevaOrden = await _repositorioOrden.CrearOrden(request);

            return Ok(nuevaOrden);
        }
    }
}
