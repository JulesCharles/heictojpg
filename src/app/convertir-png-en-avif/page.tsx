import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir PNG en AVIF en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images PNG en AVIF pour des fichiers ultra-legers avec transparence. Le format le plus performant du web. Gratuit.",
  keywords: ["convertir png en avif","png to avif","png avif gratuit","png vers avif"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-png-en-avif",
    siteName: "heictojpg.fr",
    title: "Convertir PNG en AVIF gratuitement en ligne",
    description: "Convertissez vos images PNG en AVIF pour des fichiers ultra-legers avec transparence. Le format le plus performant du web. Gratuit.",
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
      description: "Convertissez vos images PNG en AVIF pour des fichiers ultra-legers avec transparence. Le format le plus performant du web. Gratuit.",
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
          name: "La transparence est-elle conservee ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, l'AVIF supporte le canal alpha (transparence) comme le PNG. Vos images avec fond transparent seront parfaitement converties." },
        },
        {
          "@type": "Question",
          name: "La compression est-elle avec ou sans perte ?",
          acceptedAnswer: { "@type": "Answer", text: "Notre outil utilise une compression avec perte legere (qualite 80%) pour obtenir les meilleurs gains de taille. La difference avec l'original est imperceptible a l'oeil nu." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir PNG en AVIF gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos images PNG en AVIF pour des fichiers jusqu'a 80% plus legers tout en conservant la transparence et une qualite exceptionnelle. L'AVIF est le futur de l'image sur le web.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="PNG &rarr; AVIF"
          acceptedFormats=".png,image/png"
          acceptLabel="Selectionner un fichier PNG"
          outputFormat="avif"
          apiEndpoint="/api/convert-image"
          outputExtension=".avif"
          acceptedMimeTypes={["image/png"]}
          acceptedExtensions={[".png"]}
          errorMessage="Veuillez selectionner un fichier PNG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir PNG en AVIF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">La conversion PNG vers AVIF est l'une des plus impressionnantes en termes de reduction de taille. Un PNG de 2 Mo peut devenir un AVIF de 200 a 400 Ko, soit une reduction de 80 a 90%, tout en conservant la transparence et une qualite visuelle quasi identique.</p>
          <p className="text-gray-600 mb-4">L'AVIF combine le meilleur des deux mondes : la compression avancee du JPG nouvelle generation et le support de la transparence du PNG. C'est le format ideal pour les icones, logos, graphiques et illustrations web qui necessitent de la transparence sans le poids du PNG.</p>
          <p className="text-gray-600 mb-4">Pour les developpeurs web, passer du PNG a l'AVIF est l'optimisation la plus impactante disponible aujourd'hui. Les gains en temps de chargement sont immediats et significatifs.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La transparence est-elle conservee ?</h3>
            <p className="text-gray-600 mb-4">Oui, l'AVIF supporte le canal alpha (transparence) comme le PNG. Vos images avec fond transparent seront parfaitement converties.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La compression est-elle avec ou sans perte ?</h3>
            <p className="text-gray-600 mb-4">Notre outil utilise une compression avec perte legere (qualite 80%) pour obtenir les meilleurs gains de taille. La difference avec l'original est imperceptible a l'oeil nu.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nos autres outils</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; JPG</h3>
            <p className="text-sm text-gray-600">Convertissez vos photos iPhone.</p>
          </Link>
          <Link href="/compresser-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Compresser image</h3>
            <p className="text-sm text-gray-600">Reduisez le poids de vos images.</p>
          </Link>
          <Link href="/redimensionner-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Redimensionner</h3>
            <p className="text-sm text-gray-600">Changez la taille de vos images.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
