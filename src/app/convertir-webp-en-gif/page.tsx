import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir WebP en GIF en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images WebP en GIF pour une compatibilite maximale avec les emails et anciens systemes. Gratuit.",
  keywords: ["convertir webp en gif","webp to gif","webp gif gratuit","webp vers gif"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-webp-en-gif",
    siteName: "heictojpg.fr",
    title: "Convertir WebP en GIF gratuitement en ligne",
    description: "Convertissez vos images WebP en GIF pour une compatibilite maximale avec les emails et anciens systemes. Gratuit.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-webp-en-gif" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur WebP en GIF",
      url: "https://heictojpg.fr/convertir-webp-en-gif",
      description: "Convertissez vos images WebP en GIF pour une compatibilite maximale avec les emails et anciens systemes. Gratuit.",
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
          name: "Le GIF est-il adapte aux photos ?",
          acceptedAnswer: { "@type": "Answer", text: "Non, le GIF est limite a 256 couleurs, ce qui provoque une perte de qualite sur les photos. Utilisez plutot la conversion WebP vers JPG pour les photographies." },
        },
        {
          "@type": "Question",
          name: "Mon email marketing ne supporte pas le WebP, que faire ?",
          acceptedAnswer: { "@type": "Answer", text: "Convertissez vos images en GIF (pour les graphiques) ou en JPG (pour les photos) avant de les integrer dans vos newsletters. Le GIF et le JPG sont supportes par tous les clients email." },
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
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir WebP en GIF gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos images WebP en GIF pour les utiliser dans les newsletters email, les anciens systemes et toute plateforme qui ne supporte pas le WebP.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="WebP &rarr; GIF"
          acceptedFormats=".webp,image/webp"
          acceptLabel="Selectionner un fichier WebP"
          outputFormat="gif"
          apiEndpoint="/api/convert-image"
          outputExtension=".gif"
          acceptedMimeTypes={["image/webp"]}
          acceptedExtensions={[".webp"]}
          errorMessage="Veuillez selectionner un fichier WebP valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir WebP en GIF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format WebP n'est pas toujours supporte dans les clients email (Outlook, certains webmails), les anciens CMS et certaines applications legacy. Convertir en GIF garantit une compatibilite absolue dans tous ces contextes.</p>
          <p className="text-gray-600 mb-4">Le GIF est le plus ancien format d'image du web (1987) et reste supporte par absolument tous les systemes. Bien qu'il soit limite a 256 couleurs, il est parfait pour les graphiques simples, les logos et les icones.</p>
          <p className="text-gray-600 mb-4">Pour les photographies, le GIF n'est pas optimal a cause de sa palette de couleurs limitee. Dans ce cas, privilegiez la conversion WebP vers JPG ou WebP vers PNG.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le GIF est-il adapte aux photos ?</h3>
            <p className="text-gray-600 mb-4">Non, le GIF est limite a 256 couleurs, ce qui provoque une perte de qualite sur les photos. Utilisez plutot la conversion WebP vers JPG pour les photographies.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mon email marketing ne supporte pas le WebP, que faire ?</h3>
            <p className="text-gray-600 mb-4">Convertissez vos images en GIF (pour les graphiques) ou en JPG (pour les photos) avant de les integrer dans vos newsletters. Le GIF et le JPG sont supportes par tous les clients email.</p>
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
