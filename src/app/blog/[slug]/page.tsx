import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  getAllBlogSlugs,
  getBlogPost,
  getAllBlogPosts,
  formats,
  type BlogPostEntry,
} from "@/data/blog";
import { getConversion } from "@/data/blog/conversions";
import { getComparison } from "@/data/blog/comparisons";
import { getActionDevice } from "@/data/blog/actions-devices";
import { editorialContent } from "./editorial-content";

// ============================================================
// METADATA
// ============================================================

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article non trouvé" };

  return {
    title: `${post.title} | heictojpg.fr`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://heictojpg.fr/blog/${slug}`,
      siteName: "heictojpg.fr",
      locale: "fr_FR",
      publishedTime: post.dateISO,
    },
    twitter: { card: "summary", title: post.title, description: post.excerpt },
    alternates: { canonical: `https://heictojpg.fr/blog/${slug}` },
  };
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

// ============================================================
// SHARED COMPONENTS
// ============================================================

function Breadcrumb({ post, slug }: { post: BlogPostEntry; slug: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://heictojpg.fr" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://heictojpg.fr/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://heictojpg.fr/blog/${slug}` },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

function ArticleJsonLd({ post, slug }: { post: BlogPostEntry; slug: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: { "@type": "Organization", name: "heictojpg.fr", url: "https://heictojpg.fr" },
    publisher: { "@type": "Organization", name: "heictojpg.fr", url: "https://heictojpg.fr" },
    mainEntityOfPage: `https://heictojpg.fr/blog/${slug}`,
    inLanguage: "fr",
    isAccessibleForFree: true,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

function PageHeader({ post }: { post: BlogPostEntry }) {
  return (
    <div className="mb-8">
      <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Retour au blog
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <div className="flex items-center text-gray-500 text-sm space-x-2">
        <span>{post.date}</span>
        <span>-</span>
        <span>{post.readTime} de lecture</span>
        <span>-</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs">{post.category}</span>
      </div>
    </div>
  );
}

function RelatedTools() {
  const tools = [
    { href: "/convertir-heic-en-jpg", label: "HEIC → JPG" },
    { href: "/compresser-image", label: "Compresser image" },
    { href: "/redimensionner-image", label: "Redimensionner" },
    { href: "/convertir-png-en-jpg", label: "PNG → JPG" },
    { href: "/convertir-jpg-en-webp", label: "JPG → WebP" },
    { href: "/supprimer-fond-image", label: "Supprimer le fond" },
  ];
  return (
    <div className="mt-10 pt-8 border-t">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Nos outils gratuits</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {tools.map((t) => (
          <Link key={t.href} href={t.href} className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center">
            <span className="text-sm font-medium text-blue-700">{t.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function RelatedArticles({ current }: { current: string }) {
  const all = getAllBlogPosts();
  const currentPost = getBlogPost(current);
  if (!currentPost) return null;

  const related = all
    .filter((p) => p.slug !== current && p.category === currentPost.category)
    .slice(0, 3);

  if (related.length === 0) {
    const fallback = all.filter((p) => p.slug !== current).slice(0, 3);
    return <RelatedList articles={fallback} />;
  }
  return <RelatedList articles={related} />;
}

function RelatedList({ articles }: { articles: BlogPostEntry[] }) {
  if (articles.length === 0) return null;
  return (
    <div className="mt-10 pt-8 border-t">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Articles similaires</h2>
      <div className="space-y-3">
        {articles.map((a) => (
          <Link key={a.slug} href={`/blog/${a.slug}`} className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">{a.title}</h3>
            <span className="text-sm text-gray-500">{a.readTime} de lecture</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function CtaBanner() {
  return (
    <div className="mt-10 pt-8 border-t">
      <div className="bg-blue-50 rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Besoin de convertir ou éditer vos images ?</h2>
        <p className="text-gray-600 mb-4">Plus de 50 outils gratuits, sans inscription, aucun fichier conservé.</p>
        <Link href="/" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Voir tous les outils
        </Link>
      </div>
    </div>
  );
}

// ============================================================
// TEMPLATE: FORMAT GUIDE
// ============================================================

function FormatTemplate({ slug }: { slug: string }) {
  const formatId = slug.replace("format-", "");
  const f = formats[formatId];
  if (!f) return null;

  const relatedConversions = getAllBlogPosts().filter(
    (p) => p.type === "conversion" && (p.slug.includes(formatId) || p.slug.includes(f.id))
  ).slice(0, 4);

  const relatedComparisons = getAllBlogPosts().filter(
    (p) => p.type === "comparison" && p.slug.includes(formatId)
  ).slice(0, 4);

  return (
    <div className="prose prose-lg max-w-none">
      <p className="text-gray-600 text-lg mb-6">{f.description}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Fiche technique du format {f.name}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-gray-600 border-collapse">
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold text-gray-800 w-1/3">Nom complet</td><td className="py-2">{f.fullName}</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold text-gray-800">Extension</td><td className="py-2">{f.extension}</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold text-gray-800">Année de création</td><td className="py-2">{f.year}</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold text-gray-800">Créateur</td><td className="py-2">{f.creator}</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold text-gray-800">Type</td><td className="py-2">{f.type === "raster" ? "Image raster (pixels)" : f.type === "vector" ? "Image vectorielle" : "Conteneur de documents"}</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold text-gray-800">Compression</td><td className="py-2">{f.lossy ? "Avec perte (lossy)" : "Sans perte (lossless)"}</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold text-gray-800">Transparence</td><td className="py-2">{f.transparency ? "Oui" : "Non"}</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold text-gray-800">Animation</td><td className="py-2">{f.animation ? "Oui" : "Non"}</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold text-gray-800">Couleurs</td><td className="py-2">{f.maxColors}</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold text-gray-800">Taille typique</td><td className="py-2">{f.typicalSize}</td></tr>
            <tr><td className="py-2 pr-4 font-semibold text-gray-800">Support navigateurs</td><td className="py-2">{f.browserSupport}</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Avantages du format {f.name}</h2>
      <ul className="text-gray-600 space-y-2">
        {f.advantages.map((a, i) => <li key={i}>&#8226; {a}</li>)}
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Inconvénients du format {f.name}</h2>
      <ul className="text-gray-600 space-y-2">
        {f.disadvantages.map((d, i) => <li key={i}>&#8226; {d}</li>)}
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Quand utiliser le format {f.name} ?</h2>
      <p className="text-gray-600 mb-3">Le format {f.name} est recommandé dans les situations suivantes :</p>
      <ul className="text-gray-600 space-y-2">
        {f.bestFor.map((b, i) => <li key={i}>&#8226; {b}</li>)}
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Comment fonctionne le format {f.name} ?</h2>
      <p className="text-gray-600 mb-4">{f.techDescription}</p>

      {relatedConversions.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Convertir depuis ou vers {f.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 not-prose">
            {relatedConversions.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-800 text-sm">{p.title}</h3>
              </Link>
            ))}
          </div>
        </>
      )}

      {relatedComparisons.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Comparatifs avec {f.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 not-prose">
            {relatedComparisons.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-800 text-sm">{p.title}</h3>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ============================================================
// TEMPLATE: CONVERSION GUIDE
// ============================================================

function ConversionTemplate({ slug }: { slug: string }) {
  const c = getConversion(slug);
  if (!c) return null;
  const from = formats[c.from];
  const to = formats[c.to];
  if (!from || !to) return null;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Comment convertir ${from.name} en ${to.name} gratuitement ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Utilisez heictojpg.fr${c.toolPath} : sélectionnez votre fichier ${from.name}, cliquez sur Convertir, puis téléchargez votre fichier ${to.name}. C'est gratuit, sans inscription et sans fichier conservé.`,
        },
      },
      {
        "@type": "Question",
        name: `La conversion ${from.name} vers ${to.name} dégrade-t-elle la qualité ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: c.qualityTip,
        },
      },
    ],
  };

  return (
    <div className="prose prose-lg max-w-none">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        Pourquoi convertir {from.name} en {to.name} ?
      </h2>
      <p className="text-gray-600 mb-4">{c.why}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        Quand faut-il convertir {from.name} en {to.name} ?
      </h2>
      <p className="text-gray-600 mb-3">La conversion est utile dans les cas suivants :</p>
      <ul className="text-gray-600 space-y-2">
        {c.whenToConvert.map((w, i) => <li key={i}>&#8226; {w}</li>)}
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        Comment convertir {from.name} en {to.name} en ligne (gratuit)
      </h2>
      <ol className="text-gray-600 space-y-2">
        {c.steps.map((s, i) => <li key={i}><strong>{i + 1}.</strong> {s}</li>)}
      </ol>

      <div className="not-prose my-6">
        <Link
          href={c.toolPath}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Convertir {from.name} en {to.name} maintenant
        </Link>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Qualité et compression</h2>
      <p className="text-gray-600 mb-4">{c.qualityTip}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        {from.name} vs {to.name} : comparaison rapide
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-gray-600 border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 pr-4 font-semibold text-gray-800">Critère</th>
              <th className="text-left py-3 pr-4 font-semibold text-gray-800">{from.name}</th>
              <th className="text-left py-3 font-semibold text-gray-800">{to.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Type</td><td className="py-2 pr-4">{from.type === "raster" ? "Raster" : from.type === "vector" ? "Vectoriel" : "Conteneur"}</td><td className="py-2">{to.type === "raster" ? "Raster" : to.type === "vector" ? "Vectoriel" : "Conteneur"}</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Compression</td><td className="py-2 pr-4">{from.lossy ? "Avec perte" : "Sans perte"}</td><td className="py-2">{to.lossy ? "Avec perte" : "Sans perte"}</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Transparence</td><td className="py-2 pr-4">{from.transparency ? "Oui" : "Non"}</td><td className="py-2">{to.transparency ? "Oui" : "Non"}</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Taille typique</td><td className="py-2 pr-4">{from.typicalSize}</td><td className="py-2">{to.typicalSize}</td></tr>
            <tr><td className="py-2 pr-4">Navigateurs</td><td className="py-2 pr-4">{from.browserSupport}</td><td className="py-2">{to.browserSupport}</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Questions fréquentes</h2>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment convertir {from.name} en {to.name} gratuitement ?</h3>
        <p className="text-gray-600 mb-4">
          Utilisez notre outil en ligne sur <Link href={c.toolPath} className="text-blue-600 hover:underline">heictojpg.fr{c.toolPath}</Link>. Sélectionnez votre fichier {from.name}, cliquez sur Convertir, puis téléchargez votre {to.name}. Gratuit, sans inscription, aucun fichier conservé.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">La conversion {from.name} vers {to.name} dégrade-t-elle la qualité ?</h3>
        <p className="text-gray-600 mb-4">{c.qualityTip}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je convertir plusieurs fichiers en même temps ?</h3>
        <p className="text-gray-600 mb-4">Oui, notre outil supporte la conversion batch. Sélectionnez plusieurs fichiers {from.name} et convertissez-les tous en {to.name} en un clic.</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">En savoir plus sur ces formats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 not-prose">
        <Link href={`/format/${from.id}`} className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
          <h3 className="font-semibold text-gray-800 text-sm">Tout savoir sur le format {from.name}</h3>
        </Link>
        <Link href={`/format/${to.id}`} className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
          <h3 className="font-semibold text-gray-800 text-sm">Tout savoir sur le format {to.name}</h3>
        </Link>
      </div>
    </div>
  );
}

// ============================================================
// TEMPLATE: COMPARISON
// ============================================================

function ComparisonTemplate({ slug }: { slug: string }) {
  const c = getComparison(slug);
  if (!c) return null;
  const a = formats[c.formatA];
  const b = formats[c.formatB];
  if (!a || !b) return null;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Quelle est la différence entre ${a.name} et ${b.name} ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: c.verdict,
        },
      },
      {
        "@type": "Question",
        name: `${a.name} ou ${b.name} : lequel choisir ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Utilisez ${a.name} pour : ${c.useA.slice(0, 2).join(", ")}. Utilisez ${b.name} pour : ${c.useB.slice(0, 2).join(", ")}.`,
        },
      },
      {
        "@type": "Question",
        name: `Comment convertir ${a.name} en ${b.name} ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Utilisez heictojpg.fr pour convertir vos fichiers ${a.name} en ${b.name} gratuitement, sans inscription. Sélectionnez votre fichier, cliquez sur Convertir, téléchargez le résultat.`,
        },
      },
    ],
  };

  return (
    <div className="prose prose-lg max-w-none">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <p className="text-gray-600 text-lg mb-6">
        {a.name} et {b.name} sont deux formats d&apos;image populaires mais avec des caractéristiques très différentes.
        Ce comparatif détaillé vous aide à choisir le bon format selon vos besoins : compression, qualité, compatibilité, cas d&apos;usage.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Tableau comparatif {a.name} vs {b.name}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-gray-600 border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 pr-4 font-semibold text-gray-800">Critère</th>
              <th className="text-left py-3 pr-4 font-semibold text-gray-800">{a.name}</th>
              <th className="text-left py-3 pr-4 font-semibold text-gray-800">{b.name}</th>
              <th className="text-left py-3 font-semibold text-gray-800">Gagnant</th>
            </tr>
          </thead>
          <tbody>
            {c.criteria.map((cr, i) => (
              <tr key={i} className="border-b border-gray-100">
                <td className="py-2 pr-4 font-medium">{cr.name}</td>
                <td className={`py-2 pr-4 ${cr.winner === "a" ? "font-semibold text-green-700" : ""}`}>{cr.a}</td>
                <td className={`py-2 pr-4 ${cr.winner === "b" ? "font-semibold text-green-700" : ""}`}>{cr.b}</td>
                <td className="py-2">{cr.winner === "a" ? a.name : cr.winner === "b" ? b.name : "Égalité"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Qu&apos;est-ce que le format {a.name} ?</h2>
      <p className="text-gray-600 mb-4">{a.description}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Qu&apos;est-ce que le format {b.name} ?</h2>
      <p className="text-gray-600 mb-4">{b.description}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Quand utiliser {a.name} ?</h2>
      <ul className="text-gray-600 space-y-2">
        {c.useA.map((u, i) => <li key={i}>&#8226; {u}</li>)}
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Quand utiliser {b.name} ?</h2>
      <ul className="text-gray-600 space-y-2">
        {c.useB.map((u, i) => <li key={i}>&#8226; {u}</li>)}
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Verdict : {a.name} ou {b.name} ?</h2>
      <p className="text-gray-600 mb-4">{c.verdict}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Questions fréquentes</h2>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle est la différence entre {a.name} et {b.name} ?</h3>
        <p className="text-gray-600 mb-4">{c.verdict}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{a.name} ou {b.name} : lequel choisir ?</h3>
        <p className="text-gray-600 mb-4">Utilisez {a.name} pour : {c.useA.slice(0, 2).join(", ").toLowerCase()}. Utilisez {b.name} pour : {c.useB.slice(0, 2).join(", ").toLowerCase()}.</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Convertir entre {a.name} et {b.name}</h2>
      <p className="text-gray-600 mb-3">Utilisez nos outils gratuits pour convertir vos fichiers :</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 not-prose">
        {[
          { from: a.id, to: b.id, fromName: a.name, toName: b.name },
          { from: b.id, to: a.id, fromName: b.name, toName: a.name },
        ].map(({ from, to, fromName, toName }) => {
          const toolPath = `/convertir-${from}-en-${to}`;
          return (
            <Link key={toolPath} href={toolPath} className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-blue-700 text-sm">Convertir {fromName} en {toName}</h3>
              <p className="text-xs text-blue-600 mt-1">Outil gratuit en ligne</p>
            </Link>
          );
        })}
        <Link href={`/format/${a.id}`} className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
          <h3 className="font-semibold text-gray-800 text-sm">Guide complet du format {a.name}</h3>
        </Link>
        <Link href={`/format/${b.id}`} className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
          <h3 className="font-semibold text-gray-800 text-sm">Guide complet du format {b.name}</h3>
        </Link>
      </div>
    </div>
  );
}

// ============================================================
// TEMPLATE: ACTION + DEVICE
// ============================================================

function ActionDeviceTemplate({ slug }: { slug: string }) {
  const ad = getActionDevice(slug);
  if (!ad) return null;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ad.methods.map((m) => ({
      "@type": "Question",
      name: `Comment ${ad.actionVerb} sur ${ad.deviceName} avec ${m.title.toLowerCase()} ?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: m.steps.join(". ") + `. Avantages : ${m.pros}. Limites : ${m.cons}.`,
      },
    })),
  };

  return (
    <div className="prose prose-lg max-w-none">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <p className="text-gray-600 text-lg mb-6">{ad.intro}</p>

      {ad.methods.map((m, i) => (
        <div key={i}>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Méthode {i + 1} : {m.title}
          </h2>
          <ol className="text-gray-600 space-y-2">
            {m.steps.map((s, j) => <li key={j}><strong>{j + 1}.</strong> {s}</li>)}
          </ol>
          <div className="flex flex-wrap gap-4 mt-3 text-sm">
            <span className="text-green-700"><strong>Avantages :</strong> {m.pros}</span>
            <span className="text-amber-700"><strong>Limites :</strong> {m.cons}</span>
          </div>
        </div>
      ))}

      <div className="not-prose my-8">
        <Link
          href={ad.toolPath}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          {ad.actionVerb.charAt(0).toUpperCase() + ad.actionVerb.slice(1)} en ligne
        </Link>
      </div>

      {ad.tips.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Conseils et astuces</h2>
          <ul className="text-gray-600 space-y-2">
            {ad.tips.map((t, i) => <li key={i}>&#8226; {t}</li>)}
          </ul>
        </>
      )}
    </div>
  );
}

// ============================================================
// TEMPLATE: EDITORIAL (existing articles)
// ============================================================

function EditorialTemplate({ slug }: { slug: string }) {
  const content = editorialContent[slug];
  if (!content) return null;

  return (
    <div className="prose prose-lg max-w-none">
      {content.split("\n").map((line, i) => {
        if (line.startsWith("## ")) return <h2 key={i} className="text-2xl font-semibold text-gray-800 mt-8 mb-4">{line.replace("## ", "")}</h2>;
        if (line.startsWith("### ")) return <h3 key={i} className="text-xl font-semibold text-gray-800 mt-6 mb-3">{line.replace("### ", "")}</h3>;
        if (line.startsWith("**") && line.endsWith("**")) return <p key={i} className="text-gray-600 mb-4"><strong>{line.replace(/\*\*/g, "")}</strong></p>;
        if (line.startsWith("- ")) return <li key={i} className="text-gray-600 mb-1">{line.replace("- ", "")}</li>;
        if (line.trim() === "") return null;
        return <p key={i} className="text-gray-600 mb-4">{line}</p>;
      })}
    </div>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <ArticleJsonLd post={post} slug={slug} />
      <Breadcrumb post={post} slug={slug} />
      <PageHeader post={post} />

      <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
        {post.type === "editorial" && <EditorialTemplate slug={slug} />}
        {/* Format posts are now at /format/{id} — redirect handled by next.config.ts */}
        {post.type === "conversion" && <ConversionTemplate slug={slug} />}
        {post.type === "comparison" && <ComparisonTemplate slug={slug} />}
        {post.type === "action-device" && <ActionDeviceTemplate slug={slug} />}

        <RelatedArticles current={slug} />
        <RelatedTools />
        <CtaBanner />
      </div>
    </div>
  );
}
