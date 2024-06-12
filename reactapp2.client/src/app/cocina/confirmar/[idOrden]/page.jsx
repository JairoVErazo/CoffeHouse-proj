"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const page = ({ params }) => {
  return (
    <div className="flex justify-center">
      <div>
        <h1>Confirmar la orden {params.idOrden} como lista</h1>
        <button
          type="submit"
          className="px-10 text-white font-bold rounded-lg mt-10 py-2 botones ms-9"
        >
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default page;
