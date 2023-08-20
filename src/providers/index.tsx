import { IProvider } from "../interfaces";
import { LoginProvider } from "./login";
import { PatientsProvider } from "./patients";
import { ThemeProvider } from "./theme";
import { DoctorProvider } from "./doctor";

const Provider = ({ children }: IProvider) => {
    return (
        <LoginProvider>
            <ThemeProvider>
                <PatientsProvider>
                    <DoctorProvider>{children}</DoctorProvider>
                </PatientsProvider>
            </ThemeProvider>
        </LoginProvider>
    );
};

export default Provider;
