using System;
using System.Collections.Generic;

namespace CoffeHouse.Server.Models;

public partial class Factura
{
    public int IdFactura { get; set; }

    public int IdOrden { get; set; }

    public DateOnly Fecha { get; set; }

    public decimal Total { get; set; }

    public int IdMetodopago { get; set; }

    public virtual MetodoPago? IdMetodopagoNavigation { get; set; }
  
}
