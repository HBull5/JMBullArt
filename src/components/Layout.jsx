import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Button,
  Divider,
  Stack,
} from "@mui/material";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Layout() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar position="sticky" elevation={0} color="transparent">
        <Toolbar sx={{ gap: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 800 }}>
            Blooming Bull Art
          </Typography>

          <Stack direction="row" spacing={1}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                sx={{
                  color: "text.primary",
                  "&.active": {
                    color: "primary.main",
                    backgroundColor: "rgba(75,107,90,0.10)",
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

      <Container sx={{ py: 4, flexGrow: 1 }}>
        <Outlet />
      </Container>

      <Divider />
      <Container sx={{ py: 3 }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Blooming Bull Studio
        </Typography>
      </Container>
    </Box>
  );
}
