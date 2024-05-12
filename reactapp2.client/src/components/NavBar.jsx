const NavBar = () => {
  return (
    <nav style={{ backgroundColor: "transparent" }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="img/LogoCafe.png" className="h-36" alt="Logo" />
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 ounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:text-rose-950  md:p-0 dark:text-gray-900 md:dark:text-rose-950 text-lg"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-950 md:p-0 dark:text-white md:dark:hover:text-pink-950 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg"
              >
                Menu
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/carrito.svg" alt="carrito" className="h-8" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
