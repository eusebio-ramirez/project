import React from 'react';
import './Evaluacion.css'; // Archivo CSS para estilos personalizados

const Evaluacion = () => {
  const years = [
    { year: 2017, highlight: false },
    { year: 2018, highlight: false },
    { year: 2019, highlight: false },
    { year: 2020, highlight: false },
    { year: 2021, highlight: false },
    { year: 2022, highlight: true },
    { year: 2023, highlight: true },
    { year: 2024, highlight: true },
  ];

  return (
    <div className="program-evaluation">
      <h1 className="title">Evaluación y Monitoreo a Programas</h1>
      <hr className="divider" />
      <table className="evaluation-table">
        <thead>
          <tr>
            {years.map((item, index) => (
              <th key={index} className={`header-cell ${item.highlight ? 'highlight' : ''}`}>
                {item.year}
              </th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Evaluacion;
