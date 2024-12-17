import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import 'react-calendar/dist/Calendar.css';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductsProvider } from "./context/ProductsProvider.jsx";
// import Agenda from "./pages/Agenda/Agenda.jsx";

// const handleDayClick = (day, month, year) => {
//   console.log(`Selected Day: ${day}, Month: ${month}, Year: ${year}`);
// };

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsProvider>
      <App />
      {/* <Agenda onClick={handleDayClick} /> */}
    </ProductsProvider>
  </StrictMode>
);
