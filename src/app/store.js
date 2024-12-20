import { configureStore } from '@reduxjs/toolkit'
import rubroStorageSlice from '../features/rubroStorage/rubroStorageSlice'
import serviciosReducer from '../features/serviciosSlice/serviciosSlice';

export const store = configureStore({
    reducer: { // Agrega tu feature aquí
        rubroStorage : rubroStorageSlice,
        servicios: serviciosReducer
    },
  })