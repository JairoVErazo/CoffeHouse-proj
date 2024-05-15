"use client";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
<<<<<<< Updated upstream
=======
import { useRouter } from "next/navigation";

>>>>>>> Stashed changes
const page = () => {
  const router = useRouter();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/Productos");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="flex justify-center" style={{ color: "#94303c" }}>
      <div
        className="col-md-6 py-16 rounded-md px-40"
        style={{ backgroundColor: "#f7f6f6" }}
      >
        <h2
          className="text-center"
          style={{ fontSize: "45px", fontWeight: "bold", marginLeft: "40px" }}
        >
          <div>
            <h1>PRODUCTOS</h1>
          </div>
        </h2>
<<<<<<< Updated upstream
        {data.map((producto) => {
          return (
            <>
              <div
                style={{
                  padding: "30px",
                  backgroundColor: "#ffffff",
                  borderRadius: "100px",
                  marginBottom: "40px",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  {producto.nombreProducto}
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={"/img/cheesecake.jpg"}
                    style={{
                      width: "150px",
                      height: "150px",
                      border: "5px solid #94303c",
                      marginLeft: "40px",
                    }}
                    alt="cake"
                  />
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "25px",
                      fontWeight: "bold",
                      marginLeft: "100px",
                    }}
                  >
                    <p>Costo</p>
                    <p>Precio</p>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "25px",
                      fontWeight: "bold",
                      marginLeft: "100px",
                    }}
                  >
                    {producto.recetas.map((receta) => (
                      <p>{receta.costoTotal}</p>
                    ))}
                    <p>${producto.precio}</p>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "25px",
                      fontWeight: "bold",
                      marginLeft: "100px",
                    }}
                  >
                    <p>Ingredientes</p>
                    <div className="flex justify-center">
                      <img
                        src={"/img/UilSearchPlus.svg"}
                        style={{ width: "50px" }}
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
=======
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
              {data.map((producto) => {
                return (
                  <>
                    <div
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
                              fontSize: "25px",
                              fontWeight: "bold",
                            }}
                          >
                            {producto.nombreProducto}
                          </p>
                        </div>

                        <div className="ml-32">
                          <button
                            onClick={() =>
                              router.push(
                                "/productos/editar/" + producto.idProducto
                              )
                            }
                          >
                            <img src="edit.svg" alt="editar" className="h-10" />
                          </button>
                          <button
                            className="ml-5"
                            onClick={() =>
                              router.push(
                                "/productos/detalles/" + producto.idProducto
                              )
                            }
                          >
                            <img src="info2.svg" alt="info" className="h-10" />
                          </button>
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={"/img/cheesecake.jpg"}
                          style={{
                            width: "150px",
                            height: "150px",
                            border: "5px solid #94303c",
                            marginLeft: "40px",
                          }}
                          alt="cake"
                        />
                        <div
                          style={{
                            textAlign: "center",
                            fontSize: "25px",
                            fontWeight: "bold",
                            marginLeft: "75px",
                          }}
                        >
                          <p>Costo</p>
                          <p>Precio</p>
                        </div>
                        <div
                          style={{
                            textAlign: "center",
                            fontSize: "25px",
                            fontWeight: "bold",
                            marginLeft: "50px",
                          }}
                        >
                          {producto.recetas.map((receta) => (
                            <p>${receta.costoTotal}</p>
                          ))}
                          <p>${producto.precio}</p>
                        </div>
                      </div>
                      <div className="justify-center flex text-xl font-bold">
                        <p className="text-center mr-20 ml-28">Categoria:</p>
                        <div>
                          <p className="text-center">Temporada:</p>

                          <p className="text-center">
                            {producto.deTemporada ? "Si" : "No"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default page;
