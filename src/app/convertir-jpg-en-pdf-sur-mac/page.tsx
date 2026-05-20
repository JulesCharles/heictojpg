import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir JPG en PDF sur Mac [2026] | heictojpg.fr",
  description:
    "Apprenez a convertir des images JPG en PDF sur Mac. Utilisez Apercu, Automator ou notre outil en ligne heictojpg.fr. Guide complet.",
  openGraph: {
    type: "website",
    title: "Convertir JPG en PDF sur Mac - Guide complet [2026]",
    description:
      "Apprenez a convertir des images JPG en PDF sur Mac via Apercu, Automator ou en ligne.",
    url: "https://heictojpg.fr/convertir-jpg-en-pdf-sur-mac",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Convertir JPG en PDF sur Mac - Guide complet [2026]",
    description:
      "Apprenez a convertir des images JPG en PDF sur Mac via Apercu, Automator ou en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-jpg-en-pdf-sur-mac",
  },
};

export default function ConvertirJpgPdfMac() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment convertir JPG en PDF sur Mac",
    description: "3 methodes pour convertir des images JPG en PDF sur Mac : Apercu, Automator ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Utiliser Apercu",
        text: "Ouvrez l'image dans Apercu et utilisez Fichier > Exporter en PDF pour creer un document PDF.",
        url: "https://heictojpg.fr/convertir-jpg-en-pdf-sur-mac#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Utiliser Automator",
        text: "Creez un flux Automator pour combiner plusieurs images en un seul document PDF automatiquement.",
        url: "https://heictojpg.fr/convertir-jpg-en-pdf-sur-mac#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Convertir en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/convertir-jpg-en-pdf, selectionnez vos images et telechargez le PDF.",
        url: "https://heictojpg.fr/convertir-jpg-en-pdf-sur-mac#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir JPG en PDF sur Mac", href: "/convertir-jpg-en-pdf-sur-mac" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment convertir JPG en PDF sur Mac
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          macOS offre plusieurs outils natifs pour convertir vos images JPG en
          documents PDF. Que vous souhaitiez convertir une seule image ou
          combiner plusieurs photos en un seul PDF, decouvrez les methodes les
          plus simples avec Apercu, Automator ou notre outil en ligne.
        </p>
      </PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Convertissez vos JPG en PDF instantanement
        </h3>
        <p className="text-gray-600 mb-4">
          Utilisez notre outil gratuit en ligne pour convertir vos images
          JPG en PDF en quelques secondes, sans installation.
        </p>
        <Link
          href="/convertir-jpg-en-pdf"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Convertir mes JPG en PDF en ligne
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 1 : Utiliser Apercu - Exporter en PDF
          </h2>
          <p className="text-gray-600 mb-4">
            Apercu permet d&apos;exporter directement une image au format PDF
            en quelques clics.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez votre image JPG dans <strong>Apercu</strong> (double-cliquez sur le fichier).
            </li>
            <li>
              Allez dans <strong>Fichier &gt; Exporter en PDF</strong>.
            </li>
            <li>
              Choisissez un nom et un emplacement pour le fichier PDF.
            </li>
            <li>
              Cliquez sur <strong>Enregistrer</strong>. Votre image est maintenant un document PDF.
            </li>
            <li>
              Pour combiner plusieurs images, ouvrez-les toutes dans Apercu, selectionnez-les dans la barre laterale et exportez en PDF.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 2 : Utiliser Automator
          </h2>
          <p className="text-gray-600 mb-4">
            Automator est ideal pour combiner automatiquement plusieurs images
            en un seul document PDF.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez <strong>Automator</strong> et creez un nouveau <strong>Flux de travail</strong>.
            </li>
            <li>
              Dans la bibliotheque d&apos;actions, ajoutez <strong>Demander des elements du Finder</strong> (activez la selection multiple).
            </li>
            <li>
              Ajoutez l&apos;action <strong>Nouveau document PDF a partir d&apos;images</strong>.
            </li>
            <li>
              Ajoutez l&apos;action <strong>Deplacer les elements du Finder</strong> pour definir le dossier de destination.
            </li>
            <li>
              Cliquez sur <strong>Executer</strong>, selectionnez vos images JPG et le PDF sera automatiquement cree.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 3 : En ligne avec heictojpg.fr
          </h2>
          <p className="text-gray-600 mb-4">
            Pour une conversion rapide sans ouvrir Apercu ou Automator, utilisez
            notre outil en ligne directement depuis votre navigateur.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez votre navigateur et rendez-vous sur{" "}
              <Link href="/convertir-jpg-en-pdf" className="text-blue-600 hover:text-blue-800">
                heictojpg.fr/convertir-jpg-en-pdf
              </Link>
              .
            </li>
            <li>
              Glissez-deposez vos images JPG dans la zone de depot ou cliquez
              pour les selectionner.
            </li>
            <li>
              La conversion est instantanee. Telechargez votre PDF en quelques
              secondes.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-600 mb-4">
            Apercu est la methode la plus rapide pour convertir une image en PDF
            sur Mac, et Automator est parfait pour combiner plusieurs images.
            Pour une conversion simple et rapide, notre outil en ligne{" "}
            <Link href="/convertir-jpg-en-pdf" className="text-blue-600 hover:text-blue-800">
              heictojpg.fr/convertir-jpg-en-pdf
            </Link>{" "}
            est la solution la plus pratique : rapide, gratuit et sans installation.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/convertir-jpg-en-pdf-sur-iphone" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur iPhone</h3>
              <p className="text-sm text-gray-600">Guide pour convertir JPG en PDF sur iPhone.</p>
            </Link>
            <Link href="/convertir-jpg-en-pdf-sur-windows" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Windows</h3>
              <p className="text-sm text-gray-600">Guide pour convertir JPG en PDF sur PC.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
