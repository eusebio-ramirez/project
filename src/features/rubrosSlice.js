import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRubros = createAsyncThunk('rubros/fetchRubros', async () => {
  const response = await axios.get('https://api-project-ap9h.onrender.com/api/rubros');
  return response.data; // Asegúrate de que esto coincida con la estructura de datos que necesitas
});

const rubrosSlice = createSlice({
  name: 'rubros',
  initialState: {
    rubros: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRubros.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRubros.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rubros = action.payload;
      })
      .addCase(fetchRubros.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default rubrosSlice.reducer;
