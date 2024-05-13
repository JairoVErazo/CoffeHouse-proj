using CoffeHouse.Server.Models.Dto_s;
using CoffeHouse.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using CoffeHouse.Server.Servicios;
using CoffeHouse.Server.Models.Custom;
using COFFEHOUSE.Server.Servicios;
namespace CoffeHouse.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioStore _userStore;
        private readonly IAutorizacionService _autorizacion;

        public UsuarioController(IUsuarioStore userStore,
                                 IAutorizacionService autorizacion)
        {
            _userStore = userStore;
            _autorizacion = autorizacion;
        }


        [HttpPost]

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


        [HttpPost("login")]
        public async Task<IActionResult> Login(AutorizacionRequest request)
        {
            if(await _autorizacion.UsuarioEsActivo(request))
            {
                var response = await _autorizacion.DevolverToken(request);

                return Ok(response);
            }

            return BadRequest(_autorizacion.CreateErrorResult("usuario inactivo", "Usuario inactivo, porfavor comuniquese con su gerente para activar su cuenta"));
        }

    }
}
