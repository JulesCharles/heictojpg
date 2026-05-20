import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Fusionner des PDF sur Mac [2026] | heictojpg.fr",
  description:
    "Apprenez a fusionner des fichiers PDF sur Mac. Utilisez Apercu, Automator ou notre outil en ligne heictojpg.fr. Guide complet.",
  openGraph: {
    type: "website",
    title: "Fusionner des PDF sur Mac - Guide complet [2026]",
    description:
      "Apprenez a fusionner des fichiers PDF sur Mac via Apercu, Automator ou en ligne.",
    url: "https://heictojpg.fr/fusionner-pdf-sur-mac",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Fusionner des PDF sur Mac - Guide complet [2026]",
    description:
      "Apprenez a fusionner des fichiers PDF sur Mac via Apercu, Automator ou en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/fusionner-pdf-sur-mac",
  },
};

export default function FusionnerPdfMac() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment fusionner des PDF sur Mac",
    description: "3 methodes pour fusionner des fichiers PDF sur Mac : Apercu, Automator ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Utiliser Apercu",
        text: "Ouvrez un PDF dans Apercu, affichez les vignettes, puis glissez les pages d'un autre PDF dans la barre laterale.",
        url: "https://heictojpg.fr/fusionner-pdf-sur-mac#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Utiliser Automator",
        text: "Creez un flux Automator avec l'action Combiner des pages PDF pour fusionner automatiquement vos fichiers.",
        url: "https://heictojpg.fr/fusionner-pdf-sur-mac#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Fusionner en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/fusionner-pdf, selectionnez vos fichiers PDF et telechargez le PDF fusionne.",
        url: "https://heictojpg.fr/fusionner-pdf-sur-mac#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Fusionner des PDF sur Mac", href: "/fusionner-pdf-sur-mac" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment fusionner des PDF sur Mac
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          macOS integre des outils puissants pour manipuler les fichiers PDF.
          Que vous souhaitiez combiner deux documents ou regrouper plusieurs
          fichiers en un seul PDF, decouvrez les meilleures methodes pour
          fusionner des PDF directement sur votre Mac sans logiciel tiers.
        </p>
      </PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Fusionnez vos PDF instantanement
        </h3>
        <p className="text-gray-600 mb-4">
          Utilisez notre outil gratuit en ligne pour fusionner vos fichiers
          PDF en quelques secondes, sans installation.
        </p>
        <Link
          href="/fusionner-pdf"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Fusionner mes PDF en ligne
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 1 : Utiliser Apercu (Preview)
          </h2>
          <p className="text-gray-600 mb-4">
            Apercu, l&apos;application native de macOS, permet de fusionner des PDF
            en glissant les vignettes de pages d&apos;un document vers un autre.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez le premier fichier PDF dans <strong>Apercu</strong>.
            </li>
            <li>
              Allez dans <strong>Presentation &gt; Vignettes</strong> pour afficher la barre laterale avec les vignettes de pages.
            </li>
            <li>
              Ouvrez le second PDF dans une autre fenetre d&apos;Apercu et affichez egalement les vignettes.
            </li>
            <li>
              Selectionnez les vignettes du second PDF et <strong>glissez-les</strong> dans la barre laterale du premier document, a l&apos;emplacement souhaite.
            </li>
            <li>
              Enregistrez le document avec <strong>Fichier &gt; Exporter en PDF</strong> pour obtenir votre PDF fusionne.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 2 : Utiliser Automator
          </h2>
          <p className="text-gray-600 mb-4">
            Automator permet de creer un flux de travail automatise pour combiner
            plusieurs PDF en un seul document.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez <strong>Automator</strong> et creez un nouveau <strong>Flux de travail</strong>.
            </li>
            <li>
              Dans la bibliotheque d&apos;actions, recherchez et ajoutez <strong>Combiner des pages PDF</strong>.
            </li>
            <li>
              Ajoutez egalement l&apos;action <strong>Deplacer les elements du Finder</strong> pour definir le dossier de destination.
            </li>
            <li>
              Glissez vos fichiers PDF dans la zone d&apos;entree du flux de travail.
            </li>
            <li>
              Cliquez sur <strong>Executer</strong>. Le PDF fusionne sera sauvegarde dans le dossier choisi.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 3 : En ligne avec heictojpg.fr
          </h2>
          <p className="text-gray-600 mb-4">
            Pour une fusion rapide sans manipuler Apercu ou Automator, utilisez
            notre outil en ligne directement depuis votre navigateur.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez votre navigateur et rendez-vous sur{" "}
              <Link href="/fusionner-pdf" className="text-blue-600 hover:text-blue-800">
                heictojpg.fr/fusionner-pdf
              </Link>
              .
            </li>
            <li>
              Glissez-deposez vos fichiers PDF dans la zone de depot ou cliquez
              pour les selectionner.
            </li>
            <li>
              Reorganisez l&apos;ordre si necessaire, puis lancez la fusion.
              Telechargez votre PDF combine en quelques secondes.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-600 mb-4">
            Apercu reste la methode la plus intuitive pour fusionner des PDF sur Mac,
            tandis qu&apos;Automator est ideal pour les fusions repetitives. Pour une
            solution rapide et sans prise de tete, notre outil en ligne{" "}
            <Link href="/fusionner-pdf" className="text-blue-600 hover:text-blue-800">
              heictojpg.fr/fusionner-pdf
            </Link>{" "}
            est la solution la plus pratique : rapide, gratuit et sans installation.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/fusionner-pdf-sur-iphone" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur iPhone</h3>
              <p className="text-sm text-gray-600">Guide pour fusionner des PDF sur iPhone.</p>
            </Link>
            <Link href="/fusionner-pdf-sur-windows" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Windows</h3>
              <p className="text-sm text-gray-600">Guide pour fusionner des PDF sur PC.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
