import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir JPG en AVIF en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images JPG en AVIF, le format le plus performant du web. Reduction de taille de 50% vs JPG. Gratuit, sans inscription.",
  keywords: ["convertir jpg en avif","jpg to avif","jpg avif gratuit","optimiser image avif","jpg vers avif"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-jpg-en-avif",
    siteName: "heictojpg.fr",
    title: "Convertir JPG en AVIF gratuitement en ligne",
    description: "Convertissez vos images JPG en AVIF, le format le plus performant du web. Reduction de taille de 50% vs JPG. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-jpg-en-avif" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur JPG en AVIF",
      url: "https://heictojpg.fr/convertir-jpg-en-avif",
      description: "Convertissez vos images JPG en AVIF, le format le plus performant du web. Reduction de taille de 50% vs JPG. Gratuit, sans inscription.",
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
          name: "L'AVIF est-il supporte par tous les navigateurs ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, depuis 2023, tous les navigateurs modernes supportent l'AVIF : Chrome (depuis 2020), Firefox (depuis 2021), Safari (depuis 2022, iOS 16+), et Edge. Seuls les tres anciens navigateurs ne le supportent pas." },
        },
        {
          "@type": "Question",
          name: "AVIF vs WebP : lequel choisir ?",
          acceptedAnswer: { "@type": "Answer", text: "L'AVIF offre une compression 15-20% superieure au WebP. Si la compatibilite n'est pas un probleme (navigateurs recents), privilegiez l'AVIF. Si vous devez supporter d'anciens appareils, le WebP reste un excellent choix." },
        },
        {
          "@type": "Question",
          name: "L'AVIF est-il lent a encoder ?",
          acceptedAnswer: { "@type": "Answer", text: "L'encodage AVIF est plus lent que le JPG ou le WebP, mais notre serveur gere cette complexite pour vous. La conversion prend generalement 2 a 5 secondes." },
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
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir JPG en AVIF gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos images JPG en AVIF pour des fichiers 50% plus legers a qualite egale. L'AVIF est le format d'image le plus avance du web, base sur le codec video AV1. Il surpasse le WebP et le JPG en compression tout en supportant le HDR.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="JPG &rarr; AVIF"
          acceptedFormats=".jpg,.jpeg,image/jpeg"
          acceptLabel="Selectionner un fichier JPG"
          outputFormat="avif"
          apiEndpoint="/api/convert-image"
          outputExtension=".avif"
          acceptedMimeTypes={["image/jpeg"]}
          acceptedExtensions={[".jpg",".jpeg"]}
          errorMessage="Veuillez selectionner un fichier JPG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir JPG en AVIF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">L'AVIF (AV1 Image File Format) represente la prochaine generation de formats d'image pour le web. Developpe par l'Alliance for Open Media (qui reunit Google, Netflix, Amazon, Apple, Meta et bien d'autres), l'AVIF offre la meilleure compression disponible aujourd'hui.</p>
          <p className="text-gray-600 mb-4">Les chiffres parlent d'eux-memes : a qualite visuelle equivalente, un fichier AVIF est en moyenne 50% plus petit qu'un JPG et 20% plus petit qu'un WebP. Pour un site web avec beaucoup d'images, passer au AVIF peut diviser par deux le temps de chargement.</p>
          <p className="text-gray-600 mb-4">L'AVIF supporte egalement des fonctionnalites avancees que le JPG ne peut pas offrir : le HDR (High Dynamic Range), les couleurs etendues (wide gamut), et la transparence. C'est un format veritablement polyvalent.</p>
          <p className="text-gray-600 mb-4">En 2024-2025, le support navigateur de l'AVIF est devenu quasi-universel : Chrome, Firefox, Safari (depuis iOS 16 et macOS Ventura), Edge et Opera le supportent tous nativement.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">L'AVIF est-il supporte par tous les navigateurs ?</h3>
            <p className="text-gray-600 mb-4">Oui, depuis 2023, tous les navigateurs modernes supportent l'AVIF : Chrome (depuis 2020), Firefox (depuis 2021), Safari (depuis 2022, iOS 16+), et Edge. Seuls les tres anciens navigateurs ne le supportent pas.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">AVIF vs WebP : lequel choisir ?</h3>
            <p className="text-gray-600 mb-4">L'AVIF offre une compression 15-20% superieure au WebP. Si la compatibilite n'est pas un probleme (navigateurs recents), privilegiez l'AVIF. Si vous devez supporter d'anciens appareils, le WebP reste un excellent choix.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">L'AVIF est-il lent a encoder ?</h3>
            <p className="text-gray-600 mb-4">L'encodage AVIF est plus lent que le JPG ou le WebP, mais notre serveur gere cette complexite pour vous. La conversion prend generalement 2 a 5 secondes.</p>
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
