import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir JPG en PDF sur iPhone [2026] | heictojpg.fr",
  description:
    "Apprenez a convertir des images JPG en PDF sur iPhone. Utilisez l'app Photos, l'app Fichiers ou notre outil en ligne heictojpg.fr. Guide complet.",
  openGraph: {
    type: "website",
    title: "Convertir JPG en PDF sur iPhone - Guide complet [2026]",
    description:
      "Apprenez a convertir des images JPG en PDF sur iPhone via l'app Photos, l'app Fichiers ou en ligne.",
    url: "https://heictojpg.fr/convertir-jpg-en-pdf-sur-iphone",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Convertir JPG en PDF sur iPhone - Guide complet [2026]",
    description:
      "Apprenez a convertir des images JPG en PDF sur iPhone via l'app Photos, l'app Fichiers ou en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-jpg-en-pdf-sur-iphone",
  },
};

export default function ConvertirJpgPdfIphone() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment convertir JPG en PDF sur iPhone",
    description: "3 methodes pour convertir des images JPG en PDF sur iPhone : app Photos, app Fichiers ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Utiliser l'app Photos",
        text: "Ouvrez la photo dans Photos, appuyez sur Partager > Imprimer, puis pincez pour zoomer afin de creer un PDF.",
        url: "https://heictojpg.fr/convertir-jpg-en-pdf-sur-iphone#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Utiliser l'app Fichiers",
        text: "Selectionnez vos images dans l'app Fichiers et utilisez l'option Creer un PDF.",
        url: "https://heictojpg.fr/convertir-jpg-en-pdf-sur-iphone#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Convertir en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/convertir-jpg-en-pdf dans Safari, selectionnez vos images et telechargez le PDF.",
        url: "https://heictojpg.fr/convertir-jpg-en-pdf-sur-iphone#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir JPG en PDF sur iPhone", href: "/convertir-jpg-en-pdf-sur-iphone" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment convertir JPG en PDF sur iPhone
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Vous avez besoin de convertir une ou plusieurs photos JPG en document
          PDF sur votre iPhone ? Que ce soit pour envoyer un document officiel
          ou archiver des images, decouvrez les meilleures methodes pour creer
          un PDF a partir de vos photos directement sur iOS.
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
          JPG en PDF en quelques secondes, directement depuis Safari sur
          votre iPhone.
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
            Methode 1 : Utiliser l&apos;app Photos (astuce Imprimer)
          </h2>
          <p className="text-gray-600 mb-4">
            Une astuce meconnue d&apos;iOS permet de creer un PDF a partir de
            n&apos;importe quelle photo en utilisant la fonction d&apos;impression.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez l&apos;application <strong>Photos</strong> et selectionnez l&apos;image JPG a convertir.
            </li>
            <li>
              Appuyez sur le bouton <strong>Partager</strong> (carre avec fleche vers le haut).
            </li>
            <li>
              Choisissez <strong>Imprimer</strong> dans les options de partage.
            </li>
            <li>
              Sur l&apos;apercu d&apos;impression, <strong>pincez pour zoomer</strong> (ecartez deux doigts) sur la previsualisation de la photo. Cela transforme l&apos;apercu en PDF.
            </li>
            <li>
              Vous pouvez ensuite appuyer sur <strong>Partager</strong> pour enregistrer le PDF dans Fichiers ou l&apos;envoyer directement.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 2 : Utiliser l&apos;app Fichiers
          </h2>
          <p className="text-gray-600 mb-4">
            L&apos;application Fichiers permet de selectionner plusieurs images
            et de les convertir en un seul document PDF.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Enregistrez d&apos;abord vos photos dans l&apos;app <strong>Fichiers</strong> : depuis Photos, appuyez sur Partager &gt; Enregistrer dans Fichiers.
            </li>
            <li>
              Ouvrez l&apos;application <strong>Fichiers</strong> et naviguez vers le dossier contenant vos images.
            </li>
            <li>
              Appuyez sur <strong>...</strong> (Plus) &gt; <strong>Selectionner</strong>, puis selectionnez les images a convertir.
            </li>
            <li>
              Appuyez sur <strong>...</strong> en bas a droite et choisissez <strong>Creer un PDF</strong>.
            </li>
            <li>
              Un fichier PDF contenant toutes vos images sera cree dans le meme dossier.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8" id="methode-3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Methode 3 : En ligne avec heictojpg.fr
          </h2>
          <p className="text-gray-600 mb-4">
            Pour convertir rapidement vos images en PDF sans manipulation
            complexe, utilisez notre outil en ligne directement depuis Safari.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez Safari et rendez-vous sur{" "}
              <Link href="/convertir-jpg-en-pdf" className="text-blue-600 hover:text-blue-800">
                heictojpg.fr/convertir-jpg-en-pdf
              </Link>
              .
            </li>
            <li>
              Appuyez sur la zone de depot et selectionnez vos images JPG
              depuis la Phototheque ou l&apos;app Fichiers.
            </li>
            <li>
              La conversion est instantanee. Telechargez votre PDF et
              retrouvez-le dans votre dossier Telechargements.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-600 mb-4">
            L&apos;astuce de l&apos;impression dans Photos est rapide pour une seule image,
            et l&apos;app Fichiers est ideale pour combiner plusieurs photos en PDF.
            Pour une conversion simple et efficace, notre outil en ligne{" "}
            <Link href="/convertir-jpg-en-pdf" className="text-blue-600 hover:text-blue-800">
              heictojpg.fr/convertir-jpg-en-pdf
            </Link>{" "}
            est la solution la plus pratique : rapide, gratuit et sans installation.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/convertir-jpg-en-pdf-sur-mac" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Mac</h3>
              <p className="text-sm text-gray-600">Guide pour convertir JPG en PDF sur macOS.</p>
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
