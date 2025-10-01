export const metadata = {
  title: "Recomandări și opinii ale familiilor – Memento Mori",
  description:
    "Recomandările familiilor care au apelat la Memento Mori: profesionalism, discreție, transparență și sprijin real 24/7.",
};

export default function Recomandari() {
  return (
    <section className="panel">
      <h1>Recomandările familiilor</h1>
      <p>
        Familiile care au apelat la <strong>serviciile funerare Memento Mori</strong> subliniază profesionalismul,
        transparența și sprijinul constant. Pentru noi, „Respect pentru cei plecați, sprijin pentru cei rămași”
        nu este doar un slogan, ci modul în care lucrăm zi de zi.
      </p>
      <ul>
        <li>„Totul a fost organizat impecabil, cu respect și discreție.”</li>
        <li>„Servicii complete și comunicare clară în fiecare pas.”</li>
        <li>„Recomandăm cu încredere echipa Memento Mori.”</li>
      </ul>
      <p style={{ marginTop: 16 }}>
        Suntem disponibili non-stop: <a href="tel:+40786012111">+40 786 012 111</a>.
      </p>
    </section>
  );
}
// sus:
const SITE_URL = "https://mementomori-psi.vercel.app";
const webPageRecom = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Recomandări și opinii – Memento Mori",
  url: `${SITE_URL}/recomandari`,
  description:
    "Opiniile familiilor: profesionalism, discreție, transparență și sprijin real 24/7.",
};

const breadcrumbsRecom = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Acasă", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Recomandări", item: `${SITE_URL}/recomandari` },
  ],
};

// la finalul JSX:
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageRecom) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsRecom) }} />
