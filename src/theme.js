import { createTheme } from "@mui/material/styles";

export function getTheme(mode = "light") {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: { main: isDark ? "#C79AD1" : "#8D6D95" },
      secondary: { main: isDark ? "#9AB18E" : "#718A67" },
      background: {
        default: isDark ? "#171512" : "#F9F7F2",
        paper: isDark ? "#24211D" : "#FFFFFF",
      },
      text: {
        primary: isDark ? "#F6EFE8" : "#2F2924",
        secondary: isDark ? "#CDBFB3" : "#594E44",
      },
      divider: isDark ? "rgba(246, 239, 232, 0.14)" : "rgba(89, 78, 68, 0.16)",
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
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: "background-color 180ms ease, color 180ms ease",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 999, paddingInline: 22 },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            boxShadow: isDark
              ? "0 18px 40px rgba(0, 0, 0, 0.28)"
              : "0 18px 40px rgba(47, 41, 36, 0.08)",
          },
        },
      },
    },
  });
}
