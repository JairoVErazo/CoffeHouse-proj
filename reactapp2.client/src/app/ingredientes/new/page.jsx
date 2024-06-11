"use client";
import React, { useState } from "react";
import axios from "axios";

const Page = () => {
  const initialFormData = {
    nombre: "",
    caducidad: "",
    precioUnitario: 0,
    existencias: 0,
    unidadMedida: "G",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/Ingrediente", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      setFormData(initialFormData); // Resetear el formulario
      alert("Datos agregados"); // Mostrar mensaje de alerta
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex justify-center items-center">
      <div style={{ backgroundColor: "#bb8b90" }} className="rounded-lg">
        <div className="py-9 px-44">
          <h2 className="text-white font-bold text-center text-5xl">
            Agregar nuevo Ingrediente
          </h2>
        </div>
        <form
          className="mt-5 flex flex-col items-center mb-10"
          onSubmit={handleSubmit}
        >
          <div className="flex space-x-10">
            <div className="flex flex-col">
              <label
                htmlFor="nombre"
                className="uppercase text-white font-extrabold"
              >
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                className="w-80 h-8 rounded-lg border-none"
                style={{ backgroundColor: "#dfdfdf" }}
                onChange={handleChange}
                value={formData.nombre}
              />
            </div>
          </div>

          <div className="flex space-x-10 mt-10">
            <div className="flex flex-col">
              <label
                htmlFor="caducidad"
                className="uppercase text-white font-extrabold"
              >
                Caducidad
              </label>
              <input
                id="caducidad"
                type="date"
                className="w-80 h-8 rounded-lg border-none"
                style={{ backgroundColor: "#dfdfdf" }}
                onChange={handleChange}
                value={formData.caducidad}
                min={today}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="precioUnitario"
                className="uppercase text-white font-extrabold"
              >
                Precio Unitario
              </label>
              <input
                id="precioUnitario"
                type="number"
                step="0.01"
                className="w-80 h-8 rounded-lg border-none"
                style={{ backgroundColor: "#dfdfdf" }}
                onChange={handleChange}
                value={formData.precioUnitario}
              />
            </div>
          </div>

          <div className="flex space-x-10 mt-10">
            <div className="flex flex-col">
              <label
                htmlFor="existencias"
                className="uppercase text-white font-extrabold"
              >
                Existencias
              </label>
              <input
                id="existencias"
                type="number"
                className="w-80 h-8 rounded-lg border-none"
                style={{ backgroundColor: "#dfdfdf" }}
                onChange={handleChange}
                value={formData.existencias}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="unidadMedida"
                className="uppercase text-white font-extrabold"
              >
                Unidad de medida
              </label>
              <select
                id="unidadMedida"
                className="w-80 h-8 rounded-lg border-none"
                style={{ backgroundColor: "#dfdfdf" }}
                onChange={handleChange}
                value={formData.unidadMedida}
              >
                <option value="G">G</option>
                <option value="ML">ML</option>
                <option value="Unidad">Unidad</option>
                <option value="Libra">Libra</option>
              </select>
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
