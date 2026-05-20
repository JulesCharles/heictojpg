import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Compresser un PDF sur Windows [2026] | heictojpg.fr",
  description:
    "Apprenez a compresser un fichier PDF sur Windows. Utilisez Microsoft Print to PDF, PowerShell avec Ghostscript ou notre outil en ligne heictojpg.fr. Guide complet.",
  openGraph: {
    type: "website",
    title: "Compresser un PDF sur Windows - Guide complet [2026]",
    description:
      "Apprenez a compresser un fichier PDF sur Windows via Microsoft Print to PDF, Ghostscript ou en ligne.",
    url: "https://heictojpg.fr/compresser-pdf-sur-windows",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Compresser un PDF sur Windows - Guide complet [2026]",
    description:
      "Apprenez a compresser un fichier PDF sur Windows via Microsoft Print to PDF, Ghostscript ou en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/compresser-pdf-sur-windows",
  },
};

export default function CompresserPdfWindows() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment compresser un PDF sur Windows",
    description: "3 methodes pour compresser un fichier PDF sur Windows : Microsoft Print to PDF, Ghostscript ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Imprimer en PDF avec Microsoft Print to PDF",
        text: "Ouvrez le PDF et imprimez-le avec Microsoft Print to PDF pour obtenir une version de qualite reduite et plus legere.",
        url: "https://heictojpg.fr/compresser-pdf-sur-windows#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Utiliser PowerShell avec Ghostscript",
        text: "Installez Ghostscript et utilisez une commande PowerShell pour compresser votre PDF avec un niveau de qualite personnalise.",
        url: "https://heictojpg.fr/compresser-pdf-sur-windows#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Compresser en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/compresser-pdf, selectionnez votre PDF et telechargez la version compressee.",
        url: "https://heictojpg.fr/compresser-pdf-sur-windows#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Compresser un PDF sur Windows", href: "/compresser-pdf-sur-windows" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment compresser un PDF sur Windows
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Vos fichiers PDF sont trop lourds pour etre envoyes ou partages ?
          Windows ne dispose pas d&apos;outil natif de compression PDF, mais
          plusieurs methodes gratuites existent. Decouvrez comment reduire la
          taille de vos PDF sur PC avec Microsoft Print to PDF, Ghostscript ou
          notre outil en ligne.
        </p>
      </PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Compressez vos PDF instantanement
        </h3>
        <p className="text-gray-600 mb-4">
          Utilisez notre outil gratuit en ligne pour compresser vos fichiers
          PDF en quelques secondes, sans installation.
        </p>
        <Link
          href="/compresser-pdf"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Compresser mon PDF en ligne
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 1 : Imprimer en PDF avec Microsoft Print to PDF
          </h2>
          <p className="text-gray-600 mb-4">
            En re-imprimant un PDF via Microsoft Print to PDF, Windows peut
            generer une version plus legere du document avec une qualite reduite.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez votre fichier PDF dans <strong>Microsoft Edge</strong> ou tout autre lecteur PDF.
            </li>
            <li>
              Appuyez sur <strong>Ctrl + P</strong> pour ouvrir la boite de dialogue d&apos;impression.
            </li>
            <li>
              Selectionnez <strong>Microsoft Print to PDF</strong> comme imprimante.
            </li>
            <li>
              Cliquez sur <strong>Imprimer</strong> et choisissez un emplacement pour sauvegarder le nouveau fichier.
            </li>
            <li>
              Le nouveau PDF sera generalement plus leger, car les images sont recompressees lors de l&apos;impression virtuelle.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 2 : Utiliser PowerShell avec Ghostscript
          </h2>
          <p className="text-gray-600 mb-4">
            Ghostscript est un outil gratuit et puissant qui offre un controle
            precis sur la compression des fichiers PDF.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Telechargez et installez <strong>Ghostscript</strong> depuis le site officiel.
            </li>
            <li>
              Ouvrez <strong>PowerShell</strong> (clic droit sur Demarrer &gt; Windows PowerShell).
            </li>
            <li>
              Executez la commande suivante :<br />
              <strong>gswin64c -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dBATCH -sOutputFile=compresse.pdf original.pdf</strong>
            </li>
            <li>
              Le parametre <strong>-dPDFSETTINGS</strong> controle le niveau de compression : <strong>/screen</strong> (faible qualite, tres petit), <strong>/ebook</strong> (qualite moyenne), <strong>/printer</strong> (haute qualite).
            </li>
            <li>
              Le fichier <strong>compresse.pdf</strong> sera cree dans le dossier courant avec la taille reduite.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 3 : En ligne avec heictojpg.fr
          </h2>
          <p className="text-gray-600 mb-4">
            Pour compresser un PDF sans installer de logiciel supplementaire,
            utilisez notre outil en ligne directement depuis votre navigateur.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez votre navigateur et rendez-vous sur{" "}
              <Link href="/compresser-pdf" className="text-blue-600 hover:text-blue-800">
                heictojpg.fr/compresser-pdf
              </Link>
              .
            </li>
            <li>
              Glissez-deposez votre fichier PDF dans la zone de depot ou cliquez
              pour le selectionner.
            </li>
            <li>
              La compression est automatique. Telechargez votre PDF compresse
              en quelques secondes.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-600 mb-4">
            Microsoft Print to PDF offre une solution rapide pour reduire la taille
            d&apos;un PDF, et Ghostscript permet un controle precis sur la compression.
            Pour une solution simple et efficace sans installation, notre outil en
            ligne{" "}
            <Link href="/compresser-pdf" className="text-blue-600 hover:text-blue-800">
              heictojpg.fr/compresser-pdf
            </Link>{" "}
            est la solution la plus pratique : rapide, gratuit et accessible depuis
            n&apos;importe quel navigateur.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/compresser-pdf-sur-iphone" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur iPhone</h3>
              <p className="text-sm text-gray-600">Guide pour compresser un PDF sur iPhone.</p>
            </Link>
            <Link href="/compresser-pdf-sur-mac" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Mac</h3>
              <p className="text-sm text-gray-600">Guide pour compresser un PDF sur macOS.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
