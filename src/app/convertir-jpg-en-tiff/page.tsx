import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir JPG en TIFF en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images JPG en TIFF professionnel pour l'impression et la retouche. Gratuit, rapide, sans inscription.",
  keywords: ["convertir jpg en tiff","jpg to tiff","jpg tiff gratuit","jpg vers tiff","jpg impression"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-jpg-en-tiff",
    siteName: "heictojpg.fr",
    title: "Convertir JPG en TIFF gratuitement en ligne",
    description: "Convertissez vos images JPG en TIFF professionnel pour l'impression et la retouche. Gratuit, rapide, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-jpg-en-tiff" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur JPG en TIFF",
      url: "https://heictojpg.fr/convertir-jpg-en-tiff",
      description: "Convertissez vos images JPG en TIFF professionnel pour l'impression et la retouche. Gratuit, rapide, sans inscription.",
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
          name: "La conversion JPG vers TIFF ameliore-t-elle la qualite ?",
          acceptedAnswer: { "@type": "Answer", text: "Non, la conversion ne peut pas restaurer les details perdus lors de la compression JPG initiale. Elle produit un TIFF de meme qualite visuelle que le JPG source, mais dans un format adapte aux flux professionnels." },
        },
        {
          "@type": "Question",
          name: "Mon imprimeur demande du TIFF, est-ce suffisant ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, si votre JPG est en haute resolution (300 DPI, grande taille), la conversion en TIFF sera parfaitement adaptee a l'impression. Verifiez que la resolution est suffisante pour la taille d'impression souhaitee." },
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
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir JPG en TIFF gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos images JPG en fichiers TIFF professionnels, le format de reference pour l'impression haute qualite et la retouche photo avancee. Compatible avec Photoshop, Lightroom et tous les logiciels professionnels.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="JPG &rarr; TIFF"
          acceptedFormats=".jpg,.jpeg,image/jpeg"
          acceptLabel="Selectionner un fichier JPG"
          outputFormat="tiff"
          apiEndpoint="/api/convert-image"
          outputExtension=".tiff"
          acceptedMimeTypes={["image/jpeg"]}
          acceptedExtensions={[".jpg",".jpeg"]}
          errorMessage="Veuillez selectionner un fichier JPG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir JPG en TIFF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format TIFF est exige par de nombreux imprimeurs professionnels, editeurs de livres et agences de publicite. Si vous avez des photos en JPG et devez les fournir en TIFF, notre outil fait la conversion en un clic.</p>
          <p className="text-gray-600 mb-4">Bien que la conversion JPG vers TIFF n'ameliore pas la qualite intrinseque de l'image (les donnees perdues lors de la compression JPG ne sont pas recuperees), elle vous permet de fournir vos images dans le format requis par les flux de travail professionnels.</p>
          <p className="text-gray-600 mb-4">Le TIFF offre egalement l'avantage de ne pas degrader l'image lors d'ouvertures et enregistrements successifs, contrairement au JPG qui perd un peu de qualite a chaque re-compression. Une fois converti en TIFF, votre image peut etre editee et re-enregistree autant de fois que necessaire sans degradation.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La conversion JPG vers TIFF ameliore-t-elle la qualite ?</h3>
            <p className="text-gray-600 mb-4">Non, la conversion ne peut pas restaurer les details perdus lors de la compression JPG initiale. Elle produit un TIFF de meme qualite visuelle que le JPG source, mais dans un format adapte aux flux professionnels.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mon imprimeur demande du TIFF, est-ce suffisant ?</h3>
            <p className="text-gray-600 mb-4">Oui, si votre JPG est en haute resolution (300 DPI, grande taille), la conversion en TIFF sera parfaitement adaptee a l'impression. Verifiez que la resolution est suffisante pour la taille d'impression souhaitee.</p>
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
