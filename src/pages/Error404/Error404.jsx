import { Button, Container } from "react-bootstrap";
import "./error.css";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { homePath } from "../../constant/paths";

const Error404 = () => {
  const grayscale = useSelector((state) => state.theme.grayscale);
  const navigate = useNavigate();

  const redirect = () => {
    navigate(homePath);
  }

  return (
    <>
      <Container className={`container1 ${grayscale ? "grayscale" : ""} componentError d-flex flex-column justify-content-center align-items-center`}>
        <h1>Error 404: Página no encontrada</h1>
        <p>Lo siento, la página que está buscando no existe.</p>
        <div>
          <Button onClick={() => redirect()}><i class="bi bi-arrow-left-circle-fill"></i> Volver a Inicio</Button>
        </div>
      </Container>
    </>
  );
};

export default Error404;
