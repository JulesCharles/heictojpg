import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convertir BMP en PNG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images BMP en PNG sans perte de qualité. Réduisez la taille tout en conservant chaque détail. Gratuit.",
  keywords: ["convertir bmp en png","bmp to png","bmp png gratuit","bitmap en png"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-bmp-en-png",
    siteName: "heictojpg.fr",
    title: "Convertir BMP en PNG gratuitement en ligne",
    description: "Convertissez vos images BMP en PNG sans perte de qualité. Réduisez la taille tout en conservant chaque détail. Gratuit.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-bmp-en-png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur BMP en PNG",
      url: "https://heictojpg.fr/convertir-bmp-en-png",
      description: "Convertissez vos images BMP en PNG sans perte de qualité. Réduisez la taille tout en conservant chaque détail. Gratuit.",
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
          name: "BMP en PNG ou BMP en JPG ?",
          acceptedAnswer: { "@type": "Answer", text: "Choisissez PNG pour les captures d'écran, graphiques et images avec texte (qualité parfaite). Choisissez JPG pour les photographies (fichiers plus légers)." },
        },
        {
          "@type": "Question",
          name: "La qualité est-elle identique au BMP original ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, la conversion BMP vers PNG est 100% sans perte. Votre image PNG sera pixel-pour-pixel identique au fichier BMP original." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir BMP en PNG", href: "/convertir-bmp-en-png" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir BMP en PNG gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images BMP en PNG pour une compression sans perte et une compatibilité web totale. Le PNG conserve 100% de la qualité de votre BMP original tout en réduisant significativement la taille du fichier.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="BMP &rarr; PNG"
          acceptedFormats=".bmp,image/bmp"
          acceptLabel="Sélectionner un fichier BMP"
          outputFormat="png"
          apiEndpoint="/api/convert-image"
          outputExtension=".png"
          acceptedMimeTypes={["image/bmp"]}
          acceptedExtensions={[".bmp"]}
          errorMessage="Veuillez sélectionner un fichier BMP valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir BMP en PNG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">La conversion BMP vers PNG est la meilleure option quand vous avez besoin de réduire la taille de vos fichiers BMP tout en conservant une qualité pixel-perfect. Contrairement au JPG qui compresse avec perte, le PNG utilise une compression sans perte : chaque pixel de votre image BMP est préservé à l'identique.</p>
          <p className="text-gray-600 mb-4">Cette conversion est particulièrement adaptée aux captures d'écran, aux graphiques, aux schémas techniques, et à toute image contenant du texte ou des lignes nettes. Pour ces types d'images, le PNG offre souvent une meilleure compression que le JPG tout en évitant les artefacts de compression.</p>
          <p className="text-gray-600 mb-4">La réduction de taille dépend du contenu de l'image. Les images avec de grandes zones de couleur unie (captures d'écran, graphiques) peuvent voir leur taille réduite de 80 à 95%. Les photographies verront une réduction plus modeste de 30 à 60%.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">BMP en PNG ou BMP en JPG ?</h3>
            <p className="text-gray-600 mb-4">Choisissez PNG pour les captures d'écran, graphiques et images avec texte (qualité parfaite). Choisissez JPG pour les photographies (fichiers plus légers).</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualité est-elle identique au BMP original ?</h3>
            <p className="text-gray-600 mb-4">Oui, la conversion BMP vers PNG est 100% sans perte. Votre image PNG sera pixel-pour-pixel identique au fichier BMP original.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-bmp-en-png" />
    </div>
    </>
  );
}
