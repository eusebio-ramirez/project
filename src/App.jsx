import { Route, Routes } from "react-router-dom";
import TopNavBar from "./components/TopNavBar/top-nav-var"; // Importa tu barra de navegación
import Agenda from "./page/Agenda/Agenda";
import Container from "@mui/material/Container";
import InformeActividades from "./page/Informe/InformeActividades";

export default function App() {
  return (
    <>
      <TopNavBar />
      <Container maxWidth="xl" component="main">
        <Routes>
          <Route path="/" element={<h1>Bienvenido a la aplicación</h1>} />
          <Route path="/Agenda" element={<Agenda />} />
          <Route path="/InformeActividades" element={<InformeActividades />} />
          <Route path="/Transparencia" element={<Agenda />} />
          <Route path="/Servicios" element={<Agenda />} />
          <Route path="/EvaluacionMonitoreo" element={<Agenda />} />
          <Route path="/InformacionInstitucional" element={<Agenda />} />
        </Routes>
      </Container>
    </>
  );
}

/*
  React Router
  context
  useCallback
  useMemo
  Redux
*/
