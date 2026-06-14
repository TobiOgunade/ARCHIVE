const signals = [
  ["Suede Outerwear", "91%", "Luxury"],
  ["Technical Shell Jackets", "87%", "Outerwear"],
  ["Wide-Leg Denim", "84%", "Menswear"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-8 py-8">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-tight">
            ARCHIVE
          </a>

          <div className="flex gap-8 text-sm text-zinc-500">
            <a href="/dashboard" className="hover:text-white">Dashboard</a>
            <a href="/brands" className="hover:text-white">Brands</a>
            <a href="/reports" className="hover:text-white">Reports</a>
            <a href="/search" className="hover:text-white">Search</a>
          </div>
        </nav>

        <div className="grid min-h-[80vh] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-zinc-500">
              Fashion Market Intelligence
            </p>

            <h1 className="max-w-4xl text-7xl font-bold tracking-tight md:text-8xl">
              See fashion before it moves.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-zinc-400">
              ARCHIVE tracks category movement, brand performance, product demand,
              and market signals across luxury, streetwear, retail, and footwear.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="/dashboard"
                className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
              >
                Open Dashboard
              </a>

              <a
                href="/reports"
                className="rounded-full border border-zinc-800 px-6 py-3 text-zinc-300 transition hover:border-zinc-600 hover:text-white"
              >
                View Reports
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950/50 p-6">
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
              Live Market Signals
            </p>

            <div className="space-y-4">
              {signals.map(([name, confidence, category], index) => (
                <a
                  key={name}
                  href="/dashboard"
                  className="block rounded-2xl border border-zinc-900 p-5 transition hover:border-zinc-700 hover:bg-zinc-900/60"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">
                      #{index + 1} {name}
                    </p>
                    <span className="text-zinc-400">{confidence}</span>
                  </div>

                  <p className="mt-2 text-sm text-zinc-500">{category}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 border-t border-zinc-900 pt-10 md:grid-cols-4">
          <Feature title="Signals" body="Track emerging products and materials." />
          <Feature title="Brands" body="Monitor category exposure and movement." />
          <Feature title="Reports" body="Read concise fashion market briefs." />
          <Feature title="Search" body="Explore signals, brands, and reports." />
        </div>
      </section>
    </main>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-zinc-800 p-6 transition hover:border-zinc-700">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-4 leading-7 text-zinc-500">{body}</p>
    </div>
  );
}