// app/gdpr/page.tsx
export const metadata = {
  title: "GDPR – Protecția datelor | Memento Mori",
  description:
    "Politica GDPR: scopul prelucrării, temei legal, drepturile persoanei vizate și date de contact.",
  alternates: { canonical: "https://mementomori-psi.vercel.app/gdpr" },
};

export default function GDPR() {
  return (
    <main style={{ padding: 20 }}>
      <h1>GDPR</h1>
      <p>
        Operator: Memento Mori. Date prelucrate: nume, telefon, date necesare
        pentru contract și acte. Temei: executarea contractului și obligații
        legale. Drepturi: acces, rectificare, ștergere, restricționare, opoziție.
      </p>
      <p>Contact date: +40 786 012 111 • mementomori@example.com</p>

      {/* JSON-LD – Organization + WebPage + Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Memento Mori",
            url: "https://mementomori-psi.vercel.app",
            telephone: "+40 786 012 111",
            address: {
              "@type": "PostalAddress",
              addressLocality: "București",
              addressCountry: "RO",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "GDPR – Protecția datelor | Memento Mori",
            url: "https://mementomori-psi.vercel.app/gdpr",
            description:
              "Politica GDPR: scopul prelucrării, temei legal, drepturile persoanei vizate și contact.",
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
                name: "GDPR",
                item: "https://mementomori-psi.vercel.app/gdpr",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
