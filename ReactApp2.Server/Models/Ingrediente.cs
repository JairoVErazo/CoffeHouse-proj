using System;
using System.Collections.Generic;

namespace CoffeHouse.Server.Models;

public partial class Ingrediente
{
    public int IdIngrediente { get; set; }

    public string Nombre { get; set; } = null!;

    public DateOnly Caducidad { get; set; }

    public decimal PrecioUnitario { get; set; }

    public decimal Existencias { get; set; }

    public string UnidadMedida { get; set; } = null!;

    public virtual ICollection<PedidoIngrediente> PedidoIngredientes { get; set; } = new List<PedidoIngrediente>();
}
