using Microsoft.AspNetCore.Mvc;
using CoffeHouse.Server.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CoffeHouse.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriasController : ControllerBase
    {
        private readonly CoffehouseContext _context;

        public CategoriasController(CoffehouseContext context)
        {
            _context = context;
        }

        // GET: api/Categorias
        [HttpGet]
        public async Task<IActionResult> GetCategorias()
        {
            var categorias = await _context.CategoriaProductos.ToListAsync();
            return Ok(categorias); // Retornar datos como JSON
        }
    }
}
