import React from "react";
import { Box, useTheme } from "@mui/material";

const strokeShape =
  "M 34 116 C 122 82 236 72 360 78 C 504 86 628 118 770 94 C 846 82 910 82 978 106 C 918 132 824 150 710 148 C 562 146 430 116 286 122 C 176 126 92 150 36 176 C 16 150 14 128 34 116 Z";

const softShape =
  "M 4 116 C 104 54 246 42 394 56 C 522 68 642 104 772 80 C 868 62 948 78 1034 120 C 952 154 842 176 704 174 C 560 172 428 144 282 150 C 164 154 72 184 10 218 C -18 176 -18 140 4 116 Z";

const ridgePaths = [
  "M 68 114 C 184 88 312 88 442 100 C 556 110 668 126 794 104 C 866 92 930 98 984 118",
  "M 82 146 C 208 120 334 118 456 130 C 586 144 702 154 838 128 C 894 118 940 124 976 138",
  "M 178 170 C 300 146 430 146 558 160 C 670 172 776 170 898 148",
];

const bristlePaths = [
  "M 790 146 C 872 148 940 140 1004 118",
  "M 744 166 C 838 176 920 170 1018 146",
  "M 126 178 C 68 190 24 210 -18 238",
];

const speckles = [
  { cx: 142, cy: 72, r: 3.5 },
  { cx: 176, cy: 58, r: 2.2 },
  { cx: 826, cy: 62, r: 2.6 },
  { cx: 874, cy: 58, r: 1.8 },
  { cx: 892, cy: 178, r: 3.2 },
  { cx: 934, cy: 188, r: 2 },
];

export default function GalleryPaintBackground() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      aria-hidden="true"
      className="gallery-paint-background"
      sx={{
        display: { xs: "none", sm: "block" },
        "--gallery-paint": isDark ? "rgba(199, 154, 209, 0.3)" : "rgba(141, 109, 149, 0.22)",
        "--gallery-paint-soft": isDark ? "rgba(154, 177, 142, 0.13)" : "rgba(113, 138, 103, 0.09)",
        "--gallery-paint-ridge": isDark ? "rgba(246, 239, 232, 0.12)" : "rgba(47, 41, 36, 0.09)",
        "--gallery-paint-fray": isDark ? "rgba(199, 154, 209, 0.2)" : "rgba(141, 109, 149, 0.15)",
        "--gallery-paint-cover": isDark ? "#171512" : "#F9F7F2",
      }}
    >
      <svg className="gallery-paint-background__svg" viewBox="-40 20 1120 240" preserveAspectRatio="none">
        <defs>
          <filter id="gallery-paint-roughen" x="-18%" y="-35%" width="136%" height="170%">
            <feTurbulence type="fractalNoise" baseFrequency="0.03 0.2" numOctaves="4" seed="31" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <g filter="url(#gallery-paint-roughen)">
          <path className="gallery-paint-background__shape gallery-paint-background__shape--soft" d={softShape} />
          <path className="gallery-paint-background__shape gallery-paint-background__shape--main" d={strokeShape} />
          {ridgePaths.map((path) => (
            <path key={path} className="gallery-paint-background__stroke gallery-paint-background__stroke--ridge" d={path} />
          ))}
          {bristlePaths.map((path) => (
            <path key={path} className="gallery-paint-background__stroke gallery-paint-background__stroke--fray" d={path} />
          ))}
        </g>
        {speckles.map((speckle) => (
          <circle
            key={`${speckle.cx}-${speckle.cy}`}
            className="gallery-paint-background__speckle"
            cx={speckle.cx}
            cy={speckle.cy}
            r={speckle.r}
          />
        ))}
      </svg>
    </Box>
  );
}
