import type { Metadata } from "next";
import Link from "next/link";
import HeicConvertForm from "@/components/HeicConvertForm";

export const metadata: Metadata = {
  title: "Convertir HEIC en PDF en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos photos iPhone HEIC en document PDF en un clic. Gratuit, rapide, sans inscription. Ideal pour l'impression et le partage.",
  keywords: ["convertir heic en pdf", "heic to pdf", "heic pdf gratuit", "photo iphone pdf", "convertisseur heic pdf", "image heic en pdf"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-heic-en-pdf",
    siteName: "heictojpg.fr",
    title: "Convertir HEIC en PDF gratuitement en ligne",
    description: "Convertissez vos photos iPhone HEIC en PDF. Gratuit, rapide, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-heic-en-pdf" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Convertisseur HEIC en PDF",
  url: "https://heictojpg.fr/convertir-heic-en-pdf",
  description: "Convertissez vos photos HEIC en document PDF.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Tout navigateur web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "fr",
};

export default function ConvertirHeicEnPdf() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir HEIC en PDF gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos photos iPhone HEIC en documents PDF prets a imprimer ou a partager.
          Ideal pour creer des portfolios, des rapports photo ou archiver vos images.
          Gratuit, sans inscription.
        </p>
      </div>
      <div className="mb-16">
        <HeicConvertForm title="Convertir HEIC en PDF" outputFormat="pdf" outputExtension=".pdf" apiEndpoint="/api/heic-to-pdf" />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir HEIC en PDF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format PDF est le standard universel pour les documents. Convertir vos photos HEIC en PDF
            vous permet de les partager facilement par email, de les imprimer en haute qualite,
            ou de les integrer dans des dossiers professionnels.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Cas d&apos;utilisation</h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>Impression :</strong> imprimez vos photos iPhone en haute qualite</li>
            <li>&bull; <strong>Portfolio :</strong> creez un dossier photo professionnel</li>
            <li>&bull; <strong>Administration :</strong> joignez des photos a des documents officiels</li>
            <li>&bull; <strong>Archivage :</strong> conservez vos photos dans un format durable</li>
            <li>&bull; <strong>Email :</strong> envoyez des photos compatibles avec tous les appareils</li>
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Autres conversions HEIC</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; JPG</h3>
            <p className="text-sm text-gray-600">Le format le plus universel pour vos photos.</p>
          </Link>
          <Link href="/convertir-heic-en-png" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; PNG</h3>
            <p className="text-sm text-gray-600">Qualite sans perte avec transparence.</p>
          </Link>
          <Link href="/convertir-heic-en-webp" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; WebP</h3>
            <p className="text-sm text-gray-600">Format optimise pour le web moderne.</p>
          </Link>
          <Link href="/lire-metadonnees-heic" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Metadonnees HEIC</h3>
            <p className="text-sm text-gray-600">Lisez les donnees EXIF de vos fichiers HEIC.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
