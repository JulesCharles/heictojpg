import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";

export const metadata: Metadata = {
  title: "Convertir PDF en JPG en ligne gratuit | heictojpg.fr",
  description:
    "Convertissez vos fichiers PDF en images JPG. Extrayez chaque page d'un PDF en une image haute qualité. Outil gratuit, rapide et sans inscription.",
  keywords: [
    "convertir pdf en jpg",
    "pdf en image",
    "pdf to jpg",
    "extraire images pdf",
    "pdf vers jpg gratuit",
    "pdf en jpeg",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-pdf-en-jpg",
    siteName: "heictojpg.fr",
    title: "Convertir PDF en JPG en ligne gratuitement",
    description:
      "Extrayez les pages d'un PDF en images JPG. Gratuit, rapide et sans inscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir PDF en JPG en ligne gratuitement",
    description:
      "Extrayez les pages d'un PDF en images JPG. Gratuit et sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-pdf-en-jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertir PDF en JPG",
      url: "https://heictojpg.fr/convertir-pdf-en-jpg",
      description:
        "Convertissez vos fichiers PDF en images JPG gratuitement en ligne.",
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
          name: "Quelle est la qualité des images extraites ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Les images sont extraites en haute résolution (300 DPI) pour garantir une qualité optimale. Chaque page du PDF est convertie en une image JPG nette et lisible.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on convertir un PDF de plusieurs pages ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, chaque page du PDF est convertie en une image JPG séparée. Vous recevez un fichier ZIP contenant toutes les pages sous forme d'images individuelles.",
          },
        },
        {
          "@type": "Question",
          name: "La conversion PDF en JPG est-elle gratuite ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre outil de conversion PDF en JPG est entièrement gratuit, sans inscription requise et sans filigrane ajouté aux images.",
          },
        },
      ],
    },
  ],
};

export default function ConvertirPdfEnJpg() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Convertir PDF en JPG gratuitement
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Extrayez chaque page de votre fichier PDF en une image JPG haute
          qualité. Téléchargez toutes les pages en un ZIP. Outil gratuit,
          rapide et sans inscription.
        </p>
      </div>

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi convertir un PDF en images JPG ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            La conversion d&apos;un PDF en images JPG est une opération
            fréquemment nécessaire dans de nombreux contextes. Les images JPG
            sont universellement supportées et peuvent être facilement insérées
            dans des présentations PowerPoint, des publications sur les réseaux
            sociaux, des articles de blog, ou des documents Word sans nécessiter
            de lecteur PDF.
          </p>

          <p className="text-gray-600 mb-4">
            Lorsque vous avez besoin de partager une page spécifique d&apos;un
            document PDF sur les réseaux sociaux, dans une messagerie
            instantanée ou par SMS, le format image est bien plus pratique que le
            PDF. Les images s&apos;affichent directement dans la conversation
            sans que le destinataire ait à télécharger un fichier séparé.
          </p>

          <p className="text-gray-600 mb-4">
            Notre outil convertit chaque page de votre PDF en une image JPG
            distincte à haute résolution. Les images sont générées avec une
            qualité optimale pour garantir la lisibilité du texte et la netteté
            des graphiques. Que votre PDF contienne des tableaux, des
            graphiques, des photos ou du texte, chaque élément sera fidèlement
            reproduit dans l&apos;image résultante.
          </p>

          <p className="text-gray-600 mb-4">
            Le format JPG offre un excellent compromis entre qualité et taille
            de fichier. Les images obtenues sont suffisamment légères pour être
            partagées facilement tout en conservant un niveau de détail
            satisfaisant. C&apos;est la solution idéale pour extraire des
            visuels d&apos;un document PDF sans logiciel spécialisé.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Cas d&apos;utilisation courants
          </h3>

          <ul className="text-gray-600 space-y-2">
            <li>
              • <strong>Réseaux sociaux :</strong> partagez une page de document
              sous forme d&apos;image sur Instagram, LinkedIn ou Twitter.
            </li>
            <li>
              • <strong>Présentations :</strong> insérez des pages de PDF dans
              vos diaporamas PowerPoint ou Google Slides.
            </li>
            <li>
              • <strong>Sites web :</strong> affichez des pages de documents sur
              votre site sans intégrer un lecteur PDF.
            </li>
            <li>
              • <strong>Messagerie :</strong> envoyez rapidement une page de
              document par WhatsApp, Messenger ou SMS.
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
            Quelle est la qualité des images extraites ?
          </h3>
          <p className="text-gray-600 mb-6">
            Les images sont extraites en haute résolution (300 DPI) pour
            garantir une qualité optimale. Chaque page du PDF est convertie en
            une image JPG nette et lisible, parfaitement adaptée à
            l&apos;affichage à l&apos;écran et à l&apos;impression.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Peut-on convertir un PDF de plusieurs pages ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, chaque page du PDF est convertie en une image JPG séparée.
            Vous recevez un fichier ZIP contenant toutes les pages sous forme
            d&apos;images individuelles, nommées dans l&apos;ordre (page-1.jpg,
            page-2.jpg, etc.).
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            La conversion PDF en JPG est-elle gratuite ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, notre outil de conversion PDF en JPG est entièrement gratuit,
            sans inscription requise et sans filigrane ajouté aux images. Vous
            pouvez l&apos;utiliser autant de fois que vous le souhaitez.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Découvrez nos autres outils PDF
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/convertir-jpg-en-pdf"
            className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-800">JPG en PDF</h3>
            <p className="text-sm text-gray-600">
              Convertissez vos images en document PDF.
            </p>
          </Link>
          <Link
            href="/fusionner-pdf"
            className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-800">Fusionner des PDF</h3>
            <p className="text-sm text-gray-600">
              Combinez plusieurs PDF en un seul fichier.
            </p>
          </Link>
          <Link
            href="/diviser-pdf"
            className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-800">Diviser un PDF</h3>
            <p className="text-sm text-gray-600">
              Séparez un PDF en plusieurs fichiers.
            </p>
          </Link>
          <Link
            href="/compresser-pdf"
            className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-800">Compresser un PDF</h3>
            <p className="text-sm text-gray-600">
              Réduisez la taille de vos fichiers PDF.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
