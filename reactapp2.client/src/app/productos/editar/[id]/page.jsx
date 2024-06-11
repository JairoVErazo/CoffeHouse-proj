"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = ({ params }) => {
  const [data, setData] = useState({
    idCategoria: "",
    nombreProducto: "",
    deTemporada: false,
    disponible: false,
    descripcion: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/Productos/${params.id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value === "true" ? true : value === "false" ? false : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = new FormData();
    dataToSend.append("idCategoria", data.idCategoria);
    dataToSend.append("nombreProducto", data.nombreProducto);
    dataToSend.append("descripcion", data.descripcion);
    dataToSend.append("disponible", data.disponible);
    dataToSend.append("deTemporada", data.deTemporada);

    try {
        console.log("Datos antes de enviar", dataToSend);
        const response = await axios.put(`/api/Productos${params.id}`, dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Data updated successfully:", response.dataToSend);
      alert("Datos editados correctamente");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div style={{ backgroundColor: "#bb8b90" }} className="rounded-lg ">
        <div className="py-9 px-44 ">
          <h2 className="text-white font-bold text-center text-5xl">Editar</h2>
          <h2 className="text-white font-bold text-center text-5xl">
            Nombre del producto
          </h2>
        </div>
        <form
          className="mt-5 flex flex-col items-center mb-10"
          onSubmit={handleSubmit}
        >
          <div className="flex space-x-10">
            <div>
              <div className="flex flex-col ">
                <label
                  htmlFor="idCategoria"
                  className="uppercase text-white font-extrabold"
                >
                  IdCategoria
                </label>
                <input
                  type="text"
                  name="idCategoria"
                  className="w-80 h-8 rounded-lg border-none px-6"
                  style={{ backgroundColor: "#dfdfdf" }}
                  value={data.idCategoria}
                  onChange={handleChange}
                  disabled
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor="nombreProducto"
                className="uppercase text-white font-extrabold"
              >
                Nombre
              </label>
              <input
                type="text"
                name="nombreProducto"
                className="w-80 h-8 rounded-lg border-none px-6"
                style={{ backgroundColor: "#dfdfdf" }}
                value={data.nombreProducto}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex space-x-10 mt-10">
            <div>
              <div className="flex flex-col ">
                <label
                  htmlFor="deTemporada"
                  className="uppercase text-white font-extrabold"
                >
                  Temporada
                </label>
                <select
                  name="deTemporada"
                  className="w-80 h-8 rounded-lg border-none px-6"
                  style={{ backgroundColor: "#dfdfdf" }}
                  value={data.deTemporada}
                  onChange={handleChange}
                >
                  <option value="true">Sí</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor="disponible"
                className="uppercase text-white font-extrabold"
              >
                Disponible
              </label>
              <select
                name="disponible"
                className="w-80 h-8 rounded-lg border-none px-6"
                style={{ backgroundColor: "#dfdfdf" }}
                value={data.disponible}
                onChange={handleChange}
              >
                <option value="true">Sí</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>

          <div className="flex mt-10">
            <div>
              <div className="flex flex-col mr-72">
                <label
                  htmlFor="descripcion"
                  className="uppercase text-white font-extrabold"
                >
                  Descripción
                </label>
                <input
                  type="text"
                  name="descripcion"
                  className="w-96 h-20 rounded-lg border-none px-6"
                  style={{ backgroundColor: "#dfdfdf" }}
                  value={data.descripcion}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="px-14 text-white font-bold rounded-lg mt-10 py-2 botones"
          >
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
