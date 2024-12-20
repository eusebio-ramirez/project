import { useEffect, useMemo, useState, useCallback } from "react";
import { useTheme } from "../../context/ThemeContext";
import { informesActividades } from "../../json/informesActividades";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { InformeCard } from "./components/InformeCard";
import Busqueda from "../../components/Busqueda/Busqueda";

export const InformeActividades = () => {
  const { theme } = useTheme();
  const [busqueda, setBusqueda] = useState("");
  const [filteredInformes, setFilteredInformes] = useState(informesActividades);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = useCallback(() => {
    const filtered = informesActividades.filter((item) =>
      item.informe.toLowerCase().includes(busqueda.toLowerCase())
    );
    setFilteredInformes(filtered);
  }, [busqueda]);

  const handleInformeClick = useCallback((item) => {
    navigate(`/InformeActividades/${item.anio}`, { state: { informe: item } });
  }, [navigate]);

  const renderedInformes = useMemo(() => (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {filteredInformes.map((item, index) => (
        <Col key={index}>
          <div onClick={() => handleInformeClick(item)} style={{ cursor: 'pointer' }}>
            <InformeCard item={item} theme={theme} />
          </div>
        </Col>
      ))}
    </Row>
  ), [theme, filteredInformes, handleInformeClick]);


  return (
    <Container>
      <Row>
        <Col>
          <h3 className="mt-4 mb-3">
            Informe Anual de Actividades de la Presidenta del Patronato
          </h3>
          <hr className="hr-gob" />
        </Col>
      </Row>
      <Row className="mb-4 justify-content-center">
        <Col md={6}>
          <div className="busqueda-container d-flex justify-content-center">
            <Busqueda busqueda={busqueda} setBusqueda={setBusqueda} className="input-busqueda" />
            <Button className="btn-buscar" onClick={handleSearch}>Buscar</Button>
          </div>
        </Col>
      </Row>
      {renderedInformes}
      <Row>
        <Col>
          <hr className="hr-gob mt-4 mb-4" />
        </Col>
      </Row>
    </Container>
  );
};