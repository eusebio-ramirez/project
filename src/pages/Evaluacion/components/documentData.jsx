import { useMemo } from 'react';

export const useEvaluacionData = () => {
  const documentData = useMemo(() => [
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
    
  ], []);

  return { documentData };
};