"use client";
import { useState } from "react";
const page = () => {
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [nombreUsuario, setNombreUsuario] = useState();
  const [password, setPassword] = useState();
  const [estado, setEstado] = useState();
  const [idRol, setIdRol] = useState();
  const [data, setData] = useState();

  const objInfo = {
    nombre,
    apellido,
    nombreUsuario,
    password,
    estado,
    idRol,
  };
  const handleSubmit = async (e) => {
    e.PreventDefault();

    setData(objInfo);

    try {
      const response = await fetch("/Usuario/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: "value" }),
      });
    } catch (error) {}
  };
  /* const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const res = await fetch("/Usuario/registro", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const resJSON = await res.json();
    /* console.log(resJSON); */
  /*if (res.ok) {
      router.push("/auth/login");
    }
  }; */

  return (
    <div className="flex justify-center items-center">
      <div style={{ backgroundColor: "#bb8b90" }} className="rounded-lg ">
        <div className="py-9 px-44 ">
          <h2 className="text-white font-extrabold text-center text-5xl">
            Registrar Usuario
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col  items-center mb-10"
        >
          <div className="flex space-x-10">
            <div>
              <div className="flex flex-col ">
                <label
                  htmlFor=""
                  className="uppercase  text-white font-extrabold"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-80  rounded-lg border-none"
                  style={{ backgroundColor: "#dfdfdf" }}
                  onChange={(e) => {
                    setNombre(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor=""
                className="uppercase  text-white font-extrabold"
              >
                Apellido
              </label>
              <input
                type="text"
                className="w-80  rounded-lg border-none"
                style={{ backgroundColor: "#dfdfdf" }}
                onChange={(e) => {
                  setApellido(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex space-x-10 mt-10">
            <div>
              <div className="flex flex-col ">
                <label
                  htmlFor=""
                  className="uppercase  text-white font-extrabold"
                >
                  Nombre de usuario
                </label>
                <input
                  type="text"
                  className="w-80  rounded-lg border-none"
                  style={{ backgroundColor: "#dfdfdf" }}
                  onChange={(e) => {
                    setNombreUsuario(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor=""
                className="uppercase  text-white font-extrabold"
              >
                contraseña
              </label>
              <input
                type="password"
                className="w-80  rounded-lg border-none"
                style={{ backgroundColor: "#dfdfdf" }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex space-x-10 mt-10">
            <div>
              <div className="flex flex-col ">
                <label
                  htmlFor=""
                  className="uppercase  text-white font-extrabold"
                >
                  Estado
                </label>
                <input
                  type="text"
                  className="w-80  rounded-lg border-none"
                  style={{ backgroundColor: "#dfdfdf" }}
                  onChange={(e) => {
                    setEstado(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor=""
                className="uppercase  text-white font-extrabold"
              >
                Rol
              </label>
              <input
                type="text"
                className="w-80  rounded-lg border-none"
                style={{ backgroundColor: "#dfdfdf" }}
                onChange={(e) => {
                  setIdRol(e.target.value);
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            style={{ backgroundColor: "#94303c" }}
            className="px-14 text-white font-bold rounded-lg mt-10 py-2"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
