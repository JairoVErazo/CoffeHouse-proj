"use client";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    idCategoria: 0,
    nombreProducto: "",
    deTemporada: false,
    disponible: false,
    descripcion: "",
    imagen: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const disponible = formData.disponible === "true";
    const deTemporada = formData.deTemporada === "true";
    const idCategoria = parseInt(formData.idCategoria);

    if (isNaN(idCategoria)) {
      console.error("El campo 'id categoria' debe ser un número válido.");
      return;
    }
    const dataToSend = {
      idCategoria: 1,
      nombreProducto: "caramelo",
      descripcion: "Hola",
      disponible: true,
      deTemporada: true,
      imagen: imagen,
    };
    console.log(dataToSend);
    try {
      const response = await axios.post("/api/Productos", dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div style={{ backgroundColor: "#bb8b90" }} className="rounded-lg ">
        <div className="py-9 px-44 ">
          <h2 className="text-white font-bold text-center text-5xl">
            Crear Nuevo Producto
          </h2>
        </div>
        <form
          className="mt-5 flex flex-col  items-center mb-10"
          onSubmit={handleSubmit}
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
                  id="idCategoria"
                  type="number"
                  className="w-80 h-8 rounded-lg border-none"
                  style={{ backgroundColor: "#dfdfdf" }}
                  onChange={handleChange}
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
                id="nombreProducto"
                type="text"
                className="w-80 h-8 rounded-lg border-none"
                style={{ backgroundColor: "#dfdfdf" }}
                onChange={handleChange}
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
                <select
                  className="w-80 rounded-lg h-8 border-none"
                  style={{ backgroundColor: "#dfdfdf" }}
                  id="deTemporada"
                  onChange={handleChange}
                >
                  <option value={true}>Si</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor=""
                className="uppercase  text-white font-extrabold"
              >
                Disponible
              </label>
              <select
                className="w-80 rounded-lg h-8 border-none"
                style={{ backgroundColor: "#dfdfdf" }}
                id="disponible"
                onChange={handleChange}
              >
                <option value={true}>Si</option>
                <option value={false}>No</option>
              </select>
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
                  id="descripcion"
                  type="text"
                  className="w-96 h-20 rounded-lg border-none"
                  style={{ backgroundColor: "#dfdfdf" }}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="uppercase  text-white font-extrabold">
              imagen
            </label>
            <input
              id="imagen"
              type="file"
              className="w-80 h-8 rounded-lg border-none"
              style={{ backgroundColor: "#dfdfdf" }}
              onChange={handleChange}
            />
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
  );
};

export default page;
