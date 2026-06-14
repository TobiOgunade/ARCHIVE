export default function WideLegDenimPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="mx-auto max-w-6xl">
        <a href="/dashboard" className="text-zinc-500">
          ← Dashboard
        </a>

        <p className="mt-8 text-zinc-500">SIGNAL</p>

        <h1 className="mt-2 text-6xl font-bold">
          Wide-Leg Denim
        </h1>

        <div className="mt-8 rounded-3xl border border-zinc-800 p-6">
          <h2 className="mb-4 text-xl">
            Signal Performance
          </h2>

          <div className="flex h-72 items-end gap-4">
            {[12, 19, 31, 47, 62, 84].map((value) => (
              <div
                key={value}
                className="flex-1 rounded-t-xl bg-white"
                style={{ height: `${value}%` }}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-zinc-800 p-6">
          <h2 className="mb-4 text-xl">
            Market Outlook
          </h2>

          <p className="leading-8 text-zinc-400">
            Wide-leg denim continues gaining share among
            younger consumers, particularly within premium
            and contemporary categories.
          </p>
        </div>

        <div className="mt-6 rounded-3xl border border-zinc-800 p-6">
          <h2 className="mb-4 text-xl">
            Related Brands
          </h2>

          <ul className="space-y-3 text-zinc-400">
            <li>Levi's</li>
            <li>Diesel</li>
            <li>Our Legacy</li>
            <li>Acne Studios</li>
          </ul>
        </div>
      </div>
    </main>
  );
}