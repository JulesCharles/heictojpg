import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";
import { frFR } from "@clerk/localizations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://heictojpg.fr'),
  title: {
    default: "Outils image et PDF en ligne gratuits | heictojpg.fr",
    template: "%s",
  },
  description: "Convertissez, compressez et editez vos images en ligne gratuitement. HEIC, JPG, PNG, WebP, SVG, PDF. Sans inscription, aucun fichier conserve.",
  keywords: ["convertir heic en jpg", "heic to jpg", "conversion heic", "photo iphone jpg", "heic gratuit", "convertisseur heic"],
  authors: [{ name: "heictojpg.fr" }],
  creator: "heictojpg.fr",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr",
    siteName: "heictojpg.fr",
    title: "Convertir HEIC en JPG gratuitement en ligne",
    description: "Convertissez vos photos iPhone HEIC en JPG en 1 clic. Gratuit, rapide, sans inscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir HEIC en JPG gratuitement en ligne",
    description: "Convertissez vos photos iPhone HEIC en JPG en 1 clic. Gratuit, rapide, sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr",
  },
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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.ico', type: 'image/x-icon' }
    ],
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={frFR}>
    <html lang="fr">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `}
        </Script>
        {/* End Google Tag Manager */}
        {/* Google AdSense */}
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen flex flex-col`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
