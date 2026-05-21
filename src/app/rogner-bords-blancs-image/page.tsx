import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Rogner les Bords Blancs d'une Image Gratuit en Ligne | heictojpg.fr",
  description: "Supprimez automatiquement les bords blancs et les marges inutiles de vos images. Ideal pour les scans, captures d'ecran et photos de documents. Gratuit, sans inscription.",
  keywords: ["rogner bords blancs","supprimer marges image","trim image en ligne","recadrer bords blancs","auto crop image gratuit"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/rogner-bords-blancs-image",
    siteName: "heictojpg.fr",
    title: "Rogner les bords blancs d'une image gratuitement en ligne",
    description: "Supprimez automatiquement les bords blancs et les marges inutiles de vos images. Ideal pour les scans, captures d'ecran et photos de documents.",
  },
  alternates: { canonical: "https://heictojpg.fr/rogner-bords-blancs-image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Rogner les bords blancs d'une image",
      url: "https://heictojpg.fr/rogner-bords-blancs-image",
      description: "Supprimez automatiquement les bords blancs et les marges inutiles de vos images. Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Comment fonctionne la suppression des bords blancs ?", acceptedAnswer: { "@type": "Answer", text: "L'outil analyse les pixels sur les bords de l'image et supprime automatiquement les lignes de pixels dont la couleur est proche du blanc, selon le seuil que vous definissez. Plus le seuil est eleve, plus l'outil est agressif dans la detection." } },
        { "@type": "Question", name: "Cela fonctionne-t-il avec des bords colores ?", acceptedAnswer: { "@type": "Answer", text: "L'outil detecte les bords uniformes, pas uniquement blancs. Si vos bords sont d'une couleur unie (gris, beige, etc.), augmentez le seuil pour les detecter. Cependant, l'outil est optimise pour les bords blancs ou tres clairs." } },
        { "@type": "Question", name: "Mes images sont-elles envoyees sur un serveur ?", acceptedAnswer: { "@type": "Answer", text: "L'image est envoyee temporairement sur notre serveur pour le traitement, puis le resultat vous est retourne. Aucune image n'est stockee de facon permanente." } },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Rogner les bords blancs", href: "/rogner-bords-blancs-image" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Rogner les bords blancs d'une image</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Supprimez automatiquement les marges blanches et les bordures inutiles de vos images. Ajustez le seuil de detection pour un resultat precis. Parfait pour les scans, captures d'ecran et documents.</p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi rogner les bords blancs ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Les bords blancs apparaissent frequemment lors de la numerisation de documents, la capture d'ecran, ou l'export depuis certains logiciels. Ces marges inutiles augmentent la taille du fichier et rendent l'image moins professionnelle.</p>
          <p className="text-gray-600 mb-4">Pour les boutiques en ligne, les visuels produits doivent etre proprement recadres pour un affichage homogene. La suppression automatique des bords blancs permet de normaliser rapidement des dizaines d'images.</p>
          <p className="text-gray-600 mb-4">Les scans de documents, factures et courriers comportent souvent de larges marges blanches. En les supprimant, vous obtenez un fichier plus compact et plus lisible, ideal pour l'archivage ou l'envoi par email.</p>
          <p className="text-gray-600 mb-4">Notre outil utilise un algorithme de detection des bords uniformes. Le seuil reglable vous permet de controler la sensibilite : un seuil bas (1-5) ne supprime que les bords parfaitement blancs, tandis qu'un seuil eleve (20-50) supprime aussi les bords legerement gris ou colores.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment fonctionne la suppression des bords blancs ?</h3>
            <p className="text-gray-600 mb-4">L'outil analyse les pixels sur les bords de l'image et supprime automatiquement les lignes de pixels dont la couleur est proche du blanc, selon le seuil que vous definissez. Plus le seuil est eleve, plus l'outil est agressif dans la detection.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Cela fonctionne-t-il avec des bords colores ?</h3>
            <p className="text-gray-600 mb-4">L'outil detecte les bords uniformes, pas uniquement blancs. Si vos bords sont d'une couleur unie (gris, beige, etc.), augmentez le seuil pour les detecter. Cependant, l'outil est optimise pour les bords blancs ou tres clairs.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mes images sont-elles envoyees sur un serveur ?</h3>
            <p className="text-gray-600 mb-4">L'image est envoyee temporairement sur notre serveur pour le traitement, puis le resultat vous est retourne. Aucune image n'est stockee de facon permanente.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/rogner-bords-blancs-image" />
    </div>
    </>
  );
}
