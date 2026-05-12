"use client";

import { atomWithStorage } from "jotai/utils";

export type AspectRatio = "square" | "portrait" | "story" | "landscape";
export type BackgroundType = "solid" | "gradient" | "texture" | "image";
export type TextAlign = "left" | "center" | "right";
export type FontSize = "small" | "medium" | "large" | "xl";
export type TextPosition = "top" | "center" | "bottom";
export type QuoteMarkStyle = "none" | "simple" | "elegant" | "modern";

export interface QuoteData {
  text: string;
  author?: string;
  source?: string;
}

export interface DesignData {
  fontId: string;
  backgroundType: BackgroundType;
  backgroundValue: string;
  textColor?: string;
  textAlign: TextAlign;
  fontSize: FontSize;
  padding: string;
  textPosition: TextPosition;
  showAttribution: boolean;
  quoteMarkStyle: QuoteMarkStyle;
  borderStyle?: string;
  patternOverlay?: string;
  aspectRatio: AspectRatio;
}

const defaultQuote: QuoteData = {
  text: "",
  author: "",
  source: "",
};

const defaultDesign: DesignData = {
  fontId: "kalpurush",
  backgroundType: "solid",
  backgroundValue: "#faf8f5",
  textAlign: "center",
  fontSize: "medium",
  padding: "medium",
  textPosition: "center",
  showAttribution: true,
  quoteMarkStyle: "elegant",
  aspectRatio: "square",
};

export const quoteAtom = atomWithStorage("abyakto-quote", defaultQuote);
export const designAtom = atomWithStorage("abyakto-design", defaultDesign);

export const aspectRatioDimensions: Record<AspectRatio, { width: number; height: number }> = {
  square: { width: 1080, height: 1080 },
  portrait: { width: 1080, height: 1350 },
  story: { width: 1080, height: 1920 },
  landscape: { width: 1920, height: 1080 },
};

export const fontSizeMap: Record<FontSize, string> = {
  small: "2rem",
  medium: "2.5rem",
  large: "3rem",
  xl: "3.5rem",
};
