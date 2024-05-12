using System;
using System.Collections.Generic;

namespace CoffeHouse.Server.Models;

public partial class EstadoOrden
{
    public int IdEstado { get; set; }

    public string Estado { get; set; } = null!;

    public virtual ICollection<Orden> Ordens { get; set; } = new List<Orden>();
}
