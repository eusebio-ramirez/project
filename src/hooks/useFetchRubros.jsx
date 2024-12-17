import { useEffect, useState } from "react"

export const useFetchRubros = () => {
    const [rubros, setRubros] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [disparador, setDisparador] = useState(1)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        async function peticion() {
            setLoading(true)
            try {
                const response = await fetch("https://api-project-ap9h.onrender.com/api/rubros")
                const data = await response.json()
                setRubros(data)
            } catch (error) {
                console.error(error)
                setError(error)
            } finally{
                setLoading(false)
            }
        }
        peticion()
    }, [disparador]) // estado para volver a cargar la peticion

    function recargarPeticion(){
        setDisparador(disparador * -1)
    }


    return { rubros, isLoading, error, recargarPeticion}
}