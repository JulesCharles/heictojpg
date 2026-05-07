import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir PNG en WebP en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images PNG en WebP pour réduire leur taille jusqu'à 80%. Conserve la transparence. Gratuit, sans inscription.",
  keywords: ["convertir png en webp","png to webp","png webp gratuit","png vers webp en ligne","optimiser png"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-png-en-webp",
    siteName: "heictojpg.fr",
    title: "Convertir PNG en WebP gratuitement en ligne",
    description: "Convertissez vos images PNG en WebP pour réduire leur taille jusqu'à 80%. Conserve la transparence. Gratuit, sans inscription.",
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
      description: "Convertissez vos images PNG en WebP pour réduire leur taille jusqu'à 80%. Conserve la transparence. Gratuit, sans inscription.",
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
          name: "La transparence est-elle conservée en WebP ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, le format WebP supporte le canal alpha (transparence) comme le PNG. Vos images avec fond transparent seront parfaitement converties sans perte de transparence." },
        },
        {
          "@type": "Question",
          name: "Quelle réduction de taille puis-je espérer ?",
          acceptedAnswer: { "@type": "Answer", text: "La réduction dépend du type d'image. Les captures d'écran et graphiques simples voient souvent une réduction de 60 à 80%. Les photographies en PNG peuvent être réduites de 40 à 60%." },
        },
        {
          "@type": "Question",
          name: "Mes fichiers sont-ils sécurisés ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, aucun fichier n'est conservé sur nos serveurs. La conversion s'effectue en mémoire et toutes les données sont supprimées immédiatement après le téléchargement." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir PNG en WebP", href: "/convertir-png-en-webp" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir PNG en WebP gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images PNG en WebP pour des fichiers jusqu'à 80% plus légers tout en conservant la transparence. Le WebP est le format idéal pour remplacer le PNG sur le web : même qualité, taille réduite, chargement plus rapide.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="PNG &rarr; WebP"
          acceptedFormats=".png,image/png"
          acceptLabel="Sélectionner un fichier PNG"
          outputFormat="webp"
          apiEndpoint="/api/convert-image"
          outputExtension=".webp"
          acceptedMimeTypes={["image/png"]}
          acceptedExtensions={[".png"]}
          errorMessage="Veuillez sélectionner un fichier PNG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir PNG en WebP ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format PNG est excellent pour la qualité et la transparence, mais ses fichiers sont souvent très volumineux. Une capture d'écran en PNG peut facilement peser 2 à 5 Mo, ce qui est prohibitif pour un usage web.</p>
          <p className="text-gray-600 mb-4">Le WebP résout ce problème en offrant une compression nettement supérieure tout en conservant les avantages du PNG, notamment la transparence (canal alpha). En pratique, un PNG converti en WebP peut voir sa taille réduite de 50 à 80%, ce qui est considérable.</p>
          <p className="text-gray-600 mb-4">Pour les développeurs web et les webdesigners, passer du PNG au WebP est l'une des optimisations les plus simples et les plus efficaces pour améliorer les performances d'un site. Google PageSpeed Insights recommande systématiquement cette conversion dans ses audits.</p>
          <p className="text-gray-600 mb-4">Notre outil préserve le canal alpha (transparence) lors de la conversion, ce qui signifie que vos logos, icônes et graphiques avec fond transparent resteront parfaitement utilisables après conversion.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La transparence est-elle conservée en WebP ?</h3>
            <p className="text-gray-600 mb-4">Oui, le format WebP supporte le canal alpha (transparence) comme le PNG. Vos images avec fond transparent seront parfaitement converties sans perte de transparence.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle réduction de taille puis-je espérer ?</h3>
            <p className="text-gray-600 mb-4">La réduction dépend du type d'image. Les captures d'écran et graphiques simples voient souvent une réduction de 60 à 80%. Les photographies en PNG peuvent être réduites de 40 à 60%.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mes fichiers sont-ils sécurisés ?</h3>
            <p className="text-gray-600 mb-4">Oui, aucun fichier n'est conservé sur nos serveurs. La conversion s'effectue en mémoire et toutes les données sont supprimées immédiatement après le téléchargement.</p>
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
    </>
  );
}
