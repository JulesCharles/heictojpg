import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Recadrer une image en ligne gratuit | heictojpg.fr",
  description: "Recadrez vos images JPG, PNG et WebP en ligne. Découpez la zone souhaitée avec précision. Gratuit, sans inscription.",
  keywords: ["recadrer image","recadrer photo en ligne","découper image","crop image gratuit","rogner image"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/recadrer-image",
    siteName: "heictojpg.fr",
    title: "Recadrer une image gratuitement en ligne",
    description: "Recadrez vos images JPG, PNG et WebP en ligne. Découpez la zone souhaitée avec précision. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/recadrer-image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Recadrer une image gratuitement",
      url: "https://heictojpg.fr/recadrer-image",
      description: "Recadrez vos images JPG, PNG et WebP en ligne. Découpez la zone souhaitée avec précision. Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Comment connaître les dimensions de mon image ?", acceptedAnswer: { "@type": "Answer", text: "Uploadez votre image et ses dimensions s'affichent automatiquement. Vous pouvez aussi utiliser notre outil de métadonnées pour voir les détails de votre image." } },
        { "@type": "Question", name: "Puis-je recadrer en format carré pour Instagram ?", acceptedAnswer: { "@type": "Answer", text: "Oui, entrez la même valeur pour la largeur et la hauteur (par exemple 1080x1080) et ajustez les coordonnées X et Y pour centrer le sujet." } }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Recadrer une image", href: "/recadrer-image" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Recadrer une image gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Découpez et recadrez vos images avec précision. Sélectionnez la zone à conserver et téléchargez le résultat immédiatement. Compatible JPG, PNG et WebP. Gratuit, sans inscription, aucun fichier conservé sur nos serveurs.</p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi recadrer vos images ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le recadrage est l'opération de retouche photo la plus courante. Il permet de supprimer les éléments indésirables en bordure de l'image, de recentrer le sujet principal, ou d'adapter les proportions de l'image à un format spécifique (carré pour Instagram, 16:9 pour une bannière, etc.).</p>
          <p className="text-gray-600 mb-4">Un bon recadrage peut transformer une photo moyenne en une composition percutante. En photographie, la règle des tiers suggère de placer le sujet principal sur l'un des points d'intersection de la grille imaginaire qui divise l'image en neuf parties égales.</p>
          <p className="text-gray-600 mb-4">Notre outil vous permet de définir précisément la zone à conserver en pixels. Entrez les coordonnées du point de départ (X et Y depuis le coin supérieur gauche) et les dimensions souhaitées (largeur et hauteur). L'image sera découpée exactement selon vos spécifications.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment connaître les dimensions de mon image ?</h3>
            <p className="text-gray-600 mb-4">Uploadez votre image et ses dimensions s'affichent automatiquement. Vous pouvez aussi utiliser notre outil de métadonnées pour voir les détails de votre image.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je recadrer en format carré pour Instagram ?</h3>
            <p className="text-gray-600 mb-4">Oui, entrez la même valeur pour la largeur et la hauteur (par exemple 1080x1080) et ajustez les coordonnées X et Y pour centrer le sujet.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/recadrer-image" />
    </div>
    </>
  );
}
