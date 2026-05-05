import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";

export const metadata: Metadata = {
  title: "Lire les metadonnees EXIF d'une image | heictojpg.fr",
  description: "Visualisez les metadonnees EXIF de vos photos JPG, PNG, WebP et HEIC : appareil, date, GPS, reglages. Gratuit, sans inscription.",
  keywords: ["lire exif","metadonnees image","exif viewer","info photo","donnees image","exif en ligne"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/lire-metadonnees-image",
    siteName: "heictojpg.fr",
    title: "Lire les metadonnees EXIF d'une image en ligne",
    description: "Visualisez les metadonnees EXIF de vos photos JPG, PNG, WebP et HEIC : appareil, date, GPS, reglages. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/lire-metadonnees-image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Lire les metadonnees d'une image",
      url: "https://heictojpg.fr/lire-metadonnees-image",
      description: "Visualisez les metadonnees EXIF de vos photos JPG, PNG, WebP et HEIC : appareil, date, GPS, reglages. Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Tous les formats d'image contiennent-ils des metadonnees EXIF ?", acceptedAnswer: { "@type": "Answer", text: "Les JPG et HEIC contiennent generalement beaucoup de metadonnees. Les PNG et WebP en contiennent moins. Les SVG et GIF n'en contiennent generalement pas." } },
        { "@type": "Question", name: "Mes fichiers sont-ils conserves sur vos serveurs ?", acceptedAnswer: { "@type": "Answer", text: "Non, aucun fichier n'est conserve. L'analyse est effectuee en memoire et toutes les donnees sont supprimees immediatement apres affichage des resultats." } }
      ],
    },
  ],
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Lire les metadonnees d'une image</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Decouvrez toutes les informations cachees dans vos photos : appareil utilise, date de prise de vue, localisation GPS, reglages (ISO, ouverture, vitesse). Compatible JPG, PNG, WebP, HEIC et TIFF.</p>
      </div>

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comprendre les metadonnees EXIF de vos photos</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Les metadonnees EXIF (Exchangeable Image File Format) sont des informations embarquees automatiquement dans chaque photo par votre appareil photo ou smartphone. Elles constituent une mine d'informations techniques et contextuelles.</p>
          <p className="text-gray-600 mb-4">Pour les photographes, les metadonnees EXIF sont un outil d'apprentissage precieux. En analysant les reglages utilises pour vos meilleures photos (ouverture, vitesse d'obturation, ISO, focale), vous pouvez comprendre ce qui fonctionne et reproduire ces conditions.</p>
          <p className="text-gray-600 mb-4">Pour les professionnels de la securite et de la vie privee, les metadonnees EXIF sont un sujet de preoccupation : elles peuvent reveler la localisation exacte de la prise de vue, le modele de l'appareil, et d'autres informations personnelles.</p>
          <p className="text-gray-600 mb-4">Notre outil lit et affiche de maniere claire toutes les metadonnees presentes dans votre fichier image, organisees par categories : informations sur l'appareil, reglages de prise de vue, donnees GPS, et informations sur le fichier.</p>
          <p className="text-gray-600 mb-4">Tous les formats d'image courants sont supportes : JPEG, PNG, WebP, HEIC (iPhone), TIFF et AVIF.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Tous les formats d'image contiennent-ils des metadonnees EXIF ?</h3>
            <p className="text-gray-600 mb-4">Les JPG et HEIC contiennent generalement beaucoup de metadonnees. Les PNG et WebP en contiennent moins. Les SVG et GIF n'en contiennent generalement pas.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mes fichiers sont-ils conserves sur vos serveurs ?</h3>
            <p className="text-gray-600 mb-4">Non, aucun fichier n'est conserve. L'analyse est effectuee en memoire et toutes les donnees sont supprimees immediatement apres affichage des resultats.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nos autres outils</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; JPG</h3>
            <p className="text-sm text-gray-600">Convertissez vos photos iPhone.</p>
          </Link>
          <Link href="/compresser-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Compresser image</h3>
            <p className="text-sm text-gray-600">Reduisez le poids de vos images.</p>
          </Link>
          <Link href="/redimensionner-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Redimensionner</h3>
            <p className="text-sm text-gray-600">Changez la taille de vos images.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
