import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: []
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu: {
      reducer: (state, action) => {
        state.data = action.payload;
      },
      prepare: (data) => {
        return { payload: data ? data : [] };
      }
    },
  }
});

export const { setMenu } = menuSlice.actions;

export default menuSlice.reducer;