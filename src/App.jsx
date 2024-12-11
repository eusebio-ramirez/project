import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import { useState } from "react";
import Header from "./components/Header/Header";
import Inicio from "./pages/Inicio/Inicio";
import InformeActividades from "./pages/InformeActividades/InformeActividades";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/InformeActividades" element={<InformeActividades />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
