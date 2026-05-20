import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Lire les métadonnées EXIF d'une image | heictojpg.fr",
  description: "Visualisez les métadonnées EXIF de vos photos JPG, PNG, WebP et HEIC : appareil, date, GPS, réglages. Gratuit, sans inscription.",
  keywords: ["lire exif","métadonnées image","exif viewer","info photo","données image","exif en ligne"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/lire-metadonnees-image",
    siteName: "heictojpg.fr",
    title: "Lire les métadonnées EXIF d'une image en ligne",
    description: "Visualisez les métadonnées EXIF de vos photos JPG, PNG, WebP et HEIC : appareil, date, GPS, réglages. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/lire-metadonnees-image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Lire les métadonnées d'une image",
      url: "https://heictojpg.fr/lire-metadonnees-image",
      description: "Visualisez les métadonnées EXIF de vos photos JPG, PNG, WebP et HEIC : appareil, date, GPS, réglages. Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Tous les formats d'image contiennent-ils des métadonnées EXIF ?", acceptedAnswer: { "@type": "Answer", text: "Les JPG et HEIC contiennent généralement beaucoup de métadonnées. Les PNG et WebP en contiennent moins. Les SVG et GIF n'en contiennent généralement pas." } },
        { "@type": "Question", name: "Mes fichiers sont-ils conservés sur vos serveurs ?", acceptedAnswer: { "@type": "Answer", text: "Non, aucun fichier n'est conservé. L'analyse est effectuée en mémoire et toutes les données sont supprimées immédiatement après affichage des résultats." } }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Lire les métadonnées d'une image</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Découvrez toutes les informations cachées dans vos photos : appareil utilisé, date de prise de vue, localisation GPS, réglages (ISO, ouverture, vitesse). Compatible JPG, PNG, WebP, HEIC et TIFF.</p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comprendre les métadonnées EXIF de vos photos</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Les métadonnées EXIF (Exchangeable Image File Format) sont des informations embarquées automatiquement dans chaque photo par votre appareil photo ou smartphone. Elles constituent une mine d'informations techniques et contextuelles.</p>
          <p className="text-gray-600 mb-4">Pour les photographes, les métadonnées EXIF sont un outil d'apprentissage précieux. En analysant les réglages utilisés pour vos meilleures photos (ouverture, vitesse d'obturation, ISO, focale), vous pouvez comprendre ce qui fonctionne et reproduire ces conditions.</p>
          <p className="text-gray-600 mb-4">Pour les professionnels de la sécurité et de la vie privée, les métadonnées EXIF sont un sujet de préoccupation : elles peuvent révéler la localisation exacte de la prise de vue, le modèle de l'appareil, et d'autres informations personnelles.</p>
          <p className="text-gray-600 mb-4">Notre outil lit et affiche de manière claire toutes les métadonnées présentes dans votre fichier image, organisées par catégories : informations sur l'appareil, réglages de prise de vue, données GPS, et informations sur le fichier.</p>
          <p className="text-gray-600 mb-4">Tous les formats d'image courants sont supportés : JPEG, PNG, WebP, HEIC (iPhone), TIFF et AVIF.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Tous les formats d'image contiennent-ils des métadonnées EXIF ?</h3>
            <p className="text-gray-600 mb-4">Les JPG et HEIC contiennent généralement beaucoup de métadonnées. Les PNG et WebP en contiennent moins. Les SVG et GIF n'en contiennent généralement pas.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mes fichiers sont-ils conservés sur vos serveurs ?</h3>
            <p className="text-gray-600 mb-4">Non, aucun fichier n'est conservé. L'analyse est effectuée en mémoire et toutes les données sont supprimées immédiatement après affichage des résultats.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/lire-metadonnees-image" />
    </div>
    </>
  );
}
