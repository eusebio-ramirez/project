import React, { useState, useEffect } from "react";
import { informacionInstitucional as jsonDatos } from "../../json/informacionInstitucional";
import BtnBack from "../../widgets/btnBack/BtnBack";

import useCustomNavigate from "../../hook/useCustomNavigate";

const InformacionInstitucional = () => {
  const [datos, setDatos] = useState([]);

  const {goToExternal} = useCustomNavigate();

  useEffect(() => {
    setDatos(jsonDatos);
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center position-relative">
        {/* Botón en la esquina superior derecha */}
        <div className="position-absolute end-0 me-3">
          <BtnBack className="btn btn-primary btn-sm" />
        </div>
        {/* Título centrado */}
        <h1 className="text-center w-100">INFORMACIÓN INSTITUCIONAL</h1>
      </div>
      <div className="row mt-4">
        {datos.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.descripcion}</p>
                <a onClick={() => goToExternal(item.link)} className="btn btn-success" rel="noopener noreferrer">
                  Ir a la información
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformacionInstitucional;
