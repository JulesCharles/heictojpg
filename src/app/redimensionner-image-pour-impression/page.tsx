import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Redimensionner Image pour Impression Gratuit - 10x15, A4, A3 | heictojpg.fr",
  description: "Redimensionnez vos images aux formats d'impression standard (10x15, 13x18, A4, A3, A5) a 300 DPI. Pret a imprimer. Gratuit, sans inscription.",
  keywords: ["redimensionner image impression", "image 10x15", "image A4 300 DPI", "preparer image impression", "taille impression photo", "format impression standard"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/redimensionner-image-pour-impression",
    siteName: "heictojpg.fr",
    title: "Redimensionner Image pour Impression - 10x15, A4, A3",
    description: "Redimensionnez vos images aux formats d'impression standard a 300 DPI. Pret a imprimer.",
  },
  alternates: { canonical: "https://heictojpg.fr/redimensionner-image-pour-impression" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Redimensionner Image pour Impression",
      url: "https://heictojpg.fr/redimensionner-image-pour-impression",
      description: "Redimensionnez vos images aux formats d'impression standard a 300 DPI.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Combien de DPI faut-il pour imprimer une photo ?", acceptedAnswer: { "@type": "Answer", text: "La resolution standard pour une impression de qualite est de 300 DPI (points par pouce). C'est le standard utilise par tous les laboratoires photo et imprimeurs professionnels. En dessous de 150 DPI, l'image apparaitra pixelisee a l'impression." } },
        { "@type": "Question", name: "Peut-on imprimer une photo prise avec un telephone ?", acceptedAnswer: { "@type": "Answer", text: "Oui, les smartphones modernes prennent des photos de 12 a 50 megapixels, ce qui est largement suffisant pour imprimer en 10x15, A4 et meme A3. Une photo de 12 MP (4032x3024) permet une impression A4 a 300 DPI sans perte de qualite." } },
        { "@type": "Question", name: "Quel format d'image utiliser pour l'impression ?", acceptedAnswer: { "@type": "Answer", text: "Le JPEG en haute qualite (95%) est le format le plus utilise pour l'impression photo. Le TIFF est aussi excellent car il est sans perte, mais les fichiers sont plus volumineux. Evitez le WebP et le GIF qui ne sont pas adaptes a l'impression." } },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Redimensionner pour impression", href: "/redimensionner-image-pour-impression" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Redimensionner une image pour l&apos;impression</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Preparez vos images pour l&apos;impression en un clic. Choisissez parmi les formats standards francais (10x15, 13x18, A4, A3...) et obtenez une image a 300 DPI prete a imprimer.</p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Les formats d&apos;impression standard en France</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">En France, les formats d&apos;impression photo suivent des standards bien definis. Le format le plus populaire est le 10x15 cm, equivalent a une photo classique. Pour les tirages plus grands, on utilise le 13x18 cm, le 15x20 cm ou le 20x30 cm (equivalent au format A4 en photo).</p>
          <p className="text-gray-600 mb-4">Les formats papier ISO (A5, A4, A3) sont plutot utilises pour les documents, les affiches et les impressions artistiques. Le A4 (21x29.7 cm) est le format le plus courant pour les impressions bureautiques et les affiches de petite taille.</p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2 pr-4 text-gray-700">Format</th>
                  <th className="py-2 pr-4 text-gray-700">Dimensions (cm)</th>
                  <th className="py-2 pr-4 text-gray-700">Pixels a 300 DPI</th>
                  <th className="py-2 text-gray-700">Usage courant</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b"><td className="py-2 pr-4 font-medium">Photo classique</td><td>10 x 15</td><td className="font-mono text-xs">1181 x 1772</td><td>Albums, cadres</td></tr>
                <tr className="border-b"><td className="py-2 pr-4 font-medium">Photo moyenne</td><td>13 x 18</td><td className="font-mono text-xs">1535 x 2126</td><td>Cadres, albums</td></tr>
                <tr className="border-b"><td className="py-2 pr-4 font-medium">Photo grande</td><td>15 x 20</td><td className="font-mono text-xs">1772 x 2362</td><td>Cadres muraux</td></tr>
                <tr className="border-b"><td className="py-2 pr-4 font-medium">Poster photo</td><td>20 x 30</td><td className="font-mono text-xs">2362 x 3543</td><td>Decoration murale</td></tr>
                <tr className="border-b"><td className="py-2 pr-4 font-medium">A5</td><td>14.8 x 21</td><td className="font-mono text-xs">1748 x 2480</td><td>Flyers, carnets</td></tr>
                <tr className="border-b"><td className="py-2 pr-4 font-medium">A4</td><td>21 x 29.7</td><td className="font-mono text-xs">2480 x 3508</td><td>Documents, affiches</td></tr>
                <tr className="border-b"><td className="py-2 pr-4 font-medium">A3</td><td>29.7 x 42</td><td className="font-mono text-xs">3508 x 4961</td><td>Affiches, plans</td></tr>
                <tr><td className="py-2 pr-4 font-medium">Carre</td><td>20 x 20</td><td className="font-mono text-xs">2362 x 2362</td><td>Instagram, cadres</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi les DPI sont importants pour l&apos;impression</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">DPI signifie &quot;Dots Per Inch&quot; (points par pouce). C&apos;est la mesure de la densite de pixels dans une image imprimee. Plus le DPI est eleve, plus l&apos;impression sera fine et detaillee.</p>
          <p className="text-gray-600 mb-4">Le standard de l&apos;industrie est de 300 DPI pour les impressions photo et les documents de qualite professionnelle. A cette resolution, l&apos;oeil humain ne distingue pas les pixels individuels a distance de lecture normale (environ 30 cm).</p>
          <p className="text-gray-600 mb-4">Pour les affiches vues de loin (1 metre ou plus), 150 DPI peuvent suffire. En revanche, pour les impressions de tres haute qualite (livres d&apos;art, tirages d&apos;exposition), certains imprimeurs recommandent 360 DPI voire plus.</p>
          <p className="text-gray-600 mb-4">Notre outil redimensionne vos images a la resolution exacte necessaire pour une impression a 300 DPI dans le format choisi, garantissant une qualite optimale a l&apos;impression.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Combien de DPI faut-il pour imprimer une photo ?</h3>
            <p className="text-gray-600 mb-4">La resolution standard pour une impression de qualite est de 300 DPI (points par pouce). C&apos;est le standard utilise par tous les laboratoires photo et imprimeurs professionnels. En dessous de 150 DPI, l&apos;image apparaitra pixelisee a l&apos;impression.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Peut-on imprimer une photo prise avec un telephone ?</h3>
            <p className="text-gray-600 mb-4">Oui, les smartphones modernes prennent des photos de 12 a 50 megapixels, ce qui est largement suffisant pour imprimer en 10x15, A4 et meme A3. Une photo de 12 MP (4032x3024) permet une impression A4 a 300 DPI sans perte de qualite.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quel format d&apos;image utiliser pour l&apos;impression ?</h3>
            <p className="text-gray-600 mb-4">Le JPEG en haute qualite (95%) est le format le plus utilise pour l&apos;impression photo. Le TIFF est aussi excellent car il est sans perte, mais les fichiers sont plus volumineux. Evitez le WebP et le GIF qui ne sont pas adaptes a l&apos;impression.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mon image sera-t-elle recadree ?</h3>
            <p className="text-gray-600 mb-4">Si le ratio de votre image ne correspond pas exactement au format d&apos;impression choisi, l&apos;image sera recadree en mode &quot;cover&quot; (remplissage) pour eviter les bandes blanches. Les bords seront legerement coupes pour s&apos;adapter au format.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/redimensionner-image-pour-impression" />
    </div>
    </>
  );
}
