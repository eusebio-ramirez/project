// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import getAgendaReducer from './slicers/getAgendaSlice';
import getServiciosReducer from './slicers/getServiciosSlice';
import getRubrosReducer from './slicers/getRubrosSlice';

const store = configureStore({
  reducer: {
    getAgenda: getAgendaReducer,
    getServicios: getServiciosReducer,
    getRubros: getRubrosReducer,
  },
});

export default store;
