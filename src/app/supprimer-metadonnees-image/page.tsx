import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";

export const metadata: Metadata = {
  title: "Supprimer les métadonnées EXIF gratuit | heictojpg.fr",
  description: "Supprimez toutes les métadonnées (EXIF, GPS, appareil) de vos photos pour protéger votre vie privée. Gratuit, sans inscription.",
  keywords: ["supprimer exif","supprimer métadonnées","strip exif","vie privée photo","supprimer gps photo","effacer exif"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/supprimer-metadonnees-image",
    siteName: "heictojpg.fr",
    title: "Supprimer les métadonnées EXIF d'une image gratuitement",
    description: "Supprimez toutes les métadonnées (EXIF, GPS, appareil) de vos photos pour protéger votre vie privée. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/supprimer-metadonnees-image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Supprimer les métadonnées d'une image",
      url: "https://heictojpg.fr/supprimer-metadonnees-image",
      description: "Supprimez toutes les métadonnées (EXIF, GPS, appareil) de vos photos pour protéger votre vie privée. Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Quelles métadonnées sont supprimées ?", acceptedAnswer: { "@type": "Answer", text: "Toutes les métadonnées sont supprimées : données EXIF (appareil, réglages), GPS (localisation), IPTC (droits d'auteur), XMP (historique d'édition), ICC (profil couleur). Seuls les pixels de l'image sont conservés." } },
        { "@type": "Question", name: "La qualité de l'image est-elle affectée ?", acceptedAnswer: { "@type": "Answer", text: "L'image est ré-encodée à 92% de qualité pour les JPG, ce qui est visuellement imperceptible. Les PNG et WebP sont ré-encodés sans perte." } },
        { "@type": "Question", name: "Les réseaux sociaux suppriment-ils les métadonnées ?", acceptedAnswer: { "@type": "Answer", text: "Facebook, Instagram et Twitter suppriment automatiquement les métadonnées EXIF lors de l'upload. Mais WhatsApp, Telegram (fichiers), les emails et les sites web ne le font généralement pas." } }
      ],
    },
  ],
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Supprimer les métadonnées d'une image</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Protégez votre vie privée en supprimant toutes les métadonnées cachées de vos photos : localisation GPS, modèle d'appareil, date de prise de vue, et plus. Vos photos nettoyées ne contiennent plus aucune information personnelle.</p>
      </div>

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi supprimer les métadonnées de vos photos ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Chaque photo que vous prenez avec votre smartphone contient des dizaines d'informations cachées appelées métadonnées EXIF. Ces données incluent la localisation GPS exacte de la prise de vue, la date et l'heure, le modèle de votre téléphone, et parfois même votre nom.</p>
          <p className="text-gray-600 mb-4">Quand vous partagez une photo sur certains réseaux sociaux, ces métadonnées sont automatiquement supprimées. Mais quand vous envoyez une photo par email, par messagerie, ou que vous la publiez sur un site web, ces informations restent présentes et accessibles à quiconque télécharge l'image.</p>
          <p className="text-gray-600 mb-4">Cela pose de sérieux problèmes de vie privée. Par exemple, une photo publiée avec ses métadonnées GPS peut révéler l'adresse de votre domicile, de votre lieu de travail, ou de l'école de vos enfants. Le modèle de téléphone peut être utilisé pour des attaques ciblées.</p>
          <p className="text-gray-600 mb-4">Notre outil supprime toutes les métadonnées en ré-encodant l'image de zéro. Le fichier de sortie ne contient aucune information EXIF, GPS, IPTC ou XMP. Seuls les pixels de l'image sont conservés.</p>
          <p className="text-gray-600 mb-4">Nous recommandons de systématiquement supprimer les métadonnées de vos photos avant de les partager en ligne, surtout si elles ont été prises à votre domicile ou dans des lieux privés.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelles métadonnées sont supprimées ?</h3>
            <p className="text-gray-600 mb-4">Toutes les métadonnées sont supprimées : données EXIF (appareil, réglages), GPS (localisation), IPTC (droits d'auteur), XMP (historique d'édition), ICC (profil couleur). Seuls les pixels de l'image sont conservés.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualité de l'image est-elle affectée ?</h3>
            <p className="text-gray-600 mb-4">L'image est ré-encodée à 92% de qualité pour les JPG, ce qui est visuellement imperceptible. Les PNG et WebP sont ré-encodés sans perte.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Les réseaux sociaux suppriment-ils les métadonnées ?</h3>
            <p className="text-gray-600 mb-4">Facebook, Instagram et Twitter suppriment automatiquement les métadonnées EXIF lors de l'upload. Mais WhatsApp, Telegram (fichiers), les emails et les sites web ne le font généralement pas.</p>
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
            <p className="text-sm text-gray-600">Réduisez le poids de vos images.</p>
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
