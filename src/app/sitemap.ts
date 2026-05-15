import { MetadataRoute } from 'next'
import { getAllBlogSlugs } from '@/data/blog'
import { getAllGlossaryIds } from '@/data/glossary'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://heictojpg.fr'

  const blogSlugs = getAllBlogSlugs()
  const glossaryIds = getAllGlossaryIds()

  const toolSlugs = [
    // HEIC tools
    'convertir-heic-en-jpg',
    'convertir-heic-en-png',
    'convertir-heic-en-webp',
    'convertir-heic-en-pdf',
    'convertir-heic-en-avif',
    'convertir-heic-en-tiff',
    'convertir-heic-en-gif',
    'convertir-heic-en-ico',
    'compresser-heic',
    'lire-metadonnees-heic',
    // Image conversions
    'convertir-png-en-jpg',
    'convertir-webp-en-jpg',
    'convertir-jpg-en-png',
    'convertir-svg-en-png',
    'convertir-svg-en-jpg',
    'convertir-jpg-en-webp',
    'convertir-png-en-webp',
    'convertir-webp-en-png',
    'convertir-tiff-en-jpg',
    'convertir-tiff-en-png',
    'convertir-tiff-en-webp',
    'convertir-bmp-en-jpg',
    'convertir-bmp-en-png',
    'convertir-gif-en-jpg',
    'convertir-gif-en-png',
    'convertir-gif-en-webp',
    'convertir-webp-en-gif',
    'convertir-jpg-en-avif',
    'convertir-png-en-avif',
    'convertir-avif-en-jpg',
    'convertir-avif-en-png',
    'convertir-jpg-en-tiff',
    'convertir-jpg-en-gif',
    'convertir-png-en-ico',
    'convertir-jpg-en-ico',
    'convertir-ico-en-png',
    // Vectorization
    'convertir-jpg-en-svg',
    'convertir-png-en-svg',
    // PDF tools
    'fusionner-pdf',
    'diviser-pdf',
    'compresser-pdf',
    'convertir-jpg-en-pdf',
    'convertir-png-en-pdf',
    'convertir-pdf-en-jpg',
    'convertir-pdf-en-png',
    'numeroter-pages-pdf',
    'supprimer-pages-pdf',
    'pivoter-pdf',
    'reorganiser-pages-pdf',
    'proteger-pdf',
    // AI tools
    'supprimer-fond-image',
    // Image tools
    'compresser-image',
    'redimensionner-image',
    // Editing tools
    'recadrer-image',
    'pivoter-image',
    'convertir-image-noir-et-blanc',
    'flouter-image',
    'inverser-couleurs-image',
    'changer-dpi-image',
    'ajouter-filigrane',
    'supprimer-metadonnees-image',
    'lire-metadonnees-image',
    // New tools
    'generer-qr-code',
    'redimensionner-image-reseaux-sociaux',
    'convertir-images-en-pdf',
    'creer-gif',
    'extraire-texte-image',
    // New tools (Phase 3)
    'convertisseur-couleurs',
    'modifier-metadonnees-image',
    'ajouter-texte-image',
    'optimiser-image-web',
    'creer-planche-contact',
  ]

  const deviceSlugs = [
    'convertir-heic-en-jpg-sur-mac',
    'convertir-heic-en-jpg-sur-windows',
    'convertir-heic-en-jpg-sur-android',
    'convertir-heic-en-jpg-sur-iphone',
  ]

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/outils-heic`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/outils-image`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/outils-pdf`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    // VS comparison pages
    { url: `${baseUrl}/heic-vs-jpg`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/png-vs-webp`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/png-vs-jpg`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/avif-vs-webp`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/svg-vs-png`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/webp-vs-jpg`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/avif-vs-jpg`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/heic-vs-webp`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/heic-vs-avif`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/gif-vs-webp`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tiff-vs-jpg`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/pdf-vs-jpg`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Guide pages
    { url: `${baseUrl}/comment-ouvrir-fichier-heic`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...toolSlugs.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...deviceSlugs.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${baseUrl}/format`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...glossaryIds.map((id) => ({
      url: `${baseUrl}/format/${id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/a-propos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/confidentialite`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/conditions-utilisation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]
}
