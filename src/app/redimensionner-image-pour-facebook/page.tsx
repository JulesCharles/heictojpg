import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Tailles d'Images Facebook [2026] - Dimensions Exactes | heictojpg.fr",
  description:
    "Toutes les dimensions d'images Facebook en 2026 : photo de profil, couverture, post, story et événement. Redimensionnez vos images aux tailles exactes.",
  keywords: [
    "taille image facebook",
    "dimensions facebook",
    "redimensionner image facebook",
    "taille couverture facebook",
    "taille photo profil facebook",
    "format image facebook",
  ],
  openGraph: {
    type: "website",
    title: "Tailles d'Images Facebook [2026] - Dimensions Exactes",
    description:
      "Toutes les dimensions d'images Facebook en 2026 : profil, couverture, post, story et événement.",
    url: "https://heictojpg.fr/redimensionner-image-pour-facebook",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Tailles d'Images Facebook [2026] - Dimensions Exactes",
    description:
      "Toutes les dimensions d'images Facebook en 2026 : profil, couverture, post, story et événement.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/redimensionner-image-pour-facebook",
  },
};

export default function RedimensionnerImageFacebook() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment redimensionner une image pour Facebook",
    description:
      "Guide pour redimensionner vos images aux dimensions exactes requises par Facebook en 2026.",
    totalTime: "PT2M",
    step: [
      {
        "@type": "HowToStep",
        name: "Identifier le format Facebook nécessaire",
        text: "Déterminez le type de contenu (photo de profil, couverture, post, story ou événement) et notez les dimensions requises.",
        url: "https://heictojpg.fr/redimensionner-image-pour-facebook#dimensions",
      },
      {
        "@type": "HowToStep",
        name: "Ouvrir l'outil de redimensionnement",
        text: "Rendez-vous sur heictojpg.fr/redimensionner-image-reseaux-sociaux et sélectionnez votre image.",
        url: "https://heictojpg.fr/redimensionner-image-pour-facebook#outil",
      },
      {
        "@type": "HowToStep",
        name: "Redimensionner et télécharger",
        text: "Choisissez le preset Facebook souhaité ou entrez les dimensions manuellement, puis téléchargez votre image redimensionnée.",
        url: "https://heictojpg.fr/redimensionner-image-pour-facebook#telecharger",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Redimensionner image pour Facebook",
              href: "/redimensionner-image-pour-facebook",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Tailles d&apos;images Facebook en 2026 : dimensions exactes
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Facebook utilise des dimensions différentes selon le type de contenu
          publié. Une image mal dimensionnée sera recadrée ou compressée, ce qui
          nuit à la qualité visuelle de votre page. Voici toutes les tailles
          recommandées en 2026.
        </p>
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Redimensionnez vos images pour Facebook en un clic
          </h3>
          <p className="text-gray-600 mb-4">
            Utilisez notre outil gratuit pour redimensionner vos photos aux
            dimensions exactes de Facebook, directement dans votre navigateur.
          </p>
          <Link
            href="/redimensionner-image-reseaux-sociaux"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Redimensionner mon image pour Facebook
          </Link>
        </div>

        <div className="space-y-8">
          <div id="dimensions" className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Tableau des dimensions Facebook 2026
            </h2>
            <p className="text-gray-600 mb-6">
              Voici les dimensions recommandées pour chaque type de contenu sur
              Facebook. Ces tailles garantissent un affichage net sans recadrage
              automatique.
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
                    <td className="py-3 pr-4">170 x 170</td>
                    <td className="py-3">1:1</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Couverture</td>
                    <td className="py-3 pr-4">851 x 315</td>
                    <td className="py-3">2.7:1</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Post</td>
                    <td className="py-3 pr-4">1200 x 630</td>
                    <td className="py-3">1.91:1</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Story</td>
                    <td className="py-3 pr-4">1080 x 1920</td>
                    <td className="py-3">9:16</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Événement</td>
                    <td className="py-3 pr-4">1200 x 628</td>
                    <td className="py-3">1.91:1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conseils pour des images Facebook de qualité
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                <strong>Photo de profil (170x170)</strong> : elle s&apos;affiche
                en cercle sur la plupart des interfaces. Centrez bien votre sujet
                principal.
              </li>
              <li>
                <strong>Couverture (851x315)</strong> : attention au recadrage
                mobile. Gardez les éléments importants au centre de l&apos;image.
              </li>
              <li>
                <strong>Post (1200x630)</strong> : cette taille est aussi utilisée
                pour les aperçus de liens partagés (Open Graph).
              </li>
              <li>
                <strong>Story (1080x1920)</strong> : format vertical plein écran.
                Évitez de placer du texte trop haut ou trop bas.
              </li>
              <li>
                <strong>Événement (1200x628)</strong> : similaire au post, cette
                image apparaît en bannière sur la page de l&apos;événement.
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
                Choisissez le preset Facebook correspondant (profil, couverture,
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
                href="/redimensionner-image-pour-linkedin"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">LinkedIn</h3>
                <p className="text-sm text-gray-600">
                  Dimensions pour LinkedIn.
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
