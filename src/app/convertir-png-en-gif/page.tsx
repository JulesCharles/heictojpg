import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir PNG en GIF Gratuit en Ligne | heictojpg.fr",
  description: "Convertissez vos images PNG en GIF gratuitement en ligne. Idéal pour la compatibilité et les animations simples. Rapide et sans inscription.",
  keywords: ["convertir png en gif","png to gif","png gif gratuit","transformer png en gif","png vers gif"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-png-en-gif",
    siteName: "heictojpg.fr",
    title: "Convertir PNG en GIF gratuitement en ligne",
    description: "Convertissez vos images PNG en GIF gratuitement en ligne. Idéal pour la compatibilité et les animations simples. Rapide et sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-png-en-gif" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur PNG en GIF",
      url: "https://heictojpg.fr/convertir-png-en-gif",
      description: "Convertissez vos images PNG en GIF gratuitement en ligne. Idéal pour la compatibilité et les animations simples.",
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
          name: "Quelle est la différence entre PNG et GIF ?",
          acceptedAnswer: { "@type": "Answer", text: "Le PNG supporte des millions de couleurs et une transparence alpha complète, tandis que le GIF est limité à 256 couleurs avec une transparence binaire (pixel transparent ou opaque). En revanche, le GIF supporte nativement les animations, ce que le PNG ne fait pas." },
        },
        {
          "@type": "Question",
          name: "La transparence est-elle conservée lors de la conversion PNG en GIF ?",
          acceptedAnswer: { "@type": "Answer", text: "Le GIF supporte la transparence, mais de manière limitée : chaque pixel est soit totalement transparent, soit totalement opaque. Si votre PNG utilise une transparence partielle (semi-transparence), certains pixels pourront apparaître différemment après conversion." },
        },
        {
          "@type": "Question",
          name: "La qualité de l'image est-elle affectée ?",
          acceptedAnswer: { "@type": "Answer", text: "Le GIF étant limité à 256 couleurs, les images contenant de nombreuses nuances ou des dégradés peuvent perdre en qualité visuelle. Pour des illustrations, logos ou graphiques simples, la différence est généralement imperceptible." },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir PNG en GIF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images PNG en GIF en un clic. Le format GIF est universellement compatible et idéal pour les graphiques simples, les logos et les illustrations avec peu de couleurs.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="PNG &rarr; GIF"
          acceptedFormats=".png,image/png"
          acceptLabel="Sélectionner un fichier PNG"
          outputFormat="gif"
          apiEndpoint="/api/convert-image"
          outputExtension=".gif"
          acceptedMimeTypes={["image/png"]}
          acceptedExtensions={[".png"]}
          errorMessage="Veuillez sélectionner un fichier PNG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir PNG en GIF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format GIF est l'un des formats d'image les plus anciens et les plus largement supportés sur le web. Si vous avez besoin d'une image légère avec peu de couleurs, le GIF est un excellent choix. Il est particulièrement adapté aux logos, icônes et illustrations simples.</p>
          <p className="text-gray-600 mb-4">Convertir un PNG en GIF peut aussi être utile lorsque vous souhaitez réduire la taille du fichier pour des images contenant peu de couleurs. Le GIF utilise une palette de 256 couleurs maximum, ce qui le rend très compact pour les graphiques simples.</p>
          <p className="text-gray-600 mb-4">Certaines plateformes ou systèmes plus anciens acceptent uniquement le format GIF. Cette conversion vous permet d'assurer une compatibilité maximale avec tous les environnements, y compris les anciens clients de messagerie et les forums.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle est la différence entre PNG et GIF ?</h3>
            <p className="text-gray-600 mb-4">Le PNG supporte des millions de couleurs et une transparence alpha complète, tandis que le GIF est limité à 256 couleurs avec une transparence binaire (pixel transparent ou opaque). En revanche, le GIF supporte nativement les animations, ce que le PNG ne fait pas.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La transparence est-elle conservée lors de la conversion PNG en GIF ?</h3>
            <p className="text-gray-600 mb-4">Le GIF supporte la transparence, mais de manière limitée : chaque pixel est soit totalement transparent, soit totalement opaque. Si votre PNG utilise une transparence partielle (semi-transparence), certains pixels pourront apparaître différemment après conversion.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualité de l'image est-elle affectée ?</h3>
            <p className="text-gray-600 mb-4">Le GIF étant limité à 256 couleurs, les images contenant de nombreuses nuances ou des dégradés peuvent perdre en qualité visuelle. Pour des illustrations, logos ou graphiques simples, la différence est généralement imperceptible.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-png-en-gif" />
    </div>
    </>
  );
}
