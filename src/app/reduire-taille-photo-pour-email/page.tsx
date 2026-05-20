import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title:
    "Réduire la Taille d'une Photo pour l'Email [2026] | heictojpg.fr",
  description:
    "Comment réduire la taille d'une photo pour l'envoyer par email. Les photos iPhone font 3 à 5 Mo : apprenez à les redimensionner, compresser et convertir pour l'email.",
  keywords: [
    "réduire taille photo email",
    "réduire taille photo iPhone",
    "photo trop lourde email",
    "alléger photo pour email",
    "réduire poids photo",
  ],
  openGraph: {
    type: "website",
    title: "Réduire la Taille d'une Photo pour l'Email [2026]",
    description:
      "Vos photos iPhone sont trop lourdes pour l'email ? Apprenez à les redimensionner, compresser et convertir en 3 étapes.",
    url: "https://heictojpg.fr/reduire-taille-photo-pour-email",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Réduire la Taille d'une Photo pour l'Email [2026]",
    description:
      "Vos photos iPhone sont trop lourdes pour l'email ? Apprenez à les redimensionner, compresser et convertir en 3 étapes.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/reduire-taille-photo-pour-email",
  },
};

export default function ReduireTaillePhotoPourEmail() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment réduire la taille d'une photo pour l'email",
    description:
      "3 étapes pour réduire la taille de vos photos iPhone et les envoyer facilement par email.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Redimensionner la photo",
        text: "Réduisez la résolution de votre photo à 1920px de large maximum. Les photos iPhone en 4032px sont beaucoup trop grandes pour un email.",
        url: "https://heictojpg.fr/reduire-taille-photo-pour-email#etape-1",
      },
      {
        "@type": "HowToStep",
        name: "Compresser la photo",
        text: "Appliquez une compression JPEG entre 70% et 80% de qualité pour réduire significativement le poids du fichier sans perte visible.",
        url: "https://heictojpg.fr/reduire-taille-photo-pour-email#etape-2",
      },
      {
        "@type": "HowToStep",
        name: "Convertir en JPG si la photo est en HEIC",
        text: "Si votre photo est au format HEIC (format par défaut de l'iPhone), convertissez-la en JPG pour assurer la compatibilité avec tous les appareils du destinataire.",
        url: "https://heictojpg.fr/reduire-taille-photo-pour-email#etape-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Réduire la taille d'une photo pour email",
              href: "/reduire-taille-photo-pour-email",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Réduire la taille d&apos;une photo pour l&apos;envoyer par email
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Les photos prises avec un iPhone pèsent entre 3 et 5 Mo chacune, voire
          plus avec le mode 48 mégapixels des iPhone récents. Avec une limite de
          25 Mo sur Gmail et seulement 10 Mo chez certains fournisseurs, il
          suffit de quelques photos pour bloquer votre envoi. Voici comment
          réduire leur taille efficacement.
        </p>
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Réduisez vos photos en quelques secondes
          </h3>
          <p className="text-gray-600 mb-4">
            Compressez et redimensionnez vos photos directement dans votre
            navigateur. Gratuit, sans inscription, traitement 100% local.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/compresser-image"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Compresser mes photos
            </Link>
            <Link
              href="/redimensionner-image"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Redimensionner mes photos
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Pourquoi les photos iPhone sont-elles si lourdes ?
            </h2>
            <p className="text-gray-600 mb-4">
              Les iPhone récents prennent des photos de très haute résolution
              pour offrir la meilleure qualité possible. Mais cette qualité a un
              coût en termes de taille de fichier :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                <strong>iPhone 15/16</strong> : photos de 48 mégapixels
                (8064 x 6048 px), jusqu&apos;à <strong>5-7 Mo</strong> par
                photo
              </li>
              <li>
                <strong>iPhone 13/14</strong> : photos de 12 mégapixels
                (4032 x 3024 px), environ <strong>3-4 Mo</strong> par photo
              </li>
              <li>
                <strong>Format HEIC</strong> : format par défaut de l&apos;iPhone,
                plus compact que JPG mais incompatible avec certains systèmes
              </li>
              <li>
                <strong>Mode ProRAW</strong> : photos de 25 à 75 Mo chacune,
                impossibles à envoyer par email sans compression
              </li>
            </ul>
            <p className="text-gray-600">
              Avec 5 photos de 5 Mo, vous atteignez déjà les 25 Mo de limite
              Gmail. Chez Orange ou Free (10 Mo de limite), deux photos suffisent
              à bloquer l&apos;envoi.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 1 : Redimensionner la photo
            </h2>
            <p className="text-gray-600 mb-4">
              La première étape et la plus efficace est de réduire la résolution
              de votre image. Une photo de 4032px de large est destinée à
              l&apos;impression ou au zoom intensif. Pour un affichage sur écran
              dans un email, <strong>1920px de large</strong> est amplement
              suffisant.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 font-medium mb-2">
                Impact du redimensionnement sur la taille :
              </p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>4032 x 3024 px (original) : ~4 Mo</li>
                <li>1920 x 1440 px (Full HD) : ~1,2 Mo</li>
                <li>1280 x 960 px (HD) : ~600 Ko</li>
                <li>800 x 600 px (web) : ~250 Ko</li>
              </ul>
            </div>
            <p className="text-gray-600">
              Utilisez notre{" "}
              <Link
                href="/redimensionner-image"
                className="text-blue-600 hover:text-blue-800"
              >
                outil de redimensionnement
              </Link>{" "}
              pour ajuster la taille de vos photos en un clic.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 2 : Compresser la photo
            </h2>
            <p className="text-gray-600 mb-4">
              Après le redimensionnement, appliquez une compression pour réduire
              encore davantage la taille. La compression JPEG supprime des
              informations invisibles à l&apos;oeil nu pour alléger le fichier.
            </p>
            <p className="text-gray-600 mb-4">
              Le réglage idéal pour un email se situe entre{" "}
              <strong>70% et 80% de qualité</strong>. A ce niveau, la
              différence avec l&apos;original est imperceptible sur un écran, mais
              le fichier est 2 à 3 fois plus léger.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 font-medium mb-2">Gain typique :</p>
              <p className="text-gray-600 text-sm">
                Photo iPhone redimensionnée (1920px) + compression 75% = environ{" "}
                <strong>300-400 Ko</strong> au lieu de 4 Mo. Vous pouvez envoyer
                plus de 60 photos dans un seul email Gmail.
              </p>
            </div>
            <p className="text-gray-600">
              Notre{" "}
              <Link
                href="/compresser-image"
                className="text-blue-600 hover:text-blue-800"
              >
                outil de compression d&apos;image
              </Link>{" "}
              vous permet de choisir le niveau de qualité et de voir la taille
              résultante en temps réel.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 3 : Convertir en JPG si la photo est en HEIC
            </h2>
            <p className="text-gray-600 mb-4">
              Depuis iOS 11, les iPhone enregistrent les photos au format HEIC
              par défaut. Ce format est plus compact que le JPG, mais il pose
              des problèmes de compatibilité :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                Les PC sous <strong>Windows</strong> ne peuvent pas toujours
                ouvrir les fichiers HEIC sans logiciel supplémentaire
              </li>
              <li>
                Les anciennes versions d&apos;<strong>Android</strong> ne
                supportent pas le HEIC
              </li>
              <li>
                Certains <strong>webmails</strong> ne prévisualisent pas les
                fichiers HEIC dans l&apos;email
              </li>
            </ul>
            <p className="text-gray-600 mb-4">
              Pour être certain que votre correspondant pourra ouvrir vos
              photos, convertissez-les en JPG. C&apos;est le format le plus
              universel et le plus compatible.
            </p>
            <p className="text-gray-600">
              Utilisez notre{" "}
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                convertisseur HEIC vers JPG
              </Link>{" "}
              pour cette étape.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Récapitulatif : de 5 Mo à 300 Ko en 3 étapes
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Etape
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Action
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Taille résultante
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border-b p-3">Original</td>
                    <td className="border-b p-3">Photo iPhone HEIC</td>
                    <td className="border-b p-3 font-medium">~5 Mo</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3">1. Redimensionner</td>
                    <td className="border-b p-3">1920px de large</td>
                    <td className="border-b p-3 font-medium">~1,5 Mo</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3">2. Compresser</td>
                    <td className="border-b p-3">Qualité 75%</td>
                    <td className="border-b p-3 font-medium">~400 Ko</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3">3. Convertir en JPG</td>
                    <td className="border-b p-3">HEIC vers JPG</td>
                    <td className="border-b p-3 font-medium">~300 Ko</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conclusion
            </h2>
            <p className="text-gray-600 mb-4">
              En combinant redimensionnement, compression et conversion au
              format JPG, vous pouvez réduire la taille de vos photos iPhone de
              plus de 90%. Nos outils gratuits{" "}
              <Link
                href="/compresser-image"
                className="text-blue-600 hover:text-blue-800"
              >
                de compression
              </Link>{" "}
              et{" "}
              <Link
                href="/redimensionner-image"
                className="text-blue-600 hover:text-blue-800"
              >
                de redimensionnement
              </Link>{" "}
              fonctionnent directement dans votre navigateur, sans installation
              et sans envoyer vos photos sur un serveur.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Guides associés
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/compresser-image-pour-email"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Compresser une image pour email
                </h3>
                <p className="text-sm text-gray-600">
                  Guide complet sur les limites par messagerie et les techniques
                  de compression.
                </p>
              </Link>
              <Link
                href="/convertir-heic-en-jpg-sur-iphone"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Convertir HEIC en JPG sur iPhone
                </h3>
                <p className="text-sm text-gray-600">
                  3 méthodes pour convertir vos photos HEIC sur iPhone.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
