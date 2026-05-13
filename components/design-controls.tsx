"use client";

import {
  designAtom,
  quoteAtom,
  type AspectRatio,
  type FontSize,
  type QuoteMarkStyle,
  type TextAlign,
  type TextPosition,
} from "@/state/design";
import { useAtom } from "jotai";
import { solidColors, textures, type BackgroundType } from "@/lib/backgrounds";
import { allFonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DesignControls() {
  const [design, setDesign] = useAtom(designAtom);
  const [quote, setQuote] = useAtom(quoteAtom);

  const updateDesign = (key: string, value: string | boolean) => {
    setDesign({ ...design, [key]: value });
  };

  const aspectRatios: { value: AspectRatio; label: string; icon: string }[] = [
    { value: "square", label: "Square", icon: "◻" },
    { value: "portrait", label: "Portrait", icon: "▭" },
    { value: "story", label: "Story", icon: "▯" },
    { value: "landscape", label: "Landscape", icon: "▬" },
  ];

  const fontSizes: { value: FontSize; label: string }[] = [
    { value: "small", label: "S" },
    { value: "medium", label: "M" },
    { value: "large", label: "L" },
    { value: "xl", label: "XL" },
  ];

  const textPositions: { value: TextPosition; label: string }[] = [
    { value: "top", label: "Top" },
    { value: "center", label: "Center" },
    { value: "bottom", label: "Bottom" },
  ];

  const quoteMarkStyles: { value: QuoteMarkStyle; label: string }[] = [
    { value: "none", label: "None" },
    { value: "simple", label: "Simple" },
    { value: "elegant", label: "Elegant" },
    { value: "modern", label: "Modern" },
  ];

  const bgTypes: { value: BackgroundType; label: string }[] = [
    { value: "solid", label: "Solid" },
    { value: "texture", label: "Texture" },
    { value: "transparent", label: "Transparent" },
  ];

  return (
    <div className="space-y-6 rounded-lg border bg-card p-4">
      <div>
        <h3 className="mb-3 text-sm font-medium">Quote Text</h3>
        <textarea
          value={quote.text}
          onChange={e => setQuote({ ...quote, text: e.target.value })}
          placeholder="Enter your quote in Bangla..."
          className="w-full resize-none rounded-md border bg-background p-3"
          rows={3}
        />
        <div className="mt-2 flex gap-2">
          <input
            type="text"
            value={quote.author ?? ""}
            onChange={e => setQuote({ ...quote, author: e.target.value })}
            placeholder="Author (optional)"
            className="flex-1 rounded-md border bg-background p-2 text-sm"
          />
          <input
            type="text"
            value={quote.source ?? ""}
            onChange={e => setQuote({ ...quote, source: e.target.value })}
            placeholder="Source (optional)"
            className="flex-1 rounded-md border bg-background p-2 text-sm"
          />
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Aspect Ratio</h3>
        <div className="flex gap-2">
          {aspectRatios.map(ar => (
            <button
              key={ar.value}
              onClick={() => updateDesign("aspectRatio", ar.value)}
              className={cn(
                "flex-1 rounded-md border p-2 text-sm transition-colors",
                design.aspectRatio === ar.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-muted"
              )}
            >
              {ar.icon} {ar.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Font</h3>
        <div className="grid max-h-64 grid-cols-2 gap-2 overflow-y-auto">
            {allFonts.map(font => (
              <button
                key={font.id}
                onClick={() => updateDesign("fontId", font.id)}
                className={cn(
                  "rounded-md border p-2 text-left transition-all",
                  design.fontId === font.id
                    ? "border-primary ring-2 ring-primary bg-primary/5"
                    : "bg-background hover:bg-muted"
                )}
                style={font.cssVar?.includes(",") ? { fontFamily: font.cssVar } : undefined}
              >
                <div className="truncate text-sm">{font.banglaName}</div>
                <div className="text-xs opacity-70">{font.name}</div>
              </button>
            ))}
          </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Font Size</h3>
        <div className="flex gap-2">
          {fontSizes.map(fs => (
            <button
              key={fs.value}
              onClick={() => updateDesign("fontSize", fs.value)}
              className={cn(
                "flex-1 rounded-md border p-2 text-sm",
                design.fontSize === fs.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-muted"
              )}
            >
              {fs.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Line Height</h3>
        <div className="flex gap-2">
          {[
            { value: "tight", label: "Tight" },
            { value: "relaxed", label: "Relaxed" },
            { value: "loose", label: "Loose" },
          ].map(lh => (
            <button
              key={lh.value}
              onClick={() => updateDesign("lineHeight", lh.value)}
              className={cn(
                "flex-1 rounded-md border p-2 text-sm",
                (design.lineHeight ?? "relaxed") === lh.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-muted"
              )}
            >
              {lh.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Background</h3>
        <Tabs
          value={design.backgroundType}
          onValueChange={v => updateDesign("backgroundType", v as string)}
          className="w-full"
        >
          <TabsList className="w-full">
            {bgTypes.map(bt => (
              <TabsTrigger key={bt.value} value={bt.value} className="flex-1">
                {bt.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="solid" className="mt-3">
            <div className="grid max-h-40 grid-cols-5 gap-2 overflow-y-auto">
              {solidColors.map(color => (
                <button
                  key={color.id}
                  onClick={() => {
                    updateDesign("backgroundType", "solid");
                    updateDesign("backgroundValue", color.color);
                  }}
                  className={cn(
                    "flex flex-col items-center gap-0.5 rounded-md border p-1",
                    design.backgroundType === "solid" && design.backgroundValue === color.color
                      ? "border-primary ring-2 ring-primary"
                      : "border-transparent"
                  )}
                >
                  <div
                    className="w-full aspect-square rounded-sm"
                    style={{ backgroundColor: color.color }}
                  />
                  <span className="text-[9px] leading-tight text-center text-muted-foreground truncate w-full">
                    {color.banglaName}
                  </span>
                </button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="texture" className="mt-3">
            <div className="grid max-h-56 grid-cols-3 gap-2 overflow-y-auto">
              {textures.map(tex => (
                <button
                  key={tex.id}
                  onClick={() => {
                    updateDesign("backgroundType", "texture");
                    updateDesign("backgroundValue", tex.css);
                    updateDesign("textureId", tex.id);
                  }}
                  className={cn(
                    "flex flex-col items-center gap-1 rounded-md border-2 p-1 transition-all",
                    design.backgroundType === "texture" && design.textureId === tex.id
                      ? "border-primary ring-2 ring-primary bg-primary/5"
                      : "border-transparent hover:border-muted"
                  )}
                >
                  <div
                    className="w-full aspect-video rounded-sm"
                    style={{
                      backgroundColor: design.textureBgColor ?? "#faf8f5",
                      backgroundImage: `url(/textures/${tex.id}.png)`,
                      backgroundSize: "64px 64px",
                    }}
                  />
                  <span className="text-[10px] leading-tight text-center text-muted-foreground truncate w-full">
                    {tex.banglaName}
                  </span>
                </button>
              ))}
            </div>
            {design.backgroundType === "texture" && (
              <div className="mt-3">
                <h4 className="mb-2 text-xs font-medium text-muted-foreground">Background Color</h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { value: "#faf8f5", label: "Cream" },
                    { value: "#ffffff", label: "White" },
                    { value: "#e8dfd0", label: "Sand" },
                    { value: "#1a1a2e", label: "Navy" },
                    { value: "#2d4a3e", label: "Forest" },
                    { value: "#36454f", label: "Charcoal" },
                    { value: "#64748b", label: "Slate" },
                    { value: "#f4a261", label: "Orange" },
                    { value: "#c9775d", label: "Terracotta" },
                    { value: "#c9a9a6", label: "Rose" },
                  ].map(c => (
                    <button
                      key={c.value}
                      onClick={() => updateDesign("textureBgColor", c.value)}
                      className={cn(
                        "size-8 rounded-full border-2 transition-transform hover:scale-110",
                        design.textureBgColor === c.value
                          ? "border-primary ring-2 ring-primary ring-offset-1"
                          : "border-transparent"
                      )}
                      style={{ backgroundColor: c.value }}
                      title={c.label}
                    />
                  ))}
                  <input
                    type="color"
                    value={design.textureBgColor ?? "#faf8f5"}
                    onChange={e => updateDesign("textureBgColor", e.target.value)}
                    className="size-8 cursor-pointer rounded-full border-0"
                    title="Custom color"
                  />
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="transparent" className="mt-3">
            <div className="flex flex-col items-center gap-3 py-4 text-center text-sm text-muted-foreground">
              <div className="size-12 rounded-full border-2 border-dashed flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
                  <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1"/>
                  <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
              <p>No background. Only quote text will render.</p>
              <p className="text-xs">Best for overlaying on images or custom backgrounds.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Text Alignment</h3>
        <div className="flex gap-2">
          {(["left", "center", "right"] as TextAlign[]).map(align => (
            <button
              key={align}
              onClick={() => updateDesign("textAlign", align)}
              className={cn(
                "flex-1 rounded-md border p-2 text-sm",
                design.textAlign === align ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted"
              )}
            >
              {align.charAt(0).toUpperCase() + align.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Text Color</h3>
        <div className="flex flex-wrap gap-2">
          {[
            { value: "", label: "Auto" },
            { value: "#000000", label: "Black" },
            { value: "#ffffff", label: "White" },
            { value: "#36454f", label: "Charcoal" },
            { value: "#6b4c35", label: "Brown" },
            { value: "#1a1a2e", label: "Navy" },
            { value: "#2d4a3e", label: "Forest" },
            { value: "#8b4513", label: "Saddle" },
          ].map(color => {
            const isActive = color.value === "" ? !design.textColor : design.textColor === color.value;
            return (
              <button
                key={color.value}
                onClick={() => updateDesign("textColor", color.value)}
                className={cn(
                  "size-8 rounded-full border-2 flex items-center justify-center",
                  isActive ? "border-primary ring-2 ring-primary" : "border-transparent"
                )}
                style={color.value ? { backgroundColor: color.value } : undefined}
                title={color.label}
              >
                {color.value === "" && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <line x1="0" y1="14" x2="14" y2="0" stroke="#888" strokeWidth="1.5"/>
                    <line x1="3" y1="14" x2="14" y2="3" stroke="#ccc" strokeWidth="1.5"/>
                  </svg>
                )}
              </button>
            );
          })}
          <input
            type="color"
            value={design.textColor ?? "#000000"}
            onChange={e => updateDesign("textColor", e.target.value)}
            className="h-8 w-8 cursor-pointer rounded-full border-0"
            title="Custom color"
          />
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Text Position</h3>
        <div className="flex gap-2">
          {textPositions.map(tp => (
            <button
              key={tp.value}
              onClick={() => updateDesign("textPosition", tp.value)}
              className={cn(
                "flex-1 rounded-md border p-2 text-sm",
                design.textPosition === tp.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-muted"
              )}
            >
              {tp.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Quote Marks</h3>
        <div className="flex gap-2">
          {quoteMarkStyles.map(qms => (
            <button
              key={qms.value}
              onClick={() => updateDesign("quoteMarkStyle", qms.value)}
              className={cn(
                "flex-1 rounded-md border p-2 text-sm",
                design.quoteMarkStyle === qms.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-muted"
              )}
            >
              {qms.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Padding</h3>
        <div className="flex gap-2">
          {(["small", "medium", "large", "xl"] as const).map(pad => (
            <button
              key={pad}
              onClick={() => updateDesign("padding", pad)}
              className={cn(
                "flex-1 rounded-md border p-2 text-sm",
                design.padding === pad ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted"
              )}
            >
              {pad.charAt(0).toUpperCase() + pad.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          id="showAttribution"
          checked={Boolean(design.showAttribution) ?? false}
          onCheckedChange={v => updateDesign("showAttribution", v === true)}
        />
        <label htmlFor="showAttribution" className="text-sm">
          Show Attribution
        </label>
      </div>
    </div>
  );
}
