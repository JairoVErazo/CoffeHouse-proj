namespace CoffeHouse.Server.Models.Custom
{
    public class CrearOrdenRequest
    {
        public string NombreCliente { get; set; } = null!;

        public string? Comentarios { get; set; }

        public int IdUsuario { get; set; }

        public TimeOnly HoraRecibida { get; set; }

        public TimeOnly? HoraDespacho { get; set; }

        public DateOnly Fecha { get; set; }

        public decimal PrecioFinal { get; set; }
    }
}
