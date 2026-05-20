import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir PNG en TIFF Gratuit en Ligne | heictojpg.fr",
  description: "Convertissez vos images PNG en TIFF gratuitement. Idéal pour l'impression professionnelle et l'archivage de haute qualité. Sans inscription.",
  keywords: ["convertir png en tiff","png to tiff","png tiff gratuit","transformer png en tiff","png vers tiff"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-png-en-tiff",
    siteName: "heictojpg.fr",
    title: "Convertir PNG en TIFF gratuitement en ligne",
    description: "Convertissez vos images PNG en TIFF gratuitement. Idéal pour l'impression professionnelle et l'archivage de haute qualité. Sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-png-en-tiff" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur PNG en TIFF",
      url: "https://heictojpg.fr/convertir-png-en-tiff",
      description: "Convertissez vos images PNG en TIFF gratuitement. Idéal pour l'impression professionnelle et l'archivage de haute qualité.",
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
          name: "Quand utiliser le format TIFF plutôt que PNG ?",
          acceptedAnswer: { "@type": "Answer", text: "Le TIFF est le format de référence dans l'industrie de l'impression et de la publication professionnelle. Il supporte les profils colorimétriques CMJN, les calques et les métadonnées avancées. Utilisez le TIFF lorsque vous préparez des fichiers pour l'imprimerie ou l'archivage à long terme." },
        },
        {
          "@type": "Question",
          name: "Le fichier TIFF sera-t-il plus volumineux que le PNG ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, en général. Le TIFF sans compression est plus volumineux que le PNG, car le PNG utilise une compression sans perte efficace. Cependant, le TIFF offre des fonctionnalités supplémentaires (calques, CMJN) qui justifient cette taille dans un contexte professionnel." },
        },
        {
          "@type": "Question",
          name: "La qualité est-elle conservée lors de la conversion ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, la conversion de PNG vers TIFF est sans perte. Les deux formats supportent la compression sans perte, donc votre image conserve exactement la même qualité pixel par pixel après conversion." },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir PNG en TIFF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images PNG en TIFF pour l'impression professionnelle et l'archivage. Le format TIFF est le standard de l'industrie graphique et de l'édition.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="PNG &rarr; TIFF"
          acceptedFormats=".png,image/png"
          acceptLabel="Sélectionner un fichier PNG"
          outputFormat="tiff"
          apiEndpoint="/api/convert-image"
          outputExtension=".tiff"
          acceptedMimeTypes={["image/png"]}
          acceptedExtensions={[".png"]}
          errorMessage="Veuillez sélectionner un fichier PNG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir PNG en TIFF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format TIFF (Tagged Image File Format) est le standard dans l'industrie de l'impression et de l'édition professionnelle. Si vous préparez des visuels pour l'imprimerie, les agences de communication ou les maisons d'édition exigeront souvent des fichiers au format TIFF.</p>
          <p className="text-gray-600 mb-4">Contrairement au PNG qui est optimisé pour le web, le TIFF supporte les espaces colorimétriques CMJN (Cyan, Magenta, Jaune, Noir) utilisés en impression. Il permet également de stocker des calques et des métadonnées avancées, ce qui en fait un format incontournable pour les professionnels de l'image.</p>
          <p className="text-gray-600 mb-4">Le TIFF est aussi un excellent format d'archivage. Sa large compatibilité avec les logiciels professionnels (Photoshop, InDesign, Illustrator) et sa capacité à conserver l'intégralité des données de l'image en font un choix fiable pour la conservation à long terme de vos fichiers.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quand utiliser le format TIFF plutôt que PNG ?</h3>
            <p className="text-gray-600 mb-4">Le TIFF est le format de référence dans l'industrie de l'impression et de la publication professionnelle. Il supporte les profils colorimétriques CMJN, les calques et les métadonnées avancées. Utilisez le TIFF lorsque vous préparez des fichiers pour l'imprimerie ou l'archivage à long terme.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le fichier TIFF sera-t-il plus volumineux que le PNG ?</h3>
            <p className="text-gray-600 mb-4">Oui, en général. Le TIFF sans compression est plus volumineux que le PNG, car le PNG utilise une compression sans perte efficace. Cependant, le TIFF offre des fonctionnalités supplémentaires (calques, CMJN) qui justifient cette taille dans un contexte professionnel.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualité est-elle conservée lors de la conversion ?</h3>
            <p className="text-gray-600 mb-4">Oui, la conversion de PNG vers TIFF est sans perte. Les deux formats supportent la compression sans perte, donc votre image conserve exactement la même qualité pixel par pixel après conversion.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-png-en-tiff" />
    </div>
    </>
  );
}
