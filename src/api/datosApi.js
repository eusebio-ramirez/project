import axios from "axios";

const VITE_API_URL = 'https://api-project-ap9h.onrender.com/api';

const datosApi = axios.create( {
    baseURL: VITE_API_URL
});


export default datosApi;
