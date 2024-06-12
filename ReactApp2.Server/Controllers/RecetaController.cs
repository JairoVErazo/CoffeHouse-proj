using AutoMapper;
using CoffeHouse.Server.Servicios;
using COFFEHOUSE.Server.Servicios;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoffeHouse.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecetaController : ControllerBase
    {
        private readonly IRepositorioReceta _repositorioReceta;
        private readonly IMapper _mapper;

        public RecetaController(IRepositorioReceta repositorioReceta,
                                 IMapper mapper)
        {
            _repositorioReceta = repositorioReceta;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> DispararTrigger()
        {
           await _repositorioReceta.DispararTrigger();
            return Ok(0);
        }
        



    }
}
