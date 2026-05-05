import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdBanner from "@/components/AdBanner";
import {
  getGlossaryEntry,
  getAllGlossaryIds,
  getFormatData,
  getConversionLinksForFormat,
  getComparisonLinksForFormat,
  getRelatedFormats,
  formats,
} from "@/data/glossary";

// ============================================================
// TYPES & PARAMS
// ============================================================

interface FormatPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllGlossaryIds().map((id) => ({ id }));
}

// ============================================================
// METADATA
// ============================================================

export async function generateMetadata({ params }: FormatPageProps): Promise<Metadata> {
  const { id } = await params;
  const entry = getGlossaryEntry(id);
  const f = getFormatData(id);
  if (!entry || !f) return { title: "Format non trouve" };

  const title = `Format ${f.name} : guide complet (${f.fullName}) | heictojpg.fr`;

  return {
    title,
    description: entry.metaDescription,
    keywords: entry.keywords,
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url: `https://heictojpg.fr/format/${id}`,
      siteName: "heictojpg.fr",
      title,
      description: entry.metaDescription,
    },
    twitter: {
      card: "summary",
      title,
      description: entry.metaDescription,
    },
    alternates: {
      canonical: `https://heictojpg.fr/format/${id}`,
    },
  };
}

// ============================================================
// PAGE
// ============================================================

export default async function FormatGlossaryPage({ params }: FormatPageProps) {
  const { id } = await params;
  const entry = getGlossaryEntry(id);
  const f = getFormatData(id);
  if (!entry || !f) notFound();

  const conversionLinks = getConversionLinksForFormat(id);
  const comparisonLinks = getComparisonLinksForFormat(id);
  const relatedIds = getRelatedFormats(id);

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: `Format ${f.name} : guide complet (${f.fullName})`,
        description: entry.metaDescription,
        datePublished: "2026-05-05",
        dateModified: "2026-05-05",
        author: { "@type": "Organization", name: "heictojpg.fr", url: "https://heictojpg.fr" },
        publisher: { "@type": "Organization", name: "heictojpg.fr", url: "https://heictojpg.fr" },
        mainEntityOfPage: `https://heictojpg.fr/format/${id}`,
        inLanguage: "fr",
      },
      {
        "@type": "FAQPage",
        mainEntity: entry.faq.map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: { "@type": "Answer", text: q.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://heictojpg.fr" },
          { "@type": "ListItem", position: 2, name: "Formats", item: "https://heictojpg.fr/format" },
          { "@type": "ListItem", position: 3, name: `Format ${f.name}`, item: `https://heictojpg.fr/format/${id}` },
        ],
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/format" className="hover:text-blue-600">Formats</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{f.name}</span>
      </nav>

      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Format {f.name} : tout savoir sur le {f.fullName}
      </h1>
      <p className="text-lg text-gray-500 mb-8">
        Guide complet du format {f.name} — {f.extension} — Cree en {f.year} par {f.creator}
      </p>

      {/* Section 1 — Introduction */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Qu&apos;est-ce que le format {f.name} ?
        </h2>
        <div className="prose prose-gray max-w-none">
          {entry.intro.split("\n\n").map((p, i) => (
            <p key={i} className="text-gray-600 mb-4">{p}</p>
          ))}
        </div>
      </section>

      {/* Section 2 — Fiche technique */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Fiche technique du format {f.name}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-600 border-collapse">
            <tbody>
              <Row label="Nom complet" value={f.fullName} />
              <Row label="Extension" value={f.extension} />
              <Row label="Annee de creation" value={String(f.year)} />
              <Row label="Createur" value={f.creator} />
              <Row label="Type" value={f.type === "raster" ? "Image raster (pixels)" : f.type === "vector" ? "Image vectorielle" : "Conteneur de documents"} />
              <Row label="Compression" value={f.lossy ? "Avec perte (lossy)" : "Sans perte (lossless)"} />
              <Row label="Transparence" value={f.transparency ? "Oui" : "Non"} />
              <Row label="Animation" value={f.animation ? "Oui" : "Non"} />
              <Row label="Couleurs" value={f.maxColors} />
              <Row label="Taille typique" value={f.typicalSize} />
              <Row label="Support navigateurs" value={f.browserSupport} last />
            </tbody>
          </table>
        </div>
      </section>

      <AdBanner slot="SLOT_1" format="horizontal" />

      {/* Section 3 — Avantages et inconvenients */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Avantages du format {f.name}
        </h2>
        <ul className="text-gray-600 space-y-3 mb-8">
          {entry.advantagesDetail.map((a, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-green-600 font-bold shrink-0">+</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Inconvenients du format {f.name}
        </h2>
        <ul className="text-gray-600 space-y-3">
          {entry.disadvantagesDetail.map((d, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-red-500 font-bold shrink-0">-</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 4 — Cas d'utilisation */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Quand utiliser le format {f.name} ?
        </h2>
        <ul className="text-gray-600 space-y-3">
          {entry.useCases.map((u, i) => (
            <li key={i}>&bull; {u}</li>
          ))}
        </ul>
      </section>

      {/* Section 5 — Fonctionnement technique */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Comment fonctionne le format {f.name} ?
        </h2>
        <div className="prose prose-gray max-w-none">
          {entry.techExplain.split("\n\n").map((p, i) => (
            <p key={i} className="text-gray-600 mb-4">{p}</p>
          ))}
        </div>
      </section>

      <AdBanner slot="SLOT_2" format="horizontal" />

      {/* Section 6 — Comparatifs */}
      {comparisonLinks.length > 0 && (
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {f.name} vs autres formats
          </h2>
          <p className="text-gray-600 mb-4">
            Decouvrez nos comparatifs detailles pour choisir le bon format selon vos besoins :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {comparisonLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <span className="font-semibold text-gray-800">{link.label}</span>
                <span className="block text-sm text-gray-500 mt-1">Comparatif detaille</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Section 7 — Convertir depuis/vers */}
      {conversionLinks.length > 0 && (
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Convertir depuis ou vers {f.name}
          </h2>
          <p className="text-gray-600 mb-4">
            Utilisez nos outils gratuits pour convertir vos fichiers {f.name} :
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {conversionLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center"
              >
                <span className="text-sm font-medium text-blue-700">{link.label}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Section 8 — FAQ */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Questions frequentes sur le format {f.name}
        </h2>
        <div className="space-y-6">
          {entry.faq.map((q, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{q.question}</h3>
              <p className="text-gray-600">{q.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formats similaires */}
      {relatedIds.length > 0 && (
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Formats similaires</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedIds.map((rid) => {
              const rf = formats[rid];
              if (!rf) return null;
              return (
                <Link
                  key={rid}
                  href={`/format/${rid}`}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors text-center"
                >
                  <span className="font-semibold text-gray-800">{rf.name}</span>
                  <span className="block text-xs text-gray-500 mt-1">{rf.fullName}</span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="bg-blue-50 rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Besoin de convertir vos fichiers {f.name} ?
        </h2>
        <p className="text-gray-600 mb-4">
          Plus de 50 outils gratuits de conversion et d&apos;edition d&apos;images, sans inscription.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Voir tous les outils
        </Link>
      </div>
    </div>
  );
}

// ============================================================
// HELPER COMPONENT
// ============================================================

function Row({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <tr className={last ? "" : "border-b border-gray-100"}>
      <td className="py-2 pr-4 font-semibold text-gray-800 w-1/3">{label}</td>
      <td className="py-2">{value}</td>
    </tr>
  );
}
