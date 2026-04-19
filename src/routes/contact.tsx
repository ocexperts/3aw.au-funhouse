import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — 3AW.net.au (Parody)" },
      {
        name: "description",
        content:
          "Phone in, write a stern letter, or send a fax. The talkback hotline never closes (unless Phil is on lunch).",
      },
      { property: "og:title", content: "Contact — 3AW.net.au (Parody)" },
      {
        property: "og:description",
        content: "Phone in, write a stern letter, or send a fax — get on air at Melbourne's loudest parody talkback.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-alarm">
        The Hotline · Manned 24/7 by Phil
      </p>
      <h1 className="headline-mega text-6xl md:text-8xl mt-2">
        Get It Off<br />
        <span className="text-alarm">Your Chest.</span>
      </h1>
      <p className="mt-6 font-editorial italic text-xl max-w-2xl">
        We accept opinions in any form: phone, fax, telegram, sealed letter, or shouted
        through the studio window at 4am.
      </p>

      <div className="mt-12 grid lg:grid-cols-5 gap-8">
        {/* Contact info */}
        <aside className="lg:col-span-2 space-y-6">
          <div className="border-4 border-ink p-6 bg-mustard">
            <p className="font-mono text-[11px] uppercase tracking-widest">
              The Talkback Line
            </p>
            <p className="headline-mega text-5xl md:text-6xl text-alarm mt-1">131-RANT</p>
            <p className="mt-2 font-editorial italic">
              Standard outrage charges apply. Calls may be ignored for training purposes.
            </p>
          </div>

          <div className="border-4 border-ink p-6 bg-paper">
            <h3 className="font-display text-2xl uppercase">By Post</h3>
            <p className="mt-2 font-mono text-sm leading-relaxed">
              The Editor (Furious)<br />
              3AW.net.au Studios<br />
              Level 0, A Disused Bunker<br />
              Somewhere off Punt Rd<br />
              Melbourne, VIC, Allegedly
            </p>
          </div>

          <div className="border-4 border-ink p-6 bg-newsprint">
            <h3 className="font-display text-2xl uppercase">Office Hours</h3>
            <ul className="mt-2 font-mono text-sm space-y-1">
              <li>Mon–Fri: Whenever Phil arrives</li>
              <li>Sat: Probably not</li>
              <li>Sun: Definitely not</li>
              <li>Public holidays: How dare you ask</li>
            </ul>
          </div>
        </aside>

        {/* Form */}
        <form
          className="lg:col-span-3 border-4 border-ink p-6 md:p-10 bg-paper alarm-shadow"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <h2 className="font-display text-3xl md:text-4xl uppercase">Submit a Grievance</h2>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-ink/60">
            Required fields marked * (everything is required, also nothing is)
          </p>

          {submitted ? (
            <div className="mt-8 border-4 border-ink bg-mustard p-6">
              <p className="font-display text-3xl uppercase">★ Received ★</p>
              <p className="mt-2 font-editorial italic text-lg">
                Your grievance has been printed, briefly considered, and filed in a drawer
                Phil can't find. We'll be in touch never.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 border-2 border-ink px-4 py-2 font-display uppercase tracking-wider hover:bg-ink hover:text-paper"
              >
                Lodge another
              </button>
            </div>
          ) : (
            <div className="mt-6 space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Your Name *" placeholder="Geoffrey from Glen Iris" />
                <Field label="Suburb *" placeholder="Where the bin offends" />
              </div>
              <Field label="Phone (so we can ignore it) *" placeholder="0400 RAGE" />
              <div>
                <label className="block font-mono text-xs uppercase tracking-widest mb-2">
                  Topic of Outrage *
                </label>
                <select className="w-full border-2 border-ink bg-paper px-3 py-3 font-mono text-sm uppercase tracking-wider focus:outline-none focus:bg-mustard">
                  <option>The Council</option>
                  <option>The Other Council</option>
                  <option>The Footy</option>
                  <option>"The youth"</option>
                  <option>A specific roundabout</option>
                  <option>The price of milk</option>
                  <option>Other (please specify in 600+ words)</option>
                </select>
              </div>
              <div>
                <label className="block font-mono text-xs uppercase tracking-widest mb-2">
                  Your Take *
                </label>
                <textarea
                  rows={6}
                  placeholder="Begin with 'Look, I've been listening for years...' and continue indefinitely."
                  className="w-full border-2 border-ink bg-paper px-3 py-3 font-mono text-sm focus:outline-none focus:bg-mustard placeholder:text-ink/40 placeholder:normal-case"
                />
              </div>
              <label className="flex items-start gap-3 font-mono text-xs uppercase tracking-widest">
                <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[var(--alarm)]" />
                I understand this submission is fictional and will be enjoyed
                ironically by a producer named Phil.
              </label>
              <button
                type="submit"
                className="bg-ink text-paper font-display uppercase tracking-wider px-8 py-4 text-lg ink-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-transform"
              >
                Send to the Studio →
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="block font-mono text-xs uppercase tracking-widest mb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border-2 border-ink bg-paper px-3 py-3 font-mono text-sm focus:outline-none focus:bg-mustard placeholder:text-ink/40"
      />
    </div>
  );
}
