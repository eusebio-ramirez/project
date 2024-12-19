import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/Theme/ThemeSlice';
import rubrosReducer from '../features/Rubros/RubrosSlice';
import agendaReducer from '../features/Agenda/AgendaSlice';

import menuReducer from '../features/Menu/MenuSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    agenda: agendaReducer,
    rubros: rubrosReducer,

    menu: menuReducer,
  },
});
