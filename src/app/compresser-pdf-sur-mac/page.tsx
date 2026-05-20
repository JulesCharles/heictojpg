import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Compresser un PDF sur Mac [2026] | heictojpg.fr",
  description:
    "Apprenez a compresser un fichier PDF sur Mac. Utilisez Apercu avec le filtre Quartz, ColorSync Utility ou notre outil en ligne heictojpg.fr. Guide complet.",
  openGraph: {
    type: "website",
    title: "Compresser un PDF sur Mac - Guide complet [2026]",
    description:
      "Apprenez a compresser un fichier PDF sur Mac via Apercu, ColorSync Utility ou en ligne.",
    url: "https://heictojpg.fr/compresser-pdf-sur-mac",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Compresser un PDF sur Mac - Guide complet [2026]",
    description:
      "Apprenez a compresser un fichier PDF sur Mac via Apercu, ColorSync Utility ou en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/compresser-pdf-sur-mac",
  },
};

export default function CompresserPdfMac() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment compresser un PDF sur Mac",
    description: "3 methodes pour compresser un fichier PDF sur Mac : Apercu, ColorSync Utility ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Utiliser Apercu",
        text: "Ouvrez le PDF dans Apercu, puis exportez-le avec le filtre Quartz Reduce File Size.",
        url: "https://heictojpg.fr/compresser-pdf-sur-mac#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Utiliser ColorSync Utility",
        text: "Ouvrez ColorSync Utility pour appliquer un filtre de compression personnalise a votre PDF.",
        url: "https://heictojpg.fr/compresser-pdf-sur-mac#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Compresser en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/compresser-pdf, selectionnez votre PDF et telechargez la version compressee.",
        url: "https://heictojpg.fr/compresser-pdf-sur-mac#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Compresser un PDF sur Mac", href: "/compresser-pdf-sur-mac" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment compresser un PDF sur Mac
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          macOS integre des outils natifs pour reduire la taille de vos fichiers
          PDF. Que vous ayez besoin d&apos;envoyer un document par e-mail ou de
          liberer de l&apos;espace de stockage, decouvrez comment compresser vos
          PDF sur Mac avec Apercu, ColorSync Utility ou notre outil en ligne.
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
            Methode 1 : Utiliser Apercu avec le filtre Quartz
          </h2>
          <p className="text-gray-600 mb-4">
            Apercu permet d&apos;exporter un PDF avec un filtre de compression
            integre qui reduit significativement la taille du fichier.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez votre fichier PDF dans <strong>Apercu</strong>.
            </li>
            <li>
              Allez dans <strong>Fichier &gt; Exporter</strong>.
            </li>
            <li>
              Dans le menu deroulant <strong>Filtre Quartz</strong>, selectionnez <strong>Reduce File Size</strong>.
            </li>
            <li>
              Choisissez un emplacement et un nom pour le fichier, puis cliquez sur <strong>Enregistrer</strong>.
            </li>
            <li>
              Le nouveau fichier sera significativement plus petit. Notez que la qualite des images peut etre reduite.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 2 : Utiliser ColorSync Utility
          </h2>
          <p className="text-gray-600 mb-4">
            ColorSync Utility offre un controle plus fin sur la compression
            des PDF et permet de creer des filtres personnalises.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez <strong>ColorSync Utility</strong> (dans Applications &gt; Utilitaires).
            </li>
            <li>
              Allez dans l&apos;onglet <strong>Filtres</strong>.
            </li>
            <li>
              Vous pouvez dupliquer le filtre <strong>Reduce File Size</strong> et ajuster les parametres de compression des images (resolution, qualite JPEG).
            </li>
            <li>
              Pour appliquer le filtre, ouvrez votre PDF dans Apercu et exportez-le en selectionnant votre filtre personnalise dans le menu <strong>Filtre Quartz</strong>.
            </li>
            <li>
              Cette methode permet un meilleur equilibre entre taille du fichier et qualite visuelle.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 3 : En ligne avec heictojpg.fr
          </h2>
          <p className="text-gray-600 mb-4">
            Pour compresser un PDF rapidement sans manipuler les filtres Quartz,
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
            Apercu avec le filtre Quartz est la methode la plus directe pour
            compresser un PDF sur Mac, tandis que ColorSync Utility offre plus
            de controle. Pour une compression rapide et efficace sans reglages,
            notre outil en ligne{" "}
            <Link href="/compresser-pdf" className="text-blue-600 hover:text-blue-800">
              heictojpg.fr/compresser-pdf
            </Link>{" "}
            est la solution la plus pratique : rapide, gratuit et sans installation.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/compresser-pdf-sur-iphone" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur iPhone</h3>
              <p className="text-sm text-gray-600">Guide pour compresser un PDF sur iPhone.</p>
            </Link>
            <Link href="/compresser-pdf-sur-windows" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Windows</h3>
              <p className="text-sm text-gray-600">Guide pour compresser un PDF sur PC.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
