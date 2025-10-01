// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memento Mori – Servicii funerare complete",
  description:
    "Servicii funerare complete în București & Ilfov: preluare rapidă, pregătire decedat, sicrie & accesorii, transport funerar intern/internațional, obținere acte, parastas. Contact 24/7: +40 786 012 111.",
  openGraph: {
    title: "Memento Mori – Servicii funerare complete",
    description:
      "Respect pentru cei plecați, sprijin pentru cei rămași. Intervenim 24/7, discret și organizat.",
    url: "https://mementomori-psi.vercel.app",
    siteName: "Memento Mori",
    images: [{ url: "/img/og-hero.jpg", width: 1200, height: 630, alt: "Memento Mori" }],
    locale: "ro_RO",
    type: "website",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        <header className="header" role="banner">
          <div className="header-inner container">
            <a href="/" className="brand" aria-label="Memento Mori – Acasă">
              <img src="/img/logo-memento.png" width={46} height={46} alt="Memento Mori" className="logo" />
              <div>
                <div>Memento Mori</div>
                <div className="small">Servicii funerare</div>
              </div>
            </a>

            <nav className="nav" aria-label="Navigație principală">
              <a href="/" className="active">Acasă</a>
              <a href="/servicii">Servicii</a>
              <a href="/sicrie">Sicrie / galerie</a>
              <a href="/recomandari">Recomandări</a>
              <a href="/gdpr">GDPR</a>
            </nav>

            <div style={{ display:"flex", gap:8 }}>
              <a className="whats" href="https://wa.me/40786012111" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                WhatsApp
              </a>
              <a className="call" href="tel:+40786012111" aria-label="Apelează +40 786 012 111">+40 786 012 111</a>
            </div>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="footer">
          <div className="container">
            <div className="slogan">Respect pentru cei plecați, sprijin pentru cei rămași.</div>
            <div className="small">© {new Date().getFullYear()} Memento Mori</div>
          </div>
        </footer>

        {/* Acțiuni rapide plutitoare (mobil) */}
        <div className="fabs" aria-hidden="false">
          <a className="fab whats" href="https://wa.me/40786012111" target="_blank" rel="noopener noreferrer" aria-label="Deschide WhatsApp" title="WhatsApp">WA</a>
          <a className="fab call" href="tel:+40786012111" aria-label="Apelează acum" title="Apelează">☎</a>
        </div>
      </body>
    </html>
  );
}
