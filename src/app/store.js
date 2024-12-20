// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import rubrosReducer from '../features/rubrosSlice';

export const store = configureStore({
  reducer: {
    rubros: rubrosReducer,
  },
});
