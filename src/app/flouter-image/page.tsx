import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Flouter une image en ligne gratuit | heictojpg.fr",
  description: "Appliquez un effet de flou à vos images. Idéal pour la vie privée, l'anonymisation ou l'effet artistique. Gratuit, sans inscription.",
  keywords: ["flouter image","flou image en ligne","blur image gratuit","flouter photo","anonymiser image"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/flouter-image",
    siteName: "heictojpg.fr",
    title: "Flouter une image gratuitement en ligne",
    description: "Appliquez un effet de flou à vos images. Idéal pour la vie privée, l'anonymisation ou l'effet artistique. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/flouter-image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Flouter une image gratuitement",
      url: "https://heictojpg.fr/flouter-image",
      description: "Appliquez un effet de flou à vos images. Idéal pour la vie privée, l'anonymisation ou l'effet artistique. Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Puis-je flouter seulement une partie de l'image ?", acceptedAnswer: { "@type": "Answer", text: "Notre outil floute l'image entière. Pour flouter uniquement une zone (un visage par exemple), recadrez d'abord la zone, floutez-la, puis recomposez l'image dans un logiciel d'édition." } },
        { "@type": "Question", name: "Quel niveau de flou pour anonymiser un visage ?", acceptedAnswer: { "@type": "Answer", text: "Un sigma de 15 à 25 est généralement suffisant pour rendre un visage méconnaissable. Un sigma de 30+ rend l'image complètement illisible." } }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Flouter une image gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Appliquez un effet de flou gaussien à vos images en un clic. Ajustez l'intensité du flou selon vos besoins. Idéal pour protéger la vie privée, anonymiser des visages, ou créer des arrière-plans artistiques.</p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi flouter une image ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le floutage d'image est utilisé dans de nombreux contextes. Le plus courant est la protection de la vie privée : flouter les visages, les plaques d'immatriculation, les adresses ou les informations personnelles visibles sur une photo avant de la publier en ligne.</p>
          <p className="text-gray-600 mb-4">En photographie et design, le flou est utilisé pour créer des arrière-plans doux (effet bokeh), attirer l'attention sur un élément précis, ou préparer des images d'arrière-plan pour des sites web et des présentations.</p>
          <p className="text-gray-600 mb-4">Notre outil applique un flou gaussien professionnel, le type de flou le plus couramment utilisé en traitement d'image. L'intensité est réglable de 1 (flou très léger) à 50 (flou extrême qui rend l'image méconnaissable).</p>
          <p className="text-gray-600 mb-4">Le flou gaussien est non destructif dans le sens où il n'ajoute pas d'artefacts : il adoucit simplement les transitions entre les pixels de manière naturelle et harmonieuse.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je flouter seulement une partie de l'image ?</h3>
            <p className="text-gray-600 mb-4">Notre outil floute l'image entière. Pour flouter uniquement une zone (un visage par exemple), recadrez d'abord la zone, floutez-la, puis recomposez l'image dans un logiciel d'édition.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quel niveau de flou pour anonymiser un visage ?</h3>
            <p className="text-gray-600 mb-4">Un sigma de 15 à 25 est généralement suffisant pour rendre un visage méconnaissable. Un sigma de 30+ rend l'image complètement illisible.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/flouter-image" />
    </div>
    </>
  );
}
