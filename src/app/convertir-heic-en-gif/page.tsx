import type { Metadata } from "next";
import Link from "next/link";
import HeicConvertForm from "@/components/HeicConvertForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir HEIC en GIF en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos photos iPhone HEIC en GIF en un clic. Gratuit, rapide, sans inscription. Compatible avec toutes les plateformes.",
  keywords: ["convertir heic en gif", "heic to gif", "heic gif gratuit", "photo iphone gif"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-heic-en-gif",
    siteName: "heictojpg.fr",
    title: "Convertir HEIC en GIF gratuitement en ligne",
    description: "Convertissez vos photos iPhone HEIC en GIF. Gratuit, rapide, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-heic-en-gif" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication",
  name: "Convertisseur HEIC en GIF", url: "https://heictojpg.fr/convertir-heic-en-gif",
  description: "Convertissez vos photos HEIC en GIF.",
  applicationCategory: "MultimediaApplication", operatingSystem: "Tout navigateur web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, inLanguage: "fr",
};

export default function ConvertirHeicEnGif() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir HEIC en GIF", href: "/convertir-heic-en-gif" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir HEIC en GIF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos photos iPhone HEIC en images GIF compatibles avec absolument
          toutes les plateformes. Le GIF est le format le plus universellement supporté.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-16">
        <HeicConvertForm title="Convertir HEIC en GIF" outputFormat="gif" outputExtension=".gif" />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir en GIF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format GIF (Graphics Interchange Format) est l&apos;un des plus anciens formats d&apos;image du web.
            Il est supporté par absolument tous les navigateurs, clients email et systèmes d&apos;exploitation.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>Compatibilité totale :</strong> fonctionne partout, même les anciens systèmes</li>
            <li>&bull; <strong>Email :</strong> tous les clients email affichent les GIF</li>
            <li>&bull; <strong>Transparence :</strong> supporte la transparence simple (1 bit)</li>
            <li>&bull; <strong>Limitation :</strong> 256 couleurs max, donc préférable pour les graphiques simples</li>
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
          <Link href="/convertir-heic-en-tiff" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; TIFF</h3>
            <p className="text-sm text-gray-600">Format professionnel pour l&apos;impression.</p>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
