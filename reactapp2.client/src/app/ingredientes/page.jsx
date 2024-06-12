"use client";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProtectedRoute from "../ProtectedRoute";
const page = () => {
  const router = useRouter();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/Ingrediente");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <ProtectedRoute>
      <div className="flex justify-center" style={{ color: "#94303c" }}>
        <div
          className="flex mb-56 mx-10 ancho-cocina mt-5"
          style={{ maxHeight: "600px", overflowY: "scroll" }}
        >
          <div>
            <div
              className="col-md-6 py-16 rounded-md px-40"
              style={{ backgroundColor: "#f7f6f6" }}
            >
              <h2
                className="text-center"
                style={{
                  fontSize: "45px",
                  fontWeight: "bold",
                  marginLeft: "40px",
                }}
              >
                <div className="flex justify-center">
                  <div>
                    <h1>Ingredientes</h1>
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
                  backgroundColor: "#ffffff, 0.7",
                  padding: "50px",
                }}
              >
                <div className="card-body">
                  <div className="details space-y-11">
                    {data.map((ingrediente) => (
                      <div
                        key={ingrediente.idIngrediente}
                        style={{
                          padding: "30px",
                          backgroundColor: "#ffffff",
                          borderRadius: "100px",
                        }}
                      >
                        <div className="flex justify-center">
                          <div className="ml-60">
                            <p
                              style={{
                                textAlign: "center",
                                fontSize: "30px",
                                fontWeight: "bold",
                              }}
                            >
                              {ingrediente.nombre}
                            </p>
                          </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div className="justify-center flex text-xl font-bold">
                            <div className="mr-20 ml-10">
                              <p className="text-center mr-10 ml-6">
                                Precio Unitario:
                              </p>
                              <p className="text-center">
                                ${ingrediente.precioUnitario}
                              </p>
                            </div>
                            <div>
                              <p className="text-center">Existencias:</p>
                              <p className="text-center">
                                {ingrediente.existencias}{" "}
                                {ingrediente.unidadMedida}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default page;
