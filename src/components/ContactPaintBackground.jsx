import React from "react";
import { Box, useTheme } from "@mui/material";

const contactStrokeShape =
  "M 70 270 C 120 252 174 216 232 224 C 272 230 276 262 262 290 C 252 310 266 326 300 318 C 386 298 460 252 548 250 C 624 250 672 288 654 334 C 642 366 682 380 750 352 C 848 312 948 284 1058 296 C 1146 306 1216 330 1300 310 C 1260 340 1178 362 1088 356 C 966 350 866 386 744 420 C 638 450 540 422 536 368 C 532 332 486 328 416 360 C 318 404 222 416 178 372 C 148 342 152 314 166 288 C 126 312 86 324 38 318 C 20 296 28 282 70 270 Z";

const contactSoftShape =
  "M 42 262 C 116 236 172 192 244 200 C 298 206 314 246 298 286 C 288 314 300 330 334 322 C 424 300 494 228 574 226 C 660 224 714 276 690 332 C 674 370 708 384 776 356 C 890 310 990 266 1104 280 C 1212 294 1282 330 1374 306 C 1328 352 1222 392 1086 382 C 976 374 876 412 758 444 C 640 476 520 452 506 382 C 498 344 454 344 390 378 C 286 430 184 430 134 382 C 104 354 102 322 116 294 C 82 316 40 326 -14 322 C -22 292 0 274 42 262 Z";

const ridgePaths = [
  "M 70 292 C 152 282 192 250 238 254 C 274 258 276 286 258 308 C 346 300 454 264 548 270 C 626 276 640 320 618 348 C 704 338 834 300 948 306 C 1052 312 1156 346 1278 318",
  "M 172 338 C 246 370 330 350 408 316 C 472 288 548 288 590 316 C 626 340 612 370 580 392 C 680 402 760 360 852 332 C 982 292 1098 332 1212 342",
  "M 318 374 C 406 338 486 318 536 342 C 574 360 558 392 526 410 C 636 430 738 396 860 350 C 972 310 1092 320 1216 326",
];

const bristlePaths = [
  "M 676 392 C 800 382 902 340 1024 330 C 1122 322 1202 336 1274 320",
  "M 708 414 C 830 410 930 360 1058 354 C 1140 350 1212 360 1298 340",
  "M 776 436 C 890 430 986 390 1100 382",
  "M 126 382 C 58 386 12 402 -34 430",
];

const speckles = [
  { cx: 286, cy: 206, r: 2.6 },
  { cx: 328, cy: 214, r: 7 },
  { cx: 350, cy: 234, r: 4 },
  { cx: 374, cy: 218, r: 2.8 },
  { cx: 404, cy: 230, r: 2.2 },
  { cx: 438, cy: 212, r: 1.8 },
  { cx: 812, cy: 456, r: 2.4 },
  { cx: 862, cy: 440, r: 6 },
  { cx: 898, cy: 456, r: 3.5 },
  { cx: 930, cy: 426, r: 2.5 },
  { cx: 982, cy: 448, r: 1.9 },
  { cx: 1130, cy: 236, r: 3.5 },
  { cx: 1174, cy: 216, r: 1.9 },
  { cx: 1210, cy: 230, r: 2.5 },
  { cx: 1240, cy: 248, r: 1.7 },
];

export default function ContactPaintBackground() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      aria-hidden="true"
      className="contact-paint-background"
      sx={{
        display: { xs: "none", sm: "block" },
        "--contact-paint": isDark ? "rgba(199, 154, 209, 0.34)" : "rgba(141, 109, 149, 0.26)",
        "--contact-paint-soft": isDark ? "rgba(154, 177, 142, 0.16)" : "rgba(113, 138, 103, 0.11)",
        "--contact-paint-ridge": isDark ? "rgba(246, 239, 232, 0.14)" : "rgba(47, 41, 36, 0.11)",
        "--contact-paint-fray": isDark ? "rgba(199, 154, 209, 0.26)" : "rgba(141, 109, 149, 0.2)",
        "--contact-paint-cover": isDark ? "#171512" : "#F9F7F2",
      }}
    >
      <svg className="contact-paint-background__svg" viewBox="-80 120 1580 420" preserveAspectRatio="none">
        <defs>
          <filter id="contact-paint-roughen" x="-18%" y="-32%" width="136%" height="164%">
            <feTurbulence type="fractalNoise" baseFrequency="0.025 0.18" numOctaves="4" seed="23" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="14" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        <g className="contact-paint-background__swash">
          <g filter="url(#contact-paint-roughen)">
            <path className="contact-paint-background__shape contact-paint-background__shape--soft" d={contactSoftShape} />
            <path className="contact-paint-background__shape contact-paint-background__shape--main" d={contactStrokeShape} />
            {ridgePaths.map((path) => (
              <path
                key={path}
                className="contact-paint-background__stroke contact-paint-background__stroke--ridge"
                d={path}
                pathLength="1"
              />
            ))}
            {bristlePaths.map((path) => (
              <path
                key={path}
                className="contact-paint-background__stroke contact-paint-background__stroke--fray"
                d={path}
                pathLength="1"
              />
            ))}
          </g>
          <g className="contact-paint-background__splatter">
            {speckles.map((speckle) => (
              <circle
                key={`${speckle.cx}-${speckle.cy}`}
                className="contact-paint-background__speckle"
                cx={speckle.cx}
                cy={speckle.cy}
                r={speckle.r}
              />
            ))}
          </g>
        </g>
      </svg>
    </Box>
  );
}
