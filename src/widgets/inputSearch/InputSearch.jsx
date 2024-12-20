import { React, useState, useEffect, useMemo } from "react";

import './inputSearch.css';

import Cards from "../cards/Cards";

const InputSearch = ({ parameter }) => {
    const [data, setData] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const filtered = useMemo(() => {
        return data.filter((item) =>
            item.nombre.toLowerCase().includes(busqueda.toLowerCase())
        );
    }, [data, busqueda]);

    const handleSearch = (event) => {
        setBusqueda(event.target.value);
    };

    useEffect(() => {
        const dataSinAcentos = parameter.map((item) => (
            {
                ...item,
            }
        ));
        setData(dataSinAcentos);
    }, [parameter]);

    return (
        <>
            <div className="content-tramites">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content-buscador">
                                <input type="text" className="buscador" placeholder="Buscar trámite" value={busqueda} onChange={handleSearch} />
                            </div>
                        </div>
                        <Cards data={filtered} />
                    </div>
                </div>
            </div>
        </>
    )
};

export default InputSearch;