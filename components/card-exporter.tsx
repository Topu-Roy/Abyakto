"use client";

import { useState, useRef } from "react";
import { toPng, toJpeg } from "html-to-image";
import { useAtom } from "jotai";
import { quoteAtom, designAtom, aspectRatioDimensions } from "@/state/design";
import { QuoteCard } from "./quote-card";
import { Button } from "@/components/ui/button";

export function CardExporter() {
  const [quote] = useAtom(quoteAtom);
  const [design] = useAtom(designAtom);
  const [isExporting, setIsExporting] = useState(false);
  const [exportFormat, setExportFormat] = useState<"png" | "jpeg">("png");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    if (!cardRef.current) return;

    setIsExporting(true);

    try {
      const dims = aspectRatioDimensions[design.aspectRatio];
      const scale = 3;

      const exportFunc = exportFormat === "png" ? toPng : toJpeg;
      const dataUrl = await exportFunc(cardRef.current, {
        pixelRatio: scale,
        width: dims.width,
        height: dims.height,
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
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setExportFormat("png")}
          className={`px-3 py-1 rounded text-sm ${
            exportFormat === "png" ? "bg-primary text-primary-foreground" : "bg-muted"
          }`}
        >
          PNG
        </button>
        <button
          onClick={() => setExportFormat("jpeg")}
          className={`px-3 py-1 rounded text-sm ${
            exportFormat === "jpeg" ? "bg-primary text-primary-foreground" : "bg-muted"
          }`}
        >
          JPEG
        </button>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <div ref={cardRef} className="w-full max-w-md mx-auto">
          <QuoteCard />
        </div>
      </div>

      <Button onClick={handleExport} disabled={isExporting} className="w-full">
        {isExporting ? "Exporting..." : `Download ${exportFormat.toUpperCase()}`}
      </Button>
    </div>
  );
}