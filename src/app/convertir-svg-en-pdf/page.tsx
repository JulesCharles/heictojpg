import type { Metadata } from "next";
import Link from "next/link";
import Client from "../convertir-jpg-en-pdf/client";
import PageHero from "@/components/PageHero";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Convertir SVG en PDF Gratuit en Ligne | heictojpg.fr",
  description:
    "Convertissez vos fichiers SVG en document PDF. Transformez vos images vectorielles SVG en PDF facilement partageables. Outil gratuit, rapide et sans inscription.",
  keywords: [
    "convertir svg en pdf",
    "svg en pdf",
    "svg to pdf",
    "image svg vers pdf",
    "svg pdf gratuit",
    "fichier svg en pdf",
    "vectoriel en pdf",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-svg-en-pdf",
    siteName: "heictojpg.fr",
    title: "Convertir SVG en PDF en ligne gratuitement",
    description:
      "Transformez vos fichiers SVG en document PDF. Gratuit, rapide et sans inscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir SVG en PDF en ligne gratuitement",
    description:
      "Transformez vos fichiers SVG en document PDF. Gratuit et sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-svg-en-pdf",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertir SVG en PDF",
      url: "https://heictojpg.fr/convertir-svg-en-pdf",
      description:
        "Convertissez vos fichiers SVG en document PDF gratuitement en ligne.",
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
          name: "Le SVG conserve-t-il sa qualité vectorielle dans le PDF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le SVG est d'abord rendu en image bitmap par le navigateur avant d'être intégré dans le PDF. La qualité est excellente mais le caractère vectoriel n'est pas conservé dans le document final.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on convertir plusieurs SVG en un seul PDF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, vous pouvez ajouter plusieurs fichiers SVG et ils seront combinés en un seul document PDF multi-pages, chaque image occupant une page.",
          },
        },
        {
          "@type": "Question",
          name: "Quels types de fichiers SVG sont supportés ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre outil accepte les fichiers SVG standard. Les SVG avec des animations ou des scripts complexes seront rendus dans leur état initial.",
          },
        },
      ],
    },
  ],
};

export default function ConvertirSvgEnPdf() {
  return (
    <>
      <PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Convertir SVG en PDF gratuitement
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos fichiers vectoriels SVG en un document PDF.
          Regroupez plusieurs SVG en un seul PDF multi-pages.
          Gratuit, rapide et sans inscription.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi convertir des SVG en PDF ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format SVG (Scalable Vector Graphics) est le standard pour les
            images vectorielles sur le web : logos, icônes, illustrations et
            graphiques. Cependant, le SVG n&apos;est pas toujours le format le
            plus pratique pour le partage ou l&apos;impression. La conversion en
            PDF permet de créer un document universel à partir de vos fichiers
            vectoriels, lisible et imprimable sur tous les appareils.
          </p>

          <p className="text-gray-600 mb-4">
            Convertir des SVG en PDF est particulièrement utile pour les
            designers et les développeurs qui souhaitent partager des maquettes,
            des planches d&apos;icônes ou des chartes graphiques dans un format
            professionnel. C&apos;est également pratique pour archiver des
            illustrations vectorielles ou préparer des visuels pour
            l&apos;impression.
          </p>

          <p className="text-gray-600 mb-4">
            Notre outil rend vos fichiers SVG en images haute qualité puis les
            intègre dans un document PDF. Le traitement est effectué directement
            dans votre navigateur, garantissant la confidentialité de vos
            fichiers. Vous pouvez ajouter plusieurs SVG pour créer un PDF
            multi-pages en quelques secondes.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Questions fréquentes
        </h2>

        <div className="prose prose-gray max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Le SVG conserve-t-il sa qualité vectorielle dans le PDF ?
          </h3>
          <p className="text-gray-600 mb-6">
            Le SVG est d&apos;abord rendu en image bitmap par le navigateur
            avant d&apos;être intégré dans le PDF. La qualité du rendu est
            excellente, mais le caractère vectoriel (redimensionnement infini
            sans perte) n&apos;est pas conservé dans le document final. Pour
            conserver le vectoriel, utilisez un logiciel comme Inkscape ou
            Illustrator.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Peut-on convertir plusieurs SVG en un seul PDF ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, vous pouvez ajouter plusieurs fichiers SVG et ils seront
            combinés en un seul document PDF multi-pages. Chaque image occupe
            une page séparée, dans l&apos;ordre dans lequel vous les ajoutez.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Quels types de fichiers SVG sont supportés ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre outil accepte les fichiers SVG standard. Les SVG contenant des
            animations ou des scripts complexes seront rendus dans leur état
            initial. Pour un résultat optimal, utilisez des SVG statiques avec
            des formes, des chemins et du texte standard.
          </p>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-svg-en-pdf" />

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
