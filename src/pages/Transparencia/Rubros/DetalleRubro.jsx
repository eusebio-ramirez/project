import "./detallerubro.css";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useTransparencia } from "../../../hooks";

export const DetalleRubro = () => {

  const excelIcon = '/excelIcon.svg';
  const tableIcon = '/tableIcon.svg';

  const { datos } = useTransparencia();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { nombre } = useParams();
  const rubro = datos[0].find((rubro) => rubro.nombre === nombre);

  return (
    <div className="container container_detalle_rubro">
      <div className="row">
        <div className="col-12">
          <div className="rubro_titulo">
            <h3>{rubro.nombre}</h3>
            <hr className="hr-gob" />
          </div>
        </div>
      </div>
      <div className="row container-buttons">
        {rubro.formatos.map((formato, index) => {
          const urlXLSX = `https://dif.hidalgo.gob.mx/Transparencia/xlsx/a69_${formato.xlsx}DIFH.xlsx`;
          const urlHTML = `https://dif.hidalgo.gob.mx/Transparencia/htm/a69_${formato.html}DIFH.htm`;
          return (
            <div key={index} className="col-md-4 col-12">
              <div className="rubro_container_detalle">
                <div className="detalle_rubro_nombre">
                  <h5>{formato.nombre}</h5>
                </div>
                <div className="detalle_rubro_enlaces">
                  <a
                    href={formato.xlsx_liga ? formato.xlsx_liga : urlXLSX}
                    target="_blank"
                  >
                    <div className='icono' style={{ maskImage: `url(${excelIcon})`, WebkitMaskImage: `url(${excelIcon})` }} />
                    XLSX
                  </a>
                  <a
                    href={formato.htm_liga ? formato.htm_liga : urlHTML}
                    target="_blank"
                  >
                    <div className='icono' style={{ maskImage: `url(${tableIcon})`, WebkitMaskImage: `url(${tableIcon})` }} />
                    Tabla
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};