import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir GIF en PNG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images GIF en PNG avec transparence conservée. Qualité sans perte. Gratuit, sans inscription.",
  keywords: ["convertir gif en png","gif to png","gif png gratuit","gif vers png"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-gif-en-png",
    siteName: "heictojpg.fr",
    title: "Convertir GIF en PNG gratuitement en ligne",
    description: "Convertissez vos images GIF en PNG avec transparence conservée. Qualité sans perte. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-gif-en-png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur GIF en PNG",
      url: "https://heictojpg.fr/convertir-gif-en-png",
      description: "Convertissez vos images GIF en PNG avec transparence conservée. Qualité sans perte. Gratuit, sans inscription.",
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
          name: "La transparence du GIF est-elle conservée ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, si votre GIF contient de la transparence, celle-ci sera convertie en transparence PNG (canal alpha), qui est de meilleure qualité que la transparence GIF." },
        },
        {
          "@type": "Question",
          name: "Que se passe-t-il avec un GIF animé ?",
          acceptedAnswer: { "@type": "Answer", text: "Notre outil extrait la première frame de l'animation et la convertit en PNG statique. Pour conserver l'animation, utilisez le format WebP animé." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir GIF en PNG gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images GIF en PNG pour une qualité supérieure avec des millions de couleurs au lieu de 256. La transparence est conservée. Idéal pour moderniser vos graphiques et icônes.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="GIF &rarr; PNG"
          acceptedFormats=".gif,image/gif"
          acceptLabel="Sélectionner un fichier GIF"
          outputFormat="png"
          apiEndpoint="/api/convert-image"
          outputExtension=".png"
          acceptedMimeTypes={["image/gif"]}
          acceptedExtensions={[".gif"]}
          errorMessage="Veuillez sélectionner un fichier GIF valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir GIF en PNG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format GIF est limité à une palette de 256 couleurs, ce qui peut produire des bandes de couleurs visibles (color banding) et un aspect granuleux, surtout sur les photographies et les dégradés. Le PNG supporte des millions de couleurs et offre une qualité visuelle nettement supérieure.</p>
          <p className="text-gray-600 mb-4">De plus, le GIF ne supporte qu'une transparence binaire (un pixel est soit totalement transparent, soit totalement opaque), tandis que le PNG supporte la transparence partielle (canal alpha 8 bits), permettant des contours lisses et des ombres transparentes.</p>
          <p className="text-gray-600 mb-4">Convertir vos GIF en PNG est recommandé pour tous les graphiques statiques : logos, icônes, boutons, bannières. Vous obtiendrez des images plus nettes, plus propres, et souvent même plus légères que les GIF originaux.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La transparence du GIF est-elle conservée ?</h3>
            <p className="text-gray-600 mb-4">Oui, si votre GIF contient de la transparence, celle-ci sera convertie en transparence PNG (canal alpha), qui est de meilleure qualité que la transparence GIF.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Que se passe-t-il avec un GIF animé ?</h3>
            <p className="text-gray-600 mb-4">Notre outil extrait la première frame de l'animation et la convertit en PNG statique. Pour conserver l'animation, utilisez le format WebP animé.</p>
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
