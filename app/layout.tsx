// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://mementomori-psi.vercel.app"),
  title: {
    default: "Memento Mori – Servicii funerare complete",
    template: "%s | Memento Mori",
  },
  description:
    "Servicii funerare complete în București și Ilfov: preluare rapidă, pregătire decedat, sicrie și accesorii, transport funerar intern/internațional, obținere acte, parastas. Dispecerat 24/7: +40 786 012 111.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://mementomori-psi.vercel.app",
    siteName: "Memento Mori",
    title: "Memento Mori – Servicii funerare complete",
    description:
      "Oferim sprijin complet: preluare rapidă, pregătire decedat, sicrie și accesorii, transport funerar, obținere acte, organizare parastas. 24/7: +40 786 012 111.",
    images: [
      {
        url: "/logo.png",
        width: 600,
        height: 600,
        alt: "Memento Mori",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Memento Mori – Servicii funerare București & Ilfov",
    description:
      "Servicii funerare complete, transparente, disponibile 24/7. +40 786 012 111.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        {/* ======= Header / Meniu ======= */}
        <header className="site-header" style={{ borderBottom: "1px solid #333" }}>
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              padding: "12px 16px",
            }}
          >
            <a
              href="/"
              style={{
                fontWeight: 700,
                textDecoration: "none",
                color: "#ffd166",
                fontSize: 18,
              }}
              aria-label="Memento Mori - Acasă"
            >
              Memento Mori
            </a>

            <nav style={{ display: "flex", gap: 16 }}>
              <a href="/servicii" style={{ color: "#ffd166", textDecoration: "none" }}>
                Servicii
              </a>
              <a href="/sicrie" style={{ color: "#ffd166", textDecoration: "none" }}>
                Sicrie / galerie
              </a>
              <a href="/recomandari" style={{ color: "#ffd166", textDecoration: "none" }}>
                Recomandări
              </a>
              <a href="/gdpr" style={{ color: "#ffd166", textDecoration: "none" }}>
                GDPR
              </a>
            </nav>

            <a
              href="tel:+40786012111"
              style={{
                background: "#ffd166",
                color: "#1a1a1a",
                padding: "8px 12px",
                borderRadius: 8,
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              aria-label="Sună acum +40 786 012 111"
            >
              +40 786 012 111
            </a>
          </div>
        </header>

        {/* ======= Conținut pagină ======= */}
        <main className="container" style={{ padding: "24px 16px", maxWidth: 1100, margin: "0 auto" }}>
          {children}
        </main>

        {/* ======= Footer ======= */}
        <footer
          className="footer"
          style={{
            borderTop: "1px solid #333",
            padding: "24px 16px",
            marginTop: 32,
          }}
        >
          <div className="container" style={{ maxWidth: 1100, margin: "0 auto", color: "#aaa" }}>
            <p style={{ margin: 0 }}>
              <strong>Respect pentru cei plecați, sprijin pentru cei rămași</strong> • ©{" "}
              {new Date().getFullYear()} Memento Mori. Toate drepturile rezervate.
            </p>
            <p style={{ margin: "6px 0 0 0" }}>
              Contact rapid: <a href="tel:+40786012111" style={{ color: "#ffd166" }}>+40 786 012 111</a> •{" "}
              <a href="https://wa.me/40786012111" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366" }}>
                WhatsApp
              </a>
            </p>
          </div>
        </footer>

        {/* ======= JSON-LD: LocalBusiness / FuneralHome ======= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "FuneralHome",
                "name": "Memento Mori",
                "url": "https://mementomori-psi.vercel.app",
                "telephone": "+40 786 012 111",
                "email": "mementomori@example.com",
                "slogan": "Respect pentru cei plecați, sprijin pentru cei rămași",
                "description":
                  "Servicii funerare complete în București și Ilfov: preluare rapidă, pregătire decedat, sicrie și accesorii, transport funerar intern/internațional, obținere acte, organizare parastas. Dispecerat 24/7.",
                "image": "https://mementomori-psi.vercel.app/logo.png",
                "logo": "https://mementomori-psi.vercel.app/logo.png",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "—",
                  "addressLocality": "București",
                  "addressRegion": "Ilfov",
                  "postalCode": "—",
                  "addressCountry": "RO"
                },
                "geo": { "@type": "GeoCoordinates", "latitude": 44.4268, "longitude": 26.1025 },
                "areaServed": [
                  { "@type": "AdministrativeArea", "name": "București" },
                  { "@type": "AdministrativeArea", "name": "Ilfov" }
                ],
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                    "opens": "00:00",
                    "closes": "23:59"
                  }
                ],
                "paymentAccepted": ["Cash", "Card"],
                "priceRange": "€€",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Servicii funerare",
                  "itemListElement": [
                    { "@type": "Offer", "name": "Pachet Standard Domiciliu", "itemOffered": { "@type": "Service", "serviceType": "Servicii funerare – de la domiciliu" } },
                    { "@type": "Offer", "name": "Pachet Standard Spital", "itemOffered": { "@type": "Service", "serviceType": "Servicii funerare – de la spital" } },
                    { "@type": "Offer", "name": "Pachet Social", "itemOffered": { "@type": "Service", "serviceType": "Pachet social" } },
                    { "@type": "Offer", "name": "Repatriere decedați", "itemOffered": { "@type": "Service", "serviceType": "Repatriere internațională" } }
                  ]
                },
                "sameAs": [
                  "https://www.facebook.com/CONTUL_TAU",
                  "https://www.instagram.com/CONTUL_TAU",
                  "https://maps.google.com/?q=Memento+Mori+Bucuresti"
                ],
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "contactType": "Servicii funerare 24/7",
                    "telephone": "+40 786 012 111",
                    "availableLanguage": ["ro","en"]
                  }
                ]
              },
              null,
              2
            ),
          }}
        />

        {/* ======= JSON-LD: WebSite + SearchAction ======= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Memento Mori",
                "url": "https://mementomori-psi.vercel.app",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://mementomori-psi.vercel.app/?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              null,
              2
            ),
          }}
        />
      </body>
    </html>
  );
}
