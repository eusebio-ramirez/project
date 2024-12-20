import React from 'react';
import { detalledif } from '../../json/detalledif';
import BtnBack from "../../widgets/btnBack/BtnBack";

const DetalleDif = () => {
  return (
    <div class="detalle-dif container mt-4">
      <div class="d-flex justify-content-between align-items-center position-relative">
            <div class="position-absolute end-0 top-10">
          <BtnBack />
        </div>
        <h1 class="text-center w-100">Material de Apoyo</h1>
      </div>

      
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Nombre del Documento</th>
              <th scope="col">Descargar</th>
            </tr>
          </thead>
          <tbody>
            {detalledif.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.id}</td>
                <td>{doc.nombre}</td>
                <td>
                  <a
                    href={doc.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-success"
                    download
                  >
                    Descargar PDF
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

export default DetalleDif;
