export const links = [
    {
        "nombre" : "Agenda del Titular",
        "link" : "/Agenda",
    },
    {
        "nombre" : "Informe de Actividades",
        "link" : "/InformeActividades",
    },
    {
        "nombre" : "Transparencia",
         "link" : "/Rubros",
    },
    {
        "nombre" : "Servicios",
        "link" : "/Servicios",
    },
    {
        "nombre" : "Evaluación y Monitoreo",
        "link" : "/Evaluacion",
    },
    {
        "nombre" : "Información Institucional",
        "link" : "/InformacionInstitucional",
    }
] 


export const fetchLinks=()=>{
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(links)
        }, 1000);
    })
}
