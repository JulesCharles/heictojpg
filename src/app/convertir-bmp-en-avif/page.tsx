import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir BMP en AVIF Gratuit en Ligne | heictojpg.fr",
  description: "Convertissez vos images BMP en AVIF, le format le plus efficace du moment. Réduisez la taille de vos fichiers BMP de plus de 95 %. Gratuit.",
  keywords: ["convertir bmp en avif","bmp to avif","bmp avif gratuit","bmp vers avif","convertisseur bmp avif"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-bmp-en-avif",
    siteName: "heictojpg.fr",
    title: "Convertir BMP en AVIF gratuitement en ligne",
    description: "Convertissez vos images BMP en AVIF, le format le plus efficace du moment. Réduisez la taille de vos fichiers BMP de plus de 95 %. Gratuit.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-bmp-en-avif" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur BMP en AVIF",
      url: "https://heictojpg.fr/convertir-bmp-en-avif",
      description: "Convertissez vos images BMP en AVIF, le format le plus efficace du moment. Réduisez la taille de vos fichiers BMP de plus de 95 %. Gratuit.",
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
          name: "Qu'est-ce que le format AVIF ?",
          acceptedAnswer: { "@type": "Answer", text: "L'AVIF (AV1 Image File Format) est le format d'image le plus moderne et le plus efficace disponible aujourd'hui. Basé sur le codec vidéo AV1, il offre une compression jusqu'à 50 % supérieure au JPEG et 20 % supérieure au WebP, tout en conservant une excellente qualité." },
        },
        {
          "@type": "Question",
          name: "De combien la taille du fichier sera-t-elle réduite ?",
          acceptedAnswer: { "@type": "Answer", text: "La réduction est spectaculaire : un fichier BMP non compressé peut être réduit de 95 % ou plus en AVIF. Par exemple, un BMP de 10 Mo pourrait ne peser que 200 à 500 Ko en AVIF." },
        },
        {
          "@type": "Question",
          name: "L'AVIF est-il supporté par les navigateurs actuels ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, l'AVIF est supporté par Chrome, Firefox, Safari (depuis la version 16) et Edge. La quasi-totalité des utilisateurs peuvent afficher des images AVIF sans problème." },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir BMP en AVIF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Passez du format BMP obsolète au format AVIF, la technologie de compression d'image la plus avancée du moment. Réduisez la taille de vos fichiers de plus de 95 % tout en conservant une qualité visuelle exceptionnelle.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="BMP &rarr; AVIF"
          acceptedFormats=".bmp,image/bmp,image/x-ms-bmp"
          acceptLabel="Sélectionner un fichier BMP"
          outputFormat="avif"
          apiEndpoint="/api/convert-image"
          outputExtension=".avif"
          acceptedMimeTypes={["image/bmp", "image/x-ms-bmp"]}
          acceptedExtensions={[".bmp"]}
          errorMessage="Veuillez sélectionner un fichier BMP valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir BMP en AVIF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le BMP est un format d'image ancien qui ne compresse pas les données. Un simple fichier BMP peut peser des dizaines de mégaoctets, ce qui est impensable pour un usage moderne. L'AVIF, en revanche, est le format de compression d'image le plus efficace disponible aujourd'hui, offrant des réductions de taille de plus de 95 % par rapport au BMP.</p>
          <p className="text-gray-600 mb-4">Basé sur le codec vidéo AV1, l'AVIF surpasse même le WebP et le JPEG en termes de ratio qualité/taille. Il supporte la transparence, le HDR et une profondeur de couleur allant jusqu'à 12 bits, ce qui en fait un choix d'avenir pour tous vos besoins en imagerie.</p>
          <p className="text-gray-600 mb-4">Si vous possédez d'anciens fichiers BMP et souhaitez les moderniser, les convertir en AVIF est le meilleur choix pour économiser de l'espace de stockage tout en bénéficiant d'une qualité d'image optimale.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Qu'est-ce que le format AVIF ?</h3>
            <p className="text-gray-600 mb-4">L'AVIF (AV1 Image File Format) est le format d'image le plus moderne et le plus efficace disponible aujourd'hui. Basé sur le codec vidéo AV1, il offre une compression jusqu'à 50 % supérieure au JPEG et 20 % supérieure au WebP, tout en conservant une excellente qualité.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">De combien la taille du fichier sera-t-elle réduite ?</h3>
            <p className="text-gray-600 mb-4">La réduction est spectaculaire : un fichier BMP non compressé peut être réduit de 95 % ou plus en AVIF. Par exemple, un BMP de 10 Mo pourrait ne peser que 200 à 500 Ko en AVIF.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">L'AVIF est-il supporté par les navigateurs actuels ?</h3>
            <p className="text-gray-600 mb-4">Oui, l'AVIF est supporté par Chrome, Firefox, Safari (depuis la version 16) et Edge. La quasi-totalité des utilisateurs peuvent afficher des images AVIF sans problème.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-bmp-en-avif" />
    </div>
    </>
  );
}
