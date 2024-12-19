import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ProductsProvider } from "./context/ProductsProvider.jsx";
import { ThemeProvider } from "./context/Theme/ThemeProvider.jsx";
import { Provider } from 'react-redux'
import { store } from './app/store.js';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ProductsProvider>
        <ThemeProvider>
        <App />
        </ThemeProvider>
      </ProductsProvider>
    </Provider>
  </StrictMode>
);
