import { createFileRoute, Link } from "@tanstack/react-router";
import { NewsTicker } from "@/components/NewsTicker";
import heroMic from "@/assets/hero-mic.jpg";
import barry from "@/assets/host-barry.jpg";
import margaret from "@/assets/host-margaret.jpg";
import trev from "@/assets/host-trev.jpg";
import dazza from "@/assets/host-dazza.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "3AW.net.au — Melbourne's Loudest Talk (Parody)" },
      {
        name: "description",
        content:
          "Melbourne's premier source of unverified outrage, kerbside complaints and talkback grievance — a parody of 3AW.",
      },
      { property: "og:title", content: "3AW.net.au — Melbourne's Loudest Talk (Parody)" },
      {
        property: "og:description",
        content: "Strong opinions, weakly held. Broadcast at maximum volume.",
      },
    ],
  }),
  component: HomePage,
});

const featured = [
  {
    kicker: "Outrage",
    headline: "Council installs new bin: 'Where will it end?'",
    excerpt:
      "Talkback lines run hot as a 240-litre receptacle appears on Glenferrie Road overnight, allegedly without community consultation.",
  },
  {
    kicker: "Sport",
    headline: "Bloke who hasn't kicked a footy since 1987 explains the modern game",
    excerpt:
      "'They're soft,' said the man, three Crown Lagers deep, on a couch he hasn't moved from since the 1990 Grand Final.",
  },
  {
    kicker: "Lifestyle",
    headline: "Roundabout in Brighton 'works fine if everyone just thinks like me'",
    excerpt:
      "Caller Geoffrey, 71, has prepared a 14-step plan involving witches' hats, Latin, and a public flogging.",
  },
];

const hostsPreview = [
  { name: "Barry Henderson", show: "The Volume", img: barry },
  { name: "Margaret Pritchett", show: "The Verdict", img: margaret },
  { name: "Trev 'The Bloke' Carmichael", show: "Sportsline Uncut", img: trev },
  { name: "Dazza McGinty", show: "Wake Up Angry", img: dazza },
];

function HomePage() {
  return (
    <div>
      <NewsTicker />

      {/* HERO */}
      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-16 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-alarm">
              Vol. 93 · No. 2,142 · A Parody Edition
            </p>
            <h1 className="headline-mega text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] mt-2 text-ink">
              Someone,<br />
              <span className="text-alarm">Somewhere,</span><br />
              Is Doing<br />
              It Wrong.
            </h1>
            <p className="mt-6 font-editorial italic text-xl md:text-2xl max-w-2xl">
              And we'll be talking about it for the next six hours, with calls, texts,
              and a man named Kevin from Frankston who has 'just one quick point.'
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/shows"
                className="bg-ink text-paper font-display uppercase tracking-wider px-6 py-3 ink-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-transform"
              >
                Today's Lineup →
              </Link>
              <Link
                to="/contact"
                className="border-2 border-ink bg-paper font-display uppercase tracking-wider px-6 py-3 alarm-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-transform"
              >
                Phone in to complain
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="border-4 border-ink ink-shadow overflow-hidden bg-ink">
              <img
                src={heroMic}
                alt="A vintage chrome microphone backlit against a dramatic sunset Melbourne skyline"
                width={1600}
                height={1024}
                className="w-full h-full object-cover aspect-[4/5] opacity-95"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-mustard border-2 border-ink px-4 py-2 font-display uppercase tracking-wider rotate-[-3deg]">
              ★ As heard nowhere ★
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED STORIES */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-end justify-between rule-thick pb-3 mb-8">
          <h2 className="font-display text-4xl md:text-5xl uppercase">Front Page Outrage</h2>
          <Link to="/news" className="font-mono text-xs uppercase tracking-widest hover:text-alarm">
            All grievances →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((f, i) => (
            <article key={i} className="group">
              <div className="aspect-[4/3] halftone border-2 border-ink mb-4 flex items-center justify-center">
                <span className="font-display text-7xl text-ink/80 -rotate-6 bg-paper px-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-alarm">
                {f.kicker}
              </p>
              <h3 className="font-display text-2xl md:text-3xl uppercase mt-1 leading-[0.95] group-hover:text-alarm transition-colors">
                {f.headline}
              </h3>
              <p className="mt-3 font-editorial italic text-base text-ink/80">{f.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* HOSTS STRIP */}
      <section className="bg-ink text-paper py-16 border-y-4 border-ink">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between border-b-2 border-paper/30 pb-3 mb-8">
            <h2 className="font-display text-4xl md:text-5xl uppercase">The On-Air Talent*</h2>
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">
              *Term used loosely
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {hostsPreview.map((h) => (
              <Link
                key={h.name}
                to="/hosts"
                className="group block border-2 border-paper bg-paper text-ink hover:bg-alarm hover:text-paper transition-colors"
              >
                <div className="aspect-square overflow-hidden bg-ink">
                  <img
                    src={h.img}
                    alt={`Portrait of fictional radio host ${h.name}`}
                    width={768}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest opacity-70">
                    {h.show}
                  </p>
                  <p className="font-display text-xl uppercase leading-tight mt-1">{h.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="border-4 border-ink p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center bg-mustard">
          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-widest">The Hotline</p>
            <h2 className="headline-mega text-4xl md:text-6xl mt-2">
              Got a take? <span className="text-alarm">Bad one preferred.</span>
            </h2>
            <p className="mt-4 font-editorial italic text-lg max-w-xl">
              Our switchboard is staffed 24/7 by an answering machine and a man named
              Phil who hasn't been screened since 1998.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="font-display text-2xl uppercase">Call</p>
            <p className="headline-mega text-5xl md:text-6xl text-alarm">131-RANT</p>
            <p className="font-mono text-[10px] uppercase tracking-widest mt-1">
              Standard outrage charges apply
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
