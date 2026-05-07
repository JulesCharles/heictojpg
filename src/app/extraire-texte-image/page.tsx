import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";
import AdBanner from "@/components/AdBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Extraire le texte d'une image (OCR) gratuit en ligne | heictojpg.fr",
  description:
    "Extrayez le texte de vos images gratuitement avec notre outil OCR en ligne. Supporté : francais, anglais, espagnol, allemand. Sans inscription.",
  keywords: [
    "extraire texte image",
    "ocr en ligne gratuit",
    "convertir image en texte",
    "reconnaissance de texte",
    "ocr gratuit",
    "lire texte photo",
    "extraire texte photo",
    "ocr francais",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/extraire-texte-image",
    siteName: "heictojpg.fr",
    title: "Extraire le texte d'une image (OCR) gratuit",
    description: "Extrayez le texte de vos images gratuitement. OCR multi-langues, sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/extraire-texte-image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "OCR - Extraire texte d'une image",
      url: "https://heictojpg.fr/extraire-texte-image",
      description: "Extrayez le texte de vos images gratuitement. OCR multi-langues, sans inscription.",
      applicationCategory: "UtilityApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment extraire le texte d'une image ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deposez votre image dans notre outil OCR, selectionnez la langue, cliquez sur Extraire. Le texte reconnu s'affiche en quelques secondes. Vous pouvez le copier ou le telecharger en .txt.",
          },
        },
        {
          "@type": "Question",
          name: "L'OCR fonctionne-t-il avec du texte manuscrit ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L'OCR fonctionne mieux avec du texte imprime (documents, captures d'ecran, photos de livres). Le texte manuscrit est partiellement reconnu mais avec un taux d'erreur plus eleve.",
          },
        },
        {
          "@type": "Question",
          name: "Mes images sont-elles envoyees sur un serveur ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non. L'OCR est effectue entierement dans votre navigateur grace a Tesseract.js. Aucune image n'est envoyee sur nos serveurs.",
          },
        },
      ],
    },
  ],
};

export default function ExtraireTexteImage() {
  return (
    <>
      <PageHero>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Extraire le texte d&apos;une image (OCR)
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Reconnaissance optique de caracteres (OCR) gratuite. Deposez une photo
          contenant du texte, selectionnez la langue, et recuperez le texte extrait.
          Traitement 100% local dans votre navigateur — aucune image envoyee.
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
          Qu&apos;est-ce que l&apos;OCR ?
        </h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            L&apos;<strong>OCR</strong> (Optical Character Recognition, ou reconnaissance optique de caracteres)
            est une technologie qui analyse une image pour y detecter et extraire le texte.
            Elle permet de convertir des photos de documents, captures d&apos;ecran, panneaux,
            tickets de caisse ou pages de livres en texte editable et copiable.
          </p>
          <p className="text-gray-600 mb-4">
            Notre outil utilise <strong>Tesseract.js</strong>, le moteur OCR open source de reference,
            directement dans votre navigateur. Le traitement est entierement local :
            aucune image n&apos;est envoyee sur Internet, garantissant une confidentialite totale.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Conseils pour un meilleur resultat
        </h2>
        <ul className="text-gray-600 space-y-2">
          <li>&bull; <strong>Image nette :</strong> evitez les photos floues ou trop sombres</li>
          <li>&bull; <strong>Bon contraste :</strong> texte noir sur fond blanc donne les meilleurs resultats</li>
          <li>&bull; <strong>Image droite :</strong> redressez l&apos;image si le texte est incline</li>
          <li>&bull; <strong>Bonne resolution :</strong> au moins 300 DPI pour les documents scannes</li>
          <li>&bull; <strong>Bonne langue :</strong> selectionnez la langue du texte pour ameliorer la precision</li>
        </ul>
      </div>

      <AdBanner slot="SLOT_2" format="horizontal" />

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">L&apos;OCR fonctionne-t-il avec du texte manuscrit ?</h3>
            <p className="text-gray-600">Partiellement. L&apos;OCR est optimise pour le texte imprime. Le texte manuscrit est reconnu avec un taux d&apos;erreur plus eleve, surtout si l&apos;ecriture est peu lisible.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mes images sont-elles envoyees sur un serveur ?</h3>
            <p className="text-gray-600">Non. Tout le traitement OCR est effectue localement dans votre navigateur via Tesseract.js. Aucune donnee ne quitte votre appareil.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi le premier lancement est-il lent ?</h3>
            <p className="text-gray-600">Le moteur OCR doit telecharger les donnees de langue (~15 Mo) lors de la premiere utilisation. Les extractions suivantes sont beaucoup plus rapides car les donnees sont mises en cache.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quels formats d&apos;image sont acceptes ?</h3>
            <p className="text-gray-600">JPG, PNG, WebP, BMP, TIFF et la plupart des formats courants. Les PDF ne sont pas supportes directement — convertissez-les d&apos;abord en image.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Outils similaires</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/convertir-pdf-en-jpg" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">PDF en JPG</h3>
            <p className="text-sm text-gray-600">Convertir un PDF en images pour l&apos;OCR.</p>
          </Link>
          <Link href="/lire-metadonnees-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Lire metadonnees</h3>
            <p className="text-sm text-gray-600">Voir les donnees EXIF de vos images.</p>
          </Link>
          <Link href="/compresser-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Compresser image</h3>
            <p className="text-sm text-gray-600">Reduisez le poids de vos images.</p>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
