import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";

export const metadata: Metadata = {
  title: "Inverser les couleurs d'une image gratuit | heictojpg.fr",
  description: "Inversez les couleurs de vos images pour creer un effet negatif. Outil gratuit, rapide, sans inscription.",
  keywords: ["inverser couleurs image","negatif photo","inverser image en ligne","negative image","couleurs inversees"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/inverser-couleurs-image",
    siteName: "heictojpg.fr",
    title: "Inverser les couleurs d'une image gratuitement",
    description: "Inversez les couleurs de vos images pour creer un effet negatif. Outil gratuit, rapide, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/inverser-couleurs-image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Inverser les couleurs d'une image",
      url: "https://heictojpg.fr/inverser-couleurs-image",
      description: "Inversez les couleurs de vos images pour creer un effet negatif. Outil gratuit, rapide, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Puis-je revenir aux couleurs originales ?", acceptedAnswer: { "@type": "Answer", text: "Oui ! Il suffit d'inverser a nouveau l'image inversee pour retrouver les couleurs originales. L'inversion est une operation parfaitement reversible." } },
        { "@type": "Question", name: "L'inversion fonctionne-t-elle avec les images en noir et blanc ?", acceptedAnswer: { "@type": "Answer", text: "Oui, l'inversion d'une image en noir et blanc produit un negatif classique : les zones sombres deviennent claires et vice versa." } }
      ],
    },
  ],
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Inverser les couleurs d'une image</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Creez un effet negatif en inversant toutes les couleurs de votre image. Le blanc devient noir, le bleu devient orange, le rouge devient cyan. Un effet artistique saisissant en un clic.</p>
      </div>

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">L'effet negatif en photographie</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">L'inversion des couleurs, aussi appelee effet negatif, transforme chaque couleur de l'image en sa couleur complementaire. Le blanc (255,255,255) devient noir (0,0,0), le rouge (255,0,0) devient cyan (0,255,255), et ainsi de suite.</p>
          <p className="text-gray-600 mb-4">Cet effet rappelle les negatifs de pellicule photographique utilisees avant l'ere numerique. Il cree un rendu visuel unique et souvent surreal qui peut etre utilise a des fins artistiques, pour des affiches, des couvertures d'album ou du design graphique experimental.</p>
          <p className="text-gray-600 mb-4">L'inversion des couleurs est aussi utilisee en accessibilite : certaines personnes trouvent plus confortable de lire du texte clair sur fond sombre, et l'inversion d'une capture d'ecran peut faciliter la lecture.</p>
          <p className="text-gray-600 mb-4">En science et en medecine, l'inversion des couleurs est parfois utilisee pour mieux visualiser certains details dans les images microscopiques ou les radiographies.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je revenir aux couleurs originales ?</h3>
            <p className="text-gray-600 mb-4">Oui ! Il suffit d'inverser a nouveau l'image inversee pour retrouver les couleurs originales. L'inversion est une operation parfaitement reversible.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">L'inversion fonctionne-t-elle avec les images en noir et blanc ?</h3>
            <p className="text-gray-600 mb-4">Oui, l'inversion d'une image en noir et blanc produit un negatif classique : les zones sombres deviennent claires et vice versa.</p>
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
