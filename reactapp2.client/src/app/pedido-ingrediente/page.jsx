"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ProtectedRoute from "../ProtectedRoute";
const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    idIngrediente: 0,
    cantidad: 0,
    fechaPedido: "",
    precioUnitario: 0,
  });

  const [ingredientes, setIngredientes] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchIngredientes = async () => {
      try {
        const response = await axios.get("/api/PedidoIngredientes");
        setIngredientes(response.data);
      } catch (error) {
        console.error("Error al obtener los ingredientes:", error);
      }
    };
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/Ingrediente");
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener los ingredientes:", error);
      }
    };

    fetchIngredientes();
    fetchData();

    // Establecer la fecha actual en el estado
    const currentDate = new Date().toISOString().split("T")[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      fechaPedido: currentDate,
    }));
  }, []);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const idIngrediente = parseInt(formData.idIngrediente);
    if (isNaN(idIngrediente)) {
      console.error("El campo 'id ingrediente' debe ser un número válido.");
      return;
    }

    try {
      const response = await axios.post("/api/PedidoIngredientes", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex justify-center items-center">
        <div style={{ backgroundColor: "#bb8b90" }} className="rounded-lg">
          <div className="py-9 px-44">
            <h2 className="text-white font-bold text-center text-5xl">
              Crear Pedido de Ingrediente
            </h2>
          </div>
          <form
            className="mt-5 flex flex-col items-center mb-10"
            onSubmit={handleSubmit}
          >
            <div className="flex space-x-10">
              <div className="flex flex-col">
                <label
                  htmlFor="idIngrediente"
                  className="uppercase text-white font-extrabold"
                >
                  Ingrediente
                </label>
                <select
                  id="idIngrediente"
                  className="w-80 h-8 rounded-lg border-none"
                  style={{ backgroundColor: "#dfdfdf" }}
                  onChange={handleChange}
                >
                  <option value="">Seleccione un ingrediente</option>
                  {data.map((ingrediente) => (
                    <option
                      key={ingrediente.idIngrediente}
                      value={ingrediente.idIngrediente}
                    >
                      {ingrediente.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="cantidad"
                  className="uppercase text-white font-extrabold"
                >
                  Cantidad
                </label>
                <input
                  id="cantidad"
                  type="number"
                  className="w-80 h-8 rounded-lg border-none"
                  style={{ backgroundColor: "#dfdfdf" }}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex space-x-10 mt-10">
              <div className="flex flex-col">
                <label
                  htmlFor="fechaPedido"
                  className="uppercase text-white font-extrabold"
                >
                  Fecha de Pedido
                </label>
                <input
                  id="fechaPedido"
                  type="date"
                  value={formData.fechaPedido}
                  className="w-80 h-8 rounded-lg border-none"
                  style={{ backgroundColor: "#dfdfdf" }}
                  onChange={handleChange}
                  disabled
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
                  className="w-80 h-8 rounded-lg border-none"
                  style={{ backgroundColor: "#dfdfdf" }}
                  onChange={handleChange}
                />
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
    </ProtectedRoute>
  );
};

export default Page;
