import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: []
};

const informeSlice = createSlice({
  name: 'informe',
  initialState,
  reducers: {
    setInforme: {
      reducer: (state, action) => {
        state.data = action.payload;
      },
      prepare: (data) => {
        return { payload: data ? data : [] };
      }
    },
  }
});

export const { setInforme } = informeSlice.actions;

export default informeSlice.reducer;