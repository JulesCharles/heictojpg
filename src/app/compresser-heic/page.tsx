import type { Metadata } from "next";
import Link from "next/link";
import CompressHeicForm from "@/components/CompressHeicForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Compresser un fichier HEIC en ligne gratuit | heictojpg.fr",
  description: "Réduisez la taille de vos photos HEIC iPhone sans perte visible de qualité. Outil gratuit, rapide, sans inscription.",
  keywords: ["compresser heic", "réduire taille heic", "compresser photo iphone", "heic plus léger", "optimiser heic"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/compresser-heic",
    siteName: "heictojpg.fr",
    title: "Compresser un fichier HEIC gratuitement en ligne",
    description: "Réduisez la taille de vos photos HEIC. Gratuit, rapide, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/compresser-heic" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication",
  name: "Compresser HEIC", url: "https://heictojpg.fr/compresser-heic",
  description: "Réduisez la taille de vos fichiers HEIC gratuitement.",
  applicationCategory: "MultimediaApplication", operatingSystem: "Tout navigateur web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, inLanguage: "fr",
};

export default function CompresserHeic() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Compresser HEIC", href: "/compresser-heic" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Compresser un fichier HEIC gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Réduisez la taille de vos photos iPhone HEIC sans perte visible de qualité.
          Idéal pour libérer de l&apos;espace de stockage ou envoyer des photos par email.
          Le fichier compressé est exporté au format AVIF (même famille HEIF, compression supérieure).
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-16">
        <CompressHeicForm />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi compresser vos fichiers HEIC ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Les photos prises avec un iPhone en format HEIC sont déjà bien compressées,
            mais peuvent encore peser entre 2 et 8 Mo chacune. Avec des milliers de photos,
            cela représente plusieurs gigaoctets de stockage.
          </p>
          <p className="text-gray-600 mb-4">
            Notre outil compresse vos fichiers HEIC en AVIF, un format de la même famille
            (HEIF) qui offre une compression encore supérieure. Vous pouvez réduire la taille
            de 30 à 70% selon le niveau de qualité choisi.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Cas d&apos;utilisation</h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>Stockage :</strong> libérez de l&apos;espace sur votre iCloud ou disque dur</li>
            <li>&bull; <strong>Email :</strong> respectez les limites de taille des pièces jointes</li>
            <li>&bull; <strong>Web :</strong> optimisez vos images pour un chargement rapide</li>
            <li>&bull; <strong>Partage :</strong> envoyez des photos plus rapidement via WhatsApp, Messenger</li>
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Autres outils HEIC</h2>
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
          <Link href="/lire-metadonnees-heic" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Métadonnées HEIC</h3>
            <p className="text-sm text-gray-600">Lisez les données EXIF de vos photos.</p>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
