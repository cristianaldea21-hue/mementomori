// app/page.tsx
import Head from "next/head";

export default function Home() {
  // --- JSON-LD: schema.org pentru SEO -------------------------------------------------
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FuneralHome",
    "name": "Memento Mori",
    "url": "https://mementomori-psi.vercel.app",
    "logo": "https://mementomori-psi.vercel.app/favicon.ico",
    "telephone": "+40786012111",
    "description":
      "Respect pentru cei plecați, sprijin pentru cei rămași. Servicii funerare complete în București și Ilfov: transport funerar, repatriere decedați, sicrie și accesorii, obținere acte, organizare parastas.",
    "areaServed": ["București", "Ilfov"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "București",
      "addressRegion": "Ilfov",
      "addressCountry": "RO"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": ["https://wa.me/40786012111"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicii funerare complete",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Servicii principale",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transport funerar" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Îmbălsămare și pregătire decedat" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sicrie și accesorii funerare" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Obținere acte necesare" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Organizare parastas" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Repatriere decedați" } }
          ]
        }
      ]
    }
  };
  // ------------------------------------------------------------------------------------

  return (
    <main style={{ padding: 20 }}>
      <Head>
        <title>Memento Mori – Servicii funerare complete București & Ilfov</title>
        <meta
          name="description"
          content="Respect pentru cei plecați, sprijin pentru cei rămași. Servicii funerare complete în București și Ilfov: transport funerar, sicrie și accesorii, obținere acte, repatriere decedați, organizare parastas."
        />
        <meta
          name="keywords"
          content="servicii funerare București, servicii funerare Ilfov, pompe funebre, repatriere decedați, transport funerar, sicrie, organizare parastas, acte înmormântare"
        />
        {/* Scriptul JSON-LD pentru Google */}
        <script
          type="application/ld+json"
          // e OK să folosim dangerouslySetInnerHTML pentru a insera JSON-LD
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <h1>Memento Mori – Servicii funerare complete</h1>
      <p><strong>Respect pentru cei plecați, sprijin pentru cei rămași.</strong></p>

      <p>
        Oferim servicii funerare complete în București și Ilfov: preluare rapidă,
        pregătire decedat, sicrie și accesorii, transport funerar intern și
        internațional, obținere acte, organizare parastas și repatriere decedați.
        Suntem disponibili non-stop pentru familiile îndurerate.
      </p>

      <h2>De ce să alegi Memento Mori?</h2>
      <ul>
        <li>Disponibilitate 24/7, cu intervenție rapidă în toate sectoarele din București și Ilfov.</li>
        <li>Servicii complete: de la obținerea actelor până la organizarea parastasului.</li>
        <li>Transparență totală, fără costuri ascunse, adaptate fiecărui buget.</li>
        <li>Experiență și respect pentru fiecare familie sprijinită.</li>
      </ul>

      <h2>Acoperire</h2>
      <p>
        Intervenim în toate sectoarele din București și în localitățile din Ilfov.
        Pentru repatrierea decedaților, colaborăm cu parteneri internaționali.
      </p>

      <div style={{ marginTop: 20 }}>
        <a href="tel:+40786012111" style={{ marginRight: 10, fontWeight: "bold", color: "#f1c40f" }}>
          ☎ Contact rapid: +40 786 012 111
        </a>
        <a
          href="https://wa.me/40786012111"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", color: "#25D366" }}
        >
          WhatsApp
        </a>
      </div>
    </main>
  );
}
