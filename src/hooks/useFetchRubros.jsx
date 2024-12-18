import { useCallback, useEffect, useState } from "react"
import { setData } from "../features/rubroStorage/rubroStorageSlice"; // importa del features
import { useDispatch, useSelector } from "react-redux";


export const useFetchRubros = () => {
    const [rubros, setRubros] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [disparador, setDisparador] = useState(1)
    const [error, setError] = useState(null)

    const dataRedux = useSelector((state) => state.rubroStorage.value) // nombres del counterSlice
    const dispatch = useDispatch() // Utilización de metodos

    const peticionRec = useCallback(async () => {
        setLoading(true);
        setError(null); // Reinicia cualquier error previo
        try {
            const response = await fetch("https://api-project-ap9h.onrender.com/api/rubros");
            if (!response.ok) {
                throw new Error(`Error en la respuesta: ${response.status}`);
            }
            const data = await response.json();
            setRubros(data);
            dispatch(setData(data))
        } catch (error) {
            console.error("Error al obtener rubros:", error);
            setError(error.message || "Error desconocido");
        } finally {
            setLoading(false);
        }
    }, []); // Solo depende de la inicialización

    useEffect(() => {
        if (dataRedux.length == 0) {
            peticionRec();
        } else{
            setRubros(dataRedux)
        }
    }, [disparador]);

    function recargarPeticion() {
        dispatch(setData([]))
        setDisparador(disparador * -1)
    }

    return { rubros, isLoading, error, recargarPeticion }
}