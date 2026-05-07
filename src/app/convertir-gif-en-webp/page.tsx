import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir GIF en WebP en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos GIF en WebP pour des fichiers beaucoup plus légers. Idéal pour optimiser le web. Gratuit, sans inscription.",
  keywords: ["convertir gif en webp","gif to webp","gif webp gratuit","optimiser gif","gif vers webp"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-gif-en-webp",
    siteName: "heictojpg.fr",
    title: "Convertir GIF en WebP gratuitement en ligne",
    description: "Convertissez vos GIF en WebP pour des fichiers beaucoup plus légers. Idéal pour optimiser le web. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-gif-en-webp" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur GIF en WebP",
      url: "https://heictojpg.fr/convertir-gif-en-webp",
      description: "Convertissez vos GIF en WebP pour des fichiers beaucoup plus légers. Idéal pour optimiser le web. Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Les GIF animés seront-ils convertis en WebP animé ?",
          acceptedAnswer: { "@type": "Answer", text: "Notre outil convertit la première frame du GIF en WebP statique. Pour convertir des GIF animés en WebP animé, un outil spécialisé est nécessaire." },
        },
        {
          "@type": "Question",
          name: "Le WebP est-il toujours plus léger que le GIF ?",
          acceptedAnswer: { "@type": "Answer", text: "Dans la grande majorité des cas, oui. Le WebP utilise une compression beaucoup plus efficace que le GIF, surtout pour les images avec des dégradés ou beaucoup de couleurs." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir GIF en WebP gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images GIF en WebP pour des fichiers significativement plus légers et une meilleure qualité visuelle. Le WebP supporte des millions de couleurs au lieu de 256 pour le GIF.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="GIF &rarr; WebP"
          acceptedFormats=".gif,image/gif"
          acceptLabel="Sélectionner un fichier GIF"
          outputFormat="webp"
          apiEndpoint="/api/convert-image"
          outputExtension=".webp"
          acceptedMimeTypes={["image/gif"]}
          acceptedExtensions={[".gif"]}
          errorMessage="Veuillez sélectionner un fichier GIF valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir GIF en WebP ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le WebP offre deux avantages majeurs par rapport au GIF pour les images statiques : une compression nettement supérieure et le support de millions de couleurs au lieu de 256.</p>
          <p className="text-gray-600 mb-4">Pour les images statiques, la conversion GIF vers WebP peut réduire la taille du fichier de 30 à 70% tout en améliorant considérablement la qualité visuelle grâce au support des couleurs 24 bits.</p>
          <p className="text-gray-600 mb-4">Cette conversion est particulièrement utile pour moderniser les graphiques web anciens (boutons, bannières, icônes) qui sont encore au format GIF. Le passage au WebP améliore à la fois les performances et l'apparence visuelle de votre site.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Les GIF animés seront-ils convertis en WebP animé ?</h3>
            <p className="text-gray-600 mb-4">Notre outil convertit la première frame du GIF en WebP statique. Pour convertir des GIF animés en WebP animé, un outil spécialisé est nécessaire.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le WebP est-il toujours plus léger que le GIF ?</h3>
            <p className="text-gray-600 mb-4">Dans la grande majorité des cas, oui. Le WebP utilise une compression beaucoup plus efficace que le GIF, surtout pour les images avec des dégradés ou beaucoup de couleurs.</p>
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
    </>
  );
}
