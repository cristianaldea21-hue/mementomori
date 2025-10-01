// app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memento Mori – Servicii funerare complete București & Ilfov",
  description:
    "Servicii funerare complete: preluare rapidă 24/7, pregătire decedat, sicrie și accesorii, transport funerar intern/internațional, obținere acte, organizare parastas. Dispecerat: +40 786 012 111.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Memento Mori – Servicii funerare complete",
    description:
      "Sprijin total în cele mai grele momente. Disponibili 24/7 în București și Ilfov.",
    url: "https://mementomori-psi.vercel.app/",
    images: [{ url: "/logo.png" }],
  },
};

export default function Home() {
  return (
    <main>
      <h1>Memento Mori – Servicii funerare complete</h1>
      <p>
        Oferim sprijin total în cele mai grele momente: preluare rapidă, pregătire decedat,
        sicrie și accesorii, transport funerar intern/internațional, obținere acte, organizare
        parastas. Dispecerat 24/7:{" "}
        <a href="tel:+40786012111" aria-label="Sună Memento Mori">+40 786 012 111</a>.
      </p>

      <h2>De ce Memento Mori?</h2>
      <ul>
        <li>Intervenim rapid în București și Ilfov, non-stop.</li>
        <li>Servicii complete: de la acte până la organizarea ceremoniei.</li>
        <li>Transparență și pachete adaptate bugetului familiei.</li>
      </ul>

      <p>
        <strong>Servicii principale:</strong>{" "}
        <a href="/servicii">Servicii funerare</a> •{" "}
        <a href="/sicrie">Sicrie / galerie</a> •{" "}
        <a href="/recomandari">Recomandări</a> •{" "}
        <a href="/gdpr">GDPR</a>
      </p>

      <h2>Acoperire</h2>
      <p>
        Intervenim în toate sectoarele din București și în localitățile din Ilfov.
        Pentru repatriere decedați, colaborăm cu parteneri internaționali.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <a
          href="tel:+40786012111"
          style={{ background: "#ffd166", color: "#1a1a1a", padding: "10px 14px", borderRadius: 8, fontWeight: 700, textDecoration: "none" }}
        >
          Contact rapid
        </a>
        <a
          href="https://wa.me/40786012111"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: "#25D366", color: "#1a1a1a", padding: "10px 14px", borderRadius: 8, fontWeight: 700, textDecoration: "none" }}
        >
          WhatsApp
        </a>
      </div>

      {/* Breadcrumbs JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", position: 1, name: "Acasă", item: "https://mementomori-psi.vercel.app/" }
            ]
          })
        }}
      />
    </main>
  );
}
