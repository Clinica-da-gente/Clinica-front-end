import { useContext, createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { ILogin, IProvider, IUserTypes, ILoginContext } from "../../interfaces";
import api, { getUserInfo, userLogin } from "../../services";

const LoginContext = createContext<ILoginContext>({} as ILoginContext);

let userTypeInLocalStorage: IUserTypes = "";
try {
  const userInfoInLocalStorage = localStorage.getItem("@UserInfo")
    ? JSON.parse(localStorage.getItem("@UserInfo") || "")
    : null;

  const { e_admin, e_medico } = userInfoInLocalStorage;

  userTypeInLocalStorage = userInfoInLocalStorage
    ? e_admin
      ? "admin"
      : e_medico
      ? "doctor"
      : "attendant"
    : "";
} catch (err) {}

export const LoginProvider = ({ children }: IProvider) => {
  const [currentloggedUserType, setCurrentloggedUserType] =
    useState<IUserTypes>(userTypeInLocalStorage as IUserTypes);
  const [user, setUser] = useState([]);

  const changeLoggedUser = (type: IUserTypes) => setCurrentloggedUserType(type);

  const setUserInfo = async () => {
    return await getUserInfo().then((res) => {
      const { e_medico, e_admin } = res.data;
      setUser(res.data);
      localStorage.setItem("@UserInfo", JSON.stringify(res.data));
      return e_admin ? "admin" : e_medico ? "doctor" : "attendant";
    });
  };

  const login = async ({ email, password }: ILogin) => {
    return await userLogin({ email, password }).then(async (res) => {
      localStorage.setItem("@UserToken", res.data.token);
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

  const logOut = (callback: Function) => {
    localStorage.removeItem("@UserToken");
    localStorage.removeItem("@ultimoLogin");
    localStorage.removeItem("@UserInfo");
    changeLoggedUser("");
    toast("Você foi deslogado");
    callback();
    history.pushState(null, "", location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  };

  return (
    <LoginContext.Provider
      value={{
        currentloggedUserType,
        changeLoggedUser,
        login,
        verifyUserAuthentication,
        logOut,
        user,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
