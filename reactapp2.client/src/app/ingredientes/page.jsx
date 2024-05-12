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
          <div>
            <h1>INGREDIENTES</h1>
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
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  Huevos
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={"/img/huevos.jpg"}
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
                      marginLeft: "100px",
                    }}
                  >
                    <div className="flex ">
                      <p>Cantidad</p>
                      <img
                        src="/img/UilSearchPlus.svg"
                        alt="ver mas"
                        width={30}
                        className="ms-2"
                      />
                    </div>

                    <p>12</p>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "25px",
                      fontWeight: "bold",
                      marginLeft: "100px",
                    }}
                  >
                    <p>Precio</p>
                    <p>$5.00</p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: "30px",
                  backgroundColor: "#ffffff",
                  borderRadius: "100px",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  Huevos
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={"/img/huevos.jpg"}
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
                      marginLeft: "100px",
                    }}
                  >
                    <div className="flex ">
                      <p>Cantidad</p>
                      <img
                        src="/img/UilSearchPlus.svg"
                        alt="ver mas"
                        width={30}
                        className="ms-2"
                      />
                    </div>

                    <p>12</p>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "25px",
                      fontWeight: "bold",
                      marginLeft: "100px",
                    }}
                  >
                    <p>Precio</p>
                    <p>$5.00</p>
                  </div>
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
