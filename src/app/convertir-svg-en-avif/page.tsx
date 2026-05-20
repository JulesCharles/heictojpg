import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir SVG en AVIF Gratuit en Ligne | heictojpg.fr",
  description: "Convertissez vos fichiers SVG en AVIF, le format raster le plus leger du marche. Ideal pour le web. Gratuit et sans inscription.",
  keywords: ["convertir svg en avif","svg to avif","svg avif gratuit","rasteriser svg avif","svg vers avif"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-svg-en-avif",
    siteName: "heictojpg.fr",
    title: "Convertir SVG en AVIF gratuitement en ligne",
    description: "Convertissez vos fichiers SVG en AVIF, le format raster le plus leger du marche. Ideal pour le web. Gratuit et sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-svg-en-avif" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur SVG en AVIF",
      url: "https://heictojpg.fr/convertir-svg-en-avif",
      description: "Convertissez vos fichiers SVG en AVIF, le format raster le plus leger du marche. Ideal pour le web. Gratuit et sans inscription.",
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
          name: "Pourquoi convertir un SVG en AVIF plutot qu'en PNG ou JPG ?",
          acceptedAnswer: { "@type": "Answer", text: "L'AVIF offre une compression nettement superieure au PNG et au JPG. Pour un meme niveau de qualite visuelle, un fichier AVIF sera beaucoup plus leger, ce qui ameliore les performances de chargement de vos pages web." },
        },
        {
          "@type": "Question",
          name: "L'AVIF supporte-t-il la transparence comme le SVG ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, le format AVIF prend en charge le canal alpha (transparence). Si votre fichier SVG contient des zones transparentes, elles seront preservees dans le fichier AVIF genere." },
        },
        {
          "@type": "Question",
          name: "L'AVIF est-il bien supporte par les navigateurs actuels ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, tous les navigateurs majeurs (Chrome, Firefox, Safari 16+, Edge) prennent en charge le format AVIF. Il est desormais considere comme un standard pour les images web modernes." },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir SVG en AVIF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos illustrations vectorielles SVG en AVIF, le format raster le plus leger disponible. Obtenez des images d'une legerete inegalee tout en preservant une qualite visuelle excellente.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="SVG &rarr; AVIF"
          acceptedFormats=".svg,image/svg+xml"
          acceptLabel="Selectionner un fichier SVG"
          outputFormat="avif"
          apiEndpoint="/api/convert-image"
          outputExtension=".avif"
          acceptedMimeTypes={["image/svg+xml"]}
          acceptedExtensions={[".svg"]}
          errorMessage="Veuillez selectionner un fichier SVG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir SVG en AVIF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le SVG est un format vectoriel ideal pour les logos et les icones, mais il n'est pas adapte a tous les usages. De nombreuses plateformes n'acceptent que les formats raster. L'AVIF est le choix le plus moderne et le plus performant pour la rasterisation de vos SVG.</p>
          <p className="text-gray-600 mb-4">Avec une compression jusqu'a 50 % superieure au JPEG et 20 % superieure au WebP, l'AVIF vous permet d'obtenir les fichiers les plus legers possibles. C'est le format ideal pour optimiser les performances de vos sites web et reduire les temps de chargement.</p>
          <p className="text-gray-600 mb-4">Si vous cherchez a publier vos illustrations SVG sur les reseaux sociaux, dans des newsletters ou sur des plateformes qui n'acceptent pas le vectoriel, la conversion en AVIF vous garantit le meilleur rapport qualite/poids.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi convertir un SVG en AVIF plutot qu'en PNG ou JPG ?</h3>
            <p className="text-gray-600 mb-4">L'AVIF offre une compression nettement superieure au PNG et au JPG. Pour un meme niveau de qualite visuelle, un fichier AVIF sera beaucoup plus leger, ce qui ameliore les performances de chargement de vos pages web.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">L'AVIF supporte-t-il la transparence comme le SVG ?</h3>
            <p className="text-gray-600 mb-4">Oui, le format AVIF prend en charge le canal alpha (transparence). Si votre fichier SVG contient des zones transparentes, elles seront preservees dans le fichier AVIF genere.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">L'AVIF est-il bien supporte par les navigateurs actuels ?</h3>
            <p className="text-gray-600 mb-4">Oui, tous les navigateurs majeurs (Chrome, Firefox, Safari 16+, Edge) prennent en charge le format AVIF. Il est desormais considere comme un standard pour les images web modernes.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-svg-en-avif" />
    </div>
    </>
  );
}
