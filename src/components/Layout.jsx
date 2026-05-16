import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { brand } from "../content";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Layout() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", bgcolor: "background.default" }}>
      <AppBar
        position="sticky"
        elevation={0}
        color="transparent"
        sx={{ bgcolor: "rgba(249, 247, 242, 0.92)", backdropFilter: "blur(14px)" }}
      >
        <Toolbar sx={{ gap: 2, minHeight: { xs: 72, md: 88 }, flexWrap: "wrap" }}>
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ flexGrow: 1, minWidth: 220 }}>
            <Box component="img" src={brand.logo} alt="" sx={{ width: 46, height: 46, objectFit: "contain" }} />
            <Typography
              variant="h6"
              sx={{
                color: "text.primary",
                fontFamily: "Marcellus SC, Georgia, serif",
                fontSize: { xs: "1.05rem", sm: "1.35rem" },
                fontWeight: 400,
              }}
            >
              {brand.name}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={0.5} sx={{ flexWrap: "wrap" }}>
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
