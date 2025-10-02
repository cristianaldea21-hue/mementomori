/* app/layout.tsx */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memento Mori – Servicii funerare complete în București & Ilfov",
  description:
    "Respect pentru cei plecați, sprijin pentru cei rămași. Preluare rapidă, îmbălsămare, sicrie, transport intern/extern, obținere acte, organizare parastas.",
  openGraph: {
    type: "website",
    url: "https://mementomori-psi.vercel.app",
    title: "Memento Mori – Servicii funerare complete",
    description:
      "Respect pentru cei plecați, sprijin pentru cei rămași. Servicii funerare în București & Ilfov.",
    images: [{ url: "/img/logo.png", width: 512, height: 512, alt: "Memento Mori" }],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        {/* ===== HEADER ===== */}
        <header className="header">
          <div className="container header-inner">
            <a href="/" className="brand" aria-label="Memento Mori - Acasă">
              <img src="/img/logo.png" alt="Memento Mori" />
              <span>Memento Mori</span>
            </a>

            <nav className="nav" aria-label="Navigare principală">
              <a href="/servicii">Servicii</a>
              <a href="/sicrie">Sicrie / galerie</a>
              <a href="/recomandari">Recomandări</a>
              <a href="/gdpr">GDPR</a>
              <a className="call-pill" href="tel:+40786012111">+40 786 012 111</a>
            </nav>
          </div>
        </header>

        {/* ===== CONȚINUT PAGINĂ ===== */}
        <main className="container">{children}</main>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          <div className="container footer-inner">
            Respect pentru cei plecați, sprijin pentru cei rămași © {new Date().getFullYear()} Memento Mori
          </div>
        </footer>

        {/* ===== Butoane plutitoare ===== */}
        <div className="fab-wrap" aria-hidden="false">
          <a className="fab wh" href="https://wa.me/40786012111" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            WA
          </a>
          <a className="fab call" href="tel:+40786012111" aria-label="Apel rapid">
            ☎
          </a>
        </div>
      </body>
    </html>
  );
}
