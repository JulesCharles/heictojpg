import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Tailles d'Images Pinterest [2026] - Dimensions Exactes | heictojpg.fr",
  description:
    "Toutes les dimensions d'images Pinterest en 2026 : pin standard, pin carré, photo de profil et couverture de tableau. Redimensionnez vos images aux tailles exactes.",
  keywords: [
    "taille image pinterest",
    "dimensions pinterest",
    "redimensionner image pinterest",
    "taille pin pinterest",
    "taille épingle pinterest",
    "format image pinterest",
  ],
  openGraph: {
    type: "website",
    title: "Tailles d'Images Pinterest [2026] - Dimensions Exactes",
    description:
      "Toutes les dimensions d'images Pinterest en 2026 : pin standard, pin carré, profil et couverture.",
    url: "https://heictojpg.fr/redimensionner-image-pour-pinterest",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Tailles d'Images Pinterest [2026] - Dimensions Exactes",
    description:
      "Toutes les dimensions d'images Pinterest en 2026 : pin standard, pin carré, profil et couverture.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/redimensionner-image-pour-pinterest",
  },
};

export default function RedimensionnerImagePinterest() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment redimensionner une image pour Pinterest",
    description:
      "Guide pour redimensionner vos images aux dimensions exactes requises par Pinterest en 2026.",
    totalTime: "PT2M",
    step: [
      {
        "@type": "HowToStep",
        name: "Identifier le format Pinterest nécessaire",
        text: "Déterminez le type d'épingle (pin standard, pin carré, photo de profil ou couverture de tableau) et notez les dimensions requises.",
        url: "https://heictojpg.fr/redimensionner-image-pour-pinterest#dimensions",
      },
      {
        "@type": "HowToStep",
        name: "Ouvrir l'outil de redimensionnement",
        text: "Rendez-vous sur heictojpg.fr/redimensionner-image-reseaux-sociaux et sélectionnez votre image.",
        url: "https://heictojpg.fr/redimensionner-image-pour-pinterest#outil",
      },
      {
        "@type": "HowToStep",
        name: "Redimensionner et télécharger",
        text: "Choisissez le preset Pinterest souhaité ou entrez les dimensions manuellement, puis téléchargez votre image redimensionnée.",
        url: "https://heictojpg.fr/redimensionner-image-pour-pinterest#telecharger",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Redimensionner image pour Pinterest",
              href: "/redimensionner-image-pour-pinterest",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Tailles d&apos;images Pinterest en 2026 : dimensions exactes
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Pinterest est une plateforme visuelle où la qualité et le format de vos
          images ont un impact direct sur la visibilité de vos épingles. Des
          images bien dimensionnées apparaissent plus grandes dans le flux et
          attirent davantage de clics. Voici les tailles recommandées en 2026.
        </p>
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Redimensionnez vos images pour Pinterest en un clic
          </h3>
          <p className="text-gray-600 mb-4">
            Utilisez notre outil gratuit pour redimensionner vos épingles aux
            dimensions exactes de Pinterest, directement dans votre navigateur.
          </p>
          <Link
            href="/redimensionner-image-reseaux-sociaux"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Redimensionner mon image pour Pinterest
          </Link>
        </div>

        <div className="space-y-8">
          <div id="dimensions" className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Tableau des dimensions Pinterest 2026
            </h2>
            <p className="text-gray-600 mb-6">
              Voici les dimensions recommandées pour chaque type de contenu sur
              Pinterest. Les pins verticaux sont privilégiés par l&apos;algorithme
              et obtiennent plus de visibilité.
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
                    <td className="py-3 pr-4 font-medium">Pin standard</td>
                    <td className="py-3 pr-4">1000 x 1500</td>
                    <td className="py-3">2:3</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Pin carré</td>
                    <td className="py-3 pr-4">1000 x 1000</td>
                    <td className="py-3">1:1</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">Photo de profil</td>
                    <td className="py-3 pr-4">165 x 165</td>
                    <td className="py-3">1:1</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Couverture tableau</td>
                    <td className="py-3 pr-4">800 x 450</td>
                    <td className="py-3">16:9</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conseils pour des images Pinterest de qualité
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                <strong>Pin standard (1000x1500)</strong> : le format vertical 2:3
                est le plus performant sur Pinterest. Il prend plus de place dans
                le flux et attire davantage l&apos;attention.
              </li>
              <li>
                <strong>Pin carré (1000x1000)</strong> : une alternative au
                format vertical, utile pour les infographies ou les produits à
                montrer de face.
              </li>
              <li>
                <strong>Photo de profil (165x165)</strong> : petite mais
                importante, elle représente votre marque sur chaque épingle et
                commentaire.
              </li>
              <li>
                <strong>Couverture tableau (800x450)</strong> : choisissez une
                image représentative du contenu du tableau pour attirer les
                visiteurs.
              </li>
              <li>
                Utilisez des images lumineuses avec des couleurs chaudes. Les
                études montrent que les images à dominante rouge/orange obtiennent
                plus de repins.
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
                Choisissez le preset Pinterest correspondant (pin standard, pin
                carré, etc.) ou entrez les dimensions manuellement.
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
                href="/redimensionner-image-pour-tiktok"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">TikTok</h3>
                <p className="text-sm text-gray-600">
                  Dimensions pour TikTok.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
