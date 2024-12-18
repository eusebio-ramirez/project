import { useDispatch, useSelector } from "react-redux";
import { addDato, clearDatos } from "../store/Menu/menuSlice";
import { datosApi } from "../api";


export const useMenuStore = () => {
  const dispatch = useDispatch();
  const { datos } = useSelector((state) => state.Menu);

  const listaMenu= async () => {
    try {
      const { data } = await datosApi.get("/menu");
      
      dispatch(addDato(data));
    } catch (error) {
      console.error("Error cargando Eventos", error);
    }
  };

  const limpiarDatos = () => {
    dispatch(clearDatos());
  };

  return {
    // Propiedades
    datos,

    // Métodos
    listaMenu,
    limpiarDatos,
  };
};
