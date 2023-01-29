import { IProvider } from "../interfaces";
import { LoginProvider } from "./login";
import { ThemeProvider } from "./theme";

const Provider = ({ children }: IProvider) => {
  return (
    <LoginProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </LoginProvider>
  );
};

export default Provider;
