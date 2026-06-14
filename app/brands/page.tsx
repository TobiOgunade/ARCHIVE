const brands = [
  { name: "LOEWE", category: "Luxury", signal: "Suede Outerwear" },
  { name: "Miu Miu", category: "Luxury", signal: "Footwear / Accessories" },
  { name: "The Row", category: "Luxury", signal: "Minimal Tailoring" },
  { name: "Stüssy", category: "Streetwear", signal: "Graphic Staples" },
  { name: "Arc'teryx", category: "Outerwear", signal: "Technical Shells" },
];

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-8 py-10">
        <a href="/dashboard" className="text-zinc-500">← Dashboard</a>

        <h1 className="mt-8 text-6xl font-bold">Brand Performance</h1>
        <p className="mt-3 text-zinc-500">
          Tracking movement across luxury, streetwear, retail, and footwear.
        </p>

        <div className="mt-10 grid gap-4">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="flex items-center justify-between rounded-3xl border border-zinc-800 p-6"
            >
              <div>
                <p className="text-2xl font-semibold">{brand.name}</p>
                <p className="mt-1 text-zinc-500">{brand.category}</p>
              </div>

              <div className="text-right">
                <p className="text-zinc-300">{brand.signal}</p>
                <p className="mt-1 text-sm text-zinc-500">Rank #{index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}