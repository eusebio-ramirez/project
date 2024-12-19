import React, { useContext } from "react";
import { ThemeContext } from "../../context/Theme/ThemeContext";
import "./footer.css";

const Footer = () => {
  const { themeColor } = useContext(ThemeContext);

  return (
    <footer style={{ backgroundColor: themeColor.footer, color: "white" }}>
      <div className="container py-4">
        <div className="row text-center text-md-start">
          <div className="col-md-4">
            <img
              src="https://cdn.hidalgo.gob.mx/gobierno/images/logos/logo_gob.png"
              alt="Logo DIF Hidalgo"
              className="img-fluid mb-3"
            />
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li>
                <strong>911</strong> - Emergencia
              </li>
              <li>
                <strong>089</strong> - Denuncia Anónima
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <p><strong>Aviso de privacidad</strong></p>
            <p>
              Contacto: (01) 771 71 73 100 <br />
              Salazar Carlos Martínez Balmori #100 <br />
              Col. Centro 42000 <br />
              Pachuca de Soto, Hidalgo, México
            </p>
          </div>
        </div>
        <hr className="hr-gob" />
        <div className="text-center mt-4 pt-3">
          <p className="mb-0">
            Copyrights © 2024 Todos los derechos reservados por Hidalgo de la
            Transformación
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
