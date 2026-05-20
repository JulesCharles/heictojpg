import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convertir GIF en AVIF Gratuit en Ligne | heictojpg.fr",
  description: "Convertissez vos images GIF en AVIF pour des fichiers beaucoup plus légers. Réduisez la taille de vos GIF tout en conservant la qualité. Gratuit.",
  keywords: ["convertir gif en avif","gif to avif","gif avif gratuit","gif vers avif","convertisseur gif avif"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-gif-en-avif",
    siteName: "heictojpg.fr",
    title: "Convertir GIF en AVIF gratuitement en ligne",
    description: "Convertissez vos images GIF en AVIF pour des fichiers beaucoup plus légers. Réduisez la taille de vos GIF tout en conservant la qualité. Gratuit.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-gif-en-avif" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur GIF en AVIF",
      url: "https://heictojpg.fr/convertir-gif-en-avif",
      description: "Convertissez vos images GIF en AVIF pour des fichiers beaucoup plus légers. Réduisez la taille de vos GIF tout en conservant la qualité. Gratuit.",
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
          name: "Pourquoi convertir un GIF en AVIF ?",
          acceptedAnswer: { "@type": "Answer", text: "Le GIF est limité à 256 couleurs et utilise une compression ancienne. L'AVIF offre des millions de couleurs, une bien meilleure compression et une qualité visuelle supérieure, tout en produisant des fichiers beaucoup plus légers." },
        },
        {
          "@type": "Question",
          name: "De combien la taille sera-t-elle réduite ?",
          acceptedAnswer: { "@type": "Answer", text: "En moyenne, un fichier AVIF est 50 à 80 % plus léger qu'un GIF équivalent. Pour les images avec beaucoup de couleurs, la différence peut être encore plus importante grâce à la palette étendue de l'AVIF." },
        },
        {
          "@type": "Question",
          name: "L'AVIF supporte-t-il l'animation comme le GIF ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, le format AVIF supporte les séquences animées (AVIF animé). Cependant, notre outil convertit actuellement les images GIF statiques. Pour les GIF animés, seule la première image sera convertie." },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir GIF en AVIF", href: "/convertir-gif-en-avif" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir GIF en AVIF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images GIF en AVIF pour obtenir des fichiers beaucoup plus légers avec une meilleure qualité visuelle. L'AVIF offre des millions de couleurs et une compression nettement supérieure au GIF.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="GIF &rarr; AVIF"
          acceptedFormats=".gif,image/gif"
          acceptLabel="Sélectionner un fichier GIF"
          outputFormat="avif"
          apiEndpoint="/api/convert-image"
          outputExtension=".avif"
          acceptedMimeTypes={["image/gif"]}
          acceptedExtensions={[".gif"]}
          errorMessage="Veuillez sélectionner un fichier GIF valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir GIF en AVIF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le GIF est un format d'image vénérable, créé en 1987, qui reste populaire grâce à sa compatibilité universelle. Cependant, il est limité à seulement 256 couleurs et utilise une compression peu efficace par rapport aux standards modernes. L'AVIF, quant à lui, supporte des millions de couleurs et offre une compression 50 à 80 % supérieure.</p>
          <p className="text-gray-600 mb-4">En convertissant vos GIF en AVIF, vous obtenez des fichiers beaucoup plus légers avec une qualité d'image nettement améliorée. C'est particulièrement visible sur les images contenant des dégradés ou des photographies, où les 256 couleurs du GIF créent des bandes disgracieuses que l'AVIF élimine.</p>
          <p className="text-gray-600 mb-4">L'AVIF est supporté par tous les navigateurs modernes (Chrome, Firefox, Safari, Edge), ce qui en fait un excellent remplacement du GIF pour les images statiques sur le web, les applications et les réseaux sociaux.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi convertir un GIF en AVIF ?</h3>
            <p className="text-gray-600 mb-4">Le GIF est limité à 256 couleurs et utilise une compression ancienne. L'AVIF offre des millions de couleurs, une bien meilleure compression et une qualité visuelle supérieure, tout en produisant des fichiers beaucoup plus légers.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">De combien la taille sera-t-elle réduite ?</h3>
            <p className="text-gray-600 mb-4">En moyenne, un fichier AVIF est 50 à 80 % plus léger qu'un GIF équivalent. Pour les images avec beaucoup de couleurs, la différence peut être encore plus importante grâce à la palette étendue de l'AVIF.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">L'AVIF supporte-t-il l'animation comme le GIF ?</h3>
            <p className="text-gray-600 mb-4">Oui, le format AVIF supporte les séquences animées (AVIF animé). Cependant, notre outil convertit actuellement les images GIF statiques. Pour les GIF animés, seule la première image sera convertie.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-gif-en-avif" />
    </div>
    </>
  );
}
