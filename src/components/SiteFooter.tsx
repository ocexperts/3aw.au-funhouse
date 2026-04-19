import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t-4 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="bg-alarm text-paper px-2 py-0.5 font-display text-3xl leading-none">
              3AW
            </span>
            <span className="font-mono text-xs uppercase tracking-widest opacity-70">
              .net.au
            </span>
          </div>
          <p className="mt-4 font-editorial italic text-lg max-w-md opacity-90">
            "Broadcasting strong opinions weakly held since allegedly 1932."
          </p>
          <p className="mt-4 text-xs font-mono uppercase tracking-widest opacity-60 max-w-md">
            This is a satirical parody and is not affiliated with, endorsed by, or
            connected to 3AW Melbourne, Nine Radio, or any actual broadcaster.
            Any resemblance to real talkback hosts, living, deceased, or merely
            simmering, is intentional and protected speech.
          </p>
        </div>
        <div>
          <h4 className="font-display text-xl mb-3">Channels</h4>
          <ul className="space-y-1 font-mono text-sm uppercase">
            <li><Link to="/shows" className="hover:text-alarm">Shows</Link></li>
            <li><Link to="/hosts" className="hover:text-alarm">Hosts</Link></li>
            <li><Link to="/news" className="hover:text-alarm">News</Link></li>
            <li><Link to="/contact" className="hover:text-alarm">Talkback</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl mb-3">Frequencies</h4>
          <ul className="space-y-1 font-mono text-sm uppercase opacity-90">
            <li>693 kHz · Allegedly</li>
            <li>1278 DAB+ · Pretend</li>
            <li>Tin Can &amp; String</li>
            <li>Carrier Pigeon (delayed)</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/20">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row justify-between gap-2 text-[11px] font-mono uppercase tracking-widest opacity-60">
          <span>© {new Date().getFullYear()} 3AW.net.au · A Parody</span>
          <span>Complaints department: write a letter, then burn it</span>
        </div>
      </div>
    </footer>
  );
}
