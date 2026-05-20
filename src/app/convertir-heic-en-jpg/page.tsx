import type { Metadata } from "next";
import Link from "next/link";
import ConvertForm from "@/components/ConvertForm";
import AdBanner from "@/components/AdBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Convertir HEIC en JPG Gratuit en Ligne - Photos iPhone en 2 Secondes | heictojpg.fr",
  description: "Convertissez vos photos iPhone HEIC en JPG en 1 clic. Conversion batch, téléchargement ZIP. 100% gratuit, sans inscription, sans limite. Aucun fichier conservé sur nos serveurs.",
  keywords: [
    "convertir heic en jpg",
    "heic en jpg",
    "heic to jpg",
    "convertir heic en jpeg",
    "transformer heic en jpg",
    "photo iphone en jpg",
    "fichier heic en jpg",
    "heic jpg gratuit",
    "convertisseur heic",
    "heic to jpg en ligne",
    "convertir photo iphone",
    "heic vers jpg",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-heic-en-jpg",
    siteName: "heictojpg.fr",
    title: "Convertir HEIC en JPG en ligne gratuit",
    description: "Convertissez vos fichiers HEIC en JPG en 1 clic. Gratuit, rapide, sans inscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir HEIC en JPG en ligne gratuit",
    description: "Convertissez vos fichiers HEIC en JPG en 1 clic. Gratuit, rapide, sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-heic-en-jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertir HEIC en JPG",
      url: "https://heictojpg.fr/convertir-heic-en-jpg",
      description: "Convertissez vos photos iPhone HEIC en JPG en 1 clic. Gratuit, rapide, sans inscription.",
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
          name: "Qu'est-ce que le format HEIC ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HEIC (High Efficiency Image Container) est le format d'image par défaut sur les appareils Apple depuis iOS 11. Il offre une meilleure compression que le JPEG tout en conservant une qualité d'image identique.",
          },
        },
        {
          "@type": "Question",
          name: "Pourquoi convertir HEIC en JPG ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le format HEIC n'est pas supporté par tous les navigateurs, applications et systèmes d'exploitation. Convertir en JPG assure une compatibilité universelle pour le partage, l'édition et l'envoi par email.",
          },
        },
        {
          "@type": "Question",
          name: "La conversion HEIC en JPG est-elle gratuite ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre outil de conversion HEIC en JPG est entièrement gratuit, sans inscription requise et sans limitation d'usage. Vous pouvez convertir autant de fichiers que nécessaire.",
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
        {
          "@type": "Question",
          name: "Comment convertir HEIC en JPG sur iPhone ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ouvrez heictojpg.fr sur Safari, sélectionnez vos fichiers HEIC depuis votre pellicule photo, et téléchargez les JPG convertis. Vous pouvez aussi changer le format par défaut dans Réglages > Appareil photo > Formats > Le plus compatible.",
          },
        },
      ],
    },
  ],
};

export default function ConvertirHeicEnJpg() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir HEIC en JPG", href: "/convertir-heic-en-jpg" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Convertir HEIC en JPG en ligne gratuitement
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos photos iPhone au format HEIC en images JPG compatibles avec tous les appareils.
          Glissez un ou plusieurs fichiers HEIC, convertissez en un clic et téléchargez le résultat.
          Gratuit, sans inscription, sans limite. Aucun fichier n&apos;est conservé sur nos serveurs.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ConvertForm />
      </div>

      <AdBanner slot="SLOT_1" format="horizontal" />

      {/* Contenu SEO riche */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Qu&apos;est-ce que le format HEIC et pourquoi le convertir en JPG ?
        </h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            <strong>HEIC</strong> (High Efficiency Image Container), aussi appelé <strong>HEIF</strong> (High Efficiency Image Format),
            est le format d&apos;image par défaut sur tous les appareils Apple depuis iOS 11 (2017). Chaque photo
            prise avec un iPhone, un iPad ou un Mac est enregistrée au format HEIC. Ce format utilise le codec
            HEVC (H.265) pour compresser les images, offrant une qualité identique au JPEG avec des fichiers
            environ 50% plus légers.
          </p>
          <p className="text-gray-600 mb-4">
            Le problème ? <strong>Le format HEIC n&apos;est pas universellement compatible.</strong> Windows ne le
            supporte que depuis Windows 10 (avec une extension payante ou gratuite à installer). De nombreux
            logiciels de retouche photo, sites web, applications de messagerie et réseaux sociaux ne reconnaissent
            pas le HEIC. Si vous envoyez une photo HEIC à un utilisateur Android ou à un collègue sur PC,
            il y a de fortes chances qu&apos;il ne puisse pas l&apos;ouvrir.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Le format JPG (JPEG)</strong> est le standard universel de la photographie numérique depuis
            plus de 30 ans. Il est reconnu par absolument tous les navigateurs web, systèmes d&apos;exploitation,
            applications, imprimantes et appareils électroniques. Convertir vos fichiers HEIC en JPG garantit
            que vos photos seront accessibles partout, par tout le monde.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Pourquoi utiliser notre convertisseur HEIC en JPG ?
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>Gratuit et illimité :</strong> aucune inscription, aucun filigrane, aucune limite de fichiers</li>
            <li>&bull; <strong>Conversion batch :</strong> convertissez plusieurs fichiers HEIC en même temps</li>
            <li>&bull; <strong>Téléchargement ZIP :</strong> récupérez tous vos JPG dans un seul fichier ZIP</li>
            <li>&bull; <strong>Confidentialité totale :</strong> vos fichiers ne sont jamais conservés sur nos serveurs</li>
            <li>&bull; <strong>Qualité préservée :</strong> conversion à 92% de qualité JPEG pour un rendu optimal</li>
            <li>&bull; <strong>Compatible mobile :</strong> fonctionne directement depuis Safari sur iPhone</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Comment convertir HEIC en JPG ?
          </h3>
          <ol className="text-gray-600 space-y-2">
            <li><strong>1.</strong> Glissez vos fichiers HEIC dans la zone de dépôt ci-dessus (ou cliquez pour parcourir)</li>
            <li><strong>2.</strong> Cliquez sur &quot;Convertir&quot; — la conversion prend quelques secondes</li>
            <li><strong>3.</strong> Téléchargez vos fichiers JPG (individuellement ou en ZIP pour plusieurs fichiers)</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            HEIC vs JPG : comparaison détaillée
          </h3>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-gray-600 border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-800">Critère</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-800">HEIC</th>
                  <th className="text-left py-3 font-semibold text-gray-800">JPG</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="py-2 pr-4">Compression</td><td className="py-2 pr-4">50% plus léger que JPG</td><td className="py-2">Standard</td></tr>
                <tr className="border-b border-gray-100"><td className="py-2 pr-4">Compatibilité</td><td className="py-2 pr-4">Apple uniquement</td><td className="py-2">Universelle</td></tr>
                <tr className="border-b border-gray-100"><td className="py-2 pr-4">Transparence</td><td className="py-2 pr-4">Oui</td><td className="py-2">Non</td></tr>
                <tr className="border-b border-gray-100"><td className="py-2 pr-4">Animation</td><td className="py-2 pr-4">Oui (Live Photos)</td><td className="py-2">Non</td></tr>
                <tr className="border-b border-gray-100"><td className="py-2 pr-4">Support navigateurs</td><td className="py-2 pr-4">Safari uniquement</td><td className="py-2">Tous</td></tr>
                <tr><td className="py-2 pr-4">Utilisation idéale</td><td className="py-2 pr-4">Stockage iPhone</td><td className="py-2">Partage, web, impression</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AdBanner slot="SLOT_2" format="horizontal" />

      {/* FAQ */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Qu&apos;est-ce que le format HEIC ?</h3>
            <p className="text-gray-600 mb-4">HEIC (High Efficiency Image Container) est le format photo par défaut sur iPhone et iPad depuis iOS 11. Il offre une compression 50% supérieure au JPG avec une qualité visuelle identique, ce qui permet de stocker plus de photos sur votre appareil.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi mes photos iPhone sont-elles en HEIC ?</h3>
            <p className="text-gray-600 mb-4">Apple a choisi le HEIC comme format par défaut pour économiser de l&apos;espace de stockage. Une photo HEIC pèse environ 2 Mo contre 4 Mo pour un JPG de même qualité. Vous pouvez changer ce réglage dans Paramètres &gt; Appareil photo &gt; Formats &gt; Le plus compatible.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La conversion est-elle gratuite ?</h3>
            <p className="text-gray-600 mb-4">Oui, entièrement gratuite, sans inscription, sans filigrane et sans limite de fichiers. Vous pouvez convertir autant de photos HEIC en JPG que nécessaire.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mes photos sont-elles en sécurité ?</h3>
            <p className="text-gray-600 mb-4">Oui. La conversion s&apos;effectue en mémoire sur nos serveurs sécurisés. Aucun fichier n&apos;est stocké après le téléchargement. Toutes les données temporaires sont supprimées immédiatement.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment convertir HEIC en JPG sur iPhone ?</h3>
            <p className="text-gray-600 mb-4">Ouvrez heictojpg.fr dans Safari sur votre iPhone, sélectionnez vos photos HEIC depuis votre pellicule, puis téléchargez les fichiers JPG convertis. C&apos;est aussi simple que ça.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je convertir plusieurs fichiers HEIC en même temps ?</h3>
            <p className="text-gray-600 mb-4">Oui, notre outil supporte la conversion batch. Sélectionnez plusieurs fichiers HEIC, convertissez-les en un clic, et téléchargez le tout dans un fichier ZIP.</p>
          </div>
        </div>
      </div>

      {/* Guides par appareil */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Guides de conversion HEIC par appareil</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/convertir-heic-en-jpg-sur-iphone" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Convertir HEIC en JPG sur iPhone</h3>
            <p className="text-sm text-gray-600">Changez le format par défaut ou convertissez vos photos directement.</p>
          </Link>
          <Link href="/convertir-heic-en-jpg-sur-mac" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Convertir HEIC en JPG sur Mac</h3>
            <p className="text-sm text-gray-600">Utilisez Aperçu, Automator ou notre outil en ligne.</p>
          </Link>
          <Link href="/convertir-heic-en-jpg-sur-windows" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Convertir HEIC en JPG sur Windows</h3>
            <p className="text-sm text-gray-600">Ouvrez et convertissez vos fichiers HEIC sur PC.</p>
          </Link>
          <Link href="/convertir-heic-en-jpg-sur-android" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Convertir HEIC en JPG sur Android</h3>
            <p className="text-sm text-gray-600">Solutions pour ouvrir les photos iPhone sur Android.</p>
          </Link>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-heic-en-jpg" />
    </div>
    </>
  );
}
