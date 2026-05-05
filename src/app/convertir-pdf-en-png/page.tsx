import type { Metadata } from "next";
import Link from "next/link";
import PdfToImageClient from "../convertir-pdf-en-jpg/client";

export const metadata: Metadata = {
  title: "Convertir PDF en PNG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos fichiers PDF en images PNG haute qualite. Extrayez chaque page en image sans perte. Gratuit, sans inscription.",
  keywords: ["convertir pdf en png", "pdf to png", "pdf png gratuit", "pdf vers png", "extraire images pdf png"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-pdf-en-png",
    siteName: "heictojpg.fr",
    title: "Convertir PDF en PNG gratuitement",
    description: "Extrayez chaque page de votre PDF en image PNG. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-pdf-en-png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Convertir PDF en PNG",
  url: "https://heictojpg.fr/convertir-pdf-en-png",
  description: "Convertissez vos fichiers PDF en images PNG haute qualite.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Tout navigateur web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "fr",
};

export default function ConvertirPdfEnPng() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir PDF en PNG gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Extrayez chaque page de votre document PDF en image PNG haute qualite sans perte.
          Le format PNG conserve une nettete parfaite pour les textes, graphiques et tableaux.
          Ideal pour les presentations, les captures de documents et l&apos;archivage.
          Les PDF multi-pages sont telecharges dans un fichier ZIP.
        </p>
      </div>

      <div className="mb-16">
        <PdfToImageClient format="png" title="Convertir PDF en PNG" />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir un PDF en PNG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            La conversion PDF vers PNG est ideale quand vous avez besoin d&apos;images de haute qualite
            sans aucun artefact de compression. Le PNG utilise une compression sans perte, ce qui
            garantit que chaque detail du document PDF est parfaitement preserve : textes nets,
            graphiques precis, tableaux lisibles.
          </p>
          <p className="text-gray-600 mb-4">
            Cette conversion est particulierement utile pour integrer des pages de PDF dans des
            presentations PowerPoint, des documents Word, des sites web, ou des publications sur
            les reseaux sociaux. Le PNG est reconnu par tous les logiciels et toutes les plateformes.
          </p>
          <p className="text-gray-600 mb-4">
            Choisissez la qualite de sortie selon votre usage : 72 DPI pour un affichage web rapide,
            150 DPI pour un usage standard, ou 300 DPI pour une qualite d&apos;impression professionnelle.
            Plus le DPI est eleve, plus l&apos;image sera grande et detaillee.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Autres outils PDF</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/convertir-pdf-en-jpg" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">PDF &rarr; JPG</h3>
            <p className="text-sm text-gray-600">Images plus legeres pour le web.</p>
          </Link>
          <Link href="/fusionner-pdf" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Fusionner PDF</h3>
            <p className="text-sm text-gray-600">Combinez plusieurs PDF en un.</p>
          </Link>
          <Link href="/compresser-pdf" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Compresser PDF</h3>
            <p className="text-sm text-gray-600">Reduisez la taille de vos PDF.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
