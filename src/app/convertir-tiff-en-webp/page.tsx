import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convertir TIFF en WebP en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos fichiers TIFF volumineux en WebP ultra-légers pour le web. Réduction de taille jusqu'à 98%. Gratuit.",
  keywords: ["convertir tiff en webp","tiff to webp","tiff webp gratuit","tiff vers webp"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-tiff-en-webp",
    siteName: "heictojpg.fr",
    title: "Convertir TIFF en WebP gratuitement en ligne",
    description: "Convertissez vos fichiers TIFF volumineux en WebP ultra-légers pour le web. Réduction de taille jusqu'à 98%. Gratuit.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-tiff-en-webp" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur TIFF en WebP",
      url: "https://heictojpg.fr/convertir-tiff-en-webp",
      description: "Convertissez vos fichiers TIFF volumineux en WebP ultra-légers pour le web. Réduction de taille jusqu'à 98%. Gratuit.",
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
          name: "Quelle réduction de taille espérer ?",
          acceptedAnswer: { "@type": "Answer", text: "Un TIFF de 50 Mo deviendra généralement un WebP de 500 Ko à 2 Mo, soit une réduction de 95 à 99%. La différence exacte dépend de la complexité de l'image." },
        },
        {
          "@type": "Question",
          name: "Puis-je utiliser le WebP pour l'impression ?",
          acceptedAnswer: { "@type": "Answer", text: "Non, le WebP est un format optimisé pour l'écran. Pour l'impression, conservez votre fichier TIFF original ou convertissez en JPG haute qualité." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir TIFF en WebP", href: "/convertir-tiff-en-webp" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir TIFF en WebP gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos fichiers TIFF professionnels en images WebP optimisées pour le web. Passez d'un fichier de 50 Mo à moins de 1 Mo sans perte visible de qualité. Idéal pour publier vos photos pro en ligne.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="TIFF &rarr; WebP"
          acceptedFormats=".tiff,.tif,image/tiff"
          acceptLabel="Sélectionner un fichier TIFF"
          outputFormat="webp"
          apiEndpoint="/api/convert-image"
          outputExtension=".webp"
          acceptedMimeTypes={["image/tiff"]}
          acceptedExtensions={[".tiff",".tif"]}
          errorMessage="Veuillez sélectionner un fichier TIFF valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir TIFF en WebP ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">La conversion TIFF vers WebP est la plus extrême en termes de réduction de taille. Un fichier TIFF professionnel de 50 Mo peut devenir un WebP de 500 Ko à 2 Mo, soit une réduction de 95 à 99%.</p>
          <p className="text-gray-600 mb-4">Cette conversion est idéale pour les photographes qui souhaitent publier leurs images sur le web : portfolios en ligne, galeries photo, blogs. Le WebP offre la meilleure compression web tout en conservant une qualité visuelle excellente.</p>
          <p className="text-gray-600 mb-4">Le passage direct du TIFF au WebP (sans passer par le JPG intermédiaire) préserve davantage de qualité car vous évitez une double compression avec perte.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle réduction de taille espérer ?</h3>
            <p className="text-gray-600 mb-4">Un TIFF de 50 Mo deviendra généralement un WebP de 500 Ko à 2 Mo, soit une réduction de 95 à 99%. La différence exacte dépend de la complexité de l'image.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je utiliser le WebP pour l'impression ?</h3>
            <p className="text-gray-600 mb-4">Non, le WebP est un format optimisé pour l'écran. Pour l'impression, conservez votre fichier TIFF original ou convertissez en JPG haute qualité.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-tiff-en-webp" />
    </div>
    </>
  );
}
