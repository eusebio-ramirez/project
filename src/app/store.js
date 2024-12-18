import { configureStore } from '@reduxjs/toolkit'
import rubroStorageSlice from '../features/rubroStorage/rubroStorageSlice'

export const store = configureStore({
    reducer: { // Agrega tu feature aquí
        rubroStorage : rubroStorageSlice,
    },
  })