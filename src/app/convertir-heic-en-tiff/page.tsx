import type { Metadata } from "next";
import Link from "next/link";
import HeicConvertForm from "@/components/HeicConvertForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir HEIC en TIFF en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos photos iPhone HEIC en TIFF haute qualité. Format professionnel pour l'impression et la retouche. Gratuit, sans inscription.",
  keywords: ["convertir heic en tiff", "heic to tiff", "heic tiff gratuit", "photo iphone tiff"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-heic-en-tiff",
    siteName: "heictojpg.fr",
    title: "Convertir HEIC en TIFF gratuitement en ligne",
    description: "Convertissez vos photos iPhone HEIC en TIFF. Gratuit, rapide, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-heic-en-tiff" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication",
  name: "Convertisseur HEIC en TIFF", url: "https://heictojpg.fr/convertir-heic-en-tiff",
  description: "Convertissez vos photos HEIC en TIFF professionnel.",
  applicationCategory: "MultimediaApplication", operatingSystem: "Tout navigateur web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, inLanguage: "fr",
};

export default function ConvertirHeicEnTiff() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir HEIC en TIFF", href: "/convertir-heic-en-tiff" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir HEIC en TIFF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos photos iPhone HEIC en TIFF, le format de reference pour l&apos;impression professionnelle
          et la retouche photo avancée. Qualité maximale sans compression destructrice.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-16">
        <HeicConvertForm title="Convertir HEIC en TIFF" outputFormat="tiff" outputExtension=".tiff" />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir en TIFF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le TIFF (Tagged Image File Format) est le format de reference dans le monde de l&apos;impression
            et de la photographie professionnelle. Il offre une qualité sans perte et supporte les
            espaces colorimétriques avancés (CMYK, 16 bits).
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>Impression pro :</strong> format préféré des imprimeurs et graphistes</li>
            <li>&bull; <strong>Retouche :</strong> compatible Photoshop, Lightroom, GIMP, Affinity</li>
            <li>&bull; <strong>Archivage :</strong> conservation sans perte de la qualité originale</li>
            <li>&bull; <strong>16 bits :</strong> plus de données colorimétriques pour la retouche</li>
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
            <p className="text-sm text-gray-600">Format optimisé pour le web.</p>
          </Link>
          <Link href="/convertir-heic-en-pdf" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; PDF</h3>
            <p className="text-sm text-gray-600">Intégrez vos photos dans un document.</p>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
