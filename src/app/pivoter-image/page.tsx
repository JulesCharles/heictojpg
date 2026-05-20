import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Pivoter et retourner une image gratuit | heictojpg.fr",
  description: "Pivotez vos images de 90, 180 ou 270 degrés. Retournez horizontalement ou verticalement. Gratuit, sans inscription.",
  keywords: ["pivoter image","tourner photo","rotation image en ligne","retourner image","pivoter photo gratuit"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/pivoter-image",
    siteName: "heictojpg.fr",
    title: "Pivoter et retourner une image gratuitement en ligne",
    description: "Pivotez vos images de 90, 180 ou 270 degrés. Retournez horizontalement ou verticalement. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/pivoter-image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Pivoter et retourner une image gratuitement",
      url: "https://heictojpg.fr/pivoter-image",
      description: "Pivotez vos images de 90, 180 ou 270 degrés. Retournez horizontalement ou verticalement. Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "La qualité est-elle affectée par la rotation ?", acceptedAnswer: { "@type": "Answer", text: "Non, la rotation de 90, 180 ou 270 degrés est une opération sans perte pour les formats qui le supportent. L'image n'est pas re-compressée, elle est simplement réorientée." } },
        { "@type": "Question", name: "Puis-je pivoter d'un angle personnalisé ?", acceptedAnswer: { "@type": "Answer", text: "Notre outil supporte les rotations de 90, 180 et 270 degrés. Pour des rotations d'angles arbitraires, un logiciel d'édition plus avancé est nécessaire." } }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Pivoter une image", href: "/pivoter-image" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Pivoter et retourner une image gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Pivotez vos images de 90, 180 ou 270 degrés, ou retournez-les horizontalement ou verticalement. Idéal pour corriger l'orientation de vos photos. Compatible avec tous les formats d'image courants.</p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi pivoter vos images ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">La rotation d'image est essentielle pour corriger l'orientation des photos prises avec un smartphone ou un appareil photo en mode portrait/paysage. Parfois, les métadonnées EXIF d'orientation ne sont pas correctement interprétées par certains logiciels, ce qui affiche l'image tournée.</p>
          <p className="text-gray-600 mb-4">Notre outil propose plusieurs types de transformations : rotation de 90 degrés (quart de tour), 180 degrés (demi-tour), 270 degrés (trois quarts de tour), retournement vertical (miroir haut/bas) et retournement horizontal (miroir gauche/droite).</p>
          <p className="text-gray-600 mb-4">Le retournement horizontal est souvent utilisé pour les selfies, car les appareils photo frontaux prennent les photos en miroir. Le retournement vertical est utile pour les images scannées à l'envers.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualité est-elle affectée par la rotation ?</h3>
            <p className="text-gray-600 mb-4">Non, la rotation de 90, 180 ou 270 degrés est une opération sans perte pour les formats qui le supportent. L'image n'est pas re-compressée, elle est simplement réorientée.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je pivoter d'un angle personnalisé ?</h3>
            <p className="text-gray-600 mb-4">Notre outil supporte les rotations de 90, 180 et 270 degrés. Pour des rotations d'angles arbitraires, un logiciel d'édition plus avancé est nécessaire.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/pivoter-image" />
    </div>
    </>
  );
}
