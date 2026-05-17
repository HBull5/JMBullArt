import React from "react";
import { Box, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";

const MOBILE_BREAKPOINT_QUERY = "(min-width: 600px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const MIN_SCROLLABLE_DISTANCE = 96;
const STARTING_REVEAL = 0.18;
const SCROLL_FINISH_PADDING = 0.12;

const paintPath =
  "M 1510 -150 C 1120 96 680 42 408 252 C 154 448 466 650 916 588 C 1324 532 1388 834 1068 1028 C 760 1214 248 1106 146 1370 C 54 1608 552 1692 914 1572 C 1312 1440 1398 1768 1046 1986 C 724 2186 332 2098 -90 2658";

const shadowPath =
  "M 1450 -74 C 1082 142 700 118 484 302 C 276 480 568 570 934 526 C 1218 492 1284 750 984 930 C 700 1100 346 1068 252 1300 C 164 1518 594 1548 902 1496 C 1162 1452 1248 1686 1014 1864 C 760 2058 470 2052 2 2558";

const ridgePaths = [
  "M 1468 -104 C 1100 122 702 100 458 274 C 228 438 510 618 896 570 C 1242 526 1314 796 1022 968 C 742 1134 318 1060 214 1326 C 118 1572 564 1608 878 1530 C 1210 1448 1266 1700 1016 1888 C 760 2080 452 2022 -42 2588",
  "M 1384 -30 C 1040 166 708 174 516 320 C 326 464 604 540 922 504 C 1160 476 1238 714 944 890 C 668 1056 398 1018 286 1266 C 196 1466 626 1502 888 1460 C 1114 1424 1184 1648 964 1826 C 720 2024 506 1984 46 2496",
  "M 1524 -48 C 1130 166 738 118 524 318 C 308 520 608 676 950 622 C 1282 570 1350 812 1090 1000 C 850 1174 358 1148 206 1398 C 86 1596 548 1678 934 1586 C 1242 1512 1298 1756 1042 1940 C 776 2132 458 2078 -80 2636",
  "M 1492 58 C 1126 204 722 188 526 356 C 354 504 654 628 936 582 C 1168 544 1262 780 996 950 C 744 1112 418 1088 300 1328 C 194 1542 626 1586 912 1508 C 1192 1432 1264 1682 1000 1872 C 748 2054 496 2008 8 2532",
  "M 1340 86 C 1006 208 706 218 546 342 C 386 466 658 594 926 550 C 1104 520 1212 736 954 902 C 704 1064 472 1038 334 1290 C 226 1488 640 1542 892 1490 C 1122 1442 1198 1654 978 1838 C 736 2040 540 1992 88 2448",
  "M 1436 132 C 1074 244 762 222 586 366 C 438 488 664 562 910 528 C 1160 494 1224 696 948 858 C 708 998 452 994 334 1224 C 238 1410 600 1472 864 1420 C 1086 1376 1164 1596 944 1772 C 704 1964 560 1940 160 2358",
];

const frayPaths = [
  "M 1350 -86 C 1428 -34 1496 -38 1582 -70",
  "M 1268 -18 C 1370 24 1464 28 1554 8",
  "M 1080 614 C 1196 616 1296 650 1438 744",
  "M 1110 570 C 1228 546 1338 564 1452 612",
  "M 1070 1578 C 1200 1534 1302 1534 1448 1594",
  "M 1052 1638 C 1178 1624 1292 1644 1412 1702",
  "M 132 2404 C 24 2464 -56 2528 -148 2608",
  "M 52 2492 C -58 2532 -132 2582 -210 2668",
  "M 10 2578 C -96 2600 -168 2644 -238 2724",
];

export default function AnimatedPaintBackground() {
  const backgroundRef = React.useRef(null);
  const theme = useTheme();
  const location = useLocation();
  const isDark = theme.palette.mode === "dark";
  const isHomePage = location.pathname === "/";

  React.useEffect(() => {
    const background = backgroundRef.current;

    if (!background) {
      return undefined;
    }

    const desktopQuery = window.matchMedia(MOBILE_BREAKPOINT_QUERY);
    const reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    let animationFrameId = 0;

    const setScrollProgress = () => {
      animationFrameId = 0;

      if (!desktopQuery.matches) {
        background.classList.remove("paint-background--scroll");
        background.classList.remove("paint-background--auto");
        return;
      }

      const scrollableDistance = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const shouldLinkToScroll = scrollableDistance > MIN_SCROLLABLE_DISTANCE && !reducedMotionQuery.matches;

      background.classList.toggle("paint-background--scroll", shouldLinkToScroll);
      background.classList.toggle("paint-background--auto", !shouldLinkToScroll);

      if (!shouldLinkToScroll) {
        background.style.setProperty("--paint-progress", "1");
        background.style.setProperty("--paint-draw-offset", "0");
        background.style.setProperty("--paint-secondary-offset", "0");
        background.style.setProperty("--paint-texture-opacity", "1");
        return;
      }

      const paddedScrollableDistance = scrollableDistance * (1 + SCROLL_FINISH_PADDING);
      const rawProgress = Math.min(1, Math.max(0, window.scrollY / paddedScrollableDistance));
      const progress = STARTING_REVEAL + rawProgress * (1 - STARTING_REVEAL);
      const drawOffset = 1 - progress;
      const textureOpacity = Math.min(1, Math.max(0.2, progress * 1.35));

      background.style.setProperty("--paint-progress", progress.toFixed(4));
      background.style.setProperty("--paint-draw-offset", drawOffset.toFixed(4));
      background.style.setProperty("--paint-secondary-offset", Math.min(1, drawOffset + 0.04).toFixed(4));
      background.style.setProperty("--paint-texture-opacity", textureOpacity.toFixed(4));
    };

    const requestProgressUpdate = () => {
      if (animationFrameId) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(setScrollProgress);
    };

    requestProgressUpdate();

    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate);
    desktopQuery.addEventListener("change", requestProgressUpdate);
    reducedMotionQuery.addEventListener("change", requestProgressUpdate);

    const resizeObserver = new ResizeObserver(requestProgressUpdate);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener("scroll", requestProgressUpdate);
      window.removeEventListener("resize", requestProgressUpdate);
      desktopQuery.removeEventListener("change", requestProgressUpdate);
      reducedMotionQuery.removeEventListener("change", requestProgressUpdate);
      resizeObserver.disconnect();

      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [location.pathname]);

  if (!isHomePage) {
    return null;
  }

  return (
    <Box
      ref={backgroundRef}
      aria-hidden="true"
      className="paint-background paint-background--auto"
      sx={{
        display: { xs: "none", sm: "block" },
        "--paint-primary": isDark ? "rgba(199, 154, 209, 0.22)" : "rgba(141, 109, 149, 0.19)",
        "--paint-secondary": isDark ? "rgba(154, 177, 142, 0.11)" : "rgba(113, 138, 103, 0.08)",
        "--paint-edge": isDark ? "rgba(199, 154, 209, 0.08)" : "rgba(141, 109, 149, 0.07)",
        "--paint-ridge": isDark ? "rgba(246, 239, 232, 0.14)" : "rgba(47, 41, 36, 0.11)",
        "--paint-fray": isDark ? "rgba(199, 154, 209, 0.2)" : "rgba(141, 109, 149, 0.16)",
      }}
    >
      <svg className="paint-background__svg" viewBox="-80 -120 1600 2780" preserveAspectRatio="none">
        <defs>
          <filter id="paint-roughen" x="-18%" y="-10%" width="136%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.038 0.18" numOctaves="5" seed="11" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="24" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        <g className="paint-background__brush" filter="url(#paint-roughen)">
          <path className="paint-background__stroke paint-background__stroke--edge" d={paintPath} pathLength="1" />
          <path className="paint-background__stroke paint-background__stroke--primary" d={paintPath} pathLength="1" />
          <path
            className="paint-background__stroke paint-background__stroke--secondary"
            d={shadowPath}
            pathLength="1"
          />

          <g className="paint-background__ridges">
            {ridgePaths.map((path) => (
              <path key={path} className="paint-background__stroke paint-background__stroke--ridge" d={path} pathLength="1" />
            ))}
          </g>
        </g>

        <g className="paint-background__frays">
          {frayPaths.map((path) => (
            <path key={path} className="paint-background__stroke paint-background__stroke--fray" d={path} pathLength="1" />
          ))}
        </g>
      </svg>
    </Box>
  );
}
