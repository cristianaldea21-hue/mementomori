export const metadata = {
  title: 'Recomandări',
  description: 'Pași după deces, acte necesare, programări și bune practici. Sprijin pentru familie, 24/7.'
};

export default function Recomandari() {
  return (
    <main className="intro container">
      <section className="card">
        <h1>Recomandări</h1>
        <ul className="check">
          <li>✓ Acte necesare și pași esențiali</li>
          <li>✓ Organizare eficientă a ceremoniei</li>
          <li>✓ Sprijin pentru decontări și beneficii</li>
        </ul>
        <div style={{ marginTop: 16 }}>
          <a className="btn call" href="tel:+40786012111">Apel rapid</a>
          <a className="btn wa" href="https://wa.me/40786012111?text=Buna%20ziua%2C%20am%20nevoie%20de%20indrumare%20pentru%20acte%20si%20organizare." target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context':'https://schema.org','@type':'BreadcrumbList',
          itemListElement:[
            { '@type':'ListItem', position:1, name:'Acasă', item:'https://mementomori-psi.vercel.app' },
            { '@type':'ListItem', position:2, name:'Recomandări', item:'https://mementomori-psi.vercel.app/recomandari' }
          ]
        })
      }}/>
    </main>
  );
}
