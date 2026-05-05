import { formats, type FormatData } from "./formats";
import { conversions, conversionSlugs, type ConversionData } from "./conversions";
import { comparisons, comparisonSlugs, type ComparisonData } from "./comparisons";
import { actionsDevices, actionDeviceSlugs, type ActionDeviceData } from "./actions-devices";

export type BlogPostType = "editorial" | "format" | "conversion" | "comparison" | "action-device";

export interface BlogPostEntry {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  readTime: string;
  type: BlogPostType;
  category: string;
}

// --- Editorial (existing handwritten articles) ---

export const editorialPosts: BlogPostEntry[] = [
  {
    slug: "ilovepdf-alternatives-gratuites",
    title: "iLovePDF alternatives gratuites : les 7 meilleurs outils en 2026",
    excerpt: "Decouvrez les meilleures alternatives gratuites a iLovePDF pour convertir, compresser et editer vos PDF et images en ligne.",
    date: "5 mai 2026",
    dateISO: "2026-05-05",
    readTime: "9 min",
    type: "editorial",
    category: "Comparatifs",
  },
  {
    slug: "supprimer-fond-image-gratuitement",
    title: "Comment supprimer le fond d'une image gratuitement (5 methodes)",
    excerpt: "5 methodes gratuites pour supprimer l'arriere-plan de vos photos : outils en ligne, IA, GIMP, PowerPoint et plus.",
    date: "5 mai 2026",
    dateISO: "2026-05-05",
    readTime: "8 min",
    type: "editorial",
    category: "Guides pratiques",
  },
  {
    slug: "reduire-taille-photo-iphone",
    title: "Comment reduire la taille d'une photo sur iPhone (guide 2026)",
    excerpt: "6 methodes pour reduire le poids de vos photos iPhone : compression, format HEIC, raccourcis, iCloud et plus.",
    date: "5 mai 2026",
    dateISO: "2026-05-05",
    readTime: "7 min",
    type: "editorial",
    category: "Guides pratiques",
  },
  {
    slug: "heic-vs-jpg-quelle-difference",
    title: "HEIC vs JPG : quelle différence entre ces deux formats ?",
    excerpt: "Comparaison complète entre HEIC et JPG : compression, qualité, compatibilité et cas d'usage.",
    date: "22 janvier 2025",
    dateISO: "2025-01-22",
    readTime: "6 min",
    type: "editorial",
    category: "Formats d'image",
  },
  {
    slug: "ouvrir-fichier-heic-windows",
    title: "Comment ouvrir un fichier HEIC sur Windows gratuitement",
    excerpt: "4 méthodes gratuites pour ouvrir et visualiser vos fichiers HEIC sur Windows 10 et 11.",
    date: "20 janvier 2025",
    dateISO: "2025-01-20",
    readTime: "5 min",
    type: "editorial",
    category: "Guides pratiques",
  },
  {
    slug: "meilleurs-formats-image-2025",
    title: "Les meilleurs formats d'image en 2025 : guide complet",
    excerpt: "JPEG, PNG, WebP, AVIF, HEIC, SVG : forces et faiblesses de chaque format.",
    date: "18 janvier 2025",
    dateISO: "2025-01-18",
    readTime: "8 min",
    type: "editorial",
    category: "Formats d'image",
  },
  {
    slug: "convertir-heic-en-jpg-sans-perte-qualite",
    title: "Comment convertir HEIC en JPG sans perte de qualité",
    excerpt: "Les meilleures techniques pour convertir vos photos iPhone tout en préservant leur qualité.",
    date: "15 janvier 2025",
    dateISO: "2025-01-15",
    readTime: "5 min",
    type: "editorial",
    category: "Guides pratiques",
  },
  {
    slug: "pourquoi-apple-utilise-format-heic",
    title: "Pourquoi Apple utilise-t-il le format HEIC ?",
    excerpt: "Les avantages du format HEIC et pourquoi Apple l'a choisi comme format par défaut.",
    date: "12 janvier 2025",
    dateISO: "2025-01-12",
    readTime: "3 min",
    type: "editorial",
    category: "Formats d'image",
  },
  {
    slug: "optimiser-photos-web-heic-jpg-webp",
    title: "Optimiser ses photos pour le web : HEIC vs JPG vs WebP",
    excerpt: "Comparaison des formats d'image modernes et leurs cas d'usage pour le web.",
    date: "8 janvier 2025",
    dateISO: "2025-01-08",
    readTime: "7 min",
    type: "editorial",
    category: "Optimisation web",
  },
  {
    slug: "gerer-espace-stockage-iphone-conversion-heic",
    title: "Gérer l'espace de stockage sur iPhone avec la conversion HEIC",
    excerpt: "Astuces pour libérer de l'espace sur votre iPhone en optimisant vos photos.",
    date: "5 janvier 2025",
    dateISO: "2025-01-05",
    readTime: "4 min",
    type: "editorial",
    category: "Guides pratiques",
  },
];

// --- Programmatic: Format guides ---

function generateFormatPosts(): BlogPostEntry[] {
  return Object.values(formats).map((f: FormatData) => ({
    slug: `format-${f.id}`,
    title: `Format ${f.name} : tout savoir sur le ${f.fullName}`,
    excerpt: `Qu'est-ce que le format ${f.name} (${f.fullName}) ? Avantages, limites, compatibilité et meilleurs cas d'utilisation.`,
    date: "5 mai 2026",
    dateISO: "2026-05-05",
    readTime: "6 min",
    type: "format" as const,
    category: "Formats d'image",
  }));
}

// --- Programmatic: Conversion guides ---

function generateConversionPosts(): BlogPostEntry[] {
  return conversions.map((c: ConversionData) => {
    const from = formats[c.from];
    const to = formats[c.to];
    return {
      slug: c.slug,
      title: `Comment convertir ${from?.name || c.from.toUpperCase()} en ${to?.name || c.to.toUpperCase()} (guide complet)`,
      excerpt: `Guide étape par étape pour convertir vos fichiers ${from?.name || c.from.toUpperCase()} en ${to?.name || c.to.toUpperCase()} gratuitement. Pourquoi, quand et comment faire la conversion.`,
      date: "5 mai 2026",
      dateISO: "2026-05-05",
      readTime: "5 min",
      type: "conversion" as const,
      category: "Guides de conversion",
    };
  });
}

// --- Programmatic: Comparison guides ---

function generateComparisonPosts(): BlogPostEntry[] {
  return comparisons.map((c: ComparisonData) => {
    const a = formats[c.formatA];
    const b = formats[c.formatB];
    return {
      slug: c.slug,
      title: `${a?.name || c.formatA.toUpperCase()} vs ${b?.name || c.formatB.toUpperCase()} : quelle différence et lequel choisir ?`,
      excerpt: `Comparaison détaillée entre ${a?.name || c.formatA.toUpperCase()} et ${b?.name || c.formatB.toUpperCase()} : compression, qualité, compatibilité, cas d'usage. Quel format choisir selon vos besoins ?`,
      date: "5 mai 2026",
      dateISO: "2026-05-05",
      readTime: "7 min",
      type: "comparison" as const,
      category: "Comparatifs",
    };
  });
}

// --- Programmatic: Action + Device guides ---

function generateActionDevicePosts(): BlogPostEntry[] {
  return actionsDevices.map((ad: ActionDeviceData) => ({
    slug: ad.slug,
    title: `Comment ${ad.actionVerb} sur ${ad.deviceName} (guide complet)`,
    excerpt: `Toutes les methodes pour ${ad.actionVerb} sur ${ad.deviceName}. Solutions gratuites, etape par etape.`,
    date: "5 mai 2026",
    dateISO: "2026-05-05",
    readTime: "5 min",
    type: "action-device" as const,
    category: "Guides par appareil",
  }));
}

// --- All posts ---

export function getAllBlogPosts(): BlogPostEntry[] {
  return [
    ...editorialPosts,
    // Format posts are now served as standalone pages at /format/{id} (redirect 301 in place)
    ...generateConversionPosts(),
    ...generateComparisonPosts(),
    ...generateActionDevicePosts(),
  ];
}

export function getBlogPost(slug: string): BlogPostEntry | undefined {
  return getAllBlogPosts().find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return getAllBlogPosts().map((p) => p.slug);
}

export function getBlogPostsByCategory(): Record<string, BlogPostEntry[]> {
  const posts = getAllBlogPosts();
  const categories: Record<string, BlogPostEntry[]> = {};
  for (const post of posts) {
    if (!categories[post.category]) categories[post.category] = [];
    categories[post.category].push(post);
  }
  return categories;
}

export { formats, conversions, conversionSlugs, comparisons, comparisonSlugs, actionsDevices, actionDeviceSlugs };
export type { FormatData, ConversionData, ComparisonData, ActionDeviceData };
