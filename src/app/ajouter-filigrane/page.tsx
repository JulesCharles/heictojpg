import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";

export const metadata: Metadata = {
  title: "Ajouter un filigrane à une image gratuit | heictojpg.fr",
  description: "Protégez vos photos avec un filigrane texte personnalisable. Opacité réglable. Gratuit, sans inscription.",
  keywords: ["ajouter filigrane","watermark image","filigrane photo","protéger image","watermark gratuit"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/ajouter-filigrane",
    siteName: "heictojpg.fr",
    title: "Ajouter un filigrane (watermark) à une image gratuitement",
    description: "Protégez vos photos avec un filigrane texte personnalisable. Opacité réglable. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/ajouter-filigrane" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Ajouter un filigrane à une image",
      url: "https://heictojpg.fr/ajouter-filigrane",
      description: "Protégez vos photos avec un filigrane texte personnalisable. Opacité réglable. Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Le filigrane peut-il être retiré ?", acceptedAnswer: { "@type": "Answer", text: "Techniquement, des outils IA avancés peuvent tenter de retirer un filigrane, mais le résultat est rarement parfait. Un filigrane semi-transparent positionné sur le sujet principal est très difficile à retirer proprement." } },
        { "@type": "Question", name: "Quelle opacité recommandez-vous ?", acceptedAnswer: { "@type": "Answer", text: "20-30% pour un marquage discret (portfolios, previews), 40-60% pour une protection standard, 70%+ pour les images qui ne doivent pas être utilisées sans paiement." } }
      ],
    },
  ],
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Ajouter un filigrane à une image</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Protégez vos photos et créations visuelles en ajoutant un filigrane texte personnalisable. Réglez l'opacité pour un marquage discret ou visible. Idéal pour les photographes, les designers et les créateurs de contenu.</p>
      </div>

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi ajouter un filigrane à vos photos ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le filigrane (watermark) est un marquage semi-transparent apposé sur une image pour en protéger la propriété intellectuelle. Il est largement utilisé par les photographes professionnels, les agences photo, les banques d'images et les créateurs de contenu visuel.</p>
          <p className="text-gray-600 mb-4">Ajouter un filigrane dissuade le vol d'images en rendant la photo inutilisable sans autorisation. Même si le filigrane peut être retiré par des outils avancés, sa présence suffit à établir la propriété de l'image et à décourager la grande majorité des utilisations non autorisées.</p>
          <p className="text-gray-600 mb-4">Le filigrane sert également d'outil de branding : en ajoutant votre nom, votre logo ou l'URL de votre site web, vous assurez que votre marque reste visible même lorsque l'image est partagée sur les réseaux sociaux sans crédit.</p>
          <p className="text-gray-600 mb-4">Notre outil vous permet de personnaliser le texte du filigrane et son opacité. Une opacité de 20-30% est suffisante pour protéger l'image tout en la laissant visible pour l'évaluation. Une opacité de 50-70% est recommandée pour les images que vous ne souhaitez pas voir utilisées sans paiement.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le filigrane peut-il être retiré ?</h3>
            <p className="text-gray-600 mb-4">Techniquement, des outils IA avancés peuvent tenter de retirer un filigrane, mais le résultat est rarement parfait. Un filigrane semi-transparent positionné sur le sujet principal est très difficile à retirer proprement.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle opacité recommandez-vous ?</h3>
            <p className="text-gray-600 mb-4">20-30% pour un marquage discret (portfolios, previews), 40-60% pour une protection standard, 70%+ pour les images qui ne doivent pas être utilisées sans paiement.</p>
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
