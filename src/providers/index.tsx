import { IProvider } from "../interfaces";
import { LoginProvider } from "./login";
import { PatientsProvider } from "./patients";
import { ThemeProvider } from "./theme";

const Provider = ({ children }: IProvider) => {
  return (
    <LoginProvider>
      <PatientsProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </PatientsProvider>
    </LoginProvider>
  );
};

export default Provider;
