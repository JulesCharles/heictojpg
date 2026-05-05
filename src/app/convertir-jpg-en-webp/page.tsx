import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir JPG en WebP en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images JPG en WebP pour réduire leur taille de 25 à 35%. Format recommandé par Google pour le web. Gratuit, sans inscription.",
  keywords: ["convertir jpg en webp","jpg to webp","jpg webp gratuit","optimiser image web","jpg vers webp"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-jpg-en-webp",
    siteName: "heictojpg.fr",
    title: "Convertir JPG en WebP gratuitement en ligne",
    description: "Convertissez vos images JPG en WebP pour réduire leur taille de 25 à 35%. Format recommandé par Google pour le web. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-jpg-en-webp" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur JPG en WebP",
      url: "https://heictojpg.fr/convertir-jpg-en-webp",
      description: "Convertissez vos images JPG en WebP pour réduire leur taille de 25 à 35%. Format recommandé par Google pour le web. Gratuit, sans inscription.",
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
          name: "Le WebP est-il supporté par tous les navigateurs ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, depuis 2020, tous les navigateurs modernes supportent le WebP : Chrome, Firefox, Safari (depuis la version 14), Edge et Opera. Seul Internet Explorer ne le supporte pas, mais ce navigateur n'est plus maintenu par Microsoft." },
        },
        {
          "@type": "Question",
          name: "Quelle est la différence de taille entre JPG et WebP ?",
          acceptedAnswer: { "@type": "Answer", text: "En moyenne, un fichier WebP est 25 à 35% plus léger qu'un JPG de qualité équivalente. Pour une image de 500 Ko en JPG, vous obtiendrez environ 325 à 375 Ko en WebP, sans différence visible à l'œil nu." },
        },
        {
          "@type": "Question",
          name: "Le WebP est-il bon pour le SEO ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, Google recommande officiellement le WebP pour optimiser les Core Web Vitals. Des images plus légères signifient un temps de chargement plus rapide, ce qui améliore directement votre classement dans les résultats de recherche." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir JPG en WebP gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos images JPG en WebP, le format nouvelle génération de Google. Le WebP offre une compression 25 à 35% supérieure au JPG avec une qualité visuelle identique. C'est le format recommandé pour améliorer les performances de votre site web et votre score Google PageSpeed.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="JPG &rarr; WebP"
          acceptedFormats=".jpg,.jpeg,image/jpeg"
          acceptLabel="Sélectionner un fichier JPG"
          outputFormat="webp"
          apiEndpoint="/api/convert-image"
          outputExtension=".webp"
          acceptedMimeTypes={["image/jpeg"]}
          acceptedExtensions={[".jpg",".jpeg"]}
          errorMessage="Veuillez sélectionner un fichier JPG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir JPG en WebP ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format WebP a été développé par Google en 2010 pour répondre à un besoin simple : des images plus légères sur le web, sans sacrifier la qualité visuelle. Aujourd'hui, WebP est supporté par tous les navigateurs modernes (Chrome, Firefox, Safari, Edge) et est devenu le standard recommandé par Google pour optimiser les Core Web Vitals.</p>
          <p className="text-gray-600 mb-4">En convertissant vos images JPG en WebP, vous pouvez réduire la taille de vos fichiers de 25 à 35% en moyenne. Pour un site web avec des centaines d'images, cela représente une économie de bande passante considérable et un temps de chargement significativement amélioré.</p>
          <p className="text-gray-600 mb-4">Le WebP supporte également la transparence (comme le PNG) et l'animation (comme le GIF), ce qui en fait un format polyvalent capable de remplacer à la fois le JPG, le PNG et le GIF dans la plupart des cas d'utilisation web.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le WebP est-il supporté par tous les navigateurs ?</h3>
            <p className="text-gray-600 mb-4">Oui, depuis 2020, tous les navigateurs modernes supportent le WebP : Chrome, Firefox, Safari (depuis la version 14), Edge et Opera. Seul Internet Explorer ne le supporte pas, mais ce navigateur n'est plus maintenu par Microsoft.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle est la différence de taille entre JPG et WebP ?</h3>
            <p className="text-gray-600 mb-4">En moyenne, un fichier WebP est 25 à 35% plus léger qu'un JPG de qualité équivalente. Pour une image de 500 Ko en JPG, vous obtiendrez environ 325 à 375 Ko en WebP, sans différence visible à l'œil nu.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le WebP est-il bon pour le SEO ?</h3>
            <p className="text-gray-600 mb-4">Oui, Google recommande officiellement le WebP pour optimiser les Core Web Vitals. Des images plus légères signifient un temps de chargement plus rapide, ce qui améliore directement votre classement dans les résultats de recherche.</p>
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
