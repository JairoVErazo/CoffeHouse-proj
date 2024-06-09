"use client";
import React, { useState } from "react";
import axios from "axios";

const Page = () => {
  const [formData, setFormData] = useState({
    idCategoria: 0,
    nombreProducto: "",
    deTemporada: false,
    disponible: false,
    descripcion: "",
    imagen: null,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.id]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      imagen: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const idCategoria = parseInt(formData.idCategoria);

    if (isNaN(idCategoria)) {
      console.error("El campo 'id categoria' debe ser un número válido.");
      return;
    }

    const dataToSend = new FormData();
    dataToSend.append("idCategoria", formData.idCategoria);
    dataToSend.append("nombreProducto", formData.nombreProducto);
    dataToSend.append("descripcion", formData.descripcion);
    dataToSend.append("disponible", formData.disponible);
    dataToSend.append("deTemporada", formData.deTemporada);
    dataToSend.append("imagen", formData.imagen);

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
      <div style={{ backgroundColor: "#bb8b90" }} className="rounded-lg">
        <div className="py-9 px-44">
          <h2 className="text-white font-bold text-center text-5xl">
            Crear Nuevo Producto
          </h2>
        </div>
        <form
          className="mt-5 flex flex-col items-center mb-10"
          onSubmit={handleSubmit}
        >
          <div className="flex space-x-10">
            <div className="flex flex-col">
              <label
                htmlFor="idCategoria"
                className="uppercase text-white font-extrabold"
              >
                IdCategoria
              </label>
              <select
                id="idCategoria"
                className="w-80 h-8 rounded-lg border-none"
                style={{ backgroundColor: "#dfdfdf" }}
                onChange={handleChange}
              >
                <option value="">categoría</option>
                <option value="1">Categoría 1</option>
                <option value="2">Categoría 2</option>
                <option value="3">Categoría 3</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="nombreProducto"
                className="uppercase text-white font-extrabold"
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
            <div className="flex flex-col">
              <label
                htmlFor="deTemporada"
                className="uppercase text-white font-extrabold"
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
            <div className="flex flex-col">
              <label
                htmlFor="disponible"
                className="uppercase text-white font-extrabold"
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
            <div className="flex flex-col mr-72">
              <label
                htmlFor="descripcion"
                className="uppercase text-white font-extrabold"
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
          <div className="flex flex-col">
            <label
              htmlFor="imagen"
              className="uppercase text-white font-extrabold"
            >
              Imagen
            </label>
            <input
              id="imagen"
              type="file"
              className="w-80 h-8 rounded-lg border-none"
              style={{ backgroundColor: "#dfdfdf" }}
              onChange={handleImageChange}
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

export default Page;
