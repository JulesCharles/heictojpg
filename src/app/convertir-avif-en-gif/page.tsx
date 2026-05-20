import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convertir AVIF en GIF Gratuit en Ligne | heictojpg.fr",
  description: "Convertissez vos images AVIF en GIF pour un partage universel. Le format GIF est compatible avec tous les appareils et navigateurs. Gratuit.",
  keywords: ["convertir avif en gif","avif to gif","avif gif gratuit","avif vers gif","convertisseur avif gif"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-avif-en-gif",
    siteName: "heictojpg.fr",
    title: "Convertir AVIF en GIF gratuitement en ligne",
    description: "Convertissez vos images AVIF en GIF pour un partage universel. Le format GIF est compatible avec tous les appareils et navigateurs. Gratuit.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-avif-en-gif" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur AVIF en GIF",
      url: "https://heictojpg.fr/convertir-avif-en-gif",
      description: "Convertissez vos images AVIF en GIF pour un partage universel. Le format GIF est compatible avec tous les appareils et navigateurs. Gratuit.",
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
          name: "Pourquoi convertir un fichier AVIF en GIF ?",
          acceptedAnswer: { "@type": "Answer", text: "Le format GIF est universellement supporté depuis plus de 35 ans. Si vous devez partager une image AVIF sur une plateforme ou un appareil ancien qui ne supporte pas l'AVIF, le GIF est une valeur sûre." },
        },
        {
          "@type": "Question",
          name: "La conversion AVIF vers GIF réduit-elle la qualité ?",
          acceptedAnswer: { "@type": "Answer", text: "Le GIF est limité à 256 couleurs maximum. Pour des photos complexes, une perte de qualité est possible. En revanche, pour des illustrations, logos ou graphiques simples, le résultat est excellent." },
        },
        {
          "@type": "Question",
          name: "Le GIF obtenu sera-t-il animé ?",
          acceptedAnswer: { "@type": "Answer", text: "Non, la conversion d'une image AVIF statique produit un GIF statique. Seul un fichier source contenant plusieurs frames peut générer un GIF animé." },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir AVIF en GIF", href: "/convertir-avif-en-gif" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir AVIF en GIF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images AVIF en GIF pour les partager facilement sur n'importe quel appareil ou plateforme. Le format GIF est reconnu partout depuis des décennies, ce qui en fait un choix idéal pour un partage universel.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="AVIF &rarr; GIF"
          acceptedFormats=".avif,image/avif"
          acceptLabel="Sélectionner un fichier AVIF"
          outputFormat="gif"
          apiEndpoint="/api/convert-image"
          outputExtension=".gif"
          acceptedMimeTypes={["image/avif"]}
          acceptedExtensions={[".avif"]}
          errorMessage="Veuillez sélectionner un fichier AVIF valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir AVIF en GIF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">L'AVIF est un format d'image moderne offrant une compression exceptionnelle, mais il n'est pas encore reconnu par tous les logiciels et plateformes. Si vous devez partager une image avec des utilisateurs dont les appareils ou navigateurs sont plus anciens, le GIF reste une valeur sûre universellement compatible.</p>
          <p className="text-gray-600 mb-4">Le format GIF est particulièrement adapté aux illustrations, logos et graphiques avec des aplats de couleurs. Il est supporté par la quasi-totalité des applications de messagerie, réseaux sociaux et logiciels de bureautique.</p>
          <p className="text-gray-600 mb-4">Notre outil convertit vos fichiers AVIF en GIF directement dans votre navigateur, sans installation de logiciel. C'est rapide, gratuit et vos fichiers restent privés.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi convertir un fichier AVIF en GIF ?</h3>
            <p className="text-gray-600 mb-4">Le format GIF est universellement supporté depuis plus de 35 ans. Si vous devez partager une image AVIF sur une plateforme ou un appareil ancien qui ne supporte pas l'AVIF, le GIF est une valeur sûre.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La conversion AVIF vers GIF réduit-elle la qualité ?</h3>
            <p className="text-gray-600 mb-4">Le GIF est limité à 256 couleurs maximum. Pour des photos complexes, une perte de qualité est possible. En revanche, pour des illustrations, logos ou graphiques simples, le résultat est excellent.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le GIF obtenu sera-t-il animé ?</h3>
            <p className="text-gray-600 mb-4">Non, la conversion d'une image AVIF statique produit un GIF statique. Seul un fichier source contenant plusieurs frames peut générer un GIF animé.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-avif-en-gif" />
    </div>
    </>
  );
}
