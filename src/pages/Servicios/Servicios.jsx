import { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import "./servicios.css";
import { useServicios } from "../../hooks";

export const Servicios = () => {
  const { theme } = useTheme();
  const { datos } = useServicios();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`container ${theme === 'dark' ? 'bg-dark' : ''}`}>
      <div className="row">
        <div>
          <h3 >Servicios</h3>
          <hr className="hr-gob" />
        </div>
        {datos[0].map((item, index) => (
          <div key={index} className="col-md-3 col-sm-6 col-12">
            <div className={`card_container_servicio ${theme === 'dark' ? 'bg-dark' : ''}`}>
              <div className={`tarjeta ${theme === 'dark' ? 'bg-dark' : ''}`}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <h5>{item.nombre}</h5>
                </a>
                <h6>
                  {item.descripcion}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};