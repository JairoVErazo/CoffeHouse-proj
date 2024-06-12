"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/app/ProtectedRoute";
const page = ({ params }) => {
  const router = useRouter();
  const confirmarOrden = async () => {
    try {
      const response = await axios.put(`/api/Orden/${params.idOrden}`, {
        NuevoEstado: 3,
      });
      console.log(response.data);
      router.push("/cocina");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ProtectedRoute>
      <div className="flex justify-center">
        <div>
          <h1>Confirmar la orden {params.idOrden} como lista</h1>
          <button
            type="submit"
            onClick={confirmarOrden}
            className="px-10 text-white font-bold rounded-lg mt-10 py-2 botones ms-9"
          >
            Confirmar
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default page;
