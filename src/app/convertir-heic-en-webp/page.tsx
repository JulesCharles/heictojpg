import type { Metadata } from "next";
import Link from "next/link";
import HeicConvertForm from "@/components/HeicConvertForm";

export const metadata: Metadata = {
  title: "Convertir HEIC en WebP en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos photos iPhone HEIC en WebP optimise pour le web. Gratuit, rapide, sans inscription. Meilleure compression que JPG.",
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
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir HEIC en WebP gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos photos iPhone HEIC en WebP, le format d&apos;image nouvelle generation de Google.
          Le WebP offre une compression superieure au JPG avec une qualite equivalente.
          Ideal pour optimiser vos images web.
        </p>
      </div>
      <div className="mb-16">
        <HeicConvertForm title="Convertir HEIC en WebP" outputFormat="webp" outputExtension=".webp" />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir HEIC en WebP ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le WebP est un format d&apos;image developpe par Google qui offre une compression
            25 a 35% superieure au JPG pour une qualite visuelle identique. C&apos;est le format
            recommande pour les sites web modernes.
          </p>
          <p className="text-gray-600 mb-4">
            En convertissant vos photos HEIC directement en WebP, vous obtenez des fichiers
            legers et optimises pour le web sans passer par l&apos;etape intermediaire du JPG.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Avantages du WebP</h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>Compression superieure :</strong> 25-35% plus leger que le JPG</li>
            <li>&bull; <strong>Transparence :</strong> supporte le canal alpha comme le PNG</li>
            <li>&bull; <strong>Animation :</strong> peut remplacer les GIF animes</li>
            <li>&bull; <strong>Compatible :</strong> supporte par Chrome, Firefox, Safari, Edge</li>
            <li>&bull; <strong>SEO :</strong> Google recommande le WebP pour le Core Web Vitals</li>
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Autres conversions HEIC</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; JPG</h3>
            <p className="text-sm text-gray-600">Le format le plus universel pour vos photos.</p>
          </Link>
          <Link href="/convertir-heic-en-png" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; PNG</h3>
            <p className="text-sm text-gray-600">Qualite sans perte avec transparence.</p>
          </Link>
          <Link href="/convertir-heic-en-pdf" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; PDF</h3>
            <p className="text-sm text-gray-600">Integrez vos photos dans un document PDF.</p>
          </Link>
          <Link href="/convertir-heic-en-gif" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; GIF</h3>
            <p className="text-sm text-gray-600">Convertissez en GIF pour la compatibilite.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
