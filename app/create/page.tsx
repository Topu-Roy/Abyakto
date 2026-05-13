"use client";

import { useRef, useState } from "react";
import { quoteAtom } from "@/state/design";
import { toJpeg, toPng } from "html-to-image";
import { useAtom } from "jotai";
import { DesignControls } from "@/components/design-controls";
import { QuoteCard } from "@/components/quote-card";
import { Button } from "@/components/ui/button";

export default function CreatePage() {
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
        cacheBust: true,
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
    <div className="min-h-screen bg-background">
      <header className="border-b p-4">
        <h1 className="text-xl font-bold">Abyakto — Create Quote Card</h1>
      </header>

      <main className="mx-auto max-w-7xl p-4 lg:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <DesignControls />
          </div>

          <div className="order-1 lg:order-2">
            <div className="sticky top-4 space-y-4">
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

              <div className="rounded-lg p-8 shadow-lg border">
                <QuoteCard ref={cardRef} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
