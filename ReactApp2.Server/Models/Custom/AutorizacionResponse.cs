﻿namespace CoffeHouse.Server.Models.Custom
{
    public class AutorizacionResponse
    {
        public string? Token { get; set; }
        public bool Resultado { get; set; }
        public string? Mensaje { get; set; }
    }
}
