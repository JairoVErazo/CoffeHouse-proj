"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Pagina = () => {
  const [datos, setDatos] = useState([]);
  const [categoria, setCategoria] = useState(1);
  const router= useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`Fetching data for category: ${categoria}`);
        const response = await axios.get(
          `/api/Productos/categoria${categoria}`
        );
        console.log("API response:", response.data);
        setDatos(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchData();
  }, [categoria]);

  console.log("Datos:", datos);

  return (
    <div className="flex flex-col items-center py-10">
      <ul className="font-bold flex p-4 mt-2 space-x-24 flex-row text-rose-900 text-4xl mb-20 list-disc cursor-pointer">
        <li
          className={`hover:text-pink-950 ${
            categoria === 1 ? "bg-pink-200" : ""
          }`}
          onClick={() => setCategoria(1)}
        >
          Iced Coffee
        </li>
        <li
          className={`hover:text-pink-950 ${
            categoria === 2 ? "bg-pink-200" : ""
          }`}
          onClick={() => setCategoria(2)}
        >
          Hot Coffee
        </li>
        <li
          className={`hover:text-pink-950 ${
            categoria === 3 ? "bg-pink-200" : ""
          }`}
          onClick={() => setCategoria(3)}
        >
          Dessert
        </li>
        <li
          className={`hover:text-pink-950 ${
            categoria === 4 ? "bg-pink-200" : ""
          }`}
          onClick={() => setCategoria(4)}
        >
          Temporada
        </li>
        <li
          className={`hover:text-pink-950 ${
            categoria === 5 ? "bg-pink-200" : ""
          }`}
          onClick={() => setCategoria(5)}
        >
          Extras
        </li>
      </ul>
      <div className="">
        <div
          className="flex ml-12"
          style={{ maxWidth: "1300px", overflowX: "scroll" }}
        >
          {datos.length === 0 ? (
            <p>No hay productos disponibles.</p>
          ) : (
            datos.map((producto) => (
              <div className="pe-14 relative mb-20" key={producto.idProducto}>
                <div className="absolute top-0 left-2">
                  <button
                    onClick={() =>
                      router.push("/Menu/detalles/" + producto.idProducto)
                    }
                  >
                    <img src="info.svg" alt="Icono Modal" className="h-8" />
                  </button>
                </div>
                <div className="w-72 h-auto border border-gray-200 rounded-lg shadow">
                  <a href="#">
                    <img
                      src="img/menu1.png"
                      alt=""
                      className="h-70 rounded-t-lg"
                    />
                  </a>
                  <div className="p-5 bg-white">
                    <a href="#">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-rose-900 dark:text-white justify-center text-center">
                        {producto.nombreProducto}
                      </h5>
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-rose-900 dark:text-white justify-center text-center">
                        ${producto.precio}
                      </h5>
                    </a>
                    <div className="flex justify-center px-10">
                      <img src="mas.svg" alt="" className="h-12" />
                      <h1 className="px-12 text-rose-900 text-2xl">1</h1>
                      <img src="menos.svg" alt="" className="h-12" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagina;
