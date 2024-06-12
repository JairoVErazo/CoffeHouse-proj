"use client";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/productos");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const getBackgroundColor = (riesgo) => {
    switch (riesgo) {
      case 1:
        return "#d4edda"; // Verde claro
      case 2:
        return "#fff3cd"; // Naranja claro
      case 3:
        return "#f8d7da"; // Rojo claro
      default:
        return "#ffffff"; // Blanco por defecto
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ color: "#94303c" }}
    >
      <div className="ancho-cocina">
        <div
          className="col-md-12 py-16 rounded-md px-40"
          style={{ backgroundColor: "#f7f6f6" }}
        >
          <h2
            className="text-center"
            style={{
              fontSize: "45px",
              fontWeight: "bold",
            }}
          >
            <div className="flex justify-center">
              <div>
                <h1>Productos</h1>
              </div>
              <div>
                <button
                  className="ml-5"
                  onClick={() => router.push("/ingredientes/new")}
                >
                  <img src="mas.svg" alt="info" className="h-10" />
                </button>
              </div>
            </div>
          </h2>
          <div
            className="card rounded-xl"
            style={{
              marginBottom: "20px",
              backgroundColor: "#ffffff",
              padding: "20px",
            }}
          >
            <div
              className="card-body"
              style={{ maxHeight: "500px", overflowY: "auto" }}
            >
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2">Nombre del producto</th>
                    <th className="py-2">Precio</th>
                    <th className="py-2">Ganancia</th>
                    <th className="py-2">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((producto) => (
                    <tr
                      key={producto.idProducto}
                      style={{
                        backgroundColor: getBackgroundColor(producto.riesgo),
                      }}
                    >
                      <td className="py-2 text-center">
                        {producto.nombreProducto}
                      </td>
                      <td className="py-2 text-center">{producto.precio}</td>
                      <td className="py-2 text-center">${producto.ganancia}</td>
                      <td className="py-2 text-center">
                        <button
                          onClick={() =>
                            router.push(
                              "/productos/editar/" + producto.idProducto
                            )
                          }
                          className="px-10 text-white font-bold rounded-lg my-4 py-2 botones"
                        >
                          Cambiar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
