import React from "react";

const page = () => {
  return <div className="flex justify-center items-center">
  <div style={{ backgroundColor: "#bb8b90" }} className="rounded-lg ">
    <div className="py-9 px-44 ">
      <h2 className="text-white font-bold text-center text-5xl">
        Crear Nuevo Producto
      </h2>
    </div>
    <form
    
      className="mt-5 flex flex-col  items-center mb-10"
    >
      <div className="flex space-x-10">
        <div>
          <div className="flex flex-col ">
            <label
              htmlFor=""
              className="uppercase  text-white font-extrabold"
            >
              IdCategoria
            </label>
            <input
              type="text"
              className="w-80 h-8 rounded-lg border-none"
              style={{ backgroundColor: "#dfdfdf" }}
             
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <label
            htmlFor=""
            className="uppercase  text-white font-extrabold"
          >
            Nombre
          </label>
          <input
            type="text"
            className="w-80 h-8 rounded-lg border-none"
            style={{ backgroundColor: "#dfdfdf" }}
            
          />
        </div>
      </div>

      <div className="flex space-x-10 mt-10">
        <div>
          <div className="flex flex-col ">
            <label
              htmlFor=""
              className="uppercase  text-white font-extrabold"
            >
              Temporada
            </label>
            <input
              type="text"
              className="w-80 h-8 rounded-lg border-none"
              style={{ backgroundColor: "#dfdfdf" }}
              
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <label
            htmlFor=""
            className="uppercase  text-white font-extrabold"
          >
            Disponible
          </label>
          <input
            type="password"
            className="w-80 h-8 rounded-lg border-none"
            style={{ backgroundColor: "#dfdfdf" }}
            
          />
        </div>
      </div>

      <div className="flex mt-10">
        <div>
          <div className="flex flex-col mr-72">
            <label
              htmlFor=""
              className="uppercase  text-white font-extrabold"
            >
              Descripción
            </label>
            <input
              type="text"
              className="w-96 h-20 rounded-lg border-none"
              style={{ backgroundColor: "#dfdfdf" }}
              
            />
          </div>
        </div>
        
      </div>

      <button
        type="submit"
        className="px-14 text-white font-bold rounded-lg mt-10 py-2 botones"
      >
        Crear
      </button>
    </form>
  </div>
</div>
};

export default page;
