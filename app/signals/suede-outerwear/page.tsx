export default function SignalPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-zinc-500 mb-2">SIGNAL</p>

        <h1 className="text-6xl font-bold mb-8">
          Suede Outerwear
        </h1>

        <div className="border border-zinc-800 rounded-3xl p-6 mb-6">
          <h2 className="text-xl mb-4">Signal Performance</h2>

          <div className="h-72 flex items-end gap-4">
            {[22, 28, 34, 45, 61, 79].map((value) => (
              <div
                key={value}
                className="flex-1 bg-white rounded-t-xl"
                style={{ height: `${value}%` }}
              />
            ))}
          </div>
        </div>

        <div className="border border-zinc-800 rounded-3xl p-6 mb-6">
          <h2 className="text-xl mb-4">Market Outlook</h2>

          <p className="text-zinc-400 leading-8">
            Suede outerwear continues to gain share across luxury and premium
            contemporary markets. Growth remains strongest among menswear brands
            with elevated positioning.
          </p>
        </div>

        <div className="border border-zinc-800 rounded-3xl p-6">
          <h2 className="text-xl mb-4">Related Brands</h2>

          <ul className="space-y-3 text-zinc-400">
            <li>LOEWE</li>
            <li>The Row</li>
            <li>Miu Miu</li>
            <li>Saint Laurent</li>
          </ul>
        </div>
      </div>
    </main>
  );
}