import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memento Mori – Servicii funerare complete",
  description:
    "Servicii funerare complete în București și Ilfov: preluare rapidă, pregătire decedat, sicrie, transport intern/internațional, obținere acte, organizare parastas. Dispecerat 24/7.",
  metadataBase: new URL("https://mementomori-psi.vercel.app"),
  openGraph: {
    title: "Memento Mori – Servicii funerare complete",
    description:
      "Intervenim rapid non-stop în București și Ilfov. Contact: +40 786 012 111.",
    url: "https://mementomori-psi.vercel.app",
    siteName: "Memento Mori",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        <header className="header">
          <div className="container" style={{display:'flex',alignItems:'center',gap:16}}>
            <a href="/" className="brand">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 3l8 6v12H4V9l8-6Z" stroke="#d4af37" strokeWidth="1.5"/>
              </svg>
              <span>Memento Mori</span>
            </a>

            <nav className="menu">
              <a href="/servicii">Servicii</a>
              <a href="/sicrie">Sicrie / galerie</a>
              <a href="/recomandari">Recomandări</a>
              <a href="/gdpr">GDPR</a>
            </nav>

            <div className="spacer" />
            <a className="btn" href="tel:+40786012111">+40 786 012 111</a>
          </div>
        </header>

        <main className="container" style={{paddingTop:24}}>{children}</main>

        <footer className="footer">
          <div className="container">
            <div style={{marginBottom:8}}>
              Respect pentru cei plecați, sprijin pentru cei rămași.
            </div>
            <div>
              <a href="tel:+40786012111">Apel rapid</a> •{" "}
              <a href="https://wa.me/40786012111" target="_blank">WhatsApp</a>
            </div>
            <div style={{marginTop:8}}>© {new Date().getFullYear()} Memento Mori. Toate drepturile rezervate.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
