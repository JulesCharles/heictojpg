import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir Photos iPhone pour PC [2026] | heictojpg.fr",
  description:
    "Comment convertir vos photos iPhone HEIC pour les ouvrir sur PC Windows. 3 methodes simples : conversion en ligne, reglage iPhone, transfert automatique en JPEG.",
  keywords: [
    "convertir photo iphone pour pc",
    "heic en jpg pc",
    "photo iphone windows",
    "ouvrir heic sur pc",
    "transferer photo iphone pc",
  ],
  openGraph: {
    type: "website",
    title: "Convertir Photos iPhone pour PC [2026]",
    description:
      "3 methodes pour convertir vos photos iPhone HEIC et les ouvrir sur PC Windows sans probleme.",
    url: "https://heictojpg.fr/convertir-photo-iphone-pour-pc",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Convertir Photos iPhone pour PC [2026]",
    description:
      "3 methodes pour convertir vos photos iPhone HEIC et les ouvrir sur PC Windows sans probleme.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-photo-iphone-pour-pc",
  },
};

export default function ConvertirPhotoIphonePourPc() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment convertir des photos iPhone pour PC",
    description:
      "3 methodes pour convertir les photos HEIC de votre iPhone en JPEG compatible avec Windows.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Convertir en ligne avec heictojpg.fr",
        text: "Transferez vos photos sur votre PC, puis utilisez heictojpg.fr pour les convertir de HEIC en JPG directement dans votre navigateur.",
        url: "https://heictojpg.fr/convertir-photo-iphone-pour-pc#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Configurer l'iPhone pour envoyer en JPEG",
        text: "Dans Reglages > Photos > Transferer vers Mac ou PC, selectionnez 'Automatique' pour que l'iPhone convertisse automatiquement en JPEG lors du transfert.",
        url: "https://heictojpg.fr/convertir-photo-iphone-pour-pc#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Changer le format de prise de vue",
        text: "Dans Reglages > Appareil photo > Formats, selectionnez 'Le plus compatible' pour prendre vos photos directement en JPEG.",
        url: "https://heictojpg.fr/convertir-photo-iphone-pour-pc#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Convertir photos iPhone pour PC",
              href: "/convertir-photo-iphone-pour-pc",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment convertir vos photos iPhone pour PC Windows
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Vos photos iPhone ne s&apos;ouvrent pas sur votre PC ? C&apos;est
          a cause du format HEIC, incompatible avec Windows par defaut.
          Decouvrez 3 methodes simples pour convertir et transferer vos photos
          sans perdre en qualite.
        </p>
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Convertissez vos photos HEIC en JPG instantanement
          </h3>
          <p className="text-gray-600 mb-4">
            Deposez vos fichiers HEIC et telechargez-les en JPG. Gratuit, sans
            inscription, traitement 100% dans votre navigateur.
          </p>
          <Link
            href="/convertir-heic-en-jpg"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Convertir HEIC en JPG maintenant
          </Link>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Pourquoi les photos iPhone ne s&apos;ouvrent pas sur PC ?
            </h2>
            <p className="text-gray-600 mb-4">
              Depuis iOS 11 (2017), les iPhone prennent les photos au format{" "}
              <strong>HEIC</strong> (High Efficiency Image Container) par
              defaut. Ce format offre une meilleure compression que le JPEG,
              mais il pose un probleme de compatibilite :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Windows 10/11</strong> : ne supporte pas le HEIC par
                defaut (il faut installer une extension payante depuis le
                Microsoft Store)
              </li>
              <li>
                <strong>Logiciels Windows</strong> : Photoshop, Paint,
                Paint.NET et la plupart des logiciels ne reconnaissent pas le
                HEIC
              </li>
              <li>
                <strong>Navigateurs</strong> : Chrome et Firefox ne peuvent pas
                afficher les fichiers HEIC
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="methode-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Methode 1 : Convertir en ligne (la plus simple)
            </h2>
            <p className="text-gray-600 mb-4">
              La methode la plus rapide est d&apos;utiliser un convertisseur
              en ligne. Voici comment faire :
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-4">
              <li>
                Transferez vos photos de l&apos;iPhone vers le PC (par cable
                USB, AirDrop, iCloud ou email)
              </li>
              <li>
                Rendez-vous sur{" "}
                <Link
                  href="/convertir-heic-en-jpg"
                  className="text-blue-600 hover:text-blue-800"
                >
                  heictojpg.fr/convertir-heic-en-jpg
                </Link>
              </li>
              <li>
                Deposez vos fichiers HEIC dans la zone de depot
              </li>
              <li>
                Telechargez les fichiers JPG convertis
              </li>
            </ol>
            <p className="text-gray-600">
              Avantage : la conversion se fait{" "}
              <strong>directement dans votre navigateur</strong>, vos photos ne
              sont jamais envoyees sur un serveur. Vous pouvez convertir
              plusieurs fichiers a la fois.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="methode-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Methode 2 : Configurer le transfert automatique en JPEG
            </h2>
            <p className="text-gray-600 mb-4">
              Vous pouvez configurer votre iPhone pour convertir
              automatiquement les photos en JPEG lors du transfert vers un PC :
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-4">
              <li>
                Ouvrez <strong>Reglages</strong> sur votre iPhone
              </li>
              <li>
                Allez dans <strong>Photos</strong>
              </li>
              <li>
                En bas, dans la section{" "}
                <strong>Transferer vers Mac ou PC</strong>, selectionnez{" "}
                <strong>Automatique</strong>
              </li>
            </ol>
            <p className="text-gray-600 mb-4">
              Avec ce reglage, l&apos;iPhone convertira automatiquement vos
              photos en JPEG chaque fois que vous les transferez par cable USB.
              Les originaux restent en HEIC sur l&apos;iPhone.
            </p>
            <p className="text-gray-600 text-sm">
              Note : ce reglage ne s&apos;applique qu&apos;au transfert par
              cable. Les photos envoyees via AirDrop ou iCloud resteront en
              HEIC.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="methode-3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Methode 3 : Prendre les photos directement en JPEG
            </h2>
            <p className="text-gray-600 mb-4">
              Si vous n&apos;avez pas besoin de la compression HEIC, vous
              pouvez configurer l&apos;iPhone pour prendre les photos
              directement en JPEG :
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-4">
              <li>
                Ouvrez <strong>Reglages</strong> &gt;{" "}
                <strong>Appareil photo</strong>
              </li>
              <li>
                Appuyez sur <strong>Formats</strong>
              </li>
              <li>
                Selectionnez <strong>Le plus compatible</strong>
              </li>
            </ol>
            <p className="text-gray-600 mb-4">
              Inconvenients de cette methode :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Les photos occupent <strong>2 fois plus d&apos;espace</strong>{" "}
                sur votre iPhone
              </li>
              <li>
                Vous perdez l&apos;acces aux videos 4K 60fps et certaines
                fonctionnalites avancees
              </li>
              <li>
                Les photos ProRAW et ProRes ne sont plus disponibles
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Comparaison des 3 methodes
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Methode
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Avantage
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Inconvenient
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border-b p-3 font-medium">Conversion en ligne</td>
                    <td className="border-b p-3">Rapide, pas de reglage a changer</td>
                    <td className="border-b p-3">Necessite une etape manuelle</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Transfert automatique</td>
                    <td className="border-b p-3">Transparent, garde HEIC sur iPhone</td>
                    <td className="border-b p-3">Uniquement par cable USB</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Prise en JPEG</td>
                    <td className="border-b p-3">Aucune conversion necessaire</td>
                    <td className="border-b p-3">Perte de fonctionnalites, espace double</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Guides associes
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/convertir-heic-pour-wordpress"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Convertir HEIC pour WordPress
                </h3>
                <p className="text-sm text-gray-600">
                  Utilisez vos photos iPhone sur votre site WordPress.
                </p>
              </Link>
              <Link
                href="/compresser-image-pour-email"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Compresser une image pour email
                </h3>
                <p className="text-sm text-gray-600">
                  Reduire le poids de vos photos pour l&apos;envoi par email.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
