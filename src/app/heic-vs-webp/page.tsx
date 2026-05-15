import type { Metadata } from "next";
import Link from "next/link";
import { getComparison } from "@/data/blog/comparisons";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdBanner from "@/components/AdBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "HEIC vs WebP : quel format choisir ? Comparatif [2026]",
  description:
    "Comparaison complete entre HEIC et WebP : compression, qualite, compatibilite web et mobile. Decouvrez les differences entre le format iPhone et le format web de Google.",
  keywords: [
    "heic vs webp",
    "heic ou webp",
    "difference heic webp",
    "format photo iphone vs web",
    "heic webp comparaison",
    "convertir heic en webp",
  ],
  alternates: { canonical: "https://heictojpg.fr/heic-vs-webp" },
};

export default function HeicVsWebpPage() {
  const data = getComparison("heic-vs-webp")!;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "HEIC vs WebP : quel format choisir ? Comparatif 2026",
    description:
      "Comparaison complete entre HEIC et WebP : compression, qualite, compatibilite web et mobile. Decouvrez les differences entre le format iPhone et le format web de Google.",
    url: "https://heictojpg.fr/heic-vs-webp",
    inLanguage: "fr",
    publisher: { "@type": "Organization", name: "heictojpg.fr", url: "https://heictojpg.fr" },
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "HEIC vs WebP", href: "/heic-vs-webp" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">HEIC vs WebP : quel format choisir ?</h1>
        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
          Le HEIC est le format photo natif des iPhone, le WebP est le format recommand&apos;e par
          Google pour le web. D&apos;ecouvrez les diff&apos;erences entre ces deux formats modernes
          et lequel choisir.
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
            href="/convertir-heic-en-webp"
            className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition text-center font-medium text-blue-700"
          >
            Convertir HEIC en WebP
          </Link>
          <Link
            href="/convertir-webp-en-jpg"
            className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition text-center font-medium text-blue-700"
          >
            Convertir WebP en JPG
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
