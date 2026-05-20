import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir SVG en WebP Gratuit en Ligne | heictojpg.fr",
  description: "Rasterisez vos fichiers SVG en WebP optimise pour le web. Obtenez des images legeres et compatibles partout. Gratuit et sans inscription.",
  keywords: ["convertir svg en webp","svg to webp","svg webp gratuit","rasteriser svg","svg vers webp"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-svg-en-webp",
    siteName: "heictojpg.fr",
    title: "Convertir SVG en WebP gratuitement en ligne",
    description: "Rasterisez vos fichiers SVG en WebP optimise pour le web. Obtenez des images legeres et compatibles partout. Gratuit et sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-svg-en-webp" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur SVG en WebP",
      url: "https://heictojpg.fr/convertir-svg-en-webp",
      description: "Rasterisez vos fichiers SVG en WebP optimise pour le web. Obtenez des images legeres et compatibles partout. Gratuit et sans inscription.",
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
          name: "Pourquoi convertir un SVG en image raster WebP ?",
          acceptedAnswer: { "@type": "Answer", text: "Le SVG est un format vectoriel ideal pour les logos et icones, mais certains contextes (reseaux sociaux, emails, CMS) n'acceptent que les formats raster. Le WebP offre un excellent compromis entre qualite et poids pour le web." },
        },
        {
          "@type": "Question",
          name: "Quelle est la resolution de l'image WebP generee ?",
          acceptedAnswer: { "@type": "Answer", text: "L'image WebP est generee en respectant les dimensions definies dans le fichier SVG. Si aucune dimension n'est specifiee, une taille par defaut est appliquee pour garantir une bonne qualite." },
        },
        {
          "@type": "Question",
          name: "Le fond transparent du SVG est-il conserve en WebP ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, le format WebP prend en charge la transparence. Si votre SVG possede un fond transparent, celui-ci sera conserve dans le fichier WebP genere." },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir SVG en WebP gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Rasterisez vos fichiers SVG en images WebP optimisees pour le web. Obtenez des images legeres et universellement compatibles a partir de vos illustrations vectorielles.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="SVG &rarr; WebP"
          acceptedFormats=".svg,image/svg+xml"
          acceptLabel="Selectionner un fichier SVG"
          outputFormat="webp"
          apiEndpoint="/api/convert-image"
          outputExtension=".webp"
          acceptedMimeTypes={["image/svg+xml"]}
          acceptedExtensions={[".svg"]}
          errorMessage="Veuillez selectionner un fichier SVG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir SVG en WebP ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le SVG est un format vectoriel parfait pour les logos, icones et illustrations. Cependant, de nombreuses plateformes (reseaux sociaux, services d'emailing, certains CMS) n'acceptent pas les fichiers SVG et exigent un format raster comme le WebP, le JPG ou le PNG.</p>
          <p className="text-gray-600 mb-4">Le WebP est le format raster ideal pour le web : il offre une compression superieure au JPG et au PNG, tout en supportant la transparence. Convertir vos SVG en WebP vous permet de les utiliser partout avec un poids minimal.</p>
          <p className="text-gray-600 mb-4">Cette conversion est particulierement utile pour preparer des visuels destines a des campagnes publicitaires, des articles de blog ou des publications sur les reseaux sociaux, ou le format SVG n'est pas supporte.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi convertir un SVG en image raster WebP ?</h3>
            <p className="text-gray-600 mb-4">Le SVG est un format vectoriel ideal pour les logos et icones, mais certains contextes (reseaux sociaux, emails, CMS) n'acceptent que les formats raster. Le WebP offre un excellent compromis entre qualite et poids pour le web.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle est la resolution de l'image WebP generee ?</h3>
            <p className="text-gray-600 mb-4">L'image WebP est generee en respectant les dimensions definies dans le fichier SVG. Si aucune dimension n'est specifiee, une taille par defaut est appliquee pour garantir une bonne qualite.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le fond transparent du SVG est-il conserve en WebP ?</h3>
            <p className="text-gray-600 mb-4">Oui, le format WebP prend en charge la transparence. Si votre SVG possede un fond transparent, celui-ci sera conserve dans le fichier WebP genere.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-svg-en-webp" />
    </div>
    </>
  );
}
