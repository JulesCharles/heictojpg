import type { Metadata } from "next";
import Link from "next/link";
import HeicConvertForm from "@/components/HeicConvertForm";

export const metadata: Metadata = {
  title: "Convertir HEIC en AVIF en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos photos iPhone HEIC en AVIF, le format d'image le plus performant. Compression 50% supérieure au JPG. Gratuit, sans inscription.",
  keywords: ["convertir heic en avif", "heic to avif", "heic avif gratuit", "photo iphone avif", "convertisseur heic avif"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-heic-en-avif",
    siteName: "heictojpg.fr",
    title: "Convertir HEIC en AVIF gratuitement en ligne",
    description: "Convertissez vos photos HEIC en AVIF. Le format le plus performant du web.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-heic-en-avif" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication",
  name: "Convertisseur HEIC en AVIF", url: "https://heictojpg.fr/convertir-heic-en-avif",
  description: "Convertissez vos photos HEIC en AVIF pour le web.",
  applicationCategory: "MultimediaApplication", operatingSystem: "Tout navigateur web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, inLanguage: "fr",
};

export default function ConvertirHeicEnAvif() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir HEIC en AVIF gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos photos iPhone HEIC en AVIF, le format d&apos;image le plus performant du web.
          L&apos;AVIF offre une compression 50% supérieure au JPG et 20% supérieure au WebP.
          C&apos;est le futur des images sur le web.
        </p>
      </div>
      <div className="mb-16">
        <HeicConvertForm title="Convertir HEIC en AVIF" outputFormat="avif" outputExtension=".avif" />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir en AVIF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            L&apos;AVIF (AV1 Image File Format) est le format d&apos;image le plus avancé disponible aujourd&apos;hui.
            Basé sur le codec vidéo AV1, il offre la meilleure compression du marché tout en
            supportant le HDR, le wide gamut et la transparence.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">AVIF vs les autres formats</h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>vs JPG :</strong> 50% plus léger à qualité égale</li>
            <li>&bull; <strong>vs WebP :</strong> 20% plus léger à qualité égale</li>
            <li>&bull; <strong>vs HEIC :</strong> performances similaires, mais ouvert et libre</li>
            <li>&bull; <strong>HDR :</strong> supporte le HDR et les couleurs étendues (wide gamut)</li>
            <li>&bull; <strong>Compatible :</strong> Chrome, Firefox, Safari (depuis iOS 16)</li>
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Autres conversions HEIC</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; JPG</h3>
            <p className="text-sm text-gray-600">Le format universel pour vos photos.</p>
          </Link>
          <Link href="/convertir-heic-en-png" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; PNG</h3>
            <p className="text-sm text-gray-600">Qualité sans perte avec transparence.</p>
          </Link>
          <Link href="/convertir-heic-en-webp" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; WebP</h3>
            <p className="text-sm text-gray-600">Format Google pour le web.</p>
          </Link>
          <Link href="/convertir-heic-en-tiff" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; TIFF</h3>
            <p className="text-sm text-gray-600">Format professionnel pour l&apos;impression.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
