import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convertir ICO en JPG Gratuit en Ligne | heictojpg.fr",
  description: "Extrayez et convertissez vos fichiers ICO (favicon) en JPG universel. Ouvrez et partagez vos icones facilement. Gratuit et sans inscription.",
  keywords: ["convertir ico en jpg","ico to jpg","ico jpg gratuit","favicon en jpg","ico vers jpg"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-ico-en-jpg",
    siteName: "heictojpg.fr",
    title: "Convertir ICO en JPG gratuitement en ligne",
    description: "Extrayez et convertissez vos fichiers ICO (favicon) en JPG universel. Ouvrez et partagez vos icones facilement. Gratuit et sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-ico-en-jpg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur ICO en JPG",
      url: "https://heictojpg.fr/convertir-ico-en-jpg",
      description: "Extrayez et convertissez vos fichiers ICO (favicon) en JPG universel. Ouvrez et partagez vos icones facilement. Gratuit et sans inscription.",
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
          name: "Qu'est-ce qu'un fichier ICO ?",
          acceptedAnswer: { "@type": "Answer", text: "Le format ICO est utilise principalement pour les favicons (icones de sites web) et les icones d'applications Windows. Il peut contenir plusieurs tailles d'image dans un seul fichier (16x16, 32x32, 48x48, etc.)." },
        },
        {
          "@type": "Question",
          name: "Pourquoi convertir un fichier ICO en JPG ?",
          acceptedAnswer: { "@type": "Answer", text: "Les fichiers ICO ne sont pas facilement ouvrables par la plupart des logiciels de visualisation d'images. En les convertissant en JPG, vous pouvez les ouvrir, les modifier et les partager avec n'importe quel appareil ou logiciel." },
        },
        {
          "@type": "Question",
          name: "La transparence est-elle conservee lors de la conversion ICO en JPG ?",
          acceptedAnswer: { "@type": "Answer", text: "Non, le format JPG ne supporte pas la transparence. Les zones transparentes de votre fichier ICO seront remplacees par un fond blanc. Si vous avez besoin de conserver la transparence, preferez une conversion en PNG." },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir ICO en JPG", href: "/convertir-ico-en-jpg" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir ICO en JPG gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Extrayez vos fichiers ICO (favicons, icones Windows) et convertissez-les en JPG universel. Le format JPG est lisible par tous les appareils et logiciels, ce qui facilite le partage et la modification de vos icones.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="ICO &rarr; JPG"
          acceptedFormats=".ico,image/x-icon"
          acceptLabel="Selectionner un fichier ICO"
          outputFormat="jpg"
          apiEndpoint="/api/convert-image"
          outputExtension=".jpg"
          acceptedMimeTypes={["image/x-icon","image/vnd.microsoft.icon"]}
          acceptedExtensions={[".ico"]}
          errorMessage="Veuillez selectionner un fichier ICO valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir ICO en JPG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format ICO est un format specialise utilise pour les favicons de sites web et les icones d'applications Windows. Il n'est pas concu pour etre ouvert ou modifie avec des logiciels classiques de traitement d'image. Si vous souhaitez visualiser ou retoucher une icone, la conversion en JPG est la solution la plus simple.</p>
          <p className="text-gray-600 mb-4">Le JPG est le format d'image le plus universel au monde. Il est supporte par tous les systemes d'exploitation, navigateurs, logiciels de retouche et applications de partage. Convertir un ICO en JPG vous permet de l'utiliser dans n'importe quel contexte.</p>
          <p className="text-gray-600 mb-4">Cette conversion est particulierement utile pour les designers qui souhaitent extraire des favicons pour les inclure dans des presentations, des documents ou des maquettes, ou pour archiver des icones dans un format standard.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Qu'est-ce qu'un fichier ICO ?</h3>
            <p className="text-gray-600 mb-4">Le format ICO est utilise principalement pour les favicons (icones de sites web) et les icones d'applications Windows. Il peut contenir plusieurs tailles d'image dans un seul fichier (16x16, 32x32, 48x48, etc.).</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi convertir un fichier ICO en JPG ?</h3>
            <p className="text-gray-600 mb-4">Les fichiers ICO ne sont pas facilement ouvrables par la plupart des logiciels de visualisation d'images. En les convertissant en JPG, vous pouvez les ouvrir, les modifier et les partager avec n'importe quel appareil ou logiciel.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La transparence est-elle conservee lors de la conversion ICO en JPG ?</h3>
            <p className="text-gray-600 mb-4">Non, le format JPG ne supporte pas la transparence. Les zones transparentes de votre fichier ICO seront remplacees par un fond blanc. Si vous avez besoin de conserver la transparence, preferez une conversion en PNG.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-ico-en-jpg" />
    </div>
    </>
  );
}
