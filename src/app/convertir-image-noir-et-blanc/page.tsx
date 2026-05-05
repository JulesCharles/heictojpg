import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";

export const metadata: Metadata = {
  title: "Convertir image en noir et blanc gratuit | heictojpg.fr",
  description: "Transformez vos photos couleur en noir et blanc (niveaux de gris). Effet artistique instantane. Gratuit, sans inscription.",
  keywords: ["image noir et blanc","convertir noir et blanc","photo noir blanc en ligne","niveaux de gris","grayscale"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-image-noir-et-blanc",
    siteName: "heictojpg.fr",
    title: "Convertir une image en noir et blanc gratuitement",
    description: "Transformez vos photos couleur en noir et blanc (niveaux de gris). Effet artistique instantane. Gratuit, sans inscription.",
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
      description: "Transformez vos photos couleur en noir et blanc (niveaux de gris). Effet artistique instantane. Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Quelle est la difference entre noir et blanc et niveaux de gris ?", acceptedAnswer: { "@type": "Answer", text: "Le noir et blanc pur ne contient que du noir et du blanc. Les niveaux de gris (grayscale) contiennent 256 nuances de gris, du noir pur au blanc pur. Notre outil convertit en niveaux de gris pour un rendu photographique." } },
        { "@type": "Question", name: "Puis-je revenir a la couleur apres conversion ?", acceptedAnswer: { "@type": "Answer", text: "Non, la conversion en niveaux de gris supprime definitivement les informations de couleur. Conservez toujours votre image originale en couleur avant de convertir." } }
      ],
    },
  ],
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir une image en noir et blanc</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Transformez instantanement vos photos couleur en images noir et blanc elegantes. L'effet niveaux de gris donne a vos photos un aspect artistique intemporel. Compatible JPG, PNG et WebP.</p>
      </div>

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">L'art de la photographie noir et blanc</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">La photographie noir et blanc est l'une des formes d'expression artistique les plus puissantes. En supprimant la couleur, l'attention du spectateur se concentre sur les formes, les textures, les contrastes et la composition de l'image.</p>
          <p className="text-gray-600 mb-4">De nombreux photographes professionnels utilisent le noir et blanc pour les portraits, les paysages urbains, l'architecture et la photographie de rue. L'absence de couleur cree une atmosphere intemporelle et dramatique qui transcende les modes.</p>
          <p className="text-gray-600 mb-4">Notre outil convertit vos images couleur en niveaux de gris (256 niveaux) en utilisant une formule de luminance perceptuelle qui preserve les contrastes naturels de l'image. Le resultat est une conversion fidele qui met en valeur les details et les textures de votre photo.</p>
          <p className="text-gray-600 mb-4">Cette conversion est egalement utile pour l'impression en noir et blanc, les documents officiels, et la preparation d'images pour des projets de design ou la couleur n'est pas necessaire.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle est la difference entre noir et blanc et niveaux de gris ?</h3>
            <p className="text-gray-600 mb-4">Le noir et blanc pur ne contient que du noir et du blanc. Les niveaux de gris (grayscale) contiennent 256 nuances de gris, du noir pur au blanc pur. Notre outil convertit en niveaux de gris pour un rendu photographique.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je revenir a la couleur apres conversion ?</h3>
            <p className="text-gray-600 mb-4">Non, la conversion en niveaux de gris supprime definitivement les informations de couleur. Conservez toujours votre image originale en couleur avant de convertir.</p>
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
