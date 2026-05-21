import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Comparer Deux Images Avant/Apres Gratuit en Ligne | heictojpg.fr",
  description: "Comparez deux images cote a cote avec un curseur avant/apres interactif. Ideal pour verifier la compression, les retouches ou les changements de format. Gratuit, sans inscription.",
  keywords: ["comparer images","avant apres image","comparaison images en ligne","slider avant apres","diff images gratuit"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/comparer-images",
    siteName: "heictojpg.fr",
    title: "Comparer deux images avant/apres gratuitement en ligne",
    description: "Comparez deux images avec un curseur interactif avant/apres. Ideal pour la compression, les retouches et les conversions de format.",
  },
  alternates: { canonical: "https://heictojpg.fr/comparer-images" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Comparer deux images avant/apres",
      url: "https://heictojpg.fr/comparer-images",
      description: "Comparez deux images avec un curseur interactif avant/apres. Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Comment fonctionne le comparateur d'images ?", acceptedAnswer: { "@type": "Answer", text: "Chargez deux images (avant et apres), puis faites glisser le curseur horizontal pour reveler progressivement l'une ou l'autre image. Cela permet de voir les differences de maniere intuitive." } },
        { "@type": "Question", name: "Mes images sont-elles envoyees sur un serveur ?", acceptedAnswer: { "@type": "Answer", text: "Non, cet outil fonctionne entierement dans votre navigateur. Vos images ne quittent jamais votre appareil, aucune donnee n'est envoyee a un serveur." } },
        { "@type": "Question", name: "Quels formats d'images sont supportes ?", acceptedAnswer: { "@type": "Answer", text: "Tous les formats supportes par votre navigateur : JPEG, PNG, WebP, GIF, BMP, SVG, etc." } },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Comparer des images", href: "/comparer-images" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Comparer deux images avant / apres</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Chargez deux images et utilisez le curseur interactif pour les comparer visuellement. Parfait pour evaluer l'impact d'une compression, d'une retouche ou d'un changement de format.</p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi comparer des images ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">La comparaison visuelle d'images est essentielle pour evaluer la qualite apres une compression. Lorsque vous convertissez une image PNG en JPEG ou WebP, il est important de verifier que la perte de qualite reste acceptable. Notre curseur avant/apres rend cette verification intuitive et instantanee.</p>
          <p className="text-gray-600 mb-4">Les photographes et retoucheurs utilisent ce type de comparaison pour montrer le resultat de leur travail : corrections de couleurs, suppression d'elements, amelioration de la nettete, etc. Le curseur permet de reveler progressivement les modifications.</p>
          <p className="text-gray-600 mb-4">En developpement web, comparer des captures d'ecran avant et apres un changement de design permet de detecter rapidement les regressions visuelles ou de valider une amelioration CSS.</p>
          <p className="text-gray-600 mb-4">Cet outil fonctionne entierement dans votre navigateur. Vos images ne sont jamais envoyees a un serveur, garantissant une confidentialite totale et un fonctionnement instantane.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment fonctionne le comparateur d'images ?</h3>
            <p className="text-gray-600 mb-4">Chargez deux images (avant et apres), puis faites glisser le curseur horizontal pour reveler progressivement l'une ou l'autre image. Cela permet de voir les differences de maniere intuitive.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mes images sont-elles envoyees sur un serveur ?</h3>
            <p className="text-gray-600 mb-4">Non, cet outil fonctionne entierement dans votre navigateur. Vos images ne quittent jamais votre appareil, aucune donnee n'est envoyee a un serveur.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quels formats d'images sont supportes ?</h3>
            <p className="text-gray-600 mb-4">Tous les formats supportes par votre navigateur : JPEG, PNG, WebP, GIF, BMP, SVG, etc.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/comparer-images" />
    </div>
    </>
  );
}
