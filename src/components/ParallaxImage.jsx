import React from "react";
import { Box } from "@mui/material";

export default function ParallaxImage({ src, alt, speed = 0.08, imageSx, sx }) {
  const ref = React.useRef(null);
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    let frame = 0;

    const updateOffset = () => {
      frame = 0;
      const node = ref.current;

      if (!node) {
        return;
      }

      const rect = node.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      setOffset((viewportCenter - elementCenter) * speed);
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateOffset);
      }
    };

    updateOffset();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [speed]);

  return (
    <Box ref={ref} sx={{ overflow: "hidden", borderRadius: 2, ...sx }}>
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: "100%",
          height: "100%",
          minHeight: "inherit",
          objectFit: "cover",
          transform: `translate3d(0, ${offset}px, 0) scale(1.06)`,
          transition: "transform 120ms linear",
          ...imageSx,
        }}
      />
    </Box>
  );
}
