import ConvertForm from "@/components/ConvertForm";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Convertisseur HEIC en JPG",
      "url": "https://heictojpg.fr",
      "description": "Convertissez vos photos iPhone HEIC en JPG en 1 clic. Gratuit, rapide, sans inscription.",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Tout navigateur web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR",
      },
      "inLanguage": "fr",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qu'est-ce que le format HEIC ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HEIC (High Efficiency Image Container) est le format d'image par défaut sur les appareils Apple depuis iOS 11. Il offre une meilleure compression que le JPEG tout en conservant une qualité d'image identique.",
          },
        },
        {
          "@type": "Question",
          "name": "Pourquoi convertir HEIC en JPG ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le format HEIC n'est pas supporté par tous les navigateurs et applications. Convertir en JPG assure une compatibilité universelle pour le partage, l'édition et l'envoi par email.",
          },
        },
        {
          "@type": "Question",
          "name": "La conversion est-elle gratuite ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, notre outil de conversion HEIC en JPG est entièrement gratuit, sans inscription requise et sans limitation d'usage.",
          },
        },
        {
          "@type": "Question",
          "name": "Mes fichiers sont-ils conservés sur vos serveurs ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, aucun fichier n'est conservé sur nos serveurs. La conversion s'effectue en mémoire et toutes les données temporaires sont supprimées immédiatement après le téléchargement.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Convertir HEIC en JPG gratuitement
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos photos iPhone au format HEIC en images JPG compatibles avec tous les appareils.
          Notre outil de conversion est rapide, sécurisé et entièrement gratuit.
          Aucun fichier n'est conservé sur nos serveurs - votre confidentialité est protégée.
        </p>
      </div>

      <div className="mb-16">
        <ConvertForm />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Qu'est-ce que le format HEIC ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            HEIC (High Efficiency Image Container) est le format d'image par défaut sur les appareils Apple depuis iOS 11.
            Ce format offre une meilleure compression que le JPEG traditionnel, permettant de stocker des images de haute qualité
            tout en utilisant moins d'espace de stockage.
          </p>

          <p className="text-gray-600 mb-4">
            Cependant, le format HEIC n'est pas universellement supporté par tous les navigateurs web et applications.
            C'est pourquoi il est souvent nécessaire de convertir ces fichiers au format JPG pour une compatibilité maximale.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Pourquoi convertir HEIC en JPG ?
          </h3>

          <ul className="text-gray-600 space-y-2">
            <li>• <strong>Compatibilité universelle :</strong> Le format JPG est supporté par tous les navigateurs et appareils</li>
            <li>• <strong>Partage facilité :</strong> Partagez vos photos sur toutes les plateformes sans problème</li>
            <li>• <strong>Taille optimisée :</strong> Réduisez la taille de vos fichiers pour l'envoi par email</li>
            <li>• <strong>Édition simple :</strong> Éditez vos photos avec n'importe quel logiciel de retouche</li>
          </ul>
        </div>
      </div>
      {/* Guides par appareil */}
      <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Guides de conversion par appareil
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/convertir-heic-en-jpg-sur-iphone" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Convertir HEIC sur iPhone</h3>
            <p className="text-sm text-gray-600">Changez le format par défaut ou convertissez vos photos directement.</p>
          </Link>
          <Link href="/convertir-heic-en-jpg-sur-mac" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Convertir HEIC sur Mac</h3>
            <p className="text-sm text-gray-600">Utilisez Aperçu, Automator ou notre outil en ligne.</p>
          </Link>
          <Link href="/convertir-heic-en-jpg-sur-windows" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Convertir HEIC sur Windows</h3>
            <p className="text-sm text-gray-600">Ouvrez et convertissez vos fichiers HEIC sur PC facilement.</p>
          </Link>
          <Link href="/convertir-heic-en-jpg-sur-android" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Convertir HEIC sur Android</h3>
            <p className="text-sm text-gray-600">Solutions pour ouvrir les photos iPhone sur Android.</p>
          </Link>
        </div>
      </div>

      {/* Autres outils */}
      <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Nos autres outils de conversion
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/convertir-png-en-jpg" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">PNG → JPG</h3>
            <p className="text-sm text-gray-600">Convertissez vos images PNG en JPG pour réduire leur taille.</p>
          </Link>
          <Link href="/convertir-webp-en-jpg" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">WebP → JPG</h3>
            <p className="text-sm text-gray-600">Transformez vos images WebP en JPG compatibles partout.</p>
          </Link>
          <Link href="/convertir-jpg-en-png" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">JPG → PNG</h3>
            <p className="text-sm text-gray-600">Convertissez en PNG pour la transparence et la qualité sans perte.</p>
          </Link>
          <Link href="/compresser-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Compresser une image</h3>
            <p className="text-sm text-gray-600">Réduisez le poids de vos images JPG, PNG et WebP.</p>
          </Link>
        </div>
      </div>

      {/* Articles récents */}
      <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Articles récents
        </h2>
        <div className="space-y-4">
          <Link href="/blog/heic-vs-jpg-quelle-difference" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC vs JPG : quelle différence ?</h3>
            <p className="text-sm text-gray-600">Comparaison complète entre les deux formats d'image.</p>
          </Link>
          <Link href="/blog/ouvrir-fichier-heic-windows" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Ouvrir un fichier HEIC sur Windows</h3>
            <p className="text-sm text-gray-600">4 méthodes gratuites pour visualiser vos fichiers HEIC sur PC.</p>
          </Link>
          <Link href="/blog/convertir-heic-en-jpg-sans-perte-qualite" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Convertir HEIC en JPG sans perte de qualité</h3>
            <p className="text-sm text-gray-600">Les meilleures techniques pour préserver la qualité de vos photos.</p>
          </Link>
        </div>
        <div className="mt-6 text-center">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
            Voir tous les articles →
          </Link>
        </div>
      </div>
    </div>
  );
}
