import type { Metadata } from "next";
import HeicMetadataForm from "@/components/HeicMetadataForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Lire les métadonnées EXIF HEIC en ligne | heictojpg.fr",
  description: "Visualisez les métadonnées EXIF de vos photos HEIC : appareil photo, date, GPS, ouverture, ISO et plus. Gratuit, sans inscription.",
  keywords: ["métadonnées heic", "exif heic", "lire exif photo iphone", "données heic", "heic metadata", "info photo heic"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/lire-metadonnees-heic",
    siteName: "heictojpg.fr",
    title: "Lire les métadonnées EXIF d'un fichier HEIC",
    description: "Visualisez les métadonnées EXIF de vos photos HEIC. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/lire-metadonnees-heic" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication",
  name: "Lecteur de métadonnées HEIC", url: "https://heictojpg.fr/lire-metadonnees-heic",
  description: "Lisez les métadonnées EXIF de vos fichiers HEIC en ligne.",
  applicationCategory: "MultimediaApplication", operatingSystem: "Tout navigateur web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, inLanguage: "fr",
};

export default function LireMetadonneesHeic() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Lire metadonnees HEIC", href: "/lire-metadonnees-heic" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Lire les métadonnées d&apos;un fichier HEIC</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Découvrez toutes les informations cachées dans vos photos iPhone : appareil utilisé,
          date de prise de vue, coordonnées GPS, réglages de l&apos;appareil photo (ISO, ouverture, vitesse).
          Outil gratuit, aucun fichier conservé.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-16">
        <HeicMetadataForm />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Qu&apos;est-ce que les métadonnées EXIF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Les métadonnées EXIF (Exchangeable Image File Format) sont des informations intégrées
            automatiquement dans chaque photo par votre appareil. Elles contiennent des détails
            techniques et contextuels sur la prise de vue.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Informations disponibles</h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>Appareil :</strong> marque, modèle, objectif utilisé</li>
            <li>&bull; <strong>Réglages :</strong> ouverture (f/), ISO, vitesse d&apos;obturation, focale</li>
            <li>&bull; <strong>Date et heure :</strong> quand la photo a été prise</li>
            <li>&bull; <strong>Localisation GPS :</strong> où la photo a été prise (si activé)</li>
            <li>&bull; <strong>Image :</strong> dimensions, orientation, espace colorimétrique</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Pourquoi consulter les métadonnées ?</h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>Photographie :</strong> analyser vos réglages pour progresser</li>
            <li>&bull; <strong>Vie privée :</strong> vérifier quelles données sont partagées avec vos photos</li>
            <li>&bull; <strong>Organisation :</strong> retrouver la date et le lieu de prise de vue</li>
            <li>&bull; <strong>Juridique :</strong> prouver l&apos;authenticité d&apos;une photo</li>
          </ul>
        </div>
      </div>
      <RelatedTools currentPath="/lire-metadonnees-heic" />
    </div>
    </>
  );
}
