export interface FontInfo {
  id: string;
  name: string;
  banglaName: string;
  category: "serif" | "sans-serif" | "display" | "mono";
  weights: number[];
  previewText: string;
  cssVar?: string;
}

export const localFonts: FontInfo[] = [
  { id: "aloka", name: "Aloka", banglaName: "আলোকা", category: "sans-serif", weights: [400], previewText: "মন চায় এই জীবন থেকে", cssVar: "Aloka, sans-serif" },
  { id: "codepotro", name: "Codepotro", banglaName: "কোডপট্রো", category: "sans-serif", weights: [400], previewText: "মন চায় এই জীবন থেকে", cssVar: "Codepotro, sans-serif" },
  { id: "dhaleshwari", name: "Dhaleshwari", banglaName: "ধলেশ্বরী", category: "serif", weights: [400], previewText: "মন চায় এই জীবন থেকে", cssVar: "Dhaleshwari, serif" },
  { id: "fn-akar", name: "FN Akar", banglaName: "একার", category: "sans-serif", weights: [400], previewText: "মন চায় এই জীবন থেকে", cssVar: "FNAkar, sans-serif" },
  { id: "fn-dukkho", name: "FN Dukkho", banglaName: "দুঃখ", category: "display", weights: [400], previewText: "মন চায় এই জীবন থেকে", cssVar: "FNDukkho, sans-serif" },
  { id: "fn-kornofuli", name: "FN Kornofuli", banglaName: "করুণফুলি", category: "sans-serif", weights: [400], previewText: "মন চায় এই জীবন থেকে", cssVar: "FNKornofuli, sans-serif" },
  { id: "fn-mahin-aklima", name: "FN Mahin Aklima", banglaName: "মাহিন আকলিমা", category: "sans-serif", weights: [400], previewText: "মন চায় এই জীবন থেকে", cssVar: "FNMahinAklima, sans-serif" },
  { id: "fn-mashbik", name: "FN Mashbik", banglaName: "মাশবিক", category: "sans-serif", weights: [400], previewText: "মন চায় এই জীবন থেকে", cssVar: "FNMashbik, sans-serif" },
  { id: "fn-sabina", name: "FN Sabina", banglaName: "সাবিনা", category: "sans-serif", weights: [400], previewText: "মন চায় এই জীবন থেকে", cssVar: "FNSabina, sans-serif" },
  { id: "fn-shorif", name: "FN Shorif", banglaName: "শরিফ", category: "sans-serif", weights: [400], previewText: "মন চায় এই জীবন থেকে", cssVar: "FNShorif, sans-serif" },
  { id: "fn-srabondhara", name: "FN Srabondhara", banglaName: "স্রবন্ধারা", category: "sans-serif", weights: [400], previewText: "মন চায় এই জীবন থেকে", cssVar: "FNSrabondhara, sans-serif" },
  { id: "fn-tauhid", name: "FN Tauhid", banglaName: "তাউহিদ", category: "sans-serif", weights: [400], previewText: "মন চায় এই জীবন থেকে", cssVar: "FNTauhid, sans-serif" },
  { id: "nill-jannati", name: "Nill Jannati", banglaName: "নীল জান্নাতি", category: "serif", weights: [400], previewText: "মন চায় এই জীবন থেকে", cssVar: "NillJannati, serif" },
];

export const googleFonts: FontInfo[] = [
  {
    id: "noto-sans-bengali",
    name: "Noto Sans Bengali",
    banglaName: "নোটো সানস বাংলা",
    category: "sans-serif",
    weights: [400, 700],
    previewText: "মন চায় এই জীবন থেকে",
    cssVar: "--font-noto-sans-bengali",
  },
  {
    id: "noto-serif-bengali",
    name: "Noto Serif Bengali",
    banglaName: "নোটো সেরিফ বাংলা",
    category: "serif",
    weights: [400, 700],
    previewText: "মন চায় এই জীবন থেকে",
    cssVar: "--font-noto-serif-bengali",
  },
  {
    id: "hanken-grotesk",
    name: "Hanken Grotesk",
    banglaName: "হ্যাঙ্কেন গ্রোটেস্ক",
    category: "display",
    weights: [400, 700],
    previewText: "মন চায় এই জীবন থেকে",
    cssVar: "--font-hanken-grotesk",
  },
  {
    id: "kalpurush",
    name: "Kalpurush",
    banglaName: "কালপুরুষ",
    category: "sans-serif",
    weights: [400, 700],
    previewText: "মন চায় এই জীবন থেকে",
    cssVar: "--font-noto-sans-bengali",
  },
  {
    id: "solaiman-lipi",
    name: "SolaimanLipi",
    banglaName: "সোলাইমান লিপি",
    category: "sans-serif",
    weights: [400, 700],
    previewText: "মন চায় এই জীবন থেকে",
    cssVar: "--font-noto-sans-bengali",
  },
  {
    id: "nikosh",
    name: "Nikosh",
    banglaName: "নিকোশ",
    category: "serif",
    weights: [400, 700],
    previewText: "মন চায় এই জীবন থেকে",
    cssVar: "--font-noto-serif-bengali",
  },
];

export const allFonts = [...localFonts, ...googleFonts];

export function getFontById(id: string): FontInfo | undefined {
  return allFonts.find(f => f.id === id);
}

export function getFontCss(font: FontInfo): string {
  if (googleFonts.find(f => f.id === font.id)) {
    return `${font.name.replace(/ /g, "+")}:wght@${font.weights.join(";")}`;
  }
  return "";
}
