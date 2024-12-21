import React from "react";

const CardActividades = (data, index) => {
    console.log(data);
    return (
        <>
            <div key={index} className="col-md-3 col-sm-6 col-12">
                <div className="card_container_informe">
                    <div
                        className="card_img"
                        style={{ backgroundImage: `url("${data.data.imagen}")` }}
                    ></div>
                    <div className="card_cintillo"></div>
                    <div className="card_datos">
                        <h5>{data.data.informe}</h5>
                        <h6>{data.data.fecha}</h6>
                        <h6>{data.data.lugar}</h6>
                        <h6>{data.data.anio}</h6>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CardActividades;