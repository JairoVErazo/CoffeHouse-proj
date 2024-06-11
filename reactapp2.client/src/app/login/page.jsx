"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [datos, setDatos] = useState({});

  const login = async (credentials) => {
    try {
      const response = await axios.post("/api/Usuario/Login", credentials);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id_usuario", response.data.id);
        localStorage.setItem("rol", response.data.rol);
        console.log(response.data);
        router.push("/home");
      } else {
        setError("Credenciales inválidas");
      }
    } catch (error) {
      setError("Credenciales inválidas");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const datos = {
      NombreUsuario: nombreUsuario,
      Clave: password,
    };
    login(datos);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-[#bb8b90] rounded-lg shadow-lg p-8">
        <h2 className="text-white font-extrabold text-center text-5xl mb-8">
          Login
        </h2>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4 w-80">
            <label className="uppercase text-white font-extrabold mb-2">
              Username
            </label>
            <input
              type="text"
              className="w-full h-8 rounded-lg border-none p-2"
              style={{ backgroundColor: "#dfdfdf" }}
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4 w-80">
            <label className="uppercase text-white font-extrabold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full h-8 rounded-lg border-none p-2"
              style={{ backgroundColor: "#dfdfdf" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="text-red-500 font-bold mb-4">{error}</div>}
          <button
            type="submit"
            className="px-14 text-white font-bold rounded-lg mt-4 py-2"
            style={{ backgroundColor: "#6a1b9a" }}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
