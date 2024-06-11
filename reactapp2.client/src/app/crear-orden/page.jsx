"use client";
import { useState } from "react";

const Page = () => {
  return (
    <div className="flex justify-center items-center">
      <div style={{ backgroundColor: "#bb8b90" }} className="rounded-lg ">
        <div className="py-9 px-44 ">
          <h2 className="text-white font-extrabold text-center text-5xl">
            Llenar datos de la orden
          </h2>
        </div>
        <form className="mt-5 flex flex-col  items-center mb-10">
          <div className="flex space-x-10">
            <div>
              <div className="flex flex-col ">
                <label
                  htmlFor="nombre"
                  className="uppercase text-white font-extrabold"
                >
                  Nombre del cliente
                </label>
                <input
                  id="nombreCliente"
                  type="text"
                  className="w-80 rounded-lg border-none"
                  style={{ backgroundColor: "#dfdfdf" }}
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor="apellido"
                className="uppercase text-white font-extrabold"
              >
                Comentarios de la orden
              </label>
              <textarea
                className="w-80 rounded-lg border-none"
                style={{ backgroundColor: "#dfdfdf" }}
                id="comentarios"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="px-14 text-white font-bold rounded-lg mt-10 py-2 botones"
          >
            Ir a confirmar pedido
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
