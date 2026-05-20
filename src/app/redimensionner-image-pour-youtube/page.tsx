import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Tailles d'Images YouTube [2026] - Miniatures et Bannières | heictojpg.fr",
  description:
    "Toutes les dimensions d'images YouTube en 2026 : miniature, bannière, photo de profil et watermark. Redimensionnez vos images aux tailles exactes.",
  keywords: [
    "taille miniature youtube",
    "dimensions youtube",
    "redimensionner image youtube",
    "taille bannière youtube",
    "taille thumbnail youtube",
    "format image youtube",
  ],
  openGraph: {
    type: "website",
    title: "Tailles d'Images YouTube [2026] - Miniatures et Bannières",
    description:
      "Toutes les dimensions d'images YouTube en 2026 : miniature, bannière, profil et watermark.",
    url: "https://heictojpg.fr/redimensionner-image-pour-youtube",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Tailles d'Images YouTube [2026] - Miniatures et Bannières",
    description:
      "Toutes les dimensions d'images YouTube en 2026 : miniature, bannière, profil et watermark.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/redimensionner-image-pour-youtube",
  },
};

export default function RedimensionnerImageYoutube() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment redimensionner une image pour YouTube",
    description:
      "Guide pour redimensionner vos images aux dimensions exactes requises par YouTube en 2026.",
    totalTime: "PT2M",
    step: [
      {
        "@type": "HowToStep",
        name: "Identifier le format YouTube nécessaire",
        text: "Déterminez le type d'image (miniature, bannière, photo de profil ou watermark) et notez les dimensions requises.",
        url: "https://heictojpg.fr/redimensionner-image-pour-youtube#dimensions",
      },
      {
        "@type": "HowToStep",
        name: "Ouvrir l'outil de redimensionnement",
        text: "Rendez-vous sur heictojpg.fr/redimensionner-image-reseaux-sociaux et sélectionnez votre image.",
        url: "https://heictojpg.fr/redimensionner-image-pour-youtube#outil",
      },
      {
        "@type": "HowToStep",
        name: "Redimensionner et télécharger",
        text: "Choisissez le preset YouTube souhaité ou entrez les dimensions manuellement, puis téléchargez votre image redimensionnée.",
        url: "https://heictojpg.fr/redimensionner-image-pour-youtube#telecharger",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Redimensionner image pour YouTube",
              href: "/redimensionner-image-pour-youtube",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Tailles d&apos;images YouTube en 2026 : miniatures et bannières
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Les miniatures YouTube sont déterminantes pour le taux de clic de vos
          vidéos. Une bannière bien dimensionnée donne un aspect professionnel à
          votre chaîne. Retrouvez ci-dessous toutes les dimensions recommandées
          par YouTube en 2026.
        </p>
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Redimensionnez vos images pour YouTube en un clic
          </h3>
          <p className="text-gray-600 mb-4">
            Utilisez notre outil gratuit pour redimensionner vos miniatures et
            bannières aux dimensions exactes de YouTube, directement dans votre
            navigateur.
          </p>
          <Link
            href="/redimensionner-image-reseaux-sociaux"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Redimensionner mon image pour YouTube
          </Link>
        </div>

        <div className="space-y-8">
          <div id="dimensions" className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Tableau des dimensions YouTube 2026
            </h2>
            <p className="text-gray-600 mb-6">
              Voici les dimensions recommandées pour chaque type d&apos;image sur
              YouTube. Respecter ces tailles garantit un affichage optimal sur
              tous les appareils (TV, desktop, tablette, mobile).
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
                    <td className="py-3 pr-4 font-medium">Miniature</td>
                    <td className="py-3 pr-4">1280 x 720</td>
                    <td className="py-3">16:9</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Bannière</td>
                    <td className="py-3 pr-4">2560 x 1440</td>
                    <td className="py-3">16:9</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Photo de profil</td>
                    <td className="py-3 pr-4">800 x 800</td>
                    <td className="py-3">1:1</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Watermark</td>
                    <td className="py-3 pr-4">150 x 150</td>
                    <td className="py-3">1:1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conseils pour des images YouTube de qualité
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                <strong>Miniature (1280x720)</strong> : c&apos;est l&apos;élément
                le plus important pour le taux de clic. Utilisez des couleurs
                vives, du texte lisible et des visages expressifs.
              </li>
              <li>
                <strong>Bannière (2560x1440)</strong> : la zone visible varie
                selon l&apos;appareil. Gardez les éléments essentiels dans la zone
                centrale de 1546x423 pixels (zone sûre).
              </li>
              <li>
                <strong>Photo de profil (800x800)</strong> : elle s&apos;affiche
                en cercle à côté de vos vidéos et commentaires. Utilisez une image
                reconnaissable.
              </li>
              <li>
                <strong>Watermark (150x150)</strong> : ce petit logo
                s&apos;affiche en bas à droite de vos vidéos et permet aux
                spectateurs de s&apos;abonner en un clic.
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
                Choisissez le preset YouTube correspondant (miniature, bannière,
                etc.) ou entrez les dimensions manuellement.
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
