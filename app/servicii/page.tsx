export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Memento Mori</h1>
      <p>Servicii funerare complete • +40 786 012 111</p>

      <nav style={{ display: 'grid', gap: 8, marginTop: 16 }}>
        <a href="/servicii">Servicii</a>
        <a href="/sicrie">Sicrie / Galerie</a>
        <a href="/recomandari">Recomandări</a>
        <a href="/gdpr">GDPR</a>
      </nav>
    </main>
  );
}
