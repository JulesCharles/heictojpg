import type { Metadata } from "next";
import Link from "next/link";
import HeicConvertForm from "@/components/HeicConvertForm";

export const metadata: Metadata = {
  title: "Convertir HEIC en PNG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos photos iPhone HEIC en PNG avec transparence en un clic. Gratuit, rapide, sans inscription. Qualite sans perte.",
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
  description: "Convertissez vos photos HEIC en PNG sans perte de qualite.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Tout navigateur web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "fr",
};

export default function ConvertirHeicEnPng() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir HEIC en PNG gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos photos iPhone HEIC en images PNG sans perte de qualite.
          Le format PNG conserve la transparence et offre une qualite pixel-perfect.
          Gratuit, sans inscription, aucun fichier conserve.
        </p>
      </div>
      <div className="mb-16">
        <HeicConvertForm title="Convertir HEIC en PNG" outputFormat="png" outputExtension=".png" />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir HEIC en PNG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format PNG offre une compression sans perte, ce qui signifie que votre image conserve
            100% de sa qualite originale. Contrairement au JPG qui compresse avec perte, le PNG est
            ideal pour les images qui necessitent une qualite parfaite.
          </p>
          <p className="text-gray-600 mb-4">
            Le PNG supporte egalement la transparence (canal alpha), ce qui le rend indispensable
            pour les logos, les graphiques et les images destinees a etre superposees sur d&apos;autres contenus.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">HEIC en PNG vs HEIC en JPG</h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>PNG :</strong> qualite sans perte, transparence, fichiers plus lourds</li>
            <li>&bull; <strong>JPG :</strong> compression avec perte, pas de transparence, fichiers plus legers</li>
            <li>&bull; <strong>Choisissez PNG</strong> pour l&apos;edition photo, les logos, les captures d&apos;ecran</li>
            <li>&bull; <strong>Choisissez JPG</strong> pour le partage web, les emails, les reseaux sociaux</li>
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
          <Link href="/convertir-heic-en-webp" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; WebP</h3>
            <p className="text-sm text-gray-600">Format optimise pour le web moderne.</p>
          </Link>
          <Link href="/convertir-heic-en-pdf" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; PDF</h3>
            <p className="text-sm text-gray-600">Integrez vos photos dans un document PDF.</p>
          </Link>
          <Link href="/lire-metadonnees-heic" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Metadonnees HEIC</h3>
            <p className="text-sm text-gray-600">Lisez les donnees EXIF de vos fichiers HEIC.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
