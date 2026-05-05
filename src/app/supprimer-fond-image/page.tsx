import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";

export const metadata: Metadata = {
  title: "Supprimer le fond d'une image par IA | heictojpg.fr",
  description: "Supprimez automatiquement l'arriere-plan de vos photos grace a l'intelligence artificielle. Resultat en PNG transparent. Gratuit, sans inscription.",
  keywords: ["supprimer fond image", "supprimer arriere plan", "remove background", "fond transparent", "detourage photo", "enlever fond photo", "detourage automatique"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/supprimer-fond-image",
    siteName: "heictojpg.fr",
    title: "Supprimer le fond d'une image gratuitement",
    description: "Supprimez automatiquement l'arriere-plan de vos photos. Gratuit, sans inscription.",
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
      description: "Supprimez automatiquement l'arriere-plan de vos photos grace a l'IA.",
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
            text: "Notre outil utilise un modele d'intelligence artificielle qui analyse votre image, detecte le sujet principal (personne, objet, animal) et supprime automatiquement l'arriere-plan. Le resultat est une image PNG avec un fond transparent.",
          },
        },
        {
          "@type": "Question",
          name: "Quels types d'images fonctionnent le mieux ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Les photos avec un sujet bien defini sur un fond relativement uniforme donnent les meilleurs resultats : portraits, photos de produits, objets isoles. Les scenes complexes avec plusieurs sujets ou des fonds tres charges peuvent donner des resultats moins precis.",
          },
        },
        {
          "@type": "Question",
          name: "Le traitement est-il gratuit ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre outil de suppression de fond est entierement gratuit, sans inscription et sans filigrane. Le traitement s'effectue directement sur nos serveurs sans aucune API externe payante.",
          },
        },
        {
          "@type": "Question",
          name: "Mes images sont-elles conservees ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non, aucune image n'est conservee sur nos serveurs. Le traitement s'effectue en memoire et toutes les donnees sont supprimees immediatement apres le telechargement du resultat.",
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
          Supprimez automatiquement l&apos;arriere-plan de vos photos grace a l&apos;intelligence artificielle.
          Obtenez une image PNG avec fond transparent en quelques secondes. Ideal pour les photos de produits
          e-commerce, les portraits professionnels, les logos et les visuels marketing. Aucun logiciel a installer,
          aucune competence requise.
        </p>
      </div>

      <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg max-w-lg mx-auto">
        <p className="text-sm text-amber-800">
          Le traitement IA peut prendre 10 a 30 secondes selon la taille de l&apos;image. Merci de patienter.
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
            Notre outil utilise un modele d&apos;intelligence artificielle entraine sur des millions d&apos;images
            pour detecter automatiquement le sujet principal de votre photo et le separer de l&apos;arriere-plan.
            Le modele analyse les contours, les couleurs, la profondeur et la semantique de l&apos;image pour
            produire un detourage precis, meme autour des cheveux, de la fourrure et des details fins.
          </p>
          <p className="text-gray-600 mb-4">
            Contrairement aux outils manuels (lasso, baguette magique), l&apos;IA comprend le contenu de l&apos;image.
            Elle sait distinguer une personne d&apos;un mur, un produit d&apos;une table, un animal d&apos;un jardin.
            Le resultat est un PNG avec transparence que vous pouvez utiliser directement dans vos designs,
            presentations ou publications.
          </p>
          <p className="text-gray-600 mb-4">
            Tout le traitement s&apos;effectue sur nos serveurs — aucune donnee n&apos;est envoyee a des services tiers.
            Votre image est traitee en memoire et supprimee immediatement apres le telechargement du resultat.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Cas d&apos;utilisation
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>E-commerce :</strong> photos de produits sur fond blanc ou transparent pour Amazon, Shopify, Etsy</li>
            <li>&bull; <strong>Portraits pro :</strong> photo de profil LinkedIn, CV, badge d&apos;entreprise</li>
            <li>&bull; <strong>Design :</strong> integrer un sujet dans un nouveau decor, creer des collages</li>
            <li>&bull; <strong>Marketing :</strong> visuels pour les reseaux sociaux, bannieres publicitaires</li>
            <li>&bull; <strong>Presentations :</strong> integrer des photos dans des slides sans fond genant</li>
            <li>&bull; <strong>Logos :</strong> isoler un logo pour l&apos;utiliser sur differents fonds</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Conseils pour un meilleur resultat
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; Utilisez des photos avec un bon contraste entre le sujet et le fond</li>
            <li>&bull; Les images bien eclairees donnent de meilleurs resultats</li>
            <li>&bull; Un sujet unique et bien centre est plus facile a detourer</li>
            <li>&bull; Evitez les images ou le sujet se confond avec l&apos;arriere-plan</li>
            <li>&bull; Les images de haute resolution produisent un detourage plus precis</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment fonctionne la suppression de fond ?</h3>
            <p className="text-gray-600 mb-4">Notre outil utilise un modele d&apos;intelligence artificielle qui analyse votre image, detecte le sujet principal (personne, objet, animal) et supprime automatiquement l&apos;arriere-plan. Le resultat est une image PNG avec un fond transparent.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quels types d&apos;images fonctionnent le mieux ?</h3>
            <p className="text-gray-600 mb-4">Les photos avec un sujet bien defini sur un fond relativement uniforme donnent les meilleurs resultats : portraits, photos de produits, objets isoles. Les scenes complexes avec plusieurs sujets peuvent donner des resultats moins precis.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le traitement est-il gratuit ?</h3>
            <p className="text-gray-600 mb-4">Oui, entierement gratuit, sans inscription et sans filigrane. Le traitement s&apos;effectue sur nos serveurs sans API externe payante.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Combien de temps prend le traitement ?</h3>
            <p className="text-gray-600 mb-4">Le traitement prend generalement 10 a 30 secondes selon la taille et la complexite de l&apos;image. Les images plus petites sont traitees plus rapidement.</p>
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
            <p className="text-sm text-gray-600">Reduisez le poids de vos images.</p>
          </Link>
          <Link href="/recadrer-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Recadrer image</h3>
            <p className="text-sm text-gray-600">Decoupez vos images avec precision.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
