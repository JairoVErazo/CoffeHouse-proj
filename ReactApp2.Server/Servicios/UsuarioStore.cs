using CoffeHouse.Server.Models.Dto_s;
using CoffeHouse.Server.Models;
using Microsoft.AspNetCore.Identity;

namespace CoffeHouse.Server.Servicios
{
    public interface IUsuarioStore
    {
        Task<Usuario> CrearUsuario(UsuarioDTO usuarioDTO);
    }
    public class UsuarioStore : IUsuarioStore
    {
        private readonly CoffehouseContext _context;

        public UsuarioStore(CoffehouseContext context)
        {
            _context = context;
        }



        public async Task<Usuario> CrearUsuario(UsuarioDTO usuarioDTO)
        {
            DateOnly hoy = DateOnly.FromDateTime(dateTime: DateTime.Now);

            var passwordHasher = new PasswordHasher<Usuario>();


            var usuarioNuevo = new Usuario()
            {
                Nombre = usuarioDTO.Nombre,
                Apellido = usuarioDTO.Apellido,
                NombreUsuario = usuarioDTO.NombreUsuario,
                Estado = usuarioDTO.Estado,
                IdRol = usuarioDTO.IdRol,
                FechaCreacion = hoy,

            };

            var claveHash = passwordHasher.HashPassword(usuarioNuevo, usuarioDTO.Contraseña);
            usuarioNuevo.Contraseña = claveHash;

            await _context.AddAsync(usuarioNuevo);
            await _context.SaveChangesAsync();

            return usuarioNuevo;
        }
    }
}
