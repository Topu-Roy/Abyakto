import sharp from "sharp";
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const SIZE = 256;
const OUTPUT_DIR = join(process.cwd(), "public", "textures");
mkdirSync(OUTPUT_DIR, { recursive: true });

function svg(name, svgContent) {
  return { name, svg: `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">${svgContent}</svg>` };
}

async function generate(textures) {
  for (const { name, svg: svgStr } of textures) {
    const buf = await sharp(Buffer.from(svgStr)).png().toBuffer();
    writeFileSync(join(OUTPUT_DIR, `${name}.png`), buf);
    console.log(`✅ ${name}.png`);
  }
}

const newTextures = [
  // === NOISE-BASED ===
  svg("paper", `
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="4" stitchTiles="stitch"/></filter>
    <rect width="100%" height="100%" filter="url(#n)" opacity="0.1"/>
  `),
  svg("grain", `
    <filter id="n"><feTurbulence type="turbulence" baseFrequency="0.15" numOctaves="4" stitchTiles="stitch"/></filter>
    <rect width="100%" height="100%" filter="url(#n)" opacity="0.18"/>
  `),
  svg("noise", `
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch"/></filter>
    <rect width="100%" height="100%" filter="url(#n)" opacity="0.15"/>
  `),
  svg("vintage", `
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="4" stitchTiles="stitch"/></filter>
    <rect width="100%" height="100%" filter="url(#n)" opacity="0.12"/>
  `),

  // === PATTERN-BASED ===
  svg("canvas", `
    <defs><pattern id="p" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="2" height="2" fill="rgba(0,0,0,0.04)"/>
      <rect x="2" y="2" width="2" height="2" fill="rgba(0,0,0,0.04)"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),
  svg("speckle", `
    <defs><pattern id="p" width="16" height="16" patternUnits="userSpaceOnUse">
      <circle cx="4" cy="4" r="1" fill="rgba(0,0,0,0.1)"/>
      <circle cx="12" cy="12" r="0.8" fill="rgba(0,0,0,0.08)"/>
      <circle cx="8" cy="8" r="0.5" fill="rgba(0,0,0,0.06)"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),
  svg("waves", `
    <defs><pattern id="p" width="64" height="16" patternUnits="userSpaceOnUse">
      <path d="M0 8 Q16 0 32 8 T64 8" stroke="rgba(0,0,0,0.04)" stroke-width="1" fill="none"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),
  svg("crosshatch", `
    <defs><pattern id="p" width="12" height="12" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="12" y2="12" stroke="rgba(0,0,0,0.04)" stroke-width="1"/>
      <line x1="12" y1="0" x2="0" y2="12" stroke="rgba(0,0,0,0.04)" stroke-width="1"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),
  svg("dots", `
    <defs><pattern id="p" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="2" fill="rgba(0,0,0,0.06)"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),
  svg("grid", `
    <defs><pattern id="p" width="20" height="20" patternUnits="userSpaceOnUse">
      <rect width="20" height="20" fill="none"/>
      <rect width="1" height="20" fill="rgba(0,0,0,0.04)" x="0"/>
      <rect width="20" height="1" fill="rgba(0,0,0,0.04)" y="0"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),
  svg("diagonal", `
    <defs><pattern id="p" width="16" height="16" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="16" y2="16" stroke="rgba(0,0,0,0.04)" stroke-width="2"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),

  // === NEW DIVERSE TEXTURES ===
  svg("chevron", `
    <defs><pattern id="p" width="32" height="16" patternUnits="userSpaceOnUse">
      <polyline points="0,16 16,0 32,16" stroke="rgba(0,0,0,0.04)" stroke-width="1.5" fill="none"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),
  svg("herringbone", `
    <defs><pattern id="p" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M0,0 L12,24 M24,0 L12,24" stroke="rgba(0,0,0,0.04)" stroke-width="1.5" fill="none"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),
  svg("stripe", `
    <defs><pattern id="p" width="24" height="24" patternUnits="userSpaceOnUse">
      <rect width="24" height="8" fill="rgba(0,0,0,0.04)" y="0"/>
      <rect width="24" height="2" fill="rgba(0,0,0,0.02)" y="12"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),
  svg("honeycomb", `
    <defs><pattern id="p" width="24" height="40" patternUnits="userSpaceOnUse">
      <polygon points="12,0 24,6 24,18 12,24 0,18 0,6" fill="rgba(0,0,0,0.035)" stroke="none"/>
      <polygon points="12,20 24,26 24,38 12,44 0,38 0,26" fill="rgba(0,0,0,0.035)" stroke="none"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),
  svg("diamond", `
    <defs><pattern id="p" width="32" height="32" patternUnits="userSpaceOnUse">
      <polygon points="16,0 32,16 16,32 0,16" fill="rgba(0,0,0,0.03)" stroke="none"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),
  svg("circles", `
    <defs><pattern id="p" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="12" cy="12" r="8" fill="none" stroke="rgba(0,0,0,0.04)" stroke-width="1"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),
  svg("triangles", `
    <defs><pattern id="p" width="24" height="24" patternUnits="userSpaceOnUse">
      <polygon points="0,24 12,0 24,24" fill="rgba(0,0,0,0.03)" stroke="none"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),
  svg("bubbles", `
    <defs><pattern id="p" width="32" height="32" patternUnits="userSpaceOnUse">
      <circle cx="16" cy="16" r="6" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.06)" stroke-width="0.5"/>
      <circle cx="0" cy="0" r="4" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.04)" stroke-width="0.5"/>
      <circle cx="32" cy="0" r="4" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.04)" stroke-width="0.5"/>
      <circle cx="0" cy="32" r="4" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.04)" stroke-width="0.5"/>
      <circle cx="32" cy="32" r="4" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.04)" stroke-width="0.5"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),
  svg("stars", `
    <defs><pattern id="p" width="32" height="32" patternUnits="userSpaceOnUse">
      <polygon points="16,2 19,12 29,12 21,18 24,28 16,22 8,28 11,18 3,12 13,12" fill="rgba(0,0,0,0.035)" stroke="none"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),
  svg("tiles", `
    <defs><pattern id="p" width="32" height="32" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="16" height="16" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.04)" stroke-width="0.5"/>
      <rect x="16" y="16" width="16" height="16" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.04)" stroke-width="0.5"/>
      <rect x="16" y="0" width="16" height="16" fill="rgba(0,0,0,0.01)" stroke="rgba(0,0,0,0.04)" stroke-width="0.5"/>
      <rect x="0" y="16" width="16" height="16" fill="rgba(0,0,0,0.01)" stroke="rgba(0,0,0,0.04)" stroke-width="0.5"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),
  svg("zigzag", `
    <defs><pattern id="p" width="24" height="24" patternUnits="userSpaceOnUse">
      <polyline points="0,0 6,6 12,0 18,6 24,0" stroke="rgba(0,0,0,0.04)" stroke-width="1.5" fill="none"/>
      <polyline points="0,24 6,18 12,24 18,18 24,24" stroke="rgba(0,0,0,0.04)" stroke-width="1.5" fill="none"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),
  svg("mosaic", `
    <defs><pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="18" height="18" rx="2" fill="rgba(0,0,0,0.03)"/>
      <rect x="22" y="22" width="18" height="18" rx="2" fill="rgba(0,0,0,0.03)"/>
      <rect x="0" y="22" width="18" height="18" rx="2" fill="rgba(0,0,0,0.015)"/>
      <rect x="22" y="0" width="18" height="18" rx="2" fill="rgba(0,0,0,0.015)"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),
  svg("scales", `
    <defs><pattern id="p" width="24" height="20" patternUnits="userSpaceOnUse">
      <ellipse cx="12" cy="10" rx="12" ry="10" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.04)" stroke-width="0.5"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#p)"/>
  `),

  // === PAPER VARIANTS ===
  svg("kraft", `
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="5" stitchTiles="stitch"/></filter>
    <filter id="f"><feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" stitchTiles="stitch"/></filter>
    <rect width="100%" height="100%" filter="url(#n)" opacity="0.12"/>
    <rect width="100%" height="100%" filter="url(#f)" opacity="0.06"/>
  `),
  svg("parchment", `
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" stitchTiles="stitch"/></filter>
    <filter id="s"><feTurbulence type="turbulence" baseFrequency="0.4" numOctaves="2" stitchTiles="stitch"/></filter>
    <rect width="100%" height="100%" filter="url(#s)" opacity="0.04"/>
    <rect width="100%" height="100%" filter="url(#n)" opacity="0.04"/>
    <rect width="100%" height="100%">
      <animate attributeName="opacity" values="0;0" dur="1s"/>
    </rect>
  `),
  svg("watercolor", `
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.2" numOctaves="6" stitchTiles="stitch"/></filter>
    <filter id="b"><feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="5" stitchTiles="stitch" seed="3"/></filter>
    <rect width="100%" height="100%" filter="url(#b)" opacity="0.1"/>
    <rect width="100%" height="100%" filter="url(#n)" opacity="0.06"/>
  `),
  svg("recycled", `
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="4" stitchTiles="stitch"/></filter>
    <filter id="f"><feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" stitchTiles="stitch" seed="7"/></filter>
    <rect width="100%" height="100%" filter="url(#f)" opacity="0.15"/>
    <rect width="100%" height="100%" filter="url(#n)" opacity="0.08"/>
  `),
  svg("handmade", `
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.25" numOctaves="4" stitchTiles="stitch"/></filter>
    <filter id="f"><feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" stitchTiles="stitch"/></filter>
    <rect width="100%" height="100%" filter="url(#f)" opacity="0.12"/>
    <rect width="100%" height="100%" filter="url(#n)" opacity="0.06"/>
  `),
  svg("laid", `
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch"/></filter>
    <defs><pattern id="l" width="8" height="24" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="1" height="24" fill="rgba(0,0,0,0.02)"/>
      <rect x="0" y="0" width="24" height="1" fill="rgba(0,0,0,0.015)"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#l)"/>
    <rect width="100%" height="100%" filter="url(#n)" opacity="0.05"/>
  `),
  svg("vallum", `
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" stitchTiles="stitch"/></filter>
    <filter id="s"><feTurbulence type="turbulence" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch"/></filter>
    <rect width="100%" height="100%" filter="url(#s)" opacity="0.03"/>
    <rect width="100%" height="100%" filter="url(#n)" opacity="0.05"/>
  `),
  svg("craft", `
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.35" numOctaves="4" stitchTiles="stitch"/></filter>
    <filter id="f"><feTurbulence type="turbulence" baseFrequency="0.1" numOctaves="3" stitchTiles="stitch" seed="11"/></filter>
    <rect width="100%" height="100%" filter="url(#f)" opacity="0.1"/>
    <rect width="100%" height="100%" filter="url(#n)" opacity="0.08"/>
  `),
];

async function main() {
  for (const t of newTextures) {
    try {
      if (t.name === "vintage") {
        const rawBuf = await sharp(Buffer.from(t.svg)).png().toBuffer();
        const buf = await sharp(rawBuf).tint({ r: 235, g: 215, b: 185 }).png().toBuffer();
        writeFileSync(join(OUTPUT_DIR, `${t.name}.png`), buf);
      } else {
        const buf = await sharp(Buffer.from(t.svg)).png().toBuffer();
        writeFileSync(join(OUTPUT_DIR, `${t.name}.png`), buf);
      }
      console.log(`✅ ${t.name}.png`);
    } catch (err) {
      console.error(`❌ ${t.name}: ${err.message}`);
    }
  }
  console.log("\n🎉 All textures saved to /public/textures/");
}

main();
