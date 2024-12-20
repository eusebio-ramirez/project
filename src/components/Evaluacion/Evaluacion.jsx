import React from "react";
import { evaluacionesData } from "../../json/evaluacion";
import BtnBack from "../../widgets/btnBack/BtnBack";

const Evaluacion = () => {
    return (
        <div class="container mt-4">
            <div class="d-flex justify-content-between align-items-center position-relative">
                <div class="position-absolute end-0 me-3" style={{ top: '10px' }}>
                    <BtnBack />
                </div>
                <h1 class="text-center w-100"> Evaluación DIF HIDALGO</h1>
            </div>

            <div class="table-responsive mt-4">
                <table class="table table-striped table-bordered table-hover">
                    <thead class="table-light">
                        <tr>
                            <th>Programa</th>
                            <th>Matriz de Indicadores de Resultados (MIR)</th>
                            <th>Ficha Técnica de Indicadores</th>
                            <th>Reglas de Operación</th>
                            <th>Evaluaciones realizadas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-secondary">
                            <td colSpan="5">
                                <strong>Alimentación para el Pueblo</strong>
                            </td>
                        </tr>
                        {evaluacionesData.map((evaluacion) => (
                            <tr key={evaluacion.id}>
                                <td>{evaluacion.programa}</td>
                                <td>
                                    {evaluacion.mir ? (
                                        <a
                                            href={evaluacion.mir}
                                            class="btn btn-success"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            PDF
                                        </a>
                                    ) : (
                                        "-"
                                    )}
                                </td>
                                <td>
                                    {evaluacion.fichaTecnica ? (
                                        <a
                                            href={evaluacion.fichaTecnica}
                                            class="btn btn-success"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            PDF
                                        </a>
                                    ) : (
                                        "-"
                                    )}
                                </td>
                                <td>
                                    {evaluacion.reglasOperacion ? (
                                        <a
                                            href={evaluacion.reglasOperacion}
                                            class="btn btn-success"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            PDF
                                        </a>
                                    ) : (
                                        "-"
                                    )}
                                </td>
                                <td>
                                    {evaluacion.evaluacionesRealizadas ? (
                                        <a
                                            href={evaluacion.evaluacionesRealizadas}
                                            class="btn btn-success"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            PDF
                                        </a>
                                    ) : (
                                        "-"
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Evaluacion;
