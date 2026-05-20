import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir AVIF en WebP Gratuit en Ligne | heictojpg.fr",
  description: "Convertissez vos images AVIF en WebP pour une compatibilité navigateur maximale tout en gardant une compression moderne. Gratuit et sans inscription.",
  keywords: ["convertir avif en webp","avif to webp","avif webp gratuit","transformer avif en webp","avif vers webp"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-avif-en-webp",
    siteName: "heictojpg.fr",
    title: "Convertir AVIF en WebP gratuitement en ligne",
    description: "Convertissez vos images AVIF en WebP pour une compatibilité navigateur maximale tout en gardant une compression moderne. Gratuit et sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-avif-en-webp" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur AVIF en WebP",
      url: "https://heictojpg.fr/convertir-avif-en-webp",
      description: "Convertissez vos images AVIF en WebP pour une compatibilité navigateur maximale tout en gardant une compression moderne.",
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
          name: "Pourquoi convertir de l'AVIF en WebP ?",
          acceptedAnswer: { "@type": "Answer", text: "Bien que l'AVIF offre une meilleure compression, le WebP bénéficie d'une compatibilité navigateur plus large et plus ancienne. Si vous devez supporter des navigateurs plus anciens ou des plateformes qui n'acceptent pas encore l'AVIF, le WebP est un excellent compromis entre compression moderne et compatibilité." },
        },
        {
          "@type": "Question",
          name: "Quelle est la différence entre AVIF et WebP ?",
          acceptedAnswer: { "@type": "Answer", text: "L'AVIF utilise le codec AV1 et offre une compression 20 à 30 % supérieure au WebP. Cependant, le WebP (développé par Google) est supporté par les navigateurs depuis plus longtemps et bénéficie d'une compatibilité quasi universelle. Les deux formats supportent la transparence et les animations." },
        },
        {
          "@type": "Question",
          name: "Quand préférer le WebP à l'AVIF ?",
          acceptedAnswer: { "@type": "Answer", text: "Préférez le WebP lorsque vous devez garantir la compatibilité avec tous les navigateurs, y compris les versions plus anciennes de Safari ou les navigateurs mobiles moins récents. Le WebP est aussi plus rapide à encoder et décoder, ce qui peut être un avantage pour les sites à fort trafic." },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir AVIF en WebP gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images AVIF en WebP pour bénéficier d'une compatibilité navigateur maximale tout en conservant une compression moderne et efficace.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="AVIF &rarr; WebP"
          acceptedFormats=".avif,image/avif"
          acceptLabel="Sélectionner un fichier AVIF"
          outputFormat="webp"
          apiEndpoint="/api/convert-image"
          outputExtension=".webp"
          acceptedMimeTypes={["image/avif"]}
          acceptedExtensions={[".avif"]}
          errorMessage="Veuillez sélectionner un fichier AVIF valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir AVIF en WebP ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">L'AVIF est le format d'image le plus performant en termes de compression, mais il n'est pas encore supporté partout. Le WebP, développé par Google, offre un excellent compromis : une compression nettement supérieure au JPEG et au PNG, avec une compatibilité navigateur quasi universelle depuis plusieurs années.</p>
          <p className="text-gray-600 mb-4">Si vous gérez un site web et souhaitez proposer des images optimisées pour tous vos visiteurs, le WebP est souvent le choix le plus pragmatique. Il est supporté par Chrome, Firefox, Safari, Edge et tous les navigateurs mobiles modernes, ce qui couvre plus de 97 % des utilisateurs.</p>
          <p className="text-gray-600 mb-4">Le WebP est aussi plus rapide à encoder et décoder que l'AVIF, ce qui peut représenter un avantage en termes de performances serveur pour les sites à fort trafic. En convertissant vos images AVIF en WebP, vous conservez l'essentiel des gains de compression tout en maximisant la compatibilité.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi convertir de l'AVIF en WebP ?</h3>
            <p className="text-gray-600 mb-4">Bien que l'AVIF offre une meilleure compression, le WebP bénéficie d'une compatibilité navigateur plus large et plus ancienne. Si vous devez supporter des navigateurs plus anciens ou des plateformes qui n'acceptent pas encore l'AVIF, le WebP est un excellent compromis entre compression moderne et compatibilité.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle est la différence entre AVIF et WebP ?</h3>
            <p className="text-gray-600 mb-4">L'AVIF utilise le codec AV1 et offre une compression 20 à 30 % supérieure au WebP. Cependant, le WebP (développé par Google) est supporté par les navigateurs depuis plus longtemps et bénéficie d'une compatibilité quasi universelle. Les deux formats supportent la transparence et les animations.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quand préférer le WebP à l'AVIF ?</h3>
            <p className="text-gray-600 mb-4">Préférez le WebP lorsque vous devez garantir la compatibilité avec tous les navigateurs, y compris les versions plus anciennes de Safari ou les navigateurs mobiles moins récents. Le WebP est aussi plus rapide à encoder et décoder, ce qui peut être un avantage pour les sites à fort trafic.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-avif-en-webp" />
    </div>
    </>
  );
}
