import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir JPG en ICO (favicon) gratuit | heictojpg.fr",
  description: "Creez un favicon ICO a partir d'une photo JPG. Multi-tailles 16x16 a 256x256. Gratuit, sans inscription.",
  keywords: ["convertir jpg en ico","jpg to ico","jpg ico gratuit","creer favicon jpg","favicon depuis photo"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-jpg-en-ico",
    siteName: "heictojpg.fr",
    title: "Convertir JPG en ICO (favicon) gratuitement en ligne",
    description: "Creez un favicon ICO a partir d'une photo JPG. Multi-tailles 16x16 a 256x256. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-jpg-en-ico" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur JPG en ICO",
      url: "https://heictojpg.fr/convertir-jpg-en-ico",
      description: "Creez un favicon ICO a partir d'une photo JPG. Multi-tailles 16x16 a 256x256. Gratuit, sans inscription.",
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
          name: "Mon logo JPG n'est pas carre, que faire ?",
          acceptedAnswer: { "@type": "Answer", text: "L'outil recadre automatiquement votre image en carre en gardant le centre. Pour un meilleur controle, recadrez d'abord votre image en carre avec notre outil de recadrage, puis convertissez en ICO." },
        },
        {
          "@type": "Question",
          name: "La qualite est-elle suffisante pour un favicon ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, meme a 16x16 pixels, notre outil optimise le rendu pour obtenir le meilleur resultat possible a partir de votre JPG." },
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
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir JPG en ICO (favicon) gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Creez un fichier favicon ICO a partir de n'importe quelle image JPG. Parfait pour creer rapidement un favicon a partir d'un logo ou d'une photo. Le fichier genere contient toutes les tailles standard.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="JPG &rarr; ICO"
          acceptedFormats=".jpg,.jpeg,image/jpeg"
          acceptLabel="Selectionner un fichier JPG"
          outputFormat="ico"
          apiEndpoint="/api/convert-image"
          outputExtension=".ico"
          acceptedMimeTypes={["image/jpeg"]}
          acceptedExtensions={[".jpg",".jpeg"]}
          errorMessage="Veuillez selectionner un fichier JPG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Creer un favicon a partir d'une photo JPG</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Vous avez un logo ou une image en JPG et souhaitez en faire un favicon pour votre site web ? Notre outil genere automatiquement un fichier ICO multi-tailles a partir de votre image JPG.</p>
          <p className="text-gray-600 mb-4">L'image est automatiquement recadree et redimensionnee pour chaque taille standard de favicon : 16x16, 32x32, 48x48, 64x64, 128x128 et 256x256 pixels. Le recadrage est centre pour conserver le sujet principal de votre image.</p>
          <p className="text-gray-600 mb-4">Pour un resultat optimal, utilisez une image carree avec le sujet bien centre. Si votre image est rectangulaire, les bords seront coupes pour obtenir un format carre.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mon logo JPG n'est pas carre, que faire ?</h3>
            <p className="text-gray-600 mb-4">L'outil recadre automatiquement votre image en carre en gardant le centre. Pour un meilleur controle, recadrez d'abord votre image en carre avec notre outil de recadrage, puis convertissez en ICO.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualite est-elle suffisante pour un favicon ?</h3>
            <p className="text-gray-600 mb-4">Oui, meme a 16x16 pixels, notre outil optimise le rendu pour obtenir le meilleur resultat possible a partir de votre JPG.</p>
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
