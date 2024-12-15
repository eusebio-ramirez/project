// store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './ThemeSlice';
import agendaReducer from './AgendaSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    agenda: agendaReducer,
  },
});
