import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import { ColorModeContext } from "./colorMode";
import { getTheme } from "./theme";

function getInitialMode() {
  const savedMode = window.localStorage.getItem("blooming-bull-color-mode");

  if (savedMode === "light" || savedMode === "dark") {
    return savedMode;
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Root() {
  const [mode, setMode] = React.useState(getInitialMode);
  const theme = React.useMemo(() => getTheme(mode), [mode]);
  const colorMode = React.useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((currentMode) => (currentMode === "light" ? "dark" : "light"));
      },
    }),
    [mode],
  );

  React.useEffect(() => {
    window.localStorage.setItem("blooming-bull-color-mode", mode);
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
