import React from "react";

const page = () => {
  return (
    <div className="flex justify-center" style={{ color: "#94303c" }}>
      <div
        className="col-md-6 py-16 rounded-md"
        style={{ backgroundColor: "#f7f6f6" }}
      >
        <h2
          className="text-center"
          style={{ fontSize: "45px", fontWeight: "bold", marginLeft: "40px" }}
        >
          <div className="flex">
          <div className="ml-52">
            <h1>PRODUCTOS</h1>
          </div>
          <div className="">
          <button className="ml-5"> 
                <img src="mas.svg" alt="info" className="h-10" />
              </button>
          </div>
          </div>
          
        </h2>
        <div
          className="card rounded-xl"
          style={{
            marginBottom: "20px",
            backgroundColor: "#ffffff, 0.7",
            padding: "50px",
          }}
        >
          <div className="card-body">
            <div className="details space-y-11">
              <div
                style={{
                  padding: "30px",
                  backgroundColor: "#ffffff",
                  borderRadius: "100px",
                }}
              >
                <div className="flex justify-center">
                  <div className="ml-60">
                  <p
                  style={{
                    textAlign: "center",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  Raspberry Cake
                </p>
                  </div>
                
                <div className="ml-32">
                <button>
                <img src="edit.svg" alt="editar" className="h-10" />
              </button>
              <button className="ml-5"> 
                <img src="info2.svg" alt="info" className="h-10" />
              </button>
                </div>
                </div>
               
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={"/img/cheesecake.jpg"}
                    style={{
                      width: "150px",
                      height: "150px",
                      border: "5px solid #94303c",
                      marginLeft: "40px",
                    }}
                    alt="cake"
                  />
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "25px",
                      fontWeight: "bold",
                      marginLeft: "75px",
                    }}
                  >
                    <p>Costo</p>
                    <p>Precio</p>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "25px",
                      fontWeight: "bold",
                      marginLeft: "50px",
                    }}
                  >
                    <p>$4.00</p>
                    <p>$5.00</p>
                  </div>
                 
                </div>
                <div className="justify-center flex text-xl font-bold">
                <p className="text-center mr-20 ml-28">Categoria:</p>
                <p className="text-center">Temporada:</p>
                </div>
                
              </div>

              <div
                style={{
                  padding: "30px",
                  backgroundColor: "#ffffff",
                  borderRadius: "100px",
                }}
              >
                <div className="flex justify-center">
                  <div className="ml-60">
                  <p
                  style={{
                    textAlign: "center",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  Raspberry Cake
                </p>
                  </div>
                
                <div className="ml-32">
                <button>
                <img src="edit.svg" alt="editar" className="h-10" />
              </button>
              <button className="ml-5"> 
                <img src="info2.svg" alt="info" className="h-10" />
              </button>
                </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={"/img/cheesecake.jpg"}
                    style={{
                      width: "150px",
                      height: "150px",
                      border: "5px solid #94303c",
                      marginLeft: "40px",
                    }}
                    alt="cake"
                  />
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "25px",
                      fontWeight: "bold",
                      marginLeft: "75px",
                    }}
                  >
                    <p>Costo</p>
                    <p>Precio</p>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "25px",
                      fontWeight: "bold",
                      marginLeft: "50px",
                    }}
                  >
                    <p>$4.00</p>
                    <p>$5.00</p>
                  </div>
                </div>
                <div className="justify-center flex text-xl font-bold">
                <p className="text-center mr-20 ml-28">Categoria:</p>
                <p className="text-center">Temporada:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
