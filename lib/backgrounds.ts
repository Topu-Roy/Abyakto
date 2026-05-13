export type BackgroundType = "solid" | "gradient" | "texture" | "image";

export interface SolidColor {
  id: string;
  name: string;
  banglaName: string;
  color: string;
  textColor: "light" | "dark";
}

export interface GradientBg {
  id: string;
  name: string;
  banglaName: string;
  css: string;
  textColor: "light" | "dark";
}

export interface TextureBg {
  id: string;
  name: string;
  banglaName: string;
  css: string;
}

export const solidColors: SolidColor[] = [
  { id: "cream", name: "Cream", banglaName: "ক্রিম", color: "#faf8f5", textColor: "dark" },
  { id: "sand", name: "Sand", banglaName: "বালু", color: "#e8dfd0", textColor: "dark" },
  { id: "terracotta", name: "Terracotta", banglaName: "মাটি", color: "#c9775d", textColor: "light" },
  { id: "sage", name: "Sage", banglaName: "সবুজ", color: "#9caf88", textColor: "dark" },
  { id: "forest", name: "Forest", banglaName: "বন", color: "#2d4a3e", textColor: "light" },
  { id: "midnight", name: "Midnight", banglaName: "রাত", color: "#1a1a2e", textColor: "light" },
  { id: "dusty-rose", name: "Dusty Rose", banglaName: "গোলাপ", color: "#c9a9a6", textColor: "dark" },
  { id: "lavender", name: "Lavender", banglaName: "বেগুনি", color: "#e6e0f0", textColor: "dark" },
  { id: "slate", name: "Slate", banglaName: "ছাই", color: "#64748b", textColor: "light" },
  { id: "charcoal", name: "Charcoal", banglaName: "কয়লা", color: "#36454f", textColor: "light" },
  { id: "ivory", name: "Ivory", banglaName: "হাড়ি", color: "#fffff0", textColor: "dark" },
  { id: "mocha", name: "Mocha", banglaName: "মোকা", color: "#6f4e37", textColor: "light" },
  { id: "ocean", name: "Ocean", banglaName: "সমুদ্র", color: "#0077b6", textColor: "light" },
  { id: "sunset", name: "Sunset", banglaName: "সূর্যাস্ত", color: "#f4a261", textColor: "dark" },
  { id: "mint", name: "Mint", banglaName: "পুদিনা", color: "#a8e6cf", textColor: "dark" },
  { id: "peach", name: "Peach", banglaName: "বাদাম", color: "#ffdab9", textColor: "dark" },
  { id: "stone", name: "Stone", banglaName: "পাথর", color: "#928e85", textColor: "light" },
  { id: "amber", name: "Amber", banglaName: "কমলা", color: "#ffbf00", textColor: "dark" },
  { id: "rose", name: "Rose", banglaName: "গোলাপ", color: "#e75480", textColor: "light" },
  { id: "sky", name: "Sky", banglaName: "আকাশ", color: "#87ceeb", textColor: "dark" },
];

export const gradients: GradientBg[] = [
  { id: "late-afternoon", name: "Late Afternoon", banglaName: "শেষ বিকেল", css: "linear-gradient(to bottom, #f6d365 0%, #fda085 100%)", textColor: "dark" },
  { id: "morning-light", name: "Morning Light", banglaName: "ভোরের আলো", css: "linear-gradient(to right, #fa709a 0%, #fee140 100%)", textColor: "dark" },
  { id: "twilight", name: "Twilight", banglaName: "সন্ধ্যা", css: "linear-gradient(to top, #30cfd0 0%, #330867 100%)", textColor: "light" },
  { id: "ocean-breeze", name: "Ocean Breeze", banglaName: "সমুদ্র বাতাস", css: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)", textColor: "dark" },
  { id: "autumn", name: "Autumn", banglaName: "শরৎ", css: "linear-gradient(to right, #d4fc79 0%, #96e6a1 100%)", textColor: "dark" },
  { id: "dusk", name: "Dusk", banglaName: "সন্ধ্যাকালীন", css: "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)", textColor: "dark" },
  { id: "midnight-blue", name: "Midnight Blue", banglaName: "মাঝরাত", css: "linear-gradient(to bottom, #000428 0%, #004e92 100%)", textColor: "light" },
  { id: "sunset-glow", name: "Sunset Glow", banglaName: "সূর্যাস্তের আভা", css: "linear-gradient(to right, #ff9966 0%, #ff5e62 100%)", textColor: "dark" },
  { id: "mint-fresh", name: "Mint Fresh", banglaName: "তাজা পুদিনা", css: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)", textColor: "dark" },
  { id: "royal", name: "Royal", banglaName: "রাজকীয়", css: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)", textColor: "light" },
  { id: "warm-haze", name: "Warm Haze", banglaName: "উষ্ণ কুয়াশা", css: "linear-gradient(to bottom, #f83600 0%, #f9d423 100%)", textColor: "dark" },
  { id: "purple-dream", name: "Purple Dream", banglaName: "বেগুনি স্বপ্ন", css: "linear-gradient(to top, #c471f5 0%, #fa71cd 100%)", textColor: "light" },
  { id: "dawn", name: "Dawn", banglaName: "ভোর", css: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)", textColor: "dark" },
  { id: "forest-canopy", name: "Forest Canopy", banglaName: "বনের ছায়া", css: "linear-gradient(to right, #134e5e 0%, #71b280 100%)", textColor: "light" },
  { id: "berry", name: "Berry", banglaName: "বেরি", css: "linear-gradient(to right, #834d9b 0%, #d04ed6 100%)", textColor: "light" },
];

export const textures: TextureBg[] = [
  // Noise-based textures
  { id: "paper", name: "Paper", banglaName: "কাগজ", css: "" },
  { id: "grain", name: "Grain", banglaName: "দানা", css: "" },
  { id: "noise", name: "Noise", banglaName: "শব্দ", css: "" },
  { id: "vintage", name: "Vintage", banglaName: "পুরনো", css: "" },
  // Pattern-based textures
  { id: "canvas", name: "Canvas", banglaName: "ক্যানভাস", css: "" },
  { id: "speckle", name: "Speckle", banglaName: "চিহ্ন", css: "" },
  { id: "waves", name: "Waves", banglaName: "তরঙ্গ", css: "" },
  { id: "crosshatch", name: "Crosshatch", banglaName: "ছাঁকা", css: "" },
  { id: "dots", name: "Dots", banglaName: "বিন্দু", css: "" },
  { id: "grid", name: "Grid", banglaName: "জাল", css: "" },
  { id: "diagonal", name: "Diagonal", banglaName: "ঢালু", css: "" },
  // Geometric textures
  { id: "chevron", name: "Chevron", banglaName: "শেভরন", css: "" },
  { id: "herringbone", name: "Herringbone", banglaName: "হেরিংবোন", css: "" },
  { id: "stripe", name: "Stripe", banglaName: "ডোরা", css: "" },
  { id: "honeycomb", name: "Honeycomb", banglaName: "মৌচাক", css: "" },
  { id: "diamond", name: "Diamond", banglaName: "হীরক", css: "" },
  { id: "circles", name: "Circles", banglaName: "বৃত্ত", css: "" },
  { id: "triangles", name: "Triangles", banglaName: "ত্রিভুজ", css: "" },
  { id: "bubbles", name: "Bubbles", banglaName: "বাবল", css: "" },
  { id: "stars", name: "Stars", banglaName: "তারা", css: "" },
  { id: "tiles", name: "Tiles", banglaName: "টাইলস", css: "" },
  { id: "zigzag", name: "Zigzag", banglaName: "জিগজ্যাগ", css: "" },
  { id: "mosaic", name: "Mosaic", banglaName: "মোজাইক", css: "" },
  { id: "scales", name: "Scales", banglaName: "আঁশ", css: "" },
  // Paper variants
  { id: "kraft", name: "Kraft Paper", banglaName: "ক্রাফট", css: "" },
  { id: "parchment", name: "Parchment", banglaName: "পার্চমেন্ট", css: "" },
  { id: "watercolor", name: "Watercolor", banglaName: "ওয়াটারকালার", css: "" },
  { id: "recycled", name: "Recycled", banglaName: "রিসাইকেল", css: "" },
  { id: "handmade", name: "Handmade", banglaName: "হ্যান্ডমেড", css: "" },
  { id: "laid", name: "Laid Paper", banglaName: "লেইড", css: "" },
  { id: "vallum", name: "Vellum", banglaName: "ভেলাম", css: "" },
  { id: "craft", name: "Craft Paper", banglaName: "ক্রাফট পেপার", css: "" },
];

export function getBackgroundByType(type: BackgroundType, id: string) {
  switch (type) {
    case "solid":
      return solidColors.find(c => c.id === id);
    case "gradient":
      return gradients.find(g => g.id === id);
    case "texture":
      return textures.find(t => t.id === id);
    default:
      return null;
  }
}