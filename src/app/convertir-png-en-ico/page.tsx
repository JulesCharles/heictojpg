import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir PNG en ICO (favicon) gratuit | heictojpg.fr",
  description: "Créez un favicon ICO multi-tailles à partir d'une image PNG. Contient les tailles 16x16 à 256x256. Gratuit, sans inscription.",
  keywords: ["convertir png en ico","png to ico","png ico gratuit","créer favicon","favicon generator","png vers ico"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-png-en-ico",
    siteName: "heictojpg.fr",
    title: "Convertir PNG en ICO (favicon) gratuitement en ligne",
    description: "Créez un favicon ICO multi-tailles à partir d'une image PNG. Contient les tailles 16x16 à 256x256. Gratuit, sans inscription.",
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
      description: "Créez un favicon ICO multi-tailles à partir d'une image PNG. Contient les tailles 16x16 à 256x256. Gratuit, sans inscription.",
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
          acceptedAnswer: { "@type": "Answer", text: "Idéalement, utilisez un PNG d'au moins 256x256 pixels. Les plus grandes images seront redimensionnées automatiquement. Un PNG carré (mêmes largeur et hauteur) donnera le meilleur résultat." },
        },
        {
          "@type": "Question",
          name: "Puis-je utiliser une image rectangulaire ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, mais l'image sera recadrée au centre pour former un carré. Pour un meilleur résultat, utilisez une image carrée." },
        },
        {
          "@type": "Question",
          name: "Le format ICO est-il toujours nécessaire ?",
          acceptedAnswer: { "@type": "Answer", text: "Les navigateurs modernes acceptent aussi les favicons en PNG ou SVG, mais le format ICO reste le seul compatible avec tous les navigateurs y compris les anciens. C'est le choix le plus sûr." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir PNG en ICO (favicon) gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Créez un fichier favicon ICO professionnel à partir de votre image PNG. Le fichier généré contient 6 tailles différentes (16x16 à 256x256) pour s'afficher parfaitement dans tous les navigateurs, barres de favoris et onglets.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="PNG &rarr; ICO"
          acceptedFormats=".png,image/png"
          acceptLabel="Sélectionner un fichier PNG"
          outputFormat="ico"
          apiEndpoint="/api/convert-image"
          outputExtension=".ico"
          acceptedMimeTypes={["image/png"]}
          acceptedExtensions={[".png"]}
          errorMessage="Veuillez sélectionner un fichier PNG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comment créer un favicon pour votre site web ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le favicon est la petite icône qui s'affiche dans l'onglet du navigateur, la barre de favoris et les résultats de recherche. C'est un élément essentiel de l'identité visuelle de votre site web.</p>
          <p className="text-gray-600 mb-4">Le format ICO (Windows Icon) est le format historique pour les favicons et reste le plus compatible avec tous les navigateurs, y compris les anciens. Un fichier ICO peut contenir plusieurs tailles de la même image, permettant au navigateur de choisir automatiquement la taille la plus adaptée au contexte d'affichage.</p>
          <p className="text-gray-600 mb-4">Notre outil génère un fichier ICO contenant 6 tailles standard : 16x16 (onglets), 32x32 (barre de favoris), 48x48 (raccourcis Windows), 64x64 (écrans haute densité), 128x128 (Retina), et 256x256 (aperçu Windows/macOS).</p>
          <p className="text-gray-600 mb-4">Pour utiliser votre favicon, placez le fichier .ico à la racine de votre site web et ajoutez la balise suivante dans le head de votre HTML : &lt;link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; type=&quot;image/x-icon&quot;&gt;</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle taille doit avoir mon PNG source ?</h3>
            <p className="text-gray-600 mb-4">Idéalement, utilisez un PNG d'au moins 256x256 pixels. Les plus grandes images seront redimensionnées automatiquement. Un PNG carré (mêmes largeur et hauteur) donnera le meilleur résultat.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je utiliser une image rectangulaire ?</h3>
            <p className="text-gray-600 mb-4">Oui, mais l'image sera recadrée au centre pour former un carré. Pour un meilleur résultat, utilisez une image carrée.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le format ICO est-il toujours nécessaire ?</h3>
            <p className="text-gray-600 mb-4">Les navigateurs modernes acceptent aussi les favicons en PNG ou SVG, mais le format ICO reste le seul compatible avec tous les navigateurs y compris les anciens. C'est le choix le plus sûr.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-png-en-ico" />
    </div>
    </>
  );
}
