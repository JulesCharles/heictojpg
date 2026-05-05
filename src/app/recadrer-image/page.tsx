import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";

export const metadata: Metadata = {
  title: "Recadrer une image en ligne gratuit | heictojpg.fr",
  description: "Recadrez vos images JPG, PNG et WebP en ligne. Decoupez la zone souhaitee avec precision. Gratuit, sans inscription.",
  keywords: ["recadrer image","recadrer photo en ligne","decouper image","crop image gratuit","rogner image"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/recadrer-image",
    siteName: "heictojpg.fr",
    title: "Recadrer une image gratuitement en ligne",
    description: "Recadrez vos images JPG, PNG et WebP en ligne. Decoupez la zone souhaitee avec precision. Gratuit, sans inscription.",
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
      description: "Recadrez vos images JPG, PNG et WebP en ligne. Decoupez la zone souhaitee avec precision. Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Comment connaitre les dimensions de mon image ?", acceptedAnswer: { "@type": "Answer", text: "Uploadez votre image et ses dimensions s'affichent automatiquement. Vous pouvez aussi utiliser notre outil de metadonnees pour voir les details de votre image." } },
        { "@type": "Question", name: "Puis-je recadrer en format carre pour Instagram ?", acceptedAnswer: { "@type": "Answer", text: "Oui, entrez la meme valeur pour la largeur et la hauteur (par exemple 1080x1080) et ajustez les coordonnees X et Y pour centrer le sujet." } }
      ],
    },
  ],
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Recadrer une image gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Decoupez et recadrez vos images avec precision. Selectionnez la zone a conserver et telechargez le resultat immediatement. Compatible JPG, PNG et WebP. Gratuit, sans inscription, aucun fichier conserve sur nos serveurs.</p>
      </div>

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi recadrer vos images ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le recadrage est l'operation de retouche photo la plus courante. Il permet de supprimer les elements indesirables en bordure de l'image, de recentrer le sujet principal, ou d'adapter les proportions de l'image a un format specifique (carre pour Instagram, 16:9 pour une banniere, etc.).</p>
          <p className="text-gray-600 mb-4">Un bon recadrage peut transformer une photo moyenne en une composition percutante. En photographie, la regle des tiers suggere de placer le sujet principal sur l'un des points d'intersection de la grille imaginaire qui divise l'image en neuf parties egales.</p>
          <p className="text-gray-600 mb-4">Notre outil vous permet de definir precisement la zone a conserver en pixels. Entrez les coordonnees du point de depart (X et Y depuis le coin superieur gauche) et les dimensions souhaitees (largeur et hauteur). L'image sera decoupee exactement selon vos specifications.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment connaitre les dimensions de mon image ?</h3>
            <p className="text-gray-600 mb-4">Uploadez votre image et ses dimensions s'affichent automatiquement. Vous pouvez aussi utiliser notre outil de metadonnees pour voir les details de votre image.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je recadrer en format carre pour Instagram ?</h3>
            <p className="text-gray-600 mb-4">Oui, entrez la meme valeur pour la largeur et la hauteur (par exemple 1080x1080) et ajustez les coordonnees X et Y pour centrer le sujet.</p>
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
