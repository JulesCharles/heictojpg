import type { Metadata } from "next";
import Link from "next/link";
import PdfToImageClient from "../convertir-pdf-en-jpg/client";
import PageHero from "@/components/PageHero";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Convertir PDF en TIFF Gratuit en Ligne | heictojpg.fr",
  description: "Convertissez vos fichiers PDF en images TIFF haute qualite pour l'impression et l'archivage professionnel. Extrayez chaque page en TIFF sans perte. Gratuit, sans inscription.",
  keywords: ["convertir pdf en tiff", "pdf to tiff", "pdf tiff gratuit", "pdf vers tiff", "extraire images pdf tiff", "pdf tiff impression"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-pdf-en-tiff",
    siteName: "heictojpg.fr",
    title: "Convertir PDF en TIFF gratuitement",
    description: "Extrayez chaque page de votre PDF en image TIFF haute qualite pour l'impression. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-pdf-en-tiff" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertir PDF en TIFF",
      url: "https://heictojpg.fr/convertir-pdf-en-tiff",
      description: "Convertissez vos fichiers PDF en images TIFF haute qualite pour l'impression et l'archivage.",
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
          name: "Pourquoi convertir un PDF en TIFF ?",
          acceptedAnswer: { "@type": "Answer", text: "Le TIFF est le format de reference pour l'impression professionnelle et l'archivage numerique. Il utilise une compression sans perte qui preserve chaque detail du document original, ce qui en fait le choix ideal pour les documents juridiques, medicaux et techniques." },
        },
        {
          "@type": "Question",
          name: "Les fichiers TIFF sont-ils plus lourds que les JPEG ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, les fichiers TIFF sont generalement plus volumineux car ils utilisent une compression sans perte. C'est le prix a payer pour une qualite d'image parfaite, adaptee a l'impression professionnelle et a l'archivage a long terme." },
        },
      ],
    },
  ],
};

export default function ConvertirPdfEnTiff() {
  return (
    <>
      <PageHero>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir PDF en TIFF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Extrayez chaque page de votre document PDF en image TIFF haute qualite pour l&apos;impression et l&apos;archivage.
          Le format TIFF utilise une compression sans perte, garantissant une fidelite parfaite
          pour les documents professionnels, juridiques et techniques.
          Les PDF multi-pages sont telecharges dans un fichier ZIP.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <PdfToImageClient format="tiff" title="Convertir PDF en TIFF" />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir un PDF en TIFF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            La conversion PDF vers TIFF est le choix de reference pour l&apos;impression professionnelle
            et l&apos;archivage numerique a long terme. Le TIFF utilise une compression sans perte,
            ce qui signifie que chaque pixel du document PDF est parfaitement preserve.
          </p>
          <p className="text-gray-600 mb-4">
            Ce format est largement utilise dans les secteurs juridique, medical, bancaire et administratif,
            ou la fidelite des documents est essentielle. Les images TIFF sont acceptees par tous les
            logiciels d&apos;impression professionnelle et les systemes de gestion documentaire (GED).
          </p>
          <p className="text-gray-600 mb-4">
            Pour l&apos;impression, nous recommandons une resolution de 300 DPI qui garantit une qualite
            optimale. Utilisez 150 DPI pour un usage standard ou 72 DPI si vous avez uniquement besoin
            d&apos;un apercu a l&apos;ecran.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi convertir un PDF en TIFF ?</h3>
            <p className="text-gray-600 mb-4">Le TIFF est le format de reference pour l&apos;impression professionnelle et l&apos;archivage numerique. Il utilise une compression sans perte qui preserve chaque detail du document original, ce qui en fait le choix ideal pour les documents juridiques, medicaux et techniques.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Les fichiers TIFF sont-ils plus lourds que les JPEG ?</h3>
            <p className="text-gray-600 mb-4">Oui, les fichiers TIFF sont generalement plus volumineux car ils utilisent une compression sans perte. C&apos;est le prix a payer pour une qualite d&apos;image parfaite, adaptee a l&apos;impression professionnelle et a l&apos;archivage a long terme.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-pdf-en-tiff" />

      <div className="bg-blue-50 rounded-lg p-6 mt-8">
        <h3 className="font-semibold text-gray-800 mb-2">Vous cherchez une alternative gratuite a iLovePDF ?</h3>
        <p className="text-sm text-gray-600 mb-3">Decouvrez notre comparatif des 7 meilleures alternatives gratuites pour manipuler vos PDF en ligne.</p>
        <Link href="/blog/ilovepdf-alternatives-gratuites" className="text-sm font-medium text-blue-600 hover:text-blue-800">Lire l&apos;article &rarr;</Link>
      </div>
    </div>
    </>
  );
}
