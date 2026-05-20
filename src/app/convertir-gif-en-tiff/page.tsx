import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convertir GIF en TIFF Gratuit en Ligne | heictojpg.fr",
  description: "Convertissez vos images GIF en TIFF pour l'archivage et l'impression professionnelle. Format sans perte, qualite preservee. Gratuit, sans inscription.",
  keywords: ["convertir gif en tiff", "gif to tiff", "gif tiff gratuit", "gif vers tiff", "gif impression tiff"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-gif-en-tiff",
    siteName: "heictojpg.fr",
    title: "Convertir GIF en TIFF gratuitement en ligne",
    description: "Convertissez vos images GIF en TIFF pour l'archivage et l'impression professionnelle. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-gif-en-tiff" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur GIF en TIFF",
      url: "https://heictojpg.fr/convertir-gif-en-tiff",
      description: "Convertissez vos images GIF en TIFF pour l'archivage et l'impression professionnelle. Gratuit, sans inscription.",
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
          name: "Pourquoi convertir un GIF en TIFF ?",
          acceptedAnswer: { "@type": "Answer", text: "Le GIF est limite a 256 couleurs et est principalement utilise pour les animations web. Le TIFF, en revanche, est un format sans perte qui supporte des millions de couleurs et est le standard pour l'impression professionnelle et l'archivage numerique." },
        },
        {
          "@type": "Question",
          name: "L'animation du GIF est-elle conservee en TIFF ?",
          acceptedAnswer: { "@type": "Answer", text: "Non, la conversion extrait la premiere image du GIF anime. Le TIFF est un format d'image fixe et ne supporte pas les animations. Si votre GIF est statique, l'image est convertie telle quelle." },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir GIF en TIFF", href: "/convertir-gif-en-tiff" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir GIF en TIFF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images GIF en TIFF pour l&apos;archivage et l&apos;impression professionnelle.
          Le format TIFF utilise une compression sans perte, ideal pour preserver la qualite
          de vos images et les integrer dans des flux de travail d&apos;impression ou de gestion documentaire.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="GIF &rarr; TIFF"
          acceptedFormats=".gif,image/gif"
          acceptLabel="Selectionner un fichier GIF"
          outputFormat="tiff"
          apiEndpoint="/api/convert-image"
          outputExtension=".tiff"
          acceptedMimeTypes={["image/gif"]}
          acceptedExtensions={[".gif"]}
          errorMessage="Veuillez selectionner un fichier GIF valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir GIF en TIFF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le GIF est un format ancien limite a 256 couleurs, principalement utilise pour les animations web et les petites icones. Si vous devez archiver une image GIF ou l&apos;utiliser dans un flux d&apos;impression professionnelle, le TIFF est le format le plus adapte.</p>
          <p className="text-gray-600 mb-4">Le TIFF (Tagged Image File Format) est le standard de l&apos;industrie pour l&apos;impression et l&apos;archivage numerique. Il supporte des millions de couleurs, des profils coloriquetriques ICC et une compression sans perte, ce qui en fait le choix ideal pour les professionnels.</p>
          <p className="text-gray-600 mb-4">Cette conversion est particulierement utile pour les graphistes, les archivistes et les professionnels de l&apos;impression qui doivent integrer des images GIF dans des documents de haute qualite ou des systemes de gestion documentaire (GED).</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi convertir un GIF en TIFF ?</h3>
            <p className="text-gray-600 mb-4">Le GIF est limite a 256 couleurs et est principalement utilise pour les animations web. Le TIFF, en revanche, est un format sans perte qui supporte des millions de couleurs et est le standard pour l&apos;impression professionnelle et l&apos;archivage numerique.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">L&apos;animation du GIF est-elle conservee en TIFF ?</h3>
            <p className="text-gray-600 mb-4">Non, la conversion extrait la premiere image du GIF anime. Le TIFF est un format d&apos;image fixe et ne supporte pas les animations. Si votre GIF est statique, l&apos;image est convertie telle quelle.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-gif-en-tiff" />
    </div>
    </>
  );
}
