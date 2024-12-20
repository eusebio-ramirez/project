import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  return await response.json();
};

export const getRubros = createAsyncThunk(
  "getRubros",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchData(
        "https://api-project-ap9h.onrender.com/api/rubros"
      );
      return data;
    } catch (error) {
      return rejectWithValue({ message: error.message || "Error de red" });
    }
  }
);

const initialState = {
  rubros: [],
  filteredRubros: [],
  loading: false,
  error: null,
};

const getRubrosSlice = createSlice({
  name: "getRubros",
  initialState,
  reducers: {
    searchRubros: (state, action) => {
      state.filteredRubros = state.rubros.filter((rubro) =>
        rubro.nombre.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    resetSearch: (state) => {
      state.filteredRubros = state.rubros;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRubros.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRubros.fulfilled, (state, action) => {
        state.loading = false;
        state.rubros = Array.isArray(action.payload) ? action.payload : [];
        state.filteredRubros = state.rubros;
      })
      .addCase(getRubros.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error desconocido";
      });
  },
});

export const { searchRubros, resetSearch } = getRubrosSlice.actions;
export default getRubrosSlice.reducer;
