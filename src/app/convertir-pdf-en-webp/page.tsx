import type { Metadata } from "next";
import Link from "next/link";
import PdfToImageClient from "../convertir-pdf-en-jpg/client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Convertir PDF en WebP Gratuit en Ligne | heictojpg.fr",
  description: "Convertissez vos fichiers PDF en images WebP ultra-legeres. Extrayez chaque page en WebP pour un chargement rapide sur le web. Gratuit, sans inscription.",
  keywords: ["convertir pdf en webp", "pdf to webp", "pdf webp gratuit", "pdf vers webp", "extraire images pdf webp"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-pdf-en-webp",
    siteName: "heictojpg.fr",
    title: "Convertir PDF en WebP gratuitement",
    description: "Extrayez chaque page de votre PDF en image WebP legere. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-pdf-en-webp" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertir PDF en WebP",
      url: "https://heictojpg.fr/convertir-pdf-en-webp",
      description: "Convertissez vos fichiers PDF en images WebP ultra-legeres.",
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
          name: "Pourquoi convertir un PDF en WebP ?",
          acceptedAnswer: { "@type": "Answer", text: "Le format WebP offre une compression superieure au JPEG et au PNG tout en conservant une excellente qualite d'image. Il est ideal pour publier des pages de PDF sur le web avec un temps de chargement minimal." },
        },
        {
          "@type": "Question",
          name: "Le format WebP est-il compatible avec tous les navigateurs ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, tous les navigateurs modernes (Chrome, Firefox, Safari, Edge) supportent le WebP depuis 2020. Seuls les tres anciens navigateurs ne le reconnaissent pas." },
        },
      ],
    },
  ],
};

export default function ConvertirPdfEnWebp() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir PDF en WebP", href: "/convertir-pdf-en-webp" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir PDF en WebP gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Extrayez chaque page de votre document PDF en image WebP ultra-legere.
          Le format WebP offre une compression superieure au JPEG et au PNG, ideal pour le web.
          Vos pages sont converties en images nettes avec un poids reduit.
          Les PDF multi-pages sont telecharges dans un fichier ZIP.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <PdfToImageClient format="webp" title="Convertir PDF en WebP" />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir un PDF en WebP ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            La conversion PDF vers WebP est parfaite quand vous souhaitez publier des pages de PDF sur le web
            avec un temps de chargement minimal. Le WebP offre une compression jusqu&apos;a 30% superieure au JPEG
            tout en conservant une qualite d&apos;image remarquable.
          </p>
          <p className="text-gray-600 mb-4">
            Ce format est particulierement adapte pour integrer des pages de PDF dans des sites web,
            des blogs, des newsletters ou des applications mobiles. Le poids reduit des images WebP
            ameliore les performances de chargement et le referencement SEO de vos pages.
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
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi convertir un PDF en WebP ?</h3>
            <p className="text-gray-600 mb-4">Le format WebP offre une compression superieure au JPEG et au PNG tout en conservant une excellente qualite d&apos;image. Il est ideal pour publier des pages de PDF sur le web avec un temps de chargement minimal.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le format WebP est-il compatible avec tous les navigateurs ?</h3>
            <p className="text-gray-600 mb-4">Oui, tous les navigateurs modernes (Chrome, Firefox, Safari, Edge) supportent le WebP depuis 2020. Seuls les tres anciens navigateurs ne le reconnaissent pas.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-pdf-en-webp" />

      <div className="bg-blue-50 rounded-lg p-6 mt-8">
        <h3 className="font-semibold text-gray-800 mb-2">Vous cherchez une alternative gratuite a iLovePDF ?</h3>
        <p className="text-sm text-gray-600 mb-3">Decouvrez notre comparatif des 7 meilleures alternatives gratuites pour manipuler vos PDF en ligne.</p>
        <Link href="/blog/ilovepdf-alternatives-gratuites" className="text-sm font-medium text-blue-600 hover:text-blue-800">Lire l&apos;article &rarr;</Link>
      </div>
    </div>
    </>
  );
}
