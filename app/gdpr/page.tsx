export const metadata = {
  title: "GDPR – Protecția datelor personale | Memento Mori",
  description:
    "Politica de confidențialitate: temeiuri legale, scopuri, drepturi GDPR. Datele sunt prelucrate exclusiv pentru furnizarea serviciilor funerare.",
};

export default function GDPR() {
  return (
    <section className="panel">
      <h1>Politica de confidențialitate (GDPR)</h1>
      <p>
        <strong>Memento Mori</strong> respectă normele GDPR privind protecția datelor personale. Datele colectate
        (nume, telefon, adresă, date necesare pentru acte și contracte funerare) sunt utilizate exclusiv pentru
        furnizarea serviciilor solicitate și pentru îndeplinirea obligațiilor legale.
      </p>
      <p>
        <strong>Drepturile dvs.:</strong> acces, rectificare, ștergere, restricționare, portabilitate, opoziție.
        Pentru exercitarea drepturilor, ne puteți contacta la <a href="mailto:mementomori@example.com">mementomori@example.com</a>
        sau la <a href="tel:+40786012111">+40 786 012 111</a>.
      </p>
    </section>
  );
}
// sus:
const SITE_URL = "https://mementomori-psi.vercel.app";
const webPageGDPR = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Politica de confidențialitate (GDPR) – Memento Mori",
  url: `${SITE_URL}/gdpr`,
  description:
    "Protecția datelor personale: temeiuri legale, scopuri, drepturile persoanelor vizate, date de contact.",
};

const breadcrumbsGDPR = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Acasă", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "GDPR", item: `${SITE_URL}/gdpr` },
  ],
};

// la finalul JSX:
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageGDPR) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsGDPR) }} />
