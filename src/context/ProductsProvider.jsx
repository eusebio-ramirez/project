import { useState } from "react";
import { ProductsContext } from "./ProductsContext";

// Modifica por StileContext -> cambiar colores del header y footer
// modifica en main
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
