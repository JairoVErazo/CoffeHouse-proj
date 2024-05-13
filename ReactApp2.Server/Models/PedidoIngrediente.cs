using System;
using System.Collections.Generic;

namespace CoffeHouse.Server.Models;

public partial class PedidoIngrediente
{
    public int IdPedido { get; set; }

    public int Cantidad { get; set; }

    public DateOnly FechaPedido { get; set; }

    public decimal PrecioUnitario { get; set; }

    public int IdIngrediente { get; set; }

    public virtual Ingrediente IdIngredienteNavigation { get; set; } = null!;
}
