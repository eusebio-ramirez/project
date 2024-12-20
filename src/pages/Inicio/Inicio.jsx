import React, { useState } from "react";
import inicio from "../../json/inicio"; 
import "./inicio.css"; 
import { TarjetaIntegrante } from "../../components/TarjetaIntegrante/TarjetaIntegrante";

const Inicio = () => {
  const [integrantes, setintegrantes] = useState (inicio)
  
  return (
    <div className="container">
      <div className="row">
        <div>
          <h3 className="title">Integrantes del Equipo</h3>
          <hr className="hr-gob" />
        </div>
        {integrantes.length > 0 ? (
          integrantes.map((item) => (
            <TarjetaIntegrante key={item.id} imagen={item.imagen } nombre={item.nombre} dependencia={item.dependencia} />
          ))
        ) : (
          <p className="no-data">No hay integrantes disponibles.</p>
        )}
        <br />
      </div>
    </div>
  );
};

export default Inicio;