import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir TIFF en PNG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos fichiers TIFF en PNG sans perte de qualite. Conservez la transparence et les details. Gratuit, sans inscription.",
  keywords: ["convertir tiff en png","tiff to png","tiff png gratuit","tif en png"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-tiff-en-png",
    siteName: "heictojpg.fr",
    title: "Convertir TIFF en PNG gratuitement en ligne",
    description: "Convertissez vos fichiers TIFF en PNG sans perte de qualite. Conservez la transparence et les details. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-tiff-en-png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur TIFF en PNG",
      url: "https://heictojpg.fr/convertir-tiff-en-png",
      description: "Convertissez vos fichiers TIFF en PNG sans perte de qualite. Conservez la transparence et les details. Gratuit, sans inscription.",
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
          name: "PNG vs JPG : lequel choisir pour convertir mon TIFF ?",
          acceptedAnswer: { "@type": "Answer", text: "Choisissez PNG si vous avez besoin d'une qualite parfaite, de transparence, ou si votre image contient du texte et des graphiques. Choisissez JPG si vous voulez le fichier le plus leger possible et que l'image est une photographie." },
        },
        {
          "@type": "Question",
          name: "La transparence du TIFF est-elle conservee ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, si votre fichier TIFF contient un canal alpha (transparence), celui-ci sera preserve dans le fichier PNG de sortie." },
        },
        {
          "@type": "Question",
          name: "Puis-je convertir des TIFF multi-pages ?",
          acceptedAnswer: { "@type": "Answer", text: "Notre outil convertit la premiere page du fichier TIFF. Pour les TIFF multi-pages, vous devrez convertir chaque page separement." },
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
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir TIFF en PNG gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos fichiers TIFF en PNG pour une qualite sans perte et une compatibilite web maximale. Le PNG conserve tous les details de votre image TIFF originale, y compris la transparence.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="TIFF &rarr; PNG"
          acceptedFormats=".tiff,.tif,image/tiff"
          acceptLabel="Selectionner un fichier TIFF"
          outputFormat="png"
          apiEndpoint="/api/convert-image"
          outputExtension=".png"
          acceptedMimeTypes={["image/tiff"]}
          acceptedExtensions={[".tiff",".tif"]}
          errorMessage="Veuillez selectionner un fichier TIFF valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir TIFF en PNG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">La conversion TIFF vers PNG est ideale quand vous avez besoin de conserver une qualite parfaite tout en obtenant un fichier compatible avec le web et les logiciels courants. Contrairement au JPG qui compresse avec perte, le PNG offre une compression sans perte : chaque pixel de votre image TIFF est preserve.</p>
          <p className="text-gray-600 mb-4">Cette conversion est particulierement recommandee pour les graphiques, les logos, les captures d'ecran et les images contenant du texte, ou la nettete pixel-perfect est essentielle. Le PNG supporte egalement la transparence, ce qui le rend ideal pour les designs destines a etre superposes sur d'autres contenus.</p>
          <p className="text-gray-600 mb-4">Bien que le fichier PNG soit plus volumineux qu'un JPG equivalent, il reste significativement plus leger qu'un TIFF. Un TIFF de 50 Mo pourra etre converti en un PNG de 5 a 15 Mo, soit une reduction de 70 a 90%.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">PNG vs JPG : lequel choisir pour convertir mon TIFF ?</h3>
            <p className="text-gray-600 mb-4">Choisissez PNG si vous avez besoin d'une qualite parfaite, de transparence, ou si votre image contient du texte et des graphiques. Choisissez JPG si vous voulez le fichier le plus leger possible et que l'image est une photographie.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La transparence du TIFF est-elle conservee ?</h3>
            <p className="text-gray-600 mb-4">Oui, si votre fichier TIFF contient un canal alpha (transparence), celui-ci sera preserve dans le fichier PNG de sortie.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je convertir des TIFF multi-pages ?</h3>
            <p className="text-gray-600 mb-4">Notre outil convertit la premiere page du fichier TIFF. Pour les TIFF multi-pages, vous devrez convertir chaque page separement.</p>
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
