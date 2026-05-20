import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Redimensionner une Image sur Mac [2026] | heictojpg.fr",
  description:
    "Apprenez a redimensionner vos images sur Mac. Utilisez Apercu, Automator ou notre outil en ligne heictojpg.fr. Guide complet avec 3 methodes.",
  openGraph: {
    type: "website",
    title: "Redimensionner une Image sur Mac - Guide complet [2026]",
    description:
      "3 methodes pour redimensionner vos images sur Mac : Apercu, Automator ou en ligne avec heictojpg.fr.",
    url: "https://heictojpg.fr/redimensionner-image-sur-mac",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Redimensionner une Image sur Mac - Guide complet [2026]",
    description:
      "3 methodes pour redimensionner vos images sur Mac : Apercu, Automator ou en ligne avec heictojpg.fr.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/redimensionner-image-sur-mac",
  },
};

export default function RedimensionnerImageMac() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment redimensionner une image sur Mac",
    description:
      "3 methodes pour redimensionner vos images sur Mac : Apercu, Automator ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Apercu - Outils > Ajuster la taille",
        text: "Ouvrez votre image dans Apercu, allez dans Outils > Ajuster la taille et definissez les nouvelles dimensions.",
        url: "https://heictojpg.fr/redimensionner-image-sur-mac#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Automator - redimensionnement par lot",
        text: "Creez un flux Automator pour redimensionner automatiquement plusieurs images en une seule operation.",
        url: "https://heictojpg.fr/redimensionner-image-sur-mac#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Redimensionner en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/redimensionner-image dans votre navigateur, selectionnez vos images et telechargez les fichiers redimensionnes.",
        url: "https://heictojpg.fr/redimensionner-image-sur-mac#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Redimensionner une Image sur Mac",
              href: "/redimensionner-image-sur-mac",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment redimensionner une image sur Mac
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Besoin de reduire les dimensions de vos images pour un site web, un
          e-mail ou un document ? macOS propose des outils integres puissants
          pour redimensionner vos images. Decouvrez 3 methodes simples et
          efficaces.
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
            en quelques secondes, directement depuis votre navigateur sur Mac.
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
              Methode 1 : Apercu - Outils &gt; Ajuster la taille
            </h2>
            <p className="text-gray-600 mb-4">
              L&apos;application Apercu integree a macOS offre une fonction de
              redimensionnement precise et facile a utiliser.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez votre image avec <strong>Apercu</strong> (double-cliquez
                sur l&apos;image ou faites un clic droit &gt; Ouvrir avec &gt;
                Apercu).
              </li>
              <li>
                Allez dans le menu{" "}
                <strong>Outils &gt; Ajuster la taille...</strong>
              </li>
              <li>
                Saisissez les nouvelles dimensions en pixels, pouces ou
                pourcentage. Cochez{" "}
                <strong>&quot;Mettre a l&apos;echelle
                proportionnellement&quot;</strong>{" "}
                pour conserver les proportions.
              </li>
              <li>
                Cliquez sur <strong>OK</strong>, puis enregistrez l&apos;image
                avec <strong>Fichier &gt; Enregistrer</strong> ou{" "}
                <strong>Exporter</strong> pour creer une copie.
              </li>
              <li>
                Astuce : vous pouvez selectionner plusieurs images dans Apercu
                et les redimensionner toutes en meme temps.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2
              id="methode-2"
              className="text-2xl font-semibold text-gray-800 mb-4"
            >
              Methode 2 : Automator - redimensionnement par lot
            </h2>
            <p className="text-gray-600 mb-4">
              Automator vous permet de creer une action rapide reutilisable pour
              redimensionner des lots d&apos;images en un seul clic.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez <strong>Automator</strong> et creez une nouvelle{" "}
                <strong>Action rapide</strong>.
              </li>
              <li>
                Configurez &quot;Le processus recoit&quot; sur{" "}
                <strong>fichiers image</strong> dans{" "}
                <strong>Finder</strong>.
              </li>
              <li>
                Ajoutez l&apos;action{" "}
                <strong>&quot;Copier les elements du Finder&quot;</strong> pour
                travailler sur des copies (facultatif mais recommande).
              </li>
              <li>
                Ajoutez l&apos;action{" "}
                <strong>&quot;Dimensionner les images&quot;</strong> et
                definissez la taille souhaitee en pixels.
              </li>
              <li>
                Enregistrez l&apos;action. Selectionnez ensuite vos images dans
                le Finder, faites un clic droit et choisissez votre action dans{" "}
                <strong>Actions rapides</strong>.
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
              Pour redimensionner vos images rapidement sans configuration,
              utilisez notre outil en ligne directement depuis votre navigateur.
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
                depuis votre Mac.
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
              Apercu est la methode la plus directe pour redimensionner une ou
              plusieurs images sur Mac, tandis qu&apos;Automator est ideal pour
              les traitements par lot reguliers. Pour un redimensionnement
              rapide sans configuration, notre outil en ligne{" "}
              <Link
                href="/redimensionner-image"
                className="text-blue-600 hover:text-blue-800"
              >
                heictojpg.fr/redimensionner-image
              </Link>{" "}
              est la solution la plus pratique.
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
