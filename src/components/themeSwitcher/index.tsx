import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "../../providers/theme";
import { Fab } from "@mui/material";

const ThemeSwitcher = () => {
  const { currentTheme, changeTheme } = useTheme();
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "fixed",
        bottom: "16px",
        left: "16px",
      }}
      onClick={() => changeTheme()}
    >
      <Fab color="primary">
        {currentTheme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </Fab>
    </Box>
  );
};

export default ThemeSwitcher;
