import type { Metadata } from "next";
import Link from "next/link";
import HeicConvertForm from "@/components/HeicConvertForm";

export const metadata: Metadata = {
  title: "Convertir HEIC en ICO (favicon) gratuit | heictojpg.fr",
  description: "Convertissez vos photos HEIC en favicon ICO multi-tailles (16x16 a 256x256). Ideal pour creer un favicon a partir d'une photo iPhone. Gratuit, sans inscription.",
  keywords: ["convertir heic en ico", "heic to ico", "heic favicon", "photo iphone favicon", "heic ico gratuit", "creer favicon heic"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-heic-en-ico",
    siteName: "heictojpg.fr",
    title: "Convertir HEIC en ICO (favicon) gratuitement",
    description: "Creez un favicon ICO a partir d'une photo HEIC. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-heic-en-ico" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication",
  name: "Convertisseur HEIC en ICO", url: "https://heictojpg.fr/convertir-heic-en-ico",
  description: "Convertissez vos photos HEIC en favicon ICO multi-tailles.",
  applicationCategory: "MultimediaApplication", operatingSystem: "Tout navigateur web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, inLanguage: "fr",
};

export default function ConvertirHeicEnIco() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir HEIC en ICO (favicon)</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez une photo iPhone HEIC en fichier ICO multi-tailles, pret a etre utilise
          comme favicon pour votre site web. Le fichier genere contient les tailles
          16x16, 32x32, 48x48, 64x64, 128x128 et 256x256 pixels.
        </p>
      </div>
      <div className="mb-16">
        <HeicConvertForm title="Convertir HEIC en ICO" outputFormat="ico" outputExtension=".ico" apiEndpoint="/api/heic-to-ico" />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Qu&apos;est-ce qu&apos;un fichier ICO ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format ICO est le format standard pour les favicons (les petites icones qui s&apos;affichent
            dans l&apos;onglet du navigateur). Un fichier ICO peut contenir plusieurs tailles de la meme
            image, permettant au navigateur de choisir la taille la plus adaptee.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Tailles incluses dans le fichier</h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>16x16 :</strong> onglets du navigateur</li>
            <li>&bull; <strong>32x32 :</strong> barre de favoris</li>
            <li>&bull; <strong>48x48 :</strong> raccourcis Windows</li>
            <li>&bull; <strong>64x64 :</strong> affichage haute densite</li>
            <li>&bull; <strong>128x128 :</strong> ecrans Retina</li>
            <li>&bull; <strong>256x256 :</strong> apercu Windows/macOS</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Comment utiliser le favicon</h3>
          <p className="text-gray-600 mb-4">
            Placez le fichier .ico a la racine de votre site web et ajoutez cette ligne
            dans le &lt;head&gt; de votre HTML :
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm text-gray-800 overflow-x-auto">
            &lt;link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; type=&quot;image/x-icon&quot;&gt;
          </pre>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Autres outils HEIC</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; JPG</h3>
            <p className="text-sm text-gray-600">Le format universel pour vos photos.</p>
          </Link>
          <Link href="/convertir-heic-en-png" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; PNG</h3>
            <p className="text-sm text-gray-600">Qualite sans perte avec transparence.</p>
          </Link>
          <Link href="/convertir-heic-en-pdf" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC &rarr; PDF</h3>
            <p className="text-sm text-gray-600">Pour l&apos;impression et les documents.</p>
          </Link>
          <Link href="/compresser-heic" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Compresser HEIC</h3>
            <p className="text-sm text-gray-600">Reduisez la taille de vos fichiers HEIC.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
