import axios from "axios";
import { ILogin } from "../interfaces";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const userLogin = ({ email, password }: ILogin) => {
  return api.post("/login", {
    email,
    senha: password,
  });
};

export const getUserInfo = async () => {
  const token = localStorage.getItem("@UserToken");
  return await api.get("/usuarios/profile", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const imgur_api = axios.create({
  baseURL: "https://imgur-api-uploader.onrender.com/",
});

export default api;
