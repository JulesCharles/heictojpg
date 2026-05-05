import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "Creer un GIF anime en ligne gratuit | heictojpg.fr",
  description:
    "Creez un GIF anime a partir de vos images. Choisissez l'ordre des frames et la vitesse d'animation. Gratuit, sans inscription.",
  keywords: [
    "creer gif",
    "gif maker",
    "creer gif en ligne",
    "faire un gif avec des images",
    "gif anime gratuit",
    "creer gif anime",
    "assembler images gif",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/creer-gif",
    siteName: "heictojpg.fr",
    title: "Creer un GIF anime en ligne gratuit",
    description: "Creez un GIF anime a partir de vos images. Gratuit, sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/creer-gif",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Creer un GIF anime",
      url: "https://heictojpg.fr/creer-gif",
      description: "Creez un GIF anime a partir de vos images. Gratuit, rapide, sans inscription.",
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
          name: "Comment creer un GIF anime a partir d'images ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deposez vos images dans notre outil, reorganisez-les dans l'ordre souhaite, reglez la vitesse d'animation, puis cliquez sur Creer le GIF. Le resultat est telechargeable immediatement.",
          },
        },
        {
          "@type": "Question",
          name: "Combien d'images faut-il pour un GIF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Il faut au minimum 2 images. Plus vous ajoutez d'images, plus l'animation sera fluide. 5 a 15 frames est un bon compromis entre fluidite et taille de fichier.",
          },
        },
      ],
    },
  ],
};

export default function CreerGif() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Creer un GIF anime a partir d&apos;images
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Assemblez vos images en un GIF anime. Choisissez l&apos;ordre des frames,
          reglez la vitesse d&apos;animation, et telechargez votre GIF.
          Gratuit, sans inscription, aucun fichier conserve.
        </p>
      </div>

      <div className="mb-16">
        <Client />
      </div>

      <AdBanner slot="SLOT_1" format="horizontal" />

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Comment creer un GIF anime ?
        </h2>
        <ol className="text-gray-600 space-y-3">
          <li><strong>1.</strong> Deposez ou selectionnez vos images (minimum 2)</li>
          <li><strong>2.</strong> Reorganisez les frames dans l&apos;ordre souhaite</li>
          <li><strong>3.</strong> Reglez le delai entre les frames (100ms a 2000ms)</li>
          <li><strong>4.</strong> Cliquez sur &quot;Creer le GIF&quot; et telechargez le resultat</li>
        </ol>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle vitesse choisir ?</h3>
            <p className="text-gray-600">Pour une animation fluide, utilisez 100-200ms entre les frames. Pour un diaporama, 500-1000ms. Pour une demonstration lente, 1500-2000ms.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi mon GIF est-il lourd ?</h3>
            <p className="text-gray-600">Le format GIF est volumineux par nature. Notre outil redimensionne automatiquement les images a 800px max pour limiter la taille. Pour un GIF plus leger, utilisez moins de frames ou des images plus petites.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quels formats d&apos;image sont acceptes ?</h3>
            <p className="text-gray-600">JPG, PNG, WebP et la plupart des formats courants. Toutes les images sont redimensionnees a la meme taille (celle de la premiere image, max 800px).</p>
          </div>
        </div>
      </div>

      <AdBanner slot="SLOT_2" format="horizontal" />

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Outils similaires</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/convertir-gif-en-webp" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">GIF &rarr; WebP</h3>
            <p className="text-sm text-gray-600">Convertir un GIF en WebP (plus leger).</p>
          </Link>
          <Link href="/convertir-webp-en-gif" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">WebP &rarr; GIF</h3>
            <p className="text-sm text-gray-600">Convertir un WebP anime en GIF.</p>
          </Link>
          <Link href="/compresser-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Compresser image</h3>
            <p className="text-sm text-gray-600">Reduisez le poids de vos images.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
