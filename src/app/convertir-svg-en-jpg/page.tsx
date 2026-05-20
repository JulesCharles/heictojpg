import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir SVG en JPG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos fichiers vectoriels SVG en images JPG. Compatible avec tous les appareils et réseaux sociaux. Gratuit, sans inscription.",
  keywords: ["convertir svg en jpg","svg to jpg","svg jpg gratuit","svg vers jpg","vectoriel en jpg"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-svg-en-jpg",
    siteName: "heictojpg.fr",
    title: "Convertir SVG en JPG gratuitement en ligne",
    description: "Convertissez vos fichiers vectoriels SVG en images JPG. Compatible avec tous les appareils et réseaux sociaux. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-svg-en-jpg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur SVG en JPG",
      url: "https://heictojpg.fr/convertir-svg-en-jpg",
      description: "Convertissez vos fichiers vectoriels SVG en images JPG. Compatible avec tous les appareils et réseaux sociaux. Gratuit, sans inscription.",
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
          name: "Le fond du SVG sera-t-il blanc en JPG ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, le format JPG ne supporte pas la transparence. Les zones transparentes de votre SVG seront remplies avec un fond blanc lors de la conversion." },
        },
        {
          "@type": "Question",
          name: "La qualité du texte est-elle préservée ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, notre outil effectue un rendu haute résolution de votre SVG avant la conversion, ce qui garantit que les textes et les détails fins restent nets dans le JPG final." },
        },
        {
          "@type": "Question",
          name: "Puis-je choisir la taille de l'image de sortie ?",
          acceptedAnswer: { "@type": "Answer", text: "L'image est générée à la taille définie dans le fichier SVG. Pour redimensionner le résultat, utilisez ensuite notre outil de redimensionnement d'image." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir SVG en JPG gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos fichiers vectoriels SVG en images JPG universellement compatibles. Idéal pour partager vos logos et illustrations sur les réseaux sociaux, par email, ou les intégrer dans des documents qui n'acceptent pas le SVG.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="SVG &rarr; JPG"
          acceptedFormats=".svg,image/svg+xml"
          acceptLabel="Sélectionner un fichier SVG"
          outputFormat="jpg"
          apiEndpoint="/api/convert-image"
          outputExtension=".jpg"
          acceptedMimeTypes={["image/svg+xml"]}
          acceptedExtensions={[".svg"]}
          errorMessage="Veuillez sélectionner un fichier SVG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir SVG en JPG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format SVG (Scalable Vector Graphics) est le format de référence pour les graphiques vectoriels sur le web. Il est parfait pour les logos, les icônes et les illustrations car il est redimensionnable à l'infini sans perte de qualité.</p>
          <p className="text-gray-600 mb-4">Cependant, le SVG n'est pas accepté partout. La plupart des réseaux sociaux (Instagram, Facebook, Twitter), des clients email, et des logiciels de bureautique (Word, PowerPoint) ne supportent pas le SVG. Vous devez donc convertir vos fichiers SVG en JPG pour les utiliser dans ces contextes.</p>
          <p className="text-gray-600 mb-4">Le JPG est le format d'image le plus universellement supporté. Il est reconnu par absolument tous les appareils, navigateurs, applications et systèmes d'exploitation. En convertissant votre SVG en JPG, vous garantissez que votre image sera visible et utilisable partout.</p>
          <p className="text-gray-600 mb-4">Notre outil effectue un rendu haute qualité de votre SVG avec un fond blanc, puis l'exporte en JPG avec une compression optimisée pour conserver la netteté des textes et des lignes.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le fond du SVG sera-t-il blanc en JPG ?</h3>
            <p className="text-gray-600 mb-4">Oui, le format JPG ne supporte pas la transparence. Les zones transparentes de votre SVG seront remplies avec un fond blanc lors de la conversion.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualité du texte est-elle préservée ?</h3>
            <p className="text-gray-600 mb-4">Oui, notre outil effectue un rendu haute résolution de votre SVG avant la conversion, ce qui garantit que les textes et les détails fins restent nets dans le JPG final.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je choisir la taille de l'image de sortie ?</h3>
            <p className="text-gray-600 mb-4">L'image est générée à la taille définie dans le fichier SVG. Pour redimensionner le résultat, utilisez ensuite notre outil de redimensionnement d'image.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-svg-en-jpg" />
    </div>
    </>
  );
}
