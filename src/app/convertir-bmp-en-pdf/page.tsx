import type { Metadata } from "next";
import Link from "next/link";
import Client from "../convertir-jpg-en-pdf/client";
import PageHero from "@/components/PageHero";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Convertir BMP en PDF Gratuit en Ligne | heictojpg.fr",
  description:
    "Convertissez vos fichiers BMP en document PDF. Transformez vos anciennes images BMP en PDF modernes et facilement partageables. Outil gratuit et sans inscription.",
  keywords: [
    "convertir bmp en pdf",
    "bmp en pdf",
    "bmp to pdf",
    "image bmp vers pdf",
    "bmp pdf gratuit",
    "fichier bmp en pdf",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-bmp-en-pdf",
    siteName: "heictojpg.fr",
    title: "Convertir BMP en PDF en ligne gratuitement",
    description:
      "Transformez vos fichiers BMP en document PDF. Gratuit, rapide et sans inscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir BMP en PDF en ligne gratuitement",
    description:
      "Transformez vos fichiers BMP en document PDF. Gratuit et sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-bmp-en-pdf",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertir BMP en PDF",
      url: "https://heictojpg.fr/convertir-bmp-en-pdf",
      description:
        "Convertissez vos fichiers BMP en document PDF gratuitement en ligne.",
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
          name: "Pourquoi convertir un fichier BMP en PDF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Les fichiers BMP sont très volumineux car ils ne sont pas compressés. Les convertir en PDF permet de réduire la taille tout en obtenant un document universel, facile à partager et à imprimer.",
          },
        },
        {
          "@type": "Question",
          name: "La qualité de mon image BMP est-elle conservée ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, l'image BMP est intégrée dans le PDF avec une qualité optimale. Le rendu visuel est fidèle à l'original.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on combiner plusieurs BMP en un seul PDF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, vous pouvez ajouter plusieurs fichiers BMP et ils seront combinés en un seul document PDF multi-pages.",
          },
        },
      ],
    },
  ],
};

export default function ConvertirBmpEnPdf() {
  return (
    <>
      <PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Convertir BMP en PDF gratuitement
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos anciennes images BMP en documents PDF modernes
          et facilement partageables. Gratuit, rapide et sans inscription.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi convertir des BMP en PDF ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format BMP (Bitmap) est l&apos;un des plus anciens formats
            d&apos;image, historiquement associé à Windows. Bien qu&apos;il
            offre une qualité d&apos;image non compressée, les fichiers BMP
            sont extrêmement volumineux et peu pratiques pour le partage ou
            l&apos;archivage. La conversion en PDF permet de regrouper vos
            images BMP dans un document compact et universellement compatible.
          </p>

          <p className="text-gray-600 mb-4">
            Si vous disposez d&apos;anciens fichiers BMP issus de scans, de
            captures d&apos;écran Windows ou d&apos;archives numériques, les
            convertir en PDF est la meilleure solution pour les moderniser.
            Le format PDF est lisible sur tous les appareils, facilement
            imprimable et idéal pour l&apos;envoi par e-mail ou le stockage
            en ligne.
          </p>

          <p className="text-gray-600 mb-4">
            Notre outil convertit vos fichiers BMP directement dans votre
            navigateur. Aucun fichier n&apos;est envoyé sur un serveur, ce qui
            garantit la confidentialité totale de vos documents. Le traitement
            est instantané, quel que soit le nombre d&apos;images.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Questions fréquentes
        </h2>

        <div className="prose prose-gray max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Pourquoi convertir un fichier BMP en PDF ?
          </h3>
          <p className="text-gray-600 mb-6">
            Les fichiers BMP sont très volumineux car ils ne sont pas compressés.
            Les convertir en PDF permet de réduire la taille tout en obtenant un
            document universel, facile à partager et à imprimer sur n&apos;importe
            quel appareil.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            La qualité de mon image BMP est-elle conservée ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, l&apos;image BMP est intégrée dans le PDF avec une qualité
            optimale. Le rendu visuel est fidèle à l&apos;original, adapté aussi
            bien à l&apos;affichage à l&apos;écran qu&apos;à l&apos;impression.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Peut-on combiner plusieurs BMP en un seul PDF ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, vous pouvez ajouter plusieurs fichiers BMP et ils seront
            combinés en un seul document PDF multi-pages. Chaque image occupe
            une page séparée, dans l&apos;ordre dans lequel vous les ajoutez.
          </p>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-bmp-en-pdf" />

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
