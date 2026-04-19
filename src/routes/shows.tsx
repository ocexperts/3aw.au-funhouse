import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shows")({
  head: () => ({
    meta: [
      { title: "Shows — 3AW.net.au (Parody)" },
      {
        name: "description",
        content:
          "The full daily lineup of fictional 3AW.net.au talkback shows. From Wake Up Angry to The Sleepless Hour.",
      },
      { property: "og:title", content: "Shows — 3AW.net.au (Parody)" },
      {
        property: "og:description",
        content: "The full lineup of satirical talkback radio programmes.",
      },
    ],
  }),
  component: ShowsPage,
});

const lineup = [
  {
    time: "04:30 – 05:30",
    name: "The Pre-Dawn Whinge",
    host: "Auto-playing voicemails",
    blurb:
      "An hour of unscreened complaints recorded between 11pm and 4am, played without context or consent.",
    tag: "Pre-breakfast",
  },
  {
    time: "05:30 – 09:00",
    name: "Wake Up Angry",
    host: "Dazza McGinty",
    blurb:
      "Caffeinated grievance, traffic reports delivered at a shout, and a regular segment titled 'What's Got Up My Nose Today.'",
    tag: "Breakfast",
    live: true,
  },
  {
    time: "09:00 – 12:00",
    name: "The Volume",
    host: "Barry 'The Volume' Henderson",
    blurb:
      "Three hours of Barry yelling at clouds, with special guests including Other Clouds and a man pretending to be a doctor.",
    tag: "Mornings",
    live: true,
  },
  {
    time: "12:00 – 15:00",
    name: "The Verdict",
    host: "Margaret Pritchett",
    blurb:
      "Margaret has tried your cooking and is disappointed. Topics include 'modern parenting' and 'why everything was better.'",
    tag: "Afternoons",
  },
  {
    time: "15:00 – 18:00",
    name: "Sportsline Uncut",
    host: "Trev 'The Bloke' Carmichael",
    blurb:
      "Trev breaks down the weekend's footy with the analytical depth of a man who once met Lou Richards in a Bunnings.",
    tag: "Drive",
  },
  {
    time: "18:00 – 21:00",
    name: "Dinner & Disgust",
    host: "Rotating panel of mildly familiar faces",
    blurb:
      "Eat your dinner while four people who have not been on television since 2003 discuss why nobody respects anything anymore.",
    tag: "Evenings",
  },
  {
    time: "21:00 – 00:00",
    name: "The Long Lonely",
    host: "Norm",
    blurb:
      "Just Norm. Norm and his thoughts. Norm and the static. Occasionally Norm takes a call from his sister.",
    tag: "Nights",
  },
  {
    time: "00:00 – 04:30",
    name: "The Sleepless Hour (×4.5)",
    host: "Pre-recorded ads on loop",
    blurb:
      "Mattresses, life insurance, mattresses, gold investment, mattresses. Featuring our jingle 'You're Awake Again.'",
    tag: "Overnight",
  },
];

function ShowsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-alarm">
        The Daily Schedule
      </p>
      <h1 className="headline-mega text-6xl md:text-8xl mt-2">
        24 Hours.<br />
        <span className="text-alarm">Zero Silence.</span>
      </h1>
      <p className="mt-6 font-editorial italic text-xl max-w-2xl">
        Every minute of every day, someone is on air being noticeably louder than necessary.
        Find your favourite below — or, more likely, find one to be furious about.
      </p>

      <div className="mt-12 border-4 border-ink divide-y-2 divide-ink bg-paper">
        {lineup.map((s) => (
          <article
            key={s.name}
            className="grid md:grid-cols-12 gap-4 p-5 md:p-7 hover:bg-mustard/40 transition-colors"
          >
            <div className="md:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink/60">
                {s.tag}
              </p>
              <p className="font-display text-2xl md:text-3xl mt-1">{s.time}</p>
            </div>
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="font-display text-3xl md:text-4xl uppercase">{s.name}</h2>
                {s.live && (
                  <span className="bg-alarm text-paper font-mono text-[10px] uppercase tracking-widest px-2 py-1">
                    ● Live
                  </span>
                )}
              </div>
              <p className="font-mono text-xs uppercase tracking-widest mt-1">
                with {s.host}
              </p>
              <p className="mt-3 font-editorial italic text-lg text-ink/85">{s.blurb}</p>
            </div>
            <div className="md:col-span-3 flex md:justify-end items-start">
              <button
                type="button"
                className="border-2 border-ink px-4 py-2 font-display uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors"
              >
                Listen* (no)
              </button>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-ink/60">
        * The audio is figurative. So are most of the opinions.
      </p>
    </div>
  );
}
