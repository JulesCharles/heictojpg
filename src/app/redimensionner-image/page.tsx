import type { Metadata } from "next";
import ResizeForm from "@/components/ResizeForm";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Redimensionner une Image en Ligne Gratuit - Sans Perte de Qualité | heictojpg.fr",
  description:
    "Redimensionnez vos images JPG, PNG et WebP en ligne en 2 secondes. Taille personnalisée en pixels ou pourcentage. 100% gratuit, sans inscription.",
  keywords: [
    "redimensionner image",
    "redimensionner photo en ligne",
    "changer taille image",
    "resize image gratuit",
    "réduire taille photo",
    "redimensionner image en ligne",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/redimensionner-image",
    siteName: "heictojpg.fr",
    title: "Redimensionner une image gratuitement en ligne",
    description: "Redimensionnez vos images en ligne gratuitement. Rapide, sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/redimensionner-image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Redimensionner une image",
  url: "https://heictojpg.fr/redimensionner-image",
  description: "Redimensionnez vos images JPG, PNG et WebP en ligne gratuitement.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Tout navigateur web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "fr",
};

export default function RedimensionnerImage() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Redimensionner une image", href: "/redimensionner-image" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Redimensionner une image gratuitement
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Changez la taille de vos images JPG, PNG et WebP en quelques secondes.
          Notre outil conserve les proportions et la qualité de vos photos.
          Gratuit, sans inscription, aucun fichier conservé.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ResizeForm />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi redimensionner vos images ?
        </h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Redimensionner vos images est essentiel pour optimiser la vitesse de chargement
            de vos sites web, respecter les limites de taille des réseaux sociaux, ou
            simplement réduire l&apos;espace de stockage utilisé.
          </p>
          <p className="text-gray-600 mb-4">
            Une photo prise avec un smartphone moderne peut peser entre 3 et 12 Mo.
            En la redimensionnant pour le web (par exemple 1920px de large), vous pouvez
            réduire sa taille à moins de 500 Ko sans perte visible de qualité.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Tailles recommandées
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>Site web / blog :</strong> 1200 à 1920 px de large</li>
            <li>&bull; <strong>Photo de profil :</strong> 400 x 400 px</li>
            <li>&bull; <strong>Bannière Facebook :</strong> 820 x 312 px</li>
            <li>&bull; <strong>Post Instagram :</strong> 1080 x 1080 px</li>
            <li>&bull; <strong>Email :</strong> 600 à 800 px de large</li>
          </ul>
        </div>
      </div>

      <RelatedTools currentPath="/redimensionner-image" />
    </div>
    </>
  );
}
