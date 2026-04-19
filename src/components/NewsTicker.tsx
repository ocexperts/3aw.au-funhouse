const items = [
  "BREAKING: Pothole on Punt Rd given own talkback segment",
  "EXCLUSIVE: Caller Geoff from Glen Iris reaches 47-minute monologue, breaks own record",
  "OUTRAGE: Council installs bench, listeners 'won't stand for it'",
  "TRAFFIC: Monash carpark, as usual, brought to you by Strong Feelings™",
  "WEATHER: Tepid with a 90% chance of someone yelling about it",
  "SPORTS: Bombers lose. Hosts pretend not to be delighted",
  "POLITICS: Bloke who's never been in government explains how to run it",
  "FINANCE: Property prices up, also down, also somehow your fault",
];

export function NewsTicker() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-alarm text-paper border-y-4 border-ink overflow-hidden">
      <div className="flex items-stretch">
        <div className="bg-ink text-paper px-4 py-2 font-display text-lg uppercase tracking-wider whitespace-nowrap flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-alarm animate-blink" />
          Just In
        </div>
        <div className="flex-1 ticker-mask overflow-hidden py-2">
          <div className="flex gap-12 animate-ticker font-mono text-sm uppercase tracking-wider whitespace-nowrap pl-12">
            {doubled.map((it, i) => (
              <span key={i} className="flex items-center gap-12">
                <span>★</span>
                <span>{it}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
