import { useMemo } from "react";

const Mensaje = ({ texto }) => {
    const getMensaje = () => {
        console.log('Get Mensaje');
        return texto;
    }
    //const mensaje = getMensaje();
    const mensaje = useMemo(() => {
        return getMensaje();
    }, [texto]);
    return (
        <div>{mensaje}</div>
    )
}

export default Mensaje;