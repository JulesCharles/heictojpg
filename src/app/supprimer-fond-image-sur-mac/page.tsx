import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Supprimer le Fond d'une Image sur Mac [2026] | heictojpg.fr",
  description:
    "Apprenez a supprimer le fond d'une image sur Mac. Utilisez Apercu, le detourage macOS Ventura+ ou notre outil en ligne. Guide complet et gratuit.",
  openGraph: {
    type: "website",
    title: "Supprimer le Fond d'une Image sur Mac - Guide complet [2026]",
    description:
      "3 methodes pour supprimer le fond d'une image sur Mac : Apercu, detourage macOS Ventura+ ou en ligne avec heictojpg.fr.",
    url: "https://heictojpg.fr/supprimer-fond-image-sur-mac",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Supprimer le Fond d'une Image sur Mac - Guide complet [2026]",
    description:
      "3 methodes pour supprimer le fond d'une image sur Mac : Apercu, detourage macOS Ventura+ ou en ligne avec heictojpg.fr.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/supprimer-fond-image-sur-mac",
  },
};

export default function SupprimerFondImageMac() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment supprimer le fond d'une image sur Mac",
    description: "3 methodes pour supprimer l'arriere-plan d'une image sur Mac : Apercu, detourage macOS Ventura+ ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Apercu - Outil de selection instantanee Alpha",
        text: "Ouvrez l'image dans Apercu, utilisez l'outil de selection instantanee Alpha pour selectionner l'arriere-plan, puis supprimez-le.",
        url: "https://heictojpg.fr/supprimer-fond-image-sur-mac#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Detourage macOS Ventura+",
        text: "Faites un clic droit sur l'image dans le Finder ou Photos et selectionnez Supprimer l'arriere-plan pour isoler le sujet.",
        url: "https://heictojpg.fr/supprimer-fond-image-sur-mac#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : En ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/supprimer-fond-image, deposez votre image et telechargez le resultat sans arriere-plan.",
        url: "https://heictojpg.fr/supprimer-fond-image-sur-mac#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Supprimer le fond d'une image sur Mac", href: "/supprimer-fond-image-sur-mac" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment supprimer le fond d&apos;une image sur Mac
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Vous souhaitez supprimer l&apos;arriere-plan d&apos;une photo sur
          votre Mac ? macOS propose plusieurs outils integres pour detourer
          un sujet, de l&apos;outil Alpha dans Apercu au detourage
          automatique de macOS Ventura. Decouvrez trois methodes efficaces
          pour obtenir une image sur fond transparent.
        </p>
      </PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Supprimez le fond de vos images instantanement
          </h3>
          <p className="text-gray-600 mb-4">
            Utilisez notre outil gratuit en ligne pour supprimer
            l&apos;arriere-plan de vos photos en quelques secondes,
            directement depuis votre navigateur sur Mac.
          </p>
          <Link
            href="/supprimer-fond-image"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Supprimer le fond de mon image
          </Link>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Methode 1 : Apercu - Outil de selection instantanee Alpha
            </h2>
            <p className="text-gray-600 mb-4">
              L&apos;application Apercu, incluse avec macOS, dispose d&apos;un
              outil de selection Alpha qui permet de selectionner et supprimer
              des zones d&apos;arriere-plan de couleur similaire.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez votre image dans <strong>Apercu</strong> (double-cliquez
                sur le fichier ou faites clic droit &gt; Ouvrir avec &gt;
                Apercu).
              </li>
              <li>
                Cliquez sur l&apos;icone <strong>Barre d&apos;outils
                d&apos;annotation</strong> (crayon), puis selectionnez
                l&apos;outil <strong>&quot;Selection instantanee
                Alpha&quot;</strong> dans le menu de selection.
              </li>
              <li>
                Cliquez et faites glisser sur l&apos;arriere-plan a supprimer.
                L&apos;outil detecte les zones de couleur similaire. Appuyez
                sur <strong>Supprimer</strong> pour effacer la selection.
                Enregistrez au format PNG pour conserver la transparence.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Methode 2 : macOS Ventura+ - Detourage dans Photos/Finder
            </h2>
            <p className="text-gray-600 mb-4">
              Depuis macOS Ventura (13.0), Apple integre une fonction de
              detourage automatique accessible directement depuis Photos, le
              Finder ou Coup d&apos;oeil. Un simple clic droit suffit pour
              isoler le sujet.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez l&apos;image dans <strong>Photos</strong>, dans le{" "}
                <strong>Finder</strong> (via Coup d&apos;oeil avec Espace) ou
                dans <strong>Safari</strong>.
              </li>
              <li>
                Faites un <strong>clic droit</strong> sur le sujet de la photo
                (ou maintenez le clic). Vous verrez une animation lumineuse
                autour du sujet detecte.
              </li>
              <li>
                Selectionnez{" "}
                <strong>&quot;Copier le sujet&quot;</strong> ou{" "}
                <strong>&quot;Partager&quot;</strong> dans le menu contextuel.
                Le sujet est copie sans arriere-plan et peut etre colle dans
                n&apos;importe quelle application.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Methode 3 : En ligne avec heictojpg.fr
            </h2>
            <p className="text-gray-600 mb-4">
              Pour une suppression rapide et precise du fond, utilisez notre
              outil en ligne qui fonctionne directement dans votre navigateur,
              sans logiciel a installer.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez votre navigateur et rendez-vous sur{" "}
                <Link href="/supprimer-fond-image" className="text-blue-600 hover:text-blue-800">
                  heictojpg.fr/supprimer-fond-image
                </Link>
                .
              </li>
              <li>
                Glissez-deposez votre image sur la zone de depot ou cliquez
                pour selectionner un fichier depuis votre Mac.
              </li>
              <li>
                La suppression du fond est automatique. Telechargez votre image
                avec un fond transparent au format PNG.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conclusion
            </h2>
            <p className="text-gray-600 mb-4">
              Sur Mac, l&apos;outil Alpha d&apos;Apercu offre un controle
              precis pour les fonds unis, tandis que le detourage automatique
              de macOS Ventura est ideal pour les photos complexes. Pour une
              solution rapide et universelle, notre outil en ligne{" "}
              <Link href="/supprimer-fond-image" className="text-blue-600 hover:text-blue-800">
                heictojpg.fr/supprimer-fond-image
              </Link>{" "}
              est la solution la plus pratique : gratuit, sans installation et
              accessible depuis n&apos;importe quel navigateur.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/supprimer-fond-image-sur-iphone" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-800">Sur iPhone</h3>
                <p className="text-sm text-gray-600">Supprimer le fond d&apos;une image sur iPhone.</p>
              </Link>
              <Link href="/supprimer-fond-image-sur-windows" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-800">Sur Windows</h3>
                <p className="text-sm text-gray-600">Supprimer le fond d&apos;une image sur PC.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
