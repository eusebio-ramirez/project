import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  return await response.json();
};

export const getServicios = createAsyncThunk(
  "getServicios",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchData(
        "https://api-project-ap9h.onrender.com/api/servicios"
      );
      return data;
    } catch (error) {
      return rejectWithValue({ message: error.message || "Error de red" });
    }
  }
);

const initialState = {
  servicios: [],
  filteredServicios: [],
  loading: false,
  error: null,
};

const getServiciosSlice = createSlice({
  name: "getServicios",
  initialState,
  reducers: {
    searchServicios: (state, action) => {
      state.filteredServicios = state.servicios.filter((servicio) =>
        servicio.nombre.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    resetSearch: (state) => {
      state.filteredServicios = state.servicios;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getServicios.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getServicios.fulfilled, (state, action) => {
        state.loading = false;
        state.servicios = Array.isArray(action.payload) ? action.payload : [];
        state.filteredServicios = state.servicios;
      })
      .addCase(getServicios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error desconocido";
      });
  },
});

export const { searchServicios, resetSearch } = getServiciosSlice.actions;
export default getServiciosSlice.reducer;
