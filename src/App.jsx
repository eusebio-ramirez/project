import { Route, Routes } from "react-router-dom";
import TopNavBar from "./components/TopNavBar/Top-menu-nav";
import ThemeToggleButton from "./components/ThemeToggleButton";
import Container from "@mui/material/Container";
import Agenda from "./page/Agenda/Agenda";
import InformeActividades from "./page/InformeActividades/InformeActividades";
import Home from "./page/Home/Home";
import Rubros from "./page/Rubros/Rubros";
import DetalleRubro from "./page/Rubros/DetalleRubro";
import Servicios from "./page/Servicios/Servicios";
import Evaluacion from "./page/Evaluacion/Evaluacion";
import InformacionInstitucional from "./page/InformacionInsitucional/InformacionInsitucional";

export default function App() {
  return (
    <>
      <TopNavBar />
      <Container maxWidth="xl" component="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Agenda" element={<Agenda />} />
          <Route path="/InformeActividades" element={<InformeActividades />} />
          <Route path="/Rubros" element={<Rubros />} />
          <Route path="/Rubros/:nombre" element={<DetalleRubro />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Evaluacion" element={<Evaluacion />} />
          <Route
            path="/InformacionInstitucional"
            element={<InformacionInstitucional />}
          />
          <Route path="/*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <ThemeToggleButton />
      </Container>
    </>
  );
}

/*
  1.- Estructura de directorios ------

  2.- Utilizar estados locales y explicar el porque los utilizan ------ Sahit

  3.- Patrones de comunicación de componentes. ------ Daniel 

  4.- Estado Global Context = Cambio de color de la aplicación 

  5.- Enrutamiento: Dinamico y con hooks useLocation, useParams, useNavigate -------

  6.- Not Found.   >>> useNavigate ------

  7.- Optimización con useMemo y useCallback  ------- Omar

  8.- Custom Hook

  9.- Redux (Agenda, Informe Actividades,Transparencia, Servicios) --------
*/
