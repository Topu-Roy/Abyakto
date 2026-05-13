import sharp from "sharp";
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const SIZE = 256;
const OUTPUT_DIR = join(process.cwd(), "public", "textures");
mkdirSync(OUTPUT_DIR, { recursive: true });

async function savePng(buffer, name) {
  writeFileSync(join(OUTPUT_DIR, `${name}.png`), buffer);
  console.log(`✅ ${name}.png`);
}

// Generate noise that tiles seamlessly
async function generateSeamlessNoise(alpha) {
  const svg = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="4" stitchTiles="stitch"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" opacity="${alpha}"/>
  </svg>`;
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  return buf;
}

// Paper - fine grain, very subtle, seamless
async function generatePaper() {
  const buf = await generateSeamlessNoise(0.08);
  await savePng(buf, "paper");
}

// Grain - slightly more visible, seamless
async function generateGrain() {
  const buf = await generateSeamlessNoise(0.15);
  await savePng(buf, "grain");
}

// Noise - higher contrast, seamless
async function generateNoise() {
  const svg = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" opacity="0.12"/>
  </svg>`;
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  await savePng(buf, "noise");
}

// Canvas - woven texture that tiles seamlessly
async function generateCanvas() {
  const svg = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="transparent"/>
    <pattern id="p" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="2" height="2" fill="rgba(0,0,0,0.04)"/>
      <rect x="2" y="2" width="2" height="2" fill="rgba(0,0,0,0.04)"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#p)"/>
  </svg>`;
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  await savePng(buf, "canvas");
}

// Speckle - random dots that tile seamlessly
async function generateSpeckle() {
  // Use a pattern to ensure seamless tiling
  const svg = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="4" cy="4" r="1" fill="rgba(0,0,0,0.1)"/>
        <circle cx="12" cy="12" r="0.8" fill="rgba(0,0,0,0.08)"/>
        <circle cx="8" cy="8" r="0.5" fill="rgba(0,0,0,0.06)"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots)"/>
  </svg>`;
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  await savePng(buf, "speckle");
}

// Marble - soft gradient that tiles seamlessly
async function generateMarble() {
  const svg = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="rgba(0,0,0,0)" />
        <stop offset="50%" stop-color="rgba(0,0,0,0.04)" />
        <stop offset="100%" stop-color="rgba(0,0,0,0)" />
      </linearGradient>
      <filter id="warp">
        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" stitchTiles="stitch" seed="5"/>
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
  </svg>`;
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  await savePng(buf, "marble");
}

// Waves - horizontal ripples that tile seamlessly
async function generateWaves() {
  const svg = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="waves" width="64" height="16" patternUnits="userSpaceOnUse">
        <path d="M0 8 Q16 0 32 8 T64 8" stroke="rgba(0,0,0,0.04)" stroke-width="1" fill="none"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#waves)"/>
  </svg>`;
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  await savePng(buf, "waves");
}

// Vintage - warm tinted noise that tiles seamlessly
async function generateVintage() {
  const svg = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" stitchTiles="stitch"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" opacity="0.1"/>
  </svg>`;
  const buf = await sharp(Buffer.from(svg)).tint({ r: 255, g: 240, b: 220 }).png().toBuffer();
  await savePng(buf, "vintage");
}

// Subtle - soft gradients that tile seamlessly
async function generateSubtle() {
  const svg = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="g1" cx="30%" cy="30%">
        <stop offset="0%" stop-color="rgba(0,0,0,0.03)"/>
        <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
      </radialGradient>
      <radialGradient id="g2" cx="70%" cy="70%">
        <stop offset="0%" stop-color="rgba(0,0,0,0.02)"/>
        <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g1)"/>
    <rect width="100%" height="100%" fill="url(#g2)"/>
  </svg>`;
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  await savePng(buf, "subtle");
}

// Leaf - organic shapes that tile seamlessly
async function generateLeaf() {
  const svg = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="leaf" width="64" height="64" patternUnits="userSpaceOnUse">
        <ellipse cx="32" cy="20" rx="15" ry="10" fill="rgba(0,0,0,0.03)" transform="rotate(20 32 20)"/>
        <ellipse cx="16" cy="48" rx="12" ry="8" fill="rgba(0,0,0,0.025)" transform="rotate(-15 16 48)"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#leaf)"/>
  </svg>`;
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  await savePng(buf, "leaf");
}

await generatePaper();
await generateGrain();
await generateNoise();
await generateCanvas();
await generateSpeckle();
await generateMarble();
await generateWaves();
await generateVintage();
await generateSubtle();
await generateLeaf();

console.log("\n🎉 All seamless textures saved to /public/textures/");