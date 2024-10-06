import axios from "axios";

// https://viacep.com.br/ws/CEP/json

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;