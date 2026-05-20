import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir PNG en AVIF en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images PNG en AVIF pour des fichiers ultra-légers avec transparence. Le format le plus performant du web. Gratuit.",
  keywords: ["convertir png en avif","png to avif","png avif gratuit","png vers avif"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-png-en-avif",
    siteName: "heictojpg.fr",
    title: "Convertir PNG en AVIF gratuitement en ligne",
    description: "Convertissez vos images PNG en AVIF pour des fichiers ultra-légers avec transparence. Le format le plus performant du web. Gratuit.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-png-en-avif" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur PNG en AVIF",
      url: "https://heictojpg.fr/convertir-png-en-avif",
      description: "Convertissez vos images PNG en AVIF pour des fichiers ultra-légers avec transparence. Le format le plus performant du web. Gratuit.",
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
          name: "La transparence est-elle conservée ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, l'AVIF supporte le canal alpha (transparence) comme le PNG. Vos images avec fond transparent seront parfaitement converties." },
        },
        {
          "@type": "Question",
          name: "La compression est-elle avec ou sans perte ?",
          acceptedAnswer: { "@type": "Answer", text: "Notre outil utilise une compression avec perte légère (qualité 80%) pour obtenir les meilleurs gains de taille. La différence avec l'original est imperceptible à l'œil nu." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir PNG en AVIF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images PNG en AVIF pour des fichiers jusqu'à 80% plus légers tout en conservant la transparence et une qualité exceptionnelle. L'AVIF est le futur de l'image sur le web.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="PNG &rarr; AVIF"
          acceptedFormats=".png,image/png"
          acceptLabel="Sélectionner un fichier PNG"
          outputFormat="avif"
          apiEndpoint="/api/convert-image"
          outputExtension=".avif"
          acceptedMimeTypes={["image/png"]}
          acceptedExtensions={[".png"]}
          errorMessage="Veuillez sélectionner un fichier PNG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir PNG en AVIF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">La conversion PNG vers AVIF est l'une des plus impressionnantes en termes de réduction de taille. Un PNG de 2 Mo peut devenir un AVIF de 200 à 400 Ko, soit une réduction de 80 à 90%, tout en conservant la transparence et une qualité visuelle quasi identique.</p>
          <p className="text-gray-600 mb-4">L'AVIF combine le meilleur des deux mondes : la compression avancée du JPG nouvelle génération et le support de la transparence du PNG. C'est le format idéal pour les icônes, logos, graphiques et illustrations web qui nécessitent de la transparence sans le poids du PNG.</p>
          <p className="text-gray-600 mb-4">Pour les développeurs web, passer du PNG à l'AVIF est l'optimisation la plus impactante disponible aujourd'hui. Les gains en temps de chargement sont immédiats et significatifs.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La transparence est-elle conservée ?</h3>
            <p className="text-gray-600 mb-4">Oui, l'AVIF supporte le canal alpha (transparence) comme le PNG. Vos images avec fond transparent seront parfaitement converties.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La compression est-elle avec ou sans perte ?</h3>
            <p className="text-gray-600 mb-4">Notre outil utilise une compression avec perte légère (qualité 80%) pour obtenir les meilleurs gains de taille. La différence avec l'original est imperceptible à l'œil nu.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-png-en-avif" />
    </div>
    </>
  );
}
