import { BrowserRouter, Route, Routes } from "react-router";
import { agendaPath, evolucionMonPath, homePath, infoInstDetDifMunPath, infoInstIdentPath, infoInstInfoHistPath, infoInstInfSNDIFPath, infoInstPath, infoInstProgAdquiPath, infoInstProgDIFPath, infoInstProtCeroPath, infoInstSHCPPath, informeActividadesPath, serviciosPath, transparenciaArmoContPath, transparenciaAvPrivPath, transparenciaDetalleRubroPath, transparenciaInfGesFinPath, transparenciaLeyDisFinPath, transparenciaLicPubPath, transparenciaPath, transparenciaRubrosHistoricosPath, transparenciaRubrosPath } from "./constant/paths";
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

function App() {
  return (
    <BrowserRouter>
      <div className="contentApp">
        <Snow />
        <Header />
        <Routes>
          <Route path={homePath} element={<Inicio />} />
          <Route path={agendaPath} element='Component agendaPath' />
          <Route path={informeActividadesPath} element='Component informeActividadesPath' />
          <Route path={transparenciaPath} element={<Transparencia />}>
            <Route path={transparenciaRubrosPath} element='Component transparenciaRubrosPath' />
            <Route path={transparenciaDetalleRubroPath} element='Component transparenciaDetalleRubroPath' />
            <Route path={transparenciaRubrosHistoricosPath} element='Component transparenciaRubrosHistoricosPath' />
            <Route path={transparenciaLeyDisFinPath} element='Component transparenciaLeyDisFinPath' />
            <Route path={transparenciaArmoContPath} element='Component transparenciaArmoContPath' />
            <Route path={transparenciaLicPubPath} element='Component transparenciaLicPubPath' />
            <Route path={transparenciaInfGesFinPath} element='Component transparenciaInfGesFinPath' />
            <Route path={transparenciaAvPrivPath} element='Component transparenciaAvPrivPath' />
          </Route>
          <Route path={serviciosPath} element='Component serviciosPath' />
          <Route path={evolucionMonPath} element='Component evolucionMonPath' />
          <Route path={infoInstPath} element={<InfoInst />}>
            <Route path={infoInstDetDifMunPath} element='Component infoInstDetDifMunPath' />
            <Route path={infoInstIdentPath} element='Component infoInstIdentPath' />
            <Route path={infoInstInfoHistPath} element='Component infoInstInfoHistPath' />
            <Route path={infoInstInfSNDIFPath} element='Component infoInstInfSNDIFPath' />
            <Route path={infoInstSHCPPath} element='Component infoInstSHCPPath' />
            <Route path={infoInstProgAdquiPath} element='Component infoInstProgAdquiPath' />
            <Route path={infoInstProgDIFPath} element='Component infoInstProgDIFPath' />
            <Route path={infoInstProtCeroPath} element='Component infoInstProtCeroPath' />
          </Route>
          <Route path="*" element='Not found' />
        </Routes>
        <AccessButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
