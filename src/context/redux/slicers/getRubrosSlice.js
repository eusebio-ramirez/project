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
  loading: false,
  error: null,
};

const getAgendaSlice = createSlice({
  name: "getRubros",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRubros.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRubros.fulfilled, (state, action) => {
        state.loading = false;
        state.rubros = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(getRubros.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error desconocido";
      });
  },
});

export default getAgendaSlice.reducer;