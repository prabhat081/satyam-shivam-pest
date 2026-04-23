import { Toaster } from "react-hot-toast";

import Script from "next/script";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PluginScripts from "@/components/PluginScripts";
import FloatingContactButtons from "@/components/FloatingContactButtons";

/**
 * 🔥 GLOBAL SEO CONFIG (Used across all pages)
 */
export const metadata = {
  metadataBase: new URL("https://satyamshivampestcontrol.in"),

  title: {
    default: "Best Pest Control Services in Patna",
    template: "%s | Satyam Shivam Pest Control",
  },

  description:
    "Professional pest control services in Patna. Get termite, mosquito, cockroach & rodent control with guaranteed results and affordable pricing.",

  keywords: [
    "pest control patna",
    "termite control patna",
    "mosquito control patna",
    "rat control patna",
    "cockroach control patna",
    "pest control bihar",
  ],

  alternates: {
    canonical: "https://satyamshivampestcontrol.in",
  },

  /**
   * 🔥 OPEN GRAPH (Facebook / WhatsApp / LinkedIn)
   */
  openGraph: {
    title: "Best Pest Control Services in Patna",
    description:
      "Affordable and professional pest control services in Patna with 100% guarantee.",
    url: "https://satyamshivampestcontrol.in",
    siteName: "Satyam Shivam Pest Control",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control Services in Patna",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /**
   * 🔥 TWITTER SEO
   */
  twitter: {
    card: "summary_large_image",
    title: "Best Pest Control in Patna",
    description:
      "Book professional termite, mosquito & rodent control services in Patna.",
    images: ["/images/og.jpg"],
  },

  /**
   * 🔥 SEARCH ENGINE RULES
   */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  /**
   * 🔥 ICONS
   */
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};
export default function RootLayout({ children }) {

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Satyam Shivam Pest Control",
    image: "https://satyamshivampestcontrol.in/images/logo.png",
    url: "https://satyamshivampestcontrol.in",
    telephone: "+91 7352671666",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Kanti factory road, new colony, Mahatma Gandhi Nagar",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "800020",
      addressCountry: "IN",
    },
    areaServed: "Patna",
    priceRange: "₹₹",
    openingHours: "Mo-Su 00:00-23:59",
  };


  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        {/* CSS */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/slicknav.min.css" rel="stylesheet" />
        <link href="/css/swiper-bundle.min.css" rel="stylesheet" />
        <link href="/css/all.min.css" rel="stylesheet" />
        <link href="/css/animate.css" rel="stylesheet" />
        <link href="/css/magnific-popup.css" rel="stylesheet" />
        <link href="/css/mousecursor.css" rel="stylesheet" />
        <link href="/css/custom.css" rel="stylesheet" />
      </head>

      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
        <Loader />
        <Toaster position="top-right" reverseOrder={false} />
        <Header />

        {children}

        <Footer />
        <PluginScripts />
        <FloatingContactButtons />

      </body>
    </html>
  );
}