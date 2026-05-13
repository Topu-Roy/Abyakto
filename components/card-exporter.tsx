"use client";

import { useRef, useState } from "react";
import { quoteAtom } from "@/state/design";
import { toJpeg, toPng } from "html-to-image";
import { useAtom } from "jotai";
import { Button } from "@/components/ui/button";
import { QuoteCard } from "./quote-card";

export function CardExporter() {
  const [quote] = useAtom(quoteAtom);
  const [isExporting, setIsExporting] = useState(false);
  const [exportFormat, setExportFormat] = useState<"png" | "jpeg">("png");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    if (!cardRef.current) return;

    setIsExporting(true);

    try {
      const scale = 3;

      const exportFunc = exportFormat === "png" ? toPng : toJpeg;
      const dataUrl = await exportFunc(cardRef.current, {
        pixelRatio: scale,
        quality: exportFormat === "jpeg" ? 0.92 : undefined,
      });

      const link = document.createElement("a");
      link.download = `abyakto-${quote.text.slice(0, 20).replace(/\s+/g, "-")}-${Date.now()}.${exportFormat}`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          <button
            onClick={() => setExportFormat("png")}
            className={`rounded px-3 py-1.5 text-sm font-medium transition-colors ${
              exportFormat === "png" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            }`}
          >
            PNG
          </button>
          <button
            onClick={() => setExportFormat("jpeg")}
            className={`rounded px-3 py-1.5 text-sm font-medium transition-colors ${
              exportFormat === "jpeg" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            }`}
          >
            JPEG
          </button>
        </div>
        <Button onClick={handleExport} disabled={isExporting} size="sm">
          {isExporting ? "Downloading..." : "Download"}
        </Button>
      </div>

      <div ref={cardRef}>
        <QuoteCard />
      </div>
    </div>
  );
}
