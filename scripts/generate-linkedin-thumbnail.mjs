import { writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const imagePath = path.join(root, "public/images/projects/self-locking-hook/studio-visualization.png");
const outputDir = path.join(root, "public/brand");

// Embed a compact copy of a real CAD visualization so the SVG is self-contained.
const cadImage = await sharp(imagePath).resize(700, 700).png({ palette: true, quality: 85 }).toBuffer();
const imageUri = `data:image/png;base64,${cadImage.toString("base64")}`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc">
  <title id="title">Drish Dedhia mechanical engineering portfolio</title>
  <desc id="desc">Original portfolio graphic featuring Drish Dedhia's name, RWTH Aachen, and his self-locking towel hook CAD study.</desc>
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#72918a" stroke-opacity=".12" stroke-width="1"/></pattern>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101f27"/><stop offset="1" stop-color="#0a131a"/></linearGradient>
    <clipPath id="imageClip"><rect x="812" y="159" width="302" height="305" rx="10"/></clipPath>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/><rect width="1200" height="630" fill="url(#grid)"/>
  <rect x="1" y="1" width="1198" height="628" fill="none" stroke="#48635b" stroke-width="2"/>
  <path d="M 76 82 H 687" stroke="#b9e68a" stroke-width="4"/><path d="M 76 534 H 687" stroke="#48635b" stroke-width="2"/>
  <g font-family="Arial, Helvetica, sans-serif">
    <text x="76" y="146" fill="#b9e68a" font-size="22" font-weight="700" letter-spacing="3.7">MECHANICAL ENGINEERING PORTFOLIO</text>
    <text x="70" y="307" fill="#f1f5ed" font-size="101" font-weight="800" letter-spacing="-6">Drish</text>
    <text x="70" y="408" fill="#f1f5ed" font-size="101" font-weight="800" letter-spacing="-6">Dedhia<tspan fill="#b9e68a">.</tspan></text>
    <text x="76" y="474" fill="#c7d6d2" font-size="30" font-weight="600">Mechanical Engineering  |  RWTH Aachen</text>
    <text x="76" y="578" fill="#9db9ae" font-size="20" font-weight="700" letter-spacing="3">CAD   /   CHASSIS   /   RESEARCH</text>
  </g>
  <g>
    <rect x="785" y="64" width="354" height="492" rx="25" fill="#172931" stroke="#829c88" stroke-width="2"/>
    <path d="M 785 120 H 1139" stroke="#829c88" stroke-width="2"/>
    <circle cx="810" cy="92" r="5" fill="#b9e68a"/><circle cx="827" cy="92" r="5" fill="#829c88"/><circle cx="844" cy="92" r="5" fill="#829c88"/>
    <text x="877" y="98" fill="#d7e7d5" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="700" letter-spacing="1.5">CAD STUDY / 02</text>
    <rect x="812" y="159" width="302" height="305" rx="10" fill="#f4f1e9"/>
    <image x="812" y="159" width="302" height="305" preserveAspectRatio="xMidYMid slice" clip-path="url(#imageClip)" href="${imageUri}" xlink:href="${imageUri}"/>
    <path d="M 804 148 V 164 H 820 M 1106 148 V 164 H 1122 M 804 459 V 475 H 820 M 1106 459 V 475 H 1122" fill="none" stroke="#b9e68a" stroke-width="2"/>
    <text x="812" y="503" fill="#f1f5ed" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700">Self-locking towel hook</text>
    <text x="812" y="531" fill="#b9e68a" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="700" letter-spacing="1.4">FUSION 360  /  PRINT-IN-PLACE STUDY</text>
  </g>
</svg>`;

const svgPath = path.join(outputDir, "linkedin-portfolio-thumbnail.svg");
const pngPath = path.join(outputDir, "linkedin-portfolio-thumbnail.png");
await writeFile(svgPath, svg, "utf8");
await sharp(Buffer.from(svg)).png().toFile(pngPath);
console.log(`Generated ${svgPath} and ${pngPath}`);
