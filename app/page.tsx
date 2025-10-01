export const metadata = {
  title: "Servicii funerare complete în București & Ilfov – Memento Mori",
  description:
    "Servicii funerare non-stop în București și Ilfov: preluare decedat, transport funerar autorizat, repatriere decedați, îmbălsămare, sicrie și accesorii, acte, organizare parastas. Dispecerat 24/7: +40 786 012 111.",
};

export default function Home() {
  return (
    <div className="grid" style={{ gap: 20 }}>
      <section className="panel">
        <h1>Servicii funerare complete în București și Ilfov – Memento Mori</h1>
        <h2>Respect pentru cei plecați, sprijin pentru cei rămași</h2>
        <p>
          La <strong>Memento Mori</strong> oferim <strong>servicii funerare non-stop în București și Ilfov</strong>,
          adaptate oricărei situații și oricărui buget. Motto-ul nostru – „Respect pentru cei plecați, sprijin pentru cei rămași”
          – ghidează fiecare intervenție. Echipa noastră se ocupă de toate detaliile pentru o ceremonie demnă și fără griji.
        </p>
        <ul>
          <li><strong>Preluarea decedatului</strong> de la domiciliu, spital sau azil</li>
          <li><strong>Transport funerar autorizat</strong> (intern & internațional)</li>
          <li><strong>Repatriere decedați</strong> din străinătate, cu documente complete</li>
          <li><strong>Îmbălsămare, toaletare și îmbrăcare</strong> realizate de personal autorizat</li>
          <li><strong>Sicrie funerare</strong>, urne, cruci, coroane și accesorii</li>
          <li><strong>Acte funerare</strong>: certificat de deces, avize, autorizații</li>
          <li><strong>Organizare parastas</strong> – colaborare cu restaurante/catering</li>
        </ul>
        <h2>De ce să alegi Memento Mori?</h2>
        <ul>
          <li>Experiență, discreție și comunicare clară</li>
          <li><strong>Disponibilitate 24/7</strong> – intervenție imediată</li>
          <li>Pachete funerare <strong>social / standard / premium</strong></li>
          <li><strong>Transparență totală</strong> – fără costuri ascunse</li>
        </ul>
        <p style={{ marginTop: 16 }}>
          <a className="btn" href="tel:+40786012111">📞 +40 786 012 111</a>{" "}
          <a style={{ marginLeft: 10 }} href="https://wa.me/40786012111" target="_blank">💬 WhatsApp</a>
        </p>
      </section>

      <section className="panel">
        <h2>Acoperire în București & Ilfov</h2>
        <p>
          Intervenim în toate sectoarele din București și în localitățile din Ilfov. Pentru situațiile de
          <strong> repatriere internațională</strong>, colaborăm cu parteneri autorizați și experimentați.
        </p>
      </section>
    </div>
  );
}
