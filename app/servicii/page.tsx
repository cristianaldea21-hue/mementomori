export const metadata = {
  title: 'Servicii funerare',
  description: 'Preluare rapidă, pregătire decedat, sicrie și accesorii, obținere acte, transport intern/internațional, organizare parastas. 24/7.'
};

export default function Servicii() {
  return (
    <main className="intro container">
      <section className="card">
        <h1>Servicii funerare</h1>
        <ul className="check">
          <li>✓ Preluare și transport funerar</li>
          <li>✓ Îmbălsămare, toaletare, cosmetizare</li>
          <li>✓ Sicrie, urne, coroane și accesorii</li>
          <li>✓ Obținere documente și programări</li>
          <li>✓ Organizare slujbă și parastas</li>
        </ul>
        <div style={{ marginTop: 16 }}>
          <a className="btn call" href="tel:+40786012111">Apel rapid</a>
          <a className="btn wa" href="https://wa.me/40786012111?text=Buna%20ziua%2C%20doresc%20detalii%20despre%20serviciile%20funerare." target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </section>

      {/* Breadcrumbs */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context':'https://schema.org','@type':'BreadcrumbList',
          itemListElement:[
            { '@type':'ListItem', position:1, name:'Acasă', item:'https://mementomori-psi.vercel.app' },
            { '@type':'ListItem', position:2, name:'Servicii', item:'https://mementomori-psi.vercel.app/servicii' }
          ]
        })
      }}/>
    </main>
  );
}
