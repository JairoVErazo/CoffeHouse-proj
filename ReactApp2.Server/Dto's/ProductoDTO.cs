using CoffeHouse.Server.Models;

namespace CoffeHouse.Server.Dto_s
{
    public class ProductoDTO
    {
        public int IdProducto { get; set; }
        public int IdCategoria { get; set; }
        public string? Categoria { get; set; }
        public string? NombreProducto { get; set; }
        public decimal Precio { get; set; }
        public bool DeTemporada { get; set; }
        public bool Disponible { get; set; }
        public string? Imagen { get; set; }
        public string? Descripcion { get; set; }
        public List<RecetaDTO> Recetas { get; set; } = new List<RecetaDTO>();
    }
}

