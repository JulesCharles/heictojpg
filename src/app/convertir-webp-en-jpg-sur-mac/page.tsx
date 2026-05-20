import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir WebP en JPG sur Mac [2026] | heictojpg.fr",
  description:
    "Apprenez à convertir vos images WebP en JPG sur Mac. Utilisez Aperçu, le Terminal avec sips ou convertissez en ligne avec heictojpg.fr. Guide complet.",
  openGraph: {
    type: "website",
    title: "Convertir WebP en JPG sur Mac - Guide complet [2026]",
    description:
      "Apprenez à convertir vos images WebP en JPG sur Mac via Aperçu, le Terminal ou en ligne.",
    url: "https://heictojpg.fr/convertir-webp-en-jpg-sur-mac",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Convertir WebP en JPG sur Mac - Guide complet [2026]",
    description:
      "Apprenez à convertir vos images WebP en JPG sur Mac via Aperçu, le Terminal ou en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-webp-en-jpg-sur-mac",
  },
};

export default function ConvertirWebpMac() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment convertir WebP en JPG sur Mac",
    description: "3 methodes pour convertir vos images WebP en JPG sur Mac : Apercu, Terminal avec sips ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Apercu (Fichier > Exporter > JPEG)",
        text: "Ouvrez votre image WebP dans Apercu, puis allez dans Fichier > Exporter et choisissez JPEG comme format.",
        url: "https://heictojpg.fr/convertir-webp-en-jpg-sur-mac#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Terminal avec sips",
        text: "Utilisez la commande sips dans le Terminal pour convertir vos images WebP en JPEG rapidement.",
        url: "https://heictojpg.fr/convertir-webp-en-jpg-sur-mac#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Convertir en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/convertir-webp-en-jpg, selectionnez vos images WebP, et telechargez les fichiers JPG convertis.",
        url: "https://heictojpg.fr/convertir-webp-en-jpg-sur-mac#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir WebP en JPG sur Mac", href: "/convertir-webp-en-jpg-sur-mac" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment convertir WebP en JPG sur Mac
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Le format WebP, développé par Google, est de plus en plus utilisé sur
          le web. Bien que macOS prenne en charge ce format, il peut être
          nécessaire de convertir vos images WebP en JPG pour une meilleure
          compatibilité. Voici trois méthodes simples pour y parvenir sur Mac.
        </p>
      </PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Convertissez vos images WebP instantanément
        </h3>
        <p className="text-gray-600 mb-4">
          Utilisez notre outil gratuit en ligne pour convertir vos fichiers
          WebP en JPG en quelques secondes, directement depuis votre navigateur.
        </p>
        <Link
          href="/convertir-webp-en-jpg"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Convertir mes images WebP en JPG
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 id="methode-1" className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 1 : Utiliser Aperçu (Fichier &gt; Exporter &gt; JPEG)
          </h2>
          <p className="text-gray-600 mb-4">
            Aperçu, l&apos;application native de macOS, prend en charge le
            format WebP et permet de l&apos;exporter facilement au format JPEG.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Double-cliquez sur votre image WebP pour l&apos;ouvrir dans{" "}
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
            Méthode 2 : Terminal avec sips
          </h2>
          <p className="text-gray-600 mb-4">
            La commande <code className="bg-gray-100 px-1 rounded">sips</code>{" "}
            (Scriptable Image Processing System) est intégrée à macOS et
            permet de convertir des images en ligne de commande, idéal pour
            le traitement par lot.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez le <strong>Terminal</strong> (Applications &gt; Utilitaires
              &gt; Terminal).
            </li>
            <li>
              Pour convertir une seule image, tapez :{" "}
              <code className="bg-gray-100 px-2 py-1 rounded text-sm block mt-1">
                sips -s format jpeg image.webp --out image.jpg
              </code>
            </li>
            <li>
              Pour convertir toutes les images WebP d&apos;un dossier :{" "}
              <code className="bg-gray-100 px-2 py-1 rounded text-sm block mt-1">
                for f in *.webp; do sips -s format jpeg &quot;$f&quot; --out
                &quot;$&#123;f%.webp&#125;.jpg&quot;; done
              </code>
            </li>
            <li>
              Les fichiers JPG sont créés dans le même dossier que les
              originaux.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 id="methode-3" className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 3 : En ligne avec heictojpg.fr
          </h2>
          <p className="text-gray-600 mb-4">
            Pour convertir rapidement vos images WebP sans ouvrir le Terminal,
            utilisez notre convertisseur en ligne directement depuis votre
            navigateur.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez votre navigateur et rendez-vous sur{" "}
              <Link href="/convertir-webp-en-jpg" className="text-blue-600 hover:text-blue-800">
                heictojpg.fr/convertir-webp-en-jpg
              </Link>
              .
            </li>
            <li>
              Glissez-déposez vos images WebP dans la zone de conversion ou
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
            Aperçu est idéal pour convertir des images une par une, tandis que
            la commande sips dans le Terminal est parfaite pour le traitement
            par lot. Pour une solution rapide sans configuration, notre outil
            en ligne{" "}
            <Link href="/convertir-webp-en-jpg" className="text-blue-600 hover:text-blue-800">
              heictojpg.fr/convertir-webp-en-jpg
            </Link>{" "}
            est la solution la plus pratique : rapide, gratuit et sans
            installation.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/convertir-webp-en-jpg-sur-iphone" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur iPhone</h3>
              <p className="text-sm text-gray-600">Guide de conversion WebP en JPG sur iOS.</p>
            </Link>
            <Link href="/convertir-webp-en-jpg-sur-windows" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Windows</h3>
              <p className="text-sm text-gray-600">Guide de conversion WebP en JPG sur PC.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
