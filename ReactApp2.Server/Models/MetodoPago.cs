using System;
using System.Collections.Generic;

namespace CoffeHouse.Server.Models;

public partial class MetodoPago
{
    public int IdMetodopago { get; set; }

    public string Metodo { get; set; } = null!;

    public virtual ICollection<Factura> Facturas { get; set; } = new List<Factura>();
}
