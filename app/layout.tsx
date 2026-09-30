import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import DemoBanner from "@/components/DemoBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { services, site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} | Dentista en Machala, El Oro`,
    template: `%s | ${site.fullName} · Machala`,
  },
  description:
    "Clínica dental en Machala: diseño de sonrisa, implantes, ortodoncia invisible, blanqueamiento y endodoncia con planificación digital. Agenda tu valoración por WhatsApp.",
  keywords: ["dentista Machala", "clínica dental Machala", "implantes dentales Machala", "ortodoncia Machala", "carillas Machala", "odontólogo El Oro"],
  openGraph: {
    type: "website",
    locale: "es_EC",
    siteName: site.fullName,
  },
  robots: site.demo ? { index: false, follow: false } : { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#faf7f2",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.fullName,
  url: site.url,
  telephone: `+${site.whatsapp}`,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: "EC",
  },
  areaServed: "Machala",
  availableService: services.map((s) => ({ "@type": "MedicalProcedure", name: s.name })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-EC" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="grain">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <DemoBanner />
      </body>
    </html>
  );
}
