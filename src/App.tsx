import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Routes from "./routes";
import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";
import { getDesignTokens } from "./styles";

const App = () => {
  const darkTheme = React.useMemo(
    () => createTheme(getDesignTokens("light")),
    ["light"]
  );
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
