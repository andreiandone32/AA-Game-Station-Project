import { useState } from "react";
import { CartContext } from "./CartContext";

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addProduct(product) {
    const gameExist = cart.find((deal) => deal.dealID === product.dealID);
    if (gameExist) {
      const newCart = cart.map((deal) => {
        const dealInCart = deal.dealID === product.dealID;
        if (dealInCart) {
          return {
            ...deal,
            quantity: deal.quantity + 1,
          };
        } else {
          return deal;
        }
      });
      setCart(newCart);
    } else {
      const newCart = [
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ];
      setCart(newCart);
    }

    console.log("Adding product");
  }

  function removeProduct(product) {
    console.log("Removing product");
    const newCart = cart.filter((deal) => deal.dealID !== product.dealID);
    setCart(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
