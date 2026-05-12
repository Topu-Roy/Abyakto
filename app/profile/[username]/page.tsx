import Link from "next/link";
import { QuoteCard } from "@/components/quote-card";

export default function ProfilePage({}: PageProps<"/profile/[username]">) {
  const username = "test-user";

  const userQuotes: Array<{
    text: string;
    author: string;
    design: Record<string, unknown>;
  }> = [];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <h1 className="text-2xl font-bold">@{username}</h1>
          <nav className="flex gap-4">
            <Link href="/create" className="text-sm hover:underline">
              Create
            </Link>
            <Link href="/explore" className="text-sm hover:underline">
              Explore
            </Link>
            <Link href="/saved" className="text-sm hover:underline">
              Saved
            </Link>
            <Link href="/" className="text-sm hover:underline">
              Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold">Public Quotes</h2>
        </div>

        {userQuotes.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">No public quotes yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {userQuotes.map((quote, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg shadow-lg">
                <QuoteCard quote={{ text: quote.text, author: quote.author }} design={quote.design as never} />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
