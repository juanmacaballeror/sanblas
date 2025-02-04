import axios from "axios";

const api = axios.create({
  baseURL: "https://api.ejemplo.com",
});

export default api;
