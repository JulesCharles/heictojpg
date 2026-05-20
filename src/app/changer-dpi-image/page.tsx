import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Changer le DPI d'une image en ligne | heictojpg.fr",
  description: "Modifiez la résolution DPI de vos images pour l'impression (300 DPI) ou le web (72 DPI). Gratuit, sans inscription.",
  keywords: ["changer dpi image","modifier dpi","300 dpi","72 dpi","résolution image","dpi en ligne"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/changer-dpi-image",
    siteName: "heictojpg.fr",
    title: "Changer le DPI d'une image gratuitement en ligne",
    description: "Modifiez la résolution DPI de vos images pour l'impression (300 DPI) ou le web (72 DPI). Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/changer-dpi-image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Changer le DPI d'une image gratuitement",
      url: "https://heictojpg.fr/changer-dpi-image",
      description: "Modifiez la résolution DPI de vos images pour l'impression (300 DPI) ou le web (72 DPI). Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Changer le DPI améliore-t-il la qualité de l'image ?", acceptedAnswer: { "@type": "Answer", text: "Non, changer le DPI modifie uniquement les métadonnées de résolution. Les pixels de l'image restent identiques. Pour une meilleure qualité d'impression, vous devez partir d'une image avec suffisamment de pixels." } },
        { "@type": "Question", name: "Quel DPI pour imprimer une photo ?", acceptedAnswer: { "@type": "Answer", text: "300 DPI est le standard professionnel pour l'impression. À cette résolution, une photo de 3000x2000 pixels s'imprimera à 25x17 cm en qualité optimale." } },
        { "@type": "Question", name: "Mon imprimeur demande 300 DPI mais mon image est en 72 DPI", acceptedAnswer: { "@type": "Answer", text: "Utilisez notre outil pour passer la métadonnée à 300 DPI. Mais vérifiez que l'image a suffisamment de pixels : pour une impression 10x15 cm à 300 DPI, il faut au minimum 1181x1772 pixels." } }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Changer le DPI", href: "/changer-dpi-image" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Changer le DPI d'une image gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Modifiez la résolution DPI (dots per inch) de vos images pour l'impression professionnelle (300 DPI), le web (72 DPI) ou tout autre usage. Notre outil modifie les métadonnées de résolution sans altérer la qualité des pixels.</p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comprendre le DPI (points par pouce)</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le DPI (Dots Per Inch, ou points par pouce) est une mesure de résolution qui indique combien de pixels sont imprimés par pouce linéaire. C'est une métadonnée essentielle pour l'impression : elle détermine la taille physique à laquelle votre image sera imprimée.</p>
          <p className="text-gray-600 mb-4">Une image de 3000x2000 pixels à 300 DPI s'imprimera à 10x6.67 pouces (environ 25x17 cm). La même image à 72 DPI s'imprimera à 41.7x27.8 pouces (environ 106x70 cm), mais avec une qualité bien inférieure.</p>
          <p className="text-gray-600 mb-4">Les standards de résolution sont :
- 72 DPI : standard pour l'affichage écran et le web
- 150 DPI : suffisant pour les documents de bureau et les impressions jet d'encre basiques
- 300 DPI : standard professionnel pour l'impression offset, les magazines et les livres
- 600 DPI : haute qualité pour l'impression fine art et les reproductions de qualité musée</p>
          <p className="text-gray-600 mb-4">Important : changer le DPI ne modifie pas les pixels de l'image. Notre outil met à jour uniquement les métadonnées de résolution. Si votre imprimeur demande une image à 300 DPI, assurez-vous que l'image a suffisamment de pixels pour la taille d'impression souhaitée.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Changer le DPI améliore-t-il la qualité de l'image ?</h3>
            <p className="text-gray-600 mb-4">Non, changer le DPI modifie uniquement les métadonnées de résolution. Les pixels de l'image restent identiques. Pour une meilleure qualité d'impression, vous devez partir d'une image avec suffisamment de pixels.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quel DPI pour imprimer une photo ?</h3>
            <p className="text-gray-600 mb-4">300 DPI est le standard professionnel pour l'impression. À cette résolution, une photo de 3000x2000 pixels s'imprimera à 25x17 cm en qualité optimale.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mon imprimeur demande 300 DPI mais mon image est en 72 DPI</h3>
            <p className="text-gray-600 mb-4">Utilisez notre outil pour passer la métadonnée à 300 DPI. Mais vérifiez que l'image a suffisamment de pixels : pour une impression 10x15 cm à 300 DPI, il faut au minimum 1181x1772 pixels.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/changer-dpi-image" />
    </div>
    </>
  );
}
