export default function Home() {
  return (
    <div className="grid" style={{gap:20}}>
      {/* Hero / Intro */}
      <section className="panel">
        <h1>Memento Mori – Servicii funerare complete</h1>
        <p>
          Oferim sprijin total în cele mai grele momente: preluare rapidă,
          pregătire decedat, sicrie și accesorii, transport funerar intern/internațional,
          obținere acte, organizare parastas. Dispecerat 24/7:{" "}
          <a href="tel:+40786012111">+40 786 012 111</a>.
        </p>
      </section>

      {/* De ce noi */}
      <section className="panel">
        <h2>De ce Memento Mori?</h2>
        <ul>
          <li>Intervenim rapid în București și Ilfov, non-stop.</li>
          <li>Servicii complete: de la acte până la organizarea ceremoniei.</li>
          <li>Transparență și pachete adaptate bugetului familiei.</li>
        </ul>
        <div style={{marginTop:12}}>
          <a href="/servicii">Servicii funerare</a> ·{" "}
          <a href="/sicrie">Sicrie / galerie</a> ·{" "}
          <a href="/recomandari">Recomandări</a> ·{" "}
          <a href="/gdpr">GDPR</a>
        </div>
      </section>

      {/* Acoperire */}
      <section className="panel">
        <h2>Acoperire</h2>
        <p>
          Intervenim în toate sectoarele din București și în localitățile din Ilfov.
          Pentru repatriere decedați, colaborăm cu parteneri internaționali.
        </p>
        <p style={{marginTop:16}}>
          <a className="btn" href="tel:+40786012111">Contact rapid</a>{" "}
          <a style={{marginLeft:10}} href="https://wa.me/40786012111" target="_blank">WhatsApp</a>
        </p>
      </section>
    </div>
  );
}
