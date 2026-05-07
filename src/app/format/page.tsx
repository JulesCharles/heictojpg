import type { Metadata } from "next";
import Link from "next/link";
import { formats } from "@/data/glossary";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Glossaire des formats d'image | heictojpg.fr",
  description:
    "Guide complet de tous les formats d'image : HEIC, JPG, PNG, WebP, AVIF, SVG, TIFF, GIF, BMP, ICO, PDF. Avantages, inconvenients et cas d'utilisation.",
  keywords: [
    "format image",
    "formats d'image",
    "glossaire image",
    "heic",
    "jpg",
    "png",
    "webp",
    "avif",
    "svg",
    "tiff",
    "gif",
    "pdf",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/format",
    siteName: "heictojpg.fr",
    title: "Glossaire des formats d'image",
    description:
      "Guide complet de tous les formats d'image : HEIC, JPG, PNG, WebP, AVIF, SVG, TIFF, GIF, BMP, ICO, PDF.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/format",
  },
};

const categories: { title: string; description: string; ids: string[] }[] = [
  {
    title: "Formats photo",
    description: "Les formats les plus utilises pour les photographies numeriques.",
    ids: ["heic", "jpg", "png"],
  },
  {
    title: "Formats web modernes",
    description: "Formats optimises pour la performance et la qualite sur le web.",
    ids: ["webp", "avif", "svg"],
  },
  {
    title: "Formats professionnels",
    description: "Formats utilises dans l'impression, l'archivage et les industries specialisees.",
    ids: ["tiff", "bmp"],
  },
  {
    title: "Formats speciaux",
    description: "Formats dedies a des usages specifiques : animation, icones, documents.",
    ids: ["gif", "ico", "pdf"],
  },
];

export default function FormatIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Glossaire des formats d'image",
    description:
      "Guide complet de tous les formats d'image : HEIC, JPG, PNG, WebP, AVIF, SVG, TIFF, GIF, BMP, ICO, PDF.",
    url: "https://heictojpg.fr/format",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: Object.values(formats).map((f, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `Format ${f.name} (${f.fullName})`,
        url: `https://heictojpg.fr/format/${f.id}`,
      })),
    },
  };

  return (
    <>
      <PageHero>
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Formats</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Glossaire des formats d&apos;image
        </h1>
        <p className="text-lg text-gray-500 mb-12 max-w-3xl leading-relaxed">
          Tout ce que vous devez savoir sur les formats d&apos;image : HEIC, JPG,
          PNG, WebP, AVIF, SVG, TIFF, GIF et plus. Guides complets, comparatifs
          et liens vers nos outils de conversion gratuits.
        </p>
      </PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-5xl">
      {categories.map((cat) => (
        <section key={cat.title} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {cat.title}
          </h2>
          <p className="text-gray-500 mb-4">{cat.description}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cat.ids.map((id) => {
              const f = formats[id];
              if (!f) return null;
              return (
                <Link
                  key={id}
                  href={`/format/${id}`}
                  className="block bg-white rounded-lg shadow-sm p-6 hover:shadow-md hover:border-blue-200 border border-transparent transition-all"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {f.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-3">{f.fullName}</p>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {f.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
                    <span className="bg-gray-100 rounded px-2 py-0.5">
                      {f.extension}
                    </span>
                    <span className="bg-gray-100 rounded px-2 py-0.5">
                      {f.year}
                    </span>
                    {f.transparency && (
                      <span className="bg-gray-100 rounded px-2 py-0.5">
                        Transparence
                      </span>
                    )}
                    {f.animation && (
                      <span className="bg-gray-100 rounded px-2 py-0.5">
                        Animation
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ))}

      {/* CTA */}
      <div className="bg-blue-50 rounded-lg p-6 text-center mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Besoin de convertir ou compresser vos images ?
        </h2>
        <p className="text-gray-600 mb-4">
          Plus de 50 outils gratuits, sans inscription, aucun fichier conserve.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Voir tous les outils
        </Link>
      </div>
    </div>
    </>
  );
}
