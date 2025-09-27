export const metadata = {
  title: "Servicii funerare: preluare, acte, sicrie, transport, organizare",
  description:
    "Servicii funerare complete: constatare deces, toaletare/îmbălsămare, sicrie și accesorii, coroane, transport funerar, obținere acte și organizare ceremonie.",
};

export default function Servicii() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Servicii funerare</h1>
      <h2>Pachete</h2>
      <ul>
        <li>Pachet Standard Domiciliu</li>
        <li>Pachet Standard Spital</li>
        <li>Pachet Social</li>
        <li>Repatriere decedați</li>
      </ul>

      <h2>Ce include</h2>
      <ul>
        <li>Preluare și transport funerar</li>
        <li>Toaletare și îmbălsămare</li>
        <li>Sicrie și accesorii</li>
        <li>Obținere acte, programări cimitir/crematoriu</li>
      </ul>

      <p>
        Pentru ofertă și disponibilitate:{" "}
        <a href="tel:+40786012111">+40 786 012 111</a>.
      </p>
    </main>
  );
}
