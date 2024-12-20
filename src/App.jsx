import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import InformeActividades from './components/informeActividades/InformeActividades';
import Agenda from './components/agenda/Agenda';
import Error404 from "./components/notFound/Error404";
import Servicios from "./components/servicios/Servicios";
import DetalleRubro from "./components/DetalleRubro/DetalleRubro";
import Rubros from "./components/Rubros/Rubros";
import Evaluacion from "./components/evaluacion/Evaluacion";
import DetalleDif from "./components/DetalleDif/DetalleDif";
import InformesDif from "./components/InformesDif/InformesDif";
import InformesSHCP from "./components/InformesSHCP/InformesSHCP";
import InformacionInstitucional from "./components/InformacionInstitucional/InformacionInstitucional";
import { ThemeProvider } from "./context/themeContext";
import ThemeToggleButton from "./widgets/themeToogleButton/themeToogleButton";

function App() {
  return (
    <ThemeProvider>
      <ThemeToggleButton/>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Agenda" element={<Agenda />} />
            <Route path="/InformeActividades" element={<InformeActividades />} />
            <Route path="/Servicios" element={<Servicios />} />
            <Route path="/Rubros" element={<Rubros />} />
            <Route path="/Rubros/DetalleRubro/:nombre" element={<DetalleRubro />} />
            <Route path="/Evaluacion" element={<Evaluacion />} />
            <Route path="/InformacionInstitucional" element={<InformacionInstitucional />} />
            <Route path="/InformacionInstitucional/DetalleDif" element={<DetalleDif />} />
            <Route path="/InformacionInstitucional/InformesDif" element={<InformesDif />} />
            <Route path="/InformacionInstitucional/InformesSHCP" element={<InformesSHCP />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

