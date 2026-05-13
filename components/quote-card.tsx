"use client";

import type { RefObject } from "react";
import { designAtom, fontSizeMap, lineHeightMap, quoteAtom } from "@/state/design";
import { useAtom } from "jotai";
import { getFontById } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type Props = {
  quote?: { text: string; author?: string; source?: string };
  design?: {
    fontId: string;
    backgroundType: string;
    backgroundValue: string;
    textureId?: string;
    textureBgColor?: string;
    textColor?: string;
    textAlign: string;
    fontSize: string;
    lineHeight?: string;
    padding: string;
    textPosition: string;
    showAttribution: boolean;
    quoteMarkStyle: string;
    aspectRatio: string;
  };
  className?: string;
  ref?: RefObject<HTMLDivElement | null>;
};

export function QuoteCard({ quote, design, className, ref }: Props) {
  const [localQuote] = useAtom(quoteAtom);
  const [localDesign] = useAtom(designAtom);

  const q = quote ?? localQuote;
  const d = design ?? localDesign;

  const font = getFontById(d.fontId);
  const fontFamily = font?.cssVar
    ? font.cssVar.includes(",")
      ? font.cssVar
      : `var(${font.cssVar})`
    : "sans-serif";

  const getBackgroundStyle = (): React.CSSProperties => {
    if (d.backgroundType === "solid") {
      return { backgroundColor: d.backgroundValue };
    }
    if (d.backgroundType === "texture") {
      const bgColor = d.textureBgColor ?? "#faf8f5";
      const textureImg = d.textureId ? `url(/textures/${d.textureId}.png)` : "none";
      return {
        backgroundColor: bgColor,
        backgroundImage: textureImg,
        backgroundSize: "64px 64px",
        backgroundRepeat: "repeat",
      };
    }
    if (d.backgroundType === "transparent") {
      return {};
    }
    return {};
  };

  const textColor =
    d.textColor && d.textColor !== "" ? d.textColor : d.backgroundType === "solid" ? "inherit" : "#000";

  const lineHeightValue = d.lineHeight ? lineHeightMap[d.lineHeight] : lineHeightMap.relaxed;

  const paddingMap: Record<string, string> = {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    xl: "4rem",
  };

  const positionMap: Record<string, string> = {
    top: "flex-start",
    center: "center",
    bottom: "flex-end",
  };

  const aspectMap: Record<string, string> = {
    square: "1/1",
    portrait: "4/5",
    story: "9/16",
    landscape: "16/9",
  };

  return (
    <div
      ref={ref}
      className={cn("relative w-full overflow-hidden", className)}
      style={{
        aspectRatio: aspectMap[d.aspectRatio] ?? "1",
        ...getBackgroundStyle(),
        overflow: "hidden",
      }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center p-4"
        style={{
          padding: paddingMap[d.padding] ?? "2rem",
          alignItems: positionMap[d.textPosition] ?? "center",
          overflow: "hidden",
        }}
      >
        <div
          className="w-full max-w-full text-center wrap-break-word"
          style={{
            fontFamily,
            fontSize: fontSizeMap[d.fontSize as keyof typeof fontSizeMap] || "2.5rem",
            color: textColor,
            lineHeight: lineHeightValue,
            textAlign: d.textAlign as "left" | "center" | "right",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {d.quoteMarkStyle !== "none" && (
            <span
              className={`mb-4 block text-4xl opacity-60 ${d.quoteMarkStyle === "elegant" ? "font-serif" : d.quoteMarkStyle === "modern" ? "font-sans" : ""}`}
            >
              {d.quoteMarkStyle === "simple" && ""}
              {d.quoteMarkStyle === "elegant" && "❝"}
              {d.quoteMarkStyle === "modern" && "»"}
            </span>
          )}
          <p style={{ lineHeight: lineHeightValue }}>{q.text || "আপনার উক্তি এখানে লিখুন"}</p>
          {d.showAttribution && q.author && <p className="mt-4 text-lg opacity-80">— {q.author}</p>}
          {d.showAttribution && q.source && <p className="mt-1 text-sm opacity-60">{q.source}</p>}
        </div>
      </div>
    </div>
  );
}
