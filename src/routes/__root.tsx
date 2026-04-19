import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="max-w-xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-alarm">Dead Air</p>
          <h1 className="headline-mega text-[8rem] md:text-[12rem] text-ink">404</h1>
          <h2 className="font-display text-3xl uppercase mt-2">This page has been cancelled</h2>
          <p className="mt-4 font-editorial italic text-lg">
            "Probably for saying something it shouldn't have."
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-block bg-ink text-paper font-display uppercase tracking-wider px-6 py-3 ink-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-transform"
            >
              Back to the studio
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "3AW.net.au — Melbourne's Loudest Talk (Parody)" },
      {
        name: "description",
        content:
          "A satirical parody of Melbourne talkback radio. Strong opinions, weakly held, broadcast at maximum volume.",
      },
      { name: "author", content: "3AW.net.au Parody" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "3AW.net.au — Melbourne's Loudest Talk (Parody)" },
      {
        property: "og:description",
        content: "A satirical parody of Melbourne talkback radio.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
