import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://mementomori-psi.vercel.app"),
  title: "Memento Mori – Servicii funerare complete",
  description:
    "Respect pentru cei plecați, sprijin pentru cei rămași. Servicii funerare complete în București și Ilfov: preluare 24/7, pregătire decedat, sicrie, transport, acte, pomeni. Tel: +40 786 012 111.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://mementomori-psi.vercel.app",
    title: "Memento Mori – Servicii funerare complete",
    description:
      "Respect pentru cei plecați, sprijin pentru cei rămași. Intervenim rapid 24/7 în București și Ilfov.",
    images: [{ url: "/img/logo-memento.svg", width: 512, height: 512, alt: "Memento Mori" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        {/* HERO BACKDROP */}
        <div className="hero" aria-hidden="true" />

        {/* HEADER */}
        <header className="header">
          <div className="logoWrap">
            <img className="logo" src="/img/logo-memento.svg" alt="Memento Mori logo" />
            <div className="brand">
              <span className="brandTitle">Memento Mori</span>
              <span className="brandSub">Servicii funerare</span>
            </div>
          </div>

          <nav className="nav">
            <a href="/">Acasă</a>
            <a href="/servicii">Servicii</a>
            <a href="/sicrie">Sicrie / galerie</a>
            <a href="/recomandari">Recomandări</a>
            <a href="/gdpr">GDPR</a>
          </nav>

          <div className="actions">
            <a className="btn call" href="tel:+40786012111">📞 +40 786 012 111</a>
            <a
              className="btn whats"
              href="https://wa.me/40786012111"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact pe WhatsApp"
            >
              💬 WhatsApp
            </a>
          </div>
        </header>

        {/* CONȚINUT */}
        <main className="container">{children}</main>

        {/* BUTOANE PLUTITOARE (mobil) */}
        <div className="fabWrap" aria-hidden="false">
          <a className="fab whats" href="https://wa.me/40786012111" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            💬
          </a>
          <a className="fab call" href="tel:+40786012111" aria-label="Sună acum">
            📞
          </a>
        </div>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footerInner">
            <p className="slogan">Respect pentru cei plecați, sprijin pentru cei rămași.</p>
            <p className="copyright">© {new Date().getFullYear()} Memento Mori. Toate drepturile rezervate.</p>
            <p className="mini">
              <a href="/sitemap.xml">Sitemap</a> • <a href="/robots.txt">Robots</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
