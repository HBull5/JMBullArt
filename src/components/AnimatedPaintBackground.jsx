import React from "react";
import { Box, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";

const MOBILE_BREAKPOINT_QUERY = "(min-width: 600px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const MIN_SCROLLABLE_DISTANCE = 96;
const STARTING_REVEAL = 0.18;

const paintPath =
  "M 1280 -80 C 980 110 640 70 430 255 C 180 475 520 650 910 600 C 1280 555 1320 840 1050 1010 C 790 1175 300 1100 205 1340 C 110 1580 555 1660 880 1565 C 1250 1458 1300 1740 1040 1935 C 780 2130 440 2065 260 2320";

const shadowPath =
  "M 1220 -20 C 930 175 650 140 490 300 C 300 492 600 570 925 535 C 1190 507 1235 760 975 918 C 715 1076 360 1075 285 1280 C 210 1490 605 1530 890 1488 C 1135 1452 1210 1668 1005 1835 C 795 2005 520 1990 335 2235";

const ridgePaths = [
  "M 1240 -42 C 962 126 666 104 462 272 C 240 455 552 614 892 572 C 1202 532 1264 794 1016 950 C 770 1104 342 1052 254 1308 C 175 1535 580 1604 866 1530 C 1176 1448 1210 1682 1012 1860 C 792 2058 496 2028 296 2268",
  "M 1180 36 C 910 188 690 178 512 318 C 334 458 620 544 920 508 C 1130 482 1190 710 936 878 C 682 1045 406 1018 322 1255 C 252 1462 632 1494 882 1454 C 1092 1420 1138 1634 962 1798 C 756 1988 548 1948 374 2185",
  "M 1338 -52 C 1018 150 728 120 522 318 C 318 514 608 676 944 628 C 1248 584 1304 812 1086 990 C 862 1172 384 1150 258 1378 C 154 1568 560 1668 922 1588 C 1196 1528 1248 1742 1042 1910 C 806 2102 512 2082 310 2328",
  "M 1304 58 C 1036 194 720 190 526 356 C 356 502 650 630 934 586 C 1148 554 1218 778 998 934 C 766 1100 448 1090 342 1316 C 246 1524 628 1578 900 1510 C 1166 1444 1206 1668 1000 1844 C 778 2034 546 2014 352 2232",
  "M 1164 92 C 916 208 704 220 548 342 C 392 464 656 594 920 554 C 1086 530 1168 736 954 886 C 718 1052 492 1038 372 1278 C 278 1468 642 1536 882 1490 C 1098 1448 1160 1648 978 1812 C 760 2008 574 1998 412 2168",
  "M 1264 122 C 1016 240 760 224 586 366 C 440 486 662 562 902 532 C 1138 504 1176 692 948 842 C 722 990 474 998 374 1212 C 292 1390 602 1464 854 1420 C 1060 1384 1124 1586 944 1746 C 746 1922 594 1940 468 2074",
];

const frayPaths = [
  "M 1238 -36 C 1314 -2 1364 -8 1424 -32",
  "M 1184 18 C 1270 48 1348 54 1416 38",
  "M 1014 616 C 1120 624 1212 650 1320 724",
  "M 1030 1586 C 1154 1548 1238 1550 1356 1598",
  "M 354 2198 C 276 2260 206 2312 132 2358",
  "M 292 2262 C 214 2282 154 2314 98 2370",
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

      const rawProgress = Math.min(1, Math.max(0, window.scrollY / scrollableDistance));
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
        "--paint-secondary": isDark ? "rgba(154, 177, 142, 0.15)" : "rgba(113, 138, 103, 0.12)",
        "--paint-edge": isDark ? "rgba(199, 154, 209, 0.1)" : "rgba(141, 109, 149, 0.08)",
        "--paint-ridge": isDark ? "rgba(246, 239, 232, 0.12)" : "rgba(47, 41, 36, 0.09)",
        "--paint-fray": isDark ? "rgba(199, 154, 209, 0.16)" : "rgba(141, 109, 149, 0.13)",
      }}
    >
      <svg className="paint-background__svg" viewBox="0 0 1440 2400" preserveAspectRatio="none">
        <defs>
          <filter id="paint-roughen" x="-14%" y="-8%" width="128%" height="116%">
            <feTurbulence type="fractalNoise" baseFrequency="0.018 0.13" numOctaves="4" seed="11" result="noise" />
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
