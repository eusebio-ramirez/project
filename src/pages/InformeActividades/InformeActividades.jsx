import { useEffect } from "react";
import { informesActividades } from "../../json/informesActividades";
import "./informeActividades.css";
const InformeActividades = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div>
          <h3 className="title">
            Informe Anual de Actividades de la Presidenta del Patronato
          </h3>
          <hr className="hr-gob" />
        </div>
        {informesActividades.map((item, index) => (
          <div key={index} className="col-md-3 col-sm-6 col-12">
            <div className="card_container_informe">
              <div
                className="card_img"
                style={{ backgroundImage: `url("${item.imagen}")` }}
              ></div>
              <div className="card_cintillo"></div>
              <div className="card_datos">
                <h5>{item.informe}</h5>
                <h6>{item.fecha}</h6>
                <h6>{item.lugar}</h6>
              </div>
              <div className="card_anio_informe">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <button className ="btn btn-default btn-card-anio" type="button">
                    {item.anio}
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
        <br />
        <div>
          <hr className="hr-gob" />
        </div>
      </div>
    </div>
  );
};

export default InformeActividades;
