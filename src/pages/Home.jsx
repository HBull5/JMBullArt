import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ParallaxImage from "../components/ParallaxImage";
import Reveal from "../components/Reveal";
import { brand, featuredWorks, images } from "../content";

export default function Home() {
  return (
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
            src={images.hero}
            alt="Artwork from Blooming Bull Studios"
            sx={{
              minHeight: { xs: 320, md: 560 },
              maxHeight: 680,
              boxShadow: "0 28px 80px rgba(47, 41, 36, 0.18)",
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
          {featuredWorks.map((piece, index) => (
            <Reveal key={piece.title} delay={index * 110}>
              <Card className="art-card">
                <CardMedia component="img" height="280" image={piece.image} alt={piece.title} />
                <CardContent>
                  <Typography fontWeight={700}>{piece.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {piece.category}
                  </Typography>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </Box>
      </Stack>
    </Stack>
  );
}
