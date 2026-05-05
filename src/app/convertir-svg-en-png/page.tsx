import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir SVG en PNG en ligne gratuit | heictojpg.fr",
  description:
    "Convertissez vos fichiers SVG en PNG haute qualite en un clic. Outil gratuit, rapide et sans inscription.",
  keywords: [
    "convertir svg en png",
    "svg to png",
    "svg vers png gratuit",
    "convertisseur svg png",
    "svg en image png",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-svg-en-png",
    siteName: "heictojpg.fr",
    title: "Convertir SVG en PNG gratuitement en ligne",
    description: "Convertissez vos fichiers SVG en PNG en un clic. Gratuit, rapide, sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-svg-en-png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Convertisseur SVG en PNG",
  url: "https://heictojpg.fr/convertir-svg-en-png",
  description: "Convertissez vos fichiers SVG en PNG haute qualite gratuitement en ligne.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Tout navigateur web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "fr",
};

export default function ConvertirSvgEnPng() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Convertir SVG en PNG gratuitement
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos fichiers vectoriels SVG en images PNG haute resolution.
          Notre outil en ligne est rapide, securise et entierement gratuit.
          Aucune inscription requise.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="Convertir SVG en PNG"
          acceptedFormats=".svg,image/svg+xml"
          acceptLabel="Selectionner un fichier SVG"
          outputFormat="png"
          apiEndpoint="/api/svg-to-png"
          outputExtension=".png"
          acceptedExtensions={[".svg"]}
          acceptedMimeTypes={["image/svg+xml"]}
          errorMessage="Veuillez selectionner un fichier SVG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi convertir SVG en PNG ?
        </h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format SVG (Scalable Vector Graphics) est ideal pour les logos, icones et
            illustrations car il est vectoriel et donc redimensionnable sans perte de qualite.
            Cependant, de nombreux logiciels et plateformes ne supportent pas le SVG.
          </p>
          <p className="text-gray-600 mb-4">
            En convertissant vos SVG en PNG, vous obtenez des images compatibles avec tous
            les navigateurs, applications de messagerie, reseaux sociaux et logiciels de
            retouche photo.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Cas d&apos;utilisation
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>Reseaux sociaux :</strong> Instagram, Facebook et Twitter n&apos;acceptent pas les SVG</li>
            <li>&bull; <strong>Presentations :</strong> PowerPoint et Google Slides preferent le PNG</li>
            <li>&bull; <strong>Email :</strong> Les clients mail n&apos;affichent pas toujours les SVG correctement</li>
            <li>&bull; <strong>Impression :</strong> Le PNG offre une resolution fixe adaptee a l&apos;impression</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nos autres outils</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; JPG</h3>
            <p className="text-sm text-gray-600">Convertissez vos photos iPhone HEIC en JPG.</p>
          </Link>
          <Link href="/convertir-png-en-jpg" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">PNG &rarr; JPG</h3>
            <p className="text-sm text-gray-600">Reduisez la taille de vos PNG en JPG.</p>
          </Link>
          <Link href="/redimensionner-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Redimensionner</h3>
            <p className="text-sm text-gray-600">Changez la taille de vos images facilement.</p>
          </Link>
          <Link href="/compresser-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Compresser image</h3>
            <p className="text-sm text-gray-600">Reduisez le poids de vos images.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
