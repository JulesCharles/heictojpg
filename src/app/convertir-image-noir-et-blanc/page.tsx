import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Convertir image en noir et blanc gratuit | heictojpg.fr",
  description: "Transformez vos photos couleur en noir et blanc (niveaux de gris). Effet artistique instantané. Gratuit, sans inscription.",
  keywords: ["image noir et blanc","convertir noir et blanc","photo noir blanc en ligne","niveaux de gris","grayscale"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-image-noir-et-blanc",
    siteName: "heictojpg.fr",
    title: "Convertir une image en noir et blanc gratuitement",
    description: "Transformez vos photos couleur en noir et blanc (niveaux de gris). Effet artistique instantané. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-image-noir-et-blanc" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertir une image en noir et blanc",
      url: "https://heictojpg.fr/convertir-image-noir-et-blanc",
      description: "Transformez vos photos couleur en noir et blanc (niveaux de gris). Effet artistique instantané. Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Quelle est la différence entre noir et blanc et niveaux de gris ?", acceptedAnswer: { "@type": "Answer", text: "Le noir et blanc pur ne contient que du noir et du blanc. Les niveaux de gris (grayscale) contiennent 256 nuances de gris, du noir pur au blanc pur. Notre outil convertit en niveaux de gris pour un rendu photographique." } },
        { "@type": "Question", name: "Puis-je revenir à la couleur après conversion ?", acceptedAnswer: { "@type": "Answer", text: "Non, la conversion en niveaux de gris supprime définitivement les informations de couleur. Conservez toujours votre image originale en couleur avant de convertir." } }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir une image en noir et blanc</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Transformez instantanément vos photos couleur en images noir et blanc élégantes. L'effet niveaux de gris donne à vos photos un aspect artistique intemporel. Compatible JPG, PNG et WebP.</p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">L'art de la photographie noir et blanc</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">La photographie noir et blanc est l'une des formes d'expression artistique les plus puissantes. En supprimant la couleur, l'attention du spectateur se concentre sur les formes, les textures, les contrastes et la composition de l'image.</p>
          <p className="text-gray-600 mb-4">De nombreux photographes professionnels utilisent le noir et blanc pour les portraits, les paysages urbains, l'architecture et la photographie de rue. L'absence de couleur crée une atmosphère intemporelle et dramatique qui transcende les modes.</p>
          <p className="text-gray-600 mb-4">Notre outil convertit vos images couleur en niveaux de gris (256 niveaux) en utilisant une formule de luminance perceptuelle qui préserve les contrastes naturels de l'image. Le résultat est une conversion fidèle qui met en valeur les détails et les textures de votre photo.</p>
          <p className="text-gray-600 mb-4">Cette conversion est également utile pour l'impression en noir et blanc, les documents officiels, et la préparation d'images pour des projets de design où la couleur n'est pas nécessaire.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle est la différence entre noir et blanc et niveaux de gris ?</h3>
            <p className="text-gray-600 mb-4">Le noir et blanc pur ne contient que du noir et du blanc. Les niveaux de gris (grayscale) contiennent 256 nuances de gris, du noir pur au blanc pur. Notre outil convertit en niveaux de gris pour un rendu photographique.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je revenir à la couleur après conversion ?</h3>
            <p className="text-gray-600 mb-4">Non, la conversion en niveaux de gris supprime définitivement les informations de couleur. Conservez toujours votre image originale en couleur avant de convertir.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-image-noir-et-blanc" />
    </div>
    </>
  );
}
