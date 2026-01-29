import React from "react";
import { Paper, Stack, Typography, Link } from "@mui/material";

export default function Contact() {
  return (
    <Paper sx={{ p: { xs: 3, md: 4 } }}>
      <Stack spacing={1.5}>
        <Typography variant="h2">Contact</Typography>
        <Typography color="text.secondary">
          Email: <Link href="mailto:hello@example.com">hello@example.com</Link>
        </Typography>
        <Typography color="text.secondary">
          Instagram: <Link href="https://instagram.com/" target="_blank" rel="noreferrer">@yourhandle</Link>
        </Typography>
      </Stack>
    </Paper>
  );
}
