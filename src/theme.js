import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#8D6D95" },
    secondary: { main: "#718A67" },
    background: { default: "#F9F7F2", paper: "#FFFFFF" },
    text: { primary: "#2F2924", secondary: "#594E44" },
  },
  typography: {
    fontFamily: ["Karla", "system-ui", "Segoe UI", "Arial", "sans-serif"].join(","),
    h1: {
      fontFamily: ["Marcellus SC", "Georgia", "serif"].join(","),
      fontSize: "clamp(2.5rem, 7vw, 5.8rem)",
      lineHeight: 0.95,
      fontWeight: 400,
    },
    h2: {
      fontFamily: ["Marcellus SC", "Georgia", "serif"].join(","),
      fontSize: "clamp(2rem, 4vw, 3.4rem)",
      lineHeight: 1.05,
      fontWeight: 400,
    },
    h3: { fontSize: "1.35rem", fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 22 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "0 18px 40px rgba(47, 41, 36, 0.08)",
        },
      },
    },
  },
});

export default theme;
