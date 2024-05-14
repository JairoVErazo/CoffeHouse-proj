"use client";
import React from "react";
import { useState } from "react";
import ModalCocina from "@/components/ModalcOCINA";

const page = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="flex justify-center">
        <div className="flex   mb-56 mx-10 ancho-cocina overflow-x-scroll mt-5">
          <div className="">
            <div className="fondo-blanco py-10 px-20">
              <div className="flex justify-center  items-center">
                <h2 className="uppercase  font-bold text-4xl principal">
                  Orden Sofi
                </h2>
                <div
                  className="text-white text-4xl px-2 py-2 font-bold rounded-lg ml-7"
                  style={{ backgroundColor: "#94303c" }}
                >
                  <p>1:00</p>
                </div>
              </div>
              <div className="bg-white flex justify-center items-center px-28  mt-7 py-6 rounded-full  principal ">
                <img src="/img/cake.png" alt="producto" className="borde-img" />
                <p className="font-bold ml-5">Raspberry cake</p>
                <div className="borde-numero ml-3">
                  <p className="font-bold">2</p>
                </div>
                <img
                  src="/img/masGrande.svg"
                  width={50}
                  alt="mas"
                  className="ml-12 cursor-pointer"
                  onClick={() => setModal(true)}
                />
              </div>
              <div className="bg-white flex justify-center items-center px-28 mt-7 py-6 rounded-full principal ">
                <img src="/img/cake.png" alt="producto" className="borde-img" />
                <p className="font-bold ml-5">Raspberry cake</p>
                <div className="borde-numero ml-3">
                  <p className="font-bold">2</p>
                </div>
                <img
                  src="/img/masGrande.svg"
                  width={50}
                  alt="mas"
                  className="ml-12 cursor-pointer"
                  onClick={() => setModal(true)}
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-10 text-white font-bold rounded-lg mt-10 py-2 botones"
                >
                  Ready
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="fondo-blanco ml-14 py-10 px-20">
              <div className="flex justify-center  items-center">
                <h2 className="uppercase  font-bold text-4xl principal">
                  Orden Sofi
                </h2>
                <div
                  className="text-white text-4xl px-2 py-2 font-bold rounded-lg ml-7"
                  style={{ backgroundColor: "#94303c" }}
                >
                  <p>1:00</p>
                </div>
              </div>
              <div className="bg-white flex justify-center items-center px-28 mt-7 py-6 rounded-full principal ">
                <img src="/img/cake.png" alt="producto" className="borde-img" />
                <p className="font-bold ml-5">Raspberry cake</p>
                <div className="borde-numero ml-3">
                  <p className="font-bold">2</p>
                </div>

                <img
                  src="/img/masGrande.svg"
                  width={50}
                  alt="mas"
                  className="ml-12 cursor-pointer"
                  onClick={() => setModal(true)}
                />
              </div>
              <div className="bg-white flex justify-center items-center px-28 mt-7 py-6 rounded-full principal ">
                <img src="/img/cake.png" alt="producto" className="borde-img" />
                <p className="font-bold ml-5">Raspberry cake</p>
                <div className="borde-numero ml-3">
                  <p className="font-bold">2</p>
                </div>
                <img
                  src="/img/masGrande.svg"
                  width={50}
                  alt="mas"
                  className="ml-12 cursor-pointer"
                  onClick={() => setModal(true)}
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-10 text-white font-bold rounded-lg mt-10 py-2 botones"
                >
                  Ready
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="fondo-blanco ml-14 py-10 px-20">
              <div className="flex justify-center  items-center">
                <h2 className="uppercase  font-bold text-4xl principal">
                  Orden Sofi
                </h2>
                <div
                  className="text-white text-4xl px-2 py-2 font-bold rounded-lg ml-7"
                  style={{ backgroundColor: "#94303c" }}
                >
                  <p>1:00</p>
                </div>
              </div>
              <div className="bg-white flex justify-center items-center px-28 mt-7 py-6 rounded-full principal ">
                <img src="/img/cake.png" alt="producto" className="borde-img" />
                <p className="font-bold ml-5">Raspberry cake</p>
                <div className="borde-numero ml-3">
                  <p className="font-bold">2</p>
                </div>
                <img
                  src="/img/masGrande.svg"
                  width={50}
                  alt="mas"
                  className="ml-12 cursor-pointer"
                  onClick={() => setModal(true)}
                />
              </div>
              <div className="bg-white flex justify-center items-center px-28 mt-7 py-6 rounded-full principal ">
                <img src="/img/cake.png" alt="producto" className="borde-img" />
                <p className="font-bold ml-5">Raspberry cake</p>
                <div className="borde-numero ml-3">
                  <p className="font-bold">2</p>
                </div>
                <img
                  src="/img/masGrande.svg"
                  width={50}
                  alt="mas"
                  className="ml-12 cursor-pointer"
                  onClick={() => setModal(true)}
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-10 text-white font-bold rounded-lg mt-10 py-2 botones"
                >
                  Ready
                </button>
              </div>
            </div>
          </div>
        </div>
        {modal && <ModalCocina setModal={setModal} />}
      </div>
    </>
  );
};

export default page;
