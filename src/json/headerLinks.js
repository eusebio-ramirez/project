export const links = [
    { // 0
        "nombre" : "Agenda del Titular",
        "link" : "/Agenda",
    }, // 1
    {
        "nombre" : "Informe de Actividades",
        "link" : "/InformeActividades",
    }, // 2
    {
        "nombre" : "Transparencia",
         "link" : "/Transparencia",
        "submenu" : [
            {
                "subMenuNombre" : "Art. 69 Ley de Transparencia (48 Rubros)",
                "subMenuUrl" : "/Transparencia/Rubros"
            },
            {
                "subMenuNombre" : "Ley de Disciplina Financiera",
                "subMenuUrl" : "/Transparencia/LeyDisciplinaFinanciera"
            },
            {
                "subMenuNombre" : "Armonización Contable",
                "subMenuUrl" : "/Transparencia/ArmonizacionContable"
            },
            {
                "subMenuNombre" : "Licitaciones Públicas",
                "subMenuUrl" : "/Transparencia/LicitacionesPublicas"
            },
            {
                "subMenuNombre" : "Informes de Gestión Financiera Consolidada",
                "subMenuUrl" : "/Transparencia/InformesGestionFinanciera"
            },
            {
                "subMenuNombre" : "Avisos de Privacidad",
                "subMenuUrl" : "/Transparencia/AvisosPrivacidad"
            }
        ]
    },
    { // 3
        "nombre" : "Servicios",
        "link" : "/Servicios",
    },
    { // 4
        "nombre" : "Evaluación y Monitoreo",
        "link" : "/EvaluacionMonitoreo",
    },
    { // 5
        "nombre" : "Información Institucional",
        "link" : "/InformacionInstitucional",
        "submenu" : [
            {
                "subMenuNombre" : "DIF Municipales",
                "subMenuUrl" : "/InformacionInstitucional/DetalleDIFMunicipales"
            },
            {
                "subMenuNombre" : "Donativos Recibidos",
                "subMenuUrl" : "/InformacionInstitucional"
            },
            {
                "subMenuNombre" : "Documentos de Interés",
                "subMenuUrl" : "/InformacionInstitucional"
            },
            {
                "subMenuNombre" : "Identidad Institucional",
                "subMenuUrl" : "/InformacionInstitucional/Identidad"
            },
            {
                "subMenuNombre" : "Información Historica",
                "subMenuUrl" : "/InformacionInstitucional/InformacionHistorica"
            },
            {
                "subMenuNombre" : "Informes a DIF Nacional",
                "subMenuUrl" : "/InformacionInstitucional/InformesSNDIF"
            },
            {
                "subMenuNombre" : "Informes a SHCP",
                "subMenuUrl" : "/InformacionInstitucional/InformesSHCP"
            },
            {
                "subMenuNombre" : "Programa Anual de Adquisiciones",
                "subMenuUrl" : "/InformacionInstitucional/ProgramaAnualAdquisiciones"
            },
            {
                "subMenuNombre" : "Programas",
                "subMenuUrl" : "/InformacionInstitucional/ProgramasDIF"
            },
            {
                "subMenuNombre" : "Protocolo Cero",
                "subMenuUrl" : "/InformacionInstitucional/ProtocoloCero"
            },
            {
                "subMenuNombre" : "SICS (Contraloria Social)",
                "subMenuUrl" : "/InformacionInstitucional"
            }
        ]
    }
] 

export const fetchLinks = ()=>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(links)
        },1000) // retorno despues de un segundo
    })
}