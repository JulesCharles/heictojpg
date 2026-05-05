import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir PNG en ICO (favicon) gratuit | heictojpg.fr",
  description: "Creez un favicon ICO multi-tailles a partir d'une image PNG. Contient les tailles 16x16 a 256x256. Gratuit, sans inscription.",
  keywords: ["convertir png en ico","png to ico","png ico gratuit","creer favicon","favicon generator","png vers ico"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-png-en-ico",
    siteName: "heictojpg.fr",
    title: "Convertir PNG en ICO (favicon) gratuitement en ligne",
    description: "Creez un favicon ICO multi-tailles a partir d'une image PNG. Contient les tailles 16x16 a 256x256. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-png-en-ico" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur PNG en ICO",
      url: "https://heictojpg.fr/convertir-png-en-ico",
      description: "Creez un favicon ICO multi-tailles a partir d'une image PNG. Contient les tailles 16x16 a 256x256. Gratuit, sans inscription.",
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
          name: "Quelle taille doit avoir mon PNG source ?",
          acceptedAnswer: { "@type": "Answer", text: "Idealement, utilisez un PNG d'au moins 256x256 pixels. Les plus grandes images seront redimensionnees automatiquement. Un PNG carre (memes largeur et hauteur) donnera le meilleur resultat." },
        },
        {
          "@type": "Question",
          name: "Puis-je utiliser une image rectangulaire ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, mais l'image sera recadree au centre pour former un carre. Pour un meilleur resultat, utilisez une image carree." },
        },
        {
          "@type": "Question",
          name: "Le format ICO est-il toujours necessaire ?",
          acceptedAnswer: { "@type": "Answer", text: "Les navigateurs modernes acceptent aussi les favicons en PNG ou SVG, mais le format ICO reste le seul compatible avec tous les navigateurs y compris les anciens. C'est le choix le plus sur." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Convertir PNG en ICO (favicon) gratuitement</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Creez un fichier favicon ICO professionnel a partir de votre image PNG. Le fichier genere contient 6 tailles differentes (16x16 a 256x256) pour s'afficher parfaitement dans tous les navigateurs, barres de favoris et onglets.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="PNG &rarr; ICO"
          acceptedFormats=".png,image/png"
          acceptLabel="Selectionner un fichier PNG"
          outputFormat="ico"
          apiEndpoint="/api/convert-image"
          outputExtension=".ico"
          acceptedMimeTypes={["image/png"]}
          acceptedExtensions={[".png"]}
          errorMessage="Veuillez selectionner un fichier PNG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comment creer un favicon pour votre site web ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le favicon est la petite icone qui s'affiche dans l'onglet du navigateur, la barre de favoris et les resultats de recherche. C'est un element essentiel de l'identite visuelle de votre site web.</p>
          <p className="text-gray-600 mb-4">Le format ICO (Windows Icon) est le format historique pour les favicons et reste le plus compatible avec tous les navigateurs, y compris les anciens. Un fichier ICO peut contenir plusieurs tailles de la meme image, permettant au navigateur de choisir automatiquement la taille la plus adaptee au contexte d'affichage.</p>
          <p className="text-gray-600 mb-4">Notre outil genere un fichier ICO contenant 6 tailles standard : 16x16 (onglets), 32x32 (barre de favoris), 48x48 (raccourcis Windows), 64x64 (ecrans haute densite), 128x128 (Retina), et 256x256 (apercu Windows/macOS).</p>
          <p className="text-gray-600 mb-4">Pour utiliser votre favicon, placez le fichier .ico a la racine de votre site web et ajoutez la balise suivante dans le head de votre HTML : &lt;link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; type=&quot;image/x-icon&quot;&gt;</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle taille doit avoir mon PNG source ?</h3>
            <p className="text-gray-600 mb-4">Idealement, utilisez un PNG d'au moins 256x256 pixels. Les plus grandes images seront redimensionnees automatiquement. Un PNG carre (memes largeur et hauteur) donnera le meilleur resultat.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je utiliser une image rectangulaire ?</h3>
            <p className="text-gray-600 mb-4">Oui, mais l'image sera recadree au centre pour former un carre. Pour un meilleur resultat, utilisez une image carree.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le format ICO est-il toujours necessaire ?</h3>
            <p className="text-gray-600 mb-4">Les navigateurs modernes acceptent aussi les favicons en PNG ou SVG, mais le format ICO reste le seul compatible avec tous les navigateurs y compris les anciens. C'est le choix le plus sur.</p>
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
          <Link href="/redimensionner-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Redimensionner</h3>
            <p className="text-sm text-gray-600">Changez la taille de vos images.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
