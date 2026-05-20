import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Compresser un PDF pour l'Envoyer par Email [2026] | heictojpg.fr",
  description:
    "Comment compresser un PDF pour l'envoyer par email : limites Gmail (25 Mo), Outlook (20 Mo), astuces pour reduire la taille d'un PDF. Outil gratuit en ligne.",
  keywords: [
    "compresser pdf pour email",
    "reduire taille pdf",
    "pdf trop lourd email",
    "compresser pdf en ligne",
    "compresser pdf gratuit",
  ],
  openGraph: {
    type: "website",
    title: "Compresser un PDF pour l'Envoyer par Email [2026]",
    description:
      "Guide pratique pour compresser vos PDF avant envoi par email. Respectez les limites de toutes les messageries.",
    url: "https://heictojpg.fr/compresser-pdf-pour-email",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Compresser un PDF pour l'Envoyer par Email [2026]",
    description:
      "Guide pratique pour compresser vos PDF avant envoi par email. Respectez les limites de toutes les messageries.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/compresser-pdf-pour-email",
  },
};

export default function CompresserPdfPourEmail() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment compresser un PDF pour l'envoyer par email",
    description:
      "Etapes pour reduire la taille d'un fichier PDF et pouvoir l'envoyer par email sans depasser les limites de pieces jointes.",
    totalTime: "PT2M",
    step: [
      {
        "@type": "HowToStep",
        name: "Verifier la taille de votre PDF",
        text: "Verifiez que votre PDF depasse la limite de votre messagerie (25 Mo pour Gmail, 20 Mo pour Outlook, 10 Mo pour Orange/Free).",
        url: "https://heictojpg.fr/compresser-pdf-pour-email#etape-1",
      },
      {
        "@type": "HowToStep",
        name: "Compresser le PDF en ligne",
        text: "Utilisez un outil de compression PDF en ligne pour reduire la taille du fichier. Les images contenues dans le PDF seront recompressees.",
        url: "https://heictojpg.fr/compresser-pdf-pour-email#etape-2",
      },
      {
        "@type": "HowToStep",
        name: "Verifier le resultat et envoyer",
        text: "Verifiez que le PDF compresse est toujours lisible et que sa taille respecte la limite de votre messagerie, puis envoyez-le.",
        url: "https://heictojpg.fr/compresser-pdf-pour-email#etape-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Compresser PDF pour email",
              href: "/compresser-pdf-pour-email",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment compresser un PDF pour l&apos;envoyer par email
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Votre PDF est trop lourd pour etre envoye par email ? Les
          messageries limitent la taille des pieces jointes a 10-25 Mo.
          Decouvrez comment reduire la taille de vos PDF rapidement et
          efficacement.
        </p>
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Compressez votre PDF en un clic
          </h3>
          <p className="text-gray-600 mb-4">
            Reduisez la taille de vos PDF directement dans votre navigateur.
            Gratuit, sans inscription, traitement 100% local et securise.
          </p>
          <Link
            href="/compresser-pdf"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Compresser mon PDF maintenant
          </Link>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Les limites de pieces jointes par messagerie
            </h2>
            <p className="text-gray-600 mb-4">
              Chaque service de messagerie impose une limite sur la taille
              totale des pieces jointes :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Messagerie
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Limite
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Alternative si depasse
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border-b p-3 font-medium">Gmail</td>
                    <td className="border-b p-3">25 Mo</td>
                    <td className="border-b p-3">Lien Google Drive automatique</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Outlook / Hotmail</td>
                    <td className="border-b p-3">20 Mo</td>
                    <td className="border-b p-3">Propose OneDrive</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Yahoo Mail</td>
                    <td className="border-b p-3">25 Mo</td>
                    <td className="border-b p-3">Aucune alternative integree</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Orange</td>
                    <td className="border-b p-3">10 Mo</td>
                    <td className="border-b p-3">Aucune alternative integree</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Free (Zimbra)</td>
                    <td className="border-b p-3">10 Mo</td>
                    <td className="border-b p-3">Aucune alternative integree</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">SFR Mail</td>
                    <td className="border-b p-3">10 Mo</td>
                    <td className="border-b p-3">Aucune alternative integree</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">ProtonMail</td>
                    <td className="border-b p-3">25 Mo</td>
                    <td className="border-b p-3">Aucune alternative integree</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              Attention : si votre destinataire utilise Orange ou Free, visez
              un PDF de <strong>moins de 10 Mo</strong> meme si votre messagerie
              accepte plus.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Pourquoi certains PDF sont-ils si lourds ?
            </h2>
            <p className="text-gray-600 mb-4">
              Un PDF peut etre volumineux pour plusieurs raisons :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Images haute resolution</strong> : des photos a 300
                DPI dans un document font exploser la taille
              </li>
              <li>
                <strong>Scans de documents</strong> : un document scanne est
                une image pleine page, souvent 5-10 Mo par page
              </li>
              <li>
                <strong>Polices embarquees</strong> : chaque police incluse
                dans le PDF ajoute 100-500 Ko
              </li>
              <li>
                <strong>Calques et elements vectoriels</strong> : les
                illustrations complexes augmentent la taille
              </li>
              <li>
                <strong>Metadonnees</strong> : historique de modifications,
                commentaires, miniatures
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Comment reduire la taille d&apos;un PDF
            </h2>
            <p className="text-gray-600 mb-4">
              Voici les principales techniques pour compresser un PDF :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-3 mb-4">
              <li>
                <strong>Compresser les images</strong> : c&apos;est le levier
                le plus efficace. Les images peuvent representer 90% du poids
                d&apos;un PDF. En reduisant leur qualite a 150 DPI, vous
                pouvez diviser la taille par 3 a 5.
              </li>
              <li>
                <strong>Supprimer les pages inutiles</strong> : chaque page
                scannee pese 1 a 5 Mo, retirez celles qui ne sont pas
                necessaires.
              </li>
              <li>
                <strong>Supprimer les metadonnees</strong> : l&apos;historique
                de modifications et les commentaires alourdissent le fichier.
              </li>
              <li>
                <strong>Lineariser le PDF</strong> : reorganise la structure
                interne pour un fichier plus compact.
              </li>
            </ul>
            <p className="text-gray-600">
              Notre{" "}
              <Link
                href="/compresser-pdf"
                className="text-blue-600 hover:text-blue-800"
              >
                outil de compression PDF
              </Link>{" "}
              applique automatiquement ces optimisations pour vous.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Quel taux de compression attendre ?
            </h2>
            <p className="text-gray-600 mb-4">
              Le taux de compression depend du contenu de votre PDF :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Type de PDF
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Reduction attendue
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border-b p-3 font-medium">Document scanne</td>
                    <td className="border-b p-3">60-80% de reduction</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">PDF avec photos HD</td>
                    <td className="border-b p-3">50-70% de reduction</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Presentation avec images</td>
                    <td className="border-b p-3">40-60% de reduction</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">PDF texte avec quelques images</td>
                    <td className="border-b p-3">20-40% de reduction</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">PDF texte pur</td>
                    <td className="border-b p-3">5-15% de reduction</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Alternatives si le PDF reste trop lourd
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                <strong>Diviser le PDF</strong> : envoyez-le en plusieurs
                parties dans des emails separes
              </li>
              <li>
                <strong>Utiliser un lien de partage</strong> : uploadez sur
                Google Drive, Dropbox ou WeTransfer et partagez le lien
              </li>
              <li>
                <strong>Compresser en ZIP</strong> : un fichier ZIP peut
                reduire un PDF texte de 10 a 20% supplementaires
              </li>
              <li>
                <strong>Convertir en images</strong> : si seule la lecture est
                necessaire, convertissez les pages en images JPEG compressees
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Guides associes
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/compresser-image-pour-email"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Compresser une image pour email
                </h3>
                <p className="text-sm text-gray-600">
                  Reduire le poids de vos images pour l&apos;envoi par email.
                </p>
              </Link>
              <Link
                href="/convertir-image-en-pdf-pour-impression"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Convertir images en PDF
                </h3>
                <p className="text-sm text-gray-600">
                  Combiner vos images en un seul fichier PDF.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
