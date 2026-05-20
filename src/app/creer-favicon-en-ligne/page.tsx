import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Creer un Favicon en Ligne Gratuit [2026] | heictojpg.fr",
  description:
    "Comment creer un favicon pour votre site web : tailles requises (16x16, 32x32, 48x48, 180x180 Apple), format ICO. Outil gratuit en ligne pour redimensionner et convertir en ICO.",
  keywords: [
    "creer favicon en ligne",
    "favicon gratuit",
    "convertir png en ico",
    "taille favicon",
    "favicon apple touch icon",
    "generateur favicon",
  ],
  openGraph: {
    type: "website",
    title: "Creer un Favicon en Ligne Gratuit [2026]",
    description:
      "Guide complet pour creer un favicon : tailles, formats et outils gratuits en ligne.",
    url: "https://heictojpg.fr/creer-favicon-en-ligne",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Creer un Favicon en Ligne Gratuit [2026]",
    description:
      "Guide complet pour creer un favicon : tailles, formats et outils gratuits en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/creer-favicon-en-ligne",
  },
};

export default function CreerFaviconEnLigne() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment creer un favicon en ligne",
    description:
      "Etapes pour creer un favicon pour votre site web : redimensionner votre image en carre et la convertir au format ICO.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Preparer une image carree",
        text: "Partez d'une image carree de votre logo ou icone. L'ideal est une image PNG de 512x512 pixels minimum avec un fond transparent.",
        url: "https://heictojpg.fr/creer-favicon-en-ligne#etape-1",
      },
      {
        "@type": "HowToStep",
        name: "Redimensionner aux tailles requises",
        text: "Redimensionnez votre image aux tailles standard : 16x16, 32x32 et 48x48 pour le favicon ICO, et 180x180 pour l'Apple Touch Icon.",
        url: "https://heictojpg.fr/creer-favicon-en-ligne#etape-2",
      },
      {
        "@type": "HowToStep",
        name: "Convertir en format ICO",
        text: "Convertissez votre image PNG en format ICO pour le favicon principal. Ce format encapsule plusieurs tailles dans un seul fichier.",
        url: "https://heictojpg.fr/creer-favicon-en-ligne#etape-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Creer un favicon en ligne",
              href: "/creer-favicon-en-ligne",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment creer un favicon en ligne gratuitement
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Le favicon est cette petite icone qui apparait dans l&apos;onglet de
          votre navigateur. Il renforce l&apos;identite visuelle de votre site
          et aide vos visiteurs a le retrouver parmi leurs onglets ouverts.
          Decouvrez comment le creer facilement.
        </p>
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Creez votre favicon en quelques clics
          </h3>
          <p className="text-gray-600 mb-4">
            Redimensionnez votre image et convertissez-la en ICO directement
            dans votre navigateur. Gratuit et sans inscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/convertir-png-en-ico"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Convertir PNG en ICO
            </Link>
            <Link
              href="/redimensionner-image"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Redimensionner une image
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Les tailles de favicon requises en 2026
            </h2>
            <p className="text-gray-600 mb-4">
              Un favicon complet necessite plusieurs tailles pour couvrir
              tous les cas d&apos;utilisation :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Taille
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Format
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Utilisation
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border-b p-3 font-medium">16 x 16 px</td>
                    <td className="border-b p-3">ICO / PNG</td>
                    <td className="border-b p-3">Onglet du navigateur</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">32 x 32 px</td>
                    <td className="border-b p-3">ICO / PNG</td>
                    <td className="border-b p-3">Barre de favoris, onglets Retina</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">48 x 48 px</td>
                    <td className="border-b p-3">ICO</td>
                    <td className="border-b p-3">Raccourcis Windows</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">180 x 180 px</td>
                    <td className="border-b p-3">PNG</td>
                    <td className="border-b p-3">Apple Touch Icon (iPhone, iPad)</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">192 x 192 px</td>
                    <td className="border-b p-3">PNG</td>
                    <td className="border-b p-3">Android Chrome, PWA</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">512 x 512 px</td>
                    <td className="border-b p-3">PNG</td>
                    <td className="border-b p-3">PWA splash screen</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 1 : Preparer une image carree
            </h2>
            <p className="text-gray-600 mb-4">
              Le favicon doit etre une image <strong>parfaitement carree</strong>.
              Pour un resultat optimal :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                Partez d&apos;une image de <strong>512 x 512 px</strong>{" "}
                minimum (pour la qualite)
              </li>
              <li>
                Utilisez un <strong>fond transparent</strong> (PNG) pour un
                rendu propre dans les onglets
              </li>
              <li>
                Simplifiez votre logo : a 16x16 pixels, les details fins
                disparaissent
              </li>
              <li>
                Privilegiez les <strong>formes simples et les couleurs
                contrastees</strong>
              </li>
            </ul>
            <p className="text-gray-600">
              Si votre image n&apos;est pas carree, utilisez notre{" "}
              <Link
                href="/redimensionner-image"
                className="text-blue-600 hover:text-blue-800"
              >
                outil de redimensionnement
              </Link>{" "}
              pour la recadrer au bon ratio.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 2 : Redimensionner aux bonnes tailles
            </h2>
            <p className="text-gray-600 mb-4">
              A partir de votre image source en 512x512, creez les differentes
              tailles necessaires. Les tailles indispensables sont :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                <strong>32 x 32 px</strong> : le favicon principal pour les
                navigateurs modernes
              </li>
              <li>
                <strong>180 x 180 px</strong> : l&apos;Apple Touch Icon pour
                les appareils Apple
              </li>
            </ul>
            <p className="text-gray-600">
              Le format ICO peut encapsuler plusieurs tailles (16x16, 32x32,
              48x48) dans un seul fichier, ce qui le rend tres pratique.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 3 : Convertir en format ICO
            </h2>
            <p className="text-gray-600 mb-4">
              Le format <strong>ICO</strong> est le format traditionnel des
              favicons. Il est supporte par tous les navigateurs et systemes
              d&apos;exploitation. Pour convertir votre PNG en ICO :
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-4">
              <li>
                Rendez-vous sur notre{" "}
                <Link
                  href="/convertir-png-en-ico"
                  className="text-blue-600 hover:text-blue-800"
                >
                  outil de conversion PNG vers ICO
                </Link>
              </li>
              <li>
                Deposez votre image PNG carree
              </li>
              <li>
                Telechargez le fichier ICO genere
              </li>
              <li>
                Placez-le a la racine de votre site sous le nom{" "}
                <code className="bg-gray-100 px-1 rounded">favicon.ico</code>
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Code HTML pour integrer votre favicon
            </h2>
            <p className="text-gray-600 mb-4">
              Ajoutez ces lignes dans la balise{" "}
              <code className="bg-gray-100 px-1 rounded">&lt;head&gt;</code>{" "}
              de votre site :
            </p>
            <pre className="bg-gray-50 rounded-lg p-4 overflow-x-auto text-sm text-gray-700 mb-4">
              <code>{`<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">`}</code>
            </pre>
            <p className="text-gray-600">
              En 2026, la combinaison{" "}
              <strong>ICO + SVG + Apple Touch Icon</strong> couvre 100% des
              navigateurs et appareils.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conseils pour un bon favicon
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                <strong>Restez simple</strong> : a 16px, seules les formes
                essentielles sont visibles
              </li>
              <li>
                <strong>Utilisez des couleurs vives</strong> : votre favicon
                doit se demarquer parmi les onglets
              </li>
              <li>
                <strong>Evitez le texte</strong> : les lettres sont illisibles
                a 16px (sauf une seule lettre stylisee)
              </li>
              <li>
                <strong>Testez sur fond clair et sombre</strong> : les
                navigateurs utilisent des themes clairs et sombres
              </li>
              <li>
                <strong>Pensez au SVG</strong> : un favicon SVG s&apos;adapte
                parfaitement a toutes les tailles
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Guides associes
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/redimensionner-image-pour-cv"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Redimensionner une photo pour CV
                </h3>
                <p className="text-sm text-gray-600">
                  Preparer une photo aux dimensions standard pour un CV.
                </p>
              </Link>
              <Link
                href="/optimiser-image-pour-wordpress"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Optimiser images pour WordPress
                </h3>
                <p className="text-sm text-gray-600">
                  Guide complet pour optimiser les images de votre site.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
