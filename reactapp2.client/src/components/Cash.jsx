import React from "react";

function Cash() {
  return (
    <div className="flex justify-center">
      <div className="w-auto flex mt-44">
        <div
          className="col-md-6 py-10 rounded-md  font-bold" style={{backgroundColor:"#f7f6f6",height:"500px" }}>
            <div className="flex justify-center">
             <h1 className="text-center text-6xl mb-12"style={{ color: "#94303c"}}>Cash</h1>
            </div>
            <div className="flex justify-between border-4 rounded-md mb-8 mx-16"style={{ borderColor: "#94303c",color:"#94303c"}}>
             <h2 className="text-center  text-xl mx-12">Total</h2>
             <h2 className="text-center text-xl mx-12">$29.98</h2>
            </div>
            <div className="flex justify-between border-4 rounded-md mx-16"style={{ borderColor: "#94303c", color:"#94303c"}}>
             <h2 className="text-center  text-xl mx-12">Recibido</h2>
             <h2 className="text-center  text-xl mx-12">$30.00</h2>
            </div>
            <div className="flex justify-center" style={{color:"#94303c"}}>
             <h2 className="text-center  text-xl mb-12 pt-12 mx-12" >Cambio</h2>
             <h2 className="text-center  text-xl pt-12 mx-12">$0.02</h2>
            </div>

            <div className="flex justify-center">
            <button type="button" className="text-white  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" style={{backgroundColor:"#94303c"}}>Imprimir Recibo</button>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Cash;
