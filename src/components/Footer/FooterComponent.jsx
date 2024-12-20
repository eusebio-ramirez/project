import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '../../context/ThemeContext';

export const FooterComponent = () => {
  const { theme } = useTheme();

  const footerStyle = {
    backgroundColor: theme === 'dark' ? '#A02142' : '#343a40',
    color: '#fff',
    width: '100%',
    minHeight: '10vh',
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2024 Sistema DIF Hidalgo. Todos los derechos reservados.</p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={4} className="text-center text-md-start">
            <p className="mb-0">Contacto: Equipo4@dif.hidalgo.gob.mx</p>
          </Col>
          <Col md={4} className="text-center my-2 my-md-0">
            <p className="mb-0">Teléfono: (123) 456-7890</p>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <p className="mb-0">Dirección: Calle Principal #123, Pachuca, Hidalgo</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};