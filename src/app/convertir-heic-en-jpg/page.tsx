import type { Metadata } from "next";
import Link from "next/link";
import ConvertForm from "@/components/ConvertForm";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "Convertir HEIC en JPG en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos fichiers HEIC en JPG en 1 clic. Gratuit, rapide, sans inscription et sans limite. Photos iPhone compatibles partout.",
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
            text: "HEIC (High Efficiency Image Container) est le format d'image par defaut sur les appareils Apple depuis iOS 11. Il offre une meilleure compression que le JPEG tout en conservant une qualite d'image identique.",
          },
        },
        {
          "@type": "Question",
          name: "Pourquoi convertir HEIC en JPG ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le format HEIC n'est pas supporte par tous les navigateurs, applications et systemes d'exploitation. Convertir en JPG assure une compatibilite universelle pour le partage, l'edition et l'envoi par email.",
          },
        },
        {
          "@type": "Question",
          name: "La conversion HEIC en JPG est-elle gratuite ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre outil de conversion HEIC en JPG est entierement gratuit, sans inscription requise et sans limitation d'usage. Vous pouvez convertir autant de fichiers que necessaire.",
          },
        },
        {
          "@type": "Question",
          name: "Mes fichiers sont-ils conserves sur vos serveurs ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non, aucun fichier n'est conserve sur nos serveurs. La conversion s'effectue en memoire et toutes les donnees temporaires sont supprimees immediatement apres le telechargement.",
          },
        },
        {
          "@type": "Question",
          name: "Comment convertir HEIC en JPG sur iPhone ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ouvrez heictojpg.fr sur Safari, selectionnez vos fichiers HEIC depuis votre pellicule photo, et telechargez les JPG convertis. Vous pouvez aussi changer le format par defaut dans Reglages > Appareil photo > Formats > Le plus compatible.",
          },
        },
      ],
    },
  ],
};

export default function ConvertirHeicEnJpg() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Convertir HEIC en JPG en ligne gratuitement
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos photos iPhone au format HEIC en images JPG compatibles avec tous les appareils.
          Glissez un ou plusieurs fichiers HEIC, convertissez en un clic et telechargez le resultat.
          Gratuit, sans inscription, sans limite. Aucun fichier n&apos;est conserve sur nos serveurs.
        </p>
      </div>

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
            <strong>HEIC</strong> (High Efficiency Image Container), aussi appele <strong>HEIF</strong> (High Efficiency Image Format),
            est le format d&apos;image par defaut sur tous les appareils Apple depuis iOS 11 (2017). Chaque photo
            prise avec un iPhone, un iPad ou un Mac est enregistree au format HEIC. Ce format utilise le codec
            HEVC (H.265) pour compresser les images, offrant une qualite identique au JPEG avec des fichiers
            environ 50% plus legers.
          </p>
          <p className="text-gray-600 mb-4">
            Le probleme ? <strong>Le format HEIC n&apos;est pas universellement compatible.</strong> Windows ne le
            supporte que depuis Windows 10 (avec une extension payante ou gratuite a installer). De nombreux
            logiciels de retouche photo, sites web, applications de messagerie et reseaux sociaux ne reconnaissent
            pas le HEIC. Si vous envoyez une photo HEIC a un utilisateur Android ou a un collegue sur PC,
            il y a de fortes chances qu&apos;il ne puisse pas l&apos;ouvrir.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Le format JPG (JPEG)</strong> est le standard universel de la photographie numerique depuis
            plus de 30 ans. Il est reconnu par absolument tous les navigateurs web, systemes d&apos;exploitation,
            applications, imprimantes et appareils electroniques. Convertir vos fichiers HEIC en JPG garantit
            que vos photos seront accessibles partout, par tout le monde.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Pourquoi utiliser notre convertisseur HEIC en JPG ?
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>Gratuit et illimite :</strong> aucune inscription, aucun filigrane, aucune limite de fichiers</li>
            <li>&bull; <strong>Conversion batch :</strong> convertissez plusieurs fichiers HEIC en meme temps</li>
            <li>&bull; <strong>Telechargement ZIP :</strong> recuperez tous vos JPG dans un seul fichier ZIP</li>
            <li>&bull; <strong>Confidentialite totale :</strong> vos fichiers ne sont jamais conserves sur nos serveurs</li>
            <li>&bull; <strong>Qualite preservee :</strong> conversion a 92% de qualite JPEG pour un rendu optimal</li>
            <li>&bull; <strong>Compatible mobile :</strong> fonctionne directement depuis Safari sur iPhone</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Comment convertir HEIC en JPG ?
          </h3>
          <ol className="text-gray-600 space-y-2">
            <li><strong>1.</strong> Glissez vos fichiers HEIC dans la zone de depot ci-dessus (ou cliquez pour parcourir)</li>
            <li><strong>2.</strong> Cliquez sur &quot;Convertir&quot; — la conversion prend quelques secondes</li>
            <li><strong>3.</strong> Telechargez vos fichiers JPG (individuellement ou en ZIP pour plusieurs fichiers)</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            HEIC vs JPG : comparaison detaillee
          </h3>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-gray-600 border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-800">Critere</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-800">HEIC</th>
                  <th className="text-left py-3 font-semibold text-gray-800">JPG</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="py-2 pr-4">Compression</td><td className="py-2 pr-4">50% plus leger que JPG</td><td className="py-2">Standard</td></tr>
                <tr className="border-b border-gray-100"><td className="py-2 pr-4">Compatibilite</td><td className="py-2 pr-4">Apple uniquement</td><td className="py-2">Universelle</td></tr>
                <tr className="border-b border-gray-100"><td className="py-2 pr-4">Transparence</td><td className="py-2 pr-4">Oui</td><td className="py-2">Non</td></tr>
                <tr className="border-b border-gray-100"><td className="py-2 pr-4">Animation</td><td className="py-2 pr-4">Oui (Live Photos)</td><td className="py-2">Non</td></tr>
                <tr className="border-b border-gray-100"><td className="py-2 pr-4">Support navigateurs</td><td className="py-2 pr-4">Safari uniquement</td><td className="py-2">Tous</td></tr>
                <tr><td className="py-2 pr-4">Utilisation ideale</td><td className="py-2 pr-4">Stockage iPhone</td><td className="py-2">Partage, web, impression</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AdBanner slot="SLOT_2" format="horizontal" />

      {/* FAQ */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Qu&apos;est-ce que le format HEIC ?</h3>
            <p className="text-gray-600 mb-4">HEIC (High Efficiency Image Container) est le format photo par defaut sur iPhone et iPad depuis iOS 11. Il offre une compression 50% superieure au JPG avec une qualite visuelle identique, ce qui permet de stocker plus de photos sur votre appareil.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pourquoi mes photos iPhone sont-elles en HEIC ?</h3>
            <p className="text-gray-600 mb-4">Apple a choisi le HEIC comme format par defaut pour economiser de l&apos;espace de stockage. Une photo HEIC pese environ 2 Mo contre 4 Mo pour un JPG de meme qualite. Vous pouvez changer ce reglage dans Parametres &gt; Appareil photo &gt; Formats &gt; Le plus compatible.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La conversion est-elle gratuite ?</h3>
            <p className="text-gray-600 mb-4">Oui, entierement gratuite, sans inscription, sans filigrane et sans limite de fichiers. Vous pouvez convertir autant de photos HEIC en JPG que necessaire.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mes photos sont-elles en securite ?</h3>
            <p className="text-gray-600 mb-4">Oui. La conversion s&apos;effectue en memoire sur nos serveurs securises. Aucun fichier n&apos;est stocke apres le telechargement. Toutes les donnees temporaires sont supprimees immediatement.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment convertir HEIC en JPG sur iPhone ?</h3>
            <p className="text-gray-600 mb-4">Ouvrez heictojpg.fr dans Safari sur votre iPhone, selectionnez vos photos HEIC depuis votre pellicule, puis telechargez les fichiers JPG convertis. C&apos;est aussi simple que ca.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je convertir plusieurs fichiers HEIC en meme temps ?</h3>
            <p className="text-gray-600 mb-4">Oui, notre outil supporte la conversion batch. Selectionnez plusieurs fichiers HEIC, convertissez-les en un clic, et telechargez le tout dans un fichier ZIP.</p>
          </div>
        </div>
      </div>

      {/* Guides par appareil */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Guides de conversion HEIC par appareil</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/convertir-heic-en-jpg-sur-iphone" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Convertir HEIC en JPG sur iPhone</h3>
            <p className="text-sm text-gray-600">Changez le format par defaut ou convertissez vos photos directement.</p>
          </Link>
          <Link href="/convertir-heic-en-jpg-sur-mac" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Convertir HEIC en JPG sur Mac</h3>
            <p className="text-sm text-gray-600">Utilisez Apercu, Automator ou notre outil en ligne.</p>
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

      {/* Autres conversions HEIC */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Autres conversions HEIC</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/convertir-heic-en-png" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; PNG</h3>
            <p className="text-sm text-gray-600">Qualite sans perte avec transparence.</p>
          </Link>
          <Link href="/convertir-heic-en-webp" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; WebP</h3>
            <p className="text-sm text-gray-600">Format optimise pour le web.</p>
          </Link>
          <Link href="/convertir-heic-en-pdf" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; PDF</h3>
            <p className="text-sm text-gray-600">Pour l&apos;impression et les documents.</p>
          </Link>
          <Link href="/convertir-heic-en-avif" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; AVIF</h3>
            <p className="text-sm text-gray-600">Le format le plus performant.</p>
          </Link>
          <Link href="/compresser-heic" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Compresser HEIC</h3>
            <p className="text-sm text-gray-600">Reduisez la taille sans changer de format.</p>
          </Link>
          <Link href="/lire-metadonnees-heic" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Metadonnees HEIC</h3>
            <p className="text-sm text-gray-600">Lisez les donnees EXIF de vos photos.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
