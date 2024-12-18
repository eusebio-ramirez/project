import { useDispatch, useSelector } from "react-redux";
import { addDato, clearDatos } from "../store/Agenda/agendaSlice";
import { datosApi } from "../api";


export const useAgendaStore = () => {
  const dispatch = useDispatch();
  const { datos } = useSelector((state) => state.Agenda);
  const listaAgenda = async () => {
    try {
      const { data } = await datosApi.get("/agenda");
      
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
    listaAgenda,
    limpiarDatos,
  };
};
