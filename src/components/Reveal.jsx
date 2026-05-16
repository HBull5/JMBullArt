import React from "react";
import { Box } from "@mui/material";

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  duration = 720,
  rootMargin = "0px 0px -12% 0px",
  sx,
  ...props
}) {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.12 },
    );

    const node = ref.current;
    if (node) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  const offset = {
    up: "translate3d(0, 28px, 0)",
    down: "translate3d(0, -28px, 0)",
    left: "translate3d(28px, 0, 0)",
    right: "translate3d(-28px, 0, 0)",
  }[direction];

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : offset,
        transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms cubic-bezier(.2,.8,.2,1) ${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
