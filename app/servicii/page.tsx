// app/servicii/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicii funerare – Pachete complete | Memento Mori",
  description:
    "Preluare 24/7, îmbălsămare, toaletare, sicrie și accesorii, capelă, transport funerar, obținere acte, organizare parastas. Pachete standard & sociale. +40 786 012 111.",
  alternates: { canonical: "/servicii" },
  openGraph: {
    title: "Servicii funerare – Pachete complete",
    description: "Tot ce ai nevoie, de la acte la ceremonie, în București & Ilfov.",
    url: "https://mementomori-psi.vercel.app/servicii",
    images: [{ url: "/logo.png" }],
  },
};

export default function Servicii() {
  return (
    <main>
      <h1>Servicii funerare Memento Mori</h1>

      <p>
        Asigurăm gestionarea completă a procedurilor și a ceremoniei: consultanță, redactare documente,
        igienizare și pregătire, sicrie și accesorii, organizare priveghi, transport funerar, parastas.
        Dispecerat 24/7: <a href="tel:+40786012111">+40 786 012 111</a>.
      </p>

      <h2>Pachete recomandate</h2>
      <ul>
        <li><strong>Pachet Standard Domiciliu</strong> – preluare, pregătire, sicriu clasic, cruce, acte.</li>
        <li><strong>Pachet Standard Spital</strong> – ridicare din morgă, toaletare, sicriu, accesorii, acte.</li>
        <li><strong>Pachet Social</strong> – soluție accesibilă cu serviciile esențiale incluse.</li>
        <li><strong>Repatriere decedați</strong> – coordonare internațională, documente și transport.</li>
      </ul>

      <p>
        Îți prezentăm transparent costurile și pașii, astfel încât familia să fie mereu informată.
      </p>

      {/* Breadcrumbs JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", position: 1, name: "Acasă", item: "https://mementomori-psi.vercel.app/" },
              { "@type": "ListItem", position: 2, name: "Servicii funerare", item: "https://mementomori-psi.vercel.app/servicii" }
            ]
          })
        }}
      />
    </main>
  );
}
