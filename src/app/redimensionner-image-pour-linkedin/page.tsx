import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Tailles d'Images LinkedIn [2026] - Dimensions Exactes | heictojpg.fr",
  description:
    "Toutes les dimensions d'images LinkedIn en 2026 : photo de profil, bannière, post, article et logo entreprise. Redimensionnez vos images aux tailles exactes.",
  keywords: [
    "taille image linkedin",
    "dimensions linkedin",
    "redimensionner image linkedin",
    "taille bannière linkedin",
    "taille photo profil linkedin",
    "format image linkedin",
  ],
  openGraph: {
    type: "website",
    title: "Tailles d'Images LinkedIn [2026] - Dimensions Exactes",
    description:
      "Toutes les dimensions d'images LinkedIn en 2026 : profil, bannière, post, article et logo.",
    url: "https://heictojpg.fr/redimensionner-image-pour-linkedin",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Tailles d'Images LinkedIn [2026] - Dimensions Exactes",
    description:
      "Toutes les dimensions d'images LinkedIn en 2026 : profil, bannière, post, article et logo.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/redimensionner-image-pour-linkedin",
  },
};

export default function RedimensionnerImageLinkedin() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment redimensionner une image pour LinkedIn",
    description:
      "Guide pour redimensionner vos images aux dimensions exactes requises par LinkedIn en 2026.",
    totalTime: "PT2M",
    step: [
      {
        "@type": "HowToStep",
        name: "Identifier le format LinkedIn nécessaire",
        text: "Déterminez le type de contenu (photo de profil, bannière, post, article ou logo) et notez les dimensions requises.",
        url: "https://heictojpg.fr/redimensionner-image-pour-linkedin#dimensions",
      },
      {
        "@type": "HowToStep",
        name: "Ouvrir l'outil de redimensionnement",
        text: "Rendez-vous sur heictojpg.fr/redimensionner-image-reseaux-sociaux et sélectionnez votre image.",
        url: "https://heictojpg.fr/redimensionner-image-pour-linkedin#outil",
      },
      {
        "@type": "HowToStep",
        name: "Redimensionner et télécharger",
        text: "Choisissez le preset LinkedIn souhaité ou entrez les dimensions manuellement, puis téléchargez votre image redimensionnée.",
        url: "https://heictojpg.fr/redimensionner-image-pour-linkedin#telecharger",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Redimensionner image pour LinkedIn",
              href: "/redimensionner-image-pour-linkedin",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Tailles d&apos;images LinkedIn en 2026 : dimensions exactes
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Sur LinkedIn, une image professionnelle bien dimensionnée renforce votre
          crédibilité et celle de votre entreprise. Des photos floues ou mal
          recadrées donnent une impression de négligence. Retrouvez ci-dessous
          toutes les dimensions recommandées en 2026.
        </p>
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Redimensionnez vos images pour LinkedIn en un clic
          </h3>
          <p className="text-gray-600 mb-4">
            Utilisez notre outil gratuit pour redimensionner vos photos aux
            dimensions exactes de LinkedIn, directement dans votre navigateur.
          </p>
          <Link
            href="/redimensionner-image-reseaux-sociaux"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Redimensionner mon image pour LinkedIn
          </Link>
        </div>

        <div className="space-y-8">
          <div id="dimensions" className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Tableau des dimensions LinkedIn 2026
            </h2>
            <p className="text-gray-600 mb-6">
              Voici les dimensions recommandées pour chaque type de contenu sur
              LinkedIn. Respecter ces tailles assure un rendu professionnel sur
              tous les appareils.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 pr-4 text-gray-700 font-semibold">
                      Type de contenu
                    </th>
                    <th className="py-3 pr-4 text-gray-700 font-semibold">
                      Dimensions (px)
                    </th>
                    <th className="py-3 text-gray-700 font-semibold">
                      Ratio
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Photo de profil</td>
                    <td className="py-3 pr-4">400 x 400</td>
                    <td className="py-3">1:1</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Bannière</td>
                    <td className="py-3 pr-4">1584 x 396</td>
                    <td className="py-3">4:1</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Post</td>
                    <td className="py-3 pr-4">1200 x 627</td>
                    <td className="py-3">1.91:1</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Article</td>
                    <td className="py-3 pr-4">744 x 400</td>
                    <td className="py-3">1.86:1</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Logo entreprise</td>
                    <td className="py-3 pr-4">300 x 300</td>
                    <td className="py-3">1:1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conseils pour des images LinkedIn de qualité
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                <strong>Photo de profil (400x400)</strong> : utilisez une photo
                professionnelle avec un fond neutre. Elle s&apos;affiche en cercle
                sur la plateforme.
              </li>
              <li>
                <strong>Bannière (1584x396)</strong> : cette image large est
                l&apos;occasion de montrer votre marque ou votre activité.
                Attention au recadrage sur mobile.
              </li>
              <li>
                <strong>Post (1200x627)</strong> : les posts avec image génèrent
                bien plus d&apos;engagement que les posts texte seul sur LinkedIn.
              </li>
              <li>
                <strong>Article (744x400)</strong> : l&apos;image de couverture de
                vos articles LinkedIn attire l&apos;attention dans le fil
                d&apos;actualité.
              </li>
              <li>
                <strong>Logo entreprise (300x300)</strong> : utilisez un logo
                net et lisible même en petite taille.
              </li>
            </ul>
          </div>

          <div id="outil" className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Comment redimensionner avec heictojpg.fr
            </h2>
            <p className="text-gray-600 mb-4">
              Notre outil de redimensionnement en ligne est gratuit et fonctionne
              directement dans votre navigateur, sans installation ni inscription.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Rendez-vous sur{" "}
                <Link
                  href="/redimensionner-image-reseaux-sociaux"
                  className="text-blue-600 hover:text-blue-800"
                >
                  notre outil de redimensionnement pour réseaux sociaux
                </Link>
                .
              </li>
              <li>
                Sélectionnez ou déposez votre image dans la zone de
                téléchargement.
              </li>
              <li>
                Choisissez le preset LinkedIn correspondant (profil, bannière,
                post, etc.) ou entrez les dimensions manuellement.
              </li>
              <li>
                Cliquez sur &quot;Redimensionner&quot; et téléchargez votre image
                optimisée.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Autres réseaux sociaux
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/redimensionner-image-pour-instagram"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">Instagram</h3>
                <p className="text-sm text-gray-600">
                  Dimensions pour Instagram.
                </p>
              </Link>
              <Link
                href="/redimensionner-image-pour-facebook"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">Facebook</h3>
                <p className="text-sm text-gray-600">
                  Dimensions pour Facebook.
                </p>
              </Link>
              <Link
                href="/redimensionner-image-pour-twitter"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">Twitter/X</h3>
                <p className="text-sm text-gray-600">
                  Dimensions pour Twitter/X.
                </p>
              </Link>
              <Link
                href="/redimensionner-image-pour-youtube"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">YouTube</h3>
                <p className="text-sm text-gray-600">
                  Miniatures et bannières YouTube.
                </p>
              </Link>
              <Link
                href="/redimensionner-image-pour-tiktok"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">TikTok</h3>
                <p className="text-sm text-gray-600">
                  Dimensions pour TikTok.
                </p>
              </Link>
              <Link
                href="/redimensionner-image-pour-pinterest"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">Pinterest</h3>
                <p className="text-sm text-gray-600">
                  Dimensions pour Pinterest.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
