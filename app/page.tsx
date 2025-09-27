// app/page.tsx
export const metadata = {
  title: "Servicii funerare complete în București & Ilfov",
  description:
    "Asigurăm servicii funerare non-stop: constatare deces, îmbălsămare, sicrie, transport funerar, acte, organizare înmormântare. Dispecerat 24/7: +40 786 012 111.",
};

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Memento Mori – Servicii funerare complete</h1>
      <p>
        Oferim sprijin total în cele mai grele momente: preluare rapidă, pregătire
        decedat, sicrie și accesorii, transport funerar intern/internațional,
        obținere acte, organizare parastas. Dispecerat 24/7:{" "}
        <a href="tel:+40786012111">+40 786 012 111</a>.
      </p>

      <h2>De ce Memento Mori?</h2>
      <ul>
        <li>Intervenim rapid în București și Ilfov, non-stop.</li>
        <li>Servicii complete: de la acte până la organizarea ceremoniei.</li>
        <li>Transparență și pachete adaptate bugetului familiei.</li>
      </ul>

      <nav style={{ display: "grid", gap: 8, marginTop: 16 }}>
        <a href="/servicii">Servicii funerare</a>
        <a href="/sicrie">Sicrie / galerie</a>
        <a href="/recomandari">Recomandări</a>
        <a href="/gdpr">GDPR</a>
      </nav>

      <section style={{ marginTop: 24 }}>
        <h2>Acoperire</h2>
        <p>
          Intervenim în toate sectoarele din București și în localitățile din
          Ilfov. Pentru repatriere decedați, colaborăm cu parteneri internaționali.
        </p>
      </section>

      <p style={{ marginTop: 24 }}>
        <strong>Contact rapid:</strong>{" "}
        <a href="tel:+40786012111">+40 786 012 111</a> ·{" "}
        <a href="https://wa.me/40786012111" target="_blank">WhatsApp</a>
      </p>
    </main>
  );
}
