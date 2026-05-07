import type { Metadata } from "next";
import Link from "next/link";
import PdfToImageClient from "../convertir-pdf-en-jpg/client";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir PDF en PNG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos fichiers PDF en images PNG haute qualité. Extrayez chaque page en image sans perte. Gratuit, sans inscription.",
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
  description: "Convertissez vos fichiers PDF en images PNG haute qualité.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Tout navigateur web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "fr",
};

export default function ConvertirPdfEnPng() {
  return (
    <>
      <PageHero>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir PDF en PNG gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Extrayez chaque page de votre document PDF en image PNG haute qualité sans perte.
          Le format PNG conserve une netteté parfaite pour les textes, graphiques et tableaux.
          Idéal pour les présentations, les captures de documents et l&apos;archivage.
          Les PDF multi-pages sont téléchargés dans un fichier ZIP.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <PdfToImageClient format="png" title="Convertir PDF en PNG" />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir un PDF en PNG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            La conversion PDF vers PNG est idéale quand vous avez besoin d&apos;images de haute qualité
            sans aucun artefact de compression. Le PNG utilise une compression sans perte, ce qui
            garantit que chaque détail du document PDF est parfaitement préservé : textes nets,
            graphiques précis, tableaux lisibles.
          </p>
          <p className="text-gray-600 mb-4">
            Cette conversion est particulièrement utile pour intégrer des pages de PDF dans des
            présentations PowerPoint, des documents Word, des sites web, ou des publications sur
            les réseaux sociaux. Le PNG est reconnu par tous les logiciels et toutes les plateformes.
          </p>
          <p className="text-gray-600 mb-4">
            Choisissez la qualité de sortie selon votre usage : 72 DPI pour un affichage web rapide,
            150 DPI pour un usage standard, ou 300 DPI pour une qualité d&apos;impression professionnelle.
            Plus le DPI est élevé, plus l&apos;image sera grande et détaillée.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Autres outils PDF</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/convertir-pdf-en-jpg" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">PDF &rarr; JPG</h3>
            <p className="text-sm text-gray-600">Images plus légères pour le web.</p>
          </Link>
          <Link href="/fusionner-pdf" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Fusionner PDF</h3>
            <p className="text-sm text-gray-600">Combinez plusieurs PDF en un.</p>
          </Link>
          <Link href="/compresser-pdf" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Compresser PDF</h3>
            <p className="text-sm text-gray-600">Réduisez la taille de vos PDF.</p>
          </Link>
        </div>
      </div>

      {/* Article recommande */}
      <div className="bg-blue-50 rounded-lg p-6 mt-8">
        <h3 className="font-semibold text-gray-800 mb-2">Vous cherchez une alternative gratuite a iLovePDF ?</h3>
        <p className="text-sm text-gray-600 mb-3">Decouvrez notre comparatif des 7 meilleures alternatives gratuites pour manipuler vos PDF en ligne.</p>
        <Link href="/blog/ilovepdf-alternatives-gratuites" className="text-sm font-medium text-blue-600 hover:text-blue-800">Lire l&apos;article &rarr;</Link>
      </div>
    </div>
    </>
  );
}
