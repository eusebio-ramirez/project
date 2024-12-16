import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    events: []
};

const agendaSlice = createSlice({
    name: 'agenda',
    initialState,
    reducers: {
        setAgenda: {
            reducer: (state, action) => {
                state.events = action.payload;
            },
            prepare: (events) => {
                const serializableEvents = events.map(event => ({
                    ...event,
                    start: event.start.toISOString(),
                    end: event.end.toISOString(),
                }));
                return { payload: serializableEvents };
            }
        },
    }
});

export const { setAgenda } = agendaSlice.actions;

export default agendaSlice.reducer;