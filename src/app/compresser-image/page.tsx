import type { Metadata } from "next";
import Link from "next/link";
import CompressForm from "@/components/CompressForm";

export const metadata: Metadata = {
  title: "Compresser une image en ligne gratuitement - JPG, PNG, WebP",
  description:
    "Compressez vos images JPG, PNG et WebP en ligne gratuitement. Reduisez la taille de vos fichiers sans perte de qualite visible. Outil rapide et sans inscription.",
  keywords: [
    "compresser image",
    "compression image en ligne",
    "reduire taille image",
    "compresser jpg",
    "compresser png",
    "optimiser image web",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/compresser-image",
    siteName: "heictojpg.fr",
    title: "Compresser une image en ligne gratuitement - JPG, PNG, WebP",
    description:
      "Compressez vos images en ligne gratuitement. Reduisez la taille de vos fichiers sans perte visible.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compresser une image en ligne gratuitement - JPG, PNG, WebP",
    description:
      "Compressez vos images en ligne gratuitement. Reduisez la taille de vos fichiers sans perte visible.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/compresser-image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Compresseur d'images en ligne",
      url: "https://heictojpg.fr/compresser-image",
      description:
        "Compressez vos images JPG, PNG et WebP gratuitement en ligne. Outil rapide, sans inscription.",
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
          name: "La compression d'image est-elle gratuite ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre outil de compression d'images est entierement gratuit, sans inscription requise et sans limitation d'usage.",
          },
        },
        {
          "@type": "Question",
          name: "La qualite de l'image est-elle affectee par la compression ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre outil optimise la compression pour reduire la taille du fichier tout en conservant une qualite visuelle excellente. Vous pouvez ajuster le niveau de qualite selon vos besoins.",
          },
        },
        {
          "@type": "Question",
          name: "Quels formats d'image sont supportes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre compresseur supporte les formats d'image les plus courants : JPG/JPEG, PNG et WebP.",
          },
        },
      ],
    },
  ],
};

export default function CompresserImage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Compresser une image gratuitement
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Reduisez la taille de vos images JPG, PNG et WebP sans perte de
          qualite visible. Notre outil de compression en ligne est rapide,
          securise et entierement gratuit. Aucune inscription requise.
        </p>
      </div>

      <div className="mb-16">
        <CompressForm />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi compresser vos images ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            La compression d&apos;images est une etape essentielle pour tout
            projet web, application mobile ou communication numerique. Des
            images trop lourdes ralentissent le chargement de vos pages web,
            consomment plus de bande passante et offrent une mauvaise
            experience utilisateur. Compresser vos images permet de reduire
            significativement leur taille tout en conservant une qualite
            visuelle excellente.
          </p>

          <p className="text-gray-600 mb-4">
            Google et les autres moteurs de recherche penalisent les sites web
            dont les pages se chargent lentement. En optimisant la taille de
            vos images, vous ameliorez non seulement la vitesse de votre site,
            mais aussi votre positionnement dans les resultats de recherche
            (SEO). C&apos;est un levier simple et efficace pour booster votre
            visibilite en ligne.
          </p>

          <p className="text-gray-600 mb-4">
            Notre outil de compression utilise des algorithmes avances pour
            analyser chaque image et eliminer les donnees superflues sans
            affecter la qualite perceptible. Vous pouvez ajuster le niveau de
            compression selon vos besoins : une compression legere pour
            conserver une qualite maximale, ou une compression plus agressive
            pour obtenir les fichiers les plus legers possible.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Comment choisir le bon niveau de qualite ?
          </h3>

          <ul className="text-gray-600 space-y-2">
            <li>
              •{" "}
              <strong>Qualite 80-100 % :</strong> compression legere, ideale
              pour les portfolios photographiques et les images ou la qualite
              est primordiale
            </li>
            <li>
              •{" "}
              <strong>Qualite 60-80 % :</strong> bon compromis entre taille et
              qualite, recommande pour la plupart des sites web et blogs
            </li>
            <li>
              •{" "}
              <strong>Qualite 40-60 % :</strong> compression forte, adaptee aux
              vignettes, miniatures et images d&apos;apercu ou la taille prime
            </li>
            <li>
              •{" "}
              <strong>Economie de stockage :</strong> compresser vos images
              peut reduire leur taille de 50 a 90 %, liberant un espace
              considerable sur vos serveurs et appareils
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Questions frequentes
        </h2>

        <div className="prose prose-gray max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            La compression d&apos;image est-elle gratuite ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, notre outil est 100 % gratuit et sans aucune limitation.
            Compressez autant d&apos;images que vous le souhaitez, sans
            inscription, sans filigrane et sans restriction de taille de
            fichier.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            La qualite de l&apos;image est-elle affectee ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre algorithme de compression est optimise pour reduire la taille
            du fichier tout en conservant une qualite visuelle excellente. Vous
            pouvez ajuster le curseur de qualite selon vos besoins. Pour la
            plupart des usages web, une qualite de 70-80 % offre un excellent
            rapport taille/qualite avec une difference imperceptible a l&apos;oeil
            nu.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Quels formats d&apos;image sont supportes ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre compresseur prend en charge les formats d&apos;image les plus
            courants : JPG/JPEG, PNG et WebP. Il vous suffit de deposer votre
            fichier et notre outil detectera automatiquement le format pour
            appliquer la compression la plus adaptee.
          </p>
        </div>
      </div>

      {/* Autres outils */}
      <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Découvrez nos autres outils</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC → JPG</h3>
            <p className="text-sm text-gray-600">Convertissez vos photos iPhone HEIC en JPG.</p>
          </Link>
          <Link href="/convertir-png-en-jpg" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">PNG → JPG</h3>
            <p className="text-sm text-gray-600">Convertissez vos images PNG en JPG.</p>
          </Link>
          <Link href="/convertir-webp-en-jpg" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">WebP → JPG</h3>
            <p className="text-sm text-gray-600">Transformez vos images WebP en JPG.</p>
          </Link>
          <Link href="/convertir-jpg-en-png" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">JPG → PNG</h3>
            <p className="text-sm text-gray-600">Convertissez en PNG pour la transparence.</p>
          </Link>
        </div>
        <p className="mt-6 text-gray-600">Consultez aussi notre <Link href="/blog/optimiser-photos-web-heic-jpg-webp" className="text-blue-600 hover:text-blue-800">guide d'optimisation des photos pour le web</Link> et notre <Link href="/faq" className="text-blue-600 hover:text-blue-800">FAQ</Link>.</p>
      </div>
    </div>
  );
}
