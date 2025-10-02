export const metadata = {
  title: 'GDPR & Protecția datelor',
  description: 'Informații privind prelucrarea datelor personale conform GDPR. Drepturile persoanei vizate și date de contact.'
};

export default function GDPR() {
  return (
    <main className="intro container">
      <section className="card">
        <h1>GDPR</h1>
        <p>Operator: Memento Mori. Date prelucrate: nume, telefon, date necesare pentru contract și acte. Temei: executarea contractului și obligații legale. Drepturi: acces, rectificare, ștergere, restricționare, opoziție.</p>
        <p>Contact date: +40 786 012 111 • mementomori@example.com</p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context':'https://schema.org','@type':'BreadcrumbList',
          itemListElement:[
            { '@type':'ListItem', position:1, name:'Acasă', item:'https://mementomori-psi.vercel.app' },
            { '@type':'ListItem', position:2, name:'GDPR', item:'https://mementomori-psi.vercel.app/gdpr' }
          ]
        })
      }}/>
    </main>
  );
}
