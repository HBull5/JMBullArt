import React from "react";
import { Box, useTheme } from "@mui/material";

const strokeShape =
  "M 34 116 C 136 78 270 66 414 74 C 574 82 710 116 872 92 C 972 78 1074 82 1210 112 C 1120 144 1008 158 872 154 C 702 150 558 120 388 124 C 232 128 120 154 36 182 C 16 150 14 128 34 116 Z";

const softShape =
  "M 4 116 C 112 48 274 36 436 52 C 590 66 718 104 884 78 C 1000 60 1122 78 1282 122 C 1170 162 1038 184 866 178 C 706 172 556 146 386 150 C 224 154 100 188 10 224 C -18 176 -18 140 4 116 Z";

const ridgePaths = [
  "M 68 114 C 206 84 358 88 508 100 C 654 112 780 124 930 104 C 1018 92 1116 100 1200 122",
  "M 82 146 C 228 118 384 118 532 132 C 682 146 812 154 966 128 C 1048 116 1132 126 1192 142",
  "M 178 170 C 330 144 480 148 634 162 C 764 174 896 170 1050 148",
];

const bristlePaths = [
  "M 940 146 C 1040 148 1132 140 1226 114",
  "M 892 166 C 1002 176 1098 170 1246 144",
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
      <svg className="gallery-paint-background__svg" viewBox="-40 20 1360 240" preserveAspectRatio="none">
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
