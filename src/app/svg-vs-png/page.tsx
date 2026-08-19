import type { Metadata } from "next";
import Link from "next/link";
import { getComparison } from "@/data/blog/comparisons";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdBanner from "@/components/AdBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "SVG vs PNG : quel format pour logos et icones ? [2026]",
  description:
    "Comparaison SVG vs PNG : vectoriel ou raster ? Decouvrez quel format choisir pour vos logos, icones, illustrations et images web.",
  keywords: [
    "svg vs png",
    "svg ou png",
    "difference svg png",
    "format logo",
    "format icone",
    "svg png comparaison",
    "vectoriel vs raster",
  ],
  alternates: { canonical: "https://heictojpg.fr/svg-vs-png" },
};

export default function SvgVsPngPage() {
  const data = getComparison("svg-vs-png")!;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "SVG vs PNG : quel format pour logos et icônes ?",
        description: "Comparaison SVG vs PNG : vectoriel ou raster ? Découvrez quel format choisir pour vos logos, icônes, illustrations et images web.",
        url: "https://heictojpg.fr/svg-vs-png",
        inLanguage: "fr",
        publisher: { "@type": "Organization", name: "heictojpg.fr", url: "https://heictojpg.fr" },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Quelle est la différence entre SVG et PNG ?", acceptedAnswer: { "@type": "Answer", text: "Le SVG est un format vectoriel (formes mathématiques) qui reste net à toute taille. Le PNG est un format raster (pixels) qui pixelise quand on l'agrandit. Le SVG est idéal pour les logos et icônes, le PNG pour les images complexes avec transparence." } },
          { "@type": "Question", name: "Peut-on convertir un PNG en SVG ?", acceptedAnswer: { "@type": "Answer", text: "Oui, mais le résultat dépend de la complexité de l'image. Les logos simples se convertissent bien via la vectorisation. Les photos ou images complexes donnent des résultats médiocres car le SVG n'est pas conçu pour ça." } },
          { "@type": "Question", name: "Le SVG est-il plus léger que le PNG ?", acceptedAnswer: { "@type": "Answer", text: "Pour les graphiques simples (logos, icônes), oui — un SVG pèse souvent quelques Ko contre des dizaines de Ko en PNG. Pour les images complexes, le PNG sera plus léger car le SVG doit décrire chaque forme." } },
        ],
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "SVG vs PNG", href: "/svg-vs-png" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">SVG vs PNG : quel format choisir ?</h1>
        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
          Le SVG et le PNG sont deux formats tr&apos;es diff&apos;erents : le SVG est vectoriel
          (formes g&apos;eom&apos;etriques), le PNG est raster (pixels). Le SVG est id&apos;eal pour les
          logos et ic&apos;ones, le PNG pour les photos et captures d&apos;&apos;ecran. D&apos;ecouvrez
          lequel choisir selon votre projet.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Comparison table */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comparaison d&apos;etaill&apos;ee</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold text-gray-800">Crit&apos;ere</th>
                <th className="text-left py-3 pr-4 font-semibold text-gray-800">{data.formatA.toUpperCase()}</th>
                <th className="text-left py-3 font-semibold text-gray-800">{data.formatB.toUpperCase()}</th>
              </tr>
            </thead>
            <tbody>
              {data.criteria.map((c) => (
                <tr key={c.name} className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-700">{c.name}</td>
                  <td className={`py-3 pr-4 ${c.winner === "a" ? "text-green-700 font-semibold" : "text-gray-600"}`}>
                    {c.winner === "a" && "✓ "}{c.a}
                  </td>
                  <td className={`py-3 ${c.winner === "b" ? "text-green-700 font-semibold" : "text-gray-600"}`}>
                    {c.winner === "b" && "✓ "}{c.b}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Verdict */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Notre verdict</h2>
        <p className="text-gray-700">{data.verdict}</p>
      </div>

      <AdBanner slot="SLOT_1" format="horizontal" />

      {/* Use cases */}
      <div className="grid md:grid-cols-2 gap-6 mb-8 mt-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quand utiliser {data.formatA.toUpperCase()}</h3>
          <ul className="space-y-2">
            {data.useA.map((u, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-blue-500 mt-0.5">•</span>
                {u}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quand utiliser {data.formatB.toUpperCase()}</h3>
          <ul className="space-y-2">
            {data.useB.map((u, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-green-500 mt-0.5">•</span>
                {u}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA to conversion tools */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Outils de conversion</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/convertir-svg-en-png"
            className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition text-center font-medium text-blue-700"
          >
            Convertir SVG en PNG
          </Link>
          <Link
            href="/convertir-png-en-svg"
            className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition text-center font-medium text-blue-700"
          >
            Convertir PNG en SVG
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
