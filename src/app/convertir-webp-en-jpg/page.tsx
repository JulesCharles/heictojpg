import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir WebP en JPG gratuitement en ligne",
  description:
    "Convertissez vos images WebP en JPG en un clic. Outil gratuit, rapide et sans inscription. Assurez la compatibilité de vos images WebP avec tous les logiciels.",
  keywords: [
    "convertir webp en jpg",
    "webp to jpg",
    "conversion webp jpg",
    "webp vers jpg gratuit",
    "convertisseur webp",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-webp-en-jpg",
    siteName: "heictojpg.fr",
    title: "Convertir WebP en JPG gratuitement en ligne",
    description:
      "Convertissez vos images WebP en JPG en un clic. Gratuit, rapide, sans inscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir WebP en JPG gratuitement en ligne",
    description:
      "Convertissez vos images WebP en JPG en un clic. Gratuit, rapide, sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-webp-en-jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur WebP en JPG",
      url: "https://heictojpg.fr/convertir-webp-en-jpg",
      description:
        "Convertissez vos images WebP en JPG gratuitement en ligne. Outil rapide, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Pourquoi convertir WebP en JPG ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le format WebP n'est pas supporté par tous les logiciels, notamment les anciennes versions de Photoshop, certains clients email et certaines applications d'impression. Convertir en JPG assure une compatibilité universelle.",
          },
        },
        {
          "@type": "Question",
          name: "La conversion WebP en JPG est-elle gratuite ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre outil de conversion WebP en JPG est entièrement gratuit, sans inscription requise et sans limitation d'usage.",
          },
        },
        {
          "@type": "Question",
          name: "Mes fichiers sont-ils conservés sur vos serveurs ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non, aucun fichier n'est conservé sur nos serveurs. La conversion s'effectue en mémoire et toutes les données temporaires sont supprimées immédiatement après le téléchargement.",
          },
        },
      ],
    },
  ],
};

export default function ConvertirWebpEnJpg() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Convertir WebP en JPG gratuitement
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos images WebP en fichiers JPG compatibles avec tous les
          logiciels et appareils. Notre convertisseur en ligne est rapide,
          sécurisé et entièrement gratuit. Aucune inscription requise.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="Convertir WebP en JPG"
          acceptedFormats=".webp,image/webp"
          acceptLabel="Sélectionner un fichier WebP"
          outputFormat="jpg"
          apiEndpoint="/api/convert-image"
          outputExtension=".jpg"
          acceptedMimeTypes={["image/webp"]}
          acceptedExtensions={[".webp"]}
          errorMessage="Veuillez sélectionner un fichier WebP valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi convertir WebP en JPG ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format WebP est un format d&apos;image moderne développé par Google,
            offrant une compression supérieure au JPG et au PNG. Il est
            largement utilisé sur le web pour optimiser la vitesse de
            chargement des pages. Cependant, malgré ses avantages techniques,
            le format WebP n&apos;est pas encore supporté par tous les logiciels et
            systèmes.
          </p>

          <p className="text-gray-600 mb-4">
            De nombreuses applications de bureau, logiciels de retouche photo
            anciens, clients de messagerie et services d&apos;impression
            n&apos;acceptent pas les fichiers WebP. Lorsque vous téléchargez une
            image depuis un site web, elle est souvent au format WebP, ce qui
            peut poser problème si vous souhaitez l&apos;utiliser dans un document,
            l&apos;envoyer par email ou l&apos;imprimer.
          </p>

          <p className="text-gray-600 mb-4">
            En convertissant vos fichiers WebP en JPG, vous obtenez un format
            universellement reconnu qui fonctionne avec absolument tous les
            logiciels, systèmes d&apos;exploitation et appareils. Le format JPG
            reste le standard le plus répandu pour les photographies numériques
            et les images du quotidien.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Cas d&apos;utilisation courants
          </h3>

          <ul className="text-gray-600 space-y-2">
            <li>
              •{" "}
              <strong>Compatibilité logicielle :</strong> ouvrez vos images WebP
              dans n&apos;importe quel logiciel de retouche photo, même les versions
              anciennes
            </li>
            <li>
              •{" "}
              <strong>Pièces jointes email :</strong> envoyez vos images par
              email sans risque d&apos;incompatibilité avec le client de messagerie
              du destinataire
            </li>
            <li>
              •{" "}
              <strong>Impression :</strong> les services d&apos;impression en ligne
              et les imprimantes acceptent universellement le format JPG
            </li>
            <li>
              •{" "}
              <strong>Réseaux sociaux :</strong> bien que la plupart des
              plateformes acceptent le WebP, le JPG garantit un affichage
              optimal partout
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Questions fréquentes
        </h2>

        <div className="prose prose-gray max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Pourquoi convertir WebP en JPG ?
          </h3>
          <p className="text-gray-600 mb-6">
            Le format WebP n&apos;est pas supporté par tous les logiciels,
            notamment les anciennes versions de Photoshop, certains clients
            email et les services d&apos;impression. Convertir en JPG garantit que
            votre image pourra être ouverte, éditée et partagée partout sans
            aucun problème de compatibilité.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            La conversion WebP en JPG est-elle gratuite ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, notre outil est entièrement gratuit et illimité. Convertissez
            autant de fichiers WebP en JPG que nécessaire, sans inscription,
            sans filigrane et sans aucune restriction.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Mes fichiers sont-ils conservés sur vos serveurs ?
          </h3>
          <p className="text-gray-600 mb-6">
            Non, votre vie privée est notre priorité. Aucun fichier n&apos;est
            stocké sur nos serveurs. La conversion s&apos;effectue en mémoire et
            toutes les données temporaires sont supprimées immédiatement après
            le téléchargement de votre image convertie.
          </p>
        </div>
      </div>

      {/* Autres outils */}
      <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Découvrez nos autres outils</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC → JPG</h3>
            <p className="text-sm text-gray-600">Convertissez vos photos iPhone HEIC en JPG.</p>
          </Link>
          <Link href="/convertir-png-en-jpg" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">PNG → JPG</h3>
            <p className="text-sm text-gray-600">Convertissez vos images PNG en JPG.</p>
          </Link>
          <Link href="/convertir-jpg-en-png" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">JPG → PNG</h3>
            <p className="text-sm text-gray-600">Convertissez en PNG pour la transparence.</p>
          </Link>
          <Link href="/compresser-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Compresser image</h3>
            <p className="text-sm text-gray-600">Réduisez le poids de vos images.</p>
          </Link>
        </div>
        <p className="mt-6 text-gray-600">Consultez aussi notre <Link href="/blog/meilleurs-formats-image-2025" className="text-blue-600 hover:text-blue-800">guide des meilleurs formats d'image en 2025</Link> et notre <Link href="/faq" className="text-blue-600 hover:text-blue-800">FAQ</Link>.</p>
      </div>
    </div>
  );
}
