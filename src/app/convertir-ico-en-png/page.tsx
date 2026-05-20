import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir ICO en PNG en ligne gratuit | heictojpg.fr",
  description: "Extrayez et convertissez un fichier favicon ICO en image PNG. Récupérez votre icône en haute qualité. Gratuit, sans inscription.",
  keywords: ["convertir ico en png","ico to png","ico png gratuit","extraire favicon","favicon en png"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-ico-en-png",
    siteName: "heictojpg.fr",
    title: "Convertir ICO en PNG gratuitement en ligne",
    description: "Extrayez et convertissez un fichier favicon ICO en image PNG. Récupérez votre icône en haute qualité. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-ico-en-png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur ICO en PNG",
      url: "https://heictojpg.fr/convertir-ico-en-png",
      description: "Extrayez et convertissez un fichier favicon ICO en image PNG. Récupérez votre icône en haute qualité. Gratuit, sans inscription.",
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
          name: "Quelle taille aura le PNG ?",
          acceptedAnswer: { "@type": "Answer", text: "Notre outil extrait la plus grande taille disponible dans le fichier ICO. Les favicons modernes contiennent généralement des tailles allant de 16x16 à 256x256 pixels." },
        },
        {
          "@type": "Question",
          name: "Puis-je récupérer toutes les tailles du fichier ICO ?",
          acceptedAnswer: { "@type": "Answer", text: "Notre outil extrait la plus grande taille pour un résultat optimal. Les autres tailles sont des versions redimensionnées de la même image." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir ICO en PNG gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Extrayez et convertissez vos fichiers favicon ICO en images PNG haute qualité. Idéal pour récupérer un logo à partir d'un favicon, éditer une icône, ou utiliser un favicon dans un contexte où le format ICO n'est pas accepté.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="ICO &rarr; PNG"
          acceptedFormats=".ico,image/x-icon"
          acceptLabel="Sélectionner un fichier ICO"
          outputFormat="png"
          apiEndpoint="/api/convert-image"
          outputExtension=".png"
          acceptedMimeTypes={["image/x-icon","image/vnd.microsoft.icon"]}
          acceptedExtensions={[".ico"]}
          errorMessage="Veuillez sélectionner un fichier ICO valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir ICO en PNG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format ICO est spécifique aux favicons et icônes Windows. Il n'est pas reconnu par la plupart des logiciels d'édition d'images, des réseaux sociaux et des applications web. Convertir un ICO en PNG vous permet de récupérer l'image dans un format universellement compatible.</p>
          <p className="text-gray-600 mb-4">Cette conversion est utile quand vous souhaitez récupérer le logo d'un site web à partir de son favicon, éditer une icône dans un logiciel comme Photoshop ou Canva, ou utiliser un favicon comme image de profil ou dans une présentation.</p>
          <p className="text-gray-600 mb-4">Notre outil extrait la plus grande taille disponible dans le fichier ICO (généralement 256x256 ou 128x128) et la convertit en PNG haute qualité.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle taille aura le PNG ?</h3>
            <p className="text-gray-600 mb-4">Notre outil extrait la plus grande taille disponible dans le fichier ICO. Les favicons modernes contiennent généralement des tailles allant de 16x16 à 256x256 pixels.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je récupérer toutes les tailles du fichier ICO ?</h3>
            <p className="text-gray-600 mb-4">Notre outil extrait la plus grande taille pour un résultat optimal. Les autres tailles sont des versions redimensionnées de la même image.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-ico-en-png" />
    </div>
    </>
  );
}
