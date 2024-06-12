const NavBar = ({ rol }) => {
  return (
    <nav style={{ backgroundColor: "transparent" }}>
      {rol == 2 ? (
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex justify-start space-x-28">
            <img src="/img/LogoCafe.png" className="h-36" alt="Logo" />
          </a>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 ounded-lg  md:flex-row md:space-x-8  md:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-rose-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-950  text-xl "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-rose-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-950  text-xl"
                >
                  Menú
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-rose-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-950  text-xl"
                >
                  Pago
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-rose-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-950  text-xl"
                >
                  Empleado
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex justify-start space-x-28">
            <img src="/img/LogoCafe.png" className="h-36" alt="Logo" />
          </a>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 ounded-lg  md:flex-row md:space-x-8  md:mt-0">
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
                  href="#"
                  className="block py-2 px-3 text-rose-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-950  text-xl"
                >
                  Cocinero
                </a>
              </li>
              <li>
                <button className="block py-2 px-3 text-rose-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-950  text-xl">
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
