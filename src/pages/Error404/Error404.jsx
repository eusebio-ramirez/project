import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './error.css';

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      navigate('/');
    }

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <Container className="not-found-container text-center">
      <Row>
        <Col>
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Página no encontrada</h2>
          <p className="not-found-text">
            Lo sentimos, la página que buscas no existe. Serás redirigido al inicio en {countdown} segundos.
          </p>
          <Button variant="outline-danger" className="not-found-button" onClick={() => navigate('/')}>
            Volver al inicio ahora
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
