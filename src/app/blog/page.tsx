import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog - Convertisseur HEIC en JPG",
  description: "Articles et guides sur la conversion d'images HEIC en JPG, conseils photo et optimisation d'images.",
  openGraph: {
    type: "website",
    title: "Blog - Convertisseur HEIC en JPG",
    description: "Articles et guides sur la conversion d'images HEIC en JPG, conseils photo et optimisation d'images.",
    url: "https://heictojpg.fr/blog",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://heictojpg.fr/blog",
  },
};

const blogPosts = [
  {
    slug: "heic-vs-jpg-quelle-difference",
    title: "HEIC vs JPG : quelle différence entre ces deux formats ?",
    excerpt: "Comparaison complète entre HEIC et JPG : compression, qualité, compatibilité et cas d'usage pour choisir le bon format.",
    date: "22 janvier 2025",
    readTime: "6 min",
  },
  {
    slug: "ouvrir-fichier-heic-windows",
    title: "Comment ouvrir un fichier HEIC sur Windows gratuitement",
    excerpt: "4 méthodes gratuites pour ouvrir et visualiser vos fichiers HEIC sur Windows 10 et 11, étape par étape.",
    date: "20 janvier 2025",
    readTime: "5 min",
  },
  {
    slug: "meilleurs-formats-image-2025",
    title: "Les meilleurs formats d'image en 2025 : guide complet",
    excerpt: "JPEG, PNG, WebP, AVIF, HEIC, SVG : découvrez les forces et faiblesses de chaque format d'image pour bien choisir.",
    date: "18 janvier 2025",
    readTime: "8 min",
  },
  {
    slug: "convertir-heic-en-jpg-sans-perte-qualite",
    title: "Comment convertir HEIC en JPG sans perte de qualité",
    excerpt: "Découvrez les meilleures techniques pour convertir vos photos iPhone tout en préservant leur qualité d'origine.",
    date: "15 janvier 2025",
    readTime: "5 min",
  },
  {
    slug: "pourquoi-apple-utilise-format-heic",
    title: "Pourquoi Apple utilise-t-il le format HEIC ?",
    excerpt: "Comprenez les avantages du format HEIC et pourquoi Apple l'a choisi comme format par défaut pour ses appareils.",
    date: "12 janvier 2025",
    readTime: "3 min",
  },
  {
    slug: "optimiser-photos-web-heic-jpg-webp",
    title: "Optimiser ses photos pour le web : HEIC vs JPG vs WebP",
    excerpt: "Comparaison détaillée des formats d'image modernes et leurs cas d'usage pour le web.",
    date: "8 janvier 2025",
    readTime: "7 min",
  },
  {
    slug: "gerer-espace-stockage-iphone-conversion-heic",
    title: "Gérer l'espace de stockage sur iPhone avec la conversion HEIC",
    excerpt: "Astuces pour libérer de l'espace sur votre iPhone en optimisant vos photos.",
    date: "5 janvier 2025",
    readTime: "4 min",
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Blog
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Guides, conseils et actualités sur la conversion d'images et l'optimisation de photos.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </CardTitle>
              <div className="flex items-center text-sm text-gray-500 space-x-2">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime} de lecture</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
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

      <div className="mt-16 text-center">
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Convertisseur gratuit
          </h2>
          <p className="text-gray-600 mb-6">
            Besoin de convertir vos fichiers HEIC en JPG ? Utilisez notre outil gratuit.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Commencer la conversion
          </Link>
        </div>
      </div>
    </div>
  );
}