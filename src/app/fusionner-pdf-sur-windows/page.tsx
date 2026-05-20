import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Fusionner des PDF sur Windows [2026] | heictojpg.fr",
  description:
    "Apprenez a fusionner des fichiers PDF sur Windows. Utilisez Microsoft Edge, PowerShell avec PDFtk ou notre outil en ligne heictojpg.fr. Guide complet.",
  openGraph: {
    type: "website",
    title: "Fusionner des PDF sur Windows - Guide complet [2026]",
    description:
      "Apprenez a fusionner des fichiers PDF sur Windows via Microsoft Edge, PowerShell ou en ligne.",
    url: "https://heictojpg.fr/fusionner-pdf-sur-windows",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Fusionner des PDF sur Windows - Guide complet [2026]",
    description:
      "Apprenez a fusionner des fichiers PDF sur Windows via Microsoft Edge, PowerShell ou en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/fusionner-pdf-sur-windows",
  },
};

export default function FusionnerPdfWindows() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment fusionner des PDF sur Windows",
    description: "3 methodes pour fusionner des fichiers PDF sur Windows : Microsoft Edge, PowerShell avec PDFtk ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Utiliser Microsoft Edge",
        text: "Ouvrez vos PDF dans Edge, utilisez la fonction Imprimer en PDF pour combiner plusieurs documents.",
        url: "https://heictojpg.fr/fusionner-pdf-sur-windows#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Utiliser PowerShell avec PDFtk",
        text: "Installez PDFtk et utilisez une commande PowerShell pour fusionner vos fichiers PDF.",
        url: "https://heictojpg.fr/fusionner-pdf-sur-windows#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Fusionner en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/fusionner-pdf, selectionnez vos fichiers PDF et telechargez le PDF fusionne.",
        url: "https://heictojpg.fr/fusionner-pdf-sur-windows#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Fusionner des PDF sur Windows", href: "/fusionner-pdf-sur-windows" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment fusionner des PDF sur Windows
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Windows ne dispose pas d&apos;outil natif dedie a la fusion de PDF,
          mais plusieurs methodes gratuites existent. Decouvrez comment combiner
          vos fichiers PDF sur PC en utilisant Microsoft Edge, PowerShell avec
          PDFtk ou notre outil en ligne.
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
            Methode 1 : Utiliser Microsoft Edge
          </h2>
          <p className="text-gray-600 mb-4">
            Microsoft Edge integre un lecteur PDF avec une fonction d&apos;impression
            qui permet de combiner plusieurs PDF en un seul document.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez votre premier fichier PDF dans <strong>Microsoft Edge</strong>.
            </li>
            <li>
              Appuyez sur <strong>Ctrl + P</strong> pour ouvrir la boite de dialogue d&apos;impression.
            </li>
            <li>
              Selectionnez <strong>Microsoft Print to PDF</strong> comme imprimante.
            </li>
            <li>
              Pour combiner plusieurs PDF, vous pouvez selectionner plusieurs fichiers dans l&apos;Explorateur de fichiers, faire un clic droit et choisir <strong>Imprimer</strong>.
            </li>
            <li>
              Choisissez <strong>Microsoft Print to PDF</strong>, donnez un nom au fichier et cliquez sur <strong>Imprimer</strong>. Les fichiers seront combines en un seul PDF.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 2 : Utiliser PowerShell avec PDFtk
          </h2>
          <p className="text-gray-600 mb-4">
            PDFtk (PDF Toolkit) est un outil en ligne de commande gratuit qui
            permet de fusionner des PDF facilement via PowerShell.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Telechargez et installez <strong>PDFtk Server</strong> depuis le site officiel.
            </li>
            <li>
              Ouvrez <strong>PowerShell</strong> (clic droit sur Demarrer &gt; Windows PowerShell).
            </li>
            <li>
              Naviguez vers le dossier contenant vos fichiers PDF avec la commande <strong>cd</strong>.
            </li>
            <li>
              Executez la commande : <strong>pdftk fichier1.pdf fichier2.pdf cat output resultat.pdf</strong>
            </li>
            <li>
              Le fichier <strong>resultat.pdf</strong> contiendra tous vos PDF fusionnes dans l&apos;ordre specifie.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 3 : En ligne avec heictojpg.fr
          </h2>
          <p className="text-gray-600 mb-4">
            Pour fusionner vos PDF sans installer de logiciel supplementaire,
            utilisez notre outil en ligne directement depuis votre navigateur.
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
            Microsoft Edge offre une solution rapide pour combiner des PDF, et
            PDFtk est ideal pour les utilisateurs a l&apos;aise avec la ligne de
            commande. Pour une fusion simple et rapide sans installation, notre
            outil en ligne{" "}
            <Link href="/fusionner-pdf" className="text-blue-600 hover:text-blue-800">
              heictojpg.fr/fusionner-pdf
            </Link>{" "}
            est la solution la plus pratique : rapide, gratuit et accessible depuis
            n&apos;importe quel navigateur.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/fusionner-pdf-sur-iphone" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur iPhone</h3>
              <p className="text-sm text-gray-600">Guide pour fusionner des PDF sur iPhone.</p>
            </Link>
            <Link href="/fusionner-pdf-sur-mac" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Mac</h3>
              <p className="text-sm text-gray-600">Guide pour fusionner des PDF sur macOS.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
