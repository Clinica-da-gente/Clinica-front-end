import { useContext, createContext, useState } from "react";
import { toast } from "react-hot-toast";
import { ILogin, IProvider, IUserTypes, ILoginContext } from "../../interfaces";
import { getUserInfo, userLogin } from "../../services";

const LoginContext = createContext<ILoginContext>({} as ILoginContext);

let userTypeInLocalStorage: IUserTypes = "";
try {
  const userInfoInLocalStorage = localStorage.getItem("@UserInfo")
    ? JSON.parse(localStorage.getItem("@UserInfo") || "")
    : null;

  const { is_superuser, is_staff } = userInfoInLocalStorage;

  userTypeInLocalStorage = userInfoInLocalStorage
    ? is_superuser
      ? "admin"
      : is_staff
      ? "attendant"
      : "doctor"
    : "";
} catch (err) {}

export const LoginProvider = ({ children }: IProvider) => {
  const [currentloggedUserType, setCurrentloggedUserType] =
    useState<IUserTypes>(userTypeInLocalStorage as IUserTypes);

  const changeLoggedUser = (type: IUserTypes) => setCurrentloggedUserType(type);

  const setUserInfo = () => {
    return getUserInfo().then((res) => {
      const { is_staff, is_superuser } = res.data;
      localStorage.setItem("@UserInfo", JSON.stringify(res.data));
      return is_superuser ? "admin" : is_staff ? "attendant" : "doctor";
    });
  };

  const login = ({ email, password }: ILogin) => {
    return userLogin({ email, password }).then(async (res) => {
      localStorage.setItem("@UserToken", res.data.access);
      localStorage.setItem("@ultimoLogin", String(new Date().valueOf()));
      return await setUserInfo();
    });
  };

  const verifyUserAuthentication = () => {
    if (localStorage.getItem("@UserToken")) {
      return getUserInfo()
        .then(async () => {
          const userType = await setUserInfo();
          setCurrentloggedUserType(userType);
        })
        .catch(() => logOut());
    }
    return;
  };

  const logOut = () => {
    localStorage.removeItem("@UserToken");
    localStorage.removeItem("@ultimoLogin");
    localStorage.removeItem("@UserInfo");
    changeLoggedUser("");
    toast("Você foi deslogado");
  };

  return (
    <LoginContext.Provider
      value={{
        currentloggedUserType,
        changeLoggedUser,
        login,
        verifyUserAuthentication,
        logOut,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
