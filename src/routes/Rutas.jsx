import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CambioColor, FooterComponent, Header } from '../components';
import { Agenda, DetalleRubro, Error404, Evaluacion, InformacionInstitucional, InformeActividades, Inicio, Servicios, Transparencia } from '../pages';
import { useTheme } from '../context';
import { useDataLoader } from '../hooks';

export const Rutas = () => {
  const { theme } = useTheme();
  const { isLoading } = useDataLoader();

  if (isLoading) {
    return <div>Cargando...</div>; 
  }

  return (
    <Router>
      <div className={`App d-flex flex-column min-vh-100 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <Header />
        <CambioColor />
        <main className="flex-grow-1" style={{ marginTop: '7vh' }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/*" element={<Error404 />} />
            <Route path="/Agenda" element={<Agenda />} />
            <Route path="/Rubros" element={<Transparencia />} />
            <Route path="/Transparencia/Rubros/:nombre" element={<DetalleRubro />} />
            <Route path="/InformeActividades" element={<InformeActividades />} />
            <Route path="/Servicios" element={<Servicios />} />
            <Route path="/Evaluacion" element={<Evaluacion />} />
            <Route path="/InformacionInstitucional" element={<InformacionInstitucional />} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </Router>
  );
};