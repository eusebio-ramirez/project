import { useEffect, useRef } from "react"
import { Button } from "react-bootstrap"

// eslint-disable-next-line react/prop-types
export const ButtonReLoad = ({children, loanding, metodo}) => {
    const refRecarga = useRef(null)
    useEffect(() => {
        if (loanding) {
            // eslint-disable-next-line react/prop-types
            refRecarga.current.innerText = "Cargando..."
        } else {
            // eslint-disable-next-line react/prop-types
            refRecarga.current.innerText = children
        }
    }, [loanding])
    return (
        <>
            <Button variant="danger" onClick={metodo} ref={refRecarga} >{children}</Button>
        </>
    )
}