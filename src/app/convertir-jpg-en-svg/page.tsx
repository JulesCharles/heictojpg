import type { Metadata } from "next";
import Link from "next/link";
import VectorizeClient from "./client";

export const metadata: Metadata = {
  title: "Convertir JPG en SVG (vectoriser) gratuit | heictojpg.fr",
  description: "Vectorisez vos images JPG en fichiers SVG. Transformez vos photos et logos bitmap en graphiques vectoriels redimensionnables à l'infini. Gratuit, sans inscription.",
  keywords: ["convertir jpg en svg", "jpg to svg", "vectoriser image", "vectorisation gratuite", "bitmap to vector", "jpg vers svg", "tracer image"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-jpg-en-svg",
    siteName: "heictojpg.fr",
    title: "Convertir JPG en SVG (vectorisation) gratuitement",
    description: "Vectorisez vos images JPG en fichiers SVG redimensionnables. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-jpg-en-svg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Vectoriser JPG en SVG",
      url: "https://heictojpg.fr/convertir-jpg-en-svg",
      description: "Vectorisez vos images JPG en fichiers SVG.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Qu'est-ce que la vectorisation ?", acceptedAnswer: { "@type": "Answer", text: "La vectorisation est le processus de conversion d'une image bitmap (composée de pixels) en image vectorielle (composée de formes géométriques). Le résultat est un fichier SVG qui peut être redimensionné à l'infini sans perte de qualité." } },
        { "@type": "Question", name: "Le résultat est-il identique à l'original ?", acceptedAnswer: { "@type": "Answer", text: "Non, la vectorisation est une approximation. Le SVG reproduit les formes et les couleurs principales de l'image, mais les détails fins des photographies ne peuvent pas être reproduits parfaitement en vectoriel. Les logos, icônes et graphiques simples donnent les meilleurs résultats." } },
        { "@type": "Question", name: "Puis-je modifier le SVG après conversion ?", acceptedAnswer: { "@type": "Answer", text: "Oui, le SVG est un format éditable. Vous pouvez l'ouvrir et le modifier dans des logiciels comme Adobe Illustrator, Inkscape (gratuit), Figma ou tout éditeur SVG en ligne." } },
      ],
    },
  ],
};

export default function ConvertirJpgEnSvg() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir JPG en SVG (vectorisation)</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Vectorisez vos images JPG en fichiers SVG redimensionnables à l&apos;infini.
          Notre outil analyse les formes et les couleurs de votre image bitmap et les
          convertit en chemins vectoriels. Idéal pour les logos, les icônes, les illustrations
          et les graphiques. Choisissez le niveau de détail adapté à votre besoin.
        </p>
      </div>

      <div className="mb-16">
        <VectorizeClient title="JPG &rarr; SVG" accept=".jpg,.jpeg,image/jpeg" />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Qu&apos;est-ce que la vectorisation d&apos;image ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            La vectorisation (ou tracing) est le processus de conversion d&apos;une image bitmap (composée
            de pixels, comme un JPG) en image vectorielle (composée de formes géométriques, comme un SVG).
            Le principal avantage du vectoriel est qu&apos;il peut être redimensionné à n&apos;importe quelle taille
            sans aucune perte de qualité.
          </p>
          <p className="text-gray-600 mb-4">
            Cette conversion est fondamentalement différente des autres conversions d&apos;image. Quand vous
            convertissez un JPG en PNG, les pixels restent les mêmes — seul le format de stockage change.
            La vectorisation, en revanche, réinterprète complètement l&apos;image en la décomposant en formes,
            courbes et zones de couleur.
          </p>
          <p className="text-gray-600 mb-4">
            Notre outil propose 4 niveaux de détail. Le mode &quot;Simple&quot; utilise 8 couleurs et produit des
            SVG très légers, idéaux pour les logos et les icônes. Le mode &quot;Détaillé&quot; utilise 64 couleurs
            et capture plus de nuances, adapté aux illustrations complexes. Le mode &quot;Noir et blanc&quot;
            produit un SVG à 2 couleurs, parfait pour les silhouettes et les dessins au trait.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Quand utiliser la vectorisation ?</h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>Logos :</strong> convertir un logo JPG en SVG pour l&apos;utiliser à toutes les tailles</li>
            <li>&bull; <strong>Impression grand format :</strong> agrandir une image sans pixelisation</li>
            <li>&bull; <strong>Découpe laser / vinyle :</strong> les machines de découpe nécessitent du vectoriel</li>
            <li>&bull; <strong>Broderie :</strong> les machines à broder travaillent à partir de fichiers vectoriels</li>
            <li>&bull; <strong>Design web :</strong> les SVG sont plus légers et nets que les images bitmap</li>
            <li>&bull; <strong>Animation :</strong> les SVG peuvent être animés avec CSS et JavaScript</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Limites de la vectorisation automatique</h3>
          <p className="text-gray-600 mb-4">
            La vectorisation automatique fonctionne parfaitement pour les graphiques simples (logos, icônes,
            illustrations flat design). En revanche, les photographies réalistes produiront un résultat
            stylisé plutôt qu&apos;une reproduction fidèle. Pour un rendu photo-réaliste, le format bitmap
            (JPG, PNG) reste préférable.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Qu&apos;est-ce que la vectorisation ?</h3>
            <p className="text-gray-600 mb-4">La vectorisation convertit une image bitmap (pixels) en image vectorielle (formes géométriques). Le SVG résultant peut être redimensionné à l&apos;infini sans perte de qualité, contrairement au JPG ou PNG.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le résultat est-il identique à l&apos;original ?</h3>
            <p className="text-gray-600 mb-4">Non, la vectorisation est une approximation artistique. Les logos et graphiques simples sont très bien convertis. Les photos produisent un rendu stylisé (effet postérisation).</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je modifier le SVG après conversion ?</h3>
            <p className="text-gray-600 mb-4">Oui, le SVG est entièrement éditable dans Illustrator, Inkscape (gratuit), Figma ou tout éditeur SVG. Vous pouvez modifier les couleurs, les formes et les chemins.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Autres conversions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/convertir-png-en-svg" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">PNG &rarr; SVG</h3>
            <p className="text-sm text-gray-600">Vectorisez vos images PNG.</p>
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
  );
}
