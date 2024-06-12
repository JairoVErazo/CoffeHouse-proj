"use client";
import React, { useState } from "react";
import axios from "axios";

const Page = ({ params }) => {
  const initialFormData = {
    nombre: "",
    descripcion: "",
    porciones: 0,
    costoTotal: 0,
    idProducto: params.id,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/Receta", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      setFormData(initialFormData); // Resetear el formulario
      alert("Receta creada exitosamente"); // Mostrar mensaje de alerta
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div style={{ backgroundColor: "#bb8b90" }} className="rounded-lg ">
        <div className="py-9 px-44 ">
          <h2 className="text-white font-bold text-center text-5xl">
            Crear una receta
          </h2>
        </div>
        <form className="mt-5 flex flex-col items-center mb-10" onSubmit={handleSubmit}>
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
                  onChange={handleChange}
                  value={formData.nombre}
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
                onChange={handleChange}
                value={formData.porciones}
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
                value={formData.idProducto}
                disabled
              />
              <div className="flex flex-col mr-72 mt-6">
                <label
                  htmlFor="descripcion"
                  className="uppercase text-white font-extrabold"
                >
                  Descripción de la receta
                </label>
                <input
                  type="text"
                  name="descripcion"
                  className="w-96 h-20 rounded-lg border-none px-6"
                  style={{ backgroundColor: "#dfdfdf" }}
                  onChange={handleChange}
                  value={formData.descripcion}
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
  );
};

export default Page;
