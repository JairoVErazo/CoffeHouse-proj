"use client";
import React from "react";
import Cash from "@/Components/Cash";
import Card from "@/components/Card";
import Crypto from "@/components/Crypto";
import useStore from "@/data/store";
import { useState, useEffect } from "react";

const Page = () => {
  const idOrden = useStore((state) => state.idOrden);
  const [precio, setPrecio] = useState(0);

  useEffect(() => {
    setPrecio(localStorage.getItem("precio"));
  }, []);
  console.log(precio);
  return (
    <div className="flex justify-center" style={{ color: "#94303c" }}>
      <div
        className="col-md-6 py-10 rounded-md  font-bold"
        style={{ backgroundColor: "#f7f6f6", height: "500px" }}
      >
        <div className="flex justify-center">
          <h1
            className="text-center text-6xl mb-12"
            style={{ color: "#94303c" }}
          >
            Orden # {""} {idOrden}
          </h1>
        </div>
        <form>
          <div
            className="flex justify-between border-4 rounded-md mb-8 mx-16"
            style={{ borderColor: "#94303c", color: "#94303c" }}
          >
            <h2 className="text-center  text-xl mx-12">Total</h2>
            <div className="flex ">
              <p>$</p>
              <input
                className="text-center text-xl  w-auto"
                value={precio}
                disabled
              />
            </div>
          </div>
          <select
            className="w-80 h-8 rounded-lg border-none"
            style={{ backgroundColor: "#dfdfdf" }}
          >
            <option value="0">--Seleccione un metodo de pago--</option>
            <option value="1">Efectivo</option>
            <option value="2">Tarjeta</option>
            <option value="3">Crypto</option>
          </select>
          <div className="flex justify-center">
            <button
              type="button"
              className="text-white  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              style={{ backgroundColor: "#94303c" }}
            >
              Imprimir Recibo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
