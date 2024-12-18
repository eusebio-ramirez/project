import { useDispatch, useSelector } from "react-redux";
import { addDato, clearDatos } from "../store/Transparencia/transparenciaSlice";
import { datosApi } from "../api";


export const useTransparencia = () => {
  const dispatch = useDispatch();
  const { datos } = useSelector((state) => state.Transparencia);

  const listaTransparencia = async () => {
    try {
      const { data } = await datosApi.get("/rubros");
      
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
    listaTransparencia,
    limpiarDatos,
  };
};
