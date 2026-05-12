"use client";

import { designAtom, fontSizeMap, quoteAtom } from "@/state/design";
import { useAtom } from "jotai";
import { getFontById } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export function QuoteCard({
  quote,
  design,
  className,
}: {
  quote?: { text: string; author?: string; source?: string };
  design?: {
    fontId: string;
    backgroundType: string;
    backgroundValue: string;
    textColor?: string;
    textAlign: string;
    fontSize: string;
    padding: string;
    textPosition: string;
    showAttribution: boolean;
    quoteMarkStyle: string;
    aspectRatio: string;
  };
  className?: string;
}) {
  const [localQuote] = useAtom(quoteAtom);
  const [localDesign] = useAtom(designAtom);

  const q = quote ?? localQuote;
  const d = design ?? localDesign;

  const font = getFontById(d.fontId);
  const fontFamily = font ? `font-${font.id}, sans-serif` : "sans-serif";

  const bgStyle: React.CSSProperties = {
    background: d.backgroundType === "solid" ? d.backgroundValue : d.backgroundValue,
  };

  const textColor = d.textColor ?? (d.backgroundType === "solid" ? "inherit" : "#000");

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
      className={cn("relative w-full overflow-hidden", className)}
      style={{
        aspectRatio: aspectMap[d.aspectRatio] ?? "1",
        ...bgStyle,
      }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center p-4"
        style={{
          padding: paddingMap[d.padding] ?? "2rem",
          alignItems: positionMap[d.textPosition] ?? "center",
        }}
      >
        <div
          className="w-full max-w-full text-center"
          style={{
            fontFamily,
            fontSize: fontSizeMap[d.fontSize as keyof typeof fontSizeMap] || "2.5rem",
            color: textColor,
            textAlign: d.textAlign as "left" | "center" | "right",
          }}
        >
          {d.quoteMarkStyle !== "none" && (
            <span
              className={`mb-4 block text-4xl opacity-60 ${d.quoteMarkStyle === "elegant" ? "font-serif" : d.quoteMarkStyle === "modern" ? "font-sans" : ""}`}
            >
              {d.quoteMarkStyle === "simple" && "“"}
              {d.quoteMarkStyle === "elegant" && "❝"}
              {d.quoteMarkStyle === "modern" && "»"}
            </span>
          )}
          <p className="leading-relaxed">{q.text || "আপনার উক্তি এখানে লিখুন"}</p>
          {d.showAttribution && q.author && <p className="mt-4 text-lg opacity-80">— {q.author}</p>}
          {d.showAttribution && q.source && <p className="mt-1 text-sm opacity-60">{q.source}</p>}
        </div>
      </div>
    </div>
  );
}
