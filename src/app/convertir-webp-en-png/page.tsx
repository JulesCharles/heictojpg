import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir WebP en PNG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images WebP en PNG sans perte de qualité. Idéal pour l'édition et la compatibilité. Gratuit, sans inscription.",
  keywords: ["convertir webp en png","webp to png","webp png gratuit","webp vers png","ouvrir webp"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-webp-en-png",
    siteName: "heictojpg.fr",
    title: "Convertir WebP en PNG gratuitement en ligne",
    description: "Convertissez vos images WebP en PNG sans perte de qualité. Idéal pour l'édition et la compatibilité. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-webp-en-png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur WebP en PNG",
      url: "https://heictojpg.fr/convertir-webp-en-png",
      description: "Convertissez vos images WebP en PNG sans perte de qualité. Idéal pour l'édition et la compatibilité. Gratuit, sans inscription.",
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
          name: "Pourquoi les images téléchargées du web sont-elles en WebP ?",
          acceptedAnswer: { "@type": "Answer", text: "De nombreux sites web utilisent le format WebP pour optimiser leur temps de chargement. Quand vous faites un clic droit et 'Enregistrer l'image', vous obtenez souvent un fichier .webp au lieu d'un .jpg ou .png classique." },
        },
        {
          "@type": "Question",
          name: "La qualité est-elle conservée lors de la conversion ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, la conversion WebP vers PNG est sans perte. Votre image conserve toute sa qualité originale, y compris la transparence." },
        },
        {
          "@type": "Question",
          name: "Le fichier PNG sera-t-il plus lourd que le WebP ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, généralement le PNG est plus lourd que le WebP (c'est justement pourquoi le WebP existe). Mais le PNG est compatible avec tous les logiciels, ce qui justifie la conversion pour l'édition." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir WebP en PNG gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos images WebP en PNG pour une compatibilité maximale avec tous les logiciels d'édition. Le PNG offre une qualité sans perte et une transparence parfaite, idéal pour l'édition photo et le design graphique.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="WebP &rarr; PNG"
          acceptedFormats=".webp,image/webp"
          acceptLabel="Sélectionner un fichier WebP"
          outputFormat="png"
          apiEndpoint="/api/convert-image"
          outputExtension=".png"
          acceptedMimeTypes={["image/webp"]}
          acceptedExtensions={[".webp"]}
          errorMessage="Veuillez sélectionner un fichier WebP valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir WebP en PNG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Bien que le WebP soit un excellent format pour le web, il n'est pas toujours compatible avec tous les logiciels de retouche photo et de design. Photoshop, par exemple, ne supporte le WebP que depuis sa version 23.2 (2022), et de nombreux outils plus anciens ne le reconnaissent pas du tout.</p>
          <p className="text-gray-600 mb-4">Convertir vos images WebP en PNG vous permet de les ouvrir et les éditer dans n'importe quel logiciel : Photoshop, GIMP, Canva, Paint, Affinity Photo, et bien d'autres. Le PNG est le format universel pour l'édition d'images.</p>
          <p className="text-gray-600 mb-4">De plus, si vous avez téléchargé des images depuis le web (qui sont souvent en WebP), vous aurez besoin de les convertir en PNG pour les utiliser dans des présentations PowerPoint, des documents Word, ou les imprimer en haute qualité.</p>
          <p className="text-gray-600 mb-4">La conversion WebP vers PNG est sans perte : votre image conserve 100% de sa qualité originale, y compris la transparence si elle était présente dans le fichier WebP original.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi les images téléchargées du web sont-elles en WebP ?</h3>
            <p className="text-gray-600 mb-4">De nombreux sites web utilisent le format WebP pour optimiser leur temps de chargement. Quand vous faites un clic droit et 'Enregistrer l'image', vous obtenez souvent un fichier .webp au lieu d'un .jpg ou .png classique.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualité est-elle conservée lors de la conversion ?</h3>
            <p className="text-gray-600 mb-4">Oui, la conversion WebP vers PNG est sans perte. Votre image conserve toute sa qualité originale, y compris la transparence.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le fichier PNG sera-t-il plus lourd que le WebP ?</h3>
            <p className="text-gray-600 mb-4">Oui, généralement le PNG est plus lourd que le WebP (c'est justement pourquoi le WebP existe). Mais le PNG est compatible avec tous les logiciels, ce qui justifie la conversion pour l'édition.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nos autres outils</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; JPG</h3>
            <p className="text-sm text-gray-600">Convertissez vos photos iPhone.</p>
          </Link>
          <Link href="/compresser-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Compresser image</h3>
            <p className="text-sm text-gray-600">Réduisez le poids de vos images.</p>
          </Link>
          <Link href="/redimensionner-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Redimensionner</h3>
            <p className="text-sm text-gray-600">Changez la taille de vos images.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
