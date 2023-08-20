import { useContext, createContext, useState } from "react";
import {
    ILocalStorageTheme,
    IProvider,
    IThemeContextProps,
} from "../../interfaces";

const ThemeContext = createContext<IThemeContextProps>(
  {} as IThemeContextProps
);

const localStorageTheme = localStorage.getItem("@currentTheme")
    ? localStorage.getItem("@currentTheme")
    : "dark";

export const ThemeProvider = ({ children }: IProvider) => {
    const [currentTheme, setCurrentTheme] = useState<ILocalStorageTheme>(
    localStorageTheme as ILocalStorageTheme
    );
    const changeTheme = () => {
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        localStorage.setItem("@currentTheme", newTheme);
        setCurrentTheme(newTheme);
    };

    
    return (
        <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
