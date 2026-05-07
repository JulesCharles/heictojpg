import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllBlogPosts, getBlogPostsByCategory } from "@/data/blog";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog - Guides images et PDF | heictojpg.fr",
  description:
    "Guides complets sur les formats d'image (HEIC, JPG, PNG, WebP, AVIF, SVG), tutoriels de conversion, comparatifs et astuces pour optimiser vos photos.",
  openGraph: {
    type: "website",
    title: "Blog - Guides images et PDF | heictojpg.fr",
    description:
      "Guides complets sur les formats d'image, tutoriels de conversion, comparatifs et astuces.",
    url: "https://heictojpg.fr/blog",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  alternates: { canonical: "https://heictojpg.fr/blog" },
};

const categoryOrder = [
  "Guides pratiques",
  "Guides de conversion",
  "Comparatifs",
  "Formats d'image",
  "Guides par appareil",
  "Optimisation web",
];

export default function Blog() {
  const categories = getBlogPostsByCategory();
  const totalPosts = getAllBlogPosts().length;

  const sortedCategories = categoryOrder.filter((c) => categories[c]);

  return (
    <>
      <PageHero>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Blog</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-2">
          Guides, comparatifs et tutoriels sur les formats d&apos;image et les outils de conversion.
        </p>
        <p className="text-sm text-gray-400">{totalPosts} articles</p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-5xl">

      {/* Table of contents */}
      <div className="mb-12 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {sortedCategories.map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="text-sm px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-200 transition-colors text-gray-700"
            >
              {cat} ({categories[cat].length})
            </a>
          ))}
        </div>
      </div>

      {/* Articles by category */}
      {sortedCategories.map((cat) => (
        <section key={cat} id={cat.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 scroll-mt-8">{cat}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {categories[cat].map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <div className="flex items-center text-xs text-gray-400 space-x-2 mt-1">
                    <span>{post.date}</span>
                    <span>-</span>
                    <span>{post.readTime} de lecture</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Lire la suite →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      {/* CTA */}
      <div className="mt-16 text-center">
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Outils gratuits
          </h2>
          <p className="text-gray-600 mb-6">
            Plus de 50 outils de conversion, compression et edition d&apos;images. Gratuit, sans inscription.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Voir tous les outils
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
