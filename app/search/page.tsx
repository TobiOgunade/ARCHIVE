"use client";

import { useState } from "react";
import { signals, brands, reports } from "../data/archiveData";

const items = [
  ...signals.map((signal) => ({
    title: signal.name,
    type: "Signal",
    description: signal.description,
    link: signal.link,
  })),

  ...brands.map((brand) => ({
    title: brand.name,
    type: "Brand",
    description: `${brand.category} brand linked to ${brand.signal}.`,
    link: "/brands",
  })),

  ...reports.map((report) => ({
    title: report.title,
    type: "Report",
    description: report.description,
    link: report.link,
  })),
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = items.filter((item) => {
    const text = `${item.title} ${item.type} ${item.description}`.toLowerCase();
    return text.includes(query.toLowerCase());
  });

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-8 py-10">
        <a href="/dashboard" className="text-zinc-500 hover:text-white">
          ← Dashboard
        </a>

        <h1 className="mt-8 text-6xl font-bold">Search</h1>

        <p className="mt-3 text-zinc-500">
          Explore signals, brands, and reports.
        </p>

        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search suede, LOEWE, denim, outerwear..."
          className="mt-8 w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-white outline-none"
        />

        <div className="mt-8 space-y-4">
          {results.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="block rounded-2xl border border-zinc-800 p-5 transition hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold">{item.title}</p>
                <span className="text-sm text-zinc-500">{item.type}</span>
              </div>

              <p className="mt-2 text-zinc-500">{item.description}</p>
            </a>
          ))}

          {results.length === 0 && (
            <div className="rounded-2xl border border-zinc-800 p-5 text-zinc-500">
              No matching signals found.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}