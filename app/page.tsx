export const metadata = {
  title: 'Acasă',
  description: 'Servicii funerare complete în București și Ilfov. Dispecerat 24/7. Respect pentru cei plecați, sprijin pentru cei rămași.'
};

export default function Home() {
  return (
    <main className="intro container">
      <section className="card">
        <div className="hero">
          <h1>Respect pentru cei plecați,<br/>sprijin pentru cei rămași</h1>
          <p>Servicii funerare complete în București și Ilfov. Dispecerat 24/7.</p>
          <div style={{ marginTop: 16 }}>
            <a className="btn call" href="tel:+40786012111">Apel rapid</a>
            <a className="btn wa" href="https://wa.me/40786012111?text=Buna%20ziua%2C%20doresc%20informatii%20despre%20serviciile%20Memento%20Mori." target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>

        <ul className="check">
          <li>✓ Întotdeauna respect și demnitate</li>
          <li>✓ Asistență în momentele dificile</li>
          <li>✓ Servicii de încredere</li>
        </ul>

        <nav style={{ display:'grid', gap:8, marginTop:20 }}>
          <a href="/servicii">Servicii funerare</a>
          <a href="/sicrie">Sicrie / galerie</a>
          <a href="/recomandari">Recomandări</a>
          <a href="/gdpr">GDPR</a>
        </nav>
      </section>

      {/* Breadcrumb JSON-LD (Acasă) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context':'https://schema.org','@type':'BreadcrumbList',
          itemListElement:[{ '@type':'ListItem', position:1, name:'Acasă', item:'https://mementomori-psi.vercel.app' }]
        })
      }}/>
    </main>
  );
}
