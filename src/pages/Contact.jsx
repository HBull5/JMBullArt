import React from "react";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ContactPaintBackground from "../components/ContactPaintBackground";
import Reveal from "../components/Reveal";
import { brand } from "../content";

export default function Contact() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: 520 },
        display: "grid",
        placeItems: "center",
        py: { xs: 4, md: 8 },
        overflow: "hidden",
      }}
    >
      <ContactPaintBackground />
      <Stack spacing={3} alignItems="center" textAlign="center" sx={{ position: "relative", zIndex: 1, maxWidth: 760 }}>
        <Reveal>
          <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700 }}>
            Contact
          </Typography>
        </Reveal>
        <Reveal delay={90}>
          <Typography variant="h1">Let's stay in touch</Typography>
        </Reveal>
        <Reveal delay={180}>
          <Typography color="text.secondary" sx={{ fontSize: "1.15rem" }}>
            For commissions, murals, available work, or general questions, email Jessica at{" "}
            <Link href={`mailto:${brand.email}`}>{brand.email}</Link>.
          </Typography>
        </Reveal>

        <Reveal delay={270}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems="center">
            <Button
              variant="contained"
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
              startIcon={<InstagramIcon />}
            >
              Instagram
            </Button>
            <Button
              variant="outlined"
              href={brand.facebook}
              target="_blank"
              rel="noreferrer"
              startIcon={<FacebookIcon />}
            >
              Facebook
            </Button>
            <Button variant="contained" href={brand.etsy} target="_blank" rel="noreferrer" startIcon={<StorefrontIcon />}>
              Etsy
            </Button>
          </Stack>
        </Reveal>
      </Stack>
    </Box>
  );
}
