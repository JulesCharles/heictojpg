import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convertir WebP en AVIF Gratuit en Ligne | heictojpg.fr",
  description: "Convertissez vos images WebP en AVIF pour une compression encore meilleure. Le format AVIF offre une qualité supérieure à taille réduite. Gratuit.",
  keywords: ["convertir webp en avif","webp to avif","webp avif gratuit","transformer webp en avif","webp vers avif"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-webp-en-avif",
    siteName: "heictojpg.fr",
    title: "Convertir WebP en AVIF gratuitement en ligne",
    description: "Convertissez vos images WebP en AVIF pour une compression encore meilleure. Le format AVIF offre une qualité supérieure à taille réduite. Gratuit.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-webp-en-avif" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur WebP en AVIF",
      url: "https://heictojpg.fr/convertir-webp-en-avif",
      description: "Convertissez vos images WebP en AVIF pour une compression encore meilleure. Le format AVIF offre une qualité supérieure à taille réduite.",
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
          name: "L'AVIF est-il vraiment meilleur que le WebP ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, dans la majorité des cas. L'AVIF offre un taux de compression supérieur de 20 à 30 % par rapport au WebP à qualité visuelle équivalente. Il supporte aussi le HDR, une profondeur de couleur de 10 ou 12 bits et une meilleure gestion des dégradés." },
        },
        {
          "@type": "Question",
          name: "Tous les navigateurs supportent-ils l'AVIF ?",
          acceptedAnswer: { "@type": "Answer", text: "En 2024, Chrome, Firefox, Opera et Samsung Internet supportent l'AVIF. Safari le supporte depuis la version 16.4 (2023). La compatibilité est donc très large, mais pas encore aussi universelle que le WebP." },
        },
        {
          "@type": "Question",
          name: "La conversion WebP vers AVIF est-elle sans perte ?",
          acceptedAnswer: { "@type": "Answer", text: "La conversion implique un ré-encodage. Comme les deux formats utilisent des algorithmes de compression différents, une très légère modification est possible, mais elle est imperceptible à l'oeil nu dans la grande majorité des cas." },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir WebP en AVIF", href: "/convertir-webp-en-avif" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir WebP en AVIF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Passez au format de nouvelle génération AVIF pour une compression encore plus efficace que le WebP. Réduisez la taille de vos images tout en conservant une qualité exceptionnelle.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="WebP &rarr; AVIF"
          acceptedFormats=".webp,image/webp"
          acceptLabel="Sélectionner un fichier WebP"
          outputFormat="avif"
          apiEndpoint="/api/convert-image"
          outputExtension=".avif"
          acceptedMimeTypes={["image/webp"]}
          acceptedExtensions={[".webp"]}
          errorMessage="Veuillez sélectionner un fichier WebP valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir WebP en AVIF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">L'AVIF (AV1 Image File Format) est le format d'image de nouvelle génération qui surpasse le WebP en termes de compression. À qualité visuelle égale, un fichier AVIF est en moyenne 20 à 30 % plus léger qu'un fichier WebP, ce qui se traduit par des temps de chargement encore plus rapides pour vos sites web.</p>
          <p className="text-gray-600 mb-4">L'AVIF supporte le HDR (High Dynamic Range), une profondeur de couleur allant jusqu'à 12 bits et une meilleure gestion des dégradés et des textures complexes. Si vous optimisez vos images pour le web, passer de WebP à AVIF est la prochaine étape logique.</p>
          <p className="text-gray-600 mb-4">La compatibilité navigateur de l'AVIF s'est considérablement améliorée : Chrome, Firefox, Safari (depuis 16.4) et Opera le supportent tous. C'est le moment idéal pour adopter ce format et offrir la meilleure expérience à vos utilisateurs.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">L'AVIF est-il vraiment meilleur que le WebP ?</h3>
            <p className="text-gray-600 mb-4">Oui, dans la majorité des cas. L'AVIF offre un taux de compression supérieur de 20 à 30 % par rapport au WebP à qualité visuelle équivalente. Il supporte aussi le HDR, une profondeur de couleur de 10 ou 12 bits et une meilleure gestion des dégradés.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Tous les navigateurs supportent-ils l'AVIF ?</h3>
            <p className="text-gray-600 mb-4">En 2024, Chrome, Firefox, Opera et Samsung Internet supportent l'AVIF. Safari le supporte depuis la version 16.4 (2023). La compatibilité est donc très large, mais pas encore aussi universelle que le WebP.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La conversion WebP vers AVIF est-elle sans perte ?</h3>
            <p className="text-gray-600 mb-4">La conversion implique un ré-encodage. Comme les deux formats utilisent des algorithmes de compression différents, une très légère modification est possible, mais elle est imperceptible à l'oeil nu dans la grande majorité des cas.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-webp-en-avif" />
    </div>
    </>
  );
}
