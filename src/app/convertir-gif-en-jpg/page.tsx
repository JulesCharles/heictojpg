import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir GIF en JPG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images GIF en JPG. Extrayez la première frame d'un GIF animé en image fixe JPG. Gratuit, sans inscription.",
  keywords: ["convertir gif en jpg","gif to jpg","gif jpg gratuit","gif en image","extraire frame gif"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-gif-en-jpg",
    siteName: "heictojpg.fr",
    title: "Convertir GIF en JPG gratuitement en ligne",
    description: "Convertissez vos images GIF en JPG. Extrayez la première frame d'un GIF animé en image fixe JPG. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-gif-en-jpg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur GIF en JPG",
      url: "https://heictojpg.fr/convertir-gif-en-jpg",
      description: "Convertissez vos images GIF en JPG. Extrayez la première frame d'un GIF animé en image fixe JPG. Gratuit, sans inscription.",
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
          name: "Que se passe-t-il avec un GIF animé ?",
          acceptedAnswer: { "@type": "Answer", text: "Notre outil extrait la première frame (image) de l'animation GIF et la convertit en JPG. L'animation est perdue dans la conversion." },
        },
        {
          "@type": "Question",
          name: "Le GIF a seulement 256 couleurs, le JPG sera-t-il meilleur ?",
          acceptedAnswer: { "@type": "Answer", text: "Le JPG supporte des millions de couleurs, mais la conversion ne peut pas ajouter des couleurs qui n'étaient pas dans le GIF original. Le JPG sera toutefois plus lisse grâce à sa compression continue." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir GIF en JPG gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images GIF en JPG pour obtenir une image fixe légère et universellement compatible. Pour les GIF animés, notre outil extrait la première frame et la convertit en JPG haute qualité.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="GIF &rarr; JPG"
          acceptedFormats=".gif,image/gif"
          acceptLabel="Sélectionner un fichier GIF"
          outputFormat="jpg"
          apiEndpoint="/api/convert-image"
          outputExtension=".jpg"
          acceptedMimeTypes={["image/gif"]}
          acceptedExtensions={[".gif"]}
          errorMessage="Veuillez sélectionner un fichier GIF valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir GIF en JPG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format GIF est limité à 256 couleurs et produit des fichiers souvent volumineux pour les animations. Convertir un GIF en JPG vous permet d'obtenir une image fixe au format universel, avec des millions de couleurs et une taille de fichier réduite.</p>
          <p className="text-gray-600 mb-4">Cette conversion est utile quand vous recevez un GIF animé et souhaitez en extraire une image fixe pour une présentation, un document, ou un post sur les réseaux sociaux. Elle est également pratique pour convertir des anciens graphiques GIF (logos, boutons) en JPG plus moderne.</p>
          <p className="text-gray-600 mb-4">Pour les GIF animés, notre outil extrait automatiquement la première frame de l'animation et la convertit en JPG. Vous obtenez ainsi une image fixe propre, sans les artefacts de compression typiques du GIF (banding de couleurs, tramage).</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Que se passe-t-il avec un GIF animé ?</h3>
            <p className="text-gray-600 mb-4">Notre outil extrait la première frame (image) de l'animation GIF et la convertit en JPG. L'animation est perdue dans la conversion.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le GIF a seulement 256 couleurs, le JPG sera-t-il meilleur ?</h3>
            <p className="text-gray-600 mb-4">Le JPG supporte des millions de couleurs, mais la conversion ne peut pas ajouter des couleurs qui n'étaient pas dans le GIF original. Le JPG sera toutefois plus lisse grâce à sa compression continue.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-gif-en-jpg" />
    </div>
    </>
  );
}
