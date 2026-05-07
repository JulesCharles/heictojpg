import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Diviser un PDF en ligne gratuit | heictojpg.fr",
  description:
    "Divisez un fichier PDF en plusieurs documents séparés. Extrayez des pages individuelles ou des plages de pages. Outil gratuit, rapide et sans inscription.",
  keywords: [
    "diviser pdf",
    "séparer pdf",
    "extraire pages pdf",
    "découper pdf",
    "split pdf en ligne",
    "séparer pages pdf gratuit",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/diviser-pdf",
    siteName: "heictojpg.fr",
    title: "Diviser un PDF en ligne gratuitement",
    description:
      "Séparez un fichier PDF en plusieurs documents. Gratuit, rapide et sans inscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diviser un PDF en ligne gratuitement",
    description:
      "Séparez un fichier PDF en plusieurs documents. Gratuit et sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/diviser-pdf",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Diviser un PDF en ligne",
      url: "https://heictojpg.fr/diviser-pdf",
      description:
        "Divisez un fichier PDF en plusieurs documents séparés gratuitement.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment diviser un PDF en plusieurs fichiers ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Il suffit de téléverser votre fichier PDF dans notre outil, puis de lancer la division. Chaque page sera extraite en un fichier PDF séparé, le tout disponible en téléchargement sous forme d'archive ZIP.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on extraire seulement certaines pages ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre outil divise automatiquement le PDF en pages individuelles. Vous recevez un fichier ZIP contenant chaque page en tant que fichier PDF séparé, ce qui vous permet de sélectionner uniquement les pages dont vous avez besoin.",
          },
        },
        {
          "@type": "Question",
          name: "La qualité du PDF est-elle préservée ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, la division de PDF est une opération sans perte. Le contenu, la mise en page, les images et les polices de chaque page sont parfaitement préservés dans les fichiers résultants.",
          },
        },
      ],
    },
  ],
};

export default function DiviserPdf() {
  return (
    <>
      <PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Diviser un PDF gratuitement en ligne
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Séparez votre fichier PDF en pages individuelles. Téléversez votre
          document et recevez un ZIP contenant chaque page en fichier PDF
          séparé. Rapide, gratuit et sans inscription.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi diviser un fichier PDF ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            La division d&apos;un fichier PDF est une opération essentielle dans
            de nombreux contextes professionnels et personnels. Lorsque vous
            recevez un document PDF volumineux contenant plusieurs sections
            distinctes, il est souvent pratique de le diviser en fichiers plus
            petits pour faciliter le partage, l&apos;archivage ou le traitement
            individuel de certaines pages.
          </p>

          <p className="text-gray-600 mb-4">
            Par exemple, un rapport annuel de 100 pages peut être divisé en
            chapitres séparés pour une distribution ciblée. Un contrat de
            plusieurs pages peut être séparé pour ne transmettre que les pages
            nécessitant une signature. Un dossier de candidature peut être
            découpé pour extraire uniquement le CV ou la lettre de motivation.
          </p>

          <p className="text-gray-600 mb-4">
            Notre outil de division PDF fonctionne entièrement dans votre
            navigateur. Vous n&apos;avez rien à installer et vos documents ne sont
            pas stockés sur nos serveurs. Le traitement est rapide et le
            résultat est disponible immédiatement en téléchargement. Chaque page
            est extraite en préservant parfaitement la qualité originale :
            textes, images, polices, mise en page et liens sont conservés à
            l&apos;identique.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Avantages de la division de PDF
          </h3>

          <ul className="text-gray-600 space-y-2">
            <li>
              • <strong>Partage facilité :</strong> envoyez uniquement les pages
              pertinentes à vos destinataires sans alourdir vos e-mails.
            </li>
            <li>
              • <strong>Organisation :</strong> classez et archivez vos documents
              par section ou par thème.
            </li>
            <li>
              • <strong>Traitement ciblé :</strong> travaillez sur des pages
              spécifiques sans manipuler un document volumineux.
            </li>
            <li>
              • <strong>Conformité :</strong> extrayez les pages nécessaires pour
              répondre à des exigences réglementaires ou contractuelles.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Questions fréquentes
        </h2>

        <div className="prose prose-gray max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Comment diviser un PDF en plusieurs fichiers ?
          </h3>
          <p className="text-gray-600 mb-6">
            Il suffit de téléverser votre fichier PDF dans notre outil, puis de
            cliquer sur le bouton &quot;Diviser le PDF&quot;. Chaque page sera
            extraite en un fichier PDF séparé, le tout disponible en
            téléchargement sous forme d&apos;archive ZIP que vous pouvez
            décompresser sur votre ordinateur.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Peut-on extraire seulement certaines pages ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre outil divise automatiquement le PDF en pages individuelles.
            Vous recevez un fichier ZIP contenant chaque page en tant que
            fichier PDF séparé, ce qui vous permet de sélectionner ensuite
            uniquement les pages dont vous avez besoin.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            La qualité du PDF est-elle préservée ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, la division de PDF est une opération sans perte. Le contenu, la
            mise en page, les images et les polices de chaque page sont
            parfaitement préservés dans les fichiers résultants. Aucune
            recompression ou dégradation n&apos;est appliquée.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Découvrez nos autres outils PDF
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/fusionner-pdf"
            className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-800">Fusionner des PDF</h3>
            <p className="text-sm text-gray-600">
              Combinez plusieurs PDF en un seul fichier.
            </p>
          </Link>
          <Link
            href="/compresser-pdf"
            className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-800">Compresser un PDF</h3>
            <p className="text-sm text-gray-600">
              Réduisez la taille de vos fichiers PDF.
            </p>
          </Link>
          <Link
            href="/convertir-jpg-en-pdf"
            className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-800">JPG en PDF</h3>
            <p className="text-sm text-gray-600">
              Convertissez vos images en document PDF.
            </p>
          </Link>
          <Link
            href="/convertir-pdf-en-jpg"
            className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-800">PDF en JPG</h3>
            <p className="text-sm text-gray-600">
              Extrayez les pages d&apos;un PDF en images.
            </p>
          </Link>
        </div>
      </div>

      {/* Article recommande */}
      <div className="bg-blue-50 rounded-lg p-6 mt-8">
        <h3 className="font-semibold text-gray-800 mb-2">Vous cherchez une alternative gratuite a iLovePDF ?</h3>
        <p className="text-sm text-gray-600 mb-3">Decouvrez notre comparatif des 7 meilleures alternatives gratuites pour manipuler vos PDF en ligne.</p>
        <Link href="/blog/ilovepdf-alternatives-gratuites" className="text-sm font-medium text-blue-600 hover:text-blue-800">Lire l&apos;article &rarr;</Link>
      </div>
    </div>
    </>
  );
}
