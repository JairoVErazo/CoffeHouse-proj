"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const page = ({ params }) => {
  const [data, setData] = useState({});
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
          <h2 className="text-white font-bold text-center text-5xl">
            Detalle de:
          </h2>
          <h2 className="text-white font-bold text-center text-5xl">
            {data.nombreProducto}
          </h2>
          <h2 className="text-white font-bold text-center text-xl py-20">
            {data.descripcion}
          </h2>
          <h2 className="text-white font-bold text-center text-xl py-5">
            Disponible:
          </h2>
          <h2 className="text-white font-bold text-center text-xl py-5">
            {data.disponible ? "SI" : "NO"}
          </h2>
          <img src={`https://localhost:7195/${data.imagen}`} alt={data.nombreProducto} />
        </div>
      </div>
    </div>
  );
};

export default page;
