"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const page = ({ params }) => {
  const [data, setData] = useState([]);
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
  }, []);

  console.log(data);
  return (
    <div className="flex justify-center items-center">
      <div style={{ backgroundColor: "#bb8b90" }} className="rounded-lg ">
        <div className="py-9 px-44 ">
          <h2 className="text-white font-bold text-center text-5xl">Editar</h2>
          <h2 className="text-white font-bold text-center text-5xl">
            Nombre del producto
          </h2>
        </div>
        <form className="mt-5 flex flex-col  items-center mb-10">
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
                  className="w-80 h-8 rounded-lg border-none px-6"
                  style={{ backgroundColor: "#dfdfdf" }}
                  value={data.idCategoria}
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor=""
                className="uppercase  text-white font-extrabold "
              >
                Nombre
              </label>
              <input
                type="text"
                className="w-80 h-8 rounded-lg border-none px-6"
                style={{ backgroundColor: "#dfdfdf" }}
                value={data.nombreProducto}
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
                  className="w-80 h-8 rounded-lg border-none px-6"
                  style={{ backgroundColor: "#dfdfdf" }}
                  value={data.deTemporada}
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
                type="text"
                className="w-80 h-8 rounded-lg border-none px-6"
                style={{ backgroundColor: "#dfdfdf" }}
                value={data.disponible}
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
                  className="w-96 h-20 rounded-lg border-none px-6"
                  style={{ backgroundColor: "#dfdfdf" }}
                  value={data.descripcion}
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

export default page;
