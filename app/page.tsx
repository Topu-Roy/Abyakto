import Link from "next/link";
import { QuoteCard } from "@/components/quote-card";
import { Button } from "@/components/ui/button";

const sampleQuotes = [
  {
    text: "যে মন চায় সত্যি পথ চিনতে, তার পথ কখনো বন্ধ হয় না।",
    author: "রবীন্দ্রনাথ ঠাকুর",
    design: { fontId: "kalpurush", backgroundType: "gradient" as const, backgroundValue: "linear-gradient(to bottom, #f6d365 0%, #fda085 100%)", textAlign: "center" as const, fontSize: "medium" as const, padding: "medium" as const, textPosition: "center" as const, showAttribution: true, quoteMarkStyle: "elegant" as const, aspectRatio: "square" as const },
  },
  {
    text: "অপরাধী মানুষ নয়, অপরাধই মানুষকে অপরাধী করে।",
    author: "বঙ্গবন্ধু শেখ মুজিবুর রহমান",
    design: { fontId: "nikosh", backgroundType: "solid" as const, backgroundValue: "#2d4a3e", textAlign: "center" as const, fontSize: "large" as const, padding: "large" as const, textPosition: "center" as const, showAttribution: true, quoteMarkStyle: "modern" as const, aspectRatio: "portrait" as const },
  },
  {
    text: "স্বপ্ন দেখো, বিশ্বাস রাখো, সাহস করো।",
    author: "",
    design: { fontId: "baloo-da-2", backgroundType: "gradient" as const, backgroundValue: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)", textAlign: "center" as const, fontSize: "xl" as const, padding: "xl" as const, textPosition: "center" as const, showAttribution: false, quoteMarkStyle: "simple" as const, aspectRatio: "story" as const },
  },
  {
    text: "ভালোবাসা একা যায় না, ভালোবাসা ছড়িয়ে যায়।",
    author: "লালন শাহ",
    design: { fontId: "solaiman-lipi", backgroundType: "solid" as const, backgroundValue: "#c9775d", textAlign: "center" as const, fontSize: "medium" as const, padding: "large" as const, textPosition: "center" as const, showAttribution: true, quoteMarkStyle: "elegant" as const, aspectRatio: "square" as const },
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Abyakto</h1>
          <nav className="flex gap-4">
            <Link href="/create" className="text-sm hover:underline">Create</Link>
            <Link href="/explore" className="text-sm hover:underline">Explore</Link>
            <Link href="/saved" className="text-sm hover:underline">Saved</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Create Beautiful Quote Cards</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Design stunning quote cards in Bangla with beautiful fonts and backgrounds. Export as high-quality images.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/create">
              <Button size="lg">Start Creating</Button>
            </Link>
            <Link href="/explore">
              <Button variant="outline" size="lg">Explore</Button>
            </Link>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-8 text-center">Sample Designs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleQuotes.map((sq, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <QuoteCard quote={{ text: sq.text, author: sq.author }} design={sq.design} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}