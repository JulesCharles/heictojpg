import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir WebP en JPG sur iPhone [2026] | heictojpg.fr",
  description:
    "Apprenez à convertir vos images WebP en JPG sur iPhone. Utilisez les Raccourcis iOS, la capture d'écran ou convertissez en ligne avec heictojpg.fr. Guide complet.",
  openGraph: {
    type: "website",
    title: "Convertir WebP en JPG sur iPhone - Guide complet [2026]",
    description:
      "Apprenez à convertir vos images WebP en JPG sur iPhone via les Raccourcis iOS, la capture d'écran ou en ligne.",
    url: "https://heictojpg.fr/convertir-webp-en-jpg-sur-iphone",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Convertir WebP en JPG sur iPhone - Guide complet [2026]",
    description:
      "Apprenez à convertir vos images WebP en JPG sur iPhone via les Raccourcis iOS, la capture d'écran ou en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-webp-en-jpg-sur-iphone",
  },
};

export default function ConvertirWebpIphone() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment convertir WebP en JPG sur iPhone",
    description: "3 methodes pour convertir vos images WebP en JPG sur iPhone : Raccourcis iOS, capture d'ecran ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Raccourcis iOS",
        text: "Creez un raccourci qui convertit vos images WebP en JPEG automatiquement via l'app Raccourcis.",
        url: "https://heictojpg.fr/convertir-webp-en-jpg-sur-iphone#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Capture d'ecran (workaround rapide)",
        text: "Affichez l'image WebP en plein ecran et faites une capture d'ecran pour obtenir un fichier PNG/JPG.",
        url: "https://heictojpg.fr/convertir-webp-en-jpg-sur-iphone#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Convertir en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/convertir-webp-en-jpg dans Safari, selectionnez vos images WebP, et telechargez les fichiers JPG convertis.",
        url: "https://heictojpg.fr/convertir-webp-en-jpg-sur-iphone#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir WebP en JPG sur iPhone", href: "/convertir-webp-en-jpg-sur-iphone" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment convertir WebP en JPG sur iPhone
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Le format WebP est de plus en plus utilisé sur le web pour son
          excellent taux de compression. Cependant, ce format n&apos;est pas
          toujours pris en charge par toutes les applications. Découvrez
          trois méthodes simples pour convertir vos images WebP en JPG
          directement depuis votre iPhone.
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
          WebP en JPG en quelques secondes, directement depuis Safari sur
          votre iPhone.
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
            Méthode 1 : Utiliser les Raccourcis iOS
          </h2>
          <p className="text-gray-600 mb-4">
            L&apos;application Raccourcis d&apos;Apple vous permet de créer un
            raccourci personnalisé qui convertit automatiquement vos images
            WebP en JPG.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez l&apos;application <strong>Raccourcis</strong> sur votre iPhone.
            </li>
            <li>
              Créez un nouveau raccourci et ajoutez l&apos;action{" "}
              <strong>&quot;Convertir l&apos;image&quot;</strong>. Choisissez
              JPEG comme format de sortie.
            </li>
            <li>
              Ajoutez l&apos;action <strong>&quot;Enregistrer dans l&apos;album photo&quot;</strong>{" "}
              pour sauvegarder le résultat.
            </li>
            <li>
              Depuis l&apos;app Fichiers ou Safari, partagez votre image WebP
              et choisissez votre raccourci. La conversion est instantanée.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 id="methode-2" className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 2 : Capture d&apos;écran (workaround rapide)
          </h2>
          <p className="text-gray-600 mb-4">
            Si vous avez besoin d&apos;une solution rapide sans configuration,
            la capture d&apos;écran peut servir de workaround pour obtenir une
            image dans un format compatible.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez l&apos;image WebP dans Safari ou dans l&apos;app Fichiers
              et affichez-la en plein écran.
            </li>
            <li>
              Effectuez une capture d&apos;écran en appuyant simultanément sur
              le <strong>bouton latéral</strong> et le{" "}
              <strong>bouton volume haut</strong>.
            </li>
            <li>
              Recadrez la capture pour ne garder que l&apos;image souhaitée,
              puis enregistrez. Vous obtenez un fichier PNG que vous pouvez
              partager facilement.
            </li>
            <li>
              Notez que cette méthode réduit la qualité de l&apos;image par
              rapport à une conversion directe.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 id="methode-3" className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 3 : En ligne avec heictojpg.fr
          </h2>
          <p className="text-gray-600 mb-4">
            Pour convertir rapidement une ou plusieurs images WebP sans perte
            de qualité, utilisez notre convertisseur en ligne directement
            depuis Safari.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez Safari et rendez-vous sur{" "}
              <Link href="/convertir-webp-en-jpg" className="text-blue-600 hover:text-blue-800">
                heictojpg.fr/convertir-webp-en-jpg
              </Link>
              .
            </li>
            <li>
              Appuyez sur la zone de conversion et sélectionnez vos images
              WebP depuis l&apos;app Fichiers.
            </li>
            <li>
              La conversion est instantanée. Téléchargez vos images JPG et
              retrouvez-les dans votre dossier Téléchargements.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-600 mb-4">
            Les Raccourcis iOS offrent la meilleure solution pour automatiser
            la conversion WebP vers JPG sur iPhone. La capture d&apos;écran
            est un dépannage rapide mais avec perte de qualité. Pour une
            conversion sans compromis, notre outil en ligne{" "}
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
            <Link href="/convertir-webp-en-jpg-sur-mac" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Mac</h3>
              <p className="text-sm text-gray-600">Guide de conversion WebP en JPG sur macOS.</p>
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
