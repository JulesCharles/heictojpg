import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir JPG en GIF en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images JPG en GIF pour une compatibilité maximale. Idéal pour les emails et les anciens systèmes. Gratuit.",
  keywords: ["convertir jpg en gif","jpg to gif","jpg gif gratuit","jpg vers gif"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-jpg-en-gif",
    siteName: "heictojpg.fr",
    title: "Convertir JPG en GIF gratuitement en ligne",
    description: "Convertissez vos images JPG en GIF pour une compatibilité maximale. Idéal pour les emails et les anciens systèmes. Gratuit.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-jpg-en-gif" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur JPG en GIF",
      url: "https://heictojpg.fr/convertir-jpg-en-gif",
      description: "Convertissez vos images JPG en GIF pour une compatibilité maximale. Idéal pour les emails et les anciens systèmes. Gratuit.",
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
          name: "La qualité sera-t-elle bonne ?",
          acceptedAnswer: { "@type": "Answer", text: "Le GIF est limité à 256 couleurs, ce qui entraîne une perte de qualité pour les photographies. Les graphiques simples et les logos seront bien convertis, mais les photos complexes perdront des nuances." },
        },
        {
          "@type": "Question",
          name: "Le GIF résultant sera-t-il animé ?",
          acceptedAnswer: { "@type": "Answer", text: "Non, la conversion JPG vers GIF produit une image fixe. Pour créer un GIF animé, vous devez utiliser un outil d'animation dédié." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir JPG en GIF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images JPG en GIF pour une compatibilité maximale, notamment avec les clients email et les anciens systèmes. Le GIF est le format le plus universellement supporté depuis 1987.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="JPG &rarr; GIF"
          acceptedFormats=".jpg,.jpeg,image/jpeg"
          acceptLabel="Sélectionner un fichier JPG"
          outputFormat="gif"
          apiEndpoint="/api/convert-image"
          outputExtension=".gif"
          acceptedMimeTypes={["image/jpeg"]}
          acceptedExtensions={[".jpg",".jpeg"]}
          errorMessage="Veuillez sélectionner un fichier JPG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir JPG en GIF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format GIF, bien que limité à 256 couleurs, reste le format le plus universellement compatible. Il est supporté par absolument tous les navigateurs (même les plus anciens), tous les clients email, et tous les systèmes d'exploitation depuis les années 1990.</p>
          <p className="text-gray-600 mb-4">Convertir vos JPG en GIF est utile dans les situations où vous devez garantir une compatibilité absolue : newsletters email en HTML, pages web pour des systèmes embarqués, applications legacy, ou tout contexte où les formats modernes ne sont pas disponibles.</p>
          <p className="text-gray-600 mb-4">Attention toutefois : le GIF est limité à 256 couleurs. Les photographies converties en GIF perdront des nuances de couleur et pourront présenter un effet de tramage (dithering). Ce format est mieux adapté aux graphiques simples, logos et icônes qu'aux photos.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualité sera-t-elle bonne ?</h3>
            <p className="text-gray-600 mb-4">Le GIF est limité à 256 couleurs, ce qui entraîne une perte de qualité pour les photographies. Les graphiques simples et les logos seront bien convertis, mais les photos complexes perdront des nuances.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le GIF résultant sera-t-il animé ?</h3>
            <p className="text-gray-600 mb-4">Non, la conversion JPG vers GIF produit une image fixe. Pour créer un GIF animé, vous devez utiliser un outil d'animation dédié.</p>
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
