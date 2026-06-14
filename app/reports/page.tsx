const reports = [
  {
    title: "The Rise of Premium Suede",
    summary:
      "Suede continues gaining momentum across luxury and premium menswear categories.",
  },
  {
    title: "Technical Outerwear Outlook",
    summary:
      "Performance-driven outerwear remains one of the strongest growth segments.",
  },
  {
    title: "Luxury Footwear Market Update",
    summary:
      "Premium footwear brands continue to outperform broader apparel categories.",
  },
];

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-8 py-10">
        <a href="/dashboard" className="text-zinc-500">
          ← Dashboard
        </a>

        <h1 className="mt-8 text-6xl font-bold">
          Reports
        </h1>

        <p className="mt-3 text-zinc-500">
          Market intelligence and category research.
        </p>

        <div className="mt-10 space-y-4">
          {reports.map((report) => (
            <div
              key={report.title}
              className="rounded-3xl border border-zinc-800 p-6"
            >
              <h2 className="text-2xl font-semibold">
                {report.title}
              </h2>

              <p className="mt-3 text-zinc-400">
                {report.summary}
              </p>

              <p className="mt-4 text-sm text-zinc-500">
                Updated today
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}