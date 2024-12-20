import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/Theme/ThemeSlice';
import rubrosReducer from '../features/Rubros/RubrosSlice';
import agendaReducer from '../features/Agenda/AgendaSlice';
import serviciosReducer from '../features/Servicios/ServiciosSlice';
import menuReducer from '../features/Menu/MenuSlice';
import informeReducer from '../features/Informe/InformeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    agenda: agendaReducer,
    rubros: rubrosReducer,
    servicios: serviciosReducer,
    menu: menuReducer,
    informe: informeReducer,
  },
});
