import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir TIFF en WebP en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos fichiers TIFF volumineux en WebP ultra-legers pour le web. Reduction de taille jusqu'a 98%. Gratuit.",
  keywords: ["convertir tiff en webp","tiff to webp","tiff webp gratuit","tiff vers webp"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-tiff-en-webp",
    siteName: "heictojpg.fr",
    title: "Convertir TIFF en WebP gratuitement en ligne",
    description: "Convertissez vos fichiers TIFF volumineux en WebP ultra-legers pour le web. Reduction de taille jusqu'a 98%. Gratuit.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-tiff-en-webp" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur TIFF en WebP",
      url: "https://heictojpg.fr/convertir-tiff-en-webp",
      description: "Convertissez vos fichiers TIFF volumineux en WebP ultra-legers pour le web. Reduction de taille jusqu'a 98%. Gratuit.",
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
          name: "Quelle reduction de taille esperer ?",
          acceptedAnswer: { "@type": "Answer", text: "Un TIFF de 50 Mo deviendra generalement un WebP de 500 Ko a 2 Mo, soit une reduction de 95 a 99%. La difference exacte depend de la complexite de l'image." },
        },
        {
          "@type": "Question",
          name: "Puis-je utiliser le WebP pour l'impression ?",
          acceptedAnswer: { "@type": "Answer", text: "Non, le WebP est un format optimise pour l'ecran. Pour l'impression, conservez votre fichier TIFF original ou convertissez en JPG haute qualite." },
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
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir TIFF en WebP gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos fichiers TIFF professionnels en images WebP optimisees pour le web. Passez d'un fichier de 50 Mo a moins de 1 Mo sans perte visible de qualite. Ideal pour publier vos photos pro en ligne.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="TIFF &rarr; WebP"
          acceptedFormats=".tiff,.tif,image/tiff"
          acceptLabel="Selectionner un fichier TIFF"
          outputFormat="webp"
          apiEndpoint="/api/convert-image"
          outputExtension=".webp"
          acceptedMimeTypes={["image/tiff"]}
          acceptedExtensions={[".tiff",".tif"]}
          errorMessage="Veuillez selectionner un fichier TIFF valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir TIFF en WebP ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">La conversion TIFF vers WebP est la plus extreme en termes de reduction de taille. Un fichier TIFF professionnel de 50 Mo peut devenir un WebP de 500 Ko a 2 Mo, soit une reduction de 95 a 99%.</p>
          <p className="text-gray-600 mb-4">Cette conversion est ideale pour les photographes qui souhaitent publier leurs images sur le web : portfolios en ligne, galeries photo, blogs. Le WebP offre la meilleure compression web tout en conservant une qualite visuelle excellente.</p>
          <p className="text-gray-600 mb-4">Le passage direct du TIFF au WebP (sans passer par le JPG intermediaire) preserv davantage de qualite car vous evitez une double compression avec perte.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle reduction de taille esperer ?</h3>
            <p className="text-gray-600 mb-4">Un TIFF de 50 Mo deviendra generalement un WebP de 500 Ko a 2 Mo, soit une reduction de 95 a 99%. La difference exacte depend de la complexite de l'image.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je utiliser le WebP pour l'impression ?</h3>
            <p className="text-gray-600 mb-4">Non, le WebP est un format optimise pour l'ecran. Pour l'impression, conservez votre fichier TIFF original ou convertissez en JPG haute qualite.</p>
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
