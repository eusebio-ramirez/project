import React from "react";
import { informesdif } from "../../json/informesdif";
import BtnBack from "../../widgets/btnBack/BtnBack";

const InformesDif = () => {
  return (
    <div className="container mt-4">
     
      <div className="d-flex justify-content-between align-items-center position-relative">
        <h2 className="text-center w-100">Informes DIF Nacional</h2>
        <div className="position-absolute end-0 me-3">
          <BtnBack />
        </div>
      </div>

      <h2 class="text-center my-4">Salud y Bienestar</h2>

      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead class="table-light">
            <tr>
              <th>No.</th>
              <th>Periodo</th>
              <th>Descargar</th>
            </tr>
          </thead>
          <tbody>
            {informesdif.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.id}</td>
                <td>{doc.periodo}</td>
                <td>
                  <a
                    class="btn btn-success"
                    href={doc.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    PDF
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InformesDif;
