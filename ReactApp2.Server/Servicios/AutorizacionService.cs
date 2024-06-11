using CoffeHouse.Server.Models;
using CoffeHouse.Server.Models.Custom;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace COFFEHOUSE.Server.Servicios
{
    public interface IAutorizacionService
    {
        AutorizacionResponse CreateErrorResult(string error, string message);
        Task<AutorizacionResponse> DevolverToken(AutorizacionRequest request);
        Task<bool> UsuarioEsActivo(AutorizacionRequest request);
    }
    public class AutorizacionService: IAutorizacionService
    {
        private readonly CoffehouseContext _context;
        private readonly IConfiguration _configuration;
        private readonly IPasswordHasher<Usuario> passwordHasher;

        public AutorizacionService( CoffehouseContext context,
                                    IConfiguration configuration,
                                    IPasswordHasher<Usuario> passwordHasher)
        {
            _context = context;
            _configuration = configuration;
            this.passwordHasher = passwordHasher;
        }

        private string GenerarToken(string idUsuario) 
        {
            var key = _configuration.GetValue<string>("JwtSettings:key");
            var keyBytes = Encoding.ASCII.GetBytes(key);

            var claims = new ClaimsIdentity();
            claims.AddClaim(new Claim(ClaimTypes.NameIdentifier, idUsuario));

            var credencialesToken = new SigningCredentials(
                new SymmetricSecurityKey(keyBytes),
                SecurityAlgorithms.HmacSha256Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claims,
                Expires = DateTime.UtcNow.AddMinutes(30),
                SigningCredentials = credencialesToken
            };


            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenConfig = tokenHandler.CreateToken(tokenDescriptor);

            string tokenCreado = tokenHandler.WriteToken(tokenConfig);


            return tokenCreado;
        }


        public async Task <AutorizacionResponse> DevolverToken(AutorizacionRequest request)
        {
            var usaurio = await ObtenerUsuarioPorUserName(request.NombreUsuario);

            if(usaurio is null)
            {
                return await Task.FromResult<AutorizacionResponse>(null);

            }


            string claveHasheada = ObtenerClaveHash(usaurio).ToString();
            var credencialesVerificadas = passwordHasher.VerifyHashedPassword(usaurio, claveHasheada, request.Clave);



            if(credencialesVerificadas is not PasswordVerificationResult.Success)
            {
                return await Task.FromResult(CreateErrorResult("Credenciales invalidas", "La contraseña es incorrecta"));
            }


            string tokenCreado = GenerarToken(usaurio.IdUsuario.ToString());

            var response = new AutorizacionResponse()
            {
                Id=usaurio.IdUsuario,
                Token = tokenCreado,
                Resultado = true,
                Mensaje = "Ok"
            };

            return response;
        }


        public async Task<Usuario> ObtenerUsuarioPorUserName(string userName)
        {
            if(userName == null)
            {

                return await Task.FromResult<Usuario>(null);
            }

            var usuario = _context.Usuarios.FirstOrDefault(x => x.NombreUsuario.ToString() == userName);

            return usuario;
        }


        private string ObtenerClaveHash(Usuario usuario)
        {
            string clave = _context.Usuarios.Where(u => u.IdUsuario == usuario.IdUsuario)
                                    .Select(u => u.Contraseña)
                                    .FirstOrDefault();

            return clave;
        }

        public AutorizacionResponse CreateErrorResult(string error, string message)
        {
            return new AutorizacionResponse
            {
                Token = null,
                Resultado = false,
                Mensaje = message
            };
        }

        public async Task<bool> UsuarioEsActivo(AutorizacionRequest request)
        {
            var usuario = await _context.Usuarios.FirstOrDefaultAsync(x => x.NombreUsuario.Equals(request.NombreUsuario));


            if (usuario.Estado is true)
                return true;

            return false;
        } 

    }
}
