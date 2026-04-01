import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Convertir HEIC en JPG sur Windows - Guide complet [2025]",
  description:
    "Apprenez à convertir vos photos HEIC en JPG sur Windows facilement. Méthodes avec Photos Windows, Paint et en ligne. Guide complet pour la conversion HEIC JPG sur PC.",
  openGraph: {
    type: "website",
    title: "Convertir HEIC en JPG sur Windows - Guide complet [2025]",
    description:
      "Apprenez à convertir vos photos HEIC en JPG sur Windows facilement avec Photos, Paint ou en ligne.",
    url: "https://heictojpg.fr/convertir-heic-en-jpg-sur-windows",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Convertir HEIC en JPG sur Windows - Guide complet [2025]",
    description:
      "Apprenez à convertir vos photos HEIC en JPG sur Windows facilement avec Photos, Paint ou en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-heic-en-jpg-sur-windows",
  },
};

export default function ConvertirHeicWindows() {
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
        name: "Convertir HEIC en JPG sur Windows",
        item: "https://heictojpg.fr/convertir-heic-en-jpg-sur-windows",
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
        Comment convertir HEIC en JPG sur Windows
      </h1>

      <p className="text-gray-600 mb-8 text-lg">
        Windows ne prend pas en charge nativement le format HEIC d'Apple, ce
        qui peut rendre l'ouverture de vos photos iPhone difficile sur PC.
        Heureusement, plusieurs méthodes gratuites existent pour convertir vos
        fichiers HEIC en JPG sur Windows 10 et Windows 11 sans effort.
      </p>

      <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Convertissez vos photos HEIC instantanément
        </h3>
        <p className="text-gray-600 mb-4">
          Utilisez notre outil gratuit en ligne pour convertir vos fichiers
          HEIC en JPG en quelques secondes, directement depuis votre PC
          Windows.
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
            Méthode 1 : Utiliser l'application Photos de Windows
          </h2>
          <p className="text-gray-600 mb-4">
            Depuis Windows 10, Microsoft propose une extension gratuite pour
            ouvrir les fichiers HEIC. Une fois installée, vous pouvez
            convertir vos images via l'application Photos.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez le <strong>Microsoft Store</strong> et recherchez{" "}
              <strong>&quot;Extensions d'image HEIF&quot;</strong>. Installez
              l'extension gratuite proposée par Microsoft.
            </li>
            <li>
              Double-cliquez sur votre fichier HEIC pour l'ouvrir dans
              l'application <strong>Photos</strong>.
            </li>
            <li>
              Cliquez sur les trois points <strong>(...)</strong> en haut à
              droite, puis sélectionnez{" "}
              <strong>Enregistrer sous</strong>.
            </li>
            <li>
              Dans le menu <strong>Type de fichier</strong>, choisissez{" "}
              <strong>.jpg</strong> et cliquez sur{" "}
              <strong>Enregistrer</strong>.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 2 : Convertir avec Paint
          </h2>
          <p className="text-gray-600 mb-4">
            Si l'extension HEIF est installée, Paint peut également ouvrir et
            convertir vos fichiers HEIC. C'est une méthode simple et
            accessible sur tous les PC Windows.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Faites un clic droit sur le fichier HEIC et choisissez{" "}
              <strong>Ouvrir avec &gt; Paint</strong>.
            </li>
            <li>
              Dans Paint, allez dans{" "}
              <strong>Fichier &gt; Enregistrer sous &gt; Image JPEG</strong>.
            </li>
            <li>
              Choisissez le dossier de destination et cliquez sur{" "}
              <strong>Enregistrer</strong>. Votre photo est maintenant au
              format JPG.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 3 : En ligne avec heictojpg.fr
          </h2>
          <p className="text-gray-600 mb-4">
            La solution la plus rapide sur Windows est d'utiliser notre
            convertisseur en ligne. Aucune extension ni installation requise :
            tout se fait dans votre navigateur.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez{" "}
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                heictojpg.fr
              </Link>{" "}
              dans Chrome, Edge, Firefox ou tout autre navigateur.
            </li>
            <li>
              Glissez-déposez vos fichiers HEIC dans la zone de conversion ou
              cliquez pour parcourir vos dossiers.
            </li>
            <li>
              Attendez quelques secondes que la conversion s'effectue, puis
              téléchargez vos images JPG.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-600 mb-4">
            Bien que Windows ne supporte pas le format HEIC par défaut, les
            extensions Microsoft et des logiciels comme Paint permettent de
            convertir vos photos. Toutefois, la méthode la plus simple et la
            plus rapide reste l'utilisation de notre convertisseur en ligne{" "}
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              heictojpg.fr
            </Link>
            . Sans installation, sans inscription, et en toute confidentialité,
            vous obtenez vos images JPG en quelques secondes.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/convertir-heic-en-jpg-sur-mac" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Mac</h3>
              <p className="text-sm text-gray-600">Guide de conversion HEIC sur macOS.</p>
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
          <p className="mt-6 text-gray-600">Découvrez aussi <Link href="/blog/ouvrir-fichier-heic-windows" className="text-blue-600 hover:text-blue-800">comment ouvrir un fichier HEIC sur Windows</Link> et notre <Link href="/faq" className="text-blue-600 hover:text-blue-800">FAQ</Link>.</p>
        </div>
      </div>
    </div>
  );
}
