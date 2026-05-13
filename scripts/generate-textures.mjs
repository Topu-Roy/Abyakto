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

async function generatePaper() {
  const data = Buffer.alloc(SIZE * SIZE * 4);
  for (let i = 0; i < data.length; i += 4) {
    const v = Math.floor(Math.random() * 255);
    data[i] = v;
    data[i + 1] = v;
    data[i + 2] = v;
    data[i + 3] = Math.floor(Math.random() * 20);
  }
  const buf = await sharp(data, { raw: { width: SIZE, height: SIZE, channels: 4 } }).png().toBuffer();
  await savePng(buf, "paper");
}

async function generateGrain() {
  const data = Buffer.alloc(SIZE * SIZE * 4);
  for (let i = 0; i < data.length; i += 4) {
    const v = Math.floor(Math.random() * 255);
    data[i] = v;
    data[i + 1] = v;
    data[i + 2] = v;
    data[i + 3] = Math.floor(Math.random() * 30 + 5);
  }
  const buf = await sharp(data, { raw: { width: SIZE, height: SIZE, channels: 4 } }).png().toBuffer();
  await savePng(buf, "grain");
}

async function generateNoise() {
  const data = Buffer.alloc(SIZE * SIZE * 4);
  for (let i = 0; i < data.length; i += 4) {
    const v = Math.random() > 0.5 ? 255 : 0;
    data[i] = v;
    data[i + 1] = v;
    data[i + 2] = v;
    data[i + 3] = Math.floor(Math.random() * 38);
  }
  const buf = await sharp(data, { raw: { width: SIZE, height: SIZE, channels: 4 } }).png().toBuffer();
  await savePng(buf, "noise");
}

async function generateCanvas() {
  const svg = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="transparent"/>
    ${Array.from({ length: SIZE / 4 }, (_, i) => 
      `<rect x="${i * 4}" y="0" width="2" height="${SIZE}" fill="rgba(0,0,0,0.04)"/>
       <rect x="0" y="${i * 4}" width="${SIZE}" height="2" fill="rgba(0,0,0,0.04)"/>`
    ).join('')}
  </svg>`;
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  await savePng(buf, "canvas");
}

async function generateSpeckle() {
  const svg = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="transparent"/>
    ${Array.from({ length: 800 }, () => {
      const x = Math.random() * SIZE;
      const y = Math.random() * SIZE;
      const r = Math.random() * 1.2;
      return `<circle cx="${x}" cy="${y}" r="${r}" fill="rgba(0,0,0,${Math.random() * 0.15})"/>`;
    }).join('')}
  </svg>`;
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  await savePng(buf, "speckle");
}

async function generateMarble() {
  const svg = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="rgba(0,0,0,0)"/>
        <stop offset="50%" stop-color="rgba(0,0,0,0.03)"/>
        <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="transparent"/>
    ${Array.from({ length: 8 }, () => `<rect width="100%" height="100%" fill="url(#g)"/>`).join('')}
  </svg>`;
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  await savePng(buf, "marble");
}

async function generateWaves() {
  const svg = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="transparent"/>
    ${Array.from({ length: SIZE / 8 }, (_, y) => 
      `<path d="M0,${y * 8} Q${SIZE / 4},${y * 8 + 4} ${SIZE},${y * 8}" 
            stroke="rgba(0,0,0,0.04)" stroke-width="1" fill="none"/>`
    ).join('')}
  </svg>`;
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  await savePng(buf, "waves");
}

async function generateVintage() {
  const data = Buffer.alloc(SIZE * SIZE * 4);
  for (let i = 0; i < data.length; i += 4) {
    const v = Math.floor(Math.random() * 255);
    data[i] = v;
    data[i + 1] = v - 20;
    data[i + 2] = v - 40;
    data[i + 3] = Math.floor(Math.random() * 18);
  }
  const buf = await sharp(data, { raw: { width: SIZE, height: SIZE, channels: 4 } }).png().toBuffer();
  await savePng(buf, "vintage");
}

async function generateSubtle() {
  const svg = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="transparent"/>
    ${Array.from({ length: 4 }, () => {
      const cx = Math.random() * SIZE;
      const cy = Math.random() * SIZE;
      return `<defs><radialGradient id="g${cx}"><stop offset="0%" stop-color="rgba(0,0,0,0.03)"/><stop offset="100%" stop-color="rgba(0,0,0,0)"/></radialGradient></defs>
        <circle cx="${cx}" cy="${cy}" r="${SIZE * 0.4}" fill="url(#g${cx})"/>`;
    }).join('')}
  </svg>`;
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  await savePng(buf, "subtle");
}

async function generateLeaf() {
  const svg = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="transparent"/>
    ${Array.from({ length: 4 }, () => {
      const cx = Math.random() * SIZE;
      const cy = Math.random() * SIZE;
      return `<ellipse cx="${cx}" cy="${cy}" rx="${30 + Math.random() * 40}" ry="${20 + Math.random() * 30}" 
              transform="rotate(${Math.random() * 180} ${cx} ${cy})" fill="rgba(0,0,0,0.03)"/>`;
    }).join('')}
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

console.log("\n🎉 All textures saved to /public/textures/");