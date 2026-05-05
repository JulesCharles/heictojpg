import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir BMP en JPG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images BMP en JPG pour réduire leur taille jusqu'à 95%. Outil gratuit, rapide et sans inscription.",
  keywords: ["convertir bmp en jpg","bmp to jpg","bmp jpg gratuit","bmp vers jpg","bitmap en jpg"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-bmp-en-jpg",
    siteName: "heictojpg.fr",
    title: "Convertir BMP en JPG gratuitement en ligne",
    description: "Convertissez vos images BMP en JPG pour réduire leur taille jusqu'à 95%. Outil gratuit, rapide et sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-bmp-en-jpg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur BMP en JPG",
      url: "https://heictojpg.fr/convertir-bmp-en-jpg",
      description: "Convertissez vos images BMP en JPG pour réduire leur taille jusqu'à 95%. Outil gratuit, rapide et sans inscription.",
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
          name: "Qu'est-ce que le format BMP ?",
          acceptedAnswer: { "@type": "Answer", text: "BMP (Bitmap) est un format d'image non compressé créé par Microsoft. Il stocke chaque pixel individuellement, ce qui produit des fichiers très volumineux mais sans aucune perte de qualité." },
        },
        {
          "@type": "Question",
          name: "Pourquoi les fichiers BMP sont-ils si gros ?",
          acceptedAnswer: { "@type": "Answer", text: "Le BMP ne compresse pas les données. Chaque pixel est stocké avec ses composantes rouge, vert et bleu (3 octets par pixel). Une image 1920x1080 en BMP pèse donc environ 6 Mo (1920 x 1080 x 3 octets)." },
        },
        {
          "@type": "Question",
          name: "La qualité de la conversion est-elle bonne ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, notre outil utilise une compression JPG à 90% de qualité, ce qui offre un excellent compromis entre taille de fichier et qualité visuelle. La différence avec l'original est imperceptible." },
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
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir BMP en JPG gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos images BMP (Bitmap) en JPG pour des fichiers jusqu'à 95% plus légers. Le BMP est un format ancien et non compressé qui produit des fichiers énormes. Notre convertisseur vous permet de les rendre légers et partageables en un clic.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="BMP &rarr; JPG"
          acceptedFormats=".bmp,image/bmp"
          acceptLabel="Sélectionner un fichier BMP"
          outputFormat="jpg"
          apiEndpoint="/api/convert-image"
          outputExtension=".jpg"
          acceptedMimeTypes={["image/bmp"]}
          acceptedExtensions={[".bmp"]}
          errorMessage="Veuillez sélectionner un fichier BMP valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir BMP en JPG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format BMP (Bitmap) est l'un des plus anciens formats d'image numérique, créé par Microsoft dans les années 1980. Il ne compresse pas les données, ce qui signifie qu'un simple fond d'écran en BMP peut peser 5 à 20 Mo, alors que la même image en JPG ne pèserait que 200 à 500 Ko.</p>
          <p className="text-gray-600 mb-4">Si vous avez des fichiers BMP (souvent générés par d'anciens logiciels Windows, des captures d'écran, ou des programmes scientifiques), les convertir en JPG est essentiel pour pouvoir les partager par email, les publier sur le web, ou simplement les stocker sans gaspiller d'espace disque.</p>
          <p className="text-gray-600 mb-4">La conversion BMP vers JPG offre des réductions de taille spectaculaires : généralement entre 90 et 98%. Un fichier BMP de 10 Mo deviendra un JPG de 200 Ko à 1 Mo, sans différence visible à l'oeil nu pour les photographies.</p>
          <p className="text-gray-600 mb-4">Notre outil gère tous les types de BMP : 24 bits, 32 bits, et même les anciens formats 8 bits avec palette de couleurs.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Qu'est-ce que le format BMP ?</h3>
            <p className="text-gray-600 mb-4">BMP (Bitmap) est un format d'image non compressé créé par Microsoft. Il stocke chaque pixel individuellement, ce qui produit des fichiers très volumineux mais sans aucune perte de qualité.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi les fichiers BMP sont-ils si gros ?</h3>
            <p className="text-gray-600 mb-4">Le BMP ne compresse pas les données. Chaque pixel est stocké avec ses composantes rouge, vert et bleu (3 octets par pixel). Une image 1920x1080 en BMP pèse donc environ 6 Mo (1920 x 1080 x 3 octets).</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualité de la conversion est-elle bonne ?</h3>
            <p className="text-gray-600 mb-4">Oui, notre outil utilise une compression JPG à 90% de qualité, ce qui offre un excellent compromis entre taille de fichier et qualité visuelle. La différence avec l'original est imperceptible.</p>
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
