import { createSlice } from '@reduxjs/toolkit'
// Crea tu carpeta, crea un slice para guardar tus funciones dentro del redux
// Este es un ejemplo propio
export const rubroStorageSlice = createSlice({
    name:"rubroStorage", // Este es el nombre que invocas para llamar valores y funciones
    initialState: {value: []}, // valores guardados, obj
    reducers:{
        setData: (state,action) =>{
            state.value = action.payload
        }, 
    }
})

// Exporta tus funciones
export const {setData} = rubroStorageSlice.actions
export default rubroStorageSlice.reducer