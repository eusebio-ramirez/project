import React, { useContext } from "react";
import { ThemeContext } from "../../context/Theme/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  const { themeColor } = useContext(ThemeContext);

  return (
    <footer style={{ backgroundColor: themeColor.footer, color: "white" }}>
      <Container className="py-4">
        <Row className="text-center text-md-start">
          <Col md={4}>
            <img
              src="https://cdn.hidalgo.gob.mx/gobierno/images/logos/logo_gob.png"
              alt="Logo Primero El Pueblo"
              className="img-fluid mb-3"
            />
          </Col>
          <Col md={4}>
            <ul className="list-unstyled">
              <li>
                <strong>911</strong> - Emergencia
              </li>
              <li>
                <strong>089</strong> - Denuncia Anónima
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <p><strong>Aviso de privacidad</strong></p>
            <p>
              Contacto: (01) 771 71 73 100 <br />
              Salazar Carlos Martínez Balmori #100 <br />
              Col. Centro 42000 <br />
              Pachuca de Soto, Hidalgo, México
            </p>
          </Col>
        </Row>
        <hr className="hr-gob" />
        <Row className="text-center mt-4 pt-3">
          <Col>
            <p className="mb-0">
              Copyrights © 2024 Todos los derechos reservados por Hidalgo de la
              Transformación
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;