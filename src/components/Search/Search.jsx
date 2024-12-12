import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const Search = ({setBusquedaActiva}) => {
    const [busqueda, setBusqueda] = useState("")

    
    console.log("reactualizo")
    function busquedaCategory() {
        setBusquedaActiva(busqueda)
    }
    
    return (
        <div className="inputBusqueda">
            <input type="text" onChange={(e) => setBusqueda(e.target.value)} />
            <button onClick={busquedaCategory}>Buscar</button>
        </div>
    )
}