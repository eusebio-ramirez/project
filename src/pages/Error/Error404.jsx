import "./error.css";
import { Link } from "react-router";

export const Error404 = () => {
  return (
    <div className="container error_container">
      <div className="row">
        <div className="col-12">
          <center>
            <h1>Error 404: Página no encontrada</h1>
            <p>Lo siento, la página que está buscando no existe.</p>
            <Link className="btn_error" to="/">
              INICIO
            </Link>
          </center>
        </div>
      </div>
    </div>
  );
};

