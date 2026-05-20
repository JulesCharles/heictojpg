import type { Metadata } from "next";
import Link from "next/link";
import Client from "../convertir-jpg-en-pdf/client";
import PageHero from "@/components/PageHero";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Convertir AVIF en PDF Gratuit en Ligne | heictojpg.fr",
  description:
    "Convertissez vos images AVIF en document PDF. Transformez vos fichiers AVIF en PDF facilement partageables. Outil gratuit, rapide et sans inscription.",
  keywords: [
    "convertir avif en pdf",
    "avif en pdf",
    "avif to pdf",
    "image avif vers pdf",
    "avif pdf gratuit",
    "fichier avif en pdf",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-avif-en-pdf",
    siteName: "heictojpg.fr",
    title: "Convertir AVIF en PDF en ligne gratuitement",
    description:
      "Transformez vos images AVIF en document PDF. Gratuit, rapide et sans inscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir AVIF en PDF en ligne gratuitement",
    description:
      "Transformez vos images AVIF en document PDF. Gratuit et sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-avif-en-pdf",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertir AVIF en PDF",
      url: "https://heictojpg.fr/convertir-avif-en-pdf",
      description:
        "Convertissez vos images AVIF en document PDF gratuitement en ligne.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Qu'est-ce que le format AVIF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L'AVIF (AV1 Image File Format) est un format d'image moderne basé sur le codec vidéo AV1. Il offre une compression supérieure au JPEG et au WebP tout en conservant une excellente qualité visuelle.",
          },
        },
        {
          "@type": "Question",
          name: "La qualité AVIF est-elle préservée dans le PDF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, l'image AVIF est décodée puis intégrée dans le PDF avec une qualité optimale. Le rendu visuel est fidèle à l'original.",
          },
        },
        {
          "@type": "Question",
          name: "Tous les navigateurs supportent-ils la conversion AVIF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La plupart des navigateurs modernes (Chrome, Firefox, Safari récent) supportent le format AVIF. Si votre navigateur ne supporte pas l'AVIF, la conversion pourrait ne pas fonctionner.",
          },
        },
      ],
    },
  ],
};

export default function ConvertirAvifEnPdf() {
  return (
    <>
      <PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Convertir AVIF en PDF gratuitement
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images AVIF en un document PDF.
          Profitez de la qualité du format AVIF dans un document universel.
          Gratuit, rapide et sans inscription.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi convertir des AVIF en PDF ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format AVIF (AV1 Image File Format) est un format d&apos;image
            de nouvelle génération qui offre une compression supérieure au JPEG
            et au WebP tout en maintenant une qualité visuelle exceptionnelle.
            Développé par l&apos;Alliance for Open Media, il est de plus en plus
            adopté sur le web. Cependant, tous les logiciels ne prennent pas
            encore en charge ce format, ce qui rend la conversion en PDF
            particulièrement utile.
          </p>

          <p className="text-gray-600 mb-4">
            Convertir vos images AVIF en PDF vous permet de créer des documents
            universellement lisibles à partir de ce format moderne. Que ce soit
            pour partager des photographies, archiver des visuels ou préparer des
            documents pour l&apos;impression, le PDF garantit une compatibilité
            totale avec tous les appareils et systèmes d&apos;exploitation.
          </p>

          <p className="text-gray-600 mb-4">
            Notre outil décode vos fichiers AVIF directement dans le navigateur
            et les intègre dans un document PDF de haute qualité. Le traitement
            est local et sécurisé : aucun fichier n&apos;est envoyé sur un
            serveur. Vous pouvez ajouter plusieurs images AVIF pour créer un
            PDF multi-pages en quelques secondes.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Questions fréquentes
        </h2>

        <div className="prose prose-gray max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Qu&apos;est-ce que le format AVIF ?
          </h3>
          <p className="text-gray-600 mb-6">
            L&apos;AVIF (AV1 Image File Format) est un format d&apos;image
            moderne basé sur le codec vidéo AV1. Il offre une compression
            supérieure au JPEG et au WebP tout en conservant une excellente
            qualité visuelle. C&apos;est un format libre de droits, de plus en
            plus utilisé sur le web.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            La qualité AVIF est-elle préservée dans le PDF ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, l&apos;image AVIF est décodée par votre navigateur puis
            intégrée dans le PDF avec une qualité optimale. Le rendu visuel est
            fidèle à l&apos;original, adapté aussi bien à l&apos;affichage
            qu&apos;à l&apos;impression.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Tous les navigateurs supportent-ils la conversion AVIF ?
          </h3>
          <p className="text-gray-600 mb-6">
            La plupart des navigateurs modernes (Chrome, Firefox, Safari récent)
            supportent le format AVIF. Si votre navigateur ne supporte pas
            l&apos;AVIF nativement, la conversion pourrait ne pas fonctionner.
            Nous vous recommandons d&apos;utiliser la dernière version de votre
            navigateur.
          </p>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-avif-en-pdf" />

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
