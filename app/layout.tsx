import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Memento Mori – Servicii funerare complete",
  description:
    "Respect pentru cei plecați, sprijin pentru cei rămași. Servicii funerare complete în București și Ilfov: transport funerar, sicrie, obținere acte, organizare parastase.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ro">
      <body>
        {/* HEADER */}
        <header className="site-header">
          <div className="logo-wrap">
            <img src="/img/logo-memento.svg" alt="Memento Mori Logo" className="logo" />
            <h1 className="brand-title">Memento Mori</h1>
          </div>
          <nav className="main-nav">
            <a href="/servicii">Servicii</a>
            <a href="/sicrie">Sicrie / Galerie</a>
            <a href="/recomandari">Recomandări</a>
            <a href="/gdpr">GDPR</a>
          </nav>
          <a href="tel:+40786012111" className="btn-call-header">+40 786 012 111</a>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <h2>Respect pentru cei plecați, sprijin pentru cei rămași</h2>
            <p>Sprijin 24/7 în cele mai grele momente, servicii funerare complete în București și Ilfov.</p>
            <div className="hero-buttons">
              <a href="tel:+40786012111" className="btn-main">Sună acum</a>
              <a href="https://wa.me/40786012111" target="_blank" rel="noopener" className="btn-main whatsapp">
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* CONȚINUT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-inner">
            <p>Respect pentru cei plecați, sprijin pentru cei rămași © {new Date().getFullYear()} Memento Mori</p>
          </div>
        </footer>

        {/* Butoane plutitoare (mobil) */}
        <div className="fab-wrap">
          <a href="https://wa.me/40786012111" target="_blank" rel="noopener" className="fab whats">💬</a>
          <a href="tel:+40786012111" className="fab call">📞</a>
        </div>
      </body>
    </html>
  );
}
