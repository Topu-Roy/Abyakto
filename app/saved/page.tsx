import Link from "next/link";
import { QuoteCard } from "@/components/quote-card";

export default function SavedPage() {
  const savedCards: Array<{
    text: string;
    author: string;
    design: Record<string, unknown>;
  }> = [];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Saved Cards</h1>
          <nav className="flex gap-4">
            <Link href="/create" className="text-sm hover:underline">Create</Link>
            <Link href="/explore" className="text-sm hover:underline">Explore</Link>
            <Link href="/" className="text-sm hover:underline">Home</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {savedCards.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-2">No saved cards yet</h2>
            <p className="text-muted-foreground">Create and save your favorite quote cards!</p>
            <Link href="/create" className="text-primary hover:underline mt-4 inline-block">
              Start creating →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedCards.map((card, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <QuoteCard quote={{ text: card.text, author: card.author }} design={card.design as never} />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}