using System;
using System.Collections.Generic;

namespace CoffeHouse.Server.Models;

public partial class Orden
{
    public int IdOrden { get; set; }

    public string NombreCliente { get; set; } = null!;

    public string? Comentarios { get; set; }

    public int IdUsuario { get; set; }

    public int IdEstado { get; set; }

    public TimeOnly HoraRecibida { get; set; }

    public TimeOnly? HoraDespacho { get; set; }

    public DateOnly Fecha { get; set; }

    public decimal PrecioFinal { get; set; }

    public virtual EstadoOrden? IdEstadoNavigation { get; set; }
  
    public virtual Usuario? IdUsuarioNavigation { get; set; }
   
}
