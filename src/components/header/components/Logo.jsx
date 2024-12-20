import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
export const Logo = () => (
    <Link className="nav-link active title_p" aria-current="page" to="/">
      {isMobile ? (
        <img
          className="logo-menu"
          src="https://cdn.hidalgo.gob.mx/gobierno/images/secretarias/vertical/gobierno.svg"
          alt="Logo"
        />
      ) : (
        <span>
          SISTEMA PARA EL DESARROLLO INTEGRAL DE LA FAMILIA DEL ESTADO DE HIDALGO
        </span>
      )}
    </Link>
  );