/* app/page.tsx */
export default function Home() {
  return (
    <section className="hero">
      <h1>Respect pentru cei plecați, sprijin pentru cei rămași</h1>
      <p className="hero-sub">
        Servicii funerare complete în București & Ilfov. Dispecerat 24/7.
      </p>

      <div className="cta">
        <a className="btn btn-gold" href="tel:+40786012111">APEL RAPID</a>
        <a className="btn btn-dark" href="https://wa.me/40786012111" target="_blank" rel="noopener noreferrer">WHATSAPP</a>
      </div>

      <div className="bullets">
        <ul>
          <li>Întotdeauna respect și demnitate</li>
          <li>Asistență în momentele dificile</li>
          <li>Servicii de încredere</li>
        </ul>
      </div>

      <nav className="linkgrid" aria-label="Linkuri rapide">
        <a href="/servicii">Servicii funerare</a>
        <a href="/sicrie">Sicrie / galerie</a>
        <a href="/recomandari">Recomandări</a>
        <a href="/gdpr">GDPR</a>
      </nav>
    </section>
  );
}
