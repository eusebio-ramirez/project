import { useDispatch, useSelector } from "react-redux";
import { addDato, clearDatos } from "../store/Servicios/serviciosSlice";
import { datosApi } from "../api";


export const useServicios = () => {
  const dispatch = useDispatch();
  const { datos } = useSelector((state) => state.Servicios);

  const listaServicios = async () => {
    try {
      const { data } = await datosApi.get("/servicios");
      
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
    listaServicios,
    limpiarDatos,
  };
};
