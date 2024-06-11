using AutoMapper;
using CoffeHouse.Server.Dto_s;
using CoffeHouse.Server.Models;
using CoffeHouse.Server.Models.Custom;
using CoffeHouse.Server.Servicios;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CoffeHouse.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecetaController : ControllerBase
    {
        private readonly IRepositorioReceta _repositorioReceta;
        private readonly IMapper _mapper;

        public RecetaController(IRepositorioReceta repositorioReceta, IMapper mapper)
        {
            _repositorioReceta = repositorioReceta;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<IActionResult> CrearReceta(Recetarequest request)
        {
            var nuevaReceta = await _repositorioReceta.CrearReceta(request);
            return Ok(nuevaReceta);
        }
    }
}
