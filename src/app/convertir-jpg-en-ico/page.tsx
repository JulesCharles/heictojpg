import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir JPG en ICO (favicon) gratuit | heictojpg.fr",
  description: "Créez un favicon ICO à partir d'une photo JPG. Multi-tailles 16x16 à 256x256. Gratuit, sans inscription.",
  keywords: ["convertir jpg en ico","jpg to ico","jpg ico gratuit","créer favicon jpg","favicon depuis photo"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-jpg-en-ico",
    siteName: "heictojpg.fr",
    title: "Convertir JPG en ICO (favicon) gratuitement en ligne",
    description: "Créez un favicon ICO à partir d'une photo JPG. Multi-tailles 16x16 à 256x256. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-jpg-en-ico" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur JPG en ICO",
      url: "https://heictojpg.fr/convertir-jpg-en-ico",
      description: "Créez un favicon ICO à partir d'une photo JPG. Multi-tailles 16x16 à 256x256. Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Mon logo JPG n'est pas carré, que faire ?",
          acceptedAnswer: { "@type": "Answer", text: "L'outil recadre automatiquement votre image en carré en gardant le centre. Pour un meilleur contrôle, recadrez d'abord votre image en carré avec notre outil de recadrage, puis convertissez en ICO." },
        },
        {
          "@type": "Question",
          name: "La qualité est-elle suffisante pour un favicon ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, même à 16x16 pixels, notre outil optimise le rendu pour obtenir le meilleur résultat possible à partir de votre JPG." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir JPG en ICO (favicon) gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Créez un fichier favicon ICO à partir de n'importe quelle image JPG. Parfait pour créer rapidement un favicon à partir d'un logo ou d'une photo. Le fichier généré contient toutes les tailles standard.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="JPG &rarr; ICO"
          acceptedFormats=".jpg,.jpeg,image/jpeg"
          acceptLabel="Sélectionner un fichier JPG"
          outputFormat="ico"
          apiEndpoint="/api/convert-image"
          outputExtension=".ico"
          acceptedMimeTypes={["image/jpeg"]}
          acceptedExtensions={[".jpg",".jpeg"]}
          errorMessage="Veuillez sélectionner un fichier JPG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Créer un favicon à partir d'une photo JPG</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Vous avez un logo ou une image en JPG et souhaitez en faire un favicon pour votre site web ? Notre outil génère automatiquement un fichier ICO multi-tailles à partir de votre image JPG.</p>
          <p className="text-gray-600 mb-4">L'image est automatiquement recadrée et redimensionnée pour chaque taille standard de favicon : 16x16, 32x32, 48x48, 64x64, 128x128 et 256x256 pixels. Le recadrage est centré pour conserver le sujet principal de votre image.</p>
          <p className="text-gray-600 mb-4">Pour un résultat optimal, utilisez une image carrée avec le sujet bien centré. Si votre image est rectangulaire, les bords seront coupés pour obtenir un format carré.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mon logo JPG n'est pas carré, que faire ?</h3>
            <p className="text-gray-600 mb-4">L'outil recadre automatiquement votre image en carré en gardant le centre. Pour un meilleur contrôle, recadrez d'abord votre image en carré avec notre outil de recadrage, puis convertissez en ICO.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualité est-elle suffisante pour un favicon ?</h3>
            <p className="text-gray-600 mb-4">Oui, même à 16x16 pixels, notre outil optimise le rendu pour obtenir le meilleur résultat possible à partir de votre JPG.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-jpg-en-ico" />
    </div>
    </>
  );
}
