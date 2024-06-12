"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import useStore from "@/data/store";
import { useRouter } from "next/navigation";
import ProtectedRoute from "../ProtectedRoute";
const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombreCliente: "",
    comentarios: "",
    idUsuario: null,
  });
  const setIdOrden = useStore((state) => state.setIdOrden);

  useEffect(() => {
    const idUsuario = localStorage.getItem("id_usuario");
    setFormData((prevData) => ({
      ...prevData,
      idUsuario: idUsuario,
    }));
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/Orden", formData);
      if (response.status === 200) {
        setFormData({
          nombreCliente: "",
          comentarios: "",
          idUsuario: formData.idUsuario,
        });
        setIdOrden(response.data);
        router.push("/orden");
      } else {
        setError("Hubo un problema al enviar la orden");
      }
    } catch (error) {
      setError("Hubo un problema al enviar la orden");
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex justify-center items-center min-h-screen">
        <div style={{ backgroundColor: "#bb8b90" }} className="rounded-lg">
          <div className="py-9 px-44">
            <h2 className="text-white font-extrabold text-center text-5xl">
              Llenar datos de la orden
            </h2>
          </div>
          <form
            className="mt-5 flex flex-col items-center mb-10"
            onSubmit={handleSubmit}
          >
            <div className="flex space-x-10">
              <div>
                <div className="flex flex-col">
                  <label
                    htmlFor="nombreCliente"
                    className="uppercase text-white font-extrabold"
                  >
                    Nombre del cliente
                  </label>
                  <input
                    id="nombreCliente"
                    type="text"
                    className="w-80 rounded-lg border-none"
                    style={{ backgroundColor: "#dfdfdf" }}
                    value={formData.nombreCliente}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="comentarios"
                  className="uppercase text-white font-extrabold"
                >
                  Comentarios de la orden
                </label>
                <textarea
                  className="w-80 rounded-lg border-none"
                  style={{ backgroundColor: "#dfdfdf" }}
                  id="comentarios"
                  value={formData.comentarios}
                  onChange={handleChange}
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
    </ProtectedRoute>
  );
};

export default Page;
