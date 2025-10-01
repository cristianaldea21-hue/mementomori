// app/recomandari/page.tsx
export const metadata = {
  title: "Recomandări clienți | Memento Mori",
  description:
    "Păreri și recomandări de la familii pe care le-am sprijinit în momente dificile.",
  alternates: { canonical: "https://mementomori-psi.vercel.app/recomandari" },
};

export default function Recomandari() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Recomandări</h1>
      <p>Mulțumim familiilor pentru încredere și cuvintele lor.</p>

      {/* JSON-LD – WebPage + Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Recomandări clienți | Memento Mori",
            url: "https://mementomori-psi.vercel.app/recomandari",
            description:
              "Păreri și recomandări de la familii pe care le-am sprijinit în momente dificile.",
            inLanguage: "ro-RO",
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
                name: "Recomandări",
                item: "https://mementomori-psi.vercel.app/recomandari",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
