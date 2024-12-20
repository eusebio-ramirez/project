import { useEffect } from "react";
import { servicios } from "../../json/servicios";
import "./servicios.css";

const Servicios = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div>
          <h3 className="title">Servicios</h3>
          <hr className="hr-gob" />
        </div>
        {servicios.map((item, index) => (
          <div key={index} className="col-md-3 col-sm-6 col-12">
            <div className="card_container_servicio">
              <div key={index} className="tarjeta">
                <a href={item.url} target="_blank">
                  <h5>{item.nombre}</h5>
                </a>
                <h6 className="textoJusticiado">{item.descripcion}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
