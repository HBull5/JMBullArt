import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BrushIcon from "@mui/icons-material/Brush";
import PaletteIcon from "@mui/icons-material/Palette";
import PlaceIcon from "@mui/icons-material/Place";
import ImageDialog from "../components/ImageDialog";
import ParallaxImage from "../components/ParallaxImage";
import Reveal from "../components/Reveal";
import { brand, homeFeaturedWorks, images } from "../content";

const aboutNotes = [
  { icon: <BrushIcon />, label: "Murals", text: "Large-scale work for churches, shared spaces, and meaningful places." },
  { icon: <PaletteIcon />, label: "Originals", text: "Expressive artwork shaped by color, texture, and personal story." },
  { icon: <PlaceIcon />, label: "CSRA based", text: "Created locally by Jessica Bull for collectors and clients near and far." },
];

export default function Home() {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(null);

  return (
    <>
    <Stack spacing={{ xs: 6, md: 9 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.02fr 0.98fr" },
          gap: { xs: 4, md: 6 },
          alignItems: "center",
        }}
      >
        <Stack spacing={3} sx={{ maxWidth: 620 }}>
          <Reveal>
            <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700 }}>
              Original art, murals, and commissions
            </Typography>
          </Reveal>
          <Reveal delay={90}>
            <Typography variant="h1">{brand.name}</Typography>
          </Reveal>
          <Reveal delay={180}>
            <Typography variant="h5" color="text.secondary" sx={{ lineHeight: 1.45, fontWeight: 300 }}>
              Welcome to Blooming Bull. I'm {brand.artist}, an artist located in the {brand.location}.
            </Typography>
          </Reveal>

          <Reveal delay={270}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems={{ xs: "stretch", sm: "center" }}>
              <Button variant="contained" component={RouterLink} to="/gallery" endIcon={<ArrowForwardIcon />}>
                View Gallery
              </Button>
              <Button variant="outlined" component={RouterLink} to="/contact">
                Start a Conversation
              </Button>
            </Stack>
          </Reveal>
        </Stack>

        <Reveal delay={180} direction="left">
          <ParallaxImage
            src={images.jessicaHeadshot}
            alt="Artwork from Blooming Bull Studios"
            sx={{
              height: { xs: 220, sm: 300, md: "auto" },
              minHeight: { xs: 220, sm: 300, md: 560 },
              maxHeight: { xs: 260, sm: 340, md: 680 },
              boxShadow: "0 28px 80px rgba(47, 41, 36, 0.18)",
            }}
            imageSx={{
              objectPosition: { xs: "center 52%", sm: "center 48%", md: "center center" },
            }}
          />
        </Reveal>
      </Box>

      <Stack spacing={3}>
        <Reveal>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "flex-end" }}
          >
            <Box>
              <Typography variant="overline" color="secondary.main" sx={{ fontWeight: 700 }}>
                Selected works
              </Typography>
              <Typography variant="h2">Art with roots, color, and story.</Typography>
            </Box>
            <Button variant="text" component={RouterLink} to="/gallery" endIcon={<ArrowForwardIcon />}>
              See more work
            </Button>
          </Stack>
        </Reveal>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 2.5,
          }}
        >
          {homeFeaturedWorks.map((piece, index) => (
            <Reveal key={piece.title} delay={index * 110}>
              <Card className="art-card">
                <CardActionArea onClick={() => setSelectedImageIndex(index)}>
                  <CardMedia component="img" height="280" image={piece.image} alt={piece.title} />
                  <CardContent>
                    <Typography fontWeight={700}>{piece.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {piece.category}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Reveal>
          ))}
        </Box>
      </Stack>

      <Stack spacing={{ xs: 5, md: 7 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.35fr) minmax(360px, 0.65fr)" },
            gap: { xs: 3, md: 0 },
            alignItems: "center",
          }}
        >
          <Reveal direction="right" sx={{ minWidth: 0 }}>
            <ParallaxImage
              src={images.jessicaCandid}
              alt="Jessica Bull artwork"
              sx={{
                minHeight: { xs: 300, sm: 420, md: 560 },
                aspectRatio: { xs: "4 / 3", sm: "16 / 10", md: "16 / 9" },
                borderRadius: 2,
              }}
              imageSx={{ objectPosition: "63% center" }}
            />
          </Reveal>

          <Reveal
            delay={120}
            direction="left"
            sx={{
              position: "relative",
              zIndex: 1,
              ml: { xs: 0, md: -8 },
            }}
          >
            <Stack
              spacing={2.5}
              sx={{
                p: { xs: 0, md: 4 },
                borderRadius: 2,
                border: {
                  xs: "none",
                  md: (theme) =>
                    `1px solid ${
                      theme.palette.mode === "dark" ? "rgba(246, 239, 232, 0.12)" : "rgba(89, 78, 68, 0.12)"
                    }`,
                },
                bgcolor: (theme) =>
                  theme.palette.mode === "dark" ? "rgba(36, 33, 29, 0.68)" : "rgba(249, 247, 242, 0.68)",
                backdropFilter: { xs: "none", md: "blur(14px)" },
                boxShadow: {
                  xs: "none",
                  md: (theme) =>
                    theme.palette.mode === "dark"
                      ? "0 22px 54px rgba(0, 0, 0, 0.3)"
                      : "0 22px 54px rgba(47, 41, 36, 0.12)",
                },
              }}
            >
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
          {aboutNotes.map((note, index) => (
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
    </Stack>
    <ImageDialog
      items={homeFeaturedWorks}
      selectedIndex={selectedImageIndex}
      onSelectIndex={setSelectedImageIndex}
      onClose={() => setSelectedImageIndex(null)}
    />
    </>
  );
}
