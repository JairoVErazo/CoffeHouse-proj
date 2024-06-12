namespace CoffeHouse.Server.Models.Custom
{
    public class ActualizarOrdenRequest
    {
        public int NuevoEstado { get; set; }
        public string HoraDespacho { get; set; }
        public decimal PrecioFinal { get; set; }
    }
}