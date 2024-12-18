import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: []
};

const serviciosSlice = createSlice({
  name: 'servicios',
  initialState,
  reducers: {
    setServicios: {
      reducer: (state, action) => {
        state.data = action.payload;
      },
      prepare: (data) => {
        return { payload: data ? data : [] };
      }
    },
  }
});

export const { setServicios } = serviciosSlice.actions;

export default serviciosSlice.reducer;