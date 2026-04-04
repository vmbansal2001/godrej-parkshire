import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const SITE_URL = "https://godrejparkshire.me";
const SITE_TITLE = "Godrej Parkshire | 2 & 3 BHK Apartments in Hoskote, East Bangalore";
const SITE_DESCRIPTION =
  "Godrej Parkshire by Godrej Properties — Premium 2 & 3 BHK apartments at Hoskote, East Bangalore. 14-acre township, 1130+ units, 20:80 payment plan. Starting at ₹1.20 Cr. RERA Registered.";
const OG_IMAGE = `${SITE_URL}/images/hero-banner.webp`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#b18e4e",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Godrej Parkshire",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Godrej Parkshire",
    "Godrej Properties",
    "apartments in Hoskote",
    "2 BHK apartments Bangalore",
    "3 BHK apartments Bangalore",
    "East Bangalore apartments",
    "Hoskote real estate",
    "pre-launch apartments Bangalore",
    "luxury apartments Bangalore",
    "Godrej Parkshire price",
    "Godrej Parkshire floor plan",
    "RERA registered apartments Bangalore",
  ],
  authors: [{ name: "Godrej Properties" }],
  creator: "Godrej Properties",
  publisher: "Godrej Properties",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Godrej Parkshire",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Godrej Parkshire - Premium Apartments at Hoskote, East Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

/* JSON-LD Structured Data for Real Estate */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateListing",
      name: "Godrej Parkshire",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      image: OG_IMAGE,
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "12000000",
        highPrice: "19700000",
        priceCurrency: "INR",
        offerCount: "1130",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hoskote",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "13.0707",
        longitude: "77.7956",
      },
    },
    {
      "@type": "Organization",
      name: "Godrej Properties",
      url: "https://www.godrejproperties.com",
      logo: `${SITE_URL}/images/project-logo-light.webp`,
      description:
        "Godrej Properties brings the Godrej Group philosophy of innovation, sustainability, and excellence to the real estate industry.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-montserrat)]">
        {children}
      </body>
    </html>
  );
}
