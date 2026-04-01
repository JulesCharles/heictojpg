import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Convertir HEIC en JPG sur iPhone - Guide complet [2025]",
  description:
    "Apprenez à convertir vos photos HEIC en JPG sur iPhone. Changez le format par défaut dans les réglages iOS, utilisez l'app Fichiers ou convertissez en ligne. Guide complet.",
  openGraph: {
    type: "website",
    title: "Convertir HEIC en JPG sur iPhone - Guide complet [2025]",
    description:
      "Apprenez à convertir vos photos HEIC en JPG sur iPhone via les réglages iOS, l'app Fichiers ou en ligne.",
    url: "https://heictojpg.fr/convertir-heic-en-jpg-sur-iphone",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Convertir HEIC en JPG sur iPhone - Guide complet [2025]",
    description:
      "Apprenez à convertir vos photos HEIC en JPG sur iPhone via les réglages iOS, l'app Fichiers ou en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-heic-en-jpg-sur-iphone",
  },
};

export default function ConvertirHeicIphone() {
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
        name: "Convertir HEIC en JPG sur iPhone",
        item: "https://heictojpg.fr/convertir-heic-en-jpg-sur-iphone",
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
        Comment convertir HEIC en JPG sur iPhone
      </h1>

      <p className="text-gray-600 mb-8 text-lg">
        Depuis iOS 11, votre iPhone enregistre les photos au format HEIC par
        défaut. Ce format offre une meilleure compression, mais peut poser
        des problèmes de compatibilité lorsque vous partagez vos images avec
        des appareils non-Apple. Découvrez comment convertir vos photos HEIC
        en JPG ou changer le format par défaut directement sur votre iPhone.
      </p>

      <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Convertissez vos photos HEIC instantanément
        </h3>
        <p className="text-gray-600 mb-4">
          Utilisez notre outil gratuit en ligne pour convertir vos fichiers
          HEIC en JPG en quelques secondes, directement depuis Safari sur
          votre iPhone.
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
            Méthode 1 : Changer le format photo par défaut dans les réglages
            iOS
          </h2>
          <p className="text-gray-600 mb-4">
            La solution la plus radicale consiste à modifier les réglages de
            votre iPhone pour que toutes les futures photos soient
            automatiquement prises au format JPG au lieu du HEIC.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez l'application <strong>Réglages</strong> sur votre iPhone.
            </li>
            <li>
              Faites défiler et appuyez sur <strong>Appareil photo</strong>.
            </li>
            <li>
              Appuyez sur <strong>Formats</strong>.
            </li>
            <li>
              Sélectionnez <strong>Le plus compatible</strong> au lieu de
              &quot;Haute efficacité&quot;. Vos prochaines photos seront
              désormais enregistrées en JPEG.
            </li>
            <li>
              Notez que ce réglage augmentera la taille de vos photos d'environ
              50%, car le format JPEG est moins compressé que le HEIC.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 2 : Utiliser l'application Fichiers
          </h2>
          <p className="text-gray-600 mb-4">
            L'application Fichiers d'iOS permet de copier vos photos HEIC et
            de les convertir automatiquement en JPG grâce à une astuce simple
            de copier-coller.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez l'application <strong>Photos</strong> et sélectionnez la
              ou les images HEIC que vous souhaitez convertir.
            </li>
            <li>
              Appuyez sur le bouton <strong>Partager</strong> puis choisissez{" "}
              <strong>&quot;Enregistrer dans Fichiers&quot;</strong>.
              Sélectionnez un emplacement (par exemple &quot;Sur mon
              iPhone&quot;).
            </li>
            <li>
              Ouvrez l'application <strong>Fichiers</strong>, maintenez le
              doigt sur l'image enregistrée et choisissez{" "}
              <strong>&quot;Copier&quot;</strong>.
            </li>
            <li>
              Maintenez le doigt sur un espace vide dans le dossier et
              choisissez <strong>&quot;Coller&quot;</strong>. iOS crée une copie
              au format JPG automatiquement.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 3 : En ligne avec heictojpg.fr
          </h2>
          <p className="text-gray-600 mb-4">
            Pour convertir rapidement une ou plusieurs photos sans modifier
            les réglages de votre iPhone, utilisez notre convertisseur en
            ligne directement depuis Safari.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez Safari et rendez-vous sur{" "}
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                heictojpg.fr
              </Link>
              .
            </li>
            <li>
              Appuyez sur la zone de conversion et sélectionnez{" "}
              <strong>&quot;Photothèque&quot;</strong> pour choisir vos photos
              HEIC.
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
            Vous pouvez changer le format par défaut de votre iPhone dans les
            réglages pour éviter le HEIC, ou utiliser l'application Fichiers
            pour convertir des photos existantes. Pour une conversion ponctuelle
            ou en lot sans modifier vos réglages, notre outil en ligne{" "}
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              heictojpg.fr
            </Link>{" "}
            est la solution la plus pratique : rapide, gratuit et sans
            installation.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/convertir-heic-en-jpg-sur-mac" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Mac</h3>
              <p className="text-sm text-gray-600">Guide de conversion HEIC sur macOS.</p>
            </Link>
            <Link href="/convertir-heic-en-jpg-sur-windows" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Windows</h3>
              <p className="text-sm text-gray-600">Guide de conversion HEIC sur PC.</p>
            </Link>
            <Link href="/convertir-heic-en-jpg-sur-android" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Android</h3>
              <p className="text-sm text-gray-600">Ouvrir les photos HEIC sur Android.</p>
            </Link>
          </div>
          <p className="mt-6 text-gray-600">Découvrez aussi <Link href="/blog/gerer-espace-stockage-iphone-conversion-heic" className="text-blue-600 hover:text-blue-800">comment gérer l'espace de stockage sur iPhone</Link> et notre <Link href="/faq" className="text-blue-600 hover:text-blue-800">FAQ</Link>.</p>
        </div>
      </div>
    </div>
  );
}
