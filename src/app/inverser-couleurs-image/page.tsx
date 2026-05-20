import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Inverser les couleurs d'une image gratuit | heictojpg.fr",
  description: "Inversez les couleurs de vos images pour créer un effet négatif. Outil gratuit, rapide, sans inscription.",
  keywords: ["inverser couleurs image","négatif photo","inverser image en ligne","negative image","couleurs inversées"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/inverser-couleurs-image",
    siteName: "heictojpg.fr",
    title: "Inverser les couleurs d'une image gratuitement",
    description: "Inversez les couleurs de vos images pour créer un effet négatif. Outil gratuit, rapide, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/inverser-couleurs-image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Inverser les couleurs d'une image",
      url: "https://heictojpg.fr/inverser-couleurs-image",
      description: "Inversez les couleurs de vos images pour créer un effet négatif. Outil gratuit, rapide, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Puis-je revenir aux couleurs originales ?", acceptedAnswer: { "@type": "Answer", text: "Oui ! Il suffit d'inverser à nouveau l'image inversée pour retrouver les couleurs originales. L'inversion est une opération parfaitement réversible." } },
        { "@type": "Question", name: "L'inversion fonctionne-t-elle avec les images en noir et blanc ?", acceptedAnswer: { "@type": "Answer", text: "Oui, l'inversion d'une image en noir et blanc produit un négatif classique : les zones sombres deviennent claires et vice versa." } }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Inverser les couleurs", href: "/inverser-couleurs-image" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Inverser les couleurs d'une image</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Créez un effet négatif en inversant toutes les couleurs de votre image. Le blanc devient noir, le bleu devient orange, le rouge devient cyan. Un effet artistique saisissant en un clic.</p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">L'effet négatif en photographie</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">L'inversion des couleurs, aussi appelée effet négatif, transforme chaque couleur de l'image en sa couleur complémentaire. Le blanc (255,255,255) devient noir (0,0,0), le rouge (255,0,0) devient cyan (0,255,255), et ainsi de suite.</p>
          <p className="text-gray-600 mb-4">Cet effet rappelle les négatifs de pellicule photographique utilisées avant l'ère numérique. Il crée un rendu visuel unique et souvent surréal qui peut être utilisé à des fins artistiques, pour des affiches, des couvertures d'album ou du design graphique expérimental.</p>
          <p className="text-gray-600 mb-4">L'inversion des couleurs est aussi utilisée en accessibilité : certaines personnes trouvent plus confortable de lire du texte clair sur fond sombre, et l'inversion d'une capture d'écran peut faciliter la lecture.</p>
          <p className="text-gray-600 mb-4">En science et en médecine, l'inversion des couleurs est parfois utilisée pour mieux visualiser certains détails dans les images microscopiques ou les radiographies.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je revenir aux couleurs originales ?</h3>
            <p className="text-gray-600 mb-4">Oui ! Il suffit d'inverser à nouveau l'image inversée pour retrouver les couleurs originales. L'inversion est une opération parfaitement réversible.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">L'inversion fonctionne-t-elle avec les images en noir et blanc ?</h3>
            <p className="text-gray-600 mb-4">Oui, l'inversion d'une image en noir et blanc produit un négatif classique : les zones sombres deviennent claires et vice versa.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/inverser-couleurs-image" />
    </div>
    </>
  );
}
