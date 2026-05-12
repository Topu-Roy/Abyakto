import Link from "next/link";
import { QuoteCard } from "@/components/quote-card";

export default function ExplorePage() {
  const publicQuotes: Array<{
    text: string;
    author: string;
    design: Record<string, unknown>;
    username: string;
  }> = [];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Explore</h1>
          <nav className="flex gap-4">
            <Link href="/create" className="text-sm hover:underline">Create</Link>
            <Link href="/" className="text-sm hover:underline">Home</Link>
            <Link href="/saved" className="text-sm hover:underline">Saved</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {publicQuotes.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-2">No public quotes yet</h2>
            <p className="text-muted-foreground">Be the first to share your quote cards!</p>
            <Link href="/create" className="text-primary hover:underline mt-4 inline-block">
              Create your first quote →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {publicQuotes.map((quote, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <QuoteCard quote={{ text: quote.text, author: quote.author }} design={quote.design as never} />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}