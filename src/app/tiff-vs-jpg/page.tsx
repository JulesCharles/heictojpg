import type { Metadata } from "next";
import Link from "next/link";
import { getComparison } from "@/data/blog/comparisons";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdBanner from "@/components/AdBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "TIFF vs JPG : quel format choisir ? Comparatif [2026]",
  description:
    "Comparaison complete entre TIFF et JPG : qualite, compression, impression, compatibilite. Decouvrez les differences entre le format professionnel sans perte et le JPEG universel.",
  keywords: [
    "tiff vs jpg",
    "tiff ou jpg",
    "difference tiff jpg",
    "tiff jpeg comparaison",
    "format impression photo",
    "tiff vs jpeg",
    "convertir tiff en jpg",
  ],
  alternates: { canonical: "https://heictojpg.fr/tiff-vs-jpg" },
};

export default function TiffVsJpgPage() {
  const data = getComparison("tiff-vs-jpg")!;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "TIFF vs JPG : quel format choisir ? Comparatif 2026",
        description: "Comparaison complète entre TIFF et JPG : qualité, compression, impression, compatibilité. Découvrez les différences entre le format professionnel sans perte et le JPEG universel.",
        url: "https://heictojpg.fr/tiff-vs-jpg",
        inLanguage: "fr",
        publisher: { "@type": "Organization", name: "heictojpg.fr", url: "https://heictojpg.fr" },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Le TIFF est-il meilleur que le JPG pour l'impression ?", acceptedAnswer: { "@type": "Answer", text: "Oui, le TIFF est le format de référence pour l'impression professionnelle. Il utilise une compression sans perte qui conserve tous les détails de l'image, contrairement au JPG qui perd des données à chaque sauvegarde." } },
          { "@type": "Question", name: "Pourquoi les fichiers TIFF sont-ils si volumineux ?", acceptedAnswer: { "@type": "Answer", text: "Le TIFF utilise une compression sans perte (ou aucune compression) qui conserve chaque pixel identique à l'original. Un fichier TIFF peut être 10 à 50 fois plus lourd qu'un JPG de la même image." } },
          { "@type": "Question", name: "Peut-on convertir un TIFF en JPG sans perte ?", acceptedAnswer: { "@type": "Answer", text: "La conversion TIFF vers JPG implique toujours une perte car le JPG utilise une compression avec perte. Avec une qualité de 95%, la différence est imperceptible pour la plupart des usages." } },
        ],
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "TIFF vs JPG", href: "/tiff-vs-jpg" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">TIFF vs JPG : quel format choisir ?</h1>
        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
          Le TIFF est le format de r&apos;ef&apos;erence pour l&apos;impression professionnelle et
          l&apos;archivage, tandis que le JPG est le standard universel pour le partage et le web.
          D&apos;ecouvrez lequel choisir selon vos besoins.
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
            href="/convertir-tiff-en-jpg"
            className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition text-center font-medium text-blue-700"
          >
            Convertir TIFF en JPG
          </Link>
          <Link
            href="/convertir-tiff-en-png"
            className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition text-center font-medium text-blue-700"
          >
            Convertir TIFF en PNG
          </Link>
          <Link
            href="/convertir-tiff-en-webp"
            className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition text-center font-medium text-blue-700"
          >
            Convertir TIFF en WebP
          </Link>
          <Link
            href="/convertir-jpg-en-tiff"
            className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition text-center font-medium text-blue-700"
          >
            Convertir JPG en TIFF
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
