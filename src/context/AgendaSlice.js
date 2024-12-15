import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    events: []
};

const agendaSlice = createSlice({
    name: 'agenda',
    initialState,
    reducers: {
        setAgenda: (state, action) => {
            state.events = action.payload;
        },
    }
});

export const { setAgenda } = agendaSlice.actions;

export default agendaSlice.reducer;