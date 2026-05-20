import type { Metadata } from "next";
import SvgConvertForm from "@/components/SvgConvertForm";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir SVG en PNG en ligne gratuit | heictojpg.fr",
  description:
    "Convertissez vos fichiers SVG en PNG haute qualité en un clic. Outil gratuit, rapide et sans inscription.",
  keywords: [
    "convertir svg en png",
    "svg to png",
    "svg vers png gratuit",
    "convertisseur svg png",
    "svg en image png",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-svg-en-png",
    siteName: "heictojpg.fr",
    title: "Convertir SVG en PNG gratuitement en ligne",
    description: "Convertissez vos fichiers SVG en PNG en un clic. Gratuit, rapide, sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-svg-en-png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Convertisseur SVG en PNG",
  url: "https://heictojpg.fr/convertir-svg-en-png",
  description: "Convertissez vos fichiers SVG en PNG haute qualité gratuitement en ligne.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Tout navigateur web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "fr",
};

export default function ConvertirSvgEnPng() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir SVG en PNG", href: "/convertir-svg-en-png" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Convertir SVG en PNG gratuitement
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos fichiers vectoriels SVG en images PNG haute résolution.
          Notre outil en ligne est rapide, sécurisé et entièrement gratuit.
          Aucune inscription requise.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <SvgConvertForm />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi convertir SVG en PNG ?
        </h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format SVG (Scalable Vector Graphics) est idéal pour les logos, icônes et
            illustrations car il est vectoriel et donc redimensionnable sans perte de qualité.
            Cependant, de nombreux logiciels et plateformes ne supportent pas le SVG.
          </p>
          <p className="text-gray-600 mb-4">
            En convertissant vos SVG en PNG, vous obtenez des images compatibles avec tous
            les navigateurs, applications de messagerie, réseaux sociaux et logiciels de
            retouche photo.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Cas d&apos;utilisation
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>Réseaux sociaux :</strong> Instagram, Facebook et Twitter n&apos;acceptent pas les SVG</li>
            <li>&bull; <strong>Présentations :</strong> PowerPoint et Google Slides préfèrent le PNG</li>
            <li>&bull; <strong>Email :</strong> Les clients mail n&apos;affichent pas toujours les SVG correctement</li>
            <li>&bull; <strong>Impression :</strong> Le PNG offre une résolution fixe adaptée à l&apos;impression</li>
          </ul>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-svg-en-png" />
    </div>
    </>
  );
}
