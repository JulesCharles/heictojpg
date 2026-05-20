import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir BMP en WebP Gratuit en Ligne | heictojpg.fr",
  description: "Convertissez vos images BMP en WebP pour réduire drastiquement leur taille. Modernisez vos anciens fichiers BMP en un format léger et performant. Gratuit.",
  keywords: ["convertir bmp en webp","bmp to webp","bmp webp gratuit","bmp vers webp","convertisseur bmp webp"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-bmp-en-webp",
    siteName: "heictojpg.fr",
    title: "Convertir BMP en WebP gratuitement en ligne",
    description: "Convertissez vos images BMP en WebP pour réduire drastiquement leur taille. Modernisez vos anciens fichiers BMP en un format léger et performant. Gratuit.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-bmp-en-webp" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur BMP en WebP",
      url: "https://heictojpg.fr/convertir-bmp-en-webp",
      description: "Convertissez vos images BMP en WebP pour réduire drastiquement leur taille. Modernisez vos anciens fichiers BMP en un format léger et performant. Gratuit.",
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
          name: "Pourquoi mes fichiers BMP sont-ils si volumineux ?",
          acceptedAnswer: { "@type": "Answer", text: "Le format BMP (Bitmap) stocke chaque pixel sans aucune compression. Une image de 1920x1080 pixels en BMP peut peser plus de 6 Mo, alors que la même image en WebP ne pèsera que quelques centaines de Ko." },
        },
        {
          "@type": "Question",
          name: "Le WebP est-il supporté par tous les navigateurs ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, le WebP est aujourd'hui supporté par tous les navigateurs modernes : Chrome, Firefox, Safari, Edge et Opera. C'est le format recommandé par Google pour les images web." },
        },
        {
          "@type": "Question",
          name: "La qualité est-elle préservée lors de la conversion ?",
          acceptedAnswer: { "@type": "Answer", text: "Le WebP offre une excellente qualité visuelle avec une compression bien supérieure au BMP. La différence de qualité est imperceptible à l'oeil nu, tout en réduisant la taille du fichier de 90 % ou plus." },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir BMP en WebP gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Modernisez vos anciens fichiers BMP en les convertissant au format WebP, bien plus léger et performant. Réduisez la taille de vos images de plus de 90 % tout en conservant une excellente qualité visuelle.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="BMP &rarr; WebP"
          acceptedFormats=".bmp,image/bmp,image/x-ms-bmp"
          acceptLabel="Sélectionner un fichier BMP"
          outputFormat="webp"
          apiEndpoint="/api/convert-image"
          outputExtension=".webp"
          acceptedMimeTypes={["image/bmp", "image/x-ms-bmp"]}
          acceptedExtensions={[".bmp"]}
          errorMessage="Veuillez sélectionner un fichier BMP valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir BMP en WebP ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format BMP (Bitmap) est l'un des plus anciens formats d'image. Il stocke chaque pixel sans compression, ce qui produit des fichiers extrêmement volumineux. Une simple photo peut peser plusieurs mégaoctets en BMP, là où le WebP n'en utiliserait que quelques centaines de kilo-octets.</p>
          <p className="text-gray-600 mb-4">Le WebP, développé par Google, est le format moderne de référence pour le web. Il offre une compression jusqu'à 30 % supérieure au JPEG avec une qualité équivalente, et supporte la transparence comme le PNG. Convertir vos BMP en WebP, c'est passer d'un format obsolète à la technologie la plus efficace du moment.</p>
          <p className="text-gray-600 mb-4">Cette conversion est particulièrement utile si vous avez d'anciens fichiers BMP sur votre ordinateur et souhaitez libérer de l'espace disque ou les publier sur le web sans sacrifier la qualité.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi mes fichiers BMP sont-ils si volumineux ?</h3>
            <p className="text-gray-600 mb-4">Le format BMP (Bitmap) stocke chaque pixel sans aucune compression. Une image de 1920x1080 pixels en BMP peut peser plus de 6 Mo, alors que la même image en WebP ne pèsera que quelques centaines de Ko.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le WebP est-il supporté par tous les navigateurs ?</h3>
            <p className="text-gray-600 mb-4">Oui, le WebP est aujourd'hui supporté par tous les navigateurs modernes : Chrome, Firefox, Safari, Edge et Opera. C'est le format recommandé par Google pour les images web.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualité est-elle préservée lors de la conversion ?</h3>
            <p className="text-gray-600 mb-4">Le WebP offre une excellente qualité visuelle avec une compression bien supérieure au BMP. La différence de qualité est imperceptible à l'oeil nu, tout en réduisant la taille du fichier de 90 % ou plus.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-bmp-en-webp" />
    </div>
    </>
  );
}
