import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import Header from "./components/Header/Header";
import Inicio from "./pages/Inicio/Inicio";
import Rubros from "./pages/Rubros/Rubros";
import Servicios from "./pages/Servicios/Servicios";
import Evaluacion from "./pages/Evaluacion/Evaluacion";
import Error404 from "./pages/Error404/Error404";
import Agenda from "./components/Agenda/Agenda";
import InformacionInstitucional from "./pages/InformacionInstitucional/InformacionInstitucional";
import InformeActividades from "./pages/InformeActividades/InformeActividades";
import DetalleRubro from "./pages/Rubros/DetalleRubro/DetalleRubro";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Agenda" element={<Agenda />} />
        <Route path="/InformeActividades" element={<InformeActividades />} />
        <Route path="/Rubros" element={<Rubros />} />
        <Route path="/Rubros/:nombre" element={<DetalleRubro/>} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Evaluacion" element={<Evaluacion />} />
        <Route path="/InformacionInstitucional" element={<InformacionInstitucional />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
