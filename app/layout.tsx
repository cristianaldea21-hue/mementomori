
import "./globals.css";

export const metadata = {
  title: "Memento Mori – Servicii funerare",
  description: "Respect pentru cei plecați, sprijin pentru cei rămași. Servicii funerare complete 24/7, București & Ilfov.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        <header className="site-header">
          <a className="brand" href="/">
            <img src="/logo.png" alt="Memento Mori" />
            <div>
              <div className="title">Memento Mori</div>
              <div className="subtitle">Servicii funerare</div>
            </div>
          </a>

          <nav className="nav">
            <a href="/servicii">Servicii</a>
            <a href="/sicrie">Sicrie</a>
            <a href="/recomandari">Recomandări</a>
            <a href="/gdpr">GDPR</a>
          </nav>

          <a className="cta" href="tel:+40786012111">📞 +40 786 012 111</a>
        </header>

        {children}

        <footer className="site-footer">
          <p>Respect pentru cei plecați, sprijin pentru cei rămași.</p>
          <p>
            <a className="cta" href="tel:+40786012111">Apel rapid</a> ·{" "}
            <a className="cta" href="https://wa.me/40786012111" target="_blank">WhatsApp</a>
          </p>
          <small>© {new Date().getFullYear()} Memento Mori. Toate drepturile rezervate.</small>
        </footer>
      </body>
    </html>
  );
}
