import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Inverser les Couleurs d'une Image — Outil Gratuit en Ligne (1 Clic)",
  description: "Inversez les couleurs de vos photos en 1 clic : JPG, PNG, WebP. Créez un effet négatif instantanément. 100% gratuit, sans inscription, résultat immédiat à télécharger.",
  keywords: ["inverser couleurs image","négatif photo","inverser image en ligne","negative image","couleurs inversées","inverseur couleur","effet négatif photo"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/inverser-couleurs-image",
    siteName: "heictojpg.fr",
    title: "Inverser les Couleurs d'une Image — Outil Gratuit en Ligne (1 Clic)",
    description: "Inversez les couleurs de vos photos en 1 clic : JPG, PNG, WebP. Créez un effet négatif instantanément. 100% gratuit, sans inscription, résultat immédiat à télécharger.",
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
      description: "Inversez les couleurs de n'importe quelle image en un clic : JPG, PNG, WebP. Effet négatif photo, inversion noir/blanc, design graphique. 100% gratuit, sans inscription, résultat immédiat.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Puis-je revenir aux couleurs originales ?", acceptedAnswer: { "@type": "Answer", text: "Oui ! Il suffit d'inverser à nouveau l'image inversée pour retrouver les couleurs originales. L'inversion est une opération parfaitement réversible." } },
        { "@type": "Question", name: "L'inversion fonctionne-t-elle avec les images en noir et blanc ?", acceptedAnswer: { "@type": "Answer", text: "Oui, l'inversion d'une image en noir et blanc produit un négatif classique : les zones sombres deviennent claires et vice versa." } },
        { "@type": "Question", name: "Quels formats d'image sont supportés ?", acceptedAnswer: { "@type": "Answer", text: "Notre outil supporte tous les formats courants : JPG, PNG, WebP, BMP, GIF et HEIC. Le résultat est téléchargeable au même format que l'original." } },
        { "@type": "Question", name: "L'inversion modifie-t-elle la qualité de l'image ?", acceptedAnswer: { "@type": "Answer", text: "Non, l'inversion des couleurs est une opération sans perte. Chaque pixel est transformé mathématiquement (255 - valeur) sans compression ni perte de qualité." } }
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
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comment inverser les couleurs d'une image</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Notre <strong>inverseur de couleur</strong> fonctionne en un clic : uploadez votre image, et chaque pixel est transformé en sa <strong>couleur inversée</strong> (couleur complémentaire). Le blanc (255,255,255) devient noir (0,0,0), le rouge devient cyan, le bleu devient jaune. C'est une <strong>inversion couleur image</strong> parfaitement réversible.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Créer un effet négatif photo</h3>
          <p className="text-gray-600 mb-4">
            L'<strong>effet négatif</strong> transforme vos photos en leur version <strong>couleurs inversées</strong>, comme les anciens négatifs de pellicule argentique. C'est un effet recherché en design graphique, en photographie artistique et pour les couvertures d'album. Notre outil produit des <strong>images aux couleurs inversées</strong> de haute qualité, sans compression ni perte.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Inverser le noir et blanc</h3>
          <p className="text-gray-600 mb-4">
            L'<strong>inversion couleur</strong> fonctionne aussi sur les images en noir et blanc : les zones sombres deviennent claires et vice versa. C'est utile pour améliorer la lisibilité de documents scannés, créer des versions dark mode de schémas, ou simplement obtenir un rendu artistique différent.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Formats supportés</h3>
          <p className="text-gray-600 mb-4">
            L'outil d'<strong>inversion de couleur d'image</strong> accepte tous les formats courants : JPG, PNG, WebP, BMP, GIF et HEIC (photos iPhone). Le résultat est téléchargeable instantanément dans le même format. Tout le traitement se fait dans votre navigateur — aucune image n'est envoyée sur un serveur.
          </p>
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

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quels formats d'image sont supportés ?</h3>
            <p className="text-gray-600 mb-4">Notre outil supporte tous les formats courants : JPG, PNG, WebP, BMP, GIF et HEIC. Le résultat est téléchargeable au même format que l'original.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">L'inversion modifie-t-elle la qualité de l'image ?</h3>
            <p className="text-gray-600 mb-4">Non, l'inversion des couleurs est une opération sans perte. Chaque pixel est transformé mathématiquement (255 - valeur) sans compression ni perte de qualité.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/inverser-couleurs-image" />
    </div>
    </>
  );
}
