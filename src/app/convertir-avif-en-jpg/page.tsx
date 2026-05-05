import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir AVIF en JPG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images AVIF en JPG pour une compatibilité universelle. Ouvrez les fichiers AVIF sur tous les appareils. Gratuit.",
  keywords: ["convertir avif en jpg","avif to jpg","avif jpg gratuit","ouvrir avif","avif vers jpg"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-avif-en-jpg",
    siteName: "heictojpg.fr",
    title: "Convertir AVIF en JPG gratuitement en ligne",
    description: "Convertissez vos images AVIF en JPG pour une compatibilité universelle. Ouvrez les fichiers AVIF sur tous les appareils. Gratuit.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-avif-en-jpg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur AVIF en JPG",
      url: "https://heictojpg.fr/convertir-avif-en-jpg",
      description: "Convertissez vos images AVIF en JPG pour une compatibilité universelle. Ouvrez les fichiers AVIF sur tous les appareils. Gratuit.",
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
          name: "Pourquoi mon ordinateur ne peut-il pas ouvrir les fichiers AVIF ?",
          acceptedAnswer: { "@type": "Answer", text: "Le format AVIF est récent (2019). Windows 10 le supporte depuis une mise à jour de 2022, macOS depuis Ventura (2022). Si votre système est plus ancien, vous devez convertir le fichier ou installer un plugin." },
        },
        {
          "@type": "Question",
          name: "La qualité est-elle conservée ?",
          acceptedAnswer: { "@type": "Answer", text: "La conversion AVIF vers JPG implique un ré-encodage. Une légère perte de qualité est possible, mais elle est imperceptible dans la grande majorité des cas." },
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
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir AVIF en JPG gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos images AVIF en JPG pour les ouvrir et les partager sur n'importe quel appareil. Le format AVIF est récent et n'est pas encore supporté par tous les logiciels. Notre convertisseur vous permet de le rendre universellement compatible en un clic.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="AVIF &rarr; JPG"
          acceptedFormats=".avif,image/avif"
          acceptLabel="Sélectionner un fichier AVIF"
          outputFormat="jpg"
          apiEndpoint="/api/convert-image"
          outputExtension=".jpg"
          acceptedMimeTypes={["image/avif"]}
          acceptedExtensions={[".avif"]}
          errorMessage="Veuillez sélectionner un fichier AVIF valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir AVIF en JPG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">L'AVIF est un format d'image relativement récent (2019) qui offre une excellente compression. Cependant, il n'est pas encore supporté par tous les logiciels et appareils. Si vous recevez un fichier AVIF et ne pouvez pas l'ouvrir, le convertir en JPG est la solution la plus simple.</p>
          <p className="text-gray-600 mb-4">De nombreux logiciels de retouche photo, applications de bureautique et systèmes d'exploitation plus anciens ne reconnaissent pas encore le format AVIF. Le JPG, en revanche, est reconnu par absolument tout depuis plus de 30 ans.</p>
          <p className="text-gray-600 mb-4">Cette conversion est aussi utile pour partager des images sur les réseaux sociaux ou par email, où le format AVIF peut ne pas être correctement affiché sur les appareils de vos destinataires.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi mon ordinateur ne peut-il pas ouvrir les fichiers AVIF ?</h3>
            <p className="text-gray-600 mb-4">Le format AVIF est récent (2019). Windows 10 le supporte depuis une mise à jour de 2022, macOS depuis Ventura (2022). Si votre système est plus ancien, vous devez convertir le fichier ou installer un plugin.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualité est-elle conservée ?</h3>
            <p className="text-gray-600 mb-4">La conversion AVIF vers JPG implique un ré-encodage. Une légère perte de qualité est possible, mais elle est imperceptible dans la grande majorité des cas.</p>
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
