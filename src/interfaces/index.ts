export interface IApp {}

export interface IProvider {
  children: React.ReactNode;
}
export interface IThemeContextProps {
  currentTheme: "light" | "dark";
  changeTheme: () => void;
}

export interface ILogin {
  email: string;
  password: string;
}

export type IUserTypes = "doctor" | "admin" | "attendant" | "" | null | undefined | void;

export type IPages = IUserTypes | "login";

export interface ILoginContext {
  currentloggedUserType: IUserTypes;
  changeLoggedUser: (params: IUserTypes) => void;
  login: (params: ILogin) => Promise<IUserTypes>;
  verifyUserAuthentication: () => Promise<IUserTypes> | void;
  logOut: () => void;
}
export type ILocalStorageTheme = "dark" | "light";