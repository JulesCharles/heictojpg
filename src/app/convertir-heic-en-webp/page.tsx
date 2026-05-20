import type { Metadata } from "next";
import HeicConvertForm from "@/components/HeicConvertForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Convertir HEIC en WebP en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos photos iPhone HEIC en WebP optimisé pour le web. Gratuit, rapide, sans inscription. Meilleure compression que JPG.",
  keywords: ["convertir heic en webp", "heic to webp", "heic webp gratuit", "photo iphone webp", "convertisseur heic webp"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-heic-en-webp",
    siteName: "heictojpg.fr",
    title: "Convertir HEIC en WebP gratuitement en ligne",
    description: "Convertissez vos photos iPhone HEIC en WebP. Gratuit, rapide, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-heic-en-webp" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Convertisseur HEIC en WebP",
  url: "https://heictojpg.fr/convertir-heic-en-webp",
  description: "Convertissez vos photos HEIC en WebP pour le web.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Tout navigateur web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "fr",
};

export default function ConvertirHeicEnWebp() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir HEIC en WebP", href: "/convertir-heic-en-webp" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir HEIC en WebP gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos photos iPhone HEIC en WebP, le format d&apos;image nouvelle génération de Google.
          Le WebP offre une compression supérieure au JPG avec une qualité équivalente.
          Idéal pour optimiser vos images web.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-16">
        <HeicConvertForm title="Convertir HEIC en WebP" outputFormat="webp" outputExtension=".webp" />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir HEIC en WebP ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le WebP est un format d&apos;image développé par Google qui offre une compression
            25 à 35% supérieure au JPG pour une qualité visuelle identique. C&apos;est le format
            recommandé pour les sites web modernes.
          </p>
          <p className="text-gray-600 mb-4">
            En convertissant vos photos HEIC directement en WebP, vous obtenez des fichiers
            légers et optimisés pour le web sans passer par l&apos;étape intermédiaire du JPG.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Avantages du WebP</h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>Compression supérieure :</strong> 25-35% plus léger que le JPG</li>
            <li>&bull; <strong>Transparence :</strong> supporte le canal alpha comme le PNG</li>
            <li>&bull; <strong>Animation :</strong> peut remplacer les GIF animés</li>
            <li>&bull; <strong>Compatible :</strong> supporté par Chrome, Firefox, Safari, Edge</li>
            <li>&bull; <strong>SEO :</strong> Google recommande le WebP pour le Core Web Vitals</li>
          </ul>
        </div>
      </div>
      <RelatedTools currentPath="/convertir-heic-en-webp" />
    </div>
    </>
  );
}
