import React from "react";
import { Paper, Stack, Typography } from "@mui/material";

export default function About() {
  return (
    <Paper sx={{ p: { xs: 3, md: 4 } }}>
      <Stack spacing={2}>
        <Typography variant="h2">About</Typography>
        <Typography color="text.secondary">
          Write a short artist statement here—materials, inspiration, process, etc.
        </Typography>
      </Stack>
    </Paper>
  );
}
