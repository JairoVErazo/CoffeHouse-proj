import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      cart: {},
      idOrden: null,
      addToCart: (product) =>
        set((state) => {
          const newCart = { ...state.cart };
          newCart[product.idProducto] = (newCart[product.idProducto] || 0) + 1;
          return { cart: newCart };
        }),
      removeFromCart: (product) =>
        set((state) => {
          const newCart = { ...state.cart };
          if (newCart[product.idProducto] > 1) {
            newCart[product.idProducto]--;
          } else {
            delete newCart[product.idProducto];
          }
          return { cart: newCart };
        }),
      clearCart: () => set(() => ({ cart: {} })),
      setIdOrden: (idOrden) => set(() => ({ idOrden })),
      clearIdOrden: () => set(() => ({ idOrden: null })),
    }),
    {
      name: "cart-storage", // nombre del almacenamiento en localStorage
    }
  )
);

export default useStore;
