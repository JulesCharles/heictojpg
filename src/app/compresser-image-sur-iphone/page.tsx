import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Compresser une Image sur iPhone [2026] | heictojpg.fr",
  description:
    "Apprenez a compresser vos images sur iPhone. Utilisez l'app Photos, les Raccourcis iOS ou notre outil en ligne heictojpg.fr. Guide complet avec 3 methodes.",
  openGraph: {
    type: "website",
    title: "Compresser une Image sur iPhone - Guide complet [2026]",
    description:
      "3 methodes pour compresser vos images sur iPhone : app Photos, Raccourcis iOS ou en ligne avec heictojpg.fr.",
    url: "https://heictojpg.fr/compresser-image-sur-iphone",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Compresser une Image sur iPhone - Guide complet [2026]",
    description:
      "3 methodes pour compresser vos images sur iPhone : app Photos, Raccourcis iOS ou en ligne avec heictojpg.fr.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/compresser-image-sur-iphone",
  },
};

export default function CompresserImageIphone() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment compresser une image sur iPhone",
    description:
      "3 methodes pour compresser vos images sur iPhone : app Photos, Raccourcis iOS ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : App Photos - ajuster la qualite",
        text: "Ouvrez l'app Photos, selectionnez votre image, modifiez-la et ajustez la qualite pour reduire la taille du fichier.",
        url: "https://heictojpg.fr/compresser-image-sur-iphone#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Raccourcis iOS - creer un raccourci de compression",
        text: "Utilisez l'app Raccourcis pour creer un raccourci automatise qui compresse vos images en un seul geste.",
        url: "https://heictojpg.fr/compresser-image-sur-iphone#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Compresser en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/compresser-image dans Safari, selectionnez vos images et telechargez les fichiers compresses.",
        url: "https://heictojpg.fr/compresser-image-sur-iphone#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Compresser une Image sur iPhone",
              href: "/compresser-image-sur-iphone",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment compresser une image sur iPhone
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Les photos prises avec votre iPhone peuvent peser plusieurs megaoctets,
          ce qui complique leur envoi par e-mail ou leur mise en ligne.
          Decouvrez 3 methodes simples pour compresser vos images directement
          sur votre iPhone sans perdre en qualite visible.
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
            quelques secondes, directement depuis Safari sur votre iPhone.
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
              Methode 1 : App Photos - ajuster la qualite
            </h2>
            <p className="text-gray-600 mb-4">
              L&apos;app Photos integree a iOS permet de modifier vos images et
              d&apos;en reduire la taille en ajustant certains parametres lors de
              l&apos;edition.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez l&apos;application <strong>Photos</strong> et
                selectionnez l&apos;image a compresser.
              </li>
              <li>
                Appuyez sur <strong>Modifier</strong> en haut a droite.
              </li>
              <li>
                Recadrez legerement l&apos;image ou appliquez un ajustement,
                puis enregistrez. iOS recompresse l&apos;image lors de la
                sauvegarde.
              </li>
              <li>
                Pour un controle plus precis, partagez l&apos;image via{" "}
                <strong>Mail</strong> : iOS vous proposera de choisir une taille
                (petite, moyenne, grande ou reelle).
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2
              id="methode-2"
              className="text-2xl font-semibold text-gray-800 mb-4"
            >
              Methode 2 : Raccourcis iOS - creer un raccourci de compression
            </h2>
            <p className="text-gray-600 mb-4">
              L&apos;app Raccourcis d&apos;Apple vous permet de creer un flux
              automatise pour compresser vos images en un seul geste.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez l&apos;application <strong>Raccourcis</strong> et appuyez
                sur <strong>+</strong> pour creer un nouveau raccourci.
              </li>
              <li>
                Ajoutez l&apos;action{" "}
                <strong>&quot;Selectionner des photos&quot;</strong>, puis
                ajoutez l&apos;action{" "}
                <strong>&quot;Convertir l&apos;image&quot;</strong> en
                choisissant le format JPEG.
              </li>
              <li>
                Dans les options de conversion, activez{" "}
                <strong>&quot;Ajuster la qualite&quot;</strong> et definissez un
                pourcentage (ex : 60-70% pour une bonne compression).
              </li>
              <li>
                Ajoutez l&apos;action{" "}
                <strong>&quot;Enregistrer dans l&apos;album photo&quot;</strong>{" "}
                pour sauvegarder le resultat.
              </li>
              <li>
                Lancez le raccourci depuis l&apos;ecran d&apos;accueil ou le
                menu de partage a chaque fois que vous souhaitez compresser une
                image.
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
              Pour compresser rapidement vos images sans installer
              d&apos;application supplementaire, utilisez notre compresseur en
              ligne directement depuis Safari.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez Safari et rendez-vous sur{" "}
                <Link
                  href="/compresser-image"
                  className="text-blue-600 hover:text-blue-800"
                >
                  heictojpg.fr/compresser-image
                </Link>
                .
              </li>
              <li>
                Appuyez sur la zone de depot et selectionnez{" "}
                <strong>&quot;Phototheque&quot;</strong> pour choisir vos images.
              </li>
              <li>
                La compression est instantanee. Telechargez vos images
                compressees et retrouvez-les dans votre dossier
                Telechargements.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conclusion
            </h2>
            <p className="text-gray-600 mb-4">
              Vous pouvez compresser vos images sur iPhone en utilisant l&apos;app
              Photos pour un ajustement rapide, les Raccourcis iOS pour un flux
              automatise, ou notre outil en ligne{" "}
              <Link
                href="/compresser-image"
                className="text-blue-600 hover:text-blue-800"
              >
                heictojpg.fr/compresser-image
              </Link>{" "}
              pour une compression ponctuelle ou en lot sans installation.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Guides pour autres appareils
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/compresser-image-sur-mac"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">Sur Mac</h3>
                <p className="text-sm text-gray-600">
                  Guide de compression d&apos;images sur macOS.
                </p>
              </Link>
              <Link
                href="/compresser-image-sur-windows"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">Sur Windows</h3>
                <p className="text-sm text-gray-600">
                  Guide de compression d&apos;images sur PC.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
