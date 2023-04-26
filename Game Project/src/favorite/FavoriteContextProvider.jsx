import { useState } from "react";
import { FavoriteContext } from "./FavoriteContext";

export function FavoriteContextProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  function addProduct(product) {
    const newFavorite = [...favorite, product];
    setFavorite(newFavorite);
  }

  function removeProduct(product) {
    const newFavorite = favorite.filter((game) => game.id !== product.id);
    setFavorite(newFavorite);
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorite,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
