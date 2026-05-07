import type { Metadata } from "next";
import Link from "next/link";
import ToolCard, { type Tool } from "@/components/ToolCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdBanner from "@/components/AdBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Outils HEIC en ligne gratuits - Convertir, compresser, lire | heictojpg.fr",
  description: "Tous les outils pour convertir vos photos HEIC (iPhone) en JPG, PNG, WebP, PDF, AVIF, TIFF, GIF, ICO. Compressez et lisez les metadonnees EXIF. Gratuit, sans inscription.",
  keywords: ["outils heic", "convertir heic", "heic en jpg", "heic en png", "convertisseur heic gratuit", "photo iphone heic"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/outils-heic",
    siteName: "heictojpg.fr",
    title: "Outils HEIC en ligne gratuits",
    description: "Convertissez, compressez et analysez vos photos HEIC gratuitement.",
  },
  alternates: { canonical: "https://heictojpg.fr/outils-heic" },
};

const heicTools: Tool[] = [
  { href: "/convertir-heic-en-jpg", label: "HEIC en JPG", desc: "Le format universel pour vos photos iPhone.", icon: "JPG", primary: true },
  { href: "/convertir-heic-en-png", label: "HEIC en PNG", desc: "Qualite sans perte avec transparence.", icon: "PNG" },
  { href: "/convertir-heic-en-webp", label: "HEIC en WebP", desc: "Optimise pour le web moderne.", icon: "WebP" },
  { href: "/convertir-heic-en-pdf", label: "HEIC en PDF", desc: "Pour l'impression et les documents.", icon: "PDF" },
  { href: "/convertir-heic-en-avif", label: "HEIC en AVIF", desc: "Le format le plus performant.", icon: "AVIF" },
  { href: "/convertir-heic-en-tiff", label: "HEIC en TIFF", desc: "Format pro pour l'impression.", icon: "TIFF" },
  { href: "/convertir-heic-en-gif", label: "HEIC en GIF", desc: "Compatible partout.", icon: "GIF" },
  { href: "/convertir-heic-en-ico", label: "HEIC en ICO", desc: "Creez un favicon.", icon: "ICO" },
  { href: "/compresser-heic", label: "Compresser HEIC", desc: "Reduisez la taille.", icon: "ZIP" },
  { href: "/lire-metadonnees-heic", label: "Metadonnees HEIC", desc: "Lisez les donnees EXIF.", icon: "EXIF" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Outils HEIC en ligne",
  description: "Tous les outils pour convertir, compresser et analyser vos photos HEIC.",
  url: "https://heictojpg.fr/outils-heic",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: heicTools.map((tool, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: tool.label,
      url: `https://heictojpg.fr${tool.href}`,
    })),
  },
};

export default function OutilsHeic() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Outils HEIC", href: "/outils-heic" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Outils HEIC en ligne gratuits</h1>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
          Convertissez vos photos iPhone au format HEIC en JPG, PNG, WebP, PDF et bien d&apos;autres formats.
          Compressez vos fichiers HEIC ou lisez leurs metadonnees EXIF. Tout est gratuit, sans inscription.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-6xl">

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
        {heicTools.map((tool) => (
          <ToolCard key={tool.href} tool={tool} scheme="blue" />
        ))}
      </div>

      <AdBanner slot="SLOT_1" format="horizontal" />

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Qu&apos;est-ce que le format HEIC ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format <strong>HEIC</strong> (High Efficiency Image Container) est le format photo par defaut sur tous les appareils Apple depuis iOS 11.
            Chaque photo prise avec un iPhone est enregistree au format HEIC, qui utilise le codec HEVC (H.265) pour compresser les images.
            Le resultat : des fichiers 50% plus legers que le JPEG, avec une qualite identique.
          </p>
          <p className="text-gray-600 mb-4">
            Le probleme ? Le HEIC n&apos;est pas universellement compatible. Windows, Android, de nombreux logiciels et sites web ne le supportent pas nativement.
            C&apos;est pourquoi convertir vos fichiers HEIC dans un format plus standard comme JPG, PNG ou WebP est souvent necessaire.
          </p>
          <p className="text-gray-600 mb-4">
            Nos outils HEIC vous permettent de convertir vos photos dans 8 formats differents, de compresser vos fichiers HEIC pour reduire leur taille,
            ou de lire les metadonnees EXIF (date, lieu, appareil photo) de vos images. Tout se fait en ligne, dans votre navigateur, sans rien installer.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides de conversion HEIC par appareil</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/convertir-heic-en-jpg-sur-iphone" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Sur iPhone</h3>
            <p className="text-sm text-gray-600">Changez le format par defaut ou convertissez vos photos.</p>
          </Link>
          <Link href="/convertir-heic-en-jpg-sur-mac" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Sur Mac</h3>
            <p className="text-sm text-gray-600">Utilisez Apercu, Automator ou notre outil en ligne.</p>
          </Link>
          <Link href="/convertir-heic-en-jpg-sur-windows" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Sur Windows</h3>
            <p className="text-sm text-gray-600">Ouvrez et convertissez vos fichiers HEIC sur PC.</p>
          </Link>
          <Link href="/convertir-heic-en-jpg-sur-android" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Sur Android</h3>
            <p className="text-sm text-gray-600">Solutions pour ouvrir les photos iPhone sur Android.</p>
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Pourquoi mes photos iPhone sont en HEIC ?</h3>
            <p className="text-gray-600 text-sm">Apple utilise le HEIC par defaut depuis iOS 11 car il offre une meilleure compression (50% plus leger que JPG) tout en conservant la meme qualite visuelle.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Quel format choisir pour convertir mes HEIC ?</h3>
            <p className="text-gray-600 text-sm">JPG pour la compatibilite universelle, PNG pour la transparence, WebP pour le web, PDF pour les documents. AVIF offre la meilleure compression moderne.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">La conversion est-elle gratuite ?</h3>
            <p className="text-gray-600 text-sm">Oui, tous nos outils HEIC sont gratuits, sans inscription et sans filigrane. Vos fichiers ne sont jamais conserves sur nos serveurs.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
