import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir JPG en PDF sur Windows [2026] | heictojpg.fr",
  description:
    "Apprenez a convertir des images JPG en PDF sur Windows. Utilisez Photos Windows, Microsoft Word ou notre outil en ligne heictojpg.fr. Guide complet.",
  openGraph: {
    type: "website",
    title: "Convertir JPG en PDF sur Windows - Guide complet [2026]",
    description:
      "Apprenez a convertir des images JPG en PDF sur Windows via Photos, Word ou en ligne.",
    url: "https://heictojpg.fr/convertir-jpg-en-pdf-sur-windows",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Convertir JPG en PDF sur Windows - Guide complet [2026]",
    description:
      "Apprenez a convertir des images JPG en PDF sur Windows via Photos, Word ou en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-jpg-en-pdf-sur-windows",
  },
};

export default function ConvertirJpgPdfWindows() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment convertir JPG en PDF sur Windows",
    description: "3 methodes pour convertir des images JPG en PDF sur Windows : Photos Windows, Word ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Utiliser Photos Windows",
        text: "Ouvrez l'image dans Photos Windows et utilisez Imprimer > Microsoft Print to PDF pour creer un PDF.",
        url: "https://heictojpg.fr/convertir-jpg-en-pdf-sur-windows#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Utiliser Microsoft Word",
        text: "Inserez vos images dans un document Word, puis exportez-le en PDF.",
        url: "https://heictojpg.fr/convertir-jpg-en-pdf-sur-windows#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Convertir en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/convertir-jpg-en-pdf, selectionnez vos images et telechargez le PDF.",
        url: "https://heictojpg.fr/convertir-jpg-en-pdf-sur-windows#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir JPG en PDF sur Windows", href: "/convertir-jpg-en-pdf-sur-windows" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment convertir JPG en PDF sur Windows
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Vous souhaitez convertir vos images JPG en documents PDF sur votre PC
          Windows ? Plusieurs methodes gratuites sont a votre disposition :
          l&apos;application Photos, Microsoft Word ou notre outil en ligne.
          Decouvrez comment faire etape par etape.
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
            Methode 1 : Utiliser Photos Windows avec Microsoft Print to PDF
          </h2>
          <p className="text-gray-600 mb-4">
            L&apos;application Photos de Windows permet d&apos;imprimer une image
            directement en PDF grace a l&apos;imprimante virtuelle Microsoft Print to PDF.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez votre image JPG dans l&apos;application <strong>Photos</strong> de Windows.
            </li>
            <li>
              Appuyez sur <strong>Ctrl + P</strong> ou cliquez sur l&apos;icone d&apos;impression.
            </li>
            <li>
              Selectionnez <strong>Microsoft Print to PDF</strong> comme imprimante.
            </li>
            <li>
              Ajustez les parametres si necessaire (orientation, taille de papier).
            </li>
            <li>
              Cliquez sur <strong>Imprimer</strong>, choisissez un emplacement et un nom, puis sauvegardez votre PDF.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 2 : Utiliser Microsoft Word
          </h2>
          <p className="text-gray-600 mb-4">
            Microsoft Word est ideal pour combiner plusieurs images dans un
            document et l&apos;exporter en PDF avec une mise en page personnalisee.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez <strong>Microsoft Word</strong> et creez un nouveau document vierge.
            </li>
            <li>
              Allez dans <strong>Insertion &gt; Images</strong> et selectionnez vos fichiers JPG.
            </li>
            <li>
              Ajustez la taille et la disposition des images selon vos besoins.
            </li>
            <li>
              Allez dans <strong>Fichier &gt; Exporter &gt; Creer un document PDF/XPS</strong>.
            </li>
            <li>
              Choisissez un emplacement, un nom et cliquez sur <strong>Publier</strong>. Votre PDF contenant toutes vos images est pret.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 3 : En ligne avec heictojpg.fr
          </h2>
          <p className="text-gray-600 mb-4">
            Pour convertir rapidement vos images en PDF sans ouvrir Word,
            utilisez notre outil en ligne directement depuis votre navigateur.
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
            Photos Windows avec Microsoft Print to PDF est la solution la plus
            rapide pour une seule image, et Word est ideal pour combiner plusieurs
            photos avec une mise en page personnalisee. Pour une conversion simple
            et rapide sans logiciel, notre outil en ligne{" "}
            <Link href="/convertir-jpg-en-pdf" className="text-blue-600 hover:text-blue-800">
              heictojpg.fr/convertir-jpg-en-pdf
            </Link>{" "}
            est la solution la plus pratique : rapide, gratuit et accessible depuis
            n&apos;importe quel navigateur.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/convertir-jpg-en-pdf-sur-iphone" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur iPhone</h3>
              <p className="text-sm text-gray-600">Guide pour convertir JPG en PDF sur iPhone.</p>
            </Link>
            <Link href="/convertir-jpg-en-pdf-sur-mac" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Mac</h3>
              <p className="text-sm text-gray-600">Guide pour convertir JPG en PDF sur macOS.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
