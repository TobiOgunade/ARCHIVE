export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <h1 className="text-2xl font-bold tracking-tight">
        ARCHIVE
      </h1>

      <div className="flex gap-8 text-zinc-400">
        <a href="/dashboard">Signals</a>
        <a href="/brands">Brands</a>
        <a href="/categories">Categories</a>
        <a href="/search">Search</a>
      </div>
    </nav>
  );
}