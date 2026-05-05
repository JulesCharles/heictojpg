import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir BMP en PNG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images BMP en PNG sans perte de qualite. Reduisez la taille tout en conservant chaque detail. Gratuit.",
  keywords: ["convertir bmp en png","bmp to png","bmp png gratuit","bitmap en png"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-bmp-en-png",
    siteName: "heictojpg.fr",
    title: "Convertir BMP en PNG gratuitement en ligne",
    description: "Convertissez vos images BMP en PNG sans perte de qualite. Reduisez la taille tout en conservant chaque detail. Gratuit.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-bmp-en-png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur BMP en PNG",
      url: "https://heictojpg.fr/convertir-bmp-en-png",
      description: "Convertissez vos images BMP en PNG sans perte de qualite. Reduisez la taille tout en conservant chaque detail. Gratuit.",
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
          name: "BMP en PNG ou BMP en JPG ?",
          acceptedAnswer: { "@type": "Answer", text: "Choisissez PNG pour les captures d'ecran, graphiques et images avec texte (qualite parfaite). Choisissez JPG pour les photographies (fichiers plus legers)." },
        },
        {
          "@type": "Question",
          name: "La qualite est-elle identique au BMP original ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, la conversion BMP vers PNG est 100% sans perte. Votre image PNG sera pixel-pour-pixel identique au fichier BMP original." },
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
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir BMP en PNG gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos images BMP en PNG pour une compression sans perte et une compatibilite web totale. Le PNG conserve 100% de la qualite de votre BMP original tout en reduisant significativement la taille du fichier.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="BMP &rarr; PNG"
          acceptedFormats=".bmp,image/bmp"
          acceptLabel="Selectionner un fichier BMP"
          outputFormat="png"
          apiEndpoint="/api/convert-image"
          outputExtension=".png"
          acceptedMimeTypes={["image/bmp"]}
          acceptedExtensions={[".bmp"]}
          errorMessage="Veuillez selectionner un fichier BMP valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir BMP en PNG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">La conversion BMP vers PNG est la meilleure option quand vous avez besoin de reduire la taille de vos fichiers BMP tout en conservant une qualite pixel-perfect. Contrairement au JPG qui compresse avec perte, le PNG utilise une compression sans perte : chaque pixel de votre image BMP est preserve a l'identique.</p>
          <p className="text-gray-600 mb-4">Cette conversion est particulierement adaptee aux captures d'ecran, aux graphiques, aux schemas techniques, et a toute image contenant du texte ou des lignes nettes. Pour ces types d'images, le PNG offre souvent une meilleure compression que le JPG tout en evitant les artefacts de compression.</p>
          <p className="text-gray-600 mb-4">La reduction de taille depend du contenu de l'image. Les images avec de grandes zones de couleur unie (captures d'ecran, graphiques) peuvent voir leur taille reduite de 80 a 95%. Les photographies verront une reduction plus modeste de 30 a 60%.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">BMP en PNG ou BMP en JPG ?</h3>
            <p className="text-gray-600 mb-4">Choisissez PNG pour les captures d'ecran, graphiques et images avec texte (qualite parfaite). Choisissez JPG pour les photographies (fichiers plus legers).</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualite est-elle identique au BMP original ?</h3>
            <p className="text-gray-600 mb-4">Oui, la conversion BMP vers PNG est 100% sans perte. Votre image PNG sera pixel-pour-pixel identique au fichier BMP original.</p>
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
