import type { Metadata } from "next";
import { Geist, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
});

const SITE_URL = "https://pedistudio.ba";
const META_TITLE = "Pedi Studio | Medicinski Pedikir Sarajevo";
const META_DESCRIPTION =
  "Profesionalni medicinski pedikir i njega stopala u Sarajevu. Pružamo vrhunsku negu stopala i tretmane za zdravlje vaših nogu.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "medicinski pedikir",
    "pedikir Sarajevo",
    "njega stopala",
    "dijabetičko stopalo",
    "urasli nokat",
    "gljivične infekcije noktiju",
    "Pedi Studio",
    "sarajevo pedikir",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: SITE_URL,
    siteName: "Pedi Studio",
    locale: "bs_BA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Podiatrist"],
  name: "Pedi Studio",
  description: META_DESCRIPTION,
  url: SITE_URL,
  telephone: "+38761566787",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Srdjana Aleksica 14",
    addressLocality: "Sarajevo",
    addressRegion: "Kanton Sarajevo",
    postalCode: "71000",
    addressCountry: "BA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className={`${geistSans.variable} ${dmSerifDisplay.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
