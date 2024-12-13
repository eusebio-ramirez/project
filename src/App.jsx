import { Route, Routes } from "react-router-dom";
import TopNavBar from "./components/TopNavBar/top-nav-var"; // Importa tu barra de navegación
import Agenda from "./page/Agenda";
import Container from "@mui/material/Container";
import InformeActividades from "./page/InformeActividades/InformeActividades";

export default function App() {
  return (
    <>
      <TopNavBar />
      <Container maxWidth="xl" component="main">
        <Routes>
          <Route path="/" element={<h1>Bienvenido a la aplicación</h1>} />
          <Route path="/Agenda" element={<Agenda />} />
          <Route path="/InformeActividades" element={<InformeActividades />} />
          <Route path="/Rubros" element={<Agenda />} />
          <Route path="/Rubros/:nombre" element={<Agenda />} />
          <Route path="/Servicios" element={<Agenda />} />
          <Route path="/Evaluacion" element={<Agenda />} />
          <Route path="/InformacionInstitucional" element={<Agenda />} />
          <Route path="/*" element={<h1>404 Not Found</h1>} />
        </Routes>
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
