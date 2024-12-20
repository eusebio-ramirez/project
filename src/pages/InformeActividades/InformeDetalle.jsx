import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { informesActividades } from '../../json/informesActividades';
import { useTheme } from '../../context/ThemeContext';
import './InformeDetalle.css';

export const InformeDetalle = () => {
  const { anio } = useParams();
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  
  const informe = location.state?.informe || informesActividades.find(item => item.anio === anio);

  if (!informe) {
    return <div>Informe no encontrado</div>;
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className={`informe-detalle ${theme === 'dark' ? 'dark-theme' : ''}`}>
            <Card.Img variant="top" src={informe.imagen} alt={informe.informe} />
            <Card.Body>
              <Card.Title className="h4 mb-3">{informe.informe}</Card.Title>
              <Card.Text>
                <strong>Fecha:</strong> {informe.fecha}<br />
                <strong>Lugar:</strong> {informe.lugar}
              </Card.Text>
              <div className="text-center mt-4">
                <Button 
                  className={`informe-button ${theme === 'dark' ? 'dark-theme' : ''}`}
                  href={informe.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  size="lg"
                >
                  Ver Informe
                </Button>
              </div>
            </Card.Body>
          </Card>
          <div className="text-center mt-3">
            <Button 
              
              onClick={handleGoBack}
              className={`informe-button ${theme === 'dark' ? 'dark-theme' : ''}`}
            >
              Regresar
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};