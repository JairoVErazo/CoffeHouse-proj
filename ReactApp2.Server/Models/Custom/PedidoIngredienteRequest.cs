namespace CoffeHouse.Server.Models.Custom
{
    public class PedidoIngredienteRequest
    {
        public int IdPedido { get; set; }

        public int Cantidad { get; set; }

        public DateOnly FechaPedido { get; set; }

        public decimal PrecioUnitario { get; set; }

        public int IdIngrediente { get; set; }
    }
}
