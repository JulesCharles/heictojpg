import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir WebP en TIFF Gratuit en Ligne | heictojpg.fr",
  description: "Convertissez vos images WebP en TIFF gratuitement. Préparez vos fichiers pour l'impression professionnelle et l'archivage haute qualité. Sans inscription.",
  keywords: ["convertir webp en tiff","webp to tiff","webp tiff gratuit","transformer webp en tiff","webp vers tiff"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-webp-en-tiff",
    siteName: "heictojpg.fr",
    title: "Convertir WebP en TIFF gratuitement en ligne",
    description: "Convertissez vos images WebP en TIFF gratuitement. Préparez vos fichiers pour l'impression professionnelle et l'archivage haute qualité. Sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-webp-en-tiff" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur WebP en TIFF",
      url: "https://heictojpg.fr/convertir-webp-en-tiff",
      description: "Convertissez vos images WebP en TIFF gratuitement. Préparez vos fichiers pour l'impression professionnelle et l'archivage haute qualité.",
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
          name: "Pourquoi convertir du WebP en TIFF ?",
          acceptedAnswer: { "@type": "Answer", text: "Le WebP est un format web optimisé pour la diffusion en ligne, tandis que le TIFF est le standard de l'industrie pour l'impression et l'archivage professionnel. Si vous devez imprimer une image WebP ou la fournir à un imprimeur, la conversion en TIFF est indispensable." },
        },
        {
          "@type": "Question",
          name: "Le fichier TIFF sera-t-il beaucoup plus volumineux ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, considérablement. Le WebP est conçu pour minimiser la taille des fichiers, tandis que le TIFF privilégie la qualité et la fidélité des données. Un fichier TIFF peut être 10 à 20 fois plus volumineux que son équivalent WebP, mais il conserve l'intégralité des informations de l'image." },
        },
        {
          "@type": "Question",
          name: "Quand utiliser le TIFF plutôt que le WebP ?",
          acceptedAnswer: { "@type": "Answer", text: "Utilisez le TIFF pour l'impression professionnelle, l'archivage, le travail en PAO (Publication Assistée par Ordinateur) ou lorsqu'un prestataire exige ce format. Le WebP reste préférable pour l'affichage web grâce à sa taille réduite." },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir WebP en TIFF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images WebP en TIFF pour l'impression professionnelle et l'archivage. Passez d'un format web à un format adapté au monde de l'édition et de l'imprimerie.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="WebP &rarr; TIFF"
          acceptedFormats=".webp,image/webp"
          acceptLabel="Sélectionner un fichier WebP"
          outputFormat="tiff"
          apiEndpoint="/api/convert-image"
          outputExtension=".tiff"
          acceptedMimeTypes={["image/webp"]}
          acceptedExtensions={[".webp"]}
          errorMessage="Veuillez sélectionner un fichier WebP valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir WebP en TIFF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format WebP a été conçu par Google pour optimiser les images sur le web. Il offre une compression excellente, mais n'est pas adapté aux workflows professionnels d'impression. Le TIFF, en revanche, est le format de référence dans l'imprimerie, la PAO et l'archivage numérique.</p>
          <p className="text-gray-600 mb-4">Si vous avez téléchargé des images depuis un site web et devez les intégrer dans un document destiné à l'impression (brochure, catalogue, affiche), la conversion en TIFF garantit une compatibilité totale avec les logiciels professionnels comme Adobe InDesign, QuarkXPress ou Scribus.</p>
          <p className="text-gray-600 mb-4">Le TIFF supporte également les espaces colorimétriques CMJN nécessaires à l'impression offset, les calques et les métadonnées IPTC/XMP. Cette richesse de fonctionnalités en fait le choix incontournable pour tout usage professionnel de l'image.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi convertir du WebP en TIFF ?</h3>
            <p className="text-gray-600 mb-4">Le WebP est un format web optimisé pour la diffusion en ligne, tandis que le TIFF est le standard de l'industrie pour l'impression et l'archivage professionnel. Si vous devez imprimer une image WebP ou la fournir à un imprimeur, la conversion en TIFF est indispensable.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le fichier TIFF sera-t-il beaucoup plus volumineux ?</h3>
            <p className="text-gray-600 mb-4">Oui, considérablement. Le WebP est conçu pour minimiser la taille des fichiers, tandis que le TIFF privilégie la qualité et la fidélité des données. Un fichier TIFF peut être 10 à 20 fois plus volumineux que son équivalent WebP, mais il conserve l'intégralité des informations de l'image.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quand utiliser le TIFF plutôt que le WebP ?</h3>
            <p className="text-gray-600 mb-4">Utilisez le TIFF pour l'impression professionnelle, l'archivage, le travail en PAO (Publication Assistée par Ordinateur) ou lorsqu'un prestataire exige ce format. Le WebP reste préférable pour l'affichage web grâce à sa taille réduite.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-webp-en-tiff" />
    </div>
    </>
  );
}
