"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import useStore from "@/data/store";
import swal from "sweetalert";
import ProtectedRoute from "../ProtectedRoute";

const Page = () => {
  const idOrden = useStore((state) => state.idOrden);
  const [precio, setPrecio] = useState(0);
  const [metodoPago, setMetodoPago] = useState("");

  useEffect(() => {
    setPrecio(Number(localStorage.getItem("precio")));
  }, []);

  const metodoPagoMapping = {
    Efectivo: 1,
    Tarjeta: 2,
    Crypto: 3,
  };

  const handlePrintRecibo = async (e) => {
    e.preventDefault();
    console.log("precio", precio, "metodo", metodoPago, "idorden", idOrden);

    const metodoPagoId = metodoPagoMapping[metodoPago];

    if (!metodoPagoId) {
      swal({
        icon: "warning",
        text: "Por favor, seleccione un método de pago válido.",
      });
      return;
    }

    try {
      const response = await axios.post("/api/Factura", {
        idOrden: idOrden,
        total: precio,
        idMetodopago: metodoPagoId,
      });

      swal({
        icon: "success",
        text: "Factura guardada correctamente",
      });

      // Generar el PDF
      const doc = new jsPDF();
      doc.text("Recibo de Orden", 20, 20);
      doc.autoTable({
        startY: 30,
        head: [["Campo", "Valor"]],
        body: [
          ["Orden #", idOrden],
          ["Total", `$${precio}`],
          ["Método de Pago", metodoPago],
        ],
      });
      doc.save("recibo.pdf");
    } catch (error) {
      console.error("Error al registrar factura:", error);
      swal({
        icon: "error",
        text: `Hubo un problema al guardar la factura. Por favor, inténtelo de nuevo. Detalles del error: ${
          error.response ? error.response.data : error.message
        }`,
      });
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex justify-center" style={{ color: "#94303c" }}>
        <div
          className="col-md-6 py-10 rounded-md font-bold"
          style={{ backgroundColor: "#f7f6f6", height: "500px" }}
        >
          <div className="flex justify-center">
            <h1
              className="text-center text-6xl mb-12"
              style={{ color: "#94303c" }}
            >
              Orden # {idOrden}
            </h1>
          </div>
          <form onSubmit={handlePrintRecibo}>
            <div
              className="flex justify-between border-4 rounded-md mb-8 mx-16"
              style={{ borderColor: "#94303c", color: "#94303c" }}
            >
              <h2 className="text-center text-xl mx-12">Total</h2>
              <div className="flex">
                <p>$</p>
                <input
                  className="text-center text-xl w-auto"
                  value={precio}
                  disabled
                />
              </div>
            </div>
            <div className="flex justify-center">
              <select
                className="w-80 h-8 rounded-lg border-none text-center mb-10"
                style={{ backgroundColor: "#dfdfdf" }}
                onChange={(e) => setMetodoPago(e.target.value)}
              >
                <option value="">--Seleccione un metodo de pago--</option>
                <option value="Efectivo">Efectivo</option>
                <option value="Tarjeta">Tarjeta</option>
                <option value="Crypto">Crypto</option>
              </select>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                style={{ backgroundColor: "#94303c" }}
              >
                Imprimir Recibo
              </button>
            </div>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Page;
