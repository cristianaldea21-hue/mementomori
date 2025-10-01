// app/page.tsx
export const metadata = {
  title: "Memento Mori – Servicii funerare complete în București și Ilfov",
  description:
    "Respect pentru cei plecați, sprijin pentru cei rămași. Servicii funerare complete: constatare, îmbălsămare, pregătire decedat, sicrie și accesorii, transport intern/internațional, obținere acte, parastas. Dispecerat 24/7: +40 786 012 111.",
  alternates: { canonical: "https://mementomori-psi.vercel.app" },
  openGraph: {
    title: "Memento Mori – Servicii funerare complete",
    description:
      "Intervenim rapid în București și Ilfov. Pachete transparente, sprijin total familiei. +40 786 012 111.",
    url: "https://mementomori-psi.vercel.app",
    siteName: "Memento Mori",
    type: "website",
    locale: "ro_RO",
  },
};

const TEL = "+40786012111";
const TEL_HUMAN = "+40 786 012 111";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Memento Mori – Servicii funerare complete</h1>
      <p>
        Respect pentru cei plecați, sprijin pentru cei rămași. Oferim sprijin
        total în cele mai grele momente: preluare rapidă, pregătire decedat,
        sicrie și accesorii, transport funerar intern/internațional, obținere
        acte, organizare parastas. Dispecerat 24/7:{" "}
        <a href={`tel:${TEL}`}>{TEL_HUMAN}</a>.
      </p>

      <h2>De ce Memento Mori?</h2>
      <ul>
        <li>Intervenim rapid în București și Ilfov, non-stop.</li>
        <li>Servicii complete: de la acte până la organizarea ceremoniei.</li>
        <li>Transparență și pachete adaptate bugetului familiei.</li>
      </ul>

      <nav style={{ display: "grid", gap: 8, marginTop: 16 }}>
        <a href="/servicii">Servicii funerare</a>
        <a href="/sicrie">Sicrie / galerie</a>
        <a href="/recomandari">Recomandări</a>
        <a href="/gdpr">GDPR</a>
      </nav>

      <section style={{ marginTop: 24 }}>
        <h2>Acoperire</h2>
        <p>
          Intervenim în toate sectoarele din București și în localitățile din
          Ilfov. Pentru repatriere decedați, colaborăm cu parteneri
          internaționali.
        </p>
      </section>

      <div style={{ marginTop: 20 }}>
        <a
          href={`tel:${TEL}`}
          style={{ marginRight: 10, fontWeight: "bold" }}
          aria-label="Apelează acum"
        >
          📞 Contact rapid: {TEL_HUMAN}
        </a>
        <a
          href={`https://wa.me/${TEL.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", color: "#25D366" }}
          aria-label="Scrie pe WhatsApp"
        >
          WhatsApp
        </a>
      </div>

      {/* JSON-LD: Organization + LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness"],
            name: "Memento Mori",
            url: "https://mementomori-psi.vercel.app",
            telephone: TEL_HUMAN,
            image: "https://mementomori-psi.vercel.app/logo.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "București",
              addressRegion: "București",
              addressCountry: "RO",
            },
            areaServed: ["București", "Ilfov"],
            priceRange: "$$",
          }),
        }}
      />
      {/* JSON-LD: WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Memento Mori",
            url: "https://mementomori-psi.vercel.app",
            inLanguage: "ro-RO",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://mementomori-psi.vercel.app/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      {/* JSON-LD: WebPage (homepage) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Memento Mori – Servicii funerare complete",
            url: "https://mementomori-psi.vercel.app",
            description:
              "Respect pentru cei plecați, sprijin pentru cei rămași. Servicii funerare complete în București și Ilfov. Telefon 24/7: +40 786 012 111.",
            inLanguage: "ro-RO",
            isPartOf: {
              "@type": "WebSite",
              url: "https://mementomori-psi.vercel.app",
            },
          }),
        }}
      />
    </main>
  );
}
