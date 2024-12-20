import React from "react";

const Busqueda = ({ busqueda, setBusqueda, className }) => {
  return (
    <input
      className={className}
      type="text"
      placeholder="Ingresa lo que quieres buscar"
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
    />
  );
};

export default Busqueda;