import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Transparencia.css";
import { useTransparencia } from "../../hooks";
import Busqueda from "../../components/Busqueda/Busqueda";

export const Transparencia = () => {
  const { datos } = useTransparencia();

  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    if (datos.length > 0) {
      setResultados(datos[0]);
    }
  }, [datos]);

  const handleBusqueda = () => {
    if (busqueda === '') {
      setResultados(datos[0]);
    } else {
      const datosFiltrados = datos[0].filter((item) =>
        item.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
      setResultados(datosFiltrados);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="row">
        {/* Barra de búsqueda */}
        <div className="busqueda-container">
          <Busqueda busqueda={busqueda} setBusqueda={setBusqueda} className={'input-busqueda'} />
          <button className="btn-buscar" onClick={handleBusqueda}>Buscar</button>
        </div>
        <div className="rubros_titulo">
          <h2>Articulo 69 Ley de Transparencia (48 Rubros)</h2>
        </div>
        <div className="container-cards">
          {
            resultados.map((item, index) => (
              <Link key={index}
                to={`/Transparencia/Rubros/${item.nombre}`}
                className="transparencia-card"
              >
                <img
                  src={"http://cdn.hidalgo.gob.mx/plantilla_secretarial/Rubros/PNG/" + item.icono}
                  alt={item.nombre}
                />
                <h3 className="card-text">{item.nombre}</h3>
              </Link>
            ))
          }
        </div>

        {/* Enlace adicional */}
        <Link className="rubros_historicos" to="RubrosHistoricos">
          Información Ejercicios Anteriores Art. 69 (48 Fracciones)
        </Link>
      </div>
    </div>
  );
};