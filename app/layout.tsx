// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

const siteName = "Memento Mori – Servicii funerare";
const siteUrl = "https://mementomori-psi.vercel.app"; // pune domeniul tău Vercel
const siteDesc =
  "Servicii funerare complete în București și Ilfov: transport funerar, sicrie, îmbălsămare, acte, coroane. Dispecerat 24/7 la +40 786 012 111.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Memento Mori",
  },
  description: siteDesc,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteName,
    description: siteDesc,
    siteName: "Memento Mori",
    locale: "ro_RO",
    images: [
      {
        url: "/og-cover.jpg", // opțional: pune o imagine 1200x630 în /public
        width: 1200,
        height: 630,
        alt: "Memento Mori – Servicii funerare complete",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDesc,
    images: ["/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>{children}</body>
      {/* JSON-LD LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FuneralHome",
            name: "Memento Mori",
            url: siteUrl,
            telephone: "+40786012111",
            address: {
              "@type": "PostalAddress",
              addressLocality: "București",
              addressCountry: "RO",
            },
            areaServed: ["București", "Ilfov"],
            openingHours: "Mo-Su 00:00-24:00",
            image: siteUrl + "/og-cover.jpg",
          }),
        }}
      />
    </html>
  );
}
