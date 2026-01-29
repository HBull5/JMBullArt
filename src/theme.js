import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#4B6B5A" }, // soft green
    secondary: { main: "#A68BC2" }, // soft lavender
    background: { default: "#FAF8F4", paper: "#FFFFFF" },
  },
  typography: {
    fontFamily: ["system-ui", "Segoe UI", "Roboto", "Arial"].join(","),
    h1: { fontSize: "2.2rem", fontWeight: 700 },
    h2: { fontSize: "1.6rem", fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 14 },
});

export default theme;
