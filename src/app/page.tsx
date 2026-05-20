import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import { ToolSection, type Tool } from "@/components/ToolCard";

export const metadata: Metadata = {
  title: "heictojpg.fr - 50+ Outils Image et PDF Gratuits en Ligne, Sans Inscription",
  description: "Convertissez HEIC en JPG, compressez, redimensionnez et éditez vos images en ligne gratuitement. 50+ outils pour HEIC, JPG, PNG, WebP, SVG, PDF. Sans inscription, sans limite. Vos fichiers ne sont pas conservés.",
  keywords: [
    "convertir image en ligne",
    "outils image gratuit",
    "convertisseur image",
    "compresser image",
    "heic to jpg",
    "convertir heic en jpg",
    "outils pdf gratuit",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr",
    siteName: "heictojpg.fr",
    title: "heictojpg.fr - 50+ Outils Image et PDF Gratuits en Ligne",
    description: "Convertissez HEIC en JPG, compressez, redimensionnez et éditez vos images gratuitement. 50+ outils sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "heictojpg.fr",
  url: "https://heictojpg.fr",
  description: "Outils de conversion et d'édition d'images en ligne gratuits.",
  inLanguage: "fr",
};

const heicTools: Tool[] = [
  { href: "/convertir-heic-en-jpg", label: "HEIC en JPG", desc: "Le format universel pour vos photos iPhone.", icon: "JPG", primary: true },
  { href: "/convertir-heic-en-png", label: "HEIC en PNG", desc: "Qualité sans perte avec transparence.", icon: "PNG" },
  { href: "/convertir-heic-en-webp", label: "HEIC en WebP", desc: "Optimisé pour le web moderne.", icon: "WebP" },
  { href: "/convertir-heic-en-pdf", label: "HEIC en PDF", desc: "Pour l'impression et les documents.", icon: "PDF" },
  { href: "/convertir-heic-en-avif", label: "HEIC en AVIF", desc: "Le format le plus performant.", icon: "AVIF" },
  { href: "/convertir-heic-en-tiff", label: "HEIC en TIFF", desc: "Format pro pour l'impression.", icon: "TIFF" },
  { href: "/convertir-heic-en-gif", label: "HEIC en GIF", desc: "Compatible partout.", icon: "GIF" },
  { href: "/convertir-heic-en-ico", label: "HEIC en ICO", desc: "Créez un favicon.", icon: "ICO" },
  { href: "/compresser-heic", label: "Compresser HEIC", desc: "Réduisez la taille.", icon: "ZIP" },
  { href: "/lire-metadonnees-heic", label: "Métadonnées HEIC", desc: "Lisez les données EXIF.", icon: "EXIF" },
];

const convertTools: Tool[] = [
  { href: "/convertir-jpg-en-webp", label: "JPG en WebP", desc: "25-35% plus léger que JPG.", icon: "WebP" },
  { href: "/convertir-png-en-webp", label: "PNG en WebP", desc: "Jusqu'à 80% plus léger.", icon: "WebP" },
  { href: "/convertir-png-en-jpg", label: "PNG en JPG", desc: "Réduisez la taille de vos PNG.", icon: "JPG" },
  { href: "/convertir-webp-en-jpg", label: "WebP en JPG", desc: "Compatibilité universelle.", icon: "JPG" },
  { href: "/convertir-webp-en-png", label: "WebP en PNG", desc: "Pour l'édition et le design.", icon: "PNG" },
  { href: "/convertir-jpg-en-png", label: "JPG en PNG", desc: "Qualité sans perte.", icon: "PNG" },
  { href: "/convertir-jpg-en-avif", label: "JPG en AVIF", desc: "50% plus léger que JPG.", icon: "AVIF" },
  { href: "/convertir-svg-en-png", label: "SVG en PNG", desc: "Vectoriel vers bitmap.", icon: "PNG" },
  { href: "/convertir-svg-en-jpg", label: "SVG en JPG", desc: "Vectoriel vers photo.", icon: "JPG" },
  { href: "/convertir-tiff-en-jpg", label: "TIFF en JPG", desc: "Scans et photos pro.", icon: "JPG" },
  { href: "/convertir-bmp-en-jpg", label: "BMP en JPG", desc: "Format ancien vers moderne.", icon: "JPG" },
  { href: "/convertir-gif-en-jpg", label: "GIF en JPG", desc: "Extrayez une image fixe.", icon: "JPG" },
  { href: "/convertir-png-en-ico", label: "PNG en ICO", desc: "Créez un favicon.", icon: "ICO" },
  { href: "/convertir-jpg-en-svg", label: "JPG en SVG", desc: "Vectorisation d'image.", icon: "SVG" },
  { href: "/convertir-png-en-svg", label: "PNG en SVG", desc: "Vectorisation sans perte.", icon: "SVG" },
  { href: "/convertir-avif-en-jpg", label: "AVIF en JPG", desc: "Ouvrez les fichiers AVIF.", icon: "JPG" },
  { href: "/convertir-ico-en-png", label: "ICO en PNG", desc: "Extrayez un favicon.", icon: "PNG" },
  { href: "/convertir-webp-en-avif", label: "WebP en AVIF", desc: "Le format le plus léger.", icon: "AVIF" },
  { href: "/convertir-avif-en-webp", label: "AVIF en WebP", desc: "Plus large compatibilité.", icon: "WebP" },
  { href: "/convertir-png-en-tiff", label: "PNG en TIFF", desc: "Pour l'impression pro.", icon: "TIFF" },
  { href: "/convertir-png-en-gif", label: "PNG en GIF", desc: "Format compatible partout.", icon: "GIF" },
  { href: "/convertir-svg-en-webp", label: "SVG en WebP", desc: "Vectoriel vers web.", icon: "WebP" },
  { href: "/convertir-tiff-en-avif", label: "TIFF en AVIF", desc: "Allégez vos scans.", icon: "AVIF" },
  { href: "/convertir-ico-en-jpg", label: "ICO en JPG", desc: "Favicon vers photo.", icon: "JPG" },
  { href: "/convertir-gif-en-avif", label: "GIF en AVIF", desc: "Animation ultra légère.", icon: "AVIF" },
  { href: "/convertir-bmp-en-webp", label: "BMP en WebP", desc: "Modernisez vos BMP.", icon: "WebP" },
];

const editTools: Tool[] = [
  { href: "/compresser-image", label: "Compresser image", desc: "Réduisez le poids de vos photos.", icon: "ZIP" },
  { href: "/redimensionner-image", label: "Redimensionner", desc: "Changez la taille de vos images.", icon: "RSZ" },
  { href: "/recadrer-image", label: "Recadrer", desc: "Découpez la zone souhaitée.", icon: "CRP" },
  { href: "/pivoter-image", label: "Pivoter / Retourner", desc: "Corrigez l'orientation.", icon: "ROT" },
  { href: "/supprimer-fond-image", label: "Supprimer le fond", desc: "Détourage IA automatique.", icon: "AI" },
  { href: "/flouter-image", label: "Flouter", desc: "Vie privée et effet artistique.", icon: "BLR" },
  { href: "/convertir-image-noir-et-blanc", label: "Noir et blanc", desc: "Effet niveaux de gris.", icon: "B&W" },
  { href: "/ajouter-filigrane", label: "Filigrane", desc: "Protégez vos photos.", icon: "WM" },
  { href: "/changer-dpi-image", label: "Changer DPI", desc: "72, 150 ou 300 DPI.", icon: "DPI" },
  { href: "/inverser-couleurs-image", label: "Inverser couleurs", desc: "Effet négatif.", icon: "INV" },
  { href: "/supprimer-metadonnees-image", label: "Supprimer EXIF", desc: "Protégez votre vie privée.", icon: "DEL" },
  { href: "/lire-metadonnees-image", label: "Lire EXIF", desc: "Analysez vos photos.", icon: "EXIF" },
];

const pdfTools: Tool[] = [
  { href: "/fusionner-pdf", label: "Fusionner PDF", desc: "Combinez plusieurs PDF en un.", icon: "MRG" },
  { href: "/diviser-pdf", label: "Diviser PDF", desc: "Séparez un PDF par pages.", icon: "SPL" },
  { href: "/compresser-pdf", label: "Compresser PDF", desc: "Réduisez la taille.", icon: "ZIP" },
  { href: "/convertir-jpg-en-pdf", label: "JPG en PDF", desc: "Images vers document PDF.", icon: "PDF" },
  { href: "/convertir-png-en-pdf", label: "PNG en PDF", desc: "Captures vers PDF.", icon: "PDF" },
  { href: "/convertir-pdf-en-jpg", label: "PDF en JPG", desc: "Extrayez les pages en images.", icon: "JPG" },
  { href: "/convertir-pdf-en-png", label: "PDF en PNG", desc: "Pages en PNG haute qualité.", icon: "PNG" },
];


export default function Home() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="relative bg-gradient-to-b from-slate-50 to-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Plus de 50 outils gratuits
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-[1.1]">
            Tous vos outils<br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              image et PDF
            </span>
            {" "}en ligne
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Convertissez, compressez, redimensionnez et éditez vos images gratuitement.
            Sans inscription. Aucun fichier conservé.
          </p>
        </div>
      </div>

      {/* Tools */}
      <div className="max-w-6xl mx-auto px-4 py-16">

        <ToolSection title="Outils HEIC" tag="Photos iPhone" tools={heicTools} scheme="blue" seeAllHref="/outils-heic" />

        <AdBanner slot="SLOT_1" format="horizontal" />

        <ToolSection title="Convertir des images" tag="Tous les formats" tools={convertTools} scheme="green" seeAllHref="/outils-image" />

        <ToolSection title="Éditer des images" tag="Retouche" tools={editTools} scheme="purple" seeAllHref="/outils-image" />

        <AdBanner slot="SLOT_2" format="horizontal" />

        <ToolSection title="Outils PDF" tag="Documents" tools={pdfTools} scheme="red" seeAllHref="/outils-pdf" />

        {/* Guides */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-8">Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { href: "/convertir-heic-en-jpg-sur-iphone", title: "Convertir HEIC sur iPhone", desc: "Changez le format par défaut ou convertissez vos photos." },
              { href: "/convertir-heic-en-jpg-sur-mac", title: "Convertir HEIC sur Mac", desc: "Utilisez Aperçu, Automator ou notre outil en ligne." },
              { href: "/convertir-heic-en-jpg-sur-windows", title: "Convertir HEIC sur Windows", desc: "Ouvrez et convertissez vos fichiers HEIC sur PC." },
              { href: "/convertir-heic-en-jpg-sur-android", title: "Convertir HEIC sur Android", desc: "Solutions pour ouvrir les photos iPhone sur Android." },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-[15px] mb-1">{guide.title}</h3>
                  <p className="text-gray-500 text-[13px]">{guide.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-8">Articles récents</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: "/blog/heic-vs-jpg", title: "HEIC vs JPG : lequel choisir ?", desc: "Comparatif détaillé entre les deux formats." },
              { href: "/blog/format-webp", title: "Tout savoir sur le format WebP", desc: "Le format recommandé par Google pour le web." },
              { href: "/blog/comment-convertir-heic-en-jpg", title: "Convertir HEIC en JPG (guide)", desc: "Guide étape par étape, gratuit." },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group block p-5 bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center mb-3 group-hover:bg-blue-50 transition-colors">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{post.title}</h3>
                <p className="text-gray-500 text-xs">{post.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/blog" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
              Voir tous les articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
