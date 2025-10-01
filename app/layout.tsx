// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://mementomori-psi.vercel.app"; // schimbă dacă pui domeniu propriu
const PHONE = "+40786012111";

export const metadata: Metadata = {
  title: "Memento Mori – Servicii funerare complete București & Ilfov",
  description:
    "Servicii funerare non-stop în București și Ilfov: preluare decedat, transport funerar, repatriere, îmbălsămare, sicrie și accesorii, acte, organizare parastas. Dispecerat 24/7.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Memento Mori – Servicii funerare complete",
    description:
      "Respect pentru cei plecați, sprijin pentru cei rămași. Disponibilitate 24/7 în București & Ilfov.",
    url: SITE_URL,
    siteName: "Memento Mori",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Memento Mori" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Memento Mori",
    url: SITE_URL,
    telephone: PHONE,
    slogan: "Respect pentru cei plecați, sprijin pentru cei rămași",
    logo: `${SITE_URL}/logo.svg`,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Memento Mori",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={query}`,
      "query-input": "required name=query",
    },
  };

  const funeralHome = {
    "@context": "https://schema.org",
    "@type": "FuneralHome",
    name: "Memento Mori",
    url: SITE_URL,
    telephone: PHONE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "București",
      addressRegion: "Ilfov",
      addressCountry: "RO",
    },
    areaServed: ["București", "Ilfov"],
    openingHours: "Mo-Su 00:00-24:00",
    image: `${SITE_URL}/og.jpg`,
  };

  const logo = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}/logo.svg`,
    name: "Memento Mori Logo",
  };

  return (
    <html lang="ro">
      <body>
        {/* HEADER minimalist */}
        <header className="header">
          <div className="container" style={{display:'flex',alignItems:'center',gap:16}}>
            <a href="/" className="brand">
              <img src="/logo.svg" alt="Memento Mori" width={22} height={22} />
              <span>Memento Mori</span>
            </a>
            <nav className="menu">
              <a href="/servicii">Servicii</a>
              <a href="/sicrie">Sicrie</a>
              <a href="/recomandari">Recomandări</a>
              <a href="/gdpr">GDPR</a>
            </nav>
            <div className="spacer" />
            <a className="btn" href={`tel:${PHONE}`}>{PHONE.replace("+40"," +40 ")}</a>
          </div>
        </header>

        <main className="container" style={{paddingTop:24}}>{children}</main>

        <footer className="footer">
          <div className="container">
            Respect pentru cei plecați, sprijin pentru cei rămași • © {new Date().getFullYear()} Memento Mori
          </div>
        </footer>

        {/* JSON-LD globale */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(funeralHome) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(logo) }} />
      </body>
    </html>
  );
}
