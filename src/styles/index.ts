import { PaletteMode } from "@mui/material";
import { deepOrange, grey, blueGrey } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode: mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: blueGrey,
          divider: deepOrange[700],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: grey[800],
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});
