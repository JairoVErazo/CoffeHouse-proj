namespace CoffeHouse.Server.Models.Custom
{
    public class DetalleOrdenRequest
    {
        public int IdReceta { get; set; }

        public int IdOrden { get; set; }

        public int CantidadProductos { get; set; }

        public decimal PrecioTotal { get; set; }

    }
}
