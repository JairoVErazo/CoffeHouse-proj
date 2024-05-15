import React from "react";
import Cash from "@/Components/Cash";
import Card from "@/components/Card";
import Crypto from "@/components/Crypto";

const Page = () => {
  return (
    <div className="flex justify-center" style={{ color: "#94303c" }}>
      <div className="w-auto flex">
        <div className="col-md-6 py-2">
          <h2
            className="text-center"
            style={{ fontSize: "45px", fontWeight: "bold", marginLeft: "40px" }}
          >
            <div className="text-center">
              <h1>Pagar Pedido</h1>
            </div>
          </h2>
          <div className="flex justify-self-start">
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
                          marginLeft: "40px",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <p style={{ marginRight: "20px" }}>Raspberry Cake</p>
                          <p
                            style={{
                              marginRight: "30px",
                              padding: "3px",
                              border: "2px solid #94303c",
                            }}
                          >
                            2
                          </p>
                          <p style={{ marginRight: "30px" }}> $9.98</p>

                          <img
                            src={"/img/Trash.svg"}
                            style={{ width: "40px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="button"
                        className="text-white  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                        style={{
                          backgroundColor: "#94303c",
                          marginLeft: "80px",
                        }}
                      >
                        + Comentarios
                      </button>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "30px",
                      backgroundColor: "#ffffff",
                      borderRadius: "100px",
                    }}
                  >
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
                          marginLeft: "40px",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <p style={{ marginRight: "20px" }}>Raspberry Cake</p>
                          <p
                            style={{
                              marginRight: "30px",
                              padding: "3px",
                              border: "2px solid #94303c",
                            }}
                          >
                            2
                          </p>
                          <p style={{ marginRight: "30px" }}> $9.98</p>

                          <img
                            src={"/img/Trash.svg"}
                            style={{ width: "40px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="button"
                        className="text-white  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                        style={{
                          backgroundColor: "#94303c",
                          marginLeft: "80px",
                        }}
                      >
                        + Comentarios
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <button type="button" className="text-white  font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 "style={{backgroundColor:"#94303c"}}>Cash</button>
            <button type="button" className="text-white  font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 "style={{backgroundColor:"#94303c"}}>Card</button>
            <button type="button" className="text-white  font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 "style={{backgroundColor:"#94303c"}}>Crypto</button>
            </div>
        </div>
        <Crypto/>
      </div>
    </div>
  );
};

export default Page;
