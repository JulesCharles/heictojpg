import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";
import AdBanner from "@/components/AdBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Redimensionner image pour les reseaux sociaux | heictojpg.fr",
  description:
    "Redimensionnez vos images aux dimensions exactes pour Instagram, Facebook, LinkedIn, Twitter, YouTube, TikTok et Pinterest. Gratuit, sans inscription.",
  keywords: [
    "taille image instagram",
    "dimension photo facebook",
    "taille image linkedin",
    "redimensionner image reseaux sociaux",
    "taille photo twitter",
    "dimension banniere youtube",
    "taille story instagram",
    "format image reseaux sociaux",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/redimensionner-image-reseaux-sociaux",
    siteName: "heictojpg.fr",
    title: "Redimensionner image pour les reseaux sociaux",
    description: "Redimensionnez vos images aux dimensions exactes pour Instagram, Facebook, LinkedIn, Twitter et plus.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/redimensionner-image-reseaux-sociaux",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Redimensionner image pour les reseaux sociaux",
      url: "https://heictojpg.fr/redimensionner-image-reseaux-sociaux",
      description: "Redimensionnez vos images aux dimensions exactes pour Instagram, Facebook, LinkedIn, Twitter, YouTube, TikTok et Pinterest.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quelle est la taille d'une image Instagram ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Post carre : 1080x1080 px. Portrait : 1080x1350 px. Story/Reel : 1080x1920 px. Paysage : 1080x566 px.",
          },
        },
        {
          "@type": "Question",
          name: "Quelle est la dimension d'une photo de couverture Facebook ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La photo de couverture Facebook fait 820x312 pixels. Pour un post standard, utilisez 1200x630 pixels.",
          },
        },
        {
          "@type": "Question",
          name: "Quelle taille pour une miniature YouTube ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La miniature YouTube optimale fait 1280x720 pixels (ratio 16:9). La banniere fait 2560x1440 pixels.",
          },
        },
      ],
    },
  ],
};

export default function RedimensionnerReseauxSociaux() {
  return (
    <>
      <PageHero>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Redimensionner image pour les reseaux sociaux
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Redimensionnez vos images aux dimensions exactes pour Instagram, Facebook,
          LinkedIn, Twitter, YouTube, TikTok et Pinterest. Un clic, le bon format.
          Gratuit, sans inscription.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <AdBanner slot="SLOT_1" format="horizontal" />

      {/* Guide des tailles */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Guide des tailles d&apos;image par reseau social (2026)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Instagram</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>&bull; <strong>Post carre :</strong> 1080 x 1080 px — le format classique Instagram</li>
              <li>&bull; <strong>Post portrait :</strong> 1080 x 1350 px — prend plus de place dans le feed</li>
              <li>&bull; <strong>Story / Reel :</strong> 1080 x 1920 px — plein ecran vertical</li>
              <li>&bull; <strong>Post paysage :</strong> 1080 x 566 px — pour les panoramas</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Facebook</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>&bull; <strong>Post :</strong> 1200 x 630 px — optimise pour le partage</li>
              <li>&bull; <strong>Couverture :</strong> 820 x 312 px — banniere de page/profil</li>
              <li>&bull; <strong>Story :</strong> 1080 x 1920 px — plein ecran</li>
              <li>&bull; <strong>Photo profil :</strong> 170 x 170 px — affichee en cercle</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">LinkedIn</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>&bull; <strong>Post :</strong> 1200 x 627 px — image d&apos;article ou de partage</li>
              <li>&bull; <strong>Banniere :</strong> 1584 x 396 px — en-tete du profil</li>
              <li>&bull; <strong>Photo profil :</strong> 400 x 400 px — affichee en cercle</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Twitter / X</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>&bull; <strong>Post :</strong> 1600 x 900 px — ratio 16:9 recommande</li>
              <li>&bull; <strong>Header :</strong> 1500 x 500 px — banniere du profil</li>
              <li>&bull; <strong>Photo profil :</strong> 400 x 400 px — affichee en cercle</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">YouTube, TikTok, Pinterest</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>&bull; <strong>Miniature YouTube :</strong> 1280 x 720 px (16:9)</li>
              <li>&bull; <strong>Banniere YouTube :</strong> 2560 x 1440 px</li>
              <li>&bull; <strong>TikTok :</strong> 1080 x 1920 px (9:16)</li>
              <li>&bull; <strong>Pin Pinterest :</strong> 1000 x 1500 px (2:3)</li>
            </ul>
          </div>
        </div>
      </div>

      <AdBanner slot="SLOT_2" format="horizontal" />

      {/* FAQ */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi redimensionner mes images pour les reseaux sociaux ?</h3>
            <p className="text-gray-600">Chaque plateforme a des dimensions recommandees. Une image mal dimensionnee sera recadree automatiquement, ce qui peut couper des elements importants. En fournissant les bonnes dimensions, vous controlez exactement ce qui est affiche.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">L&apos;image est-elle recadree ou etirée ?</h3>
            <p className="text-gray-600">Notre outil redimensionne l&apos;image en conservant les proportions (fit inside). Si le ratio est different, des bords blancs peuvent apparaitre. Pour un recadrage precis, utilisez notre outil de recadrage.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quels formats d&apos;image sont supportes ?</h3>
            <p className="text-gray-600">JPG, PNG, WebP et HEIC. Le format de sortie est conserve (un JPG en entree donne un JPG en sortie).</p>
          </div>
        </div>
      </div>

      {/* Related tools */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Outils similaires</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/redimensionner-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Redimensionner (libre)</h3>
            <p className="text-sm text-gray-600">Dimensions personnalisees.</p>
          </Link>
          <Link href="/recadrer-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Recadrer image</h3>
            <p className="text-sm text-gray-600">Recadrage precis interactif.</p>
          </Link>
          <Link href="/compresser-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Compresser image</h3>
            <p className="text-sm text-gray-600">Reduisez le poids de vos images.</p>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
