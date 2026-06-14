import type { ReactNode } from "react";

const signals = [
  { name: "Suede Outerwear", confidence: "91%", category: "Luxury", link: "/signals/suede-outerwear" },
  { name: "Technical Shell Jackets", confidence: "87%", category: "Outerwear", link: "/signals/technical-shell-jackets" },
  { name: "Wide-Leg Denim", confidence: "84%", category: "Menswear", link: "/signals/wide-leg-denim" },
];

const brands = ["LOEWE", "Miu Miu", "The Row", "Stüssy", "Arc'teryx"];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-8">
        <header className="mb-10 flex items-center justify-between">
          <a href="/dashboard" className="text-6xl font-bold tracking-tight">
            ARCHIVE
          </a>

          <nav className="flex gap-8 text-zinc-500">
            <a href="#signals" className="hover:text-white">Signals</a>
            <a href="/brands" className="hover:text-white">Brands</a>
            <a href="/reports" className="hover:text-white">Reports</a>
            <a href="/search" className="hover:text-white">Search</a>
          </nav>
        </header>

        <section className="mb-8 rounded-3xl border border-zinc-800 p-8">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Top Signal This Week
          </p>
          <h1 className="text-5xl font-bold">Suede Outerwear</h1>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Strong movement across luxury and premium menswear, with LOEWE,
            The Row, and Saint Laurent showing category exposure.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-400">
            <span className="rounded-full border border-zinc-800 px-4 py-2">91% Confidence</span>
            <span className="rounded-full border border-zinc-800 px-4 py-2">Luxury</span>
            <span className="rounded-full border border-zinc-800 px-4 py-2">4 Related Brands</span>
          </div>
        </section>

        <input
          placeholder="Search signals, brands, reports..."
          className="mb-8 w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-white outline-none"
        />

        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <Metric value="1,284" label="Active Signals" />
          <Metric value="346" label="Tracked Brands" />
          <Metric value="17" label="New Movements" />
          <Metric value="82%" label="Signal Confidence" />
        </div>

        <div id="signals" className="grid gap-6 lg:grid-cols-2">
          <Card title="Market Signals">
            {signals.map((signal) => (
              <a
                key={signal.name}
                href={signal.link}
                className="block rounded-xl border-b border-zinc-900 px-3 py-4 transition hover:bg-zinc-900/50"
              >
                <p className="text-lg font-medium">{signal.name}</p>
                <p className="mt-1 text-sm text-zinc-500">
                  {signal.category} • Confidence {signal.confidence}
                </p>
              </a>
            ))}
          </Card>

          <Card title="Brand Performance">
            {brands.map((brand, index) => (
              <a
                key={brand}
                href="/brands"
                className="flex justify-between rounded-xl border-b border-zinc-900 px-3 py-4 transition hover:bg-zinc-900/50"
              >
                <span>{brand}</span>
                <span className="text-zinc-500">Rank #{index + 1}</span>
              </a>
            ))}
          </Card>

          <Card title="Latest Reports">
            <Report title="The Rise of Premium Suede" />
            <Report title="Technical Outerwear Outlook" />
            <Report title="Luxury Footwear Market Update" />
          </Card>

          <Card title="Market Outlook">
            <p className="leading-8 text-zinc-400">
              Premium suede continues to gain traction across luxury and
              contemporary categories. Technical outerwear remains one of the
              strongest growth segments while wide-leg denim maintains momentum
              among younger consumers.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 p-6">
      <p className="text-4xl font-bold">{value}</p>
      <p className="mt-2 text-zinc-500">{label}</p>
    </div>
  );
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-3xl border border-zinc-800 p-6">
      <h2 className="mb-6 text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function Report({ title }: { title: string }) {
  return (
    <a href="/reports" className="mb-4 block rounded-2xl border border-zinc-900 p-4 transition hover:bg-zinc-900/50">
      <p className="font-medium">{title}</p>
      <p className="mt-1 text-sm text-zinc-500">Market brief • Updated today</p>
    </a>
  );
}