"use client";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const page = () => {
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
      </div>
    </div>
  );
};

export default page;
