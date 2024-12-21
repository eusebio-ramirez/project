import React, { useEffect, useState } from "react";
import { informesSHCP } from "../../json/informesshcp";
import BtnBack from "../../widgets/btnBack/BtnBack";

const InformesSHCP = () => {
  const [informes, setInformes] = useState([]);

  useEffect(() => {
    setInformes(informesSHCP);
  }, []);

  const renderButton = (value, url) => {
    if (value === "PDF" || value === "2023") {
      return (
        <button
          className={`btn btn-success ${
            value === "PDF" ? "btn-success text-white" : "btn-danger"
          }`}
          disabled={!url}
          onClick={() => url && window.open(url, "_blank")}
        >
          {value}
        </button>
      );
    }
    return null;
  };

  const renderTableCells = (data, year) => {
    return ["1.T", "2.T", "3.T", "4.T"].map((quarter) => (
      <td key={`${year}-${quarter}`} className="text-center">
        {renderButton(data[year][quarter], data[year]?.urls?.[quarter])}
      </td>
    ));
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="text-center w-100">Informes a SHCP</h2>
        <div>
          <BtnBack />
        </div>
      </div>
      <h3 className="text-center mt-3">2024 - 2025</h3>

      <div className="table-responsive mt-4">
        <table className="table table-bordered table-hover text-center">
          <thead className="table-light">
            <tr>
              <th rowSpan="2" className="align-middle">
                Documento
              </th>
              <th colSpan="4">2024</th>
              <th colSpan="4">2025</th>
            </tr>
            <tr>
              <th>1.T</th>
              <th>2.T</th>
              <th>3.T</th>
              <th>4.T</th>
              <th>1.T</th>
              <th>2.T</th>
              <th>3.T</th>
              <th>4.T</th>
            </tr>
          </thead>
          <tbody>
            {informes.map((informe) => (
              <tr key={informe.id}>
                <td className="text-start">{informe.documento}</td>
                {renderTableCells(informe.datos, "2024")}
                {renderTableCells(informe.datos, "2025")}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InformesSHCP;
