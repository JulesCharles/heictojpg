import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Compresser une Image sur Mac [2026] | heictojpg.fr",
  description:
    "Apprenez a compresser vos images sur Mac. Utilisez Apercu, Automator ou notre outil en ligne heictojpg.fr. Guide complet avec 3 methodes.",
  openGraph: {
    type: "website",
    title: "Compresser une Image sur Mac - Guide complet [2026]",
    description:
      "3 methodes pour compresser vos images sur Mac : Apercu, Automator ou en ligne avec heictojpg.fr.",
    url: "https://heictojpg.fr/compresser-image-sur-mac",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Compresser une Image sur Mac - Guide complet [2026]",
    description:
      "3 methodes pour compresser vos images sur Mac : Apercu, Automator ou en ligne avec heictojpg.fr.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/compresser-image-sur-mac",
  },
};

export default function CompresserImageMac() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment compresser une image sur Mac",
    description:
      "3 methodes pour compresser vos images sur Mac : Apercu, Automator ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Apercu - Exporter avec qualite reduite",
        text: "Ouvrez votre image dans Apercu, allez dans Fichier > Exporter, choisissez le format JPEG et ajustez le curseur de qualite.",
        url: "https://heictojpg.fr/compresser-image-sur-mac#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Automator - compression par lot",
        text: "Creez un flux Automator pour compresser automatiquement plusieurs images en une seule operation.",
        url: "https://heictojpg.fr/compresser-image-sur-mac#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Compresser en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/compresser-image dans votre navigateur, selectionnez vos images et telechargez les fichiers compresses.",
        url: "https://heictojpg.fr/compresser-image-sur-mac#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Compresser une Image sur Mac",
              href: "/compresser-image-sur-mac",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment compresser une image sur Mac
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Les images haute resolution de votre Mac peuvent rapidement occuper
          beaucoup d&apos;espace disque ou etre trop lourdes pour l&apos;envoi par
          e-mail. Decouvrez 3 methodes natives et en ligne pour compresser vos
          images sur macOS tout en preservant une qualite acceptable.
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
            quelques secondes, directement depuis votre navigateur sur Mac.
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
              Methode 1 : Apercu - Exporter avec qualite reduite
            </h2>
            <p className="text-gray-600 mb-4">
              L&apos;application Apercu integree a macOS permet d&apos;exporter
              vos images avec un niveau de qualite ajustable, ce qui reduit
              efficacement la taille du fichier.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez votre image avec <strong>Apercu</strong> (double-cliquez
                sur l&apos;image ou faites un clic droit &gt; Ouvrir avec &gt;
                Apercu).
              </li>
              <li>
                Allez dans <strong>Fichier &gt; Exporter...</strong>
              </li>
              <li>
                Choisissez le format <strong>JPEG</strong> dans le menu
                deroulant.
              </li>
              <li>
                Ajustez le <strong>curseur de qualite</strong> vers la gauche
                pour reduire la taille du fichier. Une qualite de 60-70%
                offre un bon compromis.
              </li>
              <li>
                Cliquez sur <strong>Enregistrer</strong>. Le fichier exporte
                sera nettement plus leger que l&apos;original.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2
              id="methode-2"
              className="text-2xl font-semibold text-gray-800 mb-4"
            >
              Methode 2 : Automator - compression par lot
            </h2>
            <p className="text-gray-600 mb-4">
              Automator vous permet de creer un flux de travail reutilisable
              pour compresser plusieurs images en une seule operation.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez <strong>Automator</strong> et creez un nouveau{" "}
                <strong>Processus</strong>.
              </li>
              <li>
                Dans la bibliotheque d&apos;actions, recherchez et ajoutez{" "}
                <strong>&quot;Modifier le type des images&quot;</strong>.
                Choisissez JPEG comme format de sortie.
              </li>
              <li>
                Ajoutez l&apos;action{" "}
                <strong>
                  &quot;Dimensionner les images&quot;
                </strong>{" "}
                si vous souhaitez aussi reduire les dimensions.
              </li>
              <li>
                Enregistrez le processus comme <strong>Action rapide</strong>.
                Il sera ensuite accessible via le clic droit sur n&apos;importe
                quel fichier image dans le Finder.
              </li>
              <li>
                Selectionnez vos images dans le Finder, faites un clic droit et
                choisissez votre action dans{" "}
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
              Pour compresser rapidement vos images sans configuration, utilisez
              notre compresseur en ligne directement depuis votre navigateur.
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
                depuis votre Mac.
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
              Apercu est ideal pour compresser une image a la fois avec un
              controle precis sur la qualite, tandis qu&apos;Automator excelle
              pour les traitements par lot. Pour une solution rapide sans
              installation, notre outil en ligne{" "}
              <Link
                href="/compresser-image"
                className="text-blue-600 hover:text-blue-800"
              >
                heictojpg.fr/compresser-image
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
                href="/compresser-image-sur-iphone"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">Sur iPhone</h3>
                <p className="text-sm text-gray-600">
                  Guide de compression d&apos;images sur iOS.
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
