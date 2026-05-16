import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";
import PaletteIcon from "@mui/icons-material/Palette";
import PlaceIcon from "@mui/icons-material/Place";
import ParallaxImage from "../components/ParallaxImage";
import Reveal from "../components/Reveal";
import { brand, images } from "../content";

const notes = [
  { icon: <BrushIcon />, label: "Murals", text: "Large-scale work for churches, shared spaces, and meaningful places." },
  { icon: <PaletteIcon />, label: "Originals", text: "Expressive artwork shaped by color, texture, and personal story." },
  { icon: <PlaceIcon />, label: "CSRA based", text: "Created locally by Jessica Bull for collectors and clients near and far." },
];

export default function About() {
  return (
    <Stack spacing={{ xs: 5, md: 7 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
          gap: { xs: 4, md: 6 },
          alignItems: "center",
        }}
      >
        <Reveal direction="right">
          <ParallaxImage
            src={images.about}
            alt="Jessica Bull artwork"
            sx={{ minHeight: { xs: 360, md: 560 }, maxHeight: 620 }}
          />
        </Reveal>

        <Reveal delay={120} direction="left">
          <Stack spacing={2.5}>
            <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700 }}>
              About the artist
            </Typography>
            <Typography variant="h2">{brand.artist}</Typography>
            <Typography color="text.secondary" sx={{ fontSize: "1.15rem", lineHeight: 1.7 }}>
              Blooming Bull Studios is the creative home of {brand.artist}, an artist located in the {brand.location}.
              Her work includes murals, commissioned pieces, and selected original artwork.
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
              This page is ready for a fuller artist statement, process notes, client list, and education details as
              those pieces are finalized.
            </Typography>
          </Stack>
        </Reveal>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 2,
        }}
      >
        {notes.map((note, index) => (
          <Reveal key={note.label} delay={index * 100}>
            <Stack
              className="soft-panel"
              spacing={1}
              sx={{
                border: "1px solid rgba(89, 78, 68, 0.16)",
                borderRadius: 2,
                p: 3,
                bgcolor: (theme) =>
                  theme.palette.mode === "dark" ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.58)",
              }}
            >
              <Box sx={{ color: "primary.main" }}>{note.icon}</Box>
              <Typography variant="h3">{note.label}</Typography>
              <Typography color="text.secondary">{note.text}</Typography>
            </Stack>
          </Reveal>
        ))}
      </Box>
    </Stack>
  );
}
