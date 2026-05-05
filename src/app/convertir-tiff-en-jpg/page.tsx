import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir TIFF en JPG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos fichiers TIFF en JPG pour les partager facilement. Reduisez la taille de vos scans et photos pro. Gratuit, sans inscription.",
  keywords: ["convertir tiff en jpg","tiff to jpg","tiff jpg gratuit","tif en jpg","convertir tif"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-tiff-en-jpg",
    siteName: "heictojpg.fr",
    title: "Convertir TIFF en JPG gratuitement en ligne",
    description: "Convertissez vos fichiers TIFF en JPG pour les partager facilement. Reduisez la taille de vos scans et photos pro. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-tiff-en-jpg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur TIFF en JPG",
      url: "https://heictojpg.fr/convertir-tiff-en-jpg",
      description: "Convertissez vos fichiers TIFF en JPG pour les partager facilement. Reduisez la taille de vos scans et photos pro. Gratuit, sans inscription.",
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
          name: "Quelle reduction de taille puis-je esperer ?",
          acceptedAnswer: { "@type": "Answer", text: "Un fichier TIFF converti en JPG voit generalement sa taille reduite de 90 a 98%. Un TIFF de 50 Mo deviendra un JPG de 1 a 5 Mo selon la complexite de l'image." },
        },
        {
          "@type": "Question",
          name: "Mon scanner produit des fichiers TIFF, puis-je les convertir ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, notre outil est parfait pour convertir les scans TIFF en JPG. Vous obtiendrez des fichiers beaucoup plus legers, faciles a envoyer par email ou a stocker dans le cloud." },
        },
        {
          "@type": "Question",
          name: "La qualite est-elle suffisante pour l'impression ?",
          acceptedAnswer: { "@type": "Answer", text: "Le JPG avec notre qualite de 90% est largement suffisant pour l'impression standard (flyers, brochures). Pour de l'impression tres haute gamme (affiche grand format), conservez le TIFF original." },
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
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir TIFF en JPG gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos fichiers TIFF volumineux en images JPG legeres et universellement compatibles. Ideal pour les photographes, les scanners professionnels et les archives numeriques. Reduisez la taille de vos fichiers de 90% ou plus.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="TIFF &rarr; JPG"
          acceptedFormats=".tiff,.tif,image/tiff"
          acceptLabel="Selectionner un fichier TIFF"
          outputFormat="jpg"
          apiEndpoint="/api/convert-image"
          outputExtension=".jpg"
          acceptedMimeTypes={["image/tiff"]}
          acceptedExtensions={[".tiff",".tif"]}
          errorMessage="Veuillez selectionner un fichier TIFF valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir TIFF en JPG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format TIFF (Tagged Image File Format) est utilise principalement dans le monde professionnel : photographie, pre-presse, imagerie medicale et numerisation de documents. Il offre une qualite sans perte et supporte les espaces colorimétriques avances, mais ses fichiers sont extremement volumineux.</p>
          <p className="text-gray-600 mb-4">Une seule photo en TIFF peut peser entre 20 et 100 Mo, ce qui rend le partage par email ou le stockage en ligne peu pratique. En convertissant vos TIFF en JPG, vous pouvez reduire la taille de vos fichiers de 90 a 98%, tout en conservant une qualite largement suffisante pour l'affichage ecran et le partage.</p>
          <p className="text-gray-600 mb-4">Cette conversion est particulierement utile pour les photographes qui souhaitent partager leurs images avec des clients, les entreprises qui numerisent des documents avec des scanners professionnels (qui produisent souvent du TIFF), et toute personne qui recoit des fichiers TIFF et souhaite les ouvrir facilement sur n'importe quel appareil.</p>
          <p className="text-gray-600 mb-4">Le JPG est le format le plus universel : il est reconnu par tous les navigateurs, tous les systemes d'exploitation, toutes les applications de messagerie et tous les reseaux sociaux.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle reduction de taille puis-je esperer ?</h3>
            <p className="text-gray-600 mb-4">Un fichier TIFF converti en JPG voit generalement sa taille reduite de 90 a 98%. Un TIFF de 50 Mo deviendra un JPG de 1 a 5 Mo selon la complexite de l'image.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mon scanner produit des fichiers TIFF, puis-je les convertir ?</h3>
            <p className="text-gray-600 mb-4">Oui, notre outil est parfait pour convertir les scans TIFF en JPG. Vous obtiendrez des fichiers beaucoup plus legers, faciles a envoyer par email ou a stocker dans le cloud.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualite est-elle suffisante pour l'impression ?</h3>
            <p className="text-gray-600 mb-4">Le JPG avec notre qualite de 90% est largement suffisant pour l'impression standard (flyers, brochures). Pour de l'impression tres haute gamme (affiche grand format), conservez le TIFF original.</p>
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
