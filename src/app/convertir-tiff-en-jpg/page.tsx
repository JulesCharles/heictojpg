import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convertir TIFF en JPG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos fichiers TIFF en JPG pour les partager facilement. Réduisez la taille de vos scans et photos pro. Gratuit, sans inscription.",
  keywords: ["convertir tiff en jpg","tiff to jpg","tiff jpg gratuit","tif en jpg","convertir tif"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-tiff-en-jpg",
    siteName: "heictojpg.fr",
    title: "Convertir TIFF en JPG gratuitement en ligne",
    description: "Convertissez vos fichiers TIFF en JPG pour les partager facilement. Réduisez la taille de vos scans et photos pro. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-tiff-en-jpg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur TIFF en JPG",
      url: "https://heictojpg.fr/convertir-tiff-en-jpg",
      description: "Convertissez vos fichiers TIFF en JPG pour les partager facilement. Réduisez la taille de vos scans et photos pro. Gratuit, sans inscription.",
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
          name: "Quelle réduction de taille puis-je espérer ?",
          acceptedAnswer: { "@type": "Answer", text: "Un fichier TIFF converti en JPG voit généralement sa taille réduite de 90 à 98%. Un TIFF de 50 Mo deviendra un JPG de 1 à 5 Mo selon la complexité de l'image." },
        },
        {
          "@type": "Question",
          name: "Mon scanner produit des fichiers TIFF, puis-je les convertir ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, notre outil est parfait pour convertir les scans TIFF en JPG. Vous obtiendrez des fichiers beaucoup plus légers, faciles à envoyer par email ou à stocker dans le cloud." },
        },
        {
          "@type": "Question",
          name: "La qualité est-elle suffisante pour l'impression ?",
          acceptedAnswer: { "@type": "Answer", text: "Le JPG avec notre qualité de 90% est largement suffisant pour l'impression standard (flyers, brochures). Pour de l'impression très haute gamme (affiche grand format), conservez le TIFF original." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir TIFF en JPG", href: "/convertir-tiff-en-jpg" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir TIFF en JPG gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos fichiers TIFF volumineux en images JPG légères et universellement compatibles. Idéal pour les photographes, les scanners professionnels et les archives numériques. Réduisez la taille de vos fichiers de 90% ou plus.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="TIFF &rarr; JPG"
          acceptedFormats=".tiff,.tif,image/tiff"
          acceptLabel="Sélectionner un fichier TIFF"
          outputFormat="jpg"
          apiEndpoint="/api/convert-image"
          outputExtension=".jpg"
          acceptedMimeTypes={["image/tiff"]}
          acceptedExtensions={[".tiff",".tif"]}
          errorMessage="Veuillez sélectionner un fichier TIFF valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir TIFF en JPG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format TIFF (Tagged Image File Format) est utilisé principalement dans le monde professionnel : photographie, pré-presse, imagerie médicale et numérisation de documents. Il offre une qualité sans perte et supporte les espaces colorimétriques avancés, mais ses fichiers sont extrêmement volumineux.</p>
          <p className="text-gray-600 mb-4">Une seule photo en TIFF peut peser entre 20 et 100 Mo, ce qui rend le partage par email ou le stockage en ligne peu pratique. En convertissant vos TIFF en JPG, vous pouvez réduire la taille de vos fichiers de 90 à 98%, tout en conservant une qualité largement suffisante pour l'affichage écran et le partage.</p>
          <p className="text-gray-600 mb-4">Cette conversion est particulièrement utile pour les photographes qui souhaitent partager leurs images avec des clients, les entreprises qui numérisent des documents avec des scanners professionnels (qui produisent souvent du TIFF), et toute personne qui reçoit des fichiers TIFF et souhaite les ouvrir facilement sur n'importe quel appareil.</p>
          <p className="text-gray-600 mb-4">Le JPG est le format le plus universel : il est reconnu par tous les navigateurs, tous les systèmes d'exploitation, toutes les applications de messagerie et tous les réseaux sociaux.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle réduction de taille puis-je espérer ?</h3>
            <p className="text-gray-600 mb-4">Un fichier TIFF converti en JPG voit généralement sa taille réduite de 90 à 98%. Un TIFF de 50 Mo deviendra un JPG de 1 à 5 Mo selon la complexité de l'image.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mon scanner produit des fichiers TIFF, puis-je les convertir ?</h3>
            <p className="text-gray-600 mb-4">Oui, notre outil est parfait pour convertir les scans TIFF en JPG. Vous obtiendrez des fichiers beaucoup plus légers, faciles à envoyer par email ou à stocker dans le cloud.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualité est-elle suffisante pour l'impression ?</h3>
            <p className="text-gray-600 mb-4">Le JPG avec notre qualité de 90% est largement suffisant pour l'impression standard (flyers, brochures). Pour de l'impression très haute gamme (affiche grand format), conservez le TIFF original.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-tiff-en-jpg" />
    </div>
    </>
  );
}
