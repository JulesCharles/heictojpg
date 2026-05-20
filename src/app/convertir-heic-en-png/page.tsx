import type { Metadata } from "next";
import HeicConvertForm from "@/components/HeicConvertForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Convertir HEIC en PNG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos photos iPhone HEIC en PNG avec transparence en un clic. Gratuit, rapide, sans inscription. Qualité sans perte.",
  keywords: ["convertir heic en png", "heic to png", "heic png gratuit", "photo iphone png", "convertisseur heic png"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-heic-en-png",
    siteName: "heictojpg.fr",
    title: "Convertir HEIC en PNG gratuitement en ligne",
    description: "Convertissez vos photos iPhone HEIC en PNG en un clic. Gratuit, rapide, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-heic-en-png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Convertisseur HEIC en PNG",
  url: "https://heictojpg.fr/convertir-heic-en-png",
  description: "Convertissez vos photos HEIC en PNG sans perte de qualité.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Tout navigateur web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "fr",
};

export default function ConvertirHeicEnPng() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir HEIC en PNG", href: "/convertir-heic-en-png" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir HEIC en PNG gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos photos iPhone HEIC en images PNG sans perte de qualité.
          Le format PNG conserve la transparence et offre une qualité pixel-perfect.
          Gratuit, sans inscription, aucun fichier conservé.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-16">
        <HeicConvertForm title="Convertir HEIC en PNG" outputFormat="png" outputExtension=".png" />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir HEIC en PNG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format PNG offre une compression sans perte, ce qui signifie que votre image conserve
            100% de sa qualité originale. Contrairement au JPG qui compresse avec perte, le PNG est
            idéal pour les images qui nécessitent une qualité parfaite.
          </p>
          <p className="text-gray-600 mb-4">
            Le PNG supporte également la transparence (canal alpha), ce qui le rend indispensable
            pour les logos, les graphiques et les images destinées à être superposées sur d&apos;autres contenus.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">HEIC en PNG vs HEIC en JPG</h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>PNG :</strong> qualité sans perte, transparence, fichiers plus lourds</li>
            <li>&bull; <strong>JPG :</strong> compression avec perte, pas de transparence, fichiers plus légers</li>
            <li>&bull; <strong>Choisissez PNG</strong> pour l&apos;édition photo, les logos, les captures d&apos;écran</li>
            <li>&bull; <strong>Choisissez JPG</strong> pour le partage web, les emails, les réseaux sociaux</li>
          </ul>
        </div>
      </div>
      <RelatedTools currentPath="/convertir-heic-en-png" />
    </div>
    </>
  );
}
