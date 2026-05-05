import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir PNG en WebP en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images PNG en WebP pour reduire leur taille jusqu'a 80%. Conserve la transparence. Gratuit, sans inscription.",
  keywords: ["convertir png en webp","png to webp","png webp gratuit","png vers webp en ligne","optimiser png"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-png-en-webp",
    siteName: "heictojpg.fr",
    title: "Convertir PNG en WebP gratuitement en ligne",
    description: "Convertissez vos images PNG en WebP pour reduire leur taille jusqu'a 80%. Conserve la transparence. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-png-en-webp" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur PNG en WebP",
      url: "https://heictojpg.fr/convertir-png-en-webp",
      description: "Convertissez vos images PNG en WebP pour reduire leur taille jusqu'a 80%. Conserve la transparence. Gratuit, sans inscription.",
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
          name: "La transparence est-elle conservee en WebP ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, le format WebP supporte le canal alpha (transparence) comme le PNG. Vos images avec fond transparent seront parfaitement converties sans perte de transparence." },
        },
        {
          "@type": "Question",
          name: "Quelle reduction de taille puis-je esperer ?",
          acceptedAnswer: { "@type": "Answer", text: "La reduction depend du type d'image. Les captures d'ecran et graphiques simples voient souvent une reduction de 60 a 80%. Les photographies en PNG peuvent etre reduites de 40 a 60%." },
        },
        {
          "@type": "Question",
          name: "Mes fichiers sont-ils securises ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, aucun fichier n'est conserve sur nos serveurs. La conversion s'effectue en memoire et toutes les donnees sont supprimees immediatement apres le telechargement." },
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
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir PNG en WebP gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos images PNG en WebP pour des fichiers jusqu'a 80% plus legers tout en conservant la transparence. Le WebP est le format ideal pour remplacer le PNG sur le web : meme qualite, taille reduite, chargement plus rapide.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="PNG &rarr; WebP"
          acceptedFormats=".png,image/png"
          acceptLabel="Selectionner un fichier PNG"
          outputFormat="webp"
          apiEndpoint="/api/convert-image"
          outputExtension=".webp"
          acceptedMimeTypes={["image/png"]}
          acceptedExtensions={[".png"]}
          errorMessage="Veuillez selectionner un fichier PNG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir PNG en WebP ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format PNG est excellent pour la qualite et la transparence, mais ses fichiers sont souvent tres volumineux. Une capture d'ecran en PNG peut facilement peser 2 a 5 Mo, ce qui est prohibitif pour un usage web.</p>
          <p className="text-gray-600 mb-4">Le WebP resout ce probleme en offrant une compression nettement superieure tout en conservant les avantages du PNG, notamment la transparence (canal alpha). En pratique, un PNG converti en WebP peut voir sa taille reduite de 50 a 80%, ce qui est considerable.</p>
          <p className="text-gray-600 mb-4">Pour les developpeurs web et les webdesigners, passer du PNG au WebP est l'une des optimisations les plus simples et les plus efficaces pour ameliorer les performances d'un site. Google PageSpeed Insights recommande systematiquement cette conversion dans ses audits.</p>
          <p className="text-gray-600 mb-4">Notre outil preserve le canal alpha (transparence) lors de la conversion, ce qui signifie que vos logos, icones et graphiques avec fond transparent resteront parfaitement utilisables apres conversion.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La transparence est-elle conservee en WebP ?</h3>
            <p className="text-gray-600 mb-4">Oui, le format WebP supporte le canal alpha (transparence) comme le PNG. Vos images avec fond transparent seront parfaitement converties sans perte de transparence.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle reduction de taille puis-je esperer ?</h3>
            <p className="text-gray-600 mb-4">La reduction depend du type d'image. Les captures d'ecran et graphiques simples voient souvent une reduction de 60 a 80%. Les photographies en PNG peuvent etre reduites de 40 a 60%.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mes fichiers sont-ils securises ?</h3>
            <p className="text-gray-600 mb-4">Oui, aucun fichier n'est conserve sur nos serveurs. La conversion s'effectue en memoire et toutes les donnees sont supprimees immediatement apres le telechargement.</p>
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
