import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Compresser un PDF sur iPhone [2026] | heictojpg.fr",
  description:
    "Apprenez a compresser un fichier PDF sur iPhone. Utilisez les Raccourcis iOS, l'app Mail ou notre outil en ligne heictojpg.fr. Guide complet.",
  openGraph: {
    type: "website",
    title: "Compresser un PDF sur iPhone - Guide complet [2026]",
    description:
      "Apprenez a compresser un fichier PDF sur iPhone via les Raccourcis iOS, l'app Mail ou en ligne.",
    url: "https://heictojpg.fr/compresser-pdf-sur-iphone",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Compresser un PDF sur iPhone - Guide complet [2026]",
    description:
      "Apprenez a compresser un fichier PDF sur iPhone via les Raccourcis iOS, l'app Mail ou en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/compresser-pdf-sur-iphone",
  },
};

export default function CompresserPdfIphone() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment compresser un PDF sur iPhone",
    description: "3 methodes pour compresser un fichier PDF sur iPhone : Raccourcis iOS, app Mail ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Utiliser les Raccourcis iOS",
        text: "Creez un raccourci de compression PDF dans l'app Raccourcis pour reduire la taille de vos fichiers.",
        url: "https://heictojpg.fr/compresser-pdf-sur-iphone#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Utiliser l'app Mail",
        text: "Joignez le PDF dans Mail, iOS propose automatiquement de reduire la taille de la piece jointe.",
        url: "https://heictojpg.fr/compresser-pdf-sur-iphone#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Compresser en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/compresser-pdf dans Safari, selectionnez votre PDF et telechargez la version compressee.",
        url: "https://heictojpg.fr/compresser-pdf-sur-iphone#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Compresser un PDF sur iPhone", href: "/compresser-pdf-sur-iphone" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment compresser un PDF sur iPhone
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Vos fichiers PDF sont trop volumineux pour etre envoyes par e-mail ou
          partages ? Decouvrez comment reduire la taille de vos PDF directement
          sur votre iPhone avec les Raccourcis iOS, l&apos;app Mail ou notre outil
          en ligne gratuit.
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
          PDF en quelques secondes, directement depuis Safari sur votre iPhone.
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
            Methode 1 : Utiliser les Raccourcis iOS
          </h2>
          <p className="text-gray-600 mb-4">
            L&apos;app Raccourcis permet de creer un raccourci personnalise pour
            compresser vos fichiers PDF automatiquement.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez l&apos;application <strong>Raccourcis</strong> sur votre iPhone.
            </li>
            <li>
              Creez un nouveau raccourci et ajoutez l&apos;action <strong>Selectionner un fichier</strong>.
            </li>
            <li>
              Ajoutez l&apos;action <strong>Creer un PDF</strong> a partir du fichier selectionne (cela recompresse le contenu).
            </li>
            <li>
              Ajoutez l&apos;action <strong>Enregistrer le fichier</strong> pour sauvegarder le PDF compresse.
            </li>
            <li>
              Executez le raccourci : le nouveau PDF sera generalement plus leger que l&apos;original.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 2 : Utiliser l&apos;app Mail
          </h2>
          <p className="text-gray-600 mb-4">
            L&apos;application Mail d&apos;iOS peut reduire automatiquement la taille
            des pieces jointes volumineuses, y compris les fichiers PDF.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez l&apos;application <strong>Mail</strong> et creez un nouveau message.
            </li>
            <li>
              Ajoutez votre fichier PDF en piece jointe en appuyant longuement dans le corps du message et en choisissant <strong>Ajouter un document</strong>.
            </li>
            <li>
              Selectionnez votre PDF depuis l&apos;app Fichiers.
            </li>
            <li>
              Lorsque vous envoyez le message, si le fichier est volumineux, iOS vous proposera de <strong>reduire la taille</strong> de la piece jointe.
            </li>
            <li>
              Choisissez une taille reduite. Envoyez-vous le mail pour recuperer le PDF compresse.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 3 : En ligne avec heictojpg.fr
          </h2>
          <p className="text-gray-600 mb-4">
            Pour compresser rapidement un PDF sans manipulation complexe,
            utilisez notre outil en ligne directement depuis Safari.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez Safari et rendez-vous sur{" "}
              <Link href="/compresser-pdf" className="text-blue-600 hover:text-blue-800">
                heictojpg.fr/compresser-pdf
              </Link>
              .
            </li>
            <li>
              Appuyez sur la zone de depot et selectionnez votre fichier PDF
              depuis l&apos;app Fichiers.
            </li>
            <li>
              La compression est automatique. Telechargez votre PDF compresse
              et retrouvez-le dans votre dossier Telechargements.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-600 mb-4">
            Les Raccourcis iOS offrent une solution automatisee pour compresser
            vos PDF, et l&apos;app Mail peut reduire la taille lors de l&apos;envoi.
            Pour une compression efficace sans effort, notre outil en ligne{" "}
            <Link href="/compresser-pdf" className="text-blue-600 hover:text-blue-800">
              heictojpg.fr/compresser-pdf
            </Link>{" "}
            est la solution la plus pratique : rapide, gratuit et sans installation.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/compresser-pdf-sur-mac" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Mac</h3>
              <p className="text-sm text-gray-600">Guide pour compresser un PDF sur macOS.</p>
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
