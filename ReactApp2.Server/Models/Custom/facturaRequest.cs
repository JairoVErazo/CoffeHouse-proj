namespace CoffeHouse.Server.Models.Custom
{
    public class facturaRequest
    {

        public int IdFactura { get; set; }

        public int IdOrden { get; set; }

        public DateOnly Fecha { get; set; }

        public decimal Total { get; set; }

        public int IdMetodopago { get; set; }
    }
}
