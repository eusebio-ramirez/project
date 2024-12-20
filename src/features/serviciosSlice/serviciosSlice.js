import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//obtener los servicios de la API
export const fetchServicios = createAsyncThunk(
  'servicios/fetchServicios',
  async () => {
    const response = await fetch('https://api-project-ap9h.onrender.com/api/servicios');
    if (!response.ok) {
      throw new Error('Error al obtener los servicios');
    }
    return response.json();
  }
);

const serviciosSlice = createSlice({
  name: 'servicios',
  initialState: {
    servicios: [],
    loading: false,
    error: null,
  },
  reducers: {
    
    agregarServicio: (state, action) => {
      state.servicios.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServicios.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServicios.fulfilled, (state, action) => {
        state.loading = false;
        state.servicios = action.payload; // Actualiza con los datos de la API
      })
      .addCase(fetchServicios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Exportar las acciones y el reducer
export const { agregarServicio } = serviciosSlice.actions;
export default serviciosSlice.reducer;
