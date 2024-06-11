namespace CoffeHouse.Server.Dto_s
{
    public class RecetaDTO
    {
        public int Id { get; set; }
        public string? Nombre { get; set; }

        public string? Descripcion { get; set; }

        public decimal Porciones { get; set; }

        public decimal CostoTotal { get; set; }
    }
}
