import { useState } from "react"
import { ProdContext } from "./ProdContext"

// eslint-disable-next-line react/prop-types
export const ProdProvider = ({children}) =>{
    const [product, setProduct]= useState([])
   return(
    <ProdContext.Provider value={{product, setProduct}}>
        {children}
    </ProdContext.Provider>
   ) 
}