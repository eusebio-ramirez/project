import { createSlice } from '@reduxjs/toolkit'
// Crea tu carpeta, crea un slice para guardar tus funciones dentro del redux
// Este es un ejemplo propio
export const rubroStorageSlice = createSlice({
    name:"rubroStorage", // Este es el nombre que invocas para llamar valores y funciones
    initialState: {value: [1]}, // valores guardados, obj
    reducers:{
        saluda: (state) =>{
            state.value.push(1)
        }, // aquí creas tus funcionalidades
    }
})

// Exporta tus funciones
export const {saluda} = rubroStorageSlice.actions
export default rubroStorageSlice.reducer