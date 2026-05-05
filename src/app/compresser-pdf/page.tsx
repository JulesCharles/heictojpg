import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";

export const metadata: Metadata = {
  title: "Compresser un PDF en ligne gratuit | heictojpg.fr",
  description:
    "Compressez vos fichiers PDF en ligne gratuitement. Réduisez la taille de vos documents sans perte de qualité. Outil rapide, sécurisé et sans inscription.",
  keywords: [
    "compresser pdf",
    "réduire taille pdf",
    "compression pdf en ligne",
    "optimiser pdf",
    "pdf plus léger",
    "diminuer poids pdf",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/compresser-pdf",
    siteName: "heictojpg.fr",
    title: "Compresser un PDF en ligne gratuitement",
    description:
      "Réduisez la taille de vos fichiers PDF. Gratuit, rapide et sans inscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compresser un PDF en ligne gratuitement",
    description:
      "Réduisez la taille de vos fichiers PDF. Gratuit et sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/compresser-pdf",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Compresser un PDF en ligne",
      url: "https://heictojpg.fr/compresser-pdf",
      description:
        "Compressez vos fichiers PDF gratuitement en ligne pour réduire leur taille.",
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
          name: "La compression de PDF réduit-elle la qualité ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre outil optimise la compression pour réduire la taille du fichier tout en conservant une qualité excellente. Les textes restent parfaitement lisibles et les images conservent un bon niveau de détail.",
          },
        },
        {
          "@type": "Question",
          name: "Quelle réduction de taille peut-on espérer ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La réduction dépend du contenu de votre PDF. Les documents contenant beaucoup d'images peuvent être réduits de 50 à 80 %. Les PDF contenant principalement du texte offrent une réduction plus modeste de 10 à 30 %.",
          },
        },
        {
          "@type": "Question",
          name: "La compression de PDF est-elle gratuite ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre outil de compression PDF est entièrement gratuit, sans inscription requise et sans limitation d'usage.",
          },
        },
      ],
    },
  ],
};

export default function CompresserPdf() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Compresser un PDF gratuitement en ligne
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Réduisez la taille de vos fichiers PDF sans perte de qualité visible.
          Notre outil de compression est rapide, sécurisé et entièrement
          gratuit. Aucune inscription requise.
        </p>
      </div>

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi compresser vos fichiers PDF ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Les fichiers PDF peuvent rapidement devenir très volumineux,
            surtout lorsqu&apos;ils contiennent des images haute résolution, des
            graphiques ou des éléments multimédias intégrés. Un PDF trop lourd
            pose de nombreux problèmes : il est difficile à envoyer par e-mail
            (limite de taille des pièces jointes), lent à télécharger et
            consomme beaucoup d&apos;espace de stockage.
          </p>

          <p className="text-gray-600 mb-4">
            La compression PDF permet de réduire significativement la taille de
            vos documents tout en conservant leur lisibilité et leur qualité
            visuelle. Notre algorithme analyse le contenu du PDF et applique des
            techniques d&apos;optimisation adaptées : compression des images
            intégrées, suppression des métadonnées redondantes, optimisation des
            polices et rationalisation de la structure interne du document.
          </p>

          <p className="text-gray-600 mb-4">
            Que vous prépariez des documents pour un envoi par e-mail, que vous
            souhaitiez optimiser vos PDF pour le web, ou que vous ayez besoin de
            libérer de l&apos;espace de stockage, notre compresseur PDF en ligne
            est la solution idéale. Il fonctionne directement dans votre
            navigateur, sans installation de logiciel, et vos fichiers ne sont
            jamais stockés sur nos serveurs.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Cas d&apos;utilisation courants
          </h3>

          <ul className="text-gray-600 space-y-2">
            <li>
              • <strong>E-mail professionnel :</strong> réduisez vos PDF pour
              respecter les limites de taille des pièces jointes (généralement
              10-25 Mo).
            </li>
            <li>
              • <strong>Sites web :</strong> optimisez vos PDF téléchargeables
              pour accélérer le chargement et économiser la bande passante.
            </li>
            <li>
              • <strong>Archivage :</strong> compressez vos anciens documents
              pour économiser de l&apos;espace de stockage.
            </li>
            <li>
              • <strong>Plateformes en ligne :</strong> de nombreux sites
              imposent une limite de taille pour les fichiers uploadés.
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
            La compression de PDF réduit-elle la qualité ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre outil optimise la compression pour réduire la taille du
            fichier tout en conservant une qualité excellente. Les textes restent
            parfaitement lisibles et les images conservent un bon niveau de
            détail. La différence est généralement imperceptible à l&apos;oeil nu
            pour un usage standard.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Quelle réduction de taille peut-on espérer ?
          </h3>
          <p className="text-gray-600 mb-6">
            La réduction dépend du contenu de votre PDF. Les documents contenant
            beaucoup d&apos;images haute résolution peuvent être réduits de 50 à
            80 %. Les PDF contenant principalement du texte offrent une
            réduction plus modeste de 10 à 30 %, car le texte est déjà très
            compact par nature.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            La compression de PDF est-elle gratuite ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, notre outil de compression PDF est entièrement gratuit, sans
            inscription requise et sans limitation d&apos;usage. Vous pouvez
            compresser autant de fichiers que vous le souhaitez.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Découvrez nos autres outils PDF
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
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
            href="/convertir-jpg-en-pdf"
            className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-800">JPG en PDF</h3>
            <p className="text-sm text-gray-600">
              Convertissez vos images en document PDF.
            </p>
          </Link>
          <Link
            href="/convertir-pdf-en-jpg"
            className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-800">PDF en JPG</h3>
            <p className="text-sm text-gray-600">
              Extrayez les pages d&apos;un PDF en images.
            </p>
          </Link>
        </div>
      </div>

      {/* Article recommande */}
      <div className="bg-blue-50 rounded-lg p-6 mt-8">
        <h3 className="font-semibold text-gray-800 mb-2">Vous cherchez une alternative gratuite a iLovePDF ?</h3>
        <p className="text-sm text-gray-600 mb-3">Decouvrez notre comparatif des 7 meilleures alternatives gratuites pour manipuler vos PDF en ligne.</p>
        <Link href="/blog/ilovepdf-alternatives-gratuites" className="text-sm font-medium text-blue-600 hover:text-blue-800">Lire l&apos;article &rarr;</Link>
      </div>
    </div>
  );
}
