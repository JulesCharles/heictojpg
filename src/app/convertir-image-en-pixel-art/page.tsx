import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Convertir Image en Pixel Art Gratuit en Ligne | heictojpg.fr",
  description: "Transformez vos photos en pixel art retro en ligne. Ajustez la taille des pixels pour un rendu personnalise. Gratuit, sans inscription, traitement local.",
  keywords: ["pixel art","convertir image pixel art","pixeliser image","pixel art en ligne","retro pixel","image en pixel"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-image-en-pixel-art",
    siteName: "heictojpg.fr",
    title: "Convertir Image en Pixel Art Gratuit en Ligne",
    description: "Transformez vos photos en pixel art retro en ligne. Ajustez la taille des pixels pour un rendu personnalise. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-image-en-pixel-art" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertir Image en Pixel Art",
      url: "https://heictojpg.fr/convertir-image-en-pixel-art",
      description: "Transformez vos photos en pixel art retro en ligne. Ajustez la taille des pixels pour un rendu personnalise. Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Comment fonctionne la conversion en pixel art ?", acceptedAnswer: { "@type": "Answer", text: "L'outil reduit la resolution de votre image puis la reagrandit sans lissage (nearest neighbor), ce qui cree l'effet pixelise caracteristique du pixel art." } },
        { "@type": "Question", name: "Quelle taille de pixel choisir ?", acceptedAnswer: { "@type": "Answer", text: "Une taille de 8 a 16 pixels donne un bon equilibre entre detail et effet retro. Pour un look tres pixelise, choisissez 32 ou plus. Pour garder plus de details, descendez a 4-8 pixels." } },
        { "@type": "Question", name: "Mes images restent-elles privees ?", acceptedAnswer: { "@type": "Answer", text: "Oui, tout le traitement se fait directement dans votre navigateur. Aucune image n'est envoyee sur un serveur. Vos fichiers restent 100% prives." } },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir Image en Pixel Art", href: "/convertir-image-en-pixel-art" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir une image en Pixel Art</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Transformez n'importe quelle photo en pixel art retro en quelques secondes. Ajustez la taille des pixels pour obtenir le rendu souhaite, du subtil au tres pixelise.</p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Qu'est-ce que le pixel art ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le pixel art est un style artistique numerique ou les images sont creees et editees au niveau du pixel. Popularise par les jeux video des annees 80 et 90, ce style est devenu un veritable mouvement artistique a part entiere. Il est aujourd'hui tres recherche pour son esthetique retro et nostalgique.</p>
          <p className="text-gray-600 mb-4">Notre outil vous permet de transformer n'importe quelle photographie en pixel art en reduisant sa resolution puis en la reagrandissant sans interpolation. Le resultat est une image aux contours nets et aux blocs de couleur bien definis, typiques du pixel art classique.</p>
          <p className="text-gray-600 mb-4">Le curseur de taille des pixels vous donne un controle total sur le niveau de pixelisation. Une valeur basse (4-8px) conserve beaucoup de details tout en ajoutant une touche retro, tandis qu'une valeur elevee (32-64px) cree un effet mosaique abstrait tres prononce.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment fonctionne la conversion en pixel art ?</h3>
            <p className="text-gray-600 mb-4">L'outil reduit la resolution de votre image puis la reagrandit sans lissage (nearest neighbor), ce qui cree l'effet pixelise caracteristique du pixel art.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle taille de pixel choisir ?</h3>
            <p className="text-gray-600 mb-4">Une taille de 8 a 16 pixels donne un bon equilibre entre detail et effet retro. Pour un look tres pixelise, choisissez 32 ou plus. Pour garder plus de details, descendez a 4-8 pixels.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mes images restent-elles privees ?</h3>
            <p className="text-gray-600 mb-4">Oui, tout le traitement se fait directement dans votre navigateur. Aucune image n'est envoyee sur un serveur. Vos fichiers restent 100% prives.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-image-en-pixel-art" />
    </div>
    </>
  );
}
