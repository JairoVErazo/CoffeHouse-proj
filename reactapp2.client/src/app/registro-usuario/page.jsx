"use client";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import ProtectedRoute from "../ProtectedRoute";
const Page = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [estado, setEstado] = useState(true);
  const [idRol, setIdRol] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/Usuario", {
        Nombre: nombre,
        Apellido: apellido,
        NombreUsuario: nombreUsuario,
        Contraseña: contraseña,
        Estado: estado,
        IdRol: idRol,
      });

      swal({
        icon: "success",
        Text: "Usuario guardado correctamente",
      });
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex justify-center items-center">
        <div style={{ backgroundColor: "#bb8b90" }} className="rounded-lg ">
          <div className="py-9 px-44 ">
            <h2 className="text-white font-extrabold text-center text-5xl">
              Registrar Usuario
            </h2>
          </div>
          <form
            className="mt-5 flex flex-col  items-center mb-10"
            onSubmit={handleSubmit}
          >
            <div className="flex space-x-10">
              <div>
                <div className="flex flex-col ">
                  <label
                    htmlFor="nombre"
                    className="uppercase text-white font-extrabold"
                  >
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-80 rounded-lg border-none"
                    style={{ backgroundColor: "#dfdfdf" }}
                  />
                </div>
              </div>
              <div className="flex flex-col ">
                <label
                  htmlFor="apellido"
                  className="uppercase text-white font-extrabold"
                >
                  Apellido
                </label>
                <input
                  id="apellido"
                  type="text"
                  onChange={(e) => setApellido(e.target.value)}
                  className="w-80 rounded-lg border-none"
                  style={{ backgroundColor: "#dfdfdf" }}
                />
              </div>
            </div>

            <div className="flex space-x-10 mt-10">
              <div>
                <div className="flex flex-col ">
                  <label
                    htmlFor="nombreUsuario"
                    className="uppercase text-white font-extrabold"
                  >
                    Nombre de usuario
                  </label>
                  <input
                    id="nombreUsuario"
                    type="text"
                    onChange={(e) => setNombreUsuario(e.target.value)}
                    className="w-80 rounded-lg border-none"
                    style={{ backgroundColor: "#dfdfdf" }}
                  />
                </div>
              </div>
              <div className="flex flex-col ">
                <label
                  htmlFor="contraseña"
                  className="uppercase text-white font-extrabold"
                >
                  Contraseña
                </label>
                <input
                  id="contraseña"
                  type="password"
                  onChange={(e) => setContraseña(e.target.value)}
                  className="w-80 rounded-lg border-none"
                  style={{ backgroundColor: "#dfdfdf" }}
                />
              </div>
            </div>

            <div className="flex space-x-10 mt-10">
              <div>
                <div className="flex flex-col ">
                  <label
                    htmlFor="estado"
                    className="uppercase text-white font-extrabold"
                  >
                    Estado
                  </label>
                  <select
                    id="estado"
                    value={estado ? "activo" : "inactivo"}
                    onChange={(e) =>
                      setEstado(e.target.value === "activo" ? true : false)
                    }
                    className="w-80 rounded-lg border-none"
                    style={{ backgroundColor: "#dfdfdf" }}
                  >
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="rol"
                  className="uppercase text-white font-extrabold"
                >
                  Rol
                </label>
                <select
                  id="rol"
                  className="w-80 rounded-lg border-none"
                  onChange={(e) => setIdRol(e.target.value)}
                  style={{ backgroundColor: "#dfdfdf" }}
                >
                  <option value="">Selecciona un rol</option>
                  <option value="1">Administrador</option>
                  <option value="2">Cajero</option>
                  <option value="3">Cocinero</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="px-14 text-white font-bold rounded-lg mt-10 py-2 botones"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Page;
