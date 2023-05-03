import { IProvider } from "../interfaces";
import { LoginProvider } from "./login";
import { ThemeProvider } from "./theme";
import { DoctorProvider } from "./doctor";

const Provider = ({ children }: IProvider) => {
  return (
    <LoginProvider>
      <ThemeProvider>
        <DoctorProvider>{children}</DoctorProvider>
      </ThemeProvider>
    </LoginProvider>
  );
};

export default Provider;
