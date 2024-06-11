using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoffeHouse.Server.Models;

public partial class DetalleOrden
{
    
    public int IdReceta { get; set; }

    public int IdOrden { get; set; }

    public int CantidadProductos { get; set; }

    public decimal PrecioTotal { get; set; }

    public virtual Orden? IdOrdenNavigation { get; set; } 

    public virtual Receta? IdRecetaNavigation { get; set; } 
}
