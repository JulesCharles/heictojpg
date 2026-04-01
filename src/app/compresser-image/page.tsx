import type { Metadata } from "next";
import Link from "next/link";
import CompressForm from "@/components/CompressForm";

export const metadata: Metadata = {
  title: "Compresser une image en ligne gratuitement - JPG, PNG, WebP",
  description:
    "Compressez vos images JPG, PNG et WebP en ligne gratuitement. Réduisez la taille de vos fichiers sans perte de qualité visible. Outil rapide et sans inscription.",
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
      "Compressez vos images en ligne gratuitement. Réduisez la taille de vos fichiers sans perte visible.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compresser une image en ligne gratuitement - JPG, PNG, WebP",
    description:
      "Compressez vos images en ligne gratuitement. Réduisez la taille de vos fichiers sans perte visible.",
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
            text: "Oui, notre outil de compression d'images est entièrement gratuit, sans inscription requise et sans limitation d'usage.",
          },
        },
        {
          "@type": "Question",
          name: "La qualité de l'image est-elle affectée par la compression ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre outil optimise la compression pour réduire la taille du fichier tout en conservant une qualité visuelle excellente. Vous pouvez ajuster le niveau de qualité selon vos besoins.",
          },
        },
        {
          "@type": "Question",
          name: "Quels formats d'image sont supportés ?",
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
          Réduisez la taille de vos images JPG, PNG et WebP sans perte de
          qualité visible. Notre outil de compression en ligne est rapide,
          sécurisé et entièrement gratuit. Aucune inscription requise.
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
            La compression d&apos;images est une étape essentielle pour tout
            projet web, application mobile ou communication numérique. Des
            images trop lourdes ralentissent le chargement de vos pages web,
            consomment plus de bande passante et offrent une mauvaise
            expérience utilisateur. Compresser vos images permet de réduire
            significativement leur taille tout en conservant une qualité
            visuelle excellente.
          </p>

          <p className="text-gray-600 mb-4">
            Google et les autres moteurs de recherche pénalisent les sites web
            dont les pages se chargent lentement. En optimisant la taille de
            vos images, vous améliorez non seulement la vitesse de votre site,
            mais aussi votre positionnement dans les résultats de recherche
            (SEO). C&apos;est un levier simple et efficace pour booster votre
            visibilité en ligne.
          </p>

          <p className="text-gray-600 mb-4">
            Notre outil de compression utilise des algorithmes avancés pour
            analyser chaque image et éliminer les données superflues sans
            affecter la qualité perceptible. Vous pouvez ajuster le niveau de
            compression selon vos besoins : une compression légère pour
            conserver une qualité maximale, ou une compression plus agressive
            pour obtenir les fichiers les plus légers possible.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Comment choisir le bon niveau de qualité ?
          </h3>

          <ul className="text-gray-600 space-y-2">
            <li>
              •{" "}
              <strong>Qualité 80-100 % :</strong> compression légère, idéale
              pour les portfolios photographiques et les images où la qualité
              est primordiale
            </li>
            <li>
              •{" "}
              <strong>Qualité 60-80 % :</strong> bon compromis entre taille et
              qualité, recommandé pour la plupart des sites web et blogs
            </li>
            <li>
              •{" "}
              <strong>Qualité 40-60 % :</strong> compression forte, adaptée aux
              vignettes, miniatures et images d&apos;aperçu où la taille prime
            </li>
            <li>
              •{" "}
              <strong>Économie de stockage :</strong> compresser vos images
              peut réduire leur taille de 50 à 90 %, libérant un espace
              considérable sur vos serveurs et appareils
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Questions fréquentes
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
            La qualité de l&apos;image est-elle affectée ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre algorithme de compression est optimisé pour réduire la taille
            du fichier tout en conservant une qualité visuelle excellente. Vous
            pouvez ajuster le curseur de qualité selon vos besoins. Pour la
            plupart des usages web, une qualité de 70-80 % offre un excellent
            rapport taille/qualité avec une différence imperceptible à l&apos;oeil
            nu.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Quels formats d&apos;image sont supportés ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre compresseur prend en charge les formats d&apos;image les plus
            courants : JPG/JPEG, PNG et WebP. Il vous suffit de déposer votre
            fichier et notre outil détectera automatiquement le format pour
            appliquer la compression la plus adaptée.
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
