// app/gdpr/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR & Protecția datelor – Memento Mori",
  description:
    "Informații privind prelucrarea datelor cu caracter personal: temeiuri legale, drepturile persoanelor vizate, contact DPO. Transparent și responsabil.",
  alternates: { canonical: "/gdpr" },
  openGraph: {
    title: "GDPR & Protecția datelor",
    description: "Cum prelucrăm datele și ce drepturi ai.",
    url: "https://mementomori-psi.vercel.app/gdpr",
    images: [{ url: "/logo.png" }],
  },
};

export default function GDPR() {
  return (
    <main>
      <h1>GDPR</h1>

      <p>
        Operator: <strong>Memento Mori</strong>. Date prelucrate: nume, telefon, date necesare pentru
        contract și acte. Temei: executarea contractului și obligații legale. Drepturi: acces,
        rectificare, ștergere, restricționare, opoziție.
      </p>

      <p>
        Contact date: <a href="tel:+40786012111">+40 786 012 111</a> •{" "}
        <a href="mailto:mementomori@example.com">mementomori@example.com</a>
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
              { "@type": "ListItem", position: 2, name: "GDPR", item: "https://mementomori-psi.vercel.app/gdpr" }
            ]
          })
        }}
      />
    </main>
  );
}
