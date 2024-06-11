namespace CoffeHouse.Server.Models.Custom
{
    public class IngredienteRequest
    {
        public string? Nombre { get; set; }

        public DateOnly? Caducidad { get; set; }

        public decimal? PrecioUnitario { get; set; }

        public decimal? Existencias { get; set; }

        public string? UnidadMedida { get; set; }
    }
}
