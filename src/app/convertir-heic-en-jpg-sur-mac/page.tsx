import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Convertir HEIC en JPG sur Mac - Guide complet [2025]",
  description:
    "Découvrez comment convertir vos photos HEIC en JPG sur Mac facilement. Méthodes avec Aperçu, Automator et en ligne. Guide complet pour la conversion HEIC JPG sur macOS.",
  openGraph: {
    type: "website",
    title: "Convertir HEIC en JPG sur Mac - Guide complet [2025]",
    description:
      "Découvrez comment convertir vos photos HEIC en JPG sur Mac facilement avec Aperçu, Automator ou en ligne.",
    url: "https://heictojpg.fr/convertir-heic-en-jpg-sur-mac",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Convertir HEIC en JPG sur Mac - Guide complet [2025]",
    description:
      "Découvrez comment convertir vos photos HEIC en JPG sur Mac facilement avec Aperçu, Automator ou en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-heic-en-jpg-sur-mac",
  },
};

export default function ConvertirHeicMac() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://heictojpg.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Convertir HEIC en JPG sur Mac",
        item: "https://heictojpg.fr/convertir-heic-en-jpg-sur-mac",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Comment convertir HEIC en JPG sur Mac
      </h1>

      <p className="text-gray-600 mb-8 text-lg">
        Le format HEIC est devenu le standard photo sur les appareils Apple,
        mais il peut poser des problèmes de compatibilité lorsque vous
        souhaitez partager vos images. Sur Mac, plusieurs solutions natives
        et en ligne vous permettent de convertir facilement vos fichiers HEIC
        en JPG sans installer de logiciel tiers.
      </p>

      <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Convertissez vos photos HEIC instantanément
        </h3>
        <p className="text-gray-600 mb-4">
          Utilisez notre outil gratuit en ligne pour convertir vos fichiers
          HEIC en JPG en quelques secondes, directement depuis votre Mac.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Convertir mes photos HEIC en JPG
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 1 : Utiliser Aperçu (Preview)
          </h2>
          <p className="text-gray-600 mb-4">
            Aperçu est l'application native de macOS pour visualiser et
            modifier des images. Elle prend en charge la conversion HEIC vers
            JPG sans aucune installation supplémentaire.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Faites un clic droit sur votre fichier HEIC et sélectionnez{" "}
              <strong>Ouvrir avec &gt; Aperçu</strong>.
            </li>
            <li>
              Dans la barre de menus, cliquez sur{" "}
              <strong>Fichier &gt; Exporter...</strong>
            </li>
            <li>
              Dans le menu déroulant <strong>Format</strong>, choisissez{" "}
              <strong>JPEG</strong>.
            </li>
            <li>
              Ajustez le curseur de qualité selon vos besoins (90-100% est
              recommandé pour conserver la qualité).
            </li>
            <li>
              Cliquez sur <strong>Enregistrer</strong> pour sauvegarder votre
              image en JPG.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 2 : Automatiser avec Automator
          </h2>
          <p className="text-gray-600 mb-4">
            Si vous devez convertir régulièrement des fichiers HEIC, Automator
            vous permet de créer un flux de travail automatisé pour traiter
            plusieurs images en une seule fois.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez <strong>Automator</strong> depuis le dossier Applications
              et créez un nouveau <strong>Service rapide</strong>.
            </li>
            <li>
              Recherchez l'action{" "}
              <strong>Modifier le type des images</strong> dans la
              bibliothèque et faites-la glisser dans le flux de travail.
            </li>
            <li>
              Sélectionnez <strong>JPEG</strong> comme format de destination
              dans les options de l'action.
            </li>
            <li>
              Enregistrez le service avec un nom explicite comme
              &quot;Convertir en JPG&quot;. Désormais, un clic droit sur
              n'importe quel fichier HEIC vous proposera cette option.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 3 : En ligne avec heictojpg.fr
          </h2>
          <p className="text-gray-600 mb-4">
            La méthode la plus rapide et la plus simple consiste à utiliser
            notre convertisseur en ligne. Aucune installation requise, et vos
            fichiers ne sont jamais conservés sur nos serveurs.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Rendez-vous sur{" "}
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                heictojpg.fr
              </Link>{" "}
              depuis Safari ou tout autre navigateur sur votre Mac.
            </li>
            <li>
              Glissez-déposez vos fichiers HEIC dans la zone de conversion ou
              cliquez pour les sélectionner.
            </li>
            <li>
              La conversion démarre automatiquement. Téléchargez ensuite vos
              images JPG en un clic.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-600 mb-4">
            Convertir des fichiers HEIC en JPG sur Mac est simple grâce aux
            outils natifs comme Aperçu et Automator. Cependant, pour une
            conversion rapide sans configuration, notre outil en ligne{" "}
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              heictojpg.fr
            </Link>{" "}
            reste la solution la plus pratique : il fonctionne directement dans
            votre navigateur, sans installation, et garantit la confidentialité
            de vos photos.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/convertir-heic-en-jpg-sur-windows" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Windows</h3>
              <p className="text-sm text-gray-600">Guide de conversion HEIC sur PC.</p>
            </Link>
            <Link href="/convertir-heic-en-jpg-sur-iphone" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur iPhone</h3>
              <p className="text-sm text-gray-600">Convertir directement sur votre iPhone.</p>
            </Link>
            <Link href="/convertir-heic-en-jpg-sur-android" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Android</h3>
              <p className="text-sm text-gray-600">Ouvrir les photos HEIC sur Android.</p>
            </Link>
          </div>
          <p className="mt-6 text-gray-600">Découvrez aussi <Link href="/blog/pourquoi-apple-utilise-format-heic" className="text-blue-600 hover:text-blue-800">pourquoi Apple utilise le format HEIC</Link> et notre <Link href="/faq" className="text-blue-600 hover:text-blue-800">FAQ complète</Link>.</p>
        </div>
      </div>
    </div>
  );
}
