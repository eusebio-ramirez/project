//import { evaluacionMonitoreo2023 } from '../../json/evaluacionMonitoreo2023';
import React, { useEffect } from "react";
import "./evaluacion.css";
import { Button, Table } from "react-bootstrap";

export const Evaluacion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const documentData = [
    {
      title: "PROGRAMA ANUAL DE EVALUACIÓN 2024",
      link: null,
      buttonText: null,
      icon: null,
    },
    {
      title: "Programa Anual de Evaluación 2024",
      link: "http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/PAE_2024.pdf",
      buttonText: "PDF",
      icon: "fas fa-file-pdf",
    },
    {
      title: "TÉRMINOS DE REFERENCIA 2024",
      link: null,
      buttonText: null,
      icon: null,
    },
    {
      title: "TDR - Evaluación Específica de Desempeño",
      link: "http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/TdR_EED-2024-DIFH.pdf",
      buttonText: "PDF",
      icon: "fas fa-file-pdf",
    },
    {
      title: "TDR - Evaluación de Indicadores",
      link: "http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/TdR_Evaluacion_de_Indicadores_DIFH_2024_COMPLETOS.pdf",
      buttonText: "PDF",
      icon: "fas fa-file-pdf",
    },
    {
      title: "TDR - Seguimientos",
      link: "http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/TdR_Seguimiento_2024.pdf",
      buttonText: "PDF",
      icon: "fas fa-file-pdf",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="ldf_titulo">
          <h2>Evaluación y Monitoreo a Programas 2024</h2>
          <hr className="hr-gob" />
        </div>

        <div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col" colspan="2">
                  <div className="titulo-programa">Programa</div>
                </th>
                <th scope="col">
                  <div className="titulo-columna">
                    Matriz de Indicadores de Resultados (MIR)
                  </div>
                </th>
                <th scope="col">
                  <div className="titulo-columna">
                    <p>Ficha Técnica de Indicadores</p>
                  </div>
                </th>
                <th scope="col">
                  <div className="titulo-columna">
                    <p>Reglas de Operación</p>
                  </div>
                </th>
                <th scope="col">
                  <div className="titulo-columna">
                    <p>Reglamento Interno</p>
                  </div>
                </th>
                <th scope="col">
                  <div className="titulo-columna">
                    <p>Evaluación realizadas</p>
                  </div>
                </th>
                <th scope="col">
                  <div className="titulo-columna">
                    <p>Seguimientos</p>
                  </div>
                </th>
                <th scope="col">
                  <div className="titulo-columna">
                    Plan de Trabajo a los ASM
                  </div>
                </th>
                <th scope="col">
                  <div className="titulo-columna">
                    <p>Seguimiento a los ASM</p>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="contenedor-tabla">
          <table className="table table-striped table-bordered">
            <tbody>
              <tr>
                <th scope="row" colspan="10">
                  <div className="th-seccion">Alimentación para el Pueblo</div>
                </th>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Atención Alimentaria a Grupos Prioritarios, Adultos Mayores
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_ATENCION_ALIMENTARIA_ADULTOS_MAYORES.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_ATENCION_ALIMENTARIA_ADULTOS_MAYORES.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_2024_ATENCION_ALIMENTARIA_ADULTOS_MAYORES.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/PT_ASM_ASA_ADULTOS_MAYORES.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a> */}
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/EED_Asisten_Alimen_Adultos_Mayores_2022.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a> */}
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/EED_Asisten_Alimen_Adultos_Mayores_2022.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a> */}
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/PT_ASM_ASA_ADULTOS_MAYORES.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a> */}
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/PT_ASM_ASA_ADULTOS_MAYORES.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a> */}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Atención Alimentaria a Grupos Prioritarios, Personas con
                    Discapacidad
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_AAGPPERSONAS_DISCAPACIDAD.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_AAGPPERSONAS_DISCAPACIDAD.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_AAGPPD_2024.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Atención Alimentaria a Personas en Situación de Emergencia o
                    Desastre
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_AAPSEMERGENCIA_DESASTRE.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_AAPSEMERGENCIA_DESASTRE.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_AAPSED_2024.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Atención Alimentaria en los Primeros 1000 días de Vida
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_1000_DIAS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_1000_DIAS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_Primeros_1000_Dias_(AAP1000D).pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/EI_2023_1000_Dias_de_Vida.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a> */}
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Alimentación Escolar Modalidad Caliente
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_AEMC.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_AEMC.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_AEMC_2024.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/* <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/EED_Desayunos_Escolares_Calientes_2022.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a> */}
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/PT_ASM_DesEscCalientes.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a> */}
                  </div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Alimentación Escolar Modalidad Frío
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_AEMF.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_AEMF.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_AEMF_2024.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*   <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/EED_Desayunos_Escolares_Frios_2022.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>  */}
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/PT_ASM_DesEscFrios.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a> */}
                  </div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Espacios de Alimentación, Encuentro y Desarrollo
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_EAEyD.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_EAEyD.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_2024_APSIC-DHNNA-EAEYD-TOP-CAI-ALBHNDIF-CRIH-CRIR-AMHPHNDIF.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Orientación y Educación Alimentaria
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_ORIENTACION_ALIMENTARIA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_ORIENTACION_ALIMENTARIA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <th scope="row" colspan="10">
                  <div className="th-seccion">Formación para Todas y Todos</div>
                </th>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Casa de la Mujer Hidalguense
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_CASA_DE_LA_MUJER_HIDALGUENSE.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_CASA_DE_LA_MUJER_HIDALGUENSE.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/REGLAMENTO_CASA_DE_LA_MUJER_HIDALGUENSE.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>  */}
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Centros de Atención Infantil (CAI)
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_CAI.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_CAI.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_CAI.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Centro de Desarrollo Comunitario Urbano
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_CDC_URBANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_CDC_URBANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/Reglamento_CDC.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row" colspan="10">
                  <div className="th-seccion">La Salud es Primero</div>
                </th>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Atención Médica y Hospitalaria Pediátrica en Hospital del
                    Niño DIF
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_HOSPITAL_NIÑO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_HOSPITAL_NIÑO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_2024_APSIC-DHNNA-EAEYD-TOP-CAI-ALBHNDIF-CRIH-CRIR-AMHPHNDIF.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">Atención Psicológica</div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_ATENCION_PSICOLOGICA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_ATENCION_PSICOLOGICA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_2024_APSIC-DHNNA-EAEYD-TOP-CAI-ALBHNDIF-CRIH-CRIR-AMHPHNDIF.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/EED_Atención_Psicologica_2022.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a> */}
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/PT_ASM_Atencion_Psicologica.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>  */}
                  </div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">Apoyo y Bienestar</div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_APOYO_y_BIENESTAR.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_APOYO_y_BIENESTAR.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_ATN_GRUPOS_PRIORITARIOS-AT-HUVM-AB.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Centro de Rehabilitación Integral Hidalgo (CRIH)
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_CRIH.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_CRIH.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_2024_APSIC-DHNNA-EAEYD-TOP-CAI-ALBHNDIF-CRIH-CRIR-AMHPHNDIF.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Centro de Rehabilitación Integral Regional Huehuetla
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_CRIR_HUEHUETLA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_CRIR_HUEHUETLA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_2024_APSIC-DHNNA-EAEYD-TOP-CAI-ALBHNDIF-CRIH-CRIR-AMHPHNDIF.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Centro de Rehabilitación Integral Regional Huejutla de Reyes
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_CRIR_HUEJUTLA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_CRIR_HUEJUTLA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_2024_APSIC-DHNNA-EAEYD-TOP-CAI-ALBHNDIF-CRIH-CRIR-AMHPHNDIF.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Centro de Rehabilitación Integral Regional Ixmiquilpan
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_CRIR_IXMIQUILPAN.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_CRIR_IXMIQUILPAN.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_2024_APSIC-DHNNA-EAEYD-TOP-CAI-ALBHNDIF-CRIH-CRIR-AMHPHNDIF.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Centro de Rehabilitación Integral Regional Santiago
                    Tulantepec
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_CRIR_SANTIAGO_TULANTEPEC.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_CRIR_SANTIAGO_TULANTEPEC.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_2024_APSIC-DHNNA-EAEYD-TOP-CAI-ALBHNDIF-CRIH-CRIR-AMHPHNDIF.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Centro de Rehabilitación Integral Regional Tula
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/202/MIR_2024_CRIR_TULA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_CRIR_TULA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_2024_APSIC-DHNNA-EAEYD-TOP-CAI-ALBHNDIF-CRIH-CRIR-AMHPHNDIF.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Centro de Rehabilitación Integral Regional Zacualtipan
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_CRIR_ZACUALTIPAN.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_CRIR_ZACUALTIPAN.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_2024_APSIC-DHNNA-EAEYD-TOP-CAI-ALBHNDIF-CRIH-CRIR-AMHPHNDIF.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Jornadas Médicas de Subespecialidad
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_JORNADAS_MEDICAS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_JORNADAS_MEDICAS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_JORNADAS_MEDICAS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/EI_2023_Jornadas_Medicas.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>  */}
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row" colspan="10">
                  <div className="th-seccion">
                    Cercanía con Grupos Prioritarios
                  </div>
                </th>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Atención a Personas en Condiciones de Emergencia
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_APCE.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_APCE.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Promoción y Envejecimiento Saludable
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_PROMOCION_Y_ENVEJECIMIENTO_SALUDABLE.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_PROMOCION_Y_ENVEJECIMIENTO_SALUDABLE.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/2021_NOV_15_alc2_46.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>   */}
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Programa de Salud y Bienestar Comunitario
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_SALUD_Y_BIENESTAR.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_SALUD_Y_BIENESTAR.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_PSBC_2024.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/EED_Salud_y_Bienestar_Comunitario_2022.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>  */}
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/PT_ASM_Salud_y_Bienestar_Comunitario.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>  */}
                  </div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Albergue del Hospital del Niño DIF
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_ALBERGUE_HOSPITAL.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_ALBERGUE_HOSPITAL.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_2024_APSIC-DHNNA-EAEYD-TOP-CAI-ALBHNDIF-CRIH-CRIR-AMHPHNDIF.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Albergue para Niñas y Niños con Cáncer y Enfermedades
                    Crónico Degenerativas
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_ALBERGUE_NIÑAS_NIÑOS_CANCER.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_ALBERGUE_NIÑAS_NIÑOS_CANCER.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_2024_APSIC-DHNNA-EAEYD-TOP-CAI-ALBHNDIF-CRIH-CRIR-AMHPHNDIF.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">Albergue Revolución</div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_ALBERGUE_REVOLUCION.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_ALBERGUE_REVOLUCION.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/2021_NOV_15_alc2_46.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>  */}
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/EI_2023_Albergue_Revolucion.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>  */}
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">Ayudas Técnicas</div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_AYUDAS_TECNICAS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_AYUDAS_TECNICAS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_ATN_GRUPOS_PRIORITARIOS-AT-HUVM-AB.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">Casa Cuna</div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_CASA_CUNA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_CASA_CUNA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/REGLAMENTO_CASA_CUNA.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>  */}
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Casa de Día María Elena Ramirez
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_CASA_DE_DIA_MA_ELENA_RAMIREZ.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_CASA_DE_DIA_MA_ELENA_RAMIREZ.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/R.I._CASA_DESCANSO_ 2023(oct_02).pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>  */}
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">Casa de la Niña</div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_CASA_NIÑA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_CASA_NIÑA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/REGLAMENTO_CASA_DE_LA_NIÑA.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>  */}
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">Casa de las Adolescentes</div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_CASA_DE_LAS_ADOLESCENTES.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_CASA_DE_LAS_ADOLESCENTES.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/REGLAMENTO_CASA_DE_LA_NIÑA.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>  */}
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Casa de Día Centro de Expresión Adulto Mayor
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_CASA_DIA_CENTRO_DE_EXPRESION_ADULTO_MAYOR.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_CASA_DIA_CENTRO_DE_EXPRESION_ADULTO_MAYOR.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/REGLAMENTO_INTERNO_CASA_3RA_EDAD.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>  */}
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Casa de las y los Adolescentes
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_CASA_DE_LAS_Y_LOS_ADOLESCENTES.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_CASA_DE_LAS_Y_LOS_ADOLESCENTES.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/REGLAMENTO_CASA_DE_LAS_Y_LOS_ADOLESCENTES.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>  */}
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">Casa del Niño</div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_CASA_NIÑO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_CASA_NIÑO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/REGLAMENTO_CASA_DEL_NIÑO.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>  */}
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Desarrollo de Habilidades en Niñas, Niños y Adolescentes
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_DESARROLLO_HABILIDADES.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_DESARROLLO_HABILIDADES.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_Desarrollo_de_Habilidades_en_NNyA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">DIF Contigo</div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_DIF_CONTIGO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_DIF_CONTIGO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_DIF_CONTIGO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Fortalecimiento para la Atención de Niñas, Niños y
                    Adolescentes Migrantes
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_MIGRANTES_PACHUCA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_MIGRANTES_PACHUCA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/Modelo_Atencion_integral_NNA_movilidad_DIFNacional.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>  */}
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">Hacia una Vida Mejor</div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_HACIA_UNA_VIDA_MEJOR.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_HACIA_UNA_VIDA_MEJOR.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_ATN_GRUPOS_PRIORITARIOS-AT-HUVM-AB.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">La Casita</div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_LA_CASITA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_LA_CASITA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/2021_NOV_15_alc2_46.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>  */}
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Representación Especial a Niñas, Niños y Adolescentes
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_REPRESENTACION_ESPECIAL_A_NNA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_REPRESENTACION_ESPECIAL_A_NNA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="div-td">
                    {/*  <a href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/REGLAMENTO_REPRESENTACION_LEGAL_DE_NIÑAS_NIÑOS_Y_ADOLESCENTES.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-default btn-acordeon" type="button">PDF</button></a>  */}
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </td>
                <th scope="row">
                  <div className="div-programa">
                    Taller de Órtesis y Prótesis
                  </div>
                </th>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/MIR_2024_TALLER_DE_ORTESIS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/FICHAS_2024_TALLER_DE_ORTESIS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="div-td">
                    <a
                      href="http://dif.hidalgo.gob.mx/pdf/EvaluacionMonitoreo/2024/ROP_TALLER_DE_ORTESIS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-default btn-acordeon"
                        type="button"
                      >
                        PDF
                      </button>
                    </a>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />
        <br />
        <br />
        <Table
          striped
          bordered
          className="acordeonTabla"
          style={{ textAlign: "center" }}
        >
          <tbody>
            {documentData.map((item, index) => (
              <React.Fragment key={index}>
                {item.title && (
                  <tr>
                    <td colSpan="3">
                      <p>{item.title}</p>
                    </td>
                  </tr>
                )}
                {item.link && (
                  <tr>
                    <td>
                      <div>
                        <i className={item.icon}></i>
                      </div>
                    </td>
                    <td style={{ textAlign: "left" }}>{item.title}</td>
                    <td>
                      <div>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="default" className="btn-acordeon">
                            {item.buttonText}
                          </Button>
                        </a>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </Table>

        <hr />
        <br />
        <br />
      </div>
    </div>
  );
};


