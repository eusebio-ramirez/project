import { BrowserRouter, Route, Routes } from "react-router";
import { agendaPath, detalleRubroPath, evaluacionMonPath, homePath, infoInstPath, informeActividadesPath, serviciosPath, transparenciaPath } from "./constant/paths";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/styles.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Transparencia from "./pages/Transparencia/Transparencia";
import InfoInst from "./pages/InfoInst/InfoInst";
import Inicio from "./pages/Inicio/Inicio";
import AccessButton from "./components/AccessButton/AccessButton";
import Snow from "./components/Snow/Snow";
import { useCallback, useState } from "react";
import Mensaje from "./components/Mensaje/Mensaje";
import InformeActividades from "./pages/InformeActividades/InformeActividades";
import InformacionInstitucional from "./pages/InformacionInstitucional/informacionInstitucional";
import Agenda from "./pages/Agenda/Agenda";
import Error404 from "./pages/Error404/Error404";
import Servicios from "./pages/Servicios/Servicios";
import Rubros from "./pages/Rubros/Rubros";
import DetalleEvaluacionMonitoreo2024 from "./pages/Evaluacion/Evaluacion";
import DetalleRubro from "./pages/DetalleRubro/DetalleRubro";

function App() {
  // const [counter, setCounter] = useState(0);
  // const [calculate, setCalculate] = useState(0);

  // const calculateCount = () => {
  //   setCounter(counter + 1);
  // }

  // const memoizedCalculate = useCallback(() => {
  //   calculateCount();
  // }, [calculate]);

  return (
    // <div style={{ display: 'flex', justifyContent: 'center' }}>
    //   <Mensaje texto={"hola " + counter} />
    //   <button onClick={memoizedCalculate}>Add {counter}</button>
    // </div>
    <BrowserRouter>
      <div className="contentApp">
        <Snow />
        <Header />
        <Routes>
          <Route path={homePath} element={<Inicio />} />
          <Route path={agendaPath} element={<Agenda />} />
          <Route path={informeActividadesPath} element={<InformeActividades />} />
          <Route path={transparenciaPath} element={<Rubros />} />
          <Route path={detalleRubroPath} element={<DetalleRubro />} />
          <Route path={serviciosPath} element={<Servicios />} />
          <Route path={evaluacionMonPath} element={<DetalleEvaluacionMonitoreo2024 />} />
          <Route path={infoInstPath} element={<InformacionInstitucional />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <AccessButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
