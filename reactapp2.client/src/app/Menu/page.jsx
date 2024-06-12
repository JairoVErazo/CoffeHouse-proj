// pages/index.js
"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useStore from "@/data/store";
import ProtectedRoute from "../ProtectedRoute";

const Pagina = () => {
  const [datos, setDatos] = useState([]);
  const [categoria, setCategoria] = useState(1);
  const { cart, addToCart, removeFromCart, clearCart } = useStore();
  const router = useRouter();

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

  const agregarProducto = (producto) => {
    addToCart(producto);
  };

  const quitarProducto = (producto) => {
    removeFromCart(producto);
  };

  const agregarPedido = () => {
    router.push("/crear-orden");
  };

  return (
    <ProtectedRoute>
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
                  <div className="absolute top-0 left-2 cursor-pointer">
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
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-rose-900  justify-center text-center">
                          {producto.nombreProducto}
                        </h5>
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-rose-900  justify-center text-center">
                          ${producto.precio}
                        </h5>
                      </a>
                      <div className="flex justify-center px-10 cursor-pointer">
                        <button
                          onClick={() => agregarProducto(producto)}
                          className="text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                          style={{ backgroundColor: "#94303c" }}
                        >
                          +
                        </button>
                        {cart[producto.idProducto] && (
                          <button
                            onClick={() => quitarProducto(producto)}
                            className="text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                            style={{ backgroundColor: "#94303c" }}
                          >
                            -
                          </button>
                        )}
                        <div className="px-3 text-rose-900 text-2xl">
                          {cart[producto.idProducto] || 0}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <button
          onClick={agregarPedido}
          className="text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          style={{ backgroundColor: "#94303c" }}
        >
          Agregar al pedido
        </button>
      </div>
    </ProtectedRoute>
  );
};

export default Pagina;