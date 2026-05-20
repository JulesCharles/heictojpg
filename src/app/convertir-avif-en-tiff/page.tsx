import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convertir AVIF en TIFF Gratuit en Ligne | heictojpg.fr",
  description: "Convertissez vos images AVIF en TIFF pour l'impression professionnelle et l'archivage. Format sans perte idéal pour les professionnels. Gratuit.",
  keywords: ["convertir avif en tiff","avif to tiff","avif tiff gratuit","avif vers tiff","convertisseur avif tiff"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-avif-en-tiff",
    siteName: "heictojpg.fr",
    title: "Convertir AVIF en TIFF gratuitement en ligne",
    description: "Convertissez vos images AVIF en TIFF pour l'impression professionnelle et l'archivage. Format sans perte idéal pour les professionnels. Gratuit.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-avif-en-tiff" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur AVIF en TIFF",
      url: "https://heictojpg.fr/convertir-avif-en-tiff",
      description: "Convertissez vos images AVIF en TIFF pour l'impression professionnelle et l'archivage. Format sans perte idéal pour les professionnels. Gratuit.",
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
          name: "Pourquoi convertir AVIF en TIFF ?",
          acceptedAnswer: { "@type": "Answer", text: "Le TIFF est le format de référence pour l'impression professionnelle et l'archivage. Il conserve une qualité maximale sans compression destructive, ce qui le rend idéal pour les imprimeurs, photographes et graphistes." },
        },
        {
          "@type": "Question",
          name: "Le fichier TIFF sera-t-il plus lourd que l'AVIF ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, le TIFF est un format sans perte qui produit des fichiers nettement plus volumineux que l'AVIF. C'est le prix à payer pour une qualité maximale, indispensable en impression professionnelle." },
        },
        {
          "@type": "Question",
          name: "Le TIFF est-il adapté au web ?",
          acceptedAnswer: { "@type": "Answer", text: "Non, le TIFF n'est pas adapté au web en raison de sa taille importante. Il est principalement utilisé pour l'impression, la retouche photo professionnelle et l'archivage de documents." },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir AVIF en TIFF", href: "/convertir-avif-en-tiff" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir AVIF en TIFF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images AVIF en TIFF pour l'impression professionnelle ou l'archivage longue durée. Le format TIFF offre une qualité sans perte, idéale pour les photographes, graphistes et imprimeurs.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="AVIF &rarr; TIFF"
          acceptedFormats=".avif,image/avif"
          acceptLabel="Sélectionner un fichier AVIF"
          outputFormat="tiff"
          apiEndpoint="/api/convert-image"
          outputExtension=".tiff"
          acceptedMimeTypes={["image/avif"]}
          acceptedExtensions={[".avif"]}
          errorMessage="Veuillez sélectionner un fichier AVIF valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir AVIF en TIFF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le TIFF (Tagged Image File Format) est le format de référence dans le monde de l'impression professionnelle et de l'archivage. Contrairement à l'AVIF qui utilise une compression avec perte, le TIFF conserve chaque pixel dans sa qualité originale, ce qui est essentiel pour les travaux d'impression haute résolution.</p>
          <p className="text-gray-600 mb-4">Si vous êtes photographe, graphiste ou imprimeur et que vous recevez des images au format AVIF, les convertir en TIFF vous permet de les intégrer dans vos flux de travail professionnels sans problème de compatibilité.</p>
          <p className="text-gray-600 mb-4">Le TIFF est également le format privilégié pour l'archivage à long terme de documents et d'images, car il est supporté par tous les logiciels professionnels et ne subit aucune dégradation au fil du temps.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi convertir AVIF en TIFF ?</h3>
            <p className="text-gray-600 mb-4">Le TIFF est le format de référence pour l'impression professionnelle et l'archivage. Il conserve une qualité maximale sans compression destructive, ce qui le rend idéal pour les imprimeurs, photographes et graphistes.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le fichier TIFF sera-t-il plus lourd que l'AVIF ?</h3>
            <p className="text-gray-600 mb-4">Oui, le TIFF est un format sans perte qui produit des fichiers nettement plus volumineux que l'AVIF. C'est le prix à payer pour une qualité maximale, indispensable en impression professionnelle.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le TIFF est-il adapté au web ?</h3>
            <p className="text-gray-600 mb-4">Non, le TIFF n'est pas adapté au web en raison de sa taille importante. Il est principalement utilisé pour l'impression, la retouche photo professionnelle et l'archivage de documents.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-avif-en-tiff" />
    </div>
    </>
  );
}
