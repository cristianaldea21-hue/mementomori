// app/servicii/page.tsx
export const metadata = {
  title: "Servicii funerare complete | Memento Mori",
  description:
    "Constatare și preluare, îmbălsămare, pregătire decedat, sicrie și accesorii, transport funerar, obținere acte, organizare parastas. +40 786 012 111.",
  alternates: { canonical: "https://mementomori-psi.vercel.app/servicii" },
};

export default function Servicii() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Servicii funerare Memento Mori</h1>
      <ul>
        <li>Pachet Standard Domiciliu</li>
        <li>Pachet Standard Spital</li>
        <li>Pachet Social</li>
        <li>Repatriere decedați</li>
      </ul>
      <p>Contact: +40 786 012 111</p>

      {/* JSON-LD – Service + Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Servicii funerare complete",
            provider: { "@type": "Organization", name: "Memento Mori" },
            areaServed: ["București", "Ilfov"],
            url: "https://mementomori-psi.vercel.app/servicii",
            description:
              "Constatare și preluare, îmbălsămare, pregătire decedat, sicrie și accesorii, transport funerar intern/internațional, obținere acte, organizare parastas.",
            offers: {
              "@type": "Offer",
              priceCurrency: "RON",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Memento Mori",
                item: "https://mementomori-psi.vercel.app",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Servicii",
                item: "https://mementomori-psi.vercel.app/servicii",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
