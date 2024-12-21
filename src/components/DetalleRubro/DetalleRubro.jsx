import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './detallerubro.css';
import { rubros } from '../../json/rubros';
import BtnBack from '../../widgets/btnBack/BtnBack';

const DetalleRubro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { nombre } = useParams();
  const rubro = rubros.find((rubro) => rubro.nombre === nombre);

  if (!rubro) {
    return (
      <div className="container container_detalle_rubro">
        <div className="row">
          <div className="col-12">
            <h3 className="title">Rubro no encontrado</h3>
          </div>
        </div>
        <div className="row">
          <BtnBack />
        </div>
      </div>
    );
  }

  return (
    <div className="container container_detalle_rubro">
      <div className="row">
        <div className="col-12">
          <div className="rubro_titulo">
            <h3 className="title">{rubro.nombre}</h3>
            <hr className="hr-gob" />
          </div>
        </div>
      </div>
      <div className="row">
        <BtnBack />
      </div>
      <div className="row">
        {rubro.formatos.map((formato, index) => {
          const urlXLSX = formato.xlsx || '#';
          const urlHTML = formato.html || '#';
          return (
            <div key={index} className="col-md-4 col-12">
              <div className="rubro_container_detalle">
                <div className="detalle_rubro_nombre">
                  <h5>{formato.nombre}</h5>
                </div>
                <div className="detalle_rubro_enlaces">
                  {urlXLSX !== '#' && (
                    <a href={urlXLSX} target="_blank" rel="noopener noreferrer">
                      XLSX
                    </a>
                  )}
                  {urlHTML !== '#' && (
                    <a href={urlHTML} target="_blank" rel="noopener noreferrer">
                      Ver Tabla
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetalleRubro;
