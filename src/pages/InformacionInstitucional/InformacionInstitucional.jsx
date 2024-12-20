import React, { useEffect, useState } from "react";  
import "./informacion.css";  

export const InformacionInstitucional = () => {  
  const [programas, setProgramas] = useState([]);   
  
  useEffect(() => {  
    const fetchProgramas = async () => {  
      try {  
        const response = await fetch('https://api-project-ap9h.onrender.com/api/programas');  
        if (!response.ok) {  
          throw new Error('Error');  
        }  
        const data = await response.json();  
        setProgramas(data);  
      } catch (error) {  
        console.error("Error al obtener información:", error);  
      }  
    };  

    fetchProgramas();  
  }, []);  

  const handleOpenPDF = (link) => {  
    window.open(link, "_blank", "noopener,noreferrer");  
  };  

  return (  
    <div>  
      <div className="row">  
        <div>  
          <hr/> <hr/> <hr/> <hr/>  
          <h3>Programas que opera el Sistema DIF Hidalgo</h3>  
          <hr className="hr-gob" />  
        </div>  
      </div>  

      <div className='row'>  
        {programas.map(programa => (  
          <div className="col-md-3 col-sm-6 col-12" key={programa.id}>   
            <div className='card_container'>  
              <h5>{programa.acuerdo}</h5>  
              <h6>{programa.nombre}</h6>  
                
              <div className='documents-container'>  
                {programa.documentos && programa.documentos.length > 0 ? ( // Solo mostrar documentos si existen  
                  programa.documentos.map(documento => (   
                    <div className="document-card" key={documento.id}>  
                      <span>{documento.nombre}</span>  
                      <button   
                        className='btn-gold'   
                        onClick={() => handleOpenPDF(documento.linkPDF)}   
                      >  
                        Ver PDF  
                      </button>  
                    </div>  
                  ))  
                ) : null} 
              </div>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};