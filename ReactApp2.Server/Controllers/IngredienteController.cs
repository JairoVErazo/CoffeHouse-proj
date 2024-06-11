using AutoMapper;
using CoffeHouse.Server.Dto_s;
using CoffeHouse.Server.Models;
using CoffeHouse.Server.Servicios;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoffeHouse.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredienteController : ControllerBase
    {
        private readonly IRepositorioIngredientes _repositorioIngredientes;

        public IngredienteController( IRepositorioIngredientes repositorioIngredientes)
        {
            _repositorioIngredientes = repositorioIngredientes;
        }


        [HttpGet]
        public async Task<IActionResult> ListarIngredientes() 
        {
            var ingredientes = await _repositorioIngredientes.ObtenerIngredientes();

            return Ok(ingredientes);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> ObtenerDetalleProducto(int id)
        {
            var ingrediente = await _repositorioIngredientes.ObtenerIngredienteDetalles(id);

            return Ok(ingrediente);
        }

        [HttpPost]
        public async Task<IActionResult> CrearIngrediente(Ingrediente request)
        {
            var ingrediente = await _repositorioIngredientes.CrearIngrediente(request);

            return Ok(ingrediente);
        }
    }
}
