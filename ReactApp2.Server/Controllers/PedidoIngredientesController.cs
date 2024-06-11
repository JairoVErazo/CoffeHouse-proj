﻿using AutoMapper;
using CoffeHouse.Server.Models;
using CoffeHouse.Server.Servicios;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CoffeHouse.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidoIngredientesController : ControllerBase
    {
        private readonly IRepositorioPedidoIngredientes _repositorioPedidoIngredientes;
        private readonly IMapper _mapper;

        public PedidoIngredientesController(IRepositorioPedidoIngredientes repositorioPedidoIngredientes, IMapper mapper)
        {
            _repositorioPedidoIngredientes = repositorioPedidoIngredientes;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> ListarPedidoIngredientes()
        {
            var pedidoingredientes = await _repositorioPedidoIngredientes.ObtenerPedidoIngredientes();
            return Ok(pedidoingredientes);
        }

        [HttpPost]
        public async Task<IActionResult> CrearPedidoIngredientes([FromBody] PedidoIngrediente request)
        {
            if (request == null)
            {
                return BadRequest(new { error = "Request is null" });
            }

            var pedidoingredientes = await _repositorioPedidoIngredientes.CrearPedidoIngredientes(request);
            return Ok(pedidoingredientes);
        }
    }
}