import React from "react";

const ModalEditarProducto = ({ setModal, selected }) => {
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
            {selected && <h1>{selected.nombreProducto}</h1>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditarProducto;
