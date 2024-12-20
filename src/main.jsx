import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import 'react-calendar/dist/Calendar.css';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SnackProvider } from "./context/SnackProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackProvider>
      <App />
    </SnackProvider>
  </StrictMode>
);
