namespace CoffeHouse.Server.Models.Custom
{
    public class CrearRecetaRequest
    {
       

        public string Nombre { get; set; } = null!;

        public string? Descripcion { get; set; }

        public decimal Porciones { get; set; }

        public decimal CostoTotal { get; set; }

        public int IdProducto { get; set; }

    }
}
