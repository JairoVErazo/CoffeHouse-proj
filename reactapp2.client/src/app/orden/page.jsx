"use client";
import useStore from "@/data/store";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Page = () => {
  const cart = useStore((state) => state.cart);
  const idOrden = useStore((state) => state.idOrden);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [productQuantities, setProductQuantities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productDetails = await Promise.all(
          Object.keys(cart).map(async (idProducto) => {
            const response = await axios.get(`/api/productos/${idProducto}`);
            return response.data;
          })
        );
        setData(productDetails);

        const newTotal = productDetails.reduce((acc, producto) => {
          return acc + producto.precio * cart[producto.idProducto];
        }, 0);
        setTotal(newTotal.toFixed(2));

        const quantities = productDetails.map((producto) => ({
          idReceta: producto.recetas[0].id,
          idOrden: idOrden,
          CantidadProductos: cart[producto.idProducto],
          PrecioTotal: (producto.precio * cart[producto.idProducto]).toFixed(2),
        }));
        setProductQuantities(quantities);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (Object.keys(cart).length > 0) {
      fetchData();
    }
  }, [cart]);

  const handleConfirmarPedido = async () => {
    try {
      for (const product of productQuantities) {
        const response = await axios.post("/api/DetalleOrden", product);
        if (response.status !== 200) {
          throw new Error("Error al ingresar los datos");
        }
      }
    } catch (error) {
      console.error("Error enviando datos:", error);
      alert("Hubo un error al ingresar los datos.");
    }
  };

  console.log(data);
  console.log(productQuantities);

  return (
    <div>
      <h2
        className="text-center"
        style={{
          fontSize: "45px",
          fontWeight: "bold",
          marginLeft: "40px",
        }}
      >
        <div className="text-center">
          <h1>Verifica tu orden</h1>
        </div>
      </h2>

      {data.length === 0 ? (
        <p className="text-center ps-11">No hay productos en la orden.</p>
      ) : (
        <>
          <ul>
            {data.map((producto) => (
              <li key={producto.idProducto}>
                <div className="flex justify-center">
                  <div className="col-md-6 py-2">
                    <div className="flex justify-self-start">
                      <div
                        className="card rounded-xl"
                        style={{
                          backgroundColor: "#ffffff, 0.7",
                          padding: "50px",
                          width: "850px",
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
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
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
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <p style={{ marginRight: "20px" }}>
                                      {producto.nombreProducto}
                                    </p>
                                    <p
                                      style={{
                                        marginRight: "30px",
                                        padding: "3px",
                                        border: "2px solid #94303c",
                                      }}
                                    >
                                      {cart[producto.idProducto]}
                                    </p>

                                    <p style={{ marginRight: "30px" }}>
                                      Total: $
                                      {(
                                        producto.precio *
                                        cart[producto.idProducto]
                                      ).toFixed(2)}
                                    </p>
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
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-4">
            {idOrden && (
              <div className="text-black font-bold">
                ID de la Orden: {idOrden}
              </div>
            )}
          </div>

          <div className="flex justify-center mt-4">
            <div className="text-black font-bold">Total a Pagar: ${total}</div>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleConfirmarPedido}
              className="text-white  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
              style={{
                backgroundColor: "#94303c",
                marginLeft: "80px",
              }}
            >
              Confirmar pedido
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
