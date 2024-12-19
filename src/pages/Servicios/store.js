import { configureStore } from '@reduxjs/toolkit';
import serviciosReducer from './serviciosSlice';

export const store = configureStore({
  reducer: {
    servicios: serviciosReducer,
  },
});
