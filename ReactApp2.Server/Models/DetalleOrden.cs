using System;
using System.Collections.Generic;

namespace CoffeHouse.Server.Models;

public partial class DetalleOrden
{
    public int IdReceta { get; set; }

    public int IdOrden { get; set; }

    public int CantidadProductos { get; set; }

    public decimal PrecioTotal { get; set; }

    public virtual Orden IdOrdenNavigation { get; set; } = null!;

    public virtual Receta IdRecetaNavigation { get; set; } = null!;
}
