import React from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <Paper sx={{ p: { xs: 3, md: 5 } }}>
      <Stack spacing={2}>
        <Typography variant="h1">Cozy, handmade art for calm spaces.</Typography>
        <Typography color="text.secondary">
          A simple home for originals, prints, and little collections.
        </Typography>

        <Box>
          <Button variant="contained" component={RouterLink} to="/gallery">
            View Gallery
          </Button>
          <Button sx={{ ml: 1 }} variant="outlined" component={RouterLink} to="/about">
            About the Artist
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}
