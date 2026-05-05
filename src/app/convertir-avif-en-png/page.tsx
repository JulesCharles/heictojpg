import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir AVIF en PNG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images AVIF en PNG sans perte. Conservez la transparence et ouvrez vos fichiers AVIF partout. Gratuit.",
  keywords: ["convertir avif en png","avif to png","avif png gratuit","ouvrir avif png"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-avif-en-png",
    siteName: "heictojpg.fr",
    title: "Convertir AVIF en PNG gratuitement en ligne",
    description: "Convertissez vos images AVIF en PNG sans perte. Conservez la transparence et ouvrez vos fichiers AVIF partout. Gratuit.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-avif-en-png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur AVIF en PNG",
      url: "https://heictojpg.fr/convertir-avif-en-png",
      description: "Convertissez vos images AVIF en PNG sans perte. Conservez la transparence et ouvrez vos fichiers AVIF partout. Gratuit.",
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
          name: "La transparence est-elle conservée ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, si votre fichier AVIF contient de la transparence, elle sera parfaitement préservée dans le PNG." },
        },
        {
          "@type": "Question",
          name: "Le fichier PNG sera-t-il plus gros ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, le PNG est moins compressé que l'AVIF. C'est le prix de la compatibilité universelle. Pour l'usage web, gardez le format AVIF." },
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
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir AVIF en PNG gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos images AVIF en PNG pour une qualité sans perte et une compatibilité totale. La transparence de l'AVIF est préservée dans le PNG. Ouvrez et éditez vos fichiers AVIF dans n'importe quel logiciel.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="AVIF &rarr; PNG"
          acceptedFormats=".avif,image/avif"
          acceptLabel="Sélectionner un fichier AVIF"
          outputFormat="png"
          apiEndpoint="/api/convert-image"
          outputExtension=".png"
          acceptedMimeTypes={["image/avif"]}
          acceptedExtensions={[".avif"]}
          errorMessage="Veuillez sélectionner un fichier AVIF valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir AVIF en PNG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">La conversion AVIF vers PNG est idéale quand vous avez besoin d'une compatibilité maximale avec les logiciels d'édition tout en conservant la transparence. Le PNG est reconnu par tous les logiciels de retouche photo sans exception.</p>
          <p className="text-gray-600 mb-4">Si votre image AVIF contient de la transparence (canal alpha), celle-ci sera parfaitement préservée dans le fichier PNG. Cela rend cette conversion particulièrement utile pour les designers qui reçoivent des assets en AVIF et doivent les éditer dans des outils qui ne supportent pas encore ce format.</p>
          <p className="text-gray-600 mb-4">Le fichier PNG résultant sera plus volumineux que l'AVIF original, mais il sera compatible avec absolument tous les logiciels et systèmes.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La transparence est-elle conservée ?</h3>
            <p className="text-gray-600 mb-4">Oui, si votre fichier AVIF contient de la transparence, elle sera parfaitement préservée dans le PNG.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le fichier PNG sera-t-il plus gros ?</h3>
            <p className="text-gray-600 mb-4">Oui, le PNG est moins compressé que l'AVIF. C'est le prix de la compatibilité universelle. Pour l'usage web, gardez le format AVIF.</p>
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
