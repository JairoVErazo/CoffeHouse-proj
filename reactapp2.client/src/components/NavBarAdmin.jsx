"use client";

import { Dropdown } from "flowbite-react";

const NavBarAdmin = () => {
  return (
    <nav style={{ backgroundColor: "transparent" }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex justify-start space-x-28">
          <img src="/img/LogoCafe.png" className="h-36" alt="Logo" />
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 ounded-lg  md:flex-row md:space-x-8  md:mt-0">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-rose-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-950  text-xl "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/menu"
                className="block py-2 px-3 text-rose-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-950  text-xl"
              >
                Menú
              </a>
            </li>
            <li>
              <a
                href="/ingredientes"
                className="block py-2 px-3 text-rose-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-950  text-xl"
              >
                Ingredientes
              </a>
            </li>
            <li>
              <a
                href="/productos"
                className="block py-2 px-3 text-rose-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-950  text-xl"
              >
                Productos
              </a>
            </li>
            <li>
              <a
                href="/cocina"
                className="block py-2 px-3 text-rose-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-950  text-xl"
              >
                Cocina
              </a>
            </li>
            <li>
              <a
                href="/pago"
                className="block py-2 px-3 text-rose-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-950  text-xl"
              >
                Pago
              </a>
            </li>
            <li>
              <a
                href="/registro-usuario"
                className="block py-2 px-3 text-rose-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-950  text-xl"
              >
                Registrar
              </a>
            </li>
            
            <li>
              <a
                href="  "
                className="block py-2 px-3 text-rose-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-950  text-xl"
              >
                Admin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarAdmin;