import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import { ColorModeContext } from "../colorMode";
import { brand } from "../content";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Layout() {
  const theme = useTheme();
  const { mode, toggleColorMode } = React.useContext(ColorModeContext);
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuAnchor);

  const openMobileMenu = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const closeMobileMenu = () => {
    setMobileMenuAnchor(null);
  };

  const activeNavStyles = {
    color: "primary.main",
    backgroundColor: mode === "dark" ? "rgba(199,154,209,0.15)" : "rgba(141,109,149,0.12)",
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", bgcolor: "background.default" }}>
      <AppBar
        position="sticky"
        elevation={0}
        color="transparent"
        sx={{
          bgcolor: mode === "dark" ? "rgba(23, 21, 18, 0.92)" : "rgba(249, 247, 242, 0.92)",
          backdropFilter: "blur(14px)",
        }}
      >
        <Toolbar sx={{ gap: 1.5, minHeight: { xs: 68, md: 88 }, flexWrap: "nowrap" }}>
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ flexGrow: 1, minWidth: 0 }}>
            <Box
              component="img"
              src={brand.logo}
              alt=""
              sx={{ width: { xs: 40, sm: 46 }, height: { xs: 40, sm: 46 }, objectFit: "contain", flexShrink: 0 }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "text.primary",
                fontFamily: "Marcellus SC, Georgia, serif",
                fontSize: { xs: "1.05rem", sm: "1.35rem" },
                fontWeight: 400,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {brand.name}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={0.5} sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                sx={{
                  color: "text.primary",
                  minWidth: "auto",
                  "&.active": activeNavStyles,
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Tooltip title={mode === "dark" ? "Use light mode" : "Use dark mode"}>
            <IconButton
              color="inherit"
              aria-label={mode === "dark" ? "Use light mode" : "Use dark mode"}
              onClick={toggleColorMode}
              sx={{
                color: "text.primary",
                border: `1px solid ${theme.palette.divider}`,
                bgcolor: "background.paper",
                flexShrink: 0,
                "&:hover": { bgcolor: "action.hover" },
              }}
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>

          <IconButton
            color="inherit"
            aria-label="Open navigation menu"
            aria-controls={isMobileMenuOpen ? "mobile-navigation-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={isMobileMenuOpen ? "true" : undefined}
            onClick={openMobileMenu}
            sx={{
              display: { xs: "inline-flex", sm: "none" },
              color: "text.primary",
              border: `1px solid ${theme.palette.divider}`,
              bgcolor: "background.paper",
              flexShrink: 0,
              "&:hover": { bgcolor: "action.hover" },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="mobile-navigation-menu"
            anchorEl={mobileMenuAnchor}
            open={isMobileMenuOpen}
            onClose={closeMobileMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            slotProps={{
              paper: {
                sx: {
                  mt: 1,
                  minWidth: 180,
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                  bgcolor: "background.paper",
                  boxShadow:
                    mode === "dark"
                      ? "0 18px 40px rgba(0, 0, 0, 0.34)"
                      : "0 18px 40px rgba(47, 41, 36, 0.16)",
                },
              },
            }}
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.to}
                component={NavLink}
                to={item.to}
                onClick={closeMobileMenu}
                sx={{
                  py: 1.25,
                  "&.active": activeNavStyles,
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
        <Divider />
      </AppBar>

      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 }, flexGrow: 1 }}>
        <Outlet />
      </Container>

      <Divider />
      <Container sx={{ py: 3 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} {brand.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Artwork by {brand.artist} in the {brand.location}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
