import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Tailles d'Images Instagram [2026] - Dimensions Exactes | heictojpg.fr",
  description:
    "Toutes les dimensions d'images Instagram en 2026 : post carré, portrait, paysage, story, reel et photo de profil. Redimensionnez vos images aux tailles exactes.",
  keywords: [
    "taille image instagram",
    "dimensions instagram",
    "redimensionner image instagram",
    "format photo instagram",
    "taille story instagram",
    "taille reel instagram",
  ],
  openGraph: {
    type: "website",
    title: "Tailles d'Images Instagram [2026] - Dimensions Exactes",
    description:
      "Toutes les dimensions d'images Instagram en 2026 : post, story, reel et photo de profil.",
    url: "https://heictojpg.fr/redimensionner-image-pour-instagram",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Tailles d'Images Instagram [2026] - Dimensions Exactes",
    description:
      "Toutes les dimensions d'images Instagram en 2026 : post, story, reel et photo de profil.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/redimensionner-image-pour-instagram",
  },
};

export default function RedimensionnerImageInstagram() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment redimensionner une image pour Instagram",
    description:
      "Guide pour redimensionner vos images aux dimensions exactes requises par Instagram en 2026.",
    totalTime: "PT2M",
    step: [
      {
        "@type": "HowToStep",
        name: "Choisir le format Instagram adapté",
        text: "Identifiez le type de publication (post carré, portrait, paysage, story ou reel) et notez les dimensions requises.",
        url: "https://heictojpg.fr/redimensionner-image-pour-instagram#dimensions",
      },
      {
        "@type": "HowToStep",
        name: "Ouvrir l'outil de redimensionnement",
        text: "Rendez-vous sur heictojpg.fr/redimensionner-image-reseaux-sociaux et sélectionnez votre image.",
        url: "https://heictojpg.fr/redimensionner-image-pour-instagram#outil",
      },
      {
        "@type": "HowToStep",
        name: "Redimensionner et télécharger",
        text: "Choisissez le preset Instagram souhaité ou entrez les dimensions manuellement, puis téléchargez votre image redimensionnée.",
        url: "https://heictojpg.fr/redimensionner-image-pour-instagram#telecharger",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Redimensionner image pour Instagram",
              href: "/redimensionner-image-pour-instagram",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Tailles d&apos;images Instagram en 2026 : dimensions exactes
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Instagram impose des dimensions précises pour chaque type de contenu.
          Utiliser les bonnes tailles garantit que vos photos et vidéos
          s&apos;affichent sans recadrage ni perte de qualité. Retrouvez ci-dessous
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
            Redimensionnez vos images pour Instagram en un clic
          </h3>
          <p className="text-gray-600 mb-4">
            Utilisez notre outil gratuit pour redimensionner vos photos aux
            dimensions exactes d&apos;Instagram, directement dans votre navigateur.
          </p>
          <Link
            href="/redimensionner-image-reseaux-sociaux"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Redimensionner mon image pour Instagram
          </Link>
        </div>

        <div className="space-y-8">
          <div id="dimensions" className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Tableau des dimensions Instagram 2026
            </h2>
            <p className="text-gray-600 mb-6">
              Voici les dimensions recommandées pour chaque type de contenu sur
              Instagram. Respecter ces tailles vous assure un rendu optimal sur
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
                    <td className="py-3 pr-4 font-medium">Post carré</td>
                    <td className="py-3 pr-4">1080 x 1080</td>
                    <td className="py-3">1:1</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Portrait</td>
                    <td className="py-3 pr-4">1080 x 1350</td>
                    <td className="py-3">4:5</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Paysage</td>
                    <td className="py-3 pr-4">1080 x 566</td>
                    <td className="py-3">1.91:1</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Story / Reel</td>
                    <td className="py-3 pr-4">1080 x 1920</td>
                    <td className="py-3">9:16</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Photo de profil</td>
                    <td className="py-3 pr-4">320 x 320</td>
                    <td className="py-3">1:1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conseils pour des images Instagram de qualité
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                <strong>Post carré (1080x1080)</strong> : le format classique
                d&apos;Instagram. Idéal pour les photos de produits et les visuels
                graphiques.
              </li>
              <li>
                <strong>Portrait (1080x1350)</strong> : ce format prend plus de
                place dans le fil d&apos;actualité, ce qui augmente la visibilité
                de votre publication.
              </li>
              <li>
                <strong>Story et Reel (1080x1920)</strong> : utilisez toute la
                hauteur de l&apos;écran pour un impact maximal. Laissez des
                marges en haut et en bas pour les éléments d&apos;interface.
              </li>
              <li>
                <strong>Photo de profil (320x320)</strong> : bien qu&apos;affichée
                en petit, utilisez une image nette et reconnaissable.
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
                Choisissez le preset Instagram correspondant au format souhaité
                (carré, portrait, story, etc.) ou entrez les dimensions
                manuellement.
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
                href="/redimensionner-image-pour-facebook"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">Facebook</h3>
                <p className="text-sm text-gray-600">
                  Dimensions pour Facebook.
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
