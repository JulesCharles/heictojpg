import type { Metadata } from "next";
import Link from "next/link";
import Client from "../convertir-jpg-en-pdf/client";
import PageHero from "@/components/PageHero";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Convertir TIFF en PDF Gratuit en Ligne | heictojpg.fr",
  description:
    "Convertissez vos images TIFF en document PDF. Idéal pour les scans et les impressions haute qualité. Outil gratuit, rapide et sans inscription.",
  keywords: [
    "convertir tiff en pdf",
    "tiff en pdf",
    "tiff to pdf",
    "scan tiff vers pdf",
    "tiff pdf gratuit",
    "image tiff en pdf",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-tiff-en-pdf",
    siteName: "heictojpg.fr",
    title: "Convertir TIFF en PDF en ligne gratuitement",
    description:
      "Transformez vos images TIFF en document PDF. Gratuit, rapide et sans inscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir TIFF en PDF en ligne gratuitement",
    description:
      "Transformez vos images TIFF en document PDF. Gratuit et sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-tiff-en-pdf",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertir TIFF en PDF",
      url: "https://heictojpg.fr/convertir-tiff-en-pdf",
      description:
        "Convertissez vos images TIFF en document PDF gratuitement en ligne.",
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
          name: "Le format TIFF est-il adapté pour créer des PDF de haute qualité ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, le format TIFF est un format sans perte qui conserve une qualité d'image maximale. La conversion en PDF préserve cette qualité, ce qui en fait un choix idéal pour les documents professionnels et les impressions.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on convertir plusieurs fichiers TIFF en un seul PDF multi-pages ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, vous pouvez ajouter autant de fichiers TIFF que nécessaire. Chaque image sera placée sur une page séparée du document PDF final.",
          },
        },
        {
          "@type": "Question",
          name: "La qualité de mes scans TIFF est-elle préservée dans le PDF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, vos scans TIFF sont intégrés dans le PDF avec une qualité optimale. Le rendu visuel est préservé, que ce soit pour l'affichage à l'écran ou pour l'impression.",
          },
        },
      ],
    },
  ],
};

export default function ConvertirTiffEnPdf() {
  return (
    <>
      <PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Convertir TIFF en PDF gratuitement
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images TIFF en un document PDF professionnel.
          Idéal pour les scans et les impressions haute qualité.
          Gratuit, rapide et sans inscription.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi convertir des TIFF en PDF ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format TIFF (Tagged Image File Format) est largement utilisé dans
            les domaines de l&apos;impression professionnelle, de la numérisation
            de documents et de la photographie haute qualité. C&apos;est un format
            sans perte qui conserve chaque détail de l&apos;image originale.
            Cependant, les fichiers TIFF sont souvent volumineux et difficiles à
            partager. La conversion en PDF permet de regrouper vos images TIFF en
            un seul document compact et universellement lisible.
          </p>

          <p className="text-gray-600 mb-4">
            La conversion de TIFF en PDF est particulièrement utile pour
            l&apos;archivage de scans de documents (contrats, factures, plans
            architecturaux), la création de portfolios photographiques
            professionnels, ou encore l&apos;envoi de planches de prépresse.
            Le format PDF garantit que vos images s&apos;afficheront de manière
            identique sur tous les appareils et systèmes d&apos;exploitation.
          </p>

          <p className="text-gray-600 mb-4">
            Notre outil place chaque image TIFF sur une page séparée du PDF en
            conservant les proportions et la qualité originales. Le traitement est
            effectué directement dans votre navigateur, sans envoi de fichiers sur
            un serveur, garantissant la confidentialité de vos documents.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Questions fréquentes
        </h2>

        <div className="prose prose-gray max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Le format TIFF est-il adapté pour créer des PDF de haute qualité ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, le format TIFF est un format sans perte qui conserve une qualité
            d&apos;image maximale. La conversion en PDF préserve cette qualité, ce
            qui en fait un choix idéal pour les documents professionnels, les
            impressions et les archives de haute fidélité.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Peut-on convertir plusieurs fichiers TIFF en un seul PDF multi-pages ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, vous pouvez ajouter autant de fichiers TIFF que nécessaire.
            Chaque image sera placée sur une page séparée du document PDF final.
            L&apos;ordre des pages correspond à l&apos;ordre dans lequel vous
            ajoutez les images.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            La qualité de mes scans TIFF est-elle préservée dans le PDF ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, vos scans TIFF sont intégrés dans le PDF avec une qualité
            optimale. Le rendu visuel est préservé, que ce soit pour
            l&apos;affichage à l&apos;écran ou pour l&apos;impression
            professionnelle.
          </p>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-tiff-en-pdf" />

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
