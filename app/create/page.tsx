import { QuoteCard } from "@/components/quote-card";
import { DesignControls } from "@/components/design-controls";
import { CardExporter } from "@/components/card-exporter";

export default function CreatePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b p-4">
        <h1 className="text-xl font-bold">Abyakto — Create Quote Card</h1>
      </header>

      <main className="max-w-7xl mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1">
            <DesignControls />
            <div className="mt-6">
              <CardExporter />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="sticky top-4">
              <div className="bg-muted rounded-lg p-8">
                <QuoteCard className="shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}