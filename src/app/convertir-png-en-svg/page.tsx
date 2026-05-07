import type { Metadata } from "next";
import Link from "next/link";
import VectorizeClient from "../convertir-jpg-en-svg/client";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir PNG en SVG (vectoriser) gratuit | heictojpg.fr",
  description: "Vectorisez vos images PNG en fichiers SVG. Transformez vos logos et graphiques bitmap en vectoriel redimensionnable. Gratuit, sans inscription.",
  keywords: ["convertir png en svg", "png to svg", "vectoriser png", "vectorisation png gratuite", "png vers svg", "tracer png"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-png-en-svg",
    siteName: "heictojpg.fr",
    title: "Convertir PNG en SVG (vectorisation) gratuitement",
    description: "Vectorisez vos images PNG en fichiers SVG redimensionnables. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-png-en-svg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Vectoriser PNG en SVG",
      url: "https://heictojpg.fr/convertir-png-en-svg",
      description: "Vectorisez vos images PNG en fichiers SVG.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "La transparence du PNG est-elle conservée en SVG ?", acceptedAnswer: { "@type": "Answer", text: "Le SVG généré par vectorisation ne conserve pas la transparence du PNG de manière traditionnelle. Les zones transparentes seront interprétées comme une couleur (généralement blanc) ou ignorées selon le mode de vectorisation choisi." } },
        { "@type": "Question", name: "PNG en SVG vs JPG en SVG : quelle différence ?", acceptedAnswer: { "@type": "Answer", text: "Le PNG offre généralement de meilleurs résultats de vectorisation que le JPG car il ne contient pas d'artefacts de compression. Les bords sont plus nets et les couleurs plus précises, ce qui produit des chemins vectoriels plus propres." } },
      ],
    },
  ],
};

export default function ConvertirPngEnSvg() {
  return (
    <>
      <PageHero>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir PNG en SVG (vectorisation)</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Vectorisez vos images PNG en fichiers SVG redimensionnables à l&apos;infini.
          Le PNG est le format idéal pour la vectorisation car il offre des bords nets
          et des couleurs précises, sans les artefacts de compression du JPG.
          Parfait pour convertir vos logos, icônes et illustrations en vectoriel.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <VectorizeClient title="PNG &rarr; SVG" accept=".png,image/png" />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi vectoriser un PNG en SVG ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format PNG est excellent pour les images bitmap de haute qualité, mais il a une
            limitation fondamentale : il est composé de pixels. Quand vous agrandissez un PNG,
            les pixels deviennent visibles et l&apos;image perd sa netteté. Le SVG, en tant que
            format vectoriel, résout complètement ce problème.
          </p>
          <p className="text-gray-600 mb-4">
            La conversion PNG vers SVG est particulièrement recommandée pour les logos d&apos;entreprise.
            De nombreuses entreprises n&apos;ont leur logo qu&apos;en format PNG et doivent le convertir en
            SVG pour l&apos;utiliser sur leur site web, leurs cartes de visite, leurs supports
            d&apos;impression grand format, ou leurs produits dérivés.
          </p>
          <p className="text-gray-600 mb-4">
            Le PNG offre généralement de meilleurs résultats de vectorisation que le JPG car
            il utilise une compression sans perte. Les bords des formes sont plus nets et les
            aplats de couleur sont plus uniformes, ce qui permet à l&apos;algorithme de vectorisation
            de produire des chemins plus propres et plus précis.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Conseils pour une bonne vectorisation</h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>Haute résolution :</strong> utilisez un PNG le plus grand possible pour plus de détails</li>
            <li>&bull; <strong>Fond uni :</strong> les images sur fond blanc ou transparent donnent les meilleurs résultats</li>
            <li>&bull; <strong>Couleurs simples :</strong> les aplats de couleur sont mieux vectorisés que les dégradés</li>
            <li>&bull; <strong>Contrastes forts :</strong> des bords bien définis produisent des chemins plus nets</li>
            <li>&bull; <strong>Mode adapté :</strong> utilisez &quot;Simple&quot; pour les logos, &quot;Détaillé&quot; pour les illustrations complexes</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La transparence du PNG est-elle conservée ?</h3>
            <p className="text-gray-600 mb-4">Le SVG généré par vectorisation ne conserve pas directement la transparence PNG. Les zones transparentes sont interprétées comme une couleur de fond ou ignorées selon le mode choisi. Pour conserver la transparence, éditez le SVG résultant dans un éditeur comme Inkscape.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">PNG ou JPG : lequel donne de meilleurs résultats ?</h3>
            <p className="text-gray-600 mb-4">Le PNG donne généralement de meilleurs résultats car il n&apos;a pas d&apos;artefacts de compression. Les bords sont plus nets, ce qui produit des chemins vectoriels plus propres et plus précis.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Autres conversions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/convertir-jpg-en-svg" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">JPG &rarr; SVG</h3>
            <p className="text-sm text-gray-600">Vectorisez vos images JPG.</p>
          </Link>
          <Link href="/convertir-svg-en-png" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">SVG &rarr; PNG</h3>
            <p className="text-sm text-gray-600">Convertissez vos SVG en PNG.</p>
          </Link>
          <Link href="/convertir-svg-en-jpg" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">SVG &rarr; JPG</h3>
            <p className="text-sm text-gray-600">Convertissez vos SVG en JPG.</p>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
