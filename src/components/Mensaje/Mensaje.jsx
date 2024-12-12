import { useContext, useMemo } from "react";
import { ProdContext } from "../../context/ProdContext";

export const Mensaje = ({texto}) =>{
    const {product} = useContext(ProdContext);
    function getMensaje(){
        console.log("Get "+ product)
        return texto;
    }

    //const mensaje = getMensaje();
    const mensaje = useMemo(() =>{
        return getMensaje()
    },[texto]) 
    
    return mensaje
}