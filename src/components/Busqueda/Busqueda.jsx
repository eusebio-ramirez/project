import React from "react";

const Busqueda = ({ busqueda, onSearch }) => {
  return (
    <input
      className="form-control"
      type="text"
      placeholder="Ingresa lo que quieres buscar"
      value={busqueda}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default Busqueda;
