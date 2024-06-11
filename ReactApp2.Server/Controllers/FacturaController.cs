using AutoMapper;
using CoffeHouse.Server.Models;
using CoffeHouse.Server.Servicios;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CoffeHouse.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacturaController : ControllerBase
    {
        private readonly IRepositorioFactura _repositorioFactura;
        private readonly IMapper _mapper;

        public FacturaController(IRepositorioFactura repositorioFactura, IMapper mapper)
        {
            _repositorioFactura = repositorioFactura;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> ListarFactura()
        {
            var factura = await _repositorioFactura.ObtenerFactura();
            return Ok(factura);
        }

        [HttpPost]
        public async Task<IActionResult> CrearFactura([FromBody] Factura request)
        {
            if (request == null)
            {
                return BadRequest(new { error = "Request is null" });
            }

            var factura = await _repositorioFactura.CrearFactura(request);
            return Ok(factura);
        }
    }
}
