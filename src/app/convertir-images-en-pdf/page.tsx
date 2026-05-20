import type { Metadata } from "next";
import Client from "./client";
import AdBanner from "@/components/AdBanner";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convertir images en PDF en ligne gratuit | heictojpg.fr",
  description:
    "Assemblez plusieurs images (JPG, PNG, WebP) en un seul fichier PDF. Reorganisez l'ordre des pages, telechargez le PDF. Gratuit, sans inscription.",
  keywords: [
    "convertir image en pdf",
    "photo en pdf",
    "images en pdf",
    "convertir plusieurs images en pdf",
    "jpg en pdf",
    "png en pdf",
    "assembler images pdf",
    "creer pdf avec images",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-images-en-pdf",
    siteName: "heictojpg.fr",
    title: "Convertir images en PDF en ligne gratuit",
    description: "Assemblez plusieurs images en un seul PDF. Gratuit, sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-images-en-pdf",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertir images en PDF",
      url: "https://heictojpg.fr/convertir-images-en-pdf",
      description: "Assemblez plusieurs images en un seul fichier PDF. Gratuit, rapide, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment convertir plusieurs images en un seul PDF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deposez vos images dans notre outil, reorganisez-les dans l'ordre souhaite, cliquez sur Convertir en PDF, puis telechargez le fichier. C'est gratuit et sans inscription.",
          },
        },
        {
          "@type": "Question",
          name: "Quels formats d'image sont acceptes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "JPG, PNG, WebP, HEIC, AVIF, GIF, BMP et la plupart des formats d'image courants.",
          },
        },
      ],
    },
  ],
};

export default function ConvertirImagesEnPdf() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Images en PDF", href: "/convertir-images-en-pdf" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Convertir images en PDF
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Assemblez plusieurs images en un seul document PDF. Deposez vos photos,
          reorganisez l&apos;ordre des pages, et telechargez le PDF.
          Gratuit, sans inscription, aucun fichier conserve.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <AdBanner slot="SLOT_1" format="horizontal" />

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Comment convertir des images en PDF ?
        </h2>
        <ol className="text-gray-600 space-y-3">
          <li><strong>1.</strong> Deposez ou selectionnez vos images (JPG, PNG, WebP, HEIC…)</li>
          <li><strong>2.</strong> Reorganisez les images dans l&apos;ordre souhaite (glissez ou utilisez les fleches)</li>
          <li><strong>3.</strong> Cliquez sur &quot;Convertir en PDF&quot;</li>
          <li><strong>4.</strong> Telechargez votre fichier PDF</li>
        </ol>
        <p className="text-gray-600 mt-4">
          Chaque image devient une page du PDF, mise a l&apos;echelle au format A4.
          La qualite est preservee a 92% en JPEG pour un bon equilibre taille/qualite.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Combien d&apos;images puis-je assembler ?</h3>
            <p className="text-gray-600">Il n&apos;y a pas de limite stricte. En pratique, vous pouvez assembler des dizaines d&apos;images. Pour de tres grands lots, la taille du fichier PDF augmentera en consequence.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Les images sont-elles compressees ?</h3>
            <p className="text-gray-600">Oui, les images sont encodees en JPEG a 92% de qualite dans le PDF. C&apos;est un excellent compromis entre qualite visuelle et taille de fichier.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je choisir l&apos;ordre des pages ?</h3>
            <p className="text-gray-600">Oui, utilisez les fleches haut/bas pour reorganiser vos images avant la conversion. L&apos;ordre affiche sera l&apos;ordre des pages dans le PDF.</p>
          </div>
        </div>
      </div>

      <AdBanner slot="SLOT_2" format="horizontal" />

      <RelatedTools currentPath="/convertir-images-en-pdf" />
    </div>
    </>
  );
}
