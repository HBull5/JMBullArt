import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const pieces = [
  { title: "Morning Light", year: "2026", img: "/art/sample-1.jpg" },
  { title: "Wildflowers", year: "2026", img: "/art/sample-2.jpg" },
  { title: "Quiet Lake", year: "2026", img: "/art/sample-3.jpg" },
];

export default function Gallery() {
  return (
    <>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Gallery
      </Typography>

      <Grid container spacing={2}>
        {pieces.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.title}>
            <Card sx={{ height: "100%" }}>
              <CardMedia component="img" height="240" image={p.img} alt={p.title} />
              <CardContent>
                <Typography fontWeight={700}>{p.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.year}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Put images in <code>public/art/</code> and reference them like <code>/art/filename.jpg</code>.
      </Typography>
    </>
  );
}
