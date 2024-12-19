import { createSlice } from '@reduxjs/toolkit'
// Crea tu carpeta, crea un slice para guardar tus funciones dentro del redux
// Este es un ejemplo propio
export const rubroStorageSlice = createSlice({
    name:"rubroStorage", // Este es el nombre que invocas para llamar valores y funciones
<<<<<<< HEAD
    initialState: {value: []}, // valores guardados, obj
    reducers:{
        setData: (state,action) =>{
            state.value = action.payload
        }, 
=======
    initialState: {value: [1]}, // valores guardados, obj
    reducers:{
        saluda: (state) =>{
            state.value.push(1)
        }, // aquí creas tus funcionalidades
>>>>>>> a055b9545206049d749a1292e02eaf487183b7e4
    }
})

// Exporta tus funciones
<<<<<<< HEAD
export const {setData} = rubroStorageSlice.actions
=======
export const {saluda} = rubroStorageSlice.actions
>>>>>>> a055b9545206049d749a1292e02eaf487183b7e4
export default rubroStorageSlice.reducer