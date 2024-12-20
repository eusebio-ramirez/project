import React, { useState, useEffect } from "react";

import useFetch from "../../hook/useFetch";

import InputSearch from "../../widgets/inputSearch/InputSearch";

const Servicios = () => {

    const { data, getRequest } = useFetch();

    const getServices = async () => {
        await getRequest("https://api-project-ap9h.onrender.com/api/servicios");
    }

    useEffect(() => {
        getServices();
    }, []);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="title">
                            Servicios
                        </h3>
                        <hr className="hr-gob" />
                    </div>
                    {data != null &&
                        <InputSearch parameter={data} />
                    }
                </div>
            </div>
        </>
    )
};

export default Servicios;