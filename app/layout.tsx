import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

const SITE_URL = 'https://mementomori-psi.vercel.app';
const PHONE_E164 = '+40786012111';

export const metadata: Metadata = {
  title: {
    default: 'Memento Mori – Servicii funerare complete',
    template: '%s | Memento Mori'
  },
  description:
    'Respect pentru cei plecați, sprijin pentru cei rămași. Servicii funerare complete în București și Ilfov: preluare rapidă, pregătire decedat, sicrie și accesorii, acte, transport, parastas. Dispecerat 24/7.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Memento Mori – Servicii funerare complete',
    description:
      'Respect pentru cei plecați, sprijin pentru cei rămași. Intervenim rapid în București și Ilfov, 24/7.',
    url: SITE_URL,
    siteName: 'Memento Mori',
    type: 'website',
    images: [{ url: '/img/opengraph.png', width: 1200, height: 630, alt: 'Memento Mori' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Memento Mori – Servicii funerare complete',
    description: 'Respect pentru cei plecați, sprijin pentru cei rămași.',
    images: ['/img/opengraph.png']
  },
  icons: { icon: '/favicon.ico' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        {/* HEADER */}
        <header className="header">
          <nav className="nav">
            <a className="brand" href="/">
              <img src="/img/logo.png" alt="Memento Mori logo" />
              <b>Memento Mori</b>
            </a>
            <div className="navLinks">
              <a href="/servicii">Servicii</a>
              <a href="/sicrie">Sicrie / galerie</a>
              <a href="/recomandari">Recomandări</a>
              <a href="/gdpr">GDPR</a>
            </div>
            <div className="actions">
              <a className="callBtn" href={`tel:${PHONE_E164}`}>+40 786 012 111</a>
            </div>
          </nav>
        </header>

        {/* CONȚINUT */}
        {children}

        {/* FAB (WhatsApp + Apel) */}
        <div className="fabWrap" aria-hidden="false">
          <a className="fab whats" href="https://wa.me/40786012111?text=Buna%20ziua%2C%20doresc%20informatii%20despre%20serviciile%20funerare%20Memento%20Mori." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">💬</a>
          <a className="fab call" href={`tel:${PHONE_E164}`} aria-label="Apel rapid">📞</a>
        </div>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footerInner">
            <div className="slogan">Respect pentru cei plecați, sprijin pentru cei rămași</div>
            <div className="mini">© {new Date().getFullYear()} Memento Mori</div>
          </div>
        </footer>

        {/* Schema.org: Website + Organization + LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Memento Mori',
              url: SITE_URL,
              potentialAction: {
                '@type': 'SearchAction',
                target: `${SITE_URL}/?q={search_term_string}`,
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Memento Mori – Servicii funerare',
              url: SITE_URL,
              logo: `${SITE_URL}/img/logo.png`,
              contactPoint: [{
                '@type': 'ContactPoint',
                telephone: '+40-786-012-111',
                contactType: 'customer service',
                areaServed: 'RO',
                availableLanguage: ['ro']
              }]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Memento Mori',
              image: [`${SITE_URL}/img/logo.png`],
              url: SITE_URL,
              telephone: '+40-786-012-111',
              priceRange: '$$',
              areaServed: ['București', 'Ilfov'],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'București',
                addressCountry: 'RO'
              },
              openingHoursSpecification: [{
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                opens: '00:00',
                closes: '23:59'
              }]
            })
          }}
        />

        {/* (OPȚIONAL) Google Analytics – înlocuiește G-XXXXXXXXXX dacă ai ID; altfel lasă așa */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
