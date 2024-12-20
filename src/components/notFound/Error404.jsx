import "./error.css";

import BtnBack from "../../widgets/btnBack/BtnBack";

const Error404 = () => {

  return (
    <div className="container error_container">
      <div className="row">
        <div className="col-12">
          <BtnBack />
        </div>
        <div className="col-12 glitch">
            <h1 className="404">Error 404: Página no encontrada</h1>
            <p>Lo siento, la página que está buscando no existe.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Error404;
