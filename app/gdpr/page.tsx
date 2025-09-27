export const metadata = {
  title: "GDPR – Protecția datelor la Memento Mori",
  description:
    "Află cum prelucrăm datele personale în cadrul serviciilor funerare: temeiuri legale, scopuri, drepturile persoanelor vizate.",
};

export default function GDPR() {
  return (
    <main style={{ padding: 20 }}>
      <h1>GDPR</h1>
      <p><strong>Operator:</strong> Memento Mori. Date prelucrate: nume, telefon, date necesare pentru contract și acte.</p>
      <p><strong>Temei:</strong> executarea contractului și obligații legale.</p>
      <p><strong>Drepturi:</strong> acces, rectificare, ștergere, restricționare, opoziție.</p>
      <p><strong>Contact date:</strong> <a href="tel:+40786012111">+40 786 012 111</a> · mementomori@example.com</p>
    </main>
  );
}
