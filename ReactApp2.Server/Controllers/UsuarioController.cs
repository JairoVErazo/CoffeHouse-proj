﻿using CoffeHouse.Server.Models.Dto_s;
using CoffeHouse.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using CoffeHouse.Server.Servicios;
namespace CoffeHouse.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioStore _userStore;

        public UsuarioController(IUsuarioStore userStore)
        {
            _userStore = userStore;
        }


        [HttpPost("registro")]

        public async Task<IActionResult> RegistrarUsuario([FromBody] UsuarioDTO usuarioDTO)
        {
            var usuario = new Usuario()
            {
                Nombre = usuarioDTO.Nombre,
                Apellido = usuarioDTO.Apellido,
                NombreUsuario = usuarioDTO.NombreUsuario,
                Contraseña = usuarioDTO.Contraseña,
                Estado = usuarioDTO.Estado,
                IdRol = usuarioDTO.IdRol,
            };

            var resultado = await _userStore.CrearUsuario(usuarioDTO);

            if (resultado is Usuario)
            {
                return Ok(resultado);
            }

            return BadRequest();
        }

    }
}
