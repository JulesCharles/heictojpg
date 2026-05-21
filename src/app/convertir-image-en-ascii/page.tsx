import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Convertir Image en ASCII Art Gratuit en Ligne | heictojpg.fr",
  description: "Transformez vos photos en art ASCII en ligne. Convertissez n'importe quelle image en texte artistique avec des caracteres. Gratuit, sans inscription.",
  keywords: ["ascii art","convertir image ascii","image en texte","ascii art en ligne","generateur ascii","photo ascii"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-image-en-ascii",
    siteName: "heictojpg.fr",
    title: "Convertir Image en ASCII Art Gratuit en Ligne",
    description: "Transformez vos photos en art ASCII en ligne. Convertissez n'importe quelle image en texte artistique avec des caracteres. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-image-en-ascii" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertir Image en ASCII Art",
      url: "https://heictojpg.fr/convertir-image-en-ascii",
      description: "Transformez vos photos en art ASCII en ligne. Convertissez n'importe quelle image en texte artistique avec des caracteres. Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Qu'est-ce que l'ASCII art ?", acceptedAnswer: { "@type": "Answer", text: "L'ASCII art est une forme d'art graphique qui utilise des caracteres de texte pour representer des images. Chaque caractere correspond a un niveau de luminosite, creant ainsi une representation textuelle de l'image originale." } },
        { "@type": "Question", name: "Comment obtenir un meilleur resultat ?", acceptedAnswer: { "@type": "Answer", text: "Les images avec un bon contraste et des formes bien definies donnent les meilleurs resultats. Augmentez la largeur en caracteres pour plus de details, ou reduisez-la pour un rendu plus abstrait." } },
        { "@type": "Question", name: "Puis-je utiliser l'ASCII art genere librement ?", acceptedAnswer: { "@type": "Answer", text: "Oui, le texte ASCII genere vous appartient entierement. Vous pouvez le copier, le partager, l'integrer dans du code, le poster sur des forums ou l'utiliser comme bon vous semble." } },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir Image en ASCII Art", href: "/convertir-image-en-ascii" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir une image en ASCII Art</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Transformez vos photos en oeuvres d'art textuel ASCII. Ajustez la largeur pour plus ou moins de details et telechargez le resultat en fichier texte.</p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Qu'est-ce que l'ASCII art ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">L'ASCII art est une technique artistique qui remonte aux premiers jours de l'informatique, quand les ecrans ne pouvaient afficher que du texte. Les artistes ont alors commence a utiliser les caracteres du clavier pour dessiner des images, creant un style unique et reconnaissable entre mille.</p>
          <p className="text-gray-600 mb-4">Notre convertisseur analyse la luminosite de chaque pixel de votre image et le remplace par un caractere ASCII correspondant. Les zones sombres utilisent des caracteres denses comme @ ou #, tandis que les zones claires utilisent des caracteres legers comme le point ou l'espace.</p>
          <p className="text-gray-600 mb-4">L'ASCII art est aujourd'hui utilise dans de nombreux contextes : signatures d'emails, commentaires dans le code source, art generatif, decoration de terminaux, et bien sur comme forme d'expression artistique a part entiere. C'est aussi un excellent moyen de partager des images dans des environnements ou seul le texte brut est disponible.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Qu'est-ce que l'ASCII art ?</h3>
            <p className="text-gray-600 mb-4">L'ASCII art est une forme d'art graphique qui utilise des caracteres de texte pour representer des images. Chaque caractere correspond a un niveau de luminosite, creant ainsi une representation textuelle de l'image originale.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment obtenir un meilleur resultat ?</h3>
            <p className="text-gray-600 mb-4">Les images avec un bon contraste et des formes bien definies donnent les meilleurs resultats. Augmentez la largeur en caracteres pour plus de details, ou reduisez-la pour un rendu plus abstrait.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je utiliser l'ASCII art genere librement ?</h3>
            <p className="text-gray-600 mb-4">Oui, le texte ASCII genere vous appartient entierement. Vous pouvez le copier, le partager, l'integrer dans du code, le poster sur des forums ou l'utiliser comme bon vous semble.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-image-en-ascii" />
    </div>
    </>
  );
}
