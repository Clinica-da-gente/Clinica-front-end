import { PaletteMode } from "@mui/material";
import { grey, blue } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode: mode,
        ...(mode === "light"
            ? {
                // palette values for light mode
                background: {
                    default: grey[200],
                },
                divider: grey[300],
                primary: {
                    main: blue[500],
                },
                secondary: {
                    main: blue[200],
                },
                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
            }
            : {
                // palette values for dark mode
                primary: blue,
                secondary: {
                    main: '#0ff'
                },
                divider: grey[600],
                text: {
                    secondary: grey[100],
                },
            }),
    },
});
