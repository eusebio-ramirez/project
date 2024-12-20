import { createSlice } from '@reduxjs/toolkit';

export const agendaSlice = createSlice({
  name: 'agenda',
  initialState: {
    datos: [],
  },
  reducers: {
    
    addDato: (state, action) => {
      state.datos.push(action.payload);
    },
  }
});

export const { addDato, updateDato, deleteDato, clearDatos } = agendaSlice.actions;