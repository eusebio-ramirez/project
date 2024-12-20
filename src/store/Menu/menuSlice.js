import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
  name: 'Menu',
  initialState: {
    datos: [],
  },
  reducers: {
    addDato: (state, action) => {
      state.datos.push(action.payload);
    },
    updateDato: (state, action) => {
      const index = state.datos.findIndex(dato => dato.id === action.payload.id);
      if (index !== -1) {
        state.datos[index] = action.payload;
      }
    },
    deleteDato: (state, action) => {
      state.datos = state.datos.filter(dato => dato.id !== action.payload);
    },
    clearDatos: (state) => {
      state.datos = [];
      state.activeDato = null;
    }
  }
});
export const { addDato, updateDato, deleteDato, clearDatos } = menuSlice.actions;