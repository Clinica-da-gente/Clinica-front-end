import { PaletteMode } from "@mui/material";
import { deepOrange, grey, blueGrey, blue } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode: mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: blue,
          background: "#D9D9D9",
          divider: grey[300],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: blue,
          divider: grey[800],
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});
