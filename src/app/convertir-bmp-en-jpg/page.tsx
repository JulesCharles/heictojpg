import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir BMP en JPG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images BMP en JPG pour reduire leur taille jusqu'a 95%. Outil gratuit, rapide et sans inscription.",
  keywords: ["convertir bmp en jpg","bmp to jpg","bmp jpg gratuit","bmp vers jpg","bitmap en jpg"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-bmp-en-jpg",
    siteName: "heictojpg.fr",
    title: "Convertir BMP en JPG gratuitement en ligne",
    description: "Convertissez vos images BMP en JPG pour reduire leur taille jusqu'a 95%. Outil gratuit, rapide et sans inscription.",
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
      description: "Convertissez vos images BMP en JPG pour reduire leur taille jusqu'a 95%. Outil gratuit, rapide et sans inscription.",
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
          acceptedAnswer: { "@type": "Answer", text: "BMP (Bitmap) est un format d'image non compresse cree par Microsoft. Il stocke chaque pixel individuellement, ce qui produit des fichiers tres volumineux mais sans aucune perte de qualite." },
        },
        {
          "@type": "Question",
          name: "Pourquoi les fichiers BMP sont-ils si gros ?",
          acceptedAnswer: { "@type": "Answer", text: "Le BMP ne compresse pas les donnees. Chaque pixel est stocke avec ses composantes rouge, vert et bleu (3 octets par pixel). Une image 1920x1080 en BMP pese donc environ 6 Mo (1920 x 1080 x 3 octets)." },
        },
        {
          "@type": "Question",
          name: "La qualite de la conversion est-elle bonne ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, notre outil utilise une compression JPG a 90% de qualite, ce qui offre un excellent compromis entre taille de fichier et qualite visuelle. La difference avec l'original est imperceptible." },
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
          Transformez vos images BMP (Bitmap) en JPG pour des fichiers jusqu'a 95% plus legers. Le BMP est un format ancien et non compresse qui produit des fichiers enormes. Notre convertisseur vous permet de les rendre legers et partageables en un clic.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="BMP &rarr; JPG"
          acceptedFormats=".bmp,image/bmp"
          acceptLabel="Selectionner un fichier BMP"
          outputFormat="jpg"
          apiEndpoint="/api/convert-image"
          outputExtension=".jpg"
          acceptedMimeTypes={["image/bmp"]}
          acceptedExtensions={[".bmp"]}
          errorMessage="Veuillez selectionner un fichier BMP valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir BMP en JPG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format BMP (Bitmap) est l'un des plus anciens formats d'image numerique, cree par Microsoft dans les annees 1980. Il ne compresse pas les donnees, ce qui signifie qu'un simple fond d'ecran en BMP peut peser 5 a 20 Mo, alors que le meme image en JPG ne peserait que 200 a 500 Ko.</p>
          <p className="text-gray-600 mb-4">Si vous avez des fichiers BMP (souvent generes par d'anciens logiciels Windows, des captures d'ecran, ou des programmes scientifiques), les convertir en JPG est essentiel pour pouvoir les partager par email, les publier sur le web, ou simplement les stocker sans gaspiller d'espace disque.</p>
          <p className="text-gray-600 mb-4">La conversion BMP vers JPG offre des reductions de taille spectaculaires : generalement entre 90 et 98%. Un fichier BMP de 10 Mo deviendra un JPG de 200 Ko a 1 Mo, sans difference visible a l'oeil nu pour les photographies.</p>
          <p className="text-gray-600 mb-4">Notre outil gere tous les types de BMP : 24 bits, 32 bits, et meme les anciens formats 8 bits avec palette de couleurs.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Qu'est-ce que le format BMP ?</h3>
            <p className="text-gray-600 mb-4">BMP (Bitmap) est un format d'image non compresse cree par Microsoft. Il stocke chaque pixel individuellement, ce qui produit des fichiers tres volumineux mais sans aucune perte de qualite.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi les fichiers BMP sont-ils si gros ?</h3>
            <p className="text-gray-600 mb-4">Le BMP ne compresse pas les donnees. Chaque pixel est stocke avec ses composantes rouge, vert et bleu (3 octets par pixel). Une image 1920x1080 en BMP pese donc environ 6 Mo (1920 x 1080 x 3 octets).</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualite de la conversion est-elle bonne ?</h3>
            <p className="text-gray-600 mb-4">Oui, notre outil utilise une compression JPG a 90% de qualite, ce qui offre un excellent compromis entre taille de fichier et qualite visuelle. La difference avec l'original est imperceptible.</p>
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
