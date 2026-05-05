import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";

export const metadata: Metadata = {
  title: "Supprimer les metadonnees EXIF gratuit | heictojpg.fr",
  description: "Supprimez toutes les metadonnees (EXIF, GPS, appareil) de vos photos pour proteger votre vie privee. Gratuit, sans inscription.",
  keywords: ["supprimer exif","supprimer metadonnees","strip exif","vie privee photo","supprimer gps photo","effacer exif"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/supprimer-metadonnees-image",
    siteName: "heictojpg.fr",
    title: "Supprimer les metadonnees EXIF d'une image gratuitement",
    description: "Supprimez toutes les metadonnees (EXIF, GPS, appareil) de vos photos pour proteger votre vie privee. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/supprimer-metadonnees-image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Supprimer les metadonnees d'une image",
      url: "https://heictojpg.fr/supprimer-metadonnees-image",
      description: "Supprimez toutes les metadonnees (EXIF, GPS, appareil) de vos photos pour proteger votre vie privee. Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Quelles metadonnees sont supprimees ?", acceptedAnswer: { "@type": "Answer", text: "Toutes les metadonnees sont supprimees : donnees EXIF (appareil, reglages), GPS (localisation), IPTC (droits d'auteur), XMP (historique d'edition), ICC (profil couleur). Seuls les pixels de l'image sont conserves." } },
        { "@type": "Question", name: "La qualite de l'image est-elle affectee ?", acceptedAnswer: { "@type": "Answer", text: "L'image est re-encodee a 92% de qualite pour les JPG, ce qui est visuellement imperceptible. Les PNG et WebP sont re-encodes sans perte." } },
        { "@type": "Question", name: "Les reseaux sociaux suppriment-ils les metadonnees ?", acceptedAnswer: { "@type": "Answer", text: "Facebook, Instagram et Twitter suppriment automatiquement les metadonnees EXIF lors de l'upload. Mais WhatsApp, Telegram (fichiers), les emails et les sites web ne le font generalement pas." } }
      ],
    },
  ],
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Supprimer les metadonnees d'une image</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Protegez votre vie privee en supprimant toutes les metadonnees cachees de vos photos : localisation GPS, modele d'appareil, date de prise de vue, et plus. Vos photos nettoyees ne contiennent plus aucune information personnelle.</p>
      </div>

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi supprimer les metadonnees de vos photos ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Chaque photo que vous prenez avec votre smartphone contient des dizaines d'informations cachees appelees metadonnees EXIF. Ces donnees incluent la localisation GPS exacte de la prise de vue, la date et l'heure, le modele de votre telephone, et parfois meme votre nom.</p>
          <p className="text-gray-600 mb-4">Quand vous partagez une photo sur certains reseaux sociaux, ces metadonnees sont automatiquement supprimees. Mais quand vous envoyez une photo par email, par messagerie, ou que vous la publiez sur un site web, ces informations restent presentes et accessibles a quiconque telecharge l'image.</p>
          <p className="text-gray-600 mb-4">Cela pose de serieux problemes de vie privee. Par exemple, une photo publiee avec ses metadonnees GPS peut reveler l'adresse de votre domicile, de votre lieu de travail, ou de l'ecole de vos enfants. Le modele de telephone peut etre utilise pour des attaques ciblees.</p>
          <p className="text-gray-600 mb-4">Notre outil supprime toutes les metadonnees en re-encodant l'image de zero. Le fichier de sortie ne contient aucune information EXIF, GPS, IPTC ou XMP. Seuls les pixels de l'image sont conserves.</p>
          <p className="text-gray-600 mb-4">Nous recommandons de systematiquement supprimer les metadonnees de vos photos avant de les partager en ligne, surtout si elles ont ete prises a votre domicile ou dans des lieux prives.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelles metadonnees sont supprimees ?</h3>
            <p className="text-gray-600 mb-4">Toutes les metadonnees sont supprimees : donnees EXIF (appareil, reglages), GPS (localisation), IPTC (droits d'auteur), XMP (historique d'edition), ICC (profil couleur). Seuls les pixels de l'image sont conserves.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualite de l'image est-elle affectee ?</h3>
            <p className="text-gray-600 mb-4">L'image est re-encodee a 92% de qualite pour les JPG, ce qui est visuellement imperceptible. Les PNG et WebP sont re-encodes sans perte.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Les reseaux sociaux suppriment-ils les metadonnees ?</h3>
            <p className="text-gray-600 mb-4">Facebook, Instagram et Twitter suppriment automatiquement les metadonnees EXIF lors de l'upload. Mais WhatsApp, Telegram (fichiers), les emails et les sites web ne le font generalement pas.</p>
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
