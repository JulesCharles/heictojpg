import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Fusionner PDF en Ligne Gratuit - Combinez vos PDF en 1 Clic | heictojpg.fr",
  description:
    "Fusionnez plusieurs fichiers PDF en un seul document en 1 clic. Réorganisez l'ordre des pages. 100% gratuit, sans inscription, sans filigrane. Vos fichiers ne sont pas conservés.",
  keywords: [
    "fusionner pdf",
    "combiner pdf",
    "assembler pdf",
    "merger pdf en ligne",
    "joindre pdf gratuit",
    "regrouper pdf",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/fusionner-pdf",
    siteName: "heictojpg.fr",
    title: "Fusionner des PDF en ligne gratuitement",
    description:
      "Combinez plusieurs fichiers PDF en un seul document. Gratuit, rapide et sans inscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fusionner des PDF en ligne gratuitement",
    description:
      "Combinez plusieurs fichiers PDF en un seul document. Gratuit et sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/fusionner-pdf",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Fusionner des PDF en ligne",
      url: "https://heictojpg.fr/fusionner-pdf",
      description:
        "Fusionnez plusieurs fichiers PDF en un seul document gratuitement en ligne.",
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
          name: "Combien de fichiers PDF peut-on fusionner en une fois ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vous pouvez fusionner autant de fichiers PDF que nécessaire. Notre outil n'impose pas de limite sur le nombre de fichiers, tant que la taille totale reste raisonnable pour un traitement en ligne.",
          },
        },
        {
          "@type": "Question",
          name: "L'ordre des pages est-il conservé lors de la fusion ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, les fichiers sont fusionnés dans l'ordre dans lequel vous les ajoutez. Vous pouvez réorganiser vos fichiers avant de lancer la fusion pour obtenir l'ordre souhaité.",
          },
        },
        {
          "@type": "Question",
          name: "La fusion de PDF est-elle gratuite ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre outil de fusion de PDF est entièrement gratuit, sans inscription requise et sans filigrane ajouté au document final.",
          },
        },
      ],
    },
  ],
};

export default function FusionnerPdf() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Fusionner des PDF", href: "/fusionner-pdf" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Fusionner des PDF gratuitement en ligne
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Combinez plusieurs fichiers PDF en un seul document. Ajoutez vos
          fichiers, choisissez l&apos;ordre et téléchargez le résultat. Rapide,
          sécurisé et sans inscription.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi fusionner vos fichiers PDF ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            La fusion de fichiers PDF est une opération courante dans le monde
            professionnel et personnel. Que vous ayez besoin de combiner
            plusieurs rapports en un seul document, d&apos;assembler des factures
            pour votre comptabilité, ou de regrouper des chapitres d&apos;un livre
            numérique, notre outil de fusion PDF en ligne vous permet de le faire
            en quelques secondes, sans installer aucun logiciel.
          </p>

          <p className="text-gray-600 mb-4">
            Contrairement aux logiciels de bureau comme Adobe Acrobat qui
            nécessitent un abonnement coûteux, notre outil est entièrement
            gratuit et fonctionne directement dans votre navigateur. Vos fichiers
            sont traités de manière sécurisée et ne sont jamais stockés sur nos
            serveurs. Le traitement se fait instantanément et le fichier résultant
            est téléchargeable immédiatement.
          </p>

          <p className="text-gray-600 mb-4">
            Notre outil de fusion conserve parfaitement la mise en page, les
            polices, les images, les liens et tous les éléments de vos documents
            PDF originaux. Le fichier résultant est un PDF standard compatible
            avec tous les lecteurs PDF. Vous pouvez fusionner des PDF de
            différentes tailles de pages, orientations (portrait ou paysage) et
            même des documents protégés par mot de passe (après les avoir
            déverrouillés).
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Cas d&apos;utilisation courants
          </h3>

          <ul className="text-gray-600 space-y-2">
            <li>
              • <strong>Documents administratifs :</strong> regroupez vos
              justificatifs, attestations et formulaires en un seul fichier pour
              simplifier vos démarches.
            </li>
            <li>
              • <strong>Rapports professionnels :</strong> assemblez les
              différentes sections d&apos;un rapport rédigées par plusieurs
              collaborateurs.
            </li>
            <li>
              • <strong>Dossiers de candidature :</strong> combinez CV, lettre de
              motivation et diplômes en un seul PDF.
            </li>
            <li>
              • <strong>Archivage :</strong> consolidez plusieurs documents
              connexes en un fichier unique pour faciliter le classement et la
              recherche.
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
            Combien de fichiers PDF peut-on fusionner en une fois ?
          </h3>
          <p className="text-gray-600 mb-6">
            Vous pouvez fusionner autant de fichiers PDF que nécessaire. Notre
            outil n&apos;impose pas de limite stricte sur le nombre de fichiers.
            Cependant, pour un traitement optimal en ligne, nous recommandons de
            ne pas dépasser 50 fichiers ou 100 Mo au total.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            L&apos;ordre des pages est-il conservé lors de la fusion ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, les fichiers sont fusionnés exactement dans l&apos;ordre dans
            lequel vous les ajoutez à la liste. Vous pouvez réorganiser vos
            fichiers avant de lancer la fusion pour obtenir l&apos;ordre de pages
            souhaité dans le document final.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            La fusion de PDF est-elle gratuite ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, notre outil de fusion de PDF est entièrement gratuit, sans
            inscription requise et sans filigrane ajouté au document final. Vous
            pouvez l&apos;utiliser autant de fois que vous le souhaitez.
          </p>
        </div>
      </div>

      <RelatedTools currentPath="/fusionner-pdf" />

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
