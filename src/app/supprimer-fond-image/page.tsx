import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";

export const metadata: Metadata = {
  title: "Supprimer le fond d'une image par IA | heictojpg.fr",
  description: "Supprimez automatiquement l'arrière-plan de vos photos grâce à l'intelligence artificielle. Résultat en PNG transparent. Gratuit, sans inscription.",
  keywords: ["supprimer fond image", "supprimer arrière plan", "remove background", "fond transparent", "détourage photo", "enlever fond photo", "détourage automatique"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/supprimer-fond-image",
    siteName: "heictojpg.fr",
    title: "Supprimer le fond d'une image gratuitement",
    description: "Supprimez automatiquement l'arrière-plan de vos photos. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/supprimer-fond-image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Supprimer le fond d'une image",
      url: "https://heictojpg.fr/supprimer-fond-image",
      description: "Supprimez automatiquement l'arrière-plan de vos photos grâce à l'IA.",
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
          name: "Comment fonctionne la suppression de fond ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre outil utilise un modèle d'intelligence artificielle qui analyse votre image, détecte le sujet principal (personne, objet, animal) et supprime automatiquement l'arrière-plan. Le résultat est une image PNG avec un fond transparent.",
          },
        },
        {
          "@type": "Question",
          name: "Quels types d'images fonctionnent le mieux ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Les photos avec un sujet bien défini sur un fond relativement uniforme donnent les meilleurs résultats : portraits, photos de produits, objets isolés. Les scènes complexes avec plusieurs sujets ou des fonds très chargés peuvent donner des résultats moins précis.",
          },
        },
        {
          "@type": "Question",
          name: "Le traitement est-il gratuit ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre outil de suppression de fond est entièrement gratuit, sans inscription et sans filigrane. Le traitement s'effectue directement sur nos serveurs sans aucune API externe payante.",
          },
        },
        {
          "@type": "Question",
          name: "Mes images sont-elles conservées ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non, aucune image n'est conservée sur nos serveurs. Le traitement s'effectue en mémoire et toutes les données sont supprimées immédiatement après le téléchargement du résultat.",
          },
        },
      ],
    },
  ],
};

export default function SupprimerFondImage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Supprimer le fond d&apos;une image gratuitement
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Supprimez automatiquement l&apos;arrière-plan de vos photos grâce à l&apos;intelligence artificielle.
          Obtenez une image PNG avec fond transparent en quelques secondes. Idéal pour les photos de produits
          e-commerce, les portraits professionnels, les logos et les visuels marketing. Aucun logiciel à installer,
          aucune compétence requise.
        </p>
      </div>

      <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg max-w-lg mx-auto">
        <p className="text-sm text-amber-800">
          Le traitement IA peut prendre 10 à 30 secondes selon la taille de l&apos;image. Merci de patienter.
        </p>
      </div>

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Comment fonctionne la suppression de fond par IA ?
        </h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Notre outil utilise un modèle d&apos;intelligence artificielle entraîné sur des millions d&apos;images
            pour détecter automatiquement le sujet principal de votre photo et le séparer de l&apos;arrière-plan.
            Le modèle analyse les contours, les couleurs, la profondeur et la sémantique de l&apos;image pour
            produire un détourage précis, même autour des cheveux, de la fourrure et des détails fins.
          </p>
          <p className="text-gray-600 mb-4">
            Contrairement aux outils manuels (lasso, baguette magique), l&apos;IA comprend le contenu de l&apos;image.
            Elle sait distinguer une personne d&apos;un mur, un produit d&apos;une table, un animal d&apos;un jardin.
            Le résultat est un PNG avec transparence que vous pouvez utiliser directement dans vos designs,
            présentations ou publications.
          </p>
          <p className="text-gray-600 mb-4">
            Tout le traitement s&apos;effectue sur nos serveurs — aucune donnée n&apos;est envoyée à des services tiers.
            Votre image est traitée en mémoire et supprimée immédiatement après le téléchargement du résultat.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Cas d&apos;utilisation
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>E-commerce :</strong> photos de produits sur fond blanc ou transparent pour Amazon, Shopify, Etsy</li>
            <li>&bull; <strong>Portraits pro :</strong> photo de profil LinkedIn, CV, badge d&apos;entreprise</li>
            <li>&bull; <strong>Design :</strong> intégrer un sujet dans un nouveau décor, créer des collages</li>
            <li>&bull; <strong>Marketing :</strong> visuels pour les réseaux sociaux, bannières publicitaires</li>
            <li>&bull; <strong>Présentations :</strong> intégrer des photos dans des slides sans fond gênant</li>
            <li>&bull; <strong>Logos :</strong> isoler un logo pour l&apos;utiliser sur différents fonds</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Conseils pour un meilleur résultat
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; Utilisez des photos avec un bon contraste entre le sujet et le fond</li>
            <li>&bull; Les images bien éclairées donnent de meilleurs résultats</li>
            <li>&bull; Un sujet unique et bien centré est plus facile à détourer</li>
            <li>&bull; Évitez les images où le sujet se confond avec l&apos;arrière-plan</li>
            <li>&bull; Les images de haute résolution produisent un détourage plus précis</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment fonctionne la suppression de fond ?</h3>
            <p className="text-gray-600 mb-4">Notre outil utilise un modèle d&apos;intelligence artificielle qui analyse votre image, détecte le sujet principal (personne, objet, animal) et supprime automatiquement l&apos;arrière-plan. Le résultat est une image PNG avec un fond transparent.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quels types d&apos;images fonctionnent le mieux ?</h3>
            <p className="text-gray-600 mb-4">Les photos avec un sujet bien défini sur un fond relativement uniforme donnent les meilleurs résultats : portraits, photos de produits, objets isolés. Les scènes complexes avec plusieurs sujets peuvent donner des résultats moins précis.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le traitement est-il gratuit ?</h3>
            <p className="text-gray-600 mb-4">Oui, entièrement gratuit, sans inscription et sans filigrane. Le traitement s&apos;effectue sur nos serveurs sans API externe payante.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Combien de temps prend le traitement ?</h3>
            <p className="text-gray-600 mb-4">Le traitement prend généralement 10 à 30 secondes selon la taille et la complexité de l&apos;image. Les images plus petites sont traitées plus rapidement.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nos autres outils</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; JPG</h3>
            <p className="text-sm text-gray-600">Convertissez vos photos iPhone.</p>
          </Link>
          <Link href="/compresser-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Compresser image</h3>
            <p className="text-sm text-gray-600">Réduisez le poids de vos images.</p>
          </Link>
          <Link href="/recadrer-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Recadrer image</h3>
            <p className="text-sm text-gray-600">Découpez vos images avec précision.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
