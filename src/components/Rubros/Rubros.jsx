import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRubros } from '../../features/rubrosSlice';
import './rubros.css';
import { Link } from 'react-router-dom';

const Rubros = () => {
  const [busqueda, setBusqueda] = useState("");
  const dispatch = useDispatch();

  const rubros = useSelector((state) => state.rubros.rubros);
  const status = useSelector((state) => state.rubros.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRubros());
    }
    window.scrollTo(0, 0);
  }, [dispatch, status]);

  const filteredRubros = useMemo(() => {
    return rubros.filter((item) =>
      item.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [rubros, busqueda]);

  const handleSearch = (event) => {
    setBusqueda(event.target.value);
  };

  if (status === 'loading') {
    return <div>Cargando...</div>;
  }

  if (status === 'failed') {
    return <div>Error al cargar los datos.</div>;
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='rubros_titulo'>
          <h2>Articulo 69 Ley de Transparencia (48 Rubros)</h2>
        </div>
        <div className='col-12'>
          <div className="content-buscador">
            <input
              type="text"
              className="buscador"
              placeholder="Buscar rubro"
              value={busqueda}
              onChange={handleSearch}
            />
          </div>
        </div>
        {filteredRubros.map((item, index) => (
          <Link
            key={index}
            to={item.url ? item.url : "DetalleRubro/" + item.nombre}
            className='col-md-4 col-sm-6 col-12 rubro_enlace'
          >
            <div className='rubro_container'>
              <div className='rubro_icono'>
                <img
                  src={`http://cdn.hidalgo.gob.mx/plantilla_secretarial/Rubros/PNG/${item.icono}`}
                  alt={item.nombre}
                />
              </div>
              <h3>{item.nombre}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Rubros;
