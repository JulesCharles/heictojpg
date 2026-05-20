import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Redimensionner une Image sur iPhone [2026] | heictojpg.fr",
  description:
    "Apprenez a redimensionner vos images sur iPhone. Utilisez les Raccourcis iOS, l'app Mail ou notre outil en ligne heictojpg.fr. Guide complet avec 3 methodes.",
  openGraph: {
    type: "website",
    title: "Redimensionner une Image sur iPhone - Guide complet [2026]",
    description:
      "3 methodes pour redimensionner vos images sur iPhone : Raccourcis iOS, app Mail ou en ligne avec heictojpg.fr.",
    url: "https://heictojpg.fr/redimensionner-image-sur-iphone",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Redimensionner une Image sur iPhone - Guide complet [2026]",
    description:
      "3 methodes pour redimensionner vos images sur iPhone : Raccourcis iOS, app Mail ou en ligne avec heictojpg.fr.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/redimensionner-image-sur-iphone",
  },
};

export default function RedimensionnerImageIphone() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment redimensionner une image sur iPhone",
    description:
      "3 methodes pour redimensionner vos images sur iPhone : Raccourcis iOS, app Mail ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Raccourcis iOS - creer un raccourci de redimensionnement",
        text: "Utilisez l'app Raccourcis pour creer un flux automatise qui redimensionne vos images aux dimensions souhaitees.",
        url: "https://heictojpg.fr/redimensionner-image-sur-iphone#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : App Mail - redimensionner au partage",
        text: "Partagez une image via l'app Mail et iOS vous propose de choisir une taille reduite avant l'envoi.",
        url: "https://heictojpg.fr/redimensionner-image-sur-iphone#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Redimensionner en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/redimensionner-image dans Safari, selectionnez vos images et telechargez les fichiers redimensionnes.",
        url: "https://heictojpg.fr/redimensionner-image-sur-iphone#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Redimensionner une Image sur iPhone",
              href: "/redimensionner-image-sur-iphone",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment redimensionner une image sur iPhone
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Les photos prises avec votre iPhone ont une resolution tres elevee,
          ce qui les rend parfois trop grandes pour certains usages (sites web,
          reseaux sociaux, pieces jointes). Decouvrez 3 methodes pour
          redimensionner vos images directement sur votre iPhone.
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
            en quelques secondes, directement depuis Safari sur votre iPhone.
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
              Methode 1 : Raccourcis iOS - creer un raccourci de
              redimensionnement
            </h2>
            <p className="text-gray-600 mb-4">
              L&apos;app Raccourcis d&apos;Apple est la methode la plus
              polyvalente pour redimensionner des images sur iPhone, avec un
              controle precis des dimensions.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez l&apos;application <strong>Raccourcis</strong> et appuyez
                sur <strong>+</strong> pour creer un nouveau raccourci.
              </li>
              <li>
                Ajoutez l&apos;action{" "}
                <strong>&quot;Selectionner des photos&quot;</strong>.
              </li>
              <li>
                Ajoutez l&apos;action{" "}
                <strong>&quot;Redimensionner l&apos;image&quot;</strong>.
                Definissez la largeur souhaitee (ex : 1080 pixels). La hauteur
                sera ajustee automatiquement pour conserver les proportions.
              </li>
              <li>
                Ajoutez l&apos;action{" "}
                <strong>&quot;Enregistrer dans l&apos;album photo&quot;</strong>.
              </li>
              <li>
                Nommez votre raccourci et ajoutez-le a votre ecran
                d&apos;accueil pour un acces rapide.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2
              id="methode-2"
              className="text-2xl font-semibold text-gray-800 mb-4"
            >
              Methode 2 : App Mail - redimensionner au partage
            </h2>
            <p className="text-gray-600 mb-4">
              L&apos;app Mail integree a iOS propose automatiquement de reduire
              la taille des images jointes avant l&apos;envoi.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez l&apos;application <strong>Photos</strong> et
                selectionnez l&apos;image a redimensionner.
              </li>
              <li>
                Appuyez sur le bouton <strong>Partager</strong> et choisissez{" "}
                <strong>Mail</strong>.
              </li>
              <li>
                Redigez un e-mail (vous pouvez l&apos;envoyer a vous-meme) et
                appuyez sur <strong>Envoyer</strong>.
              </li>
              <li>
                iOS affiche une fenetre vous permettant de choisir la taille :{" "}
                <strong>Petite</strong>, <strong>Moyenne</strong>,{" "}
                <strong>Grande</strong> ou <strong>Taille reelle</strong>.
              </li>
              <li>
                Selectionnez la taille souhaitee. L&apos;image sera
                redimensionnee avant l&apos;envoi.
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
              Pour redimensionner vos images avec precision sans installer
              d&apos;application, utilisez notre outil en ligne directement
              depuis Safari.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez Safari et rendez-vous sur{" "}
                <Link
                  href="/redimensionner-image"
                  className="text-blue-600 hover:text-blue-800"
                >
                  heictojpg.fr/redimensionner-image
                </Link>
                .
              </li>
              <li>
                Appuyez sur la zone de depot et selectionnez{" "}
                <strong>&quot;Phototheque&quot;</strong> pour choisir vos images.
              </li>
              <li>
                Definissez les dimensions souhaitees, puis telechargez vos
                images redimensionnees.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conclusion
            </h2>
            <p className="text-gray-600 mb-4">
              Les Raccourcis iOS offrent le plus de controle pour redimensionner
              vos images avec des dimensions precises, tandis que l&apos;app
              Mail est une solution rapide pour un envoi ponctuel. Pour un
              redimensionnement precis sans installation, notre outil en ligne{" "}
              <Link
                href="/redimensionner-image"
                className="text-blue-600 hover:text-blue-800"
              >
                heictojpg.fr/redimensionner-image
              </Link>{" "}
              est la methode la plus pratique.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Guides pour autres appareils
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/redimensionner-image-sur-mac"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">Sur Mac</h3>
                <p className="text-sm text-gray-600">
                  Guide de redimensionnement d&apos;images sur macOS.
                </p>
              </Link>
              <Link
                href="/redimensionner-image-sur-windows"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">Sur Windows</h3>
                <p className="text-sm text-gray-600">
                  Guide de redimensionnement d&apos;images sur PC.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
