import { createFileRoute } from "@tanstack/react-router";
import barry from "@/assets/host-barry.jpg";
import margaret from "@/assets/host-margaret.jpg";
import trev from "@/assets/host-trev.jpg";
import dazza from "@/assets/host-dazza.jpg";

export const Route = createFileRoute("/hosts")({
  head: () => ({
    meta: [
      { title: "Hosts — 3AW.net.au (Parody)" },
      {
        name: "description",
        content:
          "Meet the fictional voices of 3AW.net.au — the bloke, the matriarch, the shouter, and the one with the Hawaiian shirt.",
      },
      { property: "og:title", content: "Hosts — 3AW.net.au (Parody)" },
      {
        property: "og:description",
        content: "The fictional voices behind Melbourne's loudest parody talkback.",
      },
    ],
  }),
  component: HostsPage,
});

const hosts = [
  {
    name: "Barry 'The Volume' Henderson",
    show: "The Volume · Mornings",
    img: barry,
    bio: "A 38-year veteran of pretending to listen, Barry once held a single uninterrupted opinion for eleven minutes. He believes in 'common sense,' which he defines as whatever he said most recently.",
    quote: "If I wanted nuance, I'd have become a librarian.",
    catalogue: ["Honks at: cyclists", "Hates: roundabouts", "Loves: 1962"],
  },
  {
    name: "Margaret Pritchett",
    show: "The Verdict · Afternoons",
    img: margaret,
    bio: "Margaret hosts with the warmth of a magistrate and the patience of a kettle on the boil. She has personally adjudicated 14,000 neighbourhood disputes, none of which she was involved in.",
    quote: "I'm not angry, I'm disappointed. Mostly in your fence.",
    catalogue: ["Has: opinions on hedges", "Tolerates: very little", "Owns: 4 cardigans"],
  },
  {
    name: "Trev 'The Bloke' Carmichael",
    show: "Sportsline Uncut · Drive",
    img: trev,
    bio: "Former reserves player for a club he refuses to confirm, Trev brings the same intensity to a Round 7 fixture as he does to choosing a parmigiana. Has worn the same suit since 2004.",
    quote: "Footy is just life with a sherrin in it, mate.",
    catalogue: ["Played: maybe", "Tipped: incorrectly", "Pies: rated"],
  },
  {
    name: "Dazza McGinty",
    show: "Wake Up Angry · Breakfast",
    img: dazza,
    bio: "Dazza wakes up every morning at 3:42am, ingests roughly 11 espressos, and screams at his microphone for 3.5 hours. His on-air laugh has been classified as a category two weather event.",
    quote: "MORNING MELBOURNE LET'S GET STUCK INTO IT WAHOO",
    catalogue: ["Sleeps: never", "Drinks: rage", "Wears: tropics"],
  },
];

function HostsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-alarm">
        The Talent Roster
      </p>
      <h1 className="headline-mega text-6xl md:text-8xl mt-2">
        The Voices<br />
        <span className="text-alarm">In Your Head*</span>
      </h1>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-ink/60">
        * If you've left the radio on
      </p>

      <div className="mt-12 grid gap-10 md:gap-14">
        {hosts.map((h, i) => (
          <article
            key={h.name}
            className={`grid md:grid-cols-12 gap-6 md:gap-10 items-start border-t-4 border-ink pt-10 ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="md:col-span-5">
              <div className="border-4 border-ink ink-shadow bg-ink overflow-hidden">
                <img
                  src={h.img}
                  alt={`Studio portrait of fictional 3AW.net.au host ${h.name}`}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover aspect-square grayscale contrast-125"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="font-mono text-xs uppercase tracking-widest text-alarm">
                {h.show}
              </p>
              <h2 className="font-display text-4xl md:text-5xl uppercase mt-2 leading-[0.9]">
                {h.name}
              </h2>
              <p className="mt-5 font-editorial italic text-xl text-ink/85">{h.bio}</p>
              <blockquote className="mt-6 border-l-4 border-alarm pl-4 font-display uppercase text-2xl md:text-3xl leading-tight">
                "{h.quote}"
              </blockquote>
              <ul className="mt-6 grid sm:grid-cols-3 gap-2 font-mono text-xs uppercase tracking-widest">
                {h.catalogue.map((c) => (
                  <li key={c} className="border-2 border-ink px-3 py-2 bg-newsprint">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
