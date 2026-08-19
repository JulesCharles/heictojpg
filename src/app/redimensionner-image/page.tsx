import type { Metadata } from "next";
import ResizeForm from "@/components/ResizeForm";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Redimensionner une Image en Ligne Gratuit - Sans Perte de Qualité | heictojpg.fr",
  description:
    "Redimensionnez vos images JPG, PNG et WebP en ligne en 2 secondes. Taille personnalisée en pixels ou pourcentage. 100% gratuit, sans inscription.",
  keywords: [
    "redimensionner image",
    "redimensionner photo en ligne",
    "changer taille image",
    "resize image gratuit",
    "réduire taille photo",
    "redimensionner image en ligne",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/redimensionner-image",
    siteName: "heictojpg.fr",
    title: "Redimensionner une image gratuitement en ligne",
    description: "Redimensionnez vos images en ligne gratuitement. Rapide, sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/redimensionner-image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Redimensionner une image",
  url: "https://heictojpg.fr/redimensionner-image",
  description: "Redimensionnez vos images JPG, PNG et WebP en ligne gratuitement.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Tout navigateur web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "fr",
};

export default function RedimensionnerImage() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Redimensionner une image", href: "/redimensionner-image" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Redimensionner une image gratuitement
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Changez la taille de vos images JPG, PNG et WebP en quelques secondes.
          Notre outil conserve les proportions et la qualité de vos photos.
          Gratuit, sans inscription, aucun fichier conservé.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ResizeForm />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi redimensionner vos images ?
        </h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Redimensionner vos images est essentiel pour optimiser la vitesse de chargement
            de vos sites web, respecter les limites de taille des réseaux sociaux, ou
            simplement réduire l&apos;espace de stockage utilisé.
          </p>
          <p className="text-gray-600 mb-4">
            Une photo prise avec un smartphone moderne peut peser entre 3 et 12 Mo.
            En la redimensionnant pour le web (par exemple 1920px de large), vous pouvez
            réduire sa taille à moins de 500 Ko sans perte visible de qualité.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Tailles recommandées
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>Site web / blog :</strong> 1200 à 1920 px de large</li>
            <li>&bull; <strong>Photo de profil :</strong> 400 x 400 px</li>
            <li>&bull; <strong>Bannière Facebook :</strong> 820 x 312 px</li>
            <li>&bull; <strong>Post Instagram :</strong> 1080 x 1080 px</li>
            <li>&bull; <strong>Email :</strong> 600 à 800 px de large</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Redimensionner une image au format A4
        </h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Vous devez <strong>redimensionner une image en A4</strong> pour l&apos;impression ou un document ?
            Le format A4 correspond à 210 x 297 mm, soit <strong>2480 x 3508 pixels à 300 DPI</strong>.
            Entrez ces dimensions dans notre outil pour obtenir une image parfaitement adaptée au format A4.
          </p>
          <p className="text-gray-600 mb-4">
            Pour <strong>mettre une image en format A4</strong>, assurez-vous que votre image a un ratio proche
            de 1:1.41 (largeur:hauteur). Si le ratio est différent, des bandes blanches apparaîtront
            sur les côtés. Utilisez notre{" "}
            <a href="/recadrer-image" className="text-blue-600 hover:text-blue-800">outil de recadrage</a> pour
            ajuster le ratio avant de redimensionner.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Formats d&apos;impression courants en pixels
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border-b p-3 text-gray-700 font-semibold">Format</th>
                  <th className="border-b p-3 text-gray-700 font-semibold">Dimensions (mm)</th>
                  <th className="border-b p-3 text-gray-700 font-semibold">Pixels à 300 DPI</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="border-b p-3 font-medium">10x15 cm</td>
                  <td className="border-b p-3">100 x 150 mm</td>
                  <td className="border-b p-3">1181 x 1772 px</td>
                </tr>
                <tr>
                  <td className="border-b p-3 font-medium">13x18 cm</td>
                  <td className="border-b p-3">130 x 180 mm</td>
                  <td className="border-b p-3">1535 x 2126 px</td>
                </tr>
                <tr>
                  <td className="border-b p-3 font-medium">A5</td>
                  <td className="border-b p-3">148 x 210 mm</td>
                  <td className="border-b p-3">1748 x 2480 px</td>
                </tr>
                <tr>
                  <td className="border-b p-3 font-medium">A4</td>
                  <td className="border-b p-3">210 x 297 mm</td>
                  <td className="border-b p-3">2480 x 3508 px</td>
                </tr>
                <tr>
                  <td className="border-b p-3 font-medium">A3</td>
                  <td className="border-b p-3">297 x 420 mm</td>
                  <td className="border-b p-3">3508 x 4961 px</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Redimensionner une photo 10x15 en ligne
        </h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le <strong>format 10x15</strong> (100 x 150 mm) est le format photo standard pour les tirages
            classiques. Pour <strong>redimensionner une photo au format 10x15</strong> en ligne,
            entrez les dimensions <strong>1181 x 1772 pixels</strong> (à 300 DPI) dans notre outil.
          </p>
          <p className="text-gray-600 mb-4">
            Si vous souhaitez <strong>imprimer une photo au format 10x15</strong>, vérifiez que votre image
            a suffisamment de pixels. Une photo de smartphone (12 mégapixels = 4000x3000 px) est largement
            suffisante. Si votre photo est plus petite que 1181x1772 px, l&apos;impression sera pixelisée.
          </p>
        </div>
      </div>

      <RelatedTools currentPath="/redimensionner-image" />
    </div>
    </>
  );
}
