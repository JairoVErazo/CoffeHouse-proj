import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center">
      <div style={{ backgroundColor: "#bb8b90" }} className="rounded-lg ">
        <div className="py-9 px-44 ">
          <h2 className="text-white font-extrabold text-center text-5xl">
            Login
          </h2>
        </div>
        <form className="mt-5 flex flex-col  items-center mb-10">
          <div className="flex flex-col ">
            <label className="uppercase  text-white font-extrabold">
              username
            </label>
            <input
              type="text"
              className="w-80 h-8 rounded-lg border-none"
              style={{ backgroundColor: "#dfdfdf" }}
            />
            <label className="uppercase  text-white font-extrabold mt-10">
              password
            </label>
            <input
              type="password"
              className="w-80 h-8  rounded-lg border-none"
              style={{ backgroundColor: "#dfdfdf" }}
            />
            <button
              type="submit"
              className="px-14 text-white font-bold rounded-lg mt-10 py-2 botones"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
