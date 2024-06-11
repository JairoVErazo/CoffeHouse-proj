using AutoMapper;
using CoffeHouse.Server.Dto_s;
using CoffeHouse.Server.Models.Custom;
using CoffeHouse.Server.Servicios;
using COFFEHOUSE.Server.Servicios;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CoffeHouse.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecetaController : ControllerBase
    {
        private readonly IRepositorioReceta _repositorioReceta;
        private readonly IMapper _mapper;
        private object _context;

        public RecetaController(IRepositorioReceta repositorioReceta,
                                 IMapper mapper)
        {
            _repositorioReceta = repositorioReceta;
            _mapper = mapper;
        }

      

        [HttpPost]
        public async Task<IActionResult> CrearReceta(CrearRecetaRequest request)
        {

            var nuevaReceta = await _repositorioReceta.CrearReceta(request);

            return Ok(nuevaReceta);
        }


    }
}
