import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: []
};

const rubrosSlice = createSlice({
  name: 'rubros',
  initialState,
  reducers: {
    setRubros: {
      reducer: (state, action) => {
        state.data = action.payload;
      },
      prepare: (data) => {
        return { payload: data ? data : [] };
      }
    },
  }
});

export const { setRubros } = rubrosSlice.actions;

export default rubrosSlice.reducer;