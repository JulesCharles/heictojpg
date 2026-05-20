import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Convertir PNG en PDF en ligne gratuit | heictojpg.fr",
  description:
    "Convertissez vos images PNG en un document PDF. Combinez plusieurs fichiers PNG en un seul PDF multi-pages. Outil gratuit, rapide et sans inscription.",
  keywords: [
    "convertir png en pdf",
    "png en pdf",
    "png to pdf",
    "image png vers pdf",
    "plusieurs png en pdf",
    "png pdf gratuit",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-png-en-pdf",
    siteName: "heictojpg.fr",
    title: "Convertir PNG en PDF en ligne gratuitement",
    description:
      "Transformez vos images PNG en document PDF. Gratuit, rapide et sans inscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir PNG en PDF en ligne gratuitement",
    description:
      "Transformez vos images PNG en document PDF. Gratuit et sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-png-en-pdf",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertir PNG en PDF",
      url: "https://heictojpg.fr/convertir-png-en-pdf",
      description:
        "Convertissez vos images PNG en document PDF gratuitement en ligne.",
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
          name: "La transparence PNG est-elle conservée dans le PDF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Les zones transparentes de vos images PNG seront rendues avec un fond blanc dans le document PDF, car le format PDF ne gère pas la transparence de la même manière que le PNG.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on mélanger des PNG et d'autres formats ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre outil accepte les images PNG, JPG et WebP. Vous pouvez mélanger librement ces formats dans un même document PDF.",
          },
        },
        {
          "@type": "Question",
          name: "Y a-t-il une limite de taille ou de nombre d'images ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre outil n'impose pas de limite stricte sur le nombre d'images. Vous pouvez ajouter autant de fichiers PNG que nécessaire pour créer votre document PDF.",
          },
        },
      ],
    },
  ],
};

export default function ConvertirPngEnPdf() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir PNG en PDF", href: "/convertir-png-en-pdf" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Convertir PNG en PDF gratuitement
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images PNG en un document PDF professionnel.
          Combinez plusieurs fichiers PNG en un seul PDF multi-pages.
          Gratuit, rapide et sans inscription.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi convertir des PNG en PDF ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format PNG est très utilisé pour les captures d&apos;écran, les
            graphiques, les logos et toutes les images nécessitant une qualité
            sans perte. Cependant, lorsqu&apos;il s&apos;agit de partager
            plusieurs images dans un contexte professionnel, le format PDF est
            bien plus adapté. Un document PDF regroupe toutes vos images en un
            seul fichier facilement partageable et imprimable.
          </p>

          <p className="text-gray-600 mb-4">
            La conversion de PNG en PDF est particulièrement utile pour créer
            des documents à partir de captures d&apos;écran (tutoriels,
            rapports de bugs, documentation technique), pour assembler des
            planches graphiques ou des maquettes de design, ou encore pour
            préparer des présentations à imprimer. Le PDF garantit que vos
            images s&apos;afficheront de manière identique sur tous les
            appareils.
          </p>

          <p className="text-gray-600 mb-4">
            Notre outil place chaque image PNG sur une page séparée du document
            PDF, en conservant les proportions originales. Les images sont
            automatiquement adaptées au format de page pour un rendu optimal.
            Contrairement à d&apos;autres outils en ligne, nous ne compressons
            pas agressivement vos images : la qualité visuelle est préservée
            dans le document final.
          </p>

          <p className="text-gray-600 mb-4">
            Le traitement est effectué de manière sécurisée et vos fichiers ne
            sont jamais conservés sur nos serveurs. Vous pouvez convertir vos
            PNG en PDF en toute confidentialité, que ce soit pour des documents
            personnels, professionnels ou administratifs.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Cas d&apos;utilisation courants
          </h3>

          <ul className="text-gray-600 space-y-2">
            <li>
              • <strong>Documentation technique :</strong> assemblez vos captures
              d&apos;écran en un guide PDF structuré.
            </li>
            <li>
              • <strong>Design et maquettes :</strong> regroupez vos exports de
              design en un seul document de présentation.
            </li>
            <li>
              • <strong>Scans de documents :</strong> convertissez des images
              scannées en un PDF organisé.
            </li>
            <li>
              • <strong>Archives graphiques :</strong> créez des planches de
              référence pour vos logos, icônes ou illustrations.
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
            La transparence PNG est-elle conservée dans le PDF ?
          </h3>
          <p className="text-gray-600 mb-6">
            Les zones transparentes de vos images PNG seront rendues avec un
            fond blanc dans le document PDF. Le format PDF ne gère pas la
            transparence de la même manière que le PNG. Si vous avez besoin de
            conserver la transparence, gardez vos fichiers au format PNG.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Peut-on mélanger des PNG et d&apos;autres formats ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, notre outil accepte les images PNG, JPG et WebP. Vous pouvez
            mélanger librement ces formats dans un même document PDF. Chaque
            image sera placée sur sa propre page, quel que soit son format
            d&apos;origine.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Y a-t-il une limite de taille ou de nombre d&apos;images ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre outil n&apos;impose pas de limite stricte sur le nombre
            d&apos;images. Vous pouvez ajouter autant de fichiers PNG que
            nécessaire pour créer votre document PDF. Pour un traitement
            optimal, nous recommandons de ne pas dépasser 50 images ou 100 Mo
            au total.
          </p>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-png-en-pdf" />

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
