import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir TIFF en PNG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos fichiers TIFF en PNG sans perte de qualité. Conservez la transparence et les détails. Gratuit, sans inscription.",
  keywords: ["convertir tiff en png","tiff to png","tiff png gratuit","tif en png"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-tiff-en-png",
    siteName: "heictojpg.fr",
    title: "Convertir TIFF en PNG gratuitement en ligne",
    description: "Convertissez vos fichiers TIFF en PNG sans perte de qualité. Conservez la transparence et les détails. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-tiff-en-png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur TIFF en PNG",
      url: "https://heictojpg.fr/convertir-tiff-en-png",
      description: "Convertissez vos fichiers TIFF en PNG sans perte de qualité. Conservez la transparence et les détails. Gratuit, sans inscription.",
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
          name: "PNG vs JPG : lequel choisir pour convertir mon TIFF ?",
          acceptedAnswer: { "@type": "Answer", text: "Choisissez PNG si vous avez besoin d'une qualité parfaite, de transparence, ou si votre image contient du texte et des graphiques. Choisissez JPG si vous voulez le fichier le plus léger possible et que l'image est une photographie." },
        },
        {
          "@type": "Question",
          name: "La transparence du TIFF est-elle conservée ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, si votre fichier TIFF contient un canal alpha (transparence), celui-ci sera préservé dans le fichier PNG de sortie." },
        },
        {
          "@type": "Question",
          name: "Puis-je convertir des TIFF multi-pages ?",
          acceptedAnswer: { "@type": "Answer", text: "Notre outil convertit la première page du fichier TIFF. Pour les TIFF multi-pages, vous devrez convertir chaque page séparément." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir TIFF en PNG gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos fichiers TIFF en PNG pour une qualité sans perte et une compatibilité web maximale. Le PNG conserve tous les détails de votre image TIFF originale, y compris la transparence.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="TIFF &rarr; PNG"
          acceptedFormats=".tiff,.tif,image/tiff"
          acceptLabel="Sélectionner un fichier TIFF"
          outputFormat="png"
          apiEndpoint="/api/convert-image"
          outputExtension=".png"
          acceptedMimeTypes={["image/tiff"]}
          acceptedExtensions={[".tiff",".tif"]}
          errorMessage="Veuillez sélectionner un fichier TIFF valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir TIFF en PNG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">La conversion TIFF vers PNG est idéale quand vous avez besoin de conserver une qualité parfaite tout en obtenant un fichier compatible avec le web et les logiciels courants. Contrairement au JPG qui compresse avec perte, le PNG offre une compression sans perte : chaque pixel de votre image TIFF est préservé.</p>
          <p className="text-gray-600 mb-4">Cette conversion est particulièrement recommandée pour les graphiques, les logos, les captures d'écran et les images contenant du texte, où la netteté pixel-perfect est essentielle. Le PNG supporte également la transparence, ce qui le rend idéal pour les designs destinés à être superposés sur d'autres contenus.</p>
          <p className="text-gray-600 mb-4">Bien que le fichier PNG soit plus volumineux qu'un JPG équivalent, il reste significativement plus léger qu'un TIFF. Un TIFF de 50 Mo pourra être converti en un PNG de 5 à 15 Mo, soit une réduction de 70 à 90%.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">PNG vs JPG : lequel choisir pour convertir mon TIFF ?</h3>
            <p className="text-gray-600 mb-4">Choisissez PNG si vous avez besoin d'une qualité parfaite, de transparence, ou si votre image contient du texte et des graphiques. Choisissez JPG si vous voulez le fichier le plus léger possible et que l'image est une photographie.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La transparence du TIFF est-elle conservée ?</h3>
            <p className="text-gray-600 mb-4">Oui, si votre fichier TIFF contient un canal alpha (transparence), celui-ci sera préservé dans le fichier PNG de sortie.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je convertir des TIFF multi-pages ?</h3>
            <p className="text-gray-600 mb-4">Notre outil convertit la première page du fichier TIFF. Pour les TIFF multi-pages, vous devrez convertir chaque page séparément.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-tiff-en-png" />
    </div>
    </>
  );
}
