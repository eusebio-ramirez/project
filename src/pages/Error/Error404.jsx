import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {Container, Row, Col, Image, Button} from "react-bootstrap";

export const Error404 = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(10);

  useEffect(() => {

    const interval = setInterval (() => {
      setCounter ((preCuenta) => preCuenta - 1);
    }, 1000);

    // Temporizador
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => {   // Se limpia el temporizador e intervalo si el componente se desmonta
      clearTimeout(timer);
      clearInterval(interval);
    };
  },[navigate]);

  return (
      <Container className="text-center mt-5">
        <Row>
          <Col>
            <Image thumbnail
              src="../../public/error4041.jpg"
              alt="Error 404: Página no encontrada"
              className="w-50"
            />
          </Col>
          <Col 
              className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
              <p clasname="text-danger mb-4">
                Se redirigirá a la página de Inicio en {counter} segundos.
              </p>
              <Button
                variant="danger" size="lg"
                onClick={() => navigate(-1)} // Redirige a la página anterior
              >
              Ir a la página anterior
              </Button>
          </Col>
        </Row>
      </Container>
  );
};