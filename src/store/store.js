import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { agendaSlice } from "./Agenda/agendaSlice";
import { serviciosSlice } from "./Servicios/serviciosSlice";
import { transparenciaSlice } from "./Transparencia/transparenciaSlice";
import { menuSlice } from "./Menu/menuSlice";



const rootReducer = combineReducers({
  Agenda: agendaSlice.reducer,
  Menu: menuSlice.reducer,
  Servicios: serviciosSlice.reducer,
  Transparencia: transparenciaSlice.reducer,
  
});

export const store = configureStore({
  reducer: rootReducer,
});