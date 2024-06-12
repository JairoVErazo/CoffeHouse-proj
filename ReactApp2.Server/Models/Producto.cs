using System;
using System.Collections.Generic;

namespace CoffeHouse.Server.Models;

public partial class Producto
{
    public int IdProducto { get; set; }

    public int IdCategoria { get; set; }

    public string NombreProducto { get; set; } = null!;

    public decimal Precio { get; set; }

    public bool DeTemporada { get; set; }

    public bool Disponible { get; set; }

    public string? Imagen { get; set; }

    public string Descripcion { get; set; } = null!;

    public decimal? Ganancia { get; set; }

    public int? Riesgo { get; set; }

    public virtual CategoriaProducto IdCategoriaNavigation { get; set; } = null!;

    public virtual ICollection<Receta> Receta { get; set; } = new List<Receta>();
}
