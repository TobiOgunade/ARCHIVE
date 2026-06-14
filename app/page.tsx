export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8">
        <nav className="absolute left-8 right-8 top-8 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-tight">
            ARCHIVE
          </a>

          <div className="flex gap-8 text-sm text-zinc-500">
            <a href="/dashboard" className="hover:text-white">
              Dashboard
            </a>
            <a href="/brands" className="hover:text-white">
              Brands
            </a>
            <a href="/reports" className="hover:text-white">
              Reports
            </a>
            <a href="/search" className="hover:text-white">
              Search
            </a>
          </div>
        </nav>

        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-zinc-500">
          Fashion Market Intelligence
        </p>

        <h1 className="max-w-5xl text-7xl font-bold tracking-tight md:text-8xl">
          See fashion before it moves.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-zinc-400">
          ARCHIVE tracks market signals, brand performance, category movement,
          and consumer demand across luxury, streetwear, retail, and footwear.
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
            className="rounded-full border border-zinc-800 px-6 py-3 text-zinc-300 transition hover:border-zinc-600"
          >
            View Reports
          </a>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3">
          <Feature
            title="Market Signals"
            body="Track emerging products, silhouettes, materials, and aesthetics before they reach saturation."
          />

          <Feature
            title="Brand Performance"
            body="Monitor movement across luxury houses, streetwear labels, retailers, and footwear brands."
          />

          <Feature
            title="Research Reports"
            body="Read concise category briefs on what is gaining momentum and why it matters."
          />
        </div>
      </section>
    </main>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-zinc-800 p-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-4 leading-7 text-zinc-500">{body}</p>
    </div>
  );
}