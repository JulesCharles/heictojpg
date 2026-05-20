import type { Metadata } from "next";
import Link from "next/link";
import PdfToImageClient from "../convertir-pdf-en-jpg/client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Convertir PDF en AVIF Gratuit en Ligne | heictojpg.fr",
  description: "Convertissez vos fichiers PDF en images AVIF ultra-compactes. Extrayez chaque page en AVIF pour un poids minimal et une qualite optimale. Gratuit, sans inscription.",
  keywords: ["convertir pdf en avif", "pdf to avif", "pdf avif gratuit", "pdf vers avif", "extraire images pdf avif"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-pdf-en-avif",
    siteName: "heictojpg.fr",
    title: "Convertir PDF en AVIF gratuitement",
    description: "Extrayez chaque page de votre PDF en image AVIF ultra-compacte. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-pdf-en-avif" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertir PDF en AVIF",
      url: "https://heictojpg.fr/convertir-pdf-en-avif",
      description: "Convertissez vos fichiers PDF en images AVIF ultra-compactes.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Qu'est-ce que le format AVIF ?",
          acceptedAnswer: { "@type": "Answer", text: "L'AVIF (AV1 Image File Format) est un format d'image de nouvelle generation base sur le codec video AV1. Il offre une compression jusqu'a 50% superieure au JPEG pour une qualite equivalente, ce qui en fait le format le plus compact disponible aujourd'hui." },
        },
        {
          "@type": "Question",
          name: "Le format AVIF est-il compatible avec mon appareil ?",
          acceptedAnswer: { "@type": "Answer", text: "Les navigateurs Chrome, Firefox et Safari supportent l'AVIF. Windows 11 et macOS Ventura (et versions ulterieures) peuvent ouvrir les fichiers AVIF nativement. Pour les systemes plus anciens, vous devrez peut-etre installer un plugin." },
        },
      ],
    },
  ],
};

export default function ConvertirPdfEnAvif() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir PDF en AVIF", href: "/convertir-pdf-en-avif" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir PDF en AVIF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Extrayez chaque page de votre document PDF en image AVIF ultra-compacte.
          Le format AVIF offre la meilleure compression disponible aujourd&apos;hui,
          avec des fichiers jusqu&apos;a 50% plus legers que le JPEG pour une qualite equivalente.
          Les PDF multi-pages sont telecharges dans un fichier ZIP.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <PdfToImageClient format="avif" title="Convertir PDF en AVIF" />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir un PDF en AVIF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            La conversion PDF vers AVIF est ideale pour obtenir des images de la plus petite taille possible
            tout en conservant une excellente qualite visuelle. L&apos;AVIF est le format de nouvelle generation
            qui surpasse le JPEG et meme le WebP en termes de compression.
          </p>
          <p className="text-gray-600 mb-4">
            Ce format est particulierement adapte pour les sites web et applications qui recherchent
            les meilleures performances de chargement. Les images AVIF reduisent considerablement
            la bande passante necessaire, ce qui ameliore l&apos;experience utilisateur et le referencement.
          </p>
          <p className="text-gray-600 mb-4">
            Choisissez la qualite de sortie selon votre usage : 72 DPI pour un affichage web rapide,
            150 DPI pour un usage standard, ou 300 DPI pour une qualite elevee.
            Plus le DPI est eleve, plus l&apos;image sera grande et detaillee.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Qu&apos;est-ce que le format AVIF ?</h3>
            <p className="text-gray-600 mb-4">L&apos;AVIF (AV1 Image File Format) est un format d&apos;image de nouvelle generation base sur le codec video AV1. Il offre une compression jusqu&apos;a 50% superieure au JPEG pour une qualite equivalente, ce qui en fait le format le plus compact disponible aujourd&apos;hui.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le format AVIF est-il compatible avec mon appareil ?</h3>
            <p className="text-gray-600 mb-4">Les navigateurs Chrome, Firefox et Safari supportent l&apos;AVIF. Windows 11 et macOS Ventura (et versions ulterieures) peuvent ouvrir les fichiers AVIF nativement. Pour les systemes plus anciens, vous devrez peut-etre installer un plugin.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-pdf-en-avif" />

      <div className="bg-blue-50 rounded-lg p-6 mt-8">
        <h3 className="font-semibold text-gray-800 mb-2">Vous cherchez une alternative gratuite a iLovePDF ?</h3>
        <p className="text-sm text-gray-600 mb-3">Decouvrez notre comparatif des 7 meilleures alternatives gratuites pour manipuler vos PDF en ligne.</p>
        <Link href="/blog/ilovepdf-alternatives-gratuites" className="text-sm font-medium text-blue-600 hover:text-blue-800">Lire l&apos;article &rarr;</Link>
      </div>
    </div>
    </>
  );
}
