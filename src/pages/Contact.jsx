import React from "react";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { brand } from "../content";

export default function Contact() {
  return (
    <Box
      sx={{
        minHeight: { xs: "auto", md: 520 },
        display: "grid",
        placeItems: "center",
        py: { xs: 4, md: 8 },
      }}
    >
      <Stack spacing={3} alignItems="center" textAlign="center" sx={{ maxWidth: 760 }}>
        <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700 }}>
          Contact
        </Typography>
        <Typography variant="h1">Let's stay in touch</Typography>
        <Typography color="text.secondary" sx={{ fontSize: "1.15rem" }}>
          For commissions, murals, available work, or general questions, email Jessica at{" "}
          <Link href={`mailto:${brand.email}`}>{brand.email}</Link>.
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems="center">
          <Button variant="contained" href={`mailto:${brand.email}`} startIcon={<EmailIcon />}>
            Email Jessica
          </Button>
          <Button variant="outlined" href={brand.instagram} target="_blank" rel="noreferrer" startIcon={<InstagramIcon />}>
            Instagram
          </Button>
          <Button variant="outlined" href={brand.facebook} target="_blank" rel="noreferrer" startIcon={<FacebookIcon />}>
            Facebook
          </Button>
          <Button variant="outlined" href={brand.etsy} target="_blank" rel="noreferrer" startIcon={<StorefrontIcon />}>
            Etsy
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
