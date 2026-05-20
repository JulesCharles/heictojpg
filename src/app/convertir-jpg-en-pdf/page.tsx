import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";
import PageHero from "@/components/PageHero";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Convertir JPG en PDF en ligne gratuit | heictojpg.fr",
  description:
    "Convertissez vos images JPG, PNG et WebP en un document PDF. Combinez plusieurs images en un seul PDF. Outil gratuit, rapide et sans inscription.",
  keywords: [
    "convertir jpg en pdf",
    "image en pdf",
    "jpg to pdf",
    "photo en pdf",
    "plusieurs images en pdf",
    "créer pdf depuis images",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-jpg-en-pdf",
    siteName: "heictojpg.fr",
    title: "Convertir JPG en PDF en ligne gratuitement",
    description:
      "Transformez vos images JPG en document PDF. Gratuit, rapide et sans inscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir JPG en PDF en ligne gratuitement",
    description:
      "Transformez vos images JPG en document PDF. Gratuit et sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-jpg-en-pdf",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertir JPG en PDF",
      url: "https://heictojpg.fr/convertir-jpg-en-pdf",
      description:
        "Convertissez vos images JPG, PNG et WebP en document PDF gratuitement.",
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
          name: "Peut-on combiner plusieurs images en un seul PDF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, vous pouvez ajouter autant d'images que vous le souhaitez. Elles seront toutes combinées dans un seul document PDF, chaque image occupant une page.",
          },
        },
        {
          "@type": "Question",
          name: "Quels formats d'image sont acceptés ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre outil accepte les formats JPG/JPEG, PNG et WebP. Vous pouvez même mélanger différents formats dans un même document PDF.",
          },
        },
        {
          "@type": "Question",
          name: "La qualité des images est-elle préservée dans le PDF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, les images sont intégrées dans le PDF avec une qualité optimale. Le document PDF résultant conserve un excellent rendu visuel de vos images.",
          },
        },
      ],
    },
  ],
};

export default function ConvertirJpgEnPdf() {
  return (
    <>
      <PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Convertir JPG en PDF gratuitement
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images JPG, PNG ou WebP en un document PDF.
          Ajoutez plusieurs images pour créer un PDF multi-pages. Outil
          gratuit, rapide et sans inscription.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi convertir vos images en PDF ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format PDF est le standard universel pour le partage de documents.
            Convertir vos images en PDF présente de nombreux avantages : un seul
            fichier à envoyer au lieu de plusieurs images séparées, une
            présentation professionnelle avec une mise en page cohérente, et une
            compatibilité garantie avec tous les appareils et systèmes
            d&apos;exploitation.
          </p>

          <p className="text-gray-600 mb-4">
            Que vous souhaitiez créer un portfolio photographique, assembler des
            pages scannées en un seul document, préparer une présentation ou
            simplement regrouper des captures d&apos;écran, la conversion
            d&apos;images en PDF est la solution la plus pratique. Notre outil
            vous permet de le faire instantanément, sans logiciel à installer
            et sans créer de compte.
          </p>

          <p className="text-gray-600 mb-4">
            Chaque image est placée sur une page séparée du PDF, en conservant
            ses proportions originales et en s&apos;adaptant au format de page
            standard. La qualité de vos images est préservée dans le document
            final. Vous pouvez ajouter des images de différentes tailles et
            orientations : notre outil s&apos;adapte automatiquement pour créer
            un PDF harmonieux.
          </p>

          <p className="text-gray-600 mb-4">
            Les cas d&apos;utilisation les plus courants incluent la création de
            dossiers administratifs (scans de documents d&apos;identité,
            factures, justificatifs), les portfolios photographiques, les
            rapports avec illustrations, l&apos;archivage de photos de famille,
            et la préparation de visuels pour l&apos;impression professionnelle.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Formats d&apos;image acceptés
          </h3>

          <ul className="text-gray-600 space-y-2">
            <li>
              • <strong>JPG / JPEG :</strong> le format photo le plus courant,
              idéal pour les photographies et les images riches en couleurs.
            </li>
            <li>
              • <strong>PNG :</strong> parfait pour les captures d&apos;écran,
              les graphiques et les images avec transparence.
            </li>
            <li>
              • <strong>WebP :</strong> format moderne offrant une excellente
              compression, de plus en plus utilisé sur le web.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Questions fréquentes
        </h2>

        <div className="prose prose-gray max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Peut-on combiner plusieurs images en un seul PDF ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, vous pouvez ajouter autant d&apos;images que vous le
            souhaitez. Elles seront toutes combinées dans un seul document PDF,
            chaque image occupant une page. L&apos;ordre des pages correspond à
            l&apos;ordre dans lequel vous ajoutez les images.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Quels formats d&apos;image sont acceptés ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre outil accepte les formats JPG/JPEG, PNG et WebP. Vous pouvez
            même mélanger différents formats dans un même document PDF. Toutes
            les images seront intégrées avec leur qualité originale.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            La qualité des images est-elle préservée dans le PDF ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, les images sont intégrées dans le PDF avec une qualité
            optimale (92% JPEG). Le document PDF résultant conserve un excellent
            rendu visuel, adapté aussi bien à l&apos;affichage à l&apos;écran
            qu&apos;à l&apos;impression.
          </p>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-jpg-en-pdf" />

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
