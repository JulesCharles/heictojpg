import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Tailles d'Images TikTok [2026] - Dimensions Exactes | heictojpg.fr",
  description:
    "Toutes les dimensions d'images TikTok en 2026 : photo de profil, vidéo/image et miniature. Redimensionnez vos images aux tailles exactes.",
  keywords: [
    "taille image tiktok",
    "dimensions tiktok",
    "redimensionner image tiktok",
    "taille vidéo tiktok",
    "taille photo profil tiktok",
    "format image tiktok",
  ],
  openGraph: {
    type: "website",
    title: "Tailles d'Images TikTok [2026] - Dimensions Exactes",
    description:
      "Toutes les dimensions d'images TikTok en 2026 : profil, vidéo/image et miniature.",
    url: "https://heictojpg.fr/redimensionner-image-pour-tiktok",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Tailles d'Images TikTok [2026] - Dimensions Exactes",
    description:
      "Toutes les dimensions d'images TikTok en 2026 : profil, vidéo/image et miniature.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/redimensionner-image-pour-tiktok",
  },
};

export default function RedimensionnerImageTiktok() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment redimensionner une image pour TikTok",
    description:
      "Guide pour redimensionner vos images aux dimensions exactes requises par TikTok en 2026.",
    totalTime: "PT2M",
    step: [
      {
        "@type": "HowToStep",
        name: "Identifier le format TikTok nécessaire",
        text: "Déterminez le type de contenu (photo de profil, vidéo/image ou miniature) et notez les dimensions requises.",
        url: "https://heictojpg.fr/redimensionner-image-pour-tiktok#dimensions",
      },
      {
        "@type": "HowToStep",
        name: "Ouvrir l'outil de redimensionnement",
        text: "Rendez-vous sur heictojpg.fr/redimensionner-image-reseaux-sociaux et sélectionnez votre image.",
        url: "https://heictojpg.fr/redimensionner-image-pour-tiktok#outil",
      },
      {
        "@type": "HowToStep",
        name: "Redimensionner et télécharger",
        text: "Choisissez le preset TikTok souhaité ou entrez les dimensions manuellement, puis téléchargez votre image redimensionnée.",
        url: "https://heictojpg.fr/redimensionner-image-pour-tiktok#telecharger",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Redimensionner image pour TikTok",
              href: "/redimensionner-image-pour-tiktok",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Tailles d&apos;images TikTok en 2026 : dimensions exactes
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          TikTok est une plateforme mobile-first qui privilégie le format vertical
          plein écran. Pour que vos contenus s&apos;affichent parfaitement et
          captent l&apos;attention, il est essentiel d&apos;utiliser les bonnes
          dimensions. Voici les tailles recommandées en 2026.
        </p>
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Redimensionnez vos images pour TikTok en un clic
          </h3>
          <p className="text-gray-600 mb-4">
            Utilisez notre outil gratuit pour redimensionner vos photos aux
            dimensions exactes de TikTok, directement dans votre navigateur.
          </p>
          <Link
            href="/redimensionner-image-reseaux-sociaux"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Redimensionner mon image pour TikTok
          </Link>
        </div>

        <div className="space-y-8">
          <div id="dimensions" className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Tableau des dimensions TikTok 2026
            </h2>
            <p className="text-gray-600 mb-6">
              Voici les dimensions recommandées pour chaque type de contenu sur
              TikTok. Le format vertical 9:16 est le standard de la plateforme.
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
                    <td className="py-3 pr-4">200 x 200</td>
                    <td className="py-3">1:1</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Vidéo / Image</td>
                    <td className="py-3 pr-4">1080 x 1920</td>
                    <td className="py-3">9:16</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Miniature</td>
                    <td className="py-3 pr-4">1080 x 1920</td>
                    <td className="py-3">9:16</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conseils pour des images TikTok de qualité
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                <strong>Photo de profil (200x200)</strong> : bien
                qu&apos;affichée en petit, utilisez une image nette et
                reconnaissable. Elle s&apos;affiche en cercle sur la plateforme.
              </li>
              <li>
                <strong>Vidéo / Image (1080x1920)</strong> : le format vertical
                plein écran est obligatoire pour un affichage optimal. Évitez les
                bandes noires en respectant le ratio 9:16.
              </li>
              <li>
                <strong>Miniature (1080x1920)</strong> : la miniature est la
                première impression de votre contenu dans votre grille de profil.
                Choisissez un visuel accrocheur.
              </li>
              <li>
                Laissez des marges en haut et en bas de vos visuels pour éviter
                que le texte soit masqué par les éléments d&apos;interface de
                TikTok (nom d&apos;utilisateur, description, boutons).
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
                Choisissez le preset TikTok ou entrez les dimensions 1080x1920
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
