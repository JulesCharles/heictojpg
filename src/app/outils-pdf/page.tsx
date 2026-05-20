import type { Metadata } from "next";
import Link from "next/link";
import ToolCard, { type Tool } from "@/components/ToolCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdBanner from "@/components/AdBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Outils PDF en ligne gratuits - Fusionner, diviser, compresser | heictojpg.fr",
  description: "Tous les outils PDF gratuits : fusionner, diviser, compresser, convertir, numeroter, pivoter, reorganiser, proteger vos documents PDF. Sans inscription.",
  keywords: ["outils pdf en ligne gratuit", "fusionner pdf", "diviser pdf", "compresser pdf", "convertir pdf", "pdf gratuit"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/outils-pdf",
    siteName: "heictojpg.fr",
    title: "Outils PDF en ligne gratuits",
    description: "Fusionnez, divisez, compressez et convertissez vos PDF gratuitement.",
  },
  alternates: { canonical: "https://heictojpg.fr/outils-pdf" },
};

const pdfTools: Tool[] = [
  { href: "/fusionner-pdf", label: "Fusionner PDF", desc: "Combinez plusieurs PDF en un.", icon: "MRG", primary: true },
  { href: "/diviser-pdf", label: "Diviser PDF", desc: "Separez un PDF par pages.", icon: "SPL" },
  { href: "/compresser-pdf", label: "Compresser PDF", desc: "Reduisez la taille.", icon: "ZIP" },
  { href: "/convertir-jpg-en-pdf", label: "JPG en PDF", desc: "Images vers document PDF.", icon: "PDF" },
  { href: "/convertir-png-en-pdf", label: "PNG en PDF", desc: "Captures vers PDF.", icon: "PDF" },
  { href: "/convertir-pdf-en-jpg", label: "PDF en JPG", desc: "Extrayez les pages en images.", icon: "JPG" },
  { href: "/convertir-pdf-en-png", label: "PDF en PNG", desc: "Pages en PNG haute qualite.", icon: "PNG" },
  { href: "/convertir-images-en-pdf", label: "Images en PDF", desc: "Combinez des images en PDF.", icon: "PDF" },
  { href: "/numeroter-pages-pdf", label: "Numeroter pages", desc: "Ajoutez des numeros de page.", icon: "NUM" },
  { href: "/supprimer-pages-pdf", label: "Supprimer pages", desc: "Retirez des pages d'un PDF.", icon: "DEL" },
  { href: "/pivoter-pdf", label: "Pivoter PDF", desc: "Corrigez l'orientation des pages.", icon: "ROT" },
  { href: "/reorganiser-pages-pdf", label: "Reorganiser pages", desc: "Changez l'ordre des pages.", icon: "ORD" },
  { href: "/proteger-pdf", label: "Proteger PDF", desc: "Ajoutez un mot de passe.", icon: "LCK" },
  { href: "/convertir-tiff-en-pdf", label: "TIFF en PDF", desc: "Scans vers document PDF.", icon: "PDF" },
  { href: "/convertir-bmp-en-pdf", label: "BMP en PDF", desc: "BMP vers document PDF.", icon: "PDF" },
  { href: "/convertir-gif-en-pdf", label: "GIF en PDF", desc: "GIF vers document PDF.", icon: "PDF" },
  { href: "/convertir-avif-en-pdf", label: "AVIF en PDF", desc: "AVIF vers document PDF.", icon: "PDF" },
  { href: "/convertir-webp-en-pdf", label: "WebP en PDF", desc: "WebP vers document PDF.", icon: "PDF" },
  { href: "/convertir-svg-en-pdf", label: "SVG en PDF", desc: "Vectoriel vers PDF.", icon: "PDF" },
  { href: "/convertir-pdf-en-webp", label: "PDF en WebP", desc: "Pages en WebP léger.", icon: "WebP" },
  { href: "/convertir-pdf-en-avif", label: "PDF en AVIF", desc: "Pages ultra légères.", icon: "AVIF" },
  { href: "/convertir-pdf-en-tiff", label: "PDF en TIFF", desc: "Pages haute qualité.", icon: "TIFF" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Outils PDF en ligne gratuits",
  description: "Tous les outils pour fusionner, diviser, compresser et convertir vos PDF.",
  url: "https://heictojpg.fr/outils-pdf",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: pdfTools.map((tool, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: tool.label,
      url: `https://heictojpg.fr${tool.href}`,
    })),
  },
};

export default function OutilsPdf() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Outils PDF", href: "/outils-pdf" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Outils PDF en ligne gratuits</h1>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
          Fusionnez, divisez, compressez, convertissez, numerotez, pivotez et protegez vos fichiers PDF.
          Tous les outils sont gratuits, sans inscription et sans filigrane.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-6xl">

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
        {pdfTools.map((tool) => (
          <ToolCard key={tool.href} tool={tool} scheme="red" />
        ))}
      </div>

      <AdBanner slot="SLOT_1" format="horizontal" />

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pourquoi utiliser nos outils PDF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le <strong>PDF</strong> (Portable Document Format) est le format standard pour partager des documents.
            Que ce soit pour le travail, les etudes ou l&apos;administratif, vous avez souvent besoin de manipuler des fichiers PDF :
            combiner plusieurs documents, extraire certaines pages, reduire la taille d&apos;un fichier trop lourd pour l&apos;envoyer par email.
          </p>
          <p className="text-gray-600 mb-4">
            Nos outils PDF couvrent tous les besoins courants : <strong>fusionner</strong> plusieurs PDF en un seul document,
            <strong> diviser</strong> un PDF en fichiers separes, <strong>compresser</strong> pour reduire la taille,
            <strong> convertir</strong> entre PDF et images (JPG, PNG), <strong>numeroter</strong> les pages,
            <strong> pivoter</strong> ou <strong>reorganiser</strong> les pages, et <strong>proteger</strong> vos documents avec un mot de passe.
          </p>
          <p className="text-gray-600 mb-4">
            Tout se fait directement dans votre navigateur, sans installer de logiciel. Vos fichiers restent sur votre ordinateur
            et ne sont jamais envoyes sur nos serveurs. C&apos;est rapide, securise et entierement gratuit.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ressources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog" className="block p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Blog</h3>
            <p className="text-sm text-gray-600">Articles et guides sur la gestion de documents PDF.</p>
          </Link>
          <Link href="/format" className="block p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Glossaire des formats</h3>
            <p className="text-sm text-gray-600">Tout savoir sur les formats de fichiers : PDF, JPG, PNG, WebP...</p>
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Comment fusionner plusieurs PDF ?</h3>
            <p className="text-gray-600 text-sm">Utilisez notre outil &quot;Fusionner PDF&quot;. Glissez-deposez vos fichiers, reordonnez-les si necessaire, puis cliquez sur fusionner. Vous obtiendrez un seul document PDF.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Comment reduire la taille d&apos;un PDF ?</h3>
            <p className="text-gray-600 text-sm">Notre outil &quot;Compresser PDF&quot; reduit la taille de vos fichiers en optimisant les images et les polices integrees, tout en conservant la lisibilite du document.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Mes documents sont-ils en securite ?</h3>
            <p className="text-gray-600 text-sm">Oui, toutes les operations se font localement dans votre navigateur. Vos fichiers PDF ne quittent jamais votre ordinateur.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
