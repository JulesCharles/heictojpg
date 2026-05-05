import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir GIF en PNG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images GIF en PNG avec transparence conservee. Qualite sans perte. Gratuit, sans inscription.",
  keywords: ["convertir gif en png","gif to png","gif png gratuit","gif vers png"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-gif-en-png",
    siteName: "heictojpg.fr",
    title: "Convertir GIF en PNG gratuitement en ligne",
    description: "Convertissez vos images GIF en PNG avec transparence conservee. Qualite sans perte. Gratuit, sans inscription.",
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
      description: "Convertissez vos images GIF en PNG avec transparence conservee. Qualite sans perte. Gratuit, sans inscription.",
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
          name: "La transparence du GIF est-elle conservee ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, si votre GIF contient de la transparence, celle-ci sera convertie en transparence PNG (canal alpha), qui est de meilleure qualite que la transparence GIF." },
        },
        {
          "@type": "Question",
          name: "Que se passe-t-il avec un GIF anime ?",
          acceptedAnswer: { "@type": "Answer", text: "Notre outil extrait la premiere frame de l'animation et la convertit en PNG statique. Pour conserver l'animation, utilisez le format WebP anime." },
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
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir GIF en PNG gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos images GIF en PNG pour une qualite superieure avec des millions de couleurs au lieu de 256. La transparence est conservee. Ideal pour moderniser vos graphiques et icones.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="GIF &rarr; PNG"
          acceptedFormats=".gif,image/gif"
          acceptLabel="Selectionner un fichier GIF"
          outputFormat="png"
          apiEndpoint="/api/convert-image"
          outputExtension=".png"
          acceptedMimeTypes={["image/gif"]}
          acceptedExtensions={[".gif"]}
          errorMessage="Veuillez selectionner un fichier GIF valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir GIF en PNG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format GIF est limite a une palette de 256 couleurs, ce qui peut produire des bandes de couleurs visibles (color banding) et un aspect granuleux, surtout sur les photographies et les degrades. Le PNG supporte des millions de couleurs et offre une qualite visuelle nettement superieure.</p>
          <p className="text-gray-600 mb-4">De plus, le GIF ne supporte qu'une transparence binaire (un pixel est soit totalement transparent, soit totalement opaque), tandis que le PNG supporte la transparence partielle (canal alpha 8 bits), permettant des contours lisses et des ombres transparentes.</p>
          <p className="text-gray-600 mb-4">Convertir vos GIF en PNG est recommande pour tous les graphiques statiques : logos, icones, boutons, bannieres. Vous obtiendrez des images plus nettes, plus propres, et souvent meme plus legeres que les GIF originaux.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La transparence du GIF est-elle conservee ?</h3>
            <p className="text-gray-600 mb-4">Oui, si votre GIF contient de la transparence, celle-ci sera convertie en transparence PNG (canal alpha), qui est de meilleure qualite que la transparence GIF.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Que se passe-t-il avec un GIF anime ?</h3>
            <p className="text-gray-600 mb-4">Notre outil extrait la premiere frame de l'animation et la convertit en PNG statique. Pour conserver l'animation, utilisez le format WebP anime.</p>
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
