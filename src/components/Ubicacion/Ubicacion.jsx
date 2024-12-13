import React, { useMemo } from 'react';

const Ubicacion = ({ urlMap, title }) => {
    return (
        <div className='componentContainer'>
            <h2 className='secondTitle'>{title}</h2>
            <div style={{ width: '100%', height: '60vh' }}>
                <iframe
                    title="Mapa de ubicación"
                    src={urlMap}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Ubicacion;