import { useState } from "react";

const ModalCocina = ({ setModal }) => {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-45 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-5 rounded modal-size">
          <div className="flex justify-end">
            <button onClick={() => setModal(false)}>
              <img src="/img/cerrara.svg" alt="Cerrar" className="w-9" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            {/*  Este es lel contenido del modal */}
            <h1>Receta</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCocina;
