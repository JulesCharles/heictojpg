import type { Metadata } from "next";
import CompressHeicForm from "@/components/CompressHeicForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Compresser un fichier HEIC en ligne gratuit | heictojpg.fr",
  description: "Réduisez la taille de vos photos HEIC iPhone sans perte visible de qualité. Outil gratuit, rapide, sans inscription.",
  keywords: ["compresser heic", "réduire taille heic", "compresser photo iphone", "heic plus léger", "optimiser heic"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/compresser-heic",
    siteName: "heictojpg.fr",
    title: "Compresser un fichier HEIC gratuitement en ligne",
    description: "Réduisez la taille de vos photos HEIC. Gratuit, rapide, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/compresser-heic" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Compresser HEIC",
      url: "https://heictojpg.fr/compresser-heic",
      description: "Réduisez la taille de vos fichiers HEIC gratuitement. Compression de 30 à 70% sans perte visible de qualité.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "La compression HEIC réduit-elle la qualité de l'image ?", acceptedAnswer: { "@type": "Answer", text: "Avec un niveau de qualité de 70-80%, la perte est imperceptible à l'œil nu. Vous pouvez réduire la taille de 30 à 70% tout en conservant un rendu excellent pour le partage et l'impression." } },
        { "@type": "Question", name: "Quelle est la différence entre HEIC et AVIF ?", acceptedAnswer: { "@type": "Answer", text: "HEIC et AVIF font partie de la même famille de formats (HEIF). AVIF utilise le codec AV1, plus récent et plus performant que le codec HEVC utilisé par HEIC. AVIF offre une meilleure compression à qualité égale." } },
        { "@type": "Question", name: "Combien de fichiers HEIC puis-je compresser à la fois ?", acceptedAnswer: { "@type": "Answer", text: "Vous pouvez compresser vos fichiers HEIC un par un gratuitement. La compression se fait entièrement dans votre navigateur, vos photos ne sont jamais envoyées sur un serveur." } },
        { "@type": "Question", name: "Comment compresser des photos HEIC sur iPhone ?", acceptedAnswer: { "@type": "Answer", text: "Ouvrez heictojpg.fr/compresser-heic dans Safari sur votre iPhone, sélectionnez vos photos depuis la pellicule, choisissez le niveau de qualité et téléchargez le résultat compressé." } },
      ],
    },
  ],
};

export default function CompresserHeic() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Compresser HEIC", href: "/compresser-heic" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Compresser un fichier HEIC gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Réduisez la taille de vos photos iPhone HEIC sans perte visible de qualité.
          Idéal pour libérer de l&apos;espace de stockage ou envoyer des photos par email.
          Le fichier compressé est exporté au format AVIF (même famille HEIF, compression supérieure).
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-16">
        <CompressHeicForm />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi compresser vos fichiers HEIC ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Les photos prises avec un iPhone en format HEIC sont déjà bien compressées,
            mais peuvent encore peser entre 2 et 8 Mo chacune. Avec des milliers de photos,
            cela représente plusieurs gigaoctets de stockage.
          </p>
          <p className="text-gray-600 mb-4">
            Notre outil compresse vos fichiers HEIC en AVIF, un format de la même famille
            (HEIF) qui offre une compression encore supérieure. Vous pouvez réduire la taille
            de 30 à 70% selon le niveau de qualité choisi.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Cas d&apos;utilisation</h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>Stockage :</strong> libérez de l&apos;espace sur votre iCloud ou disque dur</li>
            <li>&bull; <strong>Email :</strong> respectez les limites de taille des pièces jointes</li>
            <li>&bull; <strong>Web :</strong> optimisez vos images pour un chargement rapide</li>
            <li>&bull; <strong>Partage :</strong> envoyez des photos plus rapidement via WhatsApp, Messenger</li>
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">HEIC vs AVIF : comprendre la compression</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format HEIC (High Efficiency Image Container) est le format photo par défaut des iPhones depuis iOS 11. Il utilise le codec HEVC (H.265) pour compresser les images de manière efficace tout en conservant une qualité élevée.
          </p>
          <p className="text-gray-600 mb-4">
            Notre outil compresse vos HEIC en AVIF, un format de nouvelle génération qui utilise le codec AV1. L&apos;AVIF offre une compression 20 à 30% supérieure au HEIC à qualité visuelle équivalente. C&apos;est le format le plus efficace disponible aujourd&apos;hui.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Tableau comparatif des taux de compression</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border-b p-3 text-gray-700 font-semibold">Qualité choisie</th>
                  <th className="border-b p-3 text-gray-700 font-semibold">Réduction de taille</th>
                  <th className="border-b p-3 text-gray-700 font-semibold">Usage recommandé</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="border-b p-3 font-medium">90% (haute qualité)</td>
                  <td className="border-b p-3">~30%</td>
                  <td className="border-b p-3">Impression, archivage</td>
                </tr>
                <tr>
                  <td className="border-b p-3 font-medium">75% (équilibré)</td>
                  <td className="border-b p-3">~50%</td>
                  <td className="border-b p-3">Partage, réseaux sociaux</td>
                </tr>
                <tr>
                  <td className="border-b p-3 font-medium">60% (compact)</td>
                  <td className="border-b p-3">~70%</td>
                  <td className="border-b p-3">Email, stockage limité</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mt-4">
            La compression se fait entièrement dans votre navigateur grâce à la technologie WebAssembly. Vos photos ne quittent jamais votre appareil, garantissant une confidentialité totale.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La compression HEIC réduit-elle la qualité de l&apos;image ?</h3>
            <p className="text-gray-600 mb-4">Avec un niveau de qualité de 70-80%, la perte est imperceptible à l&apos;œil nu. Vous pouvez réduire la taille de 30 à 70% tout en conservant un rendu excellent pour le partage et l&apos;impression.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle est la différence entre HEIC et AVIF ?</h3>
            <p className="text-gray-600 mb-4">HEIC et AVIF font partie de la même famille de formats (HEIF). AVIF utilise le codec AV1, plus récent et plus performant que le codec HEVC utilisé par HEIC. AVIF offre une meilleure compression à qualité égale.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Combien de fichiers HEIC puis-je compresser à la fois ?</h3>
            <p className="text-gray-600 mb-4">Vous pouvez compresser vos fichiers HEIC un par un gratuitement. La compression se fait entièrement dans votre navigateur, vos photos ne sont jamais envoyées sur un serveur.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment compresser des photos HEIC sur iPhone ?</h3>
            <p className="text-gray-600 mb-4">Ouvrez heictojpg.fr/compresser-heic dans Safari sur votre iPhone, sélectionnez vos photos depuis la pellicule, choisissez le niveau de qualité et téléchargez le résultat compressé.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/compresser-heic" />
    </div>
    </>
  );
}
