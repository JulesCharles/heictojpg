import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convertir JPG en AVIF en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images JPG en AVIF, le format le plus performant du web. Réduction de taille de 50% vs JPG. Gratuit, sans inscription.",
  keywords: ["convertir jpg en avif","jpg to avif","jpg avif gratuit","optimiser image avif","jpg vers avif"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-jpg-en-avif",
    siteName: "heictojpg.fr",
    title: "Convertir JPG en AVIF gratuitement en ligne",
    description: "Convertissez vos images JPG en AVIF, le format le plus performant du web. Réduction de taille de 50% vs JPG. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-jpg-en-avif" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur JPG en AVIF",
      url: "https://heictojpg.fr/convertir-jpg-en-avif",
      description: "Convertissez vos images JPG en AVIF, le format le plus performant du web. Réduction de taille de 50% vs JPG. Gratuit, sans inscription.",
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
          name: "L'AVIF est-il supporté par tous les navigateurs ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, depuis 2023, tous les navigateurs modernes supportent l'AVIF : Chrome (depuis 2020), Firefox (depuis 2021), Safari (depuis 2022, iOS 16+), et Edge. Seuls les très anciens navigateurs ne le supportent pas." },
        },
        {
          "@type": "Question",
          name: "AVIF vs WebP : lequel choisir ?",
          acceptedAnswer: { "@type": "Answer", text: "L'AVIF offre une compression 15-20% supérieure au WebP. Si la compatibilité n'est pas un problème (navigateurs récents), privilégiez l'AVIF. Si vous devez supporter d'anciens appareils, le WebP reste un excellent choix." },
        },
        {
          "@type": "Question",
          name: "L'AVIF est-il lent à encoder ?",
          acceptedAnswer: { "@type": "Answer", text: "L'encodage AVIF est plus lent que le JPG ou le WebP, mais notre serveur gère cette complexité pour vous. La conversion prend généralement 2 à 5 secondes." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir JPG en AVIF", href: "/convertir-jpg-en-avif" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir JPG en AVIF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images JPG en AVIF pour des fichiers 50% plus légers à qualité égale. L'AVIF est le format d'image le plus avancé du web, basé sur le codec vidéo AV1. Il surpasse le WebP et le JPG en compression tout en supportant le HDR.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="JPG &rarr; AVIF"
          acceptedFormats=".jpg,.jpeg,image/jpeg"
          acceptLabel="Sélectionner un fichier JPG"
          outputFormat="avif"
          apiEndpoint="/api/convert-image"
          outputExtension=".avif"
          acceptedMimeTypes={["image/jpeg"]}
          acceptedExtensions={[".jpg",".jpeg"]}
          errorMessage="Veuillez sélectionner un fichier JPG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir JPG en AVIF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">L'AVIF (AV1 Image File Format) représente la prochaine génération de formats d'image pour le web. Développé par l'Alliance for Open Media (qui réunit Google, Netflix, Amazon, Apple, Meta et bien d'autres), l'AVIF offre la meilleure compression disponible aujourd'hui.</p>
          <p className="text-gray-600 mb-4">Les chiffres parlent d'eux-mêmes : à qualité visuelle équivalente, un fichier AVIF est en moyenne 50% plus petit qu'un JPG et 20% plus petit qu'un WebP. Pour un site web avec beaucoup d'images, passer au AVIF peut diviser par deux le temps de chargement.</p>
          <p className="text-gray-600 mb-4">L'AVIF supporte également des fonctionnalités avancées que le JPG ne peut pas offrir : le HDR (High Dynamic Range), les couleurs étendues (wide gamut), et la transparence. C'est un format véritablement polyvalent.</p>
          <p className="text-gray-600 mb-4">En 2024-2025, le support navigateur de l'AVIF est devenu quasi-universel : Chrome, Firefox, Safari (depuis iOS 16 et macOS Ventura), Edge et Opera le supportent tous nativement.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">L'AVIF est-il supporté par tous les navigateurs ?</h3>
            <p className="text-gray-600 mb-4">Oui, depuis 2023, tous les navigateurs modernes supportent l'AVIF : Chrome (depuis 2020), Firefox (depuis 2021), Safari (depuis 2022, iOS 16+), et Edge. Seuls les très anciens navigateurs ne le supportent pas.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">AVIF vs WebP : lequel choisir ?</h3>
            <p className="text-gray-600 mb-4">L'AVIF offre une compression 15-20% supérieure au WebP. Si la compatibilité n'est pas un problème (navigateurs récents), privilégiez l'AVIF. Si vous devez supporter d'anciens appareils, le WebP reste un excellent choix.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">L'AVIF est-il lent à encoder ?</h3>
            <p className="text-gray-600 mb-4">L'encodage AVIF est plus lent que le JPG ou le WebP, mais notre serveur gère cette complexité pour vous. La conversion prend généralement 2 à 5 secondes.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-jpg-en-avif" />
    </div>
    </>
  );
}
