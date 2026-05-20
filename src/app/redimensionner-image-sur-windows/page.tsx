import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Redimensionner une Image sur Windows [2026] | heictojpg.fr",
  description:
    "Apprenez a redimensionner vos images sur Windows. Utilisez Paint, l'app Photos Windows ou notre outil en ligne heictojpg.fr. Guide complet avec 3 methodes.",
  openGraph: {
    type: "website",
    title: "Redimensionner une Image sur Windows - Guide complet [2026]",
    description:
      "3 methodes pour redimensionner vos images sur Windows : Paint, Photos Windows ou en ligne avec heictojpg.fr.",
    url: "https://heictojpg.fr/redimensionner-image-sur-windows",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Redimensionner une Image sur Windows - Guide complet [2026]",
    description:
      "3 methodes pour redimensionner vos images sur Windows : Paint, Photos Windows ou en ligne avec heictojpg.fr.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/redimensionner-image-sur-windows",
  },
};

export default function RedimensionnerImageWindows() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment redimensionner une image sur Windows",
    description:
      "3 methodes pour redimensionner vos images sur Windows : Paint, Photos Windows ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Paint - redimensionner",
        text: "Ouvrez votre image dans Paint, utilisez la fonction Redimensionner pour ajuster les dimensions en pixels ou en pourcentage.",
        url: "https://heictojpg.fr/redimensionner-image-sur-windows#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Photos Windows - redimensionner",
        text: "Utilisez l'app Photos de Windows pour redimensionner vos images avec des tailles predefinies ou personnalisees.",
        url: "https://heictojpg.fr/redimensionner-image-sur-windows#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Redimensionner en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/redimensionner-image dans votre navigateur, selectionnez vos images et telechargez les fichiers redimensionnes.",
        url: "https://heictojpg.fr/redimensionner-image-sur-windows#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Redimensionner une Image sur Windows",
              href: "/redimensionner-image-sur-windows",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment redimensionner une image sur Windows
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Besoin de reduire ou d&apos;ajuster les dimensions de vos images sur
          PC ? Windows propose plusieurs outils integres pour redimensionner
          vos photos sans installer de logiciel supplementaire. Decouvrez 3
          methodes simples.
        </p>
      </PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Redimensionnez vos images instantanement
          </h3>
          <p className="text-gray-600 mb-4">
            Utilisez notre outil gratuit en ligne pour redimensionner vos images
            en quelques secondes, directement depuis votre navigateur sur
            Windows.
          </p>
          <Link
            href="/redimensionner-image"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Redimensionner mes images
          </Link>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2
              id="methode-1"
              className="text-2xl font-semibold text-gray-800 mb-4"
            >
              Methode 1 : Paint - redimensionner
            </h2>
            <p className="text-gray-600 mb-4">
              Paint, l&apos;editeur d&apos;images integre a Windows, offre une
              fonction de redimensionnement simple et efficace.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Faites un clic droit sur votre image et choisissez{" "}
                <strong>Ouvrir avec &gt; Paint</strong>.
              </li>
              <li>
                Cliquez sur <strong>Accueil &gt; Redimensionner</strong> dans la
                barre d&apos;outils.
              </li>
              <li>
                Choisissez de redimensionner en{" "}
                <strong>pourcentage</strong> ou en <strong>pixels</strong>.
                Cochez{" "}
                <strong>
                  &quot;Conserver les proportions&quot;
                </strong>{" "}
                pour eviter la deformation.
              </li>
              <li>
                Saisissez les nouvelles dimensions (ex : 50% ou 800 pixels de
                largeur).
              </li>
              <li>
                Cliquez sur <strong>OK</strong>, puis enregistrez avec{" "}
                <strong>Fichier &gt; Enregistrer sous</strong> pour conserver
                l&apos;original.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2
              id="methode-2"
              className="text-2xl font-semibold text-gray-800 mb-4"
            >
              Methode 2 : Photos Windows - redimensionner
            </h2>
            <p className="text-gray-600 mb-4">
              L&apos;application Photos de Windows propose egalement une
              fonction de redimensionnement avec des options predefinies et
              personnalisees.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez votre image avec l&apos;application{" "}
                <strong>Photos</strong>.
              </li>
              <li>
                Cliquez sur les trois points <strong>(...)</strong> en haut a
                droite et selectionnez{" "}
                <strong>&quot;Redimensionner l&apos;image&quot;</strong>.
              </li>
              <li>
                Choisissez une taille predefinie :{" "}
                <strong>S</strong> (0,25 MP), <strong>M</strong> (1 MP),{" "}
                <strong>L</strong> (3 MP) ou{" "}
                <strong>&quot;Definir les dimensions
                personnalisees&quot;</strong>.
              </li>
              <li>
                Pour les dimensions personnalisees, saisissez la largeur et la
                hauteur souhaitees. Les proportions sont conservees
                automatiquement.
              </li>
              <li>
                Choisissez le format de sortie et cliquez sur{" "}
                <strong>Enregistrer</strong>.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2
              id="methode-3"
              className="text-2xl font-semibold text-gray-800 mb-4"
            >
              Methode 3 : En ligne avec heictojpg.fr
            </h2>
            <p className="text-gray-600 mb-4">
              Pour redimensionner vos images rapidement sans logiciel
              supplementaire, utilisez notre outil en ligne.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez votre navigateur et rendez-vous sur{" "}
                <Link
                  href="/redimensionner-image"
                  className="text-blue-600 hover:text-blue-800"
                >
                  heictojpg.fr/redimensionner-image
                </Link>
                .
              </li>
              <li>
                Glissez-deposez vos images ou cliquez pour les selectionner
                depuis votre PC.
              </li>
              <li>
                Definissez les dimensions souhaitees, puis telechargez vos
                images redimensionnees en un clic.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conclusion
            </h2>
            <p className="text-gray-600 mb-4">
              Paint est la methode la plus rapide pour redimensionner une image
              sur Windows, tandis que l&apos;app Photos offre des preselections
              pratiques. Pour un redimensionnement precis sans installation,
              notre outil en ligne{" "}
              <Link
                href="/redimensionner-image"
                className="text-blue-600 hover:text-blue-800"
              >
                heictojpg.fr/redimensionner-image
              </Link>{" "}
              est la solution la plus simple et efficace.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Guides pour autres appareils
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/redimensionner-image-sur-iphone"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">Sur iPhone</h3>
                <p className="text-sm text-gray-600">
                  Guide de redimensionnement d&apos;images sur iOS.
                </p>
              </Link>
              <Link
                href="/redimensionner-image-sur-mac"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">Sur Mac</h3>
                <p className="text-sm text-gray-600">
                  Guide de redimensionnement d&apos;images sur macOS.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
