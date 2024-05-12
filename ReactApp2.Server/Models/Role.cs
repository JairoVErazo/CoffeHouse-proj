using System;
using System.Collections.Generic;

namespace CoffeHouse.Server.Models;

public partial class Role
{
    public int IdRol { get; set; }

    public string Rol { get; set; } = null!;

    public virtual ICollection<Usuario> Usuarios { get; set; } = new List<Usuario>();
}
