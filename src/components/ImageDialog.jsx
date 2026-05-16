import React from "react";
import { Box, Dialog, IconButton, Stack, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";

export default function ImageDialog({ items = [], selectedIndex = null, onClose, onSelectIndex }) {
  const isOpen = selectedIndex !== null && selectedIndex >= 0;
  const item = isOpen ? items[selectedIndex] : null;
  const hasMultipleImages = items.length > 1;

  const goToPrevious = React.useCallback(() => {
    if (!hasMultipleImages) {
      return;
    }

    onSelectIndex((selectedIndex - 1 + items.length) % items.length);
  }, [hasMultipleImages, items.length, onSelectIndex, selectedIndex]);

  const goToNext = React.useCallback(() => {
    if (!hasMultipleImages) {
      return;
    }

    onSelectIndex((selectedIndex + 1) % items.length);
  }, [hasMultipleImages, items.length, onSelectIndex, selectedIndex]);

  React.useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious, isOpen]);

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          bgcolor: "rgba(18, 16, 14, 0.94)",
          color: "#fff",
        },
      }}
    >
      <Stack sx={{ minHeight: "100vh", p: { xs: 2, md: 3 } }} spacing={2}>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }} noWrap>
              {item?.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.72)" }} noWrap>
              {item?.category}
              {hasMultipleImages ? ` · ${selectedIndex + 1} of ${items.length}` : ""}
            </Typography>
          </Box>

          <IconButton
            aria-label="Close image preview"
            onClick={onClose}
            sx={{
              color: "#fff",
              bgcolor: "rgba(255,255,255,0.12)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>

        <Box
          sx={{
            position: "relative",
            flexGrow: 1,
            minHeight: 0,
            display: "grid",
            placeItems: "center",
          }}
        >
          {hasMultipleImages && (
            <IconButton
              aria-label="Show previous image"
              onClick={goToPrevious}
              sx={{
                position: "absolute",
                left: { xs: 0, md: 12 },
                zIndex: 1,
                color: "#fff",
                bgcolor: "rgba(255,255,255,0.12)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
              }}
            >
              <ChevronLeftIcon fontSize="large" />
            </IconButton>
          )}

          {item && (
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                display: "block",
                maxWidth: { xs: "100%", md: "calc(100% - 132px)" },
                maxHeight: "calc(100vh - 112px)",
                objectFit: "contain",
                borderRadius: 1,
                boxShadow: "0 28px 90px rgba(0,0,0,0.45)",
              }}
            />
          )}

          {hasMultipleImages && (
            <IconButton
              aria-label="Show next image"
              onClick={goToNext}
              sx={{
                position: "absolute",
                right: { xs: 0, md: 12 },
                zIndex: 1,
                color: "#fff",
                bgcolor: "rgba(255,255,255,0.12)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
              }}
            >
              <ChevronRightIcon fontSize="large" />
            </IconButton>
          )}
        </Box>
      </Stack>
    </Dialog>
  );
}
