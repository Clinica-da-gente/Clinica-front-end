import axios from "axios";
import { ILogin } from '../interfaces';

const api = axios.create({
  baseURL: "http://localhost:8000/",
});

export const userLogin = ({ email, password}: ILogin) => { 
  return api.post("/login/", {
    email,
    password
  })
};

export const getUserInfo = () => {
  const token = localStorage.getItem("@UserToken");
  return api.get("/usuarios/profile/", {
    headers: {
      Authorization: "Bearer " + token,
    }
  })
}

export const imgur_api = axios.create({
  baseURL: "https://imgur-api-uploader.onrender.com/",
});

export default api;
