import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Generateur de Favicon Multi-Tailles Gratuit en Ligne | heictojpg.fr",
  description: "Generez tous les formats de favicon (16x16, 32x32, 180x180 Apple Touch, 192x192 Android, 512x512) a partir d'une seule image. Telechargez un ZIP avec le code HTML. Gratuit, sans inscription.",
  keywords: ["generateur favicon", "favicon generator", "favicon en ligne", "favicon toutes tailles", "apple touch icon", "favicon gratuit", "creer favicon"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/generateur-favicon",
    siteName: "heictojpg.fr",
    title: "Generateur de Favicon Multi-Tailles Gratuit",
    description: "Generez tous les formats de favicon a partir d'une seule image. Telechargez un ZIP avec le code HTML pret a l'emploi.",
  },
  alternates: { canonical: "https://heictojpg.fr/generateur-favicon" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Generateur de Favicon Multi-Tailles",
      url: "https://heictojpg.fr/generateur-favicon",
      description: "Generez tous les formats de favicon a partir d'une seule image. ZIP + code HTML inclus.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Quelles tailles de favicon faut-il generer ?", acceptedAnswer: { "@type": "Answer", text: "Les tailles essentielles sont 16x16 et 32x32 pour les navigateurs, 180x180 pour Apple Touch Icon (iOS), et 192x192 / 512x512 pour Android et les Progressive Web Apps. Notre outil genere toutes ces tailles automatiquement." } },
        { "@type": "Question", name: "Faut-il utiliser ICO ou PNG pour les favicons ?", acceptedAnswer: { "@type": "Answer", text: "Le format ICO est l'ancien standard qui peut contenir plusieurs tailles dans un seul fichier. Aujourd'hui, le format PNG est prefere car il est supporte par tous les navigateurs modernes et offre une meilleure qualite. Utilisez PNG avec les balises <link> appropriees." } },
        { "@type": "Question", name: "Comment installer les favicons sur mon site ?", acceptedAnswer: { "@type": "Answer", text: "Placez les fichiers PNG generes a la racine de votre site web, puis copiez le code HTML fourni dans la balise <head> de votre page. Notre outil genere automatiquement le code HTML pret a l'emploi." } },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Generateur de Favicon", href: "/generateur-favicon" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Generateur de Favicon Multi-Tailles</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Uploadez une image et generez instantanement tous les formats de favicon necessaires pour votre site web : navigateurs, iOS, Android et PWA. Telechargez un ZIP avec le code HTML pret a copier.</p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Qu&apos;est-ce qu&apos;un favicon et pourquoi est-il important ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Un favicon (contraction de &quot;favorite icon&quot;) est la petite icone qui s&apos;affiche dans l&apos;onglet du navigateur, dans les favoris, et sur l&apos;ecran d&apos;accueil des smartphones. C&apos;est un element essentiel de l&apos;identite visuelle de votre site web.</p>
          <p className="text-gray-600 mb-4">Il existe de nombreuses tailles requises selon les plateformes : 16x16 et 32x32 pixels pour les onglets de navigateur, 48x48 et 64x64 pour les raccourcis Windows, 128x128 pour le Chrome Web Store, 180x180 pour l&apos;Apple Touch Icon (quand un utilisateur iOS ajoute votre site a son ecran d&apos;accueil), et 192x192 / 512x512 pour les Progressive Web Apps sous Android.</p>
          <p className="text-gray-600 mb-4">Un bon favicon renforce votre image de marque. Il permet aux utilisateurs de vous identifier rapidement parmi de nombreux onglets ouverts. Sans favicon, votre site affiche une icone generique qui nuit a la credibilite et a la reconnaissance de votre marque.</p>
          <p className="text-gray-600 mb-4">Notre outil genere automatiquement toutes les tailles necessaires a partir d&apos;une seule image source. Pour un meilleur resultat, utilisez une image carree d&apos;au moins 512x512 pixels, avec un design simple et lisible meme en tres petite taille.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Toutes les tailles de favicon generees</h2>
        <div className="prose prose-gray max-w-none">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2 pr-4 text-gray-700">Taille</th>
                  <th className="py-2 pr-4 text-gray-700">Utilisation</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b"><td className="py-2 pr-4 font-mono">16x16</td><td>Onglet navigateur (standard)</td></tr>
                <tr className="border-b"><td className="py-2 pr-4 font-mono">32x32</td><td>Onglet navigateur (ecrans Retina), raccourcis</td></tr>
                <tr className="border-b"><td className="py-2 pr-4 font-mono">48x48</td><td>Raccourcis Windows, barre des taches</td></tr>
                <tr className="border-b"><td className="py-2 pr-4 font-mono">64x64</td><td>Raccourcis Windows haute resolution</td></tr>
                <tr className="border-b"><td className="py-2 pr-4 font-mono">128x128</td><td>Chrome Web Store</td></tr>
                <tr className="border-b"><td className="py-2 pr-4 font-mono">180x180</td><td>Apple Touch Icon (iOS)</td></tr>
                <tr className="border-b"><td className="py-2 pr-4 font-mono">192x192</td><td>Android Chrome, PWA</td></tr>
                <tr><td className="py-2 pr-4 font-mono">512x512</td><td>Android splash screen, PWA</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelles tailles de favicon faut-il generer ?</h3>
            <p className="text-gray-600 mb-4">Les tailles essentielles sont 16x16 et 32x32 pour les navigateurs, 180x180 pour Apple Touch Icon (iOS), et 192x192 / 512x512 pour Android et les Progressive Web Apps. Notre outil genere toutes ces tailles automatiquement.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Faut-il utiliser ICO ou PNG pour les favicons ?</h3>
            <p className="text-gray-600 mb-4">Le format ICO est l&apos;ancien standard qui peut contenir plusieurs tailles dans un seul fichier. Aujourd&apos;hui, le format PNG est prefere car il est supporte par tous les navigateurs modernes et offre une meilleure qualite. Utilisez PNG avec les balises &lt;link&gt; appropriees.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment installer les favicons sur mon site ?</h3>
            <p className="text-gray-600 mb-4">Placez les fichiers PNG generes a la racine de votre site web, puis copiez le code HTML fourni dans la balise &lt;head&gt; de votre page. Notre outil genere automatiquement le code HTML pret a l&apos;emploi.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle image source utiliser ?</h3>
            <p className="text-gray-600 mb-4">Utilisez une image carree d&apos;au moins 512x512 pixels. Privilegiez un design simple avec des formes et couleurs facilement reconnaissables, meme en 16x16 pixels. Les logos complexes avec beaucoup de details ne rendent pas bien en favicon.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/generateur-favicon" />
    </div>
    </>
  );
}
