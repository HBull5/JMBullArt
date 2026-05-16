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
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { brand } from "../content";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Layout() {
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuAnchor);

  const openMobileMenu = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const closeMobileMenu = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", bgcolor: "background.default" }}>
      <AppBar
        position="sticky"
        elevation={0}
        color="transparent"
        sx={{ bgcolor: "rgba(249, 247, 242, 0.92)", backdropFilter: "blur(14px)" }}
      >
        <Toolbar sx={{ gap: 2, minHeight: { xs: 68, md: 88 }, flexWrap: "nowrap" }}>
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
                  "&.active": {
                    color: "primary.main",
                    backgroundColor: "rgba(141,109,149,0.12)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

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
              border: "1px solid rgba(89, 78, 68, 0.18)",
              bgcolor: "rgba(255,255,255,0.45)",
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
                  border: "1px solid rgba(89, 78, 68, 0.14)",
                  boxShadow: "0 18px 40px rgba(47, 41, 36, 0.16)",
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
                  "&.active": {
                    color: "primary.main",
                    backgroundColor: "rgba(141,109,149,0.12)",
                  },
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
