namespace CoffeHouse.Server.Models.Custom
{
    public class AutorizacionResponse
    {
        public int Id { get; set; }
        public int Rol {get; set; }
        public string? Token { get; set; }
        public bool Resultado { get; set; }
        public string? Mensaje { get; set; }
    }
}
