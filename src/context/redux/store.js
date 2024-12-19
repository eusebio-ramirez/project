// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import getAgendaReducer from './slicers/getAgendaSlice';
import getServiciosReducer from './slicers/getServiciosSlice';


const store = configureStore({
  reducer: {
    getAgenda: getAgendaReducer,
    getServicios: getServiciosReducer,
  },
});

export default store;
