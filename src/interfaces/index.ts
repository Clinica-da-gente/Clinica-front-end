// export interface IApp {}

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

export type IUserTypes =
  | "doctor"
  | "admin"
  | "attendant"
  | ""
  | null
  | undefined
  | void;

export type IPages = IUserTypes | "login";

export type IScreenType = "home" | "newAppointment" | "examBudged" | "searchAppointments" | "patients" | "doctors" | "exams" | "bank" | "profit" | "dept";

export interface ILoginContext {
  currentloggedUserType: IUserTypes;
  changeLoggedUser: (params: IUserTypes) => void;
  login: (params: ILogin) => Promise<IUserTypes>;
  verifyUserAuthentication: () => Promise<IUserTypes> | void;
  logOut: (callback: any) => void;
  setCurrentScreen: (screen: IScreenType) => void;
  currentScreen?: IScreenType;
  user: any;
}


export interface IPatientContext {
  // currentloggedUserType: IUserTypes;
  getPatients: () => Promise<IPatient[]>;
}

export interface IPatient {
  cpf: string;
  data_nascimento: string;
  email: string;
  id_convenio: string;
  nome: string;
  telefone: string;
}

export type ILocalStorageTheme = "dark" | "light";
