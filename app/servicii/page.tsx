export const metadata = {
  title: "Servicii funerare complete 24/7 – pachete, acte, transport | Memento Mori",
  description:
    "Servicii funerare în București & Ilfov: transport funerar intern/international, repatriere decedați, îmbălsămare, sicrie și accesorii, acte și consiliere, organizare parastas.",
};

export default function Servicii() {
  return (
    <div className="grid">
      <section className="panel">
        <h1>Servicii funerare complete – Memento Mori</h1>
        <h2>Respect pentru cei plecați, sprijin pentru cei rămași</h2>
        <p>
          Punem la dispoziție <strong>servicii funerare complete în București și Ilfov</strong>, gândite pentru a acoperi
          fiecare etapă a ceremoniei. Ne ocupăm de organizare, produse și birocrație, astfel încât familia să aibă
          liniștea necesară.
        </p>

        <h3>Tipuri de servicii</h3>
        <ul>
          <li><strong>Transport funerar</strong> intern și internațional – autospeciale autorizate</li>
          <li><strong>Repatriere decedați</strong> – formalități complete și coordonare</li>
          <li><strong>Îmbălsămare & pregătire</strong> – toaletare, îmbrăcare, cosmetizare</li>
          <li><strong>Sicrie & accesorii funerare</strong> – modele variate, disponibile imediat</li>
          <li><strong>Acte & consiliere</strong> – certificat de deces, avize, autorizații</li>
          <li><strong>Organizare parastas</strong> – meniuri, locații, aranjamente</li>
        </ul>

        <h3>Pachete funerare</h3>
        <ul>
          <li><strong>Standard Domiciliu</strong></li>
          <li><strong>Standard Spital</strong></li>
          <li><strong>Social</strong> (pentru situații cu buget redus)</li>
          <li><strong>Premium</strong> (ceremonie completă, personalizată)</li>
        </ul>

        <p style={{ marginTop: 16 }}>
          <a className="btn" href="tel:+40786012111">📞 Sună acum: +40 786 012 111</a>
        </p>
      </section>
    </div>
  );
}
// la începutul componentei:
const SITE_URL = "https://mementomori-psi.vercel.app";
const webPageServicii = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Servicii funerare complete – Memento Mori",
  url: `${SITE_URL}/servicii`,
  description:
    "Servicii funerare în București & Ilfov: transport funerar, repatriere, îmbălsămare, sicrie, acte, organizare parastas. 24/7.",
};

const breadcrumbsServicii = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Acasă", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Servicii", item: `${SITE_URL}/servicii` },
  ],
};

const faqServicii = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Oferiți servicii funerare non-stop în București și Ilfov?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da. Dispeceratul nostru funcționează 24/7, iar echipa intervine rapid în toate sectoarele din București și în județul Ilfov.",
      },
    },
    {
      "@type": "Question",
      name: "Realizați repatriere decedați din străinătate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da. Asigurăm repatriere internațională, inclusiv transport funerar și întocmirea tuturor documentelor legale.",
      },
    },
    {
      "@type": "Question",
      name: "Sunt incluse actele în pachetele funerare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da. Oferim consiliere și suport pentru certificat de deces, avize și autorizații, în toate pachetele noastre.",
      },
    },
  ],
};

// în JSX, la final, chiar înainte de închiderea containerului:
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageServicii) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsServicii) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqServicii) }} />
