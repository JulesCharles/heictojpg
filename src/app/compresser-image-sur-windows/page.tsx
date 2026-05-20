import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Compresser une Image sur Windows [2026] | heictojpg.fr",
  description:
    "Apprenez a compresser vos images sur Windows. Utilisez Paint, l'app Photos Windows ou notre outil en ligne heictojpg.fr. Guide complet avec 3 methodes.",
  openGraph: {
    type: "website",
    title: "Compresser une Image sur Windows - Guide complet [2026]",
    description:
      "3 methodes pour compresser vos images sur Windows : Paint, Photos Windows ou en ligne avec heictojpg.fr.",
    url: "https://heictojpg.fr/compresser-image-sur-windows",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Compresser une Image sur Windows - Guide complet [2026]",
    description:
      "3 methodes pour compresser vos images sur Windows : Paint, Photos Windows ou en ligne avec heictojpg.fr.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/compresser-image-sur-windows",
  },
};

export default function CompresserImageWindows() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment compresser une image sur Windows",
    description:
      "3 methodes pour compresser vos images sur Windows : Paint, Photos Windows ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Paint - enregistrer en JPG qualite reduite",
        text: "Ouvrez votre image dans Paint, redimensionnez-la si necessaire, puis enregistrez-la en format JPEG pour reduire la taille.",
        url: "https://heictojpg.fr/compresser-image-sur-windows#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Photos Windows - reduire la taille",
        text: "Utilisez l'app Photos de Windows pour redimensionner et compresser vos images facilement.",
        url: "https://heictojpg.fr/compresser-image-sur-windows#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Compresser en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/compresser-image dans votre navigateur, selectionnez vos images et telechargez les fichiers compresses.",
        url: "https://heictojpg.fr/compresser-image-sur-windows#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Compresser une Image sur Windows",
              href: "/compresser-image-sur-windows",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment compresser une image sur Windows
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Vos images sont trop lourdes pour etre envoyees par e-mail ou mises
          en ligne ? Windows propose plusieurs outils integres pour reduire la
          taille de vos fichiers image. Decouvrez 3 methodes simples pour
          compresser vos images sur PC.
        </p>
      </PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Compressez vos images instantanement
          </h3>
          <p className="text-gray-600 mb-4">
            Utilisez notre outil gratuit en ligne pour compresser vos images en
            quelques secondes, directement depuis votre navigateur sur Windows.
          </p>
          <Link
            href="/compresser-image"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Compresser mes images
          </Link>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2
              id="methode-1"
              className="text-2xl font-semibold text-gray-800 mb-4"
            >
              Methode 1 : Paint - enregistrer en JPG qualite reduite
            </h2>
            <p className="text-gray-600 mb-4">
              Paint, l&apos;editeur d&apos;images integre a Windows, permet de
              convertir et compresser vos images en les enregistrant au format
              JPEG.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Faites un clic droit sur votre image et choisissez{" "}
                <strong>Ouvrir avec &gt; Paint</strong>.
              </li>
              <li>
                Si l&apos;image est trop grande, allez dans{" "}
                <strong>Accueil &gt; Redimensionner</strong> et reduisez les
                dimensions (par exemple a 50%).
              </li>
              <li>
                Allez dans{" "}
                <strong>Fichier &gt; Enregistrer sous &gt; Image JPEG</strong>.
              </li>
              <li>
                Le fichier JPEG resultant sera significativement plus leger que
                l&apos;image originale, surtout si elle etait en PNG ou BMP.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2
              id="methode-2"
              className="text-2xl font-semibold text-gray-800 mb-4"
            >
              Methode 2 : Photos Windows - reduire la taille
            </h2>
            <p className="text-gray-600 mb-4">
              L&apos;application Photos de Windows offre une fonction de
              redimensionnement qui permet de reduire la taille de vos images
              facilement.
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
                Choisissez une taille predefinie (S, M, L) ou definissez des
                dimensions personnalisees.
              </li>
              <li>
                Selectionnez le niveau de <strong>qualite</strong> souhaite et
                cliquez sur <strong>Enregistrer</strong>.
              </li>
              <li>
                L&apos;image redimensionnee sera enregistree en tant que copie
                compressée.
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
              Pour compresser rapidement vos images sans logiciel
              supplementaire, utilisez notre compresseur en ligne.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez votre navigateur et rendez-vous sur{" "}
                <Link
                  href="/compresser-image"
                  className="text-blue-600 hover:text-blue-800"
                >
                  heictojpg.fr/compresser-image
                </Link>
                .
              </li>
              <li>
                Glissez-deposez vos images ou cliquez pour les selectionner
                depuis votre PC.
              </li>
              <li>
                La compression est instantanee. Telechargez vos images
                compressees en un clic.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conclusion
            </h2>
            <p className="text-gray-600 mb-4">
              Paint est une solution rapide pour convertir et compresser une
              image en JPEG, tandis que l&apos;app Photos offre plus
              d&apos;options de redimensionnement. Pour une compression optimale
              sans installation, notre outil en ligne{" "}
              <Link
                href="/compresser-image"
                className="text-blue-600 hover:text-blue-800"
              >
                heictojpg.fr/compresser-image
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
                href="/compresser-image-sur-iphone"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">Sur iPhone</h3>
                <p className="text-sm text-gray-600">
                  Guide de compression d&apos;images sur iOS.
                </p>
              </Link>
              <Link
                href="/compresser-image-sur-mac"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">Sur Mac</h3>
                <p className="text-sm text-gray-600">
                  Guide de compression d&apos;images sur macOS.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
