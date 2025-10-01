// app/recomandari/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recomandări pentru familie – pași, acte, sprijin | Memento Mori",
  description:
    "Ghid practic: ce acte sunt necesare, pași pentru organizare, ce să pregătești, cum procedăm la spital/domiciliu, repatriere. Consiliere 24/7.",
  alternates: { canonical: "/recomandari" },
  openGraph: {
    title: "Recomandări pentru familie",
    description: "Ghid de organizare, acte și pași esențiali.",
    url: "https://mementomori-psi.vercel.app/recomandari",
    images: [{ url: "/logo.png" }],
  },
};

export default function Recomandari() {
  return (
    <main>
      <h1>Recomandări utile pentru familie</h1>

      <h2>Acte necesare (în funcție de caz)</h2>
      <ul>
        <li>Actul de identitate al defunctului.</li>
        <li>Certificat/adeverință medicală constatatoare.</li>
        <li>Certificat de naștere și/sau căsătorie – dacă sunt disponibile.</li>
        <li>Actul de identitate al aparținătorului.</li>
      </ul>

      <h2>Pași esențiali</h2>
      <ol>
        <li>Sună dispeceratul: <a href="tel:+40786012111">+40 786 012 111</a> (non-stop).</li>
        <li>Stabilim preluarea și consiliem familia cu privire la acte și opțiuni.</li>
        <li>Pregătim repede documentele și organizăm ceremonia.</li>
      </ol>

      {/* Breadcrumbs JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", position: 1, name: "Acasă", item: "https://mementomori-psi.vercel.app/" },
              { "@type": "ListItem", position: 2, name: "Recomandări", item: "https://mementomori-psi.vercel.app/recomandari" }
            ]
          })
        }}
      />
    </main>
  );
}
