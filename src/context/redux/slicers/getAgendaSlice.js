import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  return await response.json();
};

export const getAgenda = createAsyncThunk(
  "getAgenda",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchData(
        "https://api-project-ap9h.onrender.com/api/agenda"
      );
      return data;
    } catch (error) {
      return rejectWithValue({ message: error.message || "Error de red" });
    }
  }
);

const initialState = {
  agenda: [],
  loading: false,
  error: null,
};

const getAgendaSlice = createSlice({
  name: "getAgenda",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAgenda.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAgenda.fulfilled, (state, action) => {
        state.loading = false;
        state.agenda = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(getAgenda.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error desconocido";
      });
  },
});

export default getAgendaSlice.reducer;