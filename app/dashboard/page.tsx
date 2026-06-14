import type { ReactNode } from "react";

const signals = [
  {
    rank: "#1",
    name: "Suede Outerwear",
    confidence: "91%",
    category: "Luxury",
    link: "/signals/suede-outerwear",
  },
  {
    rank: "#2",
    name: "Technical Shell Jackets",
    confidence: "87%",
    category: "Outerwear",
    link: "/signals/technical-shell-jackets",
  },
  {
    rank: "#3",
    name: "Wide-Leg Denim",
    confidence: "84%",
    category: "Menswear",
    link: "/signals/wide-leg-denim",
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-8">
        <header className="mb-12 flex items-center justify-between">
          <a href="/" className="text-4xl font-bold">
            ARCHIVE
          </a>

          <nav className="flex gap-8 text-zinc-500">
            <a href="#signals" className="hover:text-white">
              Signals
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
          </nav>
        </header>

        <section className="mb-10 rounded-[2rem] border border-zinc-800 p-8">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Top Signal
          </p>

          <h1 className="text-5xl font-bold">
            Suede Outerwear
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-400 leading-8">
            Momentum continues to build across luxury and
            premium menswear categories with increasing
            exposure among high-end brands.
          </p>

          <div className="mt-6 flex gap-4">
            <div className="rounded-full border border-zinc-800 px-4 py-2 text-sm">
              91% Confidence
            </div>

            <div className="rounded-full border border-zinc-800 px-4 py-2 text-sm">
              Luxury
            </div>

            <div className="rounded-full border border-zinc-800 px-4 py-2 text-sm">
              4 Related Brands
            </div>
          </div>
        </section>

        <div className="mb-10 grid gap-4 md:grid-cols-4">
          <Metric value="1,284" label="Active Signals" />
          <Metric value="346" label="Tracked Brands" />
          <Metric value="17" label="New Movements" />
          <Metric value="82%" label="Signal Confidence" />
        </div>

        <div id="signals" className="grid gap-6 lg:grid-cols-2">
          <Card title="Signal Rankings">
            {signals.map((signal) => (
              <a
                key={signal.name}
                href={signal.link}
                className="mb-3 block rounded-2xl border border-zinc-900 p-5 transition hover:border-zinc-700 hover:bg-zinc-900/50"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold">
                    {signal.rank} {signal.name}
                  </p>

                  <span className="text-zinc-400">
                    {signal.confidence}
                  </span>
                </div>

                <p className="mt-2 text-sm text-zinc-500">
                  {signal.category}
                </p>
              </a>
            ))}
          </Card>

          <Card title="Market Snapshot">
            <div className="space-y-6">
              <Snapshot
                label="Luxury"
                value="+18%"
              />

              <Snapshot
                label="Streetwear"
                value="+11%"
              />

              <Snapshot
                label="Footwear"
                value="+8%"
              />

              <Snapshot
                label="Outerwear"
                value="+23%"
              />
            </div>
          </Card>

          <Card title="Latest Reports">
            <Report title="The Rise of Premium Suede" />
            <Report title="Technical Outerwear Outlook" />
            <Report title="Luxury Footwear Market Update" />
          </Card>

          <Card title="Market Outlook">
            <p className="leading-8 text-zinc-400">
              Premium suede remains the strongest signal
              within luxury menswear while technical
              outerwear continues gaining share among
              performance-focused consumers.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-3xl border border-zinc-800 p-6">
      <p className="text-4xl font-bold">
        {value}
      </p>

      <p className="mt-2 text-zinc-500">
        {label}
      </p>
    </div>
  );
}

function Snapshot({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b border-zinc-900 pb-4">
      <span>{label}</span>
      <span className="text-green-400">
        {value}
      </span>
    </div>
  );
}

function Report({
  title,
}: {
  title: string;
}) {
  return (
    <a
      href="/reports"
      className="block rounded-2xl border border-zinc-900 p-4 transition hover:border-zinc-700"
    >
      <p>{title}</p>
    </a>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[2rem] border border-zinc-800 p-6">
      <h2 className="mb-6 text-xl font-semibold">
        {title}
      </h2>

      {children}
    </div>
  );
}