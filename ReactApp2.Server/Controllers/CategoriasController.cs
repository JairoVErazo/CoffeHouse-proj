using CoffeHouse.Server.Servicios;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoffeHouse.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriasController : ControllerBase
    {
        private readonly IRepositorioCategorias _repositorioCategorias;

        public CategoriasController( IRepositorioCategorias repositorioCategorias)
        {
            _repositorioCategorias = repositorioCategorias;
        }

        [HttpGet]
        public async Task<IActionResult> ObtenerCategorias()
        {
            var categorias = await _repositorioCategorias.ListarCategorias();

            return Ok(categorias);
        }
    }
}
