export default function SearchPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-8 py-10">
        <a href="/dashboard" className="text-zinc-500">
          ← Dashboard
        </a>

        <h1 className="mt-8 text-6xl font-bold">
          Search
        </h1>

        <p className="mt-3 text-zinc-500">
          Explore signals, brands, and reports.
        </p>

        <input
          placeholder="Search..."
          className="mt-8 w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
        />

        <div className="mt-8 space-y-4">
          <div className="rounded-2xl border border-zinc-800 p-5">
            <p className="font-semibold">Suede Outerwear</p>
            <p className="mt-2 text-zinc-500">
              Luxury category signal with strong momentum.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-5">
            <p className="font-semibold">LOEWE</p>
            <p className="mt-2 text-zinc-500">
              Luxury brand linked to suede growth.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-5">
            <p className="font-semibold">
              Technical Outerwear Outlook
            </p>
            <p className="mt-2 text-zinc-500">
              Latest report on performance apparel.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}