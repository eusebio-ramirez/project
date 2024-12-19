import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider as ReduxProvider } from "react-redux"; 
import { store } from "./pages/Servicios/store.js"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductsProvider } from "./context/ProductsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Proveedor Redux */}
    <ReduxProvider store={store}>
      {/* Proveedor contexto */}
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </ReduxProvider>
  </StrictMode>
);
