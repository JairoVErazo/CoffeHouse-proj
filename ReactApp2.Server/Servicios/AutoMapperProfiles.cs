using AutoMapper;
using CoffeHouse.Server.Dto_s;
using CoffeHouse.Server.Models;

namespace CoffeHouse.Server.Servicios
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Producto, ProductoDTO>()
            .ForMember(dest => dest.Recetas, opt => opt
            .MapFrom(src => src.Receta
            .Select(r => new RecetaDTO
            {   Nombre = r.Nombre,
                CostoTotal = r.CostoTotal,
                Descripcion = r.Descripcion,
                Porciones = r.Porciones
            })));
        }
    }
}
