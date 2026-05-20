import type { Metadata } from "next";
import CompressForm from "@/components/CompressForm";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Compresser une Image en Ligne Gratuit - Jusqu'à 90% Plus Léger | heictojpg.fr",
  description:
    "Réduisez le poids de vos images JPG, PNG et WebP jusqu'à 90% sans perte visible. Qualité réglable. 100% gratuit, sans inscription, sans limite.",
  keywords: [
    "compresser image",
    "compression image en ligne",
    "réduire taille image",
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
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Compresser une image", href: "/compresser-image" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Compresser une image gratuitement
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Réduisez la taille de vos images JPG, PNG et WebP sans perte de
          qualité visible. Notre outil de compression en ligne est rapide,
          sécurisé et entièrement gratuit. Aucune inscription requise.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-4xl">

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


      <RelatedTools currentPath="/compresser-image" />
    </div>
    </>
  );
}
