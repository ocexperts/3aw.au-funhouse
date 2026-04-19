import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — 3AW.net.au (Parody)" },
      {
        name: "description",
        content:
          "Allegedly breaking news from 3AW.net.au — Melbourne's foremost source of slightly inflated municipal grievances.",
      },
      { property: "og:title", content: "News — 3AW.net.au (Parody)" },
      {
        property: "og:description",
        content: "Allegedly breaking, mildly verified, deeply opinionated.",
      },
    ],
  }),
  component: NewsPage,
});

const lead = {
  kicker: "Allegedly Breaking",
  headline: "Roundabout In Glen Waverley Reportedly 'Confusing People Who Have Never Encountered One'",
  byline: "By our Senior Driveway Correspondent · 4 min read · 23 furious comments",
  body: [
    "A traffic-calming device installed in suburban Melbourne overnight has triggered what local talkback hosts are calling 'the greatest existential crisis since the introduction of the eftpos machine.'",
    "Eyewitnesses describe scenes of motorists slowly circling the structure, some performing what experts have termed 'three-and-a-half loops,' before exiting in the direction they came from with renewed political views.",
    "'I just don't understand who it's for,' said local resident Geoffrey, 71, who has lived in the area since 1968 and considers himself qualified to comment on infrastructure, modern fashion, and the youth.",
  ],
};

const stories = [
  {
    kicker: "Outrage",
    headline: "Bin Day Moved By One Day, Region Plunged Into Constitutional Crisis",
    excerpt:
      "Council blamed. State government blamed. The bin itself, somehow, also blamed.",
  },
  {
    kicker: "Sport",
    headline: "Coach 'Should Be Sacked' Says Man Who Has Never Coached Anything",
    excerpt:
      "Caller Dave from Reservoir presents 47-point dossier compiled entirely from the ad break of the third quarter.",
  },
  {
    kicker: "Politics",
    headline: "MP Caught Walking Through Park, Public Demands Inquiry",
    excerpt:
      "'What were they doing in a park?' asked talkback host Margaret, who has not personally been in a park since 1991.",
  },
  {
    kicker: "Lifestyle",
    headline: "'New Café Has Opened' Confirms Frontline Reporter From The Footpath",
    excerpt:
      "The café, which serves coffee and food, may also have chairs. Investigations ongoing.",
  },
  {
    kicker: "Weather",
    headline: "Forecast Updated To 'A Bit Of That, Then Some Of This'",
    excerpt:
      "Bureau spokesperson rolled into a ball, refused further comment.",
  },
  {
    kicker: "Traffic",
    headline: "Monash Freeway Achieves Sentience, Demands Recognition As Person",
    excerpt:
      "Said it just wants to be 'left alone, basically forever.'",
  },
];

function NewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-alarm">
        The Newsdesk · Updated continuously by one bloke
      </p>
      <h1 className="headline-mega text-6xl md:text-8xl mt-2">
        Today's <span className="text-alarm">Disgrace</span>
      </h1>

      {/* Lead story */}
      <article className="mt-12 grid lg:grid-cols-12 gap-8 border-y-4 border-ink py-10">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] halftone border-4 border-ink ink-shadow bg-paper flex items-end p-6">
            <span className="bg-alarm text-paper font-display uppercase text-2xl px-3 py-1">
              {lead.kicker}
            </span>
          </div>
        </div>
        <div className="lg:col-span-7">
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.92]">
            {lead.headline}
          </h2>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ink/60">
            {lead.byline}
          </p>
          <div className="mt-6 space-y-4 font-editorial text-lg leading-relaxed">
            {lead.body.map((p, i) => (
              <p key={i} className={i === 0 ? "first-letter:font-display first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85]" : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* Story grid */}
      <h3 className="mt-16 font-display text-3xl md:text-4xl uppercase rule-thick pb-3">
        Also Furious About
      </h3>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 divide-ink">
        {stories.map((s, i) => (
          <article key={i} className="border-l-2 border-ink pl-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-alarm">
              {s.kicker}
            </p>
            <h4 className="font-display text-2xl md:text-3xl uppercase mt-1 leading-[0.95] hover:text-alarm cursor-pointer transition-colors">
              {s.headline}
            </h4>
            <p className="mt-3 font-editorial italic text-base text-ink/80">{s.excerpt}</p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-ink/60">
              {Math.floor(Math.random() * 400) + 50} comments · most disagreeable
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
