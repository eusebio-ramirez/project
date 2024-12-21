import { useContext, useEffect, useState } from "react";
import "./informeActividades.css";
import { ProductsContext } from "../../context/ProductsContext";
import CardActividades from "./cardActividades";

import { informesActividades } from "../../json/informesActividades";
import { useSearchParams } from "react-router-dom";

const InformeActividades = () => {

  const [ data, setData ] = useState(informesActividades);

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
        {data.map((item, index) => (
          <CardActividades data={item} index={index} />
        ))}
        <br />
      </div>
    </div>
  );
};

export default InformeActividades;
