import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: []
};

const programasSlice = createSlice({
  name: 'programas',
  initialState,
  reducers: {
    setProgramas: {
      reducer: (state, action) => {
        state.data = action.payload;
      },
      prepare: (data) => {
        return { payload: data ? data : [] };
      }
    },
  }
});

export const { setProgramas } = programasSlice.actions;

export default programasSlice.reducer;