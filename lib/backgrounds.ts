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
  { id: "paper", name: "Paper", banglaName: "কাগজ", css: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")" },
  { id: "grain", name: "Grain", banglaName: "দানা", css: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.12'/%3E%3C/svg%3E\")" },
  { id: "linen", name: "Linen", banglaName: "লিনেন", css: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)" },
  { id: "noise", name: "Noise", banglaName: "শব্দ", css: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E\")" },
  { id: "grid", name: "Grid", banglaName: "জাল", css: "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)" },
  { id: "dots", name: "Dots", banglaName: "বিন্দু", css: "radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)" },
  { id: "cross", name: "Crosshatch", banglaName: "ছাঁকা", css: "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(0,0,0,0.03) 4px, rgba(0,0,0,0.03) 8px), repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(0,0,0,0.03) 4px, rgba(0,0,0,0.03) 8px)" },
  { id: "canvas", name: "Canvas", banglaName: "ক্যানভাস", css: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='c'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='1'/%3E%3CfeDiffuseLighting in='noise' lighting-color='white' surfaceScale='2'%3E%3CfeDistantLight azimuth='45' elevation='60'/%3E%3C/feDiffuseLighting%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23c)' opacity='0.08'/%3E%3C/svg%3E\")" },
  { id: "marble", name: "Marble", banglaName: "মার্বেল", css: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='m'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.02' numOctaves='5' seed='5'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23m)' opacity='0.06'/%3E%3C/svg%3E\")" },
  { id: "bricks", name: "Bricks", banglaName: "ইট", css: "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0,0,0,0.05) 20px, rgba(0,0,0,0.05) 22px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,0,0,0.03) 40px, rgba(0,0,0,0.03) 42px)" },
  { id: "diagonal", name: "Diagonal", banglaName: "ঢালু", css: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.02) 10px, rgba(0,0,0,0.02) 20px)" },
  { id: "waves", name: "Waves", banglaName: "তরঙ্গ", css: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='w'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.03' numOctaves='2' seed='10'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23w)' opacity='0.05'/%3E%3C/svg%3E\")" },
  { id: "vintage", name: "Vintage", banglaName: "পুরনো", css: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='v'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='4'/%3E%3CfeColorMatrix type='hueRotate' values='30'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23v)' opacity='0.07'/%3E%3C/svg%3E\")" },
  { id: "subtle", name: "Subtle", banglaName: "সূক্ষ্ম", css: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='s'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.01' numOctaves='3'/%3E%3CfeZoomBehavior in='SourceGraphic'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23s)' opacity='0.04'/%3E%3C/svg%3E\")" },
  { id: "leaf", name: "Leaf Pattern", banglaName: "পাতা", css: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h80v80H0V0zm1 1h78v78H1V1z' fill='none'/%3E%3Cpath d='M20 20c10-10 30-5 35 10s-5 30-20 30c-10 5-25 0-30-15s5-25 15-25z' fill='rgba(0,0,0,0.03)'/%3E%3C/svg%3E\")" },
  { id: "speckle", name: "Speckle", banglaName: "চিহ্ন", css: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='sp'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23sp)' opacity='0.06'/%3E%3C/svg%3E\")" },
  { id: "radial", name: "Radial", banglaName: "বৃত্তাকার", css: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.03) 100%)" },
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