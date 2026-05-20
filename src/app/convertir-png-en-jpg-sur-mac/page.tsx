import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir PNG en JPG sur Mac [2026] | heictojpg.fr",
  description:
    "Apprenez à convertir vos images PNG en JPG sur Mac. Utilisez Aperçu, Automator ou convertissez en ligne avec heictojpg.fr. Guide complet.",
  openGraph: {
    type: "website",
    title: "Convertir PNG en JPG sur Mac - Guide complet [2026]",
    description:
      "Apprenez à convertir vos images PNG en JPG sur Mac via Aperçu, Automator ou en ligne.",
    url: "https://heictojpg.fr/convertir-png-en-jpg-sur-mac",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Convertir PNG en JPG sur Mac - Guide complet [2026]",
    description:
      "Apprenez à convertir vos images PNG en JPG sur Mac via Aperçu, Automator ou en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-png-en-jpg-sur-mac",
  },
};

export default function ConvertirPngMac() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment convertir PNG en JPG sur Mac",
    description: "3 methodes pour convertir vos images PNG en JPG sur Mac : Apercu, Automator ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Apercu (Fichier > Exporter > JPEG)",
        text: "Ouvrez votre image PNG dans Apercu, puis allez dans Fichier > Exporter et choisissez JPEG comme format.",
        url: "https://heictojpg.fr/convertir-png-en-jpg-sur-mac#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Automator (conversion par lot)",
        text: "Creez un flux Automator pour convertir plusieurs images PNG en JPG en une seule operation.",
        url: "https://heictojpg.fr/convertir-png-en-jpg-sur-mac#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Convertir en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/convertir-png-en-jpg, selectionnez vos images PNG, et telechargez les fichiers JPG convertis.",
        url: "https://heictojpg.fr/convertir-png-en-jpg-sur-mac#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir PNG en JPG sur Mac", href: "/convertir-png-en-jpg-sur-mac" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment convertir PNG en JPG sur Mac
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Les fichiers PNG sont courants sur Mac, notamment pour les captures
          d&apos;écran. Cependant, le format JPG offre une taille de fichier
          réduite, idéale pour le partage et le web. Voici trois méthodes
          simples pour convertir vos images PNG en JPG sur macOS.
        </p>
      </PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Convertissez vos images PNG instantanément
        </h3>
        <p className="text-gray-600 mb-4">
          Utilisez notre outil gratuit en ligne pour convertir vos fichiers
          PNG en JPG en quelques secondes, directement depuis votre navigateur.
        </p>
        <Link
          href="/convertir-png-en-jpg"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Convertir mes images PNG en JPG
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 id="methode-1" className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 1 : Utiliser Aperçu (Fichier &gt; Exporter &gt; JPEG)
          </h2>
          <p className="text-gray-600 mb-4">
            Aperçu est l&apos;application native de macOS pour visualiser les
            images. Elle permet d&apos;exporter facilement un fichier PNG au
            format JPEG.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Double-cliquez sur votre image PNG pour l&apos;ouvrir dans{" "}
              <strong>Aperçu</strong>.
            </li>
            <li>
              Dans la barre de menus, cliquez sur{" "}
              <strong>Fichier &gt; Exporter...</strong>
            </li>
            <li>
              Dans le menu déroulant <strong>Format</strong>, sélectionnez{" "}
              <strong>JPEG</strong>.
            </li>
            <li>
              Ajustez la qualité si nécessaire à l&apos;aide du curseur, puis
              cliquez sur <strong>Enregistrer</strong>.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 id="methode-2" className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 2 : Automator (conversion par lot)
          </h2>
          <p className="text-gray-600 mb-4">
            Si vous avez de nombreuses images PNG à convertir, Automator vous
            permet de créer un flux de travail pour les traiter toutes en une
            seule opération.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez <strong>Automator</strong> depuis le dossier Applications
              et créez un nouveau <strong>Flux de travail</strong>.
            </li>
            <li>
              Ajoutez l&apos;action{" "}
              <strong>&quot;Modifier le type des images&quot;</strong> depuis la
              bibliothèque d&apos;actions. Sélectionnez <strong>JPEG</strong>{" "}
              comme format de sortie.
            </li>
            <li>
              Faites glisser vos fichiers PNG dans le flux de travail ou
              ajoutez l&apos;action{" "}
              <strong>&quot;Demander des éléments du Finder&quot;</strong>.
            </li>
            <li>
              Cliquez sur <strong>Exécuter</strong>. Toutes vos images PNG
              seront converties en JPG automatiquement.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 id="methode-3" className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 3 : En ligne avec heictojpg.fr
          </h2>
          <p className="text-gray-600 mb-4">
            Pour convertir rapidement vos images PNG sans ouvrir d&apos;application,
            utilisez notre convertisseur en ligne directement depuis votre
            navigateur.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez votre navigateur et rendez-vous sur{" "}
              <Link href="/convertir-png-en-jpg" className="text-blue-600 hover:text-blue-800">
                heictojpg.fr/convertir-png-en-jpg
              </Link>
              .
            </li>
            <li>
              Glissez-déposez vos images PNG dans la zone de conversion ou
              cliquez pour sélectionner vos fichiers.
            </li>
            <li>
              La conversion est instantanée. Téléchargez vos images JPG en un
              clic.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-600 mb-4">
            Aperçu est idéal pour convertir des images une par une, tandis
            qu&apos;Automator excelle pour les conversions par lot. Pour une
            solution rapide sans configuration, notre outil en ligne{" "}
            <Link href="/convertir-png-en-jpg" className="text-blue-600 hover:text-blue-800">
              heictojpg.fr/convertir-png-en-jpg
            </Link>{" "}
            est la solution la plus pratique : rapide, gratuit et sans
            installation.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/convertir-png-en-jpg-sur-iphone" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur iPhone</h3>
              <p className="text-sm text-gray-600">Guide de conversion PNG en JPG sur iOS.</p>
            </Link>
            <Link href="/convertir-png-en-jpg-sur-windows" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Windows</h3>
              <p className="text-sm text-gray-600">Guide de conversion PNG en JPG sur PC.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
