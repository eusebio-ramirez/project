<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductsProvider } from "./context/ProductsProvider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </StrictMode>
=======
import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import store from "./context/redux/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
>>>>>>> ed9fbef5b5ad82f3fda83773f9437cb603ac8584
);
