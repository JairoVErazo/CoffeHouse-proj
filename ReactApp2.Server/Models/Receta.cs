using System;
using System.Collections.Generic;

namespace CoffeHouse.Server.Models;

public partial class Receta
{
    public int IdReceta { get; set; }

    public string Nombre { get; set; } = null!;

    public string? Descripcion { get; set; }

    public decimal Porciones { get; set; }

    public decimal CostoTotal { get; set; }

    public int IdProducto { get; set; }

    public virtual Producto? IdProductoNavigation { get; set; }
}
