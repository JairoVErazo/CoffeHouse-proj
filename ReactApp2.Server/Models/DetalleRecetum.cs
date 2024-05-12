using System;
using System.Collections.Generic;

namespace CoffeHouse.Server.Models;

public partial class DetalleRecetum
{
    public int IdIngrediente { get; set; }

    public int IdRecetas { get; set; }

    public decimal CantidadUnidades { get; set; }

    public decimal CostoPerPorcion { get; set; }

    public virtual Ingrediente IdIngredienteNavigation { get; set; } = null!;

    public virtual Receta IdRecetasNavigation { get; set; } = null!;
}
