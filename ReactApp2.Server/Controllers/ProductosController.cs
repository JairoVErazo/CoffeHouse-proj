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
    public class ProductosController : ControllerBase
    {
        private readonly IRepositorioProductos _repositorioProductos;
        private readonly IMapper mapper;

        public ProductosController(IRepositorioProductos repositorioProductos, IMapper mapper)
        {
            _repositorioProductos = repositorioProductos;
            this.mapper = mapper;
        }


        [HttpGet]
        public async Task<IActionResult> ListarProductos()
        {
            var productos = await _repositorioProductos.ObtenerProductos();

            var listarProductos = mapper.Map<IEnumerable<ProductoDTO>>(productos);

            return Ok(listarProductos);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> ObtenerDetalleProducto(int id)
        {
            var producto = await _repositorioProductos.ObtenerProductoDetalles(id);

            var productoPublico = mapper.Map<ProductoDTO>(producto);

            return Ok(productoPublico);
        }
    }
}
