import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";

export const metadata: Metadata = {
  title: "Changer le DPI d'une image en ligne | heictojpg.fr",
  description: "Modifiez la resolution DPI de vos images pour l'impression (300 DPI) ou le web (72 DPI). Gratuit, sans inscription.",
  keywords: ["changer dpi image","modifier dpi","300 dpi","72 dpi","resolution image","dpi en ligne"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/changer-dpi-image",
    siteName: "heictojpg.fr",
    title: "Changer le DPI d'une image gratuitement en ligne",
    description: "Modifiez la resolution DPI de vos images pour l'impression (300 DPI) ou le web (72 DPI). Gratuit, sans inscription.",
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
      description: "Modifiez la resolution DPI de vos images pour l'impression (300 DPI) ou le web (72 DPI). Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Changer le DPI ameliore-t-il la qualite de l'image ?", acceptedAnswer: { "@type": "Answer", text: "Non, changer le DPI modifie uniquement les metadonnees de resolution. Les pixels de l'image restent identiques. Pour une meilleure qualite d'impression, vous devez partir d'une image avec suffisamment de pixels." } },
        { "@type": "Question", name: "Quel DPI pour imprimer une photo ?", acceptedAnswer: { "@type": "Answer", text: "300 DPI est le standard professionnel pour l'impression. A cette resolution, une photo de 3000x2000 pixels s'imprimera a 25x17 cm en qualite optimale." } },
        { "@type": "Question", name: "Mon imprimeur demande 300 DPI mais mon image est en 72 DPI", acceptedAnswer: { "@type": "Answer", text: "Utilisez notre outil pour passer la metadonnee a 300 DPI. Mais verifiez que l'image a suffisamment de pixels : pour une impression 10x15 cm a 300 DPI, il faut au minimum 1181x1772 pixels." } }
      ],
    },
  ],
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Changer le DPI d'une image gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Modifiez la resolution DPI (dots per inch) de vos images pour l'impression professionnelle (300 DPI), le web (72 DPI) ou tout autre usage. Notre outil modifie les metadonnees de resolution sans alterer la qualite des pixels.</p>
      </div>

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comprendre le DPI (points par pouce)</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le DPI (Dots Per Inch, ou points par pouce) est une mesure de resolution qui indique combien de pixels sont imprimes par pouce lineaire. C'est une metadonnee essentielle pour l'impression : elle determine la taille physique a laquelle votre image sera imprimee.</p>
          <p className="text-gray-600 mb-4">Une image de 3000x2000 pixels a 300 DPI s'imprimera a 10x6.67 pouces (environ 25x17 cm). La meme image a 72 DPI s'imprimera a 41.7x27.8 pouces (environ 106x70 cm), mais avec une qualite bien inferieure.</p>
          <p className="text-gray-600 mb-4">Les standards de resolution sont :
- 72 DPI : standard pour l'affichage ecran et le web
- 150 DPI : suffisant pour les documents de bureau et les impressions jet d'encre basiques
- 300 DPI : standard professionnel pour l'impression offset, les magazines et les livres
- 600 DPI : haute qualite pour l'impression fine art et les reproductions de qualite musee</p>
          <p className="text-gray-600 mb-4">Important : changer le DPI ne modifie pas les pixels de l'image. Notre outil met a jour uniquement les metadonnees de resolution. Si votre imprimeur demande une image a 300 DPI, assurez-vous que l'image a suffisamment de pixels pour la taille d'impression souhaitee.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Changer le DPI ameliore-t-il la qualite de l'image ?</h3>
            <p className="text-gray-600 mb-4">Non, changer le DPI modifie uniquement les metadonnees de resolution. Les pixels de l'image restent identiques. Pour une meilleure qualite d'impression, vous devez partir d'une image avec suffisamment de pixels.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quel DPI pour imprimer une photo ?</h3>
            <p className="text-gray-600 mb-4">300 DPI est le standard professionnel pour l'impression. A cette resolution, une photo de 3000x2000 pixels s'imprimera a 25x17 cm en qualite optimale.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mon imprimeur demande 300 DPI mais mon image est en 72 DPI</h3>
            <p className="text-gray-600 mb-4">Utilisez notre outil pour passer la metadonnee a 300 DPI. Mais verifiez que l'image a suffisamment de pixels : pour une impression 10x15 cm a 300 DPI, il faut au minimum 1181x1772 pixels.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nos autres outils</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; JPG</h3>
            <p className="text-sm text-gray-600">Convertissez vos photos iPhone.</p>
          </Link>
          <Link href="/compresser-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Compresser image</h3>
            <p className="text-sm text-gray-600">Reduisez le poids de vos images.</p>
          </Link>
          <Link href="/redimensionner-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Redimensionner</h3>
            <p className="text-sm text-gray-600">Changez la taille de vos images.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
