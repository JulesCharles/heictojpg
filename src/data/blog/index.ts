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
    title: "Réduire la Taille d'une Photo iPhone — 6 Méthodes Gratuites (2026)",
    excerpt: "Comment réduire le poids d'une photo iPhone sans perdre en qualité ? Compression, HEIC, Raccourcis, iCloud : 6 méthodes testées pas à pas.",
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
  // P4 - 10 articles éditoriaux
  {
    slug: "reduire-taille-image-sans-perdre-qualite",
    title: "Comment réduire la taille d'une image sans perdre en qualité",
    excerpt: "Toutes les techniques pour compresser vos photos sans dégradation visible : formats, outils et réglages optimaux.",
    date: "12 mai 2026",
    dateISO: "2026-05-12",
    readTime: "7 min",
    type: "editorial",
    category: "Guides pratiques",
  },
  {
    slug: "quel-format-image-site-web-2026",
    title: "Quel format d'image choisir pour son site web en 2026",
    excerpt: "JPG, PNG, WebP, AVIF, SVG : guide complet pour choisir le bon format selon vos besoins web.",
    date: "12 mai 2026",
    dateISO: "2026-05-12",
    readTime: "8 min",
    type: "editorial",
    category: "Optimisation web",
  },
  {
    slug: "convertir-photos-en-lot-batch-gratuit",
    title: "Comment convertir des photos en lot (batch) gratuitement",
    excerpt: "Les meilleures méthodes pour convertir plusieurs images en une seule fois : outils en ligne, logiciels et scripts.",
    date: "12 mai 2026",
    dateISO: "2026-05-12",
    readTime: "6 min",
    type: "editorial",
    category: "Guides pratiques",
  },
  {
    slug: "heic-vs-avif-futur-formats-photo",
    title: "HEIC vs AVIF : le futur des formats photo",
    excerpt: "Comparaison entre les deux formats modernes : compression, qualité, écosystème et adoption.",
    date: "12 mai 2026",
    dateISO: "2026-05-12",
    readTime: "7 min",
    type: "editorial",
    category: "Formats d'image",
  },
  {
    slug: "creer-favicon-a-partir-image",
    title: "Comment créer un favicon à partir d'une image",
    excerpt: "Guide étape par étape pour créer un favicon .ico pour votre site web à partir de n'importe quelle image.",
    date: "12 mai 2026",
    dateISO: "2026-05-12",
    readTime: "5 min",
    type: "editorial",
    category: "Guides pratiques",
  },
  {
    slug: "meilleurs-outils-compresser-pdf-2026",
    title: "Les 10 meilleurs outils pour compresser un PDF en 2026",
    excerpt: "Comparatif des outils gratuits et payants pour réduire la taille de vos fichiers PDF.",
    date: "12 mai 2026",
    dateISO: "2026-05-12",
    readTime: "9 min",
    type: "editorial",
    category: "Comparatifs",
  },
  {
    slug: "guide-complet-format-webp",
    title: "WebP : le guide complet du format recommandé par Google",
    excerpt: "Tout savoir sur le format WebP : avantages, limites, conversion et optimisation pour le web.",
    date: "12 mai 2026",
    dateISO: "2026-05-12",
    readTime: "8 min",
    type: "editorial",
    category: "Formats d'image",
  },
  {
    slug: "supprimer-donnees-gps-photos",
    title: "Comment supprimer les données GPS de vos photos",
    excerpt: "Protégez votre vie privée en supprimant la géolocalisation de vos images avant de les partager.",
    date: "12 mai 2026",
    dateISO: "2026-05-12",
    readTime: "5 min",
    type: "editorial",
    category: "Guides pratiques",
  },
  {
    slug: "convertir-pdf-en-images-guide",
    title: "Comment convertir un PDF en images (JPG/PNG)",
    excerpt: "3 méthodes gratuites pour extraire les pages d'un PDF en images haute qualité.",
    date: "12 mai 2026",
    dateISO: "2026-05-12",
    readTime: "5 min",
    type: "editorial",
    category: "Guides de conversion",
  },
  {
    slug: "compresser-images-pour-email",
    title: "Compresser des images pour l'email : le guide complet",
    excerpt: "Réduisez le poids de vos photos pour les envoyer par email sans dépasser les limites de taille.",
    date: "12 mai 2026",
    dateISO: "2026-05-12",
    readTime: "5 min",
    type: "editorial",
    category: "Guides pratiques",
  },
  {
    slug: "comment-convertir-image-en-pdf",
    title: "Comment convertir une image en PDF : le guide complet",
    excerpt: "Convertissez une ou plusieurs images en PDF proprement : ordre des pages, qualite, formats acceptes et erreurs a eviter.",
    date: "21 mai 2026",
    dateISO: "2026-05-21",
    readTime: "12 min",
    type: "editorial",
    category: "Guides PDF",
  },
  {
    slug: "comment-creer-gif-anime-gratuit",
    title: "Comment creer un GIF anime gratuitement",
    excerpt: "Guide pratique pour creer un GIF anime gratuit a partir d'images, regler sa vitesse et limiter son poids.",
    date: "21 mai 2026",
    dateISO: "2026-05-21",
    readTime: "12 min",
    type: "editorial",
    category: "Guides pratiques",
  },
  {
    slug: "comment-mettre-image-en-300-dpi",
    title: "Comment Mettre une Image en 300 DPI — Guide Gratuit + Outil en Ligne",
    excerpt: "Passez vos images en 300 DPI pour une impression nette. On explique DPI vs pixels, comment vérifier et modifier la résolution. Avec outil gratuit en ligne.",
    date: "21 mai 2026",
    dateISO: "2026-05-21",
    readTime: "12 min",
    type: "editorial",
    category: "Impression",
  },
  {
    slug: "difference-entre-jpg-et-png",
    title: "JPG vs PNG : quelle difference et lequel choisir",
    excerpt: "JPG ou PNG : comparez compression, transparence, qualite, poids et usages pour choisir le bon format.",
    date: "21 mai 2026",
    dateISO: "2026-05-21",
    readTime: "12 min",
    type: "editorial",
    category: "Formats d'image",
  },
  {
    slug: "dimensions-images-reseaux-sociaux-2026",
    title: "Dimensions des images pour les reseaux sociaux en 2026",
    excerpt: "Les tailles et ratios utiles pour preparer vos images Instagram, Facebook, LinkedIn, X, TikTok et YouTube en 2026.",
    date: "21 mai 2026",
    dateISO: "2026-05-21",
    readTime: "13 min",
    type: "editorial",
    category: "Reseaux sociaux",
  },
  {
    slug: "comment-scanner-document-avec-iphone",
    title: "Comment scanner un document avec iPhone",
    excerpt: "Scannez un document avec un iPhone, nettoyez les pages et preparez un PDF lisible pour l'envoi.",
    date: "21 mai 2026",
    dateISO: "2026-05-21",
    readTime: "12 min",
    type: "editorial",
    category: "Guides PDF",
  },
  {
    slug: "comment-proteger-pdf-mot-de-passe",
    title: "Comment proteger un PDF avec un mot de passe",
    excerpt: "Ajoutez un mot de passe a un PDF et comprenez les bonnes pratiques avant de partager un document sensible.",
    date: "21 mai 2026",
    dateISO: "2026-05-21",
    readTime: "12 min",
    type: "editorial",
    category: "Guides PDF",
  },
  {
    slug: "comment-fusionner-plusieurs-pdf-gratuit",
    title: "Comment fusionner plusieurs PDF gratuitement",
    excerpt: "Assemblez plusieurs PDF dans le bon ordre, verifiez les pages et reduisez le poids du fichier final.",
    date: "21 mai 2026",
    dateISO: "2026-05-21",
    readTime: "12 min",
    type: "editorial",
    category: "Guides PDF",
  },
  {
    slug: "comment-vectoriser-une-image",
    title: "Comment vectoriser une image JPG ou PNG vers SVG",
    excerpt: "Vectorisez une image raster vers SVG, choisissez la bonne source et corrigez les contours pour un rendu net.",
    date: "21 mai 2026",
    dateISO: "2026-05-21",
    readTime: "12 min",
    type: "editorial",
    category: "Guides de conversion",
  },
  {
    slug: "comment-convertir-photo-en-jpg",
    title: "Comment convertir une photo en JPG depuis tous les formats",
    excerpt: "Transformez HEIC, PNG, WebP, AVIF ou TIFF en JPG compatible sans perdre inutilement de qualite.",
    date: "21 mai 2026",
    dateISO: "2026-05-21",
    readTime: "12 min",
    type: "editorial",
    category: "Guides de conversion",
  },
  // P6 - 4 articles "alternatives à"
  {
    slug: "convertio-alternatives-gratuites",
    title: "Alternatives à Convertio gratuites : les 7 meilleurs outils en 2026",
    excerpt: "Découvrez les meilleures alternatives gratuites à Convertio pour convertir vos images et fichiers en ligne.",
    date: "12 mai 2026",
    dateISO: "2026-05-12",
    readTime: "8 min",
    type: "editorial",
    category: "Comparatifs",
  },
  {
    slug: "tinypng-alternatives-gratuites",
    title: "Alternatives à TinyPNG pour compresser des images en 2026",
    excerpt: "Les meilleurs outils gratuits pour compresser vos images PNG et JPG sans TinyPNG.",
    date: "12 mai 2026",
    dateISO: "2026-05-12",
    readTime: "8 min",
    type: "editorial",
    category: "Comparatifs",
  },
  {
    slug: "cloudconvert-alternatives-gratuites",
    title: "Alternatives à CloudConvert en 2026 : les outils gratuits",
    excerpt: "Les meilleures alternatives gratuites à CloudConvert pour convertir images, PDF et vidéos.",
    date: "12 mai 2026",
    dateISO: "2026-05-12",
    readTime: "8 min",
    type: "editorial",
    category: "Comparatifs",
  },
  {
    slug: "canva-alternatives-edition-image",
    title: "Alternatives à Canva pour éditer des images en 2026",
    excerpt: "Les meilleurs outils gratuits pour retoucher, redimensionner et convertir des images sans Canva.",
    date: "12 mai 2026",
    dateISO: "2026-05-12",
    readTime: "8 min",
    type: "editorial",
    category: "Comparatifs",
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
      title: c.title || `Comment convertir ${from?.name || c.from.toUpperCase()} en ${to?.name || c.to.toUpperCase()} (guide complet)`,
      excerpt: c.excerpt || `Guide étape par étape pour convertir vos fichiers ${from?.name || c.from.toUpperCase()} en ${to?.name || c.to.toUpperCase()} gratuitement. Pourquoi, quand et comment faire la conversion.`,
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
      title: c.title || `${a?.name || c.formatA.toUpperCase()} vs ${b?.name || c.formatB.toUpperCase()} : quelle différence et lequel choisir ?`,
      excerpt: c.excerpt || `Comparaison détaillée entre ${a?.name || c.formatA.toUpperCase()} et ${b?.name || c.formatB.toUpperCase()} : compression, qualité, compatibilité, cas d'usage. Quel format choisir selon vos besoins ?`,
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
