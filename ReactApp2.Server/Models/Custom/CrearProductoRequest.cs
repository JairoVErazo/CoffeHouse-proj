namespace CoffeHouse.Server.Models.Custom
{
    public class CrearProductoRequest
    {
        public int IdCategoria { get; set; }
        public string? NombreProducto { get; set; }
        public bool DeTemporada { get; set; }
        public bool Disponible { get; set; }
        public IFormFile? Imagen { get; set; }
        public string? Descripcion { get; set; }
        public decimal Precio { get; set; }

       
    }
}
