export interface FontInfo {
  id: string;
  name: string;
  banglaName: string;
  category: "serif" | "sans-serif" | "display" | "mono";
  weights: number[];
  previewText: string;
}

export const localFonts: FontInfo[] = [
  {
    id: "aloka",
    name: "Aloka",
    banglaName: "আলোকা",
    category: "sans-serif",
    weights: [400, 700],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "codepotro",
    name: "Codepotro Hadi",
    banglaName: "কোডপট্রো হাদী",
    category: "sans-serif",
    weights: [400],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "dhaleshwari",
    name: "Dhaleshwari",
    banglaName: "ধলেশ্বরী",
    category: "serif",
    weights: [400, 700],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "fn-akar",
    name: "FN Akar",
    banglaName: "একার",
    category: "sans-serif",
    weights: [400],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "fn-dukkho",
    name: "FN Dukkho Bilsahi",
    banglaName: "দুঃখ বিলাসী",
    category: "display",
    weights: [400],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "fn-kornofuli",
    name: "FN Kornofuli",
    banglaName: "করুণফুলি",
    category: "sans-serif",
    weights: [400],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "fn-mahin-aklima",
    name: "FNMahinAklima",
    banglaName: "মাহিন আকলিমা",
    category: "sans-serif",
    weights: [400],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "fn-mashbik",
    name: "FN Mashbik Mehreen",
    banglaName: "মাশবিক মাহরিন",
    category: "sans-serif",
    weights: [400],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "fn-sabina",
    name: "FN Sabina Shorolipi",
    banglaName: "সাবিনা স্বরলিপি",
    category: "sans-serif",
    weights: [400],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "fn-shorif",
    name: "FN Shorif Opekkha",
    banglaName: "শরিফ অপেক্ষা",
    category: "sans-serif",
    weights: [400],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "fn-srabondhara",
    name: "FN Srabondhara",
    banglaName: "স্রবন্ধারা",
    category: "sans-serif",
    weights: [400],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "fn-tauhid",
    name: "FN Tauhid Bangla",
    banglaName: "তাউহিদ বাংলা",
    category: "sans-serif",
    weights: [400],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "nill-jannati",
    name: "Nill Jannati",
    banglaName: "নীল জান্নাতি",
    category: "serif",
    weights: [400, 700],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "shobuj-bangla",
    name: "Shobuj Bangla",
    banglaName: "সবুজ বাংলা",
    category: "sans-serif",
    weights: [400],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "sohanur-nithila",
    name: "Sohanur Nithila",
    banglaName: "সোহানুর নিথিলা",
    category: "serif",
    weights: [400, 700],
    previewText: "মন চায় এই জীবন থেকে",
  },
];

export const googleFonts: FontInfo[] = [
  {
    id: "kalpurush",
    name: "Kalpurush",
    banglaName: "কালপুরুষ",
    category: "sans-serif",
    weights: [400, 700],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "solaiman-lipi",
    name: "SolaimanLipi",
    banglaName: "সোলাইমান লিপি",
    category: "sans-serif",
    weights: [400, 700],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "akaash",
    name: "Akaash",
    banglaName: "আকাশ",
    category: "sans-serif",
    weights: [400],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "nikosh",
    name: "Nikosh",
    banglaName: "নিকোশ",
    category: "serif",
    weights: [400, 700],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "mitra-mono",
    name: "Mitra Mono",
    banglaName: "মিত্র মোনো",
    category: "mono",
    weights: [400],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "hind-siliguri",
    name: "Hind Siliguri",
    banglaName: "হিন্দ সিলিগুড়ি",
    category: "sans-serif",
    weights: [400, 700],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "baloo-da-2",
    name: "Baloo Da 2",
    banglaName: "বালু দা ২",
    category: "display",
    weights: [400, 700],
    previewText: "মন চায় এই জীবন থেকে",
  },
  {
    id: "noto-serif-bengali",
    name: "Noto Serif Bengali",
    banglaName: "নোটো সেরিফ বাংলা",
    category: "serif",
    weights: [400, 700],
    previewText: "মন চায় এই জীবন থেকে",
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
