import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
});

export const imgur_api = axios.create({
  baseURL: "https://imgur-api-uploader.onrender.com/",
});

export default api;
