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
        <div className="grid max-h-48 grid-cols-2 gap-2 overflow-y-auto">
          {allFonts.map(font => (
            <button
              key={font.id}
              onClick={() => updateDesign("fontId", font.id)}
              className={cn(
                "rounded-md border p-2 text-left transition-colors",
                design.fontId === font.id ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted"
              )}
              style={{ fontFamily: `var(--font-${font.id})` }}
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
            <div className="grid max-h-32 grid-cols-5 gap-2 overflow-y-auto">
              {solidColors.map(color => (
                <button
                  key={color.id}
                  onClick={() => {
                    updateDesign("backgroundType", "solid");
                    updateDesign("backgroundValue", color.color);
                  }}
                  className={cn(
                    "aspect-square rounded-md border-2",
                    design.backgroundType === "solid" && design.backgroundValue === color.color
                      ? "border-primary ring-2 ring-primary"
                      : "border-transparent"
                  )}
                  style={{ backgroundColor: color.color }}
                  title={color.banglaName}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="texture" className="mt-3">
            <div className="grid max-h-32 grid-cols-3 gap-2 overflow-y-auto">
              {textures.map(tex => (
                <button
                  key={tex.id}
                  onClick={() => {
                    updateDesign("backgroundType", "texture");
                    updateDesign("backgroundValue", tex.css);
                    updateDesign("textureId", tex.id);
                  }}
                  className={cn(
                    "aspect-video rounded-md border-2",
                    design.backgroundType === "texture" && design.textureId === tex.id
                      ? "border-primary ring-2 ring-primary"
                      : "border-transparent"
                  )}
                  style={{
                    background: `${design.textureBgColor ?? "#faf8f5"}`,
                    backgroundImage: `url(/textures/${tex.id}.png)`,
                    backgroundSize: "64px 64px",
                  }}
                  title={tex.banglaName}
                />
              ))}
            </div>
            {design.backgroundType === "texture" && (
              <div className="mt-3">
                <h4 className="mb-2 text-xs font-medium text-muted-foreground">Background Color</h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "#faf8f5",
                    "#ffffff",
                    "#e8dfd0",
                    "#1a1a2e",
                    "#2d4a3e",
                    "#36454f",
                    "#64748b",
                    "#f4a261",
                    "#c9775d",
                    "#c9a9a6",
                  ].map(color => (
                    <button
                      key={color}
                      onClick={() => updateDesign("textureBgColor", color)}
                      className={cn(
                        "h-6 w-6 rounded-full border-2 transition-transform hover:scale-110",
                        design.textureBgColor === color
                          ? "border-primary ring-2 ring-primary ring-offset-1"
                          : "border-transparent"
                      )}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                  <input
                    type="color"
                    value={design.textureBgColor ?? "#faf8f5"}
                    onChange={e => updateDesign("textureBgColor", e.target.value)}
                    className="h-6 w-6 cursor-pointer rounded-full border-0"
                    title="Custom color"
                  />
                </div>
              </div>
            )}
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
          ].map(color => (
            <button
              key={color.value}
              onClick={() => updateDesign("textColor", color.value)}
              className={cn(
                "h-8 w-8 rounded-full border-2",
                design.textColor === color.value || (!design.textColor && color.value === "")
                  ? "border-primary ring-2 ring-primary"
                  : "border-transparent"
              )}
              style={{
                backgroundColor:
                  color.value === ""
                    ? "linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)"
                    : (color.value ?? "#faf8f5"),
                background:
                  color.value === "" ? "conic-gradient(#ccc 0 25%, #fff 0 50%, #ccc 0 75%, #fff 0)" : color.value,
              }}
              title={color.label}
            />
          ))}
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
