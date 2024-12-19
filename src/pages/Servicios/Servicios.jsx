import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./servicios.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Busqueda from "../../components/Busqueda/Busqueda";

const Servicios = () => {
  const servicios = useSelector((state) => state.servicios.servicios);

  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBusqueda = (texto) => {
    setBusqueda(texto);
    const datosFiltrados = servicios.filter((item) =>
      item.nombre.toLowerCase().includes(texto.toLowerCase())
    );
    setResultados(datosFiltrados);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="conteiner-title">
          <h3 className="title">Servicios</h3>
          <hr className="hr-gob" />
          <Busqueda busqueda={busqueda} onSearch={handleBusqueda} />
        </div>
        {resultados.map((item, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-12">
            <div className="card_container_servicio">
              <div className="icono">
              <img src="/assets/imgs/logotipo-15.svg" alt="Logo" />
              </div>
              <div className="tarjeta">
                <div className="texto-contenedor">
                  <h5>{item.nombre}</h5>
                  <h6>{item.descripcion}</h6>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link"
                >
                  Visitar 
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
