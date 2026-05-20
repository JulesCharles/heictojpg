import type { Metadata } from "next";
import Client from "./client";
import AdBanner from "@/components/AdBanner";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Generateur de QR code gratuit en ligne | heictojpg.fr",
  description:
    "Creez votre QR code gratuit en ligne en 1 clic. Personnalisez la taille, la couleur et le niveau de correction. Telechargez en PNG ou SVG. Sans inscription.",
  keywords: [
    "generateur qr code",
    "qr code gratuit",
    "creer qr code en ligne",
    "generer qr code",
    "qr code personnalise",
    "qr code png",
    "qr code svg",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/generer-qr-code",
    siteName: "heictojpg.fr",
    title: "Generateur de QR code gratuit en ligne",
    description: "Creez votre QR code gratuit en ligne. Personnalisez et telechargez en PNG ou SVG.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/generer-qr-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Generateur de QR code",
      url: "https://heictojpg.fr/generer-qr-code",
      description: "Creez votre QR code gratuit en ligne. Personnalisez la taille, la couleur et telechargez en PNG ou SVG.",
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
          name: "Comment creer un QR code gratuitement ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Utilisez notre generateur gratuit sur heictojpg.fr/generer-qr-code : saisissez votre texte ou URL, personnalisez le QR code, puis telechargez-le en PNG ou SVG. Aucune inscription requise.",
          },
        },
        {
          "@type": "Question",
          name: "Quelle est la difference entre les niveaux de correction d'erreur ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le niveau L corrige 7% des erreurs, M 15%, Q 25% et H 30%. Plus le niveau est eleve, plus le QR code est lisible meme partiellement masque, mais plus il est dense.",
          },
        },
        {
          "@type": "Question",
          name: "PNG ou SVG pour mon QR code ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le PNG est ideal pour le web et les reseaux sociaux. Le SVG est preferable pour l'impression (qualite parfaite a toute taille) et l'integration dans des designs.",
          },
        },
      ],
    },
  ],
};

export default function GenererQrCode() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Générateur QR code", href: "/generer-qr-code" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Generateur de QR code gratuit
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Creez votre QR code en quelques secondes. Entrez un texte ou une URL,
          personnalisez la taille et la couleur, puis telechargez en PNG ou SVG.
          100% gratuit, sans inscription, traitement 100% local.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <AdBanner slot="SLOT_1" format="horizontal" />

      {/* SEO content */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Qu&apos;est-ce qu&apos;un QR code ?
        </h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Un <strong>QR code</strong> (Quick Response code) est un code-barres bidimensionnel
            qui peut stocker des informations comme une URL, un texte, un numero de telephone ou
            des coordonnees. Invente en 1994 par Denso Wave (filiale de Toyota), il est devenu
            omnipresent : menus de restaurants, billets, paiements mobiles, cartes de visite.
          </p>
          <p className="text-gray-600 mb-4">
            Contrairement aux codes-barres classiques (1D), un QR code stocke des donnees
            horizontalement et verticalement, ce qui lui permet de contenir jusqu&apos;a 7 089
            caracteres numeriques ou 4 296 caracteres alphanumeriques.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Comment utiliser notre generateur de QR code ?
        </h2>
        <ol className="text-gray-600 space-y-3">
          <li><strong>1.</strong> Saisissez votre texte ou URL dans le champ ci-dessus</li>
          <li><strong>2.</strong> Choisissez la taille (256, 512 ou 1024 pixels)</li>
          <li><strong>3.</strong> Personnalisez la couleur et le niveau de correction d&apos;erreur</li>
          <li><strong>4.</strong> Telechargez votre QR code en PNG (pour le web) ou SVG (pour l&apos;impression)</li>
        </ol>
        <p className="text-gray-600 mt-4">
          Le QR code est genere instantanement dans votre navigateur. <strong>Aucune donnee n&apos;est envoyee
          sur nos serveurs</strong> — le traitement est 100% local.
        </p>
      </div>

      <AdBanner slot="SLOT_2" format="horizontal" />

      {/* FAQ */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment creer un QR code gratuitement ?</h3>
            <p className="text-gray-600">Utilisez notre outil ci-dessus : saisissez votre texte ou URL, personnalisez les options, telechargez en PNG ou SVG. C&apos;est gratuit, sans inscription et sans limite.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle taille choisir pour mon QR code ?</h3>
            <p className="text-gray-600">Pour le web et les reseaux sociaux, 512 px suffit. Pour l&apos;impression (affiches, flyers), choisissez 1024 px ou telechargez en SVG pour une qualite parfaite a toute taille.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle est la difference entre les niveaux de correction ?</h3>
            <p className="text-gray-600">Le niveau L (7%) est le plus simple et produit un QR code moins dense. Le niveau H (30%) permet de lire le QR code meme si 30% est masque (utile si vous placez un logo au centre). M (15%) est un bon compromis.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">PNG ou SVG ?</h3>
            <p className="text-gray-600">Le PNG est un format raster (pixels) — ideal pour le web, les emails et les reseaux sociaux. Le SVG est vectoriel — il reste net a toute taille, ideal pour l&apos;impression et l&apos;integration dans des designs.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/generer-qr-code" />
    </div>
    </>
  );
}
