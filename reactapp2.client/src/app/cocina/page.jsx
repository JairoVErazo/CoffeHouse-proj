"use client";
import React from "react";
import { useState, useEffect } from "react";
import ModalCocina from "@/components/ModalcOCINA";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/Orden/detalle`);
        setDatos(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchData();
  }, []);
  console.log(datos);
  return (
    <>
      <div className="flex justify-center">
        <div className="flex   mb-56 mx-10 ancho-cocina overflow-x-scroll mt-5">
          {datos.map((orden, index) => (
            <div key={index} className="">
              <div className="fondo-blanco py-10 px-20">
                <div className="flex justify-center  items-center">
                  <h2 className="uppercase  font-bold text-4xl principal">
                    Orden {orden.nombreCliente}
                  </h2>
                  <div
                    className="text-white text-4xl px-2 py-2 font-bold rounded-lg ml-7"
                    style={{ backgroundColor: "#94303c" }}
                  >
                    <p>{orden.horaRecibida}</p>
                  </div>
                </div>
                <p className="font-bold ml-5">
                  Comentarios:{" "}
                  <span
                    className="text-white  px-2 py-2 font-bold rounded-lg "
                    style={{ backgroundColor: "#94303c" }}
                  >
                    {" "}
                    {orden.comentarios}
                  </span>
                </p>
                {orden.detallesOrden.map((detalle, idx) => (
                  <div
                    key={idx}
                    className="bg-white flex justify-center items-center px-28  mt-7 py-6 rounded-full  principal "
                  >
                    <p className="font-bold ml-5">{detalle.receta.nombre}</p>
                    <p className="font-bold ml-5">
                      {detalle.receta.descripcion}
                    </p>
                    <div className="borde-numero ml-3">
                      <p className="font-bold">{detalle.cantidadProductos}</p>
                    </div>
                  </div>
                ))}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-10 text-white font-bold rounded-lg mt-10 py-2 botones"
                    onClick={() =>
                      router.push("/cocina/confirmar/" + orden.idOrden)
                    }
                  >
                    Ready
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {modal && <ModalCocina setModal={setModal} />}
      </div>
    </>
  );
};

export default page;
