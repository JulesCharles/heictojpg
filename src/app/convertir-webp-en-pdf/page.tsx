import type { Metadata } from "next";
import Link from "next/link";
import Client from "../convertir-jpg-en-pdf/client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Convertir WebP en PDF Gratuit en Ligne | heictojpg.fr",
  description:
    "Convertissez vos images WebP en document PDF. Transformez vos fichiers WebP en PDF facilement partageables. Outil gratuit, rapide et sans inscription.",
  keywords: [
    "convertir webp en pdf",
    "webp en pdf",
    "webp to pdf",
    "image webp vers pdf",
    "webp pdf gratuit",
    "fichier webp en pdf",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-webp-en-pdf",
    siteName: "heictojpg.fr",
    title: "Convertir WebP en PDF en ligne gratuitement",
    description:
      "Transformez vos images WebP en document PDF. Gratuit, rapide et sans inscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir WebP en PDF en ligne gratuitement",
    description:
      "Transformez vos images WebP en document PDF. Gratuit et sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-webp-en-pdf",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertir WebP en PDF",
      url: "https://heictojpg.fr/convertir-webp-en-pdf",
      description:
        "Convertissez vos images WebP en document PDF gratuitement en ligne.",
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
          name: "Qu'est-ce que le format WebP ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le WebP est un format d'image développé par Google qui offre une excellente compression tout en conservant une bonne qualité visuelle. Il est très utilisé sur le web pour réduire le poids des pages.",
          },
        },
        {
          "@type": "Question",
          name: "La qualité WebP est-elle préservée dans le PDF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, l'image WebP est décodée puis intégrée dans le PDF avec une qualité optimale. Le rendu visuel est fidèle à l'original.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on combiner des WebP avec d'autres formats dans un PDF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre outil accepte les images WebP, JPG, PNG et d'autres formats. Vous pouvez mélanger librement ces formats dans un même document PDF.",
          },
        },
      ],
    },
  ],
};

export default function ConvertirWebpEnPdf() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir WebP en PDF", href: "/convertir-webp-en-pdf" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Convertir WebP en PDF gratuitement
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images WebP en un document PDF professionnel.
          Combinez plusieurs fichiers WebP en un seul PDF multi-pages.
          Gratuit, rapide et sans inscription.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi convertir des WebP en PDF ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format WebP, développé par Google, est devenu un standard sur le
            web grâce à son excellente compression qui réduit
            considérablement le poids des images sans sacrifier la qualité
            visuelle. Cependant, le WebP n&apos;est pas toujours pris en charge
            par les logiciels de bureautique ou les systèmes d&apos;impression.
            La conversion en PDF résout ce problème en créant un document
            universel.
          </p>

          <p className="text-gray-600 mb-4">
            Si vous avez téléchargé des images depuis le web au format WebP et
            que vous souhaitez les regrouper dans un document professionnel, la
            conversion en PDF est la solution idéale. C&apos;est également utile
            pour archiver des visuels web, créer des dossiers de références
            visuelles ou préparer des documents pour l&apos;impression à partir
            d&apos;images optimisées pour le web.
          </p>

          <p className="text-gray-600 mb-4">
            Notre outil convertit vos fichiers WebP directement dans votre
            navigateur, sans envoi sur un serveur. Chaque image est placée sur
            une page séparée du PDF, en conservant ses proportions originales.
            Vous pouvez également mélanger des images WebP avec d&apos;autres
            formats (JPG, PNG) dans un même document.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Questions fréquentes
        </h2>

        <div className="prose prose-gray max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Qu&apos;est-ce que le format WebP ?
          </h3>
          <p className="text-gray-600 mb-6">
            Le WebP est un format d&apos;image développé par Google qui offre
            une excellente compression tout en conservant une bonne qualité
            visuelle. Il est très utilisé sur le web pour réduire le poids des
            pages et améliorer les temps de chargement. Il supporte aussi la
            transparence et l&apos;animation.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            La qualité WebP est-elle préservée dans le PDF ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, l&apos;image WebP est décodée par votre navigateur puis
            intégrée dans le PDF avec une qualité optimale. Le rendu visuel est
            fidèle à l&apos;original, adapté aussi bien à l&apos;affichage à
            l&apos;écran qu&apos;à l&apos;impression.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Peut-on combiner des WebP avec d&apos;autres formats dans un PDF ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, notre outil accepte les images WebP, JPG, PNG et d&apos;autres
            formats. Vous pouvez mélanger librement ces formats dans un même
            document PDF. Chaque image sera placée sur sa propre page, quel que
            soit son format d&apos;origine.
          </p>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-webp-en-pdf" />

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
