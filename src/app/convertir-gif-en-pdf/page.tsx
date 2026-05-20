import type { Metadata } from "next";
import Link from "next/link";
import Client from "../convertir-jpg-en-pdf/client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Convertir GIF en PDF Gratuit en Ligne | heictojpg.fr",
  description:
    "Convertissez vos images GIF en document PDF. Transformez vos fichiers GIF en PDF facilement partageables. Outil gratuit, rapide et sans inscription.",
  keywords: [
    "convertir gif en pdf",
    "gif en pdf",
    "gif to pdf",
    "image gif vers pdf",
    "gif pdf gratuit",
    "fichier gif en pdf",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-gif-en-pdf",
    siteName: "heictojpg.fr",
    title: "Convertir GIF en PDF en ligne gratuitement",
    description:
      "Transformez vos images GIF en document PDF. Gratuit, rapide et sans inscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir GIF en PDF en ligne gratuitement",
    description:
      "Transformez vos images GIF en document PDF. Gratuit et sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-gif-en-pdf",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertir GIF en PDF",
      url: "https://heictojpg.fr/convertir-gif-en-pdf",
      description:
        "Convertissez vos images GIF en document PDF gratuitement en ligne.",
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
          name: "Un GIF animé est-il converti en PDF avec toutes ses images ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non, seule la première image (frame) du GIF animé est utilisée pour la conversion en PDF. Si vous souhaitez conserver l'animation, gardez le fichier au format GIF.",
          },
        },
        {
          "@type": "Question",
          name: "La qualité du GIF est-elle préservée dans le PDF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, l'image GIF est intégrée dans le PDF avec une qualité fidèle à l'original. Les couleurs et les détails sont conservés dans le document final.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on combiner plusieurs GIF en un seul PDF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, vous pouvez ajouter plusieurs fichiers GIF et ils seront combinés en un seul document PDF multi-pages, chaque image occupant une page.",
          },
        },
      ],
    },
  ],
};

export default function ConvertirGifEnPdf() {
  return (
    <>
      <PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <Breadcrumbs items={[{ label: "Convertir GIF en PDF", href: "/convertir-gif-en-pdf" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Convertir GIF en PDF gratuitement
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images GIF en un document PDF.
          Combinez plusieurs fichiers GIF en un seul PDF multi-pages.
          Gratuit, rapide et sans inscription.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi convertir des GIF en PDF ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format GIF est très populaire pour les images animées et les
            graphiques simples sur le web. Cependant, il arrive souvent que
            l&apos;on ait besoin d&apos;intégrer des images GIF dans un
            document plus formel. La conversion en PDF permet de regrouper
            vos images GIF dans un format professionnel, facile à partager
            et à imprimer.
          </p>

          <p className="text-gray-600 mb-4">
            La conversion de GIF en PDF est utile pour archiver des
            illustrations, des logos ou des graphiques au format GIF dans un
            document structuré. C&apos;est également pratique pour créer des
            planches de référence à partir d&apos;une collection d&apos;images
            GIF, ou pour intégrer des visuels dans un rapport ou une
            présentation imprimable.
          </p>

          <p className="text-gray-600 mb-4">
            Notre outil traite vos fichiers GIF directement dans votre
            navigateur, sans envoyer de données sur un serveur externe. La
            conversion est instantanée et vos fichiers restent entièrement
            privés. Notez que pour les GIF animés, seule la première image
            est utilisée dans le PDF.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Questions fréquentes
        </h2>

        <div className="prose prose-gray max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Un GIF animé est-il converti en PDF avec toutes ses images ?
          </h3>
          <p className="text-gray-600 mb-6">
            Non, seule la première image (frame) du GIF animé est utilisée pour
            la conversion en PDF. Le format PDF ne prend pas en charge
            l&apos;animation. Si vous souhaitez conserver l&apos;animation,
            gardez le fichier au format GIF.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            La qualité du GIF est-elle préservée dans le PDF ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, l&apos;image GIF est intégrée dans le PDF avec une qualité
            fidèle à l&apos;original. Les couleurs et les détails sont conservés
            dans le document final, que ce soit pour l&apos;affichage à
            l&apos;écran ou pour l&apos;impression.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Peut-on combiner plusieurs GIF en un seul PDF ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, vous pouvez ajouter plusieurs fichiers GIF et ils seront
            combinés en un seul document PDF multi-pages. Chaque image occupe
            une page séparée, dans l&apos;ordre dans lequel vous les ajoutez.
          </p>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-gif-en-pdf" />

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
