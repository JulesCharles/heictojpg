import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convertir TIFF en AVIF Gratuit en Ligne | heictojpg.fr",
  description: "Convertissez vos fichiers TIFF en AVIF pour obtenir des images ultra-legeres sans perte de qualite visible. Gratuit, rapide et sans inscription.",
  keywords: ["convertir tiff en avif","tiff to avif","tiff avif gratuit","compresser tiff","tiff vers avif"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-tiff-en-avif",
    siteName: "heictojpg.fr",
    title: "Convertir TIFF en AVIF gratuitement en ligne",
    description: "Convertissez vos fichiers TIFF en AVIF pour obtenir des images ultra-legeres sans perte de qualite visible. Gratuit, rapide et sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-tiff-en-avif" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur TIFF en AVIF",
      url: "https://heictojpg.fr/convertir-tiff-en-avif",
      description: "Convertissez vos fichiers TIFF en AVIF pour obtenir des images ultra-legeres sans perte de qualite visible. Gratuit, rapide et sans inscription.",
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
          name: "Quelle est la difference de taille entre TIFF et AVIF ?",
          acceptedAnswer: { "@type": "Answer", text: "Un fichier TIFF peut facilement peser plusieurs dizaines de megaoctets. En le convertissant en AVIF, vous pouvez reduire sa taille de 90 % ou plus, tout en conservant une qualite visuelle quasi identique." },
        },
        {
          "@type": "Question",
          name: "Le format AVIF est-il compatible avec tous les navigateurs ?",
          acceptedAnswer: { "@type": "Answer", text: "AVIF est supporte par Chrome, Firefox, Safari (depuis la version 16) et Edge. Pour les navigateurs plus anciens, il est recommande de fournir une image de secours en WebP ou JPG." },
        },
        {
          "@type": "Question",
          name: "La conversion TIFF vers AVIF conserve-t-elle la transparence ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, le format AVIF prend en charge la transparence (canal alpha). Si votre fichier TIFF contient un fond transparent, celui-ci sera preserve lors de la conversion." },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir TIFF en AVIF", href: "/convertir-tiff-en-avif" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir TIFF en AVIF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Modernisez vos fichiers TIFF volumineux en les convertissant au format AVIF, ultra-compact et de nouvelle generation. Reduisez considerablement le poids de vos images tout en conservant une qualite remarquable.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="TIFF &rarr; AVIF"
          acceptedFormats=".tiff,.tif,image/tiff"
          acceptLabel="Selectionner un fichier TIFF"
          outputFormat="avif"
          apiEndpoint="/api/convert-image"
          outputExtension=".avif"
          acceptedMimeTypes={["image/tiff"]}
          acceptedExtensions={[".tiff",".tif"]}
          errorMessage="Veuillez selectionner un fichier TIFF valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir TIFF en AVIF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format TIFF est largement utilise dans le monde professionnel (photographie, impression, archivage) pour sa qualite sans compromis. Cependant, les fichiers TIFF sont extremement volumineux et inadaptes au web ou au partage numerique.</p>
          <p className="text-gray-600 mb-4">L'AVIF est un format de nouvelle generation qui offre une compression jusqu'a 50 % superieure au JPEG et 20 % superieure au WebP, tout en conservant une qualite visuelle excellente. Convertir vos TIFF en AVIF vous permet de reduire drastiquement le poids de vos images.</p>
          <p className="text-gray-600 mb-4">Cette conversion est ideale pour publier sur le web des images initialement concues pour l'impression, ou pour archiver de grandes collections de photos en economisant un espace de stockage considerable.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle est la difference de taille entre TIFF et AVIF ?</h3>
            <p className="text-gray-600 mb-4">Un fichier TIFF peut facilement peser plusieurs dizaines de megaoctets. En le convertissant en AVIF, vous pouvez reduire sa taille de 90 % ou plus, tout en conservant une qualite visuelle quasi identique.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le format AVIF est-il compatible avec tous les navigateurs ?</h3>
            <p className="text-gray-600 mb-4">AVIF est supporte par Chrome, Firefox, Safari (depuis la version 16) et Edge. Pour les navigateurs plus anciens, il est recommande de fournir une image de secours en WebP ou JPG.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La conversion TIFF vers AVIF conserve-t-elle la transparence ?</h3>
            <p className="text-gray-600 mb-4">Oui, le format AVIF prend en charge la transparence (canal alpha). Si votre fichier TIFF contient un fond transparent, celui-ci sera preserve lors de la conversion.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-tiff-en-avif" />
    </div>
    </>
  );
}
