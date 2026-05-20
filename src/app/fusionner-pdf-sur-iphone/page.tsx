import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Fusionner des PDF sur iPhone [2026] | heictojpg.fr",
  description:
    "Apprenez a fusionner des fichiers PDF sur iPhone. Utilisez l'app Fichiers, les Raccourcis iOS ou notre outil en ligne heictojpg.fr. Guide complet.",
  openGraph: {
    type: "website",
    title: "Fusionner des PDF sur iPhone - Guide complet [2026]",
    description:
      "Apprenez a fusionner des fichiers PDF sur iPhone via l'app Fichiers, les Raccourcis iOS ou en ligne.",
    url: "https://heictojpg.fr/fusionner-pdf-sur-iphone",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Fusionner des PDF sur iPhone - Guide complet [2026]",
    description:
      "Apprenez a fusionner des fichiers PDF sur iPhone via l'app Fichiers, les Raccourcis iOS ou en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/fusionner-pdf-sur-iphone",
  },
};

export default function FusionnerPdfIphone() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment fusionner des PDF sur iPhone",
    description: "3 methodes pour fusionner des fichiers PDF sur iPhone : app Fichiers, Raccourcis iOS ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Utiliser l'app Fichiers",
        text: "Selectionnez plusieurs PDF dans l'app Fichiers, puis utilisez l'option Creer un PDF pour les fusionner.",
        url: "https://heictojpg.fr/fusionner-pdf-sur-iphone#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Utiliser les Raccourcis iOS",
        text: "Creez ou telechargez un raccourci de fusion PDF dans l'app Raccourcis pour combiner vos fichiers automatiquement.",
        url: "https://heictojpg.fr/fusionner-pdf-sur-iphone#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Fusionner en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/fusionner-pdf dans Safari, selectionnez vos fichiers PDF et telechargez le PDF fusionne.",
        url: "https://heictojpg.fr/fusionner-pdf-sur-iphone#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Fusionner des PDF sur iPhone", href: "/fusionner-pdf-sur-iphone" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment fusionner des PDF sur iPhone
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Vous avez plusieurs fichiers PDF sur votre iPhone et vous souhaitez les
          combiner en un seul document ? Que ce soit pour regrouper des factures,
          des contrats ou des documents administratifs, il existe plusieurs
          methodes simples pour fusionner des PDF directement depuis votre iPhone.
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
          PDF en quelques secondes, directement depuis Safari sur votre iPhone.
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
            Methode 1 : Utiliser l&apos;app Fichiers
          </h2>
          <p className="text-gray-600 mb-4">
            L&apos;application Fichiers integree a iOS permet de selectionner
            plusieurs PDF et de les combiner en un seul document facilement.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez l&apos;application <strong>Fichiers</strong> sur votre iPhone.
            </li>
            <li>
              Naviguez vers le dossier contenant vos fichiers PDF.
            </li>
            <li>
              Appuyez sur le bouton <strong>...</strong> (Plus) en haut a droite, puis choisissez <strong>Selectionner</strong>.
            </li>
            <li>
              Selectionnez les fichiers PDF que vous souhaitez fusionner.
            </li>
            <li>
              Appuyez sur le bouton <strong>...</strong> en bas a droite, puis choisissez <strong>Creer un PDF</strong>. Un nouveau fichier PDF combine sera cree dans le meme dossier.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 2 : Utiliser les Raccourcis iOS
          </h2>
          <p className="text-gray-600 mb-4">
            L&apos;app Raccourcis vous permet de creer un raccourci personnalise
            pour fusionner des PDF automatiquement.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez l&apos;application <strong>Raccourcis</strong> sur votre iPhone.
            </li>
            <li>
              Creez un nouveau raccourci et ajoutez l&apos;action <strong>Selectionner des fichiers</strong> (activez la selection multiple).
            </li>
            <li>
              Ajoutez l&apos;action <strong>Creer un PDF</strong> a partir des fichiers selectionnes.
            </li>
            <li>
              Ajoutez l&apos;action <strong>Enregistrer le fichier</strong> pour sauvegarder le PDF fusionne.
            </li>
            <li>
              Executez le raccourci, selectionnez vos PDF et le document combine sera automatiquement sauvegarde.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 3 : En ligne avec heictojpg.fr
          </h2>
          <p className="text-gray-600 mb-4">
            Pour fusionner rapidement vos PDF sans installer d&apos;application
            supplementaire, utilisez notre outil en ligne directement depuis Safari.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez Safari et rendez-vous sur{" "}
              <Link href="/fusionner-pdf" className="text-blue-600 hover:text-blue-800">
                heictojpg.fr/fusionner-pdf
              </Link>
              .
            </li>
            <li>
              Appuyez sur la zone de depot et selectionnez vos fichiers PDF
              depuis l&apos;app Fichiers.
            </li>
            <li>
              Reorganisez l&apos;ordre des fichiers si necessaire, puis lancez la fusion.
              Telechargez votre PDF combine en quelques secondes.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-600 mb-4">
            L&apos;app Fichiers d&apos;iOS offre une solution native pour fusionner
            des PDF, et les Raccourcis permettent d&apos;automatiser le processus.
            Pour une fusion ponctuelle ou en lot sans complication, notre outil en
            ligne{" "}
            <Link href="/fusionner-pdf" className="text-blue-600 hover:text-blue-800">
              heictojpg.fr/fusionner-pdf
            </Link>{" "}
            est la solution la plus pratique : rapide, gratuit et sans installation.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/fusionner-pdf-sur-mac" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Mac</h3>
              <p className="text-sm text-gray-600">Guide pour fusionner des PDF sur macOS.</p>
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
