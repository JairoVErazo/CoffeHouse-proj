"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = ({ params }) => {
  const initialFormData = {
    nombre: "",
    caducidad: "",
    precioUnitario: 0,
    existencias: 0,
    unidadMedida: "G",
  };
  return (
    <div className="flex justify-center items-center">
      <div style={{ backgroundColor: "#bb8b90" }} className="rounded-lg ">
        <div className="py-9 px-44 ">
          <h2 className="text-white font-bold text-center text-5xl">
            Crear una receta
          </h2>
        </div>
        <form className="mt-5 flex flex-col items-center mb-10">
          <div className="flex space-x-10">
            <div>
              <div className="flex flex-col ">
                <label
                  htmlFor="nombre"
                  className="uppercase text-white font-extrabold"
                >
                  Nombre de la receta
                </label>
                <input
                  type="text"
                  name="nombre"
                  className="w-80 h-8 rounded-lg border-none px-6"
                  style={{ backgroundColor: "#dfdfdf" }}
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor="porciones"
                className="uppercase text-white font-extrabold"
              >
                Porciones
              </label>
              <input
                type="number"
                name="porciones"
                className="w-80 h-8 rounded-lg border-none px-6"
                style={{ backgroundColor: "#dfdfdf" }}
              />
            </div>
          </div>

          <div className="flex space-x-10 mt-10">
            <div className="flex flex-col ">
              <label
                htmlFor="idProducto"
                className="uppercase text-white font-extrabold"
              >
                Id producto
              </label>
              <input
                type="number"
                name="idProducto"
                className="w-80 h-8 rounded-lg border-none px-6"
                style={{ backgroundColor: "white" }}
                value={params.id}
                disabled
              />
              <div className="flex flex-col mr-72 mt-6">
                <label
                  htmlFor="descripcion"
                  className="uppercase text-white font-extrabold"
                >
                  Descripción producto
                </label>
                <input
                  type="text"
                  name="descripcion"
                  className="w-96 h-20 rounded-lg border-none px-6"
                  style={{ backgroundColor: "#dfdfdf" }}
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-10 mt-10"></div>

          <button
            type="submit"
            className="px-14 text-white font-bold rounded-lg mt-10 py-2 botones"
          >
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
