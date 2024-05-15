using AutoMapper;
using CoffeHouse.Server.Dto_s;
using CoffeHouse.Server.Models;
using CoffeHouse.Server.Models.Custom;
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


            return Ok(productos);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> ObtenerDetalleProducto(int id)
        {
            var producto = await _repositorioProductos.ObtenerProductoDetalles(id);

            var productoPublico = mapper.Map<ProductoDTO>(producto);

            return Ok(productoPublico);
        }


        [HttpPost]
        public async Task<IActionResult> CrearProducto(CrearProductoRequest request)
        {

            var nuevoProducto = await _repositorioProductos.CrearProducto(request);

            return Ok(nuevoProducto);
        }


        [HttpPut]
        public async Task<IActionResult> EditarProducto(int id, [FromBody] CrearProductoRequest request)
        {
            var producto = await _repositorioProductos.ObtenerProductoDetalles(id);

            producto.NombreProducto = request.NombreProducto;
            producto.DeTemporada = request.DeTemporada;
            producto.Disponible = request.Disponible;

            producto.Descripcion = request.Descripcion;

            return Ok(producto);

        }
    }
}
