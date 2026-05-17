import React from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import GalleryPaintBackground from "../components/GalleryPaintBackground";
import ImageDialog from "../components/ImageDialog";
import Reveal from "../components/Reveal";
import { galleryWorks } from "../content";

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(null);

  return (
    <>
    <Stack spacing={4}>
      <Reveal>
        <Box sx={{ position: "relative", isolation: "isolate", maxWidth: 760 }}>
          <GalleryPaintBackground />
          <Typography variant="h2" sx={{ position: "relative", zIndex: 1 }}>
            Gallery
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ position: "relative", zIndex: 1, mt: 1.5, fontSize: "1.08rem", lineHeight: 1.7 }}
          >
            Murals, commissions, character pieces, portraits, florals, wildlife, and studio work from Blooming Bull
            Studios.
          </Typography>
        </Box>
      </Reveal>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
          gap: 2.5,
        }}
      >
        {galleryWorks.map((piece, index) => (
          <Reveal
            key={piece.title}
            delay={(index % 3) * 45}
            duration={360}
            rootMargin="0px 0px 10% 0px"
          >
            <Card className="art-card" sx={{ height: "100%" }}>
              <CardActionArea onClick={() => setSelectedImageIndex(index)} sx={{ height: "100%" }}>
                <CardMedia component="img" height="330" image={piece.image} alt={piece.title} />
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
    <ImageDialog
      items={galleryWorks}
      selectedIndex={selectedImageIndex}
      onSelectIndex={setSelectedImageIndex}
      onClose={() => setSelectedImageIndex(null)}
    />
    </>
  );
}
