import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shows", label: "Shows" },
  { to: "/hosts", label: "Hosts" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-paper border-b-4 border-ink">
      {/* Top strip */}
      <div className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 py-1.5 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-alarm animate-blink" />
            On Air Now — Barry "The Volume" Henderson
          </span>
          <span className="hidden sm:inline">Mel 27° · Wind: Strong opinions · Smoke haze</span>
        </div>
      </div>

      {/* Logo + nav */}
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="bg-alarm text-paper px-2 py-0.5 font-display text-3xl md:text-4xl leading-none">
            3AW
          </span>
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-ink/70">
            .net.au · Melbourne's Loudest Talk
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 font-display uppercase text-lg">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-1 hover:bg-ink hover:text-paper transition-colors"
              activeProps={{ className: "px-3 py-1 bg-ink text-paper" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2 border-2 border-ink px-3 py-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-alarm animate-on-air" />
          <span className="font-mono text-xs uppercase tracking-widest">Listen Live*</span>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden border-t border-ink">
        <nav className="mx-auto max-w-7xl px-4 py-2 flex flex-wrap gap-1 font-display uppercase">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-2 py-1 hover:bg-ink hover:text-paper"
              activeProps={{ className: "px-2 py-1 bg-ink text-paper" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
