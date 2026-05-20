import type { Metadata } from "next";
import Link from "next/link";
import ToolCard, { ToolSection, type Tool } from "@/components/ToolCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdBanner from "@/components/AdBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Outils image en ligne gratuits - Convertir, compresser, editer | heictojpg.fr",
  description: "Convertissez et editez vos images en ligne gratuitement. JPG, PNG, WebP, SVG, AVIF, TIFF, BMP, GIF, ICO. Compressez, redimensionnez, recadrez, floutez et plus. Sans inscription.",
  keywords: ["outils image en ligne", "convertir image gratuit", "compresser image", "redimensionner image", "convertisseur image", "editer image en ligne"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/outils-image",
    siteName: "heictojpg.fr",
    title: "Outils image en ligne gratuits",
    description: "Convertissez, compressez et editez vos images gratuitement en ligne.",
  },
  alternates: { canonical: "https://heictojpg.fr/outils-image" },
};

const convertTools: Tool[] = [
  { href: "/convertir-jpg-en-webp", label: "JPG en WebP", desc: "25-35% plus leger que JPG.", icon: "WebP" },
  { href: "/convertir-png-en-webp", label: "PNG en WebP", desc: "Jusqu'a 80% plus leger.", icon: "WebP" },
  { href: "/convertir-png-en-jpg", label: "PNG en JPG", desc: "Reduisez la taille de vos PNG.", icon: "JPG" },
  { href: "/convertir-webp-en-jpg", label: "WebP en JPG", desc: "Compatibilite universelle.", icon: "JPG" },
  { href: "/convertir-webp-en-png", label: "WebP en PNG", desc: "Pour l'edition et le design.", icon: "PNG" },
  { href: "/convertir-jpg-en-png", label: "JPG en PNG", desc: "Qualite sans perte.", icon: "PNG" },
  { href: "/convertir-jpg-en-avif", label: "JPG en AVIF", desc: "50% plus leger que JPG.", icon: "AVIF" },
  { href: "/convertir-svg-en-png", label: "SVG en PNG", desc: "Vectoriel vers bitmap.", icon: "PNG" },
  { href: "/convertir-svg-en-jpg", label: "SVG en JPG", desc: "Vectoriel vers photo.", icon: "JPG" },
  { href: "/convertir-tiff-en-jpg", label: "TIFF en JPG", desc: "Scans et photos pro.", icon: "JPG" },
  { href: "/convertir-bmp-en-jpg", label: "BMP en JPG", desc: "Format ancien vers moderne.", icon: "JPG" },
  { href: "/convertir-gif-en-jpg", label: "GIF en JPG", desc: "Extrayez une image fixe.", icon: "JPG" },
  { href: "/convertir-png-en-ico", label: "PNG en ICO", desc: "Creez un favicon.", icon: "ICO" },
  { href: "/convertir-jpg-en-svg", label: "JPG en SVG", desc: "Vectorisation d'image.", icon: "SVG" },
  { href: "/convertir-png-en-svg", label: "PNG en SVG", desc: "Vectorisation sans perte.", icon: "SVG" },
  { href: "/convertir-avif-en-jpg", label: "AVIF en JPG", desc: "Ouvrez les fichiers AVIF.", icon: "JPG" },
  { href: "/convertir-ico-en-png", label: "ICO en PNG", desc: "Extrayez un favicon.", icon: "PNG" },
  { href: "/convertir-webp-en-avif", label: "WebP en AVIF", desc: "Le format le plus léger.", icon: "AVIF" },
  { href: "/convertir-avif-en-webp", label: "AVIF en WebP", desc: "Plus large compatibilité.", icon: "WebP" },
  { href: "/convertir-png-en-tiff", label: "PNG en TIFF", desc: "Pour l'impression pro.", icon: "TIFF" },
  { href: "/convertir-png-en-gif", label: "PNG en GIF", desc: "Compatible partout.", icon: "GIF" },
  { href: "/convertir-svg-en-webp", label: "SVG en WebP", desc: "Vectoriel vers web.", icon: "WebP" },
  { href: "/convertir-svg-en-avif", label: "SVG en AVIF", desc: "SVG ultra léger.", icon: "AVIF" },
  { href: "/convertir-tiff-en-avif", label: "TIFF en AVIF", desc: "Allégez vos scans.", icon: "AVIF" },
  { href: "/convertir-ico-en-jpg", label: "ICO en JPG", desc: "Favicon vers photo.", icon: "JPG" },
  { href: "/convertir-gif-en-avif", label: "GIF en AVIF", desc: "Animation ultra légère.", icon: "AVIF" },
  { href: "/convertir-gif-en-tiff", label: "GIF en TIFF", desc: "Pour l'archivage.", icon: "TIFF" },
  { href: "/convertir-bmp-en-webp", label: "BMP en WebP", desc: "Modernisez vos BMP.", icon: "WebP" },
  { href: "/convertir-bmp-en-avif", label: "BMP en AVIF", desc: "BMP ultra compact.", icon: "AVIF" },
  { href: "/convertir-webp-en-tiff", label: "WebP en TIFF", desc: "Web vers impression.", icon: "TIFF" },
  { href: "/convertir-avif-en-gif", label: "AVIF en GIF", desc: "Compatibilité maximale.", icon: "GIF" },
  { href: "/convertir-avif-en-tiff", label: "AVIF en TIFF", desc: "Pour l'impression.", icon: "TIFF" },
];

const editTools: Tool[] = [
  { href: "/compresser-image", label: "Compresser image", desc: "Reduisez le poids de vos photos.", icon: "ZIP" },
  { href: "/redimensionner-image", label: "Redimensionner", desc: "Changez la taille de vos images.", icon: "RSZ" },
  { href: "/recadrer-image", label: "Recadrer", desc: "Decoupez la zone souhaitee.", icon: "CRP" },
  { href: "/pivoter-image", label: "Pivoter / Retourner", desc: "Corrigez l'orientation.", icon: "ROT" },
  { href: "/supprimer-fond-image", label: "Supprimer le fond", desc: "Detourage IA automatique.", icon: "AI" },
  { href: "/flouter-image", label: "Flouter", desc: "Vie privee et effet artistique.", icon: "BLR" },
  { href: "/convertir-image-noir-et-blanc", label: "Noir et blanc", desc: "Effet niveaux de gris.", icon: "B&W" },
  { href: "/ajouter-filigrane", label: "Filigrane", desc: "Protegez vos photos.", icon: "WM" },
  { href: "/changer-dpi-image", label: "Changer DPI", desc: "72, 150 ou 300 DPI.", icon: "DPI" },
  { href: "/inverser-couleurs-image", label: "Inverser couleurs", desc: "Effet negatif.", icon: "INV" },
  { href: "/supprimer-metadonnees-image", label: "Supprimer EXIF", desc: "Protegez votre vie privee.", icon: "DEL" },
  { href: "/lire-metadonnees-image", label: "Lire EXIF", desc: "Analysez vos photos.", icon: "EXIF" },
];

const allTools = [...convertTools, ...editTools];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Outils image en ligne gratuits",
  description: "Convertissez, compressez et editez vos images gratuitement en ligne.",
  url: "https://heictojpg.fr/outils-image",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: allTools.map((tool, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: tool.label,
      url: `https://heictojpg.fr${tool.href}`,
    })),
  },
};

export default function OutilsImage() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Outils image", href: "/outils-image" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Outils image en ligne gratuits</h1>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
          Convertissez vos images entre tous les formats (JPG, PNG, WebP, AVIF, SVG, TIFF, BMP, GIF, ICO),
          compressez, redimensionnez, recadrez et editez vos photos. Tout est gratuit, sans inscription.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-6xl">

      <ToolSection title="Convertir des images" tag="Tous les formats" tools={convertTools} scheme="green" />

      <AdBanner slot="SLOT_1" format="horizontal" />

      <ToolSection title="Editer des images" tag="Retouche" tools={editTools} scheme="purple" />

      <AdBanner slot="SLOT_2" format="horizontal" />

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pourquoi convertir vos images ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Chaque format d&apos;image a ses avantages. Le <strong>JPG</strong> est le format universel, compatible partout.
            Le <strong>PNG</strong> conserve la qualite sans perte et supporte la transparence. Le <strong>WebP</strong>, recommande par Google,
            offre une compression 25 a 35% superieure au JPG. L&apos;<strong>AVIF</strong> est le format le plus performant, avec jusqu&apos;a 50% de gain par rapport au JPG.
          </p>
          <p className="text-gray-600 mb-4">
            Convertir vos images dans le bon format vous permet d&apos;optimiser la vitesse de chargement de vos sites web,
            de reduire l&apos;espace de stockage utilise, ou simplement de rendre vos fichiers compatibles avec un logiciel ou une plateforme.
          </p>
          <p className="text-gray-600 mb-4">
            Nos outils d&apos;edition vous permettent egalement de compresser vos photos pour reduire leur poids,
            de redimensionner ou recadrer vos images, de supprimer l&apos;arriere-plan automatiquement grace a l&apos;IA,
            ou encore de lire et supprimer les metadonnees EXIF pour proteger votre vie privee.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ressources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog" className="block p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Blog</h3>
            <p className="text-sm text-gray-600">Articles et guides sur la conversion et l&apos;optimisation d&apos;images.</p>
          </Link>
          <Link href="/format" className="block p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Glossaire des formats</h3>
            <p className="text-sm text-gray-600">Tout savoir sur les formats d&apos;image : JPG, PNG, WebP, AVIF, SVG, HEIC...</p>
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Quel format d&apos;image choisir ?</h3>
            <p className="text-gray-600 text-sm">JPG pour les photos, PNG pour les images avec transparence, WebP pour le web, SVG pour les logos et icones, AVIF pour la meilleure compression.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Comment compresser une image sans perdre en qualite ?</h3>
            <p className="text-gray-600 text-sm">Notre outil de compression utilise des algorithmes intelligents qui reduisent la taille du fichier tout en preservant la qualite visuelle. Vous pouvez ajuster le niveau de compression.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Mes images sont-elles en securite ?</h3>
            <p className="text-gray-600 text-sm">Oui, toutes les conversions se font dans votre navigateur. Vos fichiers ne sont jamais envoyes ni conserves sur nos serveurs.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
