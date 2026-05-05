import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "heictojpg.fr - Outils image et PDF en ligne gratuits",
  description: "Convertissez, compressez, redimensionnez et editez vos images en ligne gratuitement. HEIC, JPG, PNG, WebP, SVG, PDF et plus. Sans inscription.",
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
    title: "heictojpg.fr - Outils image et PDF en ligne gratuits",
    description: "Convertissez, compressez et editez vos images en ligne gratuitement.",
  },
  alternates: { canonical: "https://heictojpg.fr" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "heictojpg.fr",
  url: "https://heictojpg.fr",
  description: "Outils de conversion et d'edition d'images en ligne gratuits.",
  inLanguage: "fr",
};

interface Tool {
  href: string;
  label: string;
  desc: string;
  icon: string;
  primary?: boolean;
}

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

const pdfTools: Tool[] = [
  { href: "/fusionner-pdf", label: "Fusionner PDF", desc: "Combinez plusieurs PDF en un.", icon: "MRG" },
  { href: "/diviser-pdf", label: "Diviser PDF", desc: "Separez un PDF par pages.", icon: "SPL" },
  { href: "/compresser-pdf", label: "Compresser PDF", desc: "Reduisez la taille.", icon: "ZIP" },
  { href: "/convertir-jpg-en-pdf", label: "JPG en PDF", desc: "Images vers document PDF.", icon: "PDF" },
  { href: "/convertir-png-en-pdf", label: "PNG en PDF", desc: "Captures vers PDF.", icon: "PDF" },
  { href: "/convertir-pdf-en-jpg", label: "PDF en JPG", desc: "Extrayez les pages en images.", icon: "JPG" },
  { href: "/convertir-pdf-en-png", label: "PDF en PNG", desc: "Pages en PNG haute qualite.", icon: "PNG" },
];

const colorSchemes = {
  blue: { iconBg: "bg-blue-100", iconText: "text-blue-600", hoverBorder: "hover:border-blue-300", tagBg: "bg-blue-50", tagText: "text-blue-600" },
  green: { iconBg: "bg-emerald-100", iconText: "text-emerald-600", hoverBorder: "hover:border-emerald-300", tagBg: "bg-emerald-50", tagText: "text-emerald-600" },
  purple: { iconBg: "bg-violet-100", iconText: "text-violet-600", hoverBorder: "hover:border-violet-300", tagBg: "bg-violet-50", tagText: "text-violet-600" },
  red: { iconBg: "bg-rose-100", iconText: "text-rose-600", hoverBorder: "hover:border-rose-300", tagBg: "bg-rose-50", tagText: "text-rose-600" },
};

function FileIcon({ format, color }: { format: string; color: string }) {
  const bgColors: Record<string, string> = {
    blue: "#3b82f6", green: "#10b981", purple: "#8b5cf6", red: "#f43f5e",
  };
  const fill = bgColors[color] || bgColors.blue;
  return (
    <div className="relative w-14 h-16 mb-3">
      {/* File shape */}
      <svg viewBox="0 0 40 48" className="w-full h-full" fill="none">
        <path d="M4 4C4 1.79 5.79 0 8 0H26L36 10V44C36 46.21 34.21 48 32 48H8C5.79 48 4 46.21 4 44V4Z" fill={fill} opacity="0.12" />
        <path d="M26 0L36 10H30C27.79 10 26 8.21 26 6V0Z" fill={fill} opacity="0.25" />
        <path d="M4 4C4 1.79 5.79 0 8 0H26L36 10V44C36 46.21 34.21 48 32 48H8C5.79 48 4 46.21 4 44V4Z" stroke={fill} strokeWidth="1.5" opacity="0.3" />
      </svg>
      {/* Format badge */}
      <span
        className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-extrabold tracking-wide text-white px-1.5 py-0.5 rounded"
        style={{ backgroundColor: fill }}
      >
        {format}
      </span>
    </div>
  );
}

function ToolCard({ tool, scheme }: { tool: Tool; scheme: keyof typeof colorSchemes }) {
  const colors = colorSchemes[scheme];
  return (
    <Link
      href={tool.href}
      className={`group block bg-white rounded-2xl border border-gray-200/80 p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${colors.hoverBorder} ${tool.primary ? "ring-2 ring-blue-200 shadow-md" : "shadow-sm"}`}
    >
      <FileIcon format={tool.icon} color={scheme} />
      <h3 className="font-semibold text-gray-900 text-[15px] mb-1.5 leading-snug">{tool.label}</h3>
      <p className="text-gray-500 text-[13px] leading-relaxed">{tool.desc}</p>
    </Link>
  );
}

function ToolSection({
  title,
  tag,
  tools,
  scheme,
}: {
  title: string;
  tag: string;
  tools: Tool[];
  scheme: keyof typeof colorSchemes;
}) {
  const colors = colorSchemes[scheme];
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colors.tagBg} ${colors.tagText}`}>
          {tag}
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {tools.map((tool) => (
          <ToolCard key={tool.href} tool={tool} scheme={scheme} />
        ))}
      </div>
    </section>
  );
}

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
            Convertissez, compressez, redimensionnez et editez vos images gratuitement.
            Sans inscription. Aucun fichier conserve.
          </p>
        </div>
      </div>

      {/* Tools */}
      <div className="max-w-6xl mx-auto px-4 py-16">

        <ToolSection title="Outils HEIC" tag="Photos iPhone" tools={heicTools} scheme="blue" />

        <AdBanner slot="SLOT_1" format="horizontal" />

        <ToolSection title="Convertir des images" tag="Tous les formats" tools={convertTools} scheme="green" />

        <ToolSection title="Editer des images" tag="Retouche" tools={editTools} scheme="purple" />

        <AdBanner slot="SLOT_2" format="horizontal" />

        <ToolSection title="Outils PDF" tag="Documents" tools={pdfTools} scheme="red" />

        {/* Guides */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-8">Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { href: "/convertir-heic-en-jpg-sur-iphone", title: "Convertir HEIC sur iPhone", desc: "Changez le format par defaut ou convertissez vos photos." },
              { href: "/convertir-heic-en-jpg-sur-mac", title: "Convertir HEIC sur Mac", desc: "Utilisez Apercu, Automator ou notre outil en ligne." },
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
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-8">Articles recents</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: "/blog/heic-vs-jpg-quelle-difference", title: "HEIC vs JPG : quelle difference ?", desc: "Comparaison complete entre les deux formats." },
              { href: "/blog/ouvrir-fichier-heic-windows", title: "Ouvrir un fichier HEIC sur Windows", desc: "4 methodes gratuites pour vos fichiers HEIC." },
              { href: "/blog/convertir-heic-en-jpg-sans-perte-qualite", title: "Convertir sans perte de qualite", desc: "Les meilleures techniques de conversion." },
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
