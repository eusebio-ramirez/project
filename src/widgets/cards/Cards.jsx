import React, { useState, useEffect } from "react";

import './cards.css';

import useCustomNavigate from "../../hook/useCustomNavigate";

const Cards = ({ data }) => {
    const { goToExternal } = useCustomNavigate();
    const [dataShow, setDataShow] = useState([]);

    useEffect(() => {
        setDataShow(data);
    }, [data]);

    return (
        <>
            {dataShow.map((item, index) => (
                <div className="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{item.nombre}</h5>
                            <p class="card-text">{item.descripcion}</p>
                            <a onClick={() => goToExternal(item.url)} class="card-link">Ver más</a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
};

export default Cards;