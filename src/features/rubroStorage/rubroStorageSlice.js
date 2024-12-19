import { createSlice } from '@reduxjs/toolkit';

// Crea un slice para gestionar el estado de rubroStorage
export const rubroStorageSlice = createSlice({
    name: "rubroStorage", // Nombre del slice
    initialState: { value: [] }, // Estado inicial
    reducers: {
        // Acción para establecer datos
        setData: (state, action) => {
            state.value = action.payload;
        },
        // Acción para agregar un valor al estado
        saluda: (state) => {
            state.value.push(1);
        },
    },
});

// Exporta las acciones
export const { setData, saluda } = rubroStorageSlice.actions;

// Exporta el reducer por defecto
export default rubroStorageSlice.reducer;