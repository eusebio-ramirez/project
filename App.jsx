import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import InformeActividades from './components/informeActividades/InformeActividades';
import Agenda from './components/agenda/Agenda';
import Transparencia from "./components/Transparencia/Transparencia";
import DetalleRubro from "./components/DetalleRubro/DetalleRubro";
import Rubros from "./components/Rubros/Rubros";



function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Agenda" element={<Agenda />} />
        <Route path="/InformeActividades" element={<InformeActividades />} />
        <Route path="/Transparencia" element={<Transparencia />} />
        <Route exact path="/Transparencia/Rubros" element={ <Rubros/> } />
        <Route exact path="/Transparencia/Rubros/DetalleRubro/:nombre" element={ <DetalleRubro/> } />
      


      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
