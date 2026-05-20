import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Optimiser ses Images pour Shopify [2026] | heictojpg.fr",
  description:
    "Comment optimiser vos photos produits pour Shopify : resolution 2048x2048, fond blanc, poids max 20 Mo, conversion WebP automatique via le CDN Shopify. Guide complet.",
  keywords: [
    "optimiser image shopify",
    "photo produit shopify",
    "taille image shopify",
    "compresser image shopify",
    "fond blanc shopify",
  ],
  openGraph: {
    type: "website",
    title: "Optimiser ses Images pour Shopify [2026]",
    description:
      "Guide complet pour optimiser vos photos produits Shopify : resolution, fond blanc, compression et formats.",
    url: "https://heictojpg.fr/optimiser-image-pour-shopify",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Optimiser ses Images pour Shopify [2026]",
    description:
      "Guide complet pour optimiser vos photos produits Shopify : resolution, fond blanc, compression et formats.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/optimiser-image-pour-shopify",
  },
};

export default function OptimiserImagePourShopify() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment optimiser ses images pour Shopify",
    description:
      "Guide pour preparer et optimiser vos photos produits pour une boutique Shopify performante.",
    totalTime: "PT5M",
    step: [
      {
        "@type": "HowToStep",
        name: "Preparer vos photos produits en 2048x2048 px",
        text: "Utilisez des images carrees de 2048x2048 pixels pour une qualite optimale sur Shopify, y compris le zoom produit.",
        url: "https://heictojpg.fr/optimiser-image-pour-shopify#etape-1",
      },
      {
        "@type": "HowToStep",
        name: "Utiliser un fond blanc uniforme",
        text: "Un fond blanc (#FFFFFF) est le standard e-commerce. Il met en valeur vos produits et donne un aspect professionnel a votre boutique.",
        url: "https://heictojpg.fr/optimiser-image-pour-shopify#etape-2",
      },
      {
        "@type": "HowToStep",
        name: "Compresser les images avant upload",
        text: "Meme si Shopify accepte jusqu'a 20 Mo par image, compressez vos photos pour un chargement plus rapide et une meilleure experience utilisateur.",
        url: "https://heictojpg.fr/optimiser-image-pour-shopify#etape-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Optimiser images pour Shopify",
              href: "/optimiser-image-pour-shopify",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment optimiser ses images pour Shopify
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Sur Shopify, la qualite de vos photos produits fait toute la
          difference entre une vente et un abandon de panier. Decouvrez
          comment preparer vos images pour maximiser la vitesse de chargement
          et la conversion de votre boutique en ligne.
        </p>
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Preparez vos photos produits en un clic
          </h3>
          <p className="text-gray-600 mb-4">
            Compressez vos images et supprimez les fonds automatiquement avec
            nos outils gratuits. Traitement 100% dans votre navigateur.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/compresser-image"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Compresser mes images
            </Link>
            <Link
              href="/supprimer-fond-image"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Supprimer le fond
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Les specifications d&apos;images Shopify en 2026
            </h2>
            <p className="text-gray-600 mb-4">
              Shopify impose certaines limites et recommandations pour les
              images de votre boutique :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Parametre
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Specification
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border-b p-3 font-medium">Taille maximale</td>
                    <td className="border-b p-3">20 Mo par image</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Resolution recommandee</td>
                    <td className="border-b p-3">2048 x 2048 px (carre)</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Resolution maximale</td>
                    <td className="border-b p-3">4472 x 4472 px</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Formats acceptes</td>
                    <td className="border-b p-3">JPEG, PNG, GIF, WebP, HEIC</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">CDN automatique</td>
                    <td className="border-b p-3">Conversion WebP/AVIF via le CDN Shopify</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 1 : Photos produits en 2048 x 2048 px
            </h2>
            <p className="text-gray-600 mb-4">
              La resolution ideale pour Shopify est{" "}
              <strong>2048 x 2048 pixels</strong> en format carre. Cette
              taille permet :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                Un <strong>zoom produit</strong> de qualite suffisante
              </li>
              <li>
                Un affichage <strong>uniforme</strong> dans les grilles de
                collection
              </li>
              <li>
                Une bonne qualite sur les ecrans <strong>Retina/HiDPI</strong>
              </li>
              <li>
                Un <strong>ratio carre</strong> qui s&apos;adapte a tous les
                themes
              </li>
            </ul>
            <p className="text-gray-600">
              Conseil : photographiez toujours vos produits sous le meme angle
              et avec les memes dimensions pour un rendu professionnel.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 2 : Utiliser un fond blanc uniforme
            </h2>
            <p className="text-gray-600 mb-4">
              Le fond blanc est le <strong>standard en e-commerce</strong>. Il
              est exige par des marketplaces comme Amazon et recommande par
              Google Shopping. Voici pourquoi :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                <strong>Mise en valeur du produit</strong> : aucune distraction
                visuelle
              </li>
              <li>
                <strong>Coherence visuelle</strong> : toutes vos fiches produit
                ont le meme aspect
              </li>
              <li>
                <strong>Compatibilite</strong> : fonctionne avec tous les
                themes et fonds de page
              </li>
              <li>
                <strong>Google Shopping</strong> : un fond blanc est souvent
                requis pour les flux produits
              </li>
            </ul>
            <p className="text-gray-600">
              Utilisez notre{" "}
              <Link
                href="/supprimer-fond-image"
                className="text-blue-600 hover:text-blue-800"
              >
                outil de suppression de fond
              </Link>{" "}
              pour retirer automatiquement l&apos;arriere-plan de vos photos
              produits.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 3 : Compresser avant d&apos;uploader
            </h2>
            <p className="text-gray-600 mb-4">
              Meme si Shopify accepte des fichiers jusqu&apos;a{" "}
              <strong>20 Mo</strong>, il est essentiel de compresser vos images
              avant de les uploader :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                Visez <strong>300 a 500 Ko</strong> par photo produit en JPEG
                (qualite 80-85%)
              </li>
              <li>
                Le CDN Shopify convertit automatiquement en WebP, mais une
                image source legere reste plus rapide
              </li>
              <li>
                Moins de poids = <strong>upload plus rapide</strong> quand vous
                gerez des centaines de produits
              </li>
            </ul>
            <p className="text-gray-600">
              Compressez vos photos en lot avec notre{" "}
              <Link
                href="/compresser-image"
                className="text-blue-600 hover:text-blue-800"
              >
                outil de compression d&apos;image
              </Link>
              .
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Le CDN Shopify : conversion WebP automatique
            </h2>
            <p className="text-gray-600 mb-4">
              Bonne nouvelle : Shopify convertit automatiquement vos images en{" "}
              <strong>WebP</strong> (ou AVIF) via son CDN. Cela signifie que
              meme si vous uploadez des JPEG, vos visiteurs recevront des
              images WebP plus legeres.
            </p>
            <p className="text-gray-600 mb-4">
              Cependant, cette conversion automatique ne remplace pas une
              optimisation en amont. Un JPEG de 5 Mo sera converti en un WebP
              de 3 Mo, toujours trop lourd. Alors qu&apos;un JPEG de 400 Ko
              donne un WebP de 250 Ko, beaucoup plus performant.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Bonnes pratiques pour les photos Shopify
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                Utilisez un <strong>eclairage uniforme</strong> pour eviter
                les ombres disgracieuses
              </li>
              <li>
                Nommez vos fichiers de maniere descriptive :{" "}
                <code className="bg-gray-100 px-1 rounded">
                  t-shirt-coton-bleu-face.jpg
                </code>
              </li>
              <li>
                Renseignez toujours le <strong>texte alternatif</strong> (alt
                text) dans Shopify pour le SEO
              </li>
              <li>
                Proposez <strong>3 a 5 angles</strong> differents par produit
              </li>
              <li>
                Ajoutez une <strong>photo en situation</strong> (lifestyle)
                pour montrer le produit en contexte
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Guides associes
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/optimiser-image-pour-wordpress"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Optimiser images pour WordPress
                </h3>
                <p className="text-sm text-gray-600">
                  Guide d&apos;optimisation pour les sites WordPress.
                </p>
              </Link>
              <Link
                href="/compresser-image-pour-email"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Compresser une image pour email
                </h3>
                <p className="text-sm text-gray-600">
                  Reduire le poids de vos images pour l&apos;envoi par email.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
