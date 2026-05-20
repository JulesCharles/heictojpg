import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir des Images en PDF pour l'Impression [2026] | heictojpg.fr",
  description:
    "Comment convertir vos images en PDF pour l'impression : utiliser des images haute resolution, 300 DPI, combiner plusieurs images en un seul fichier PDF. Guide complet.",
  keywords: [
    "convertir image en pdf",
    "image en pdf impression",
    "combiner images pdf",
    "pdf haute qualite",
    "images en pdf en ligne",
    "creer pdf avec images",
  ],
  openGraph: {
    type: "website",
    title: "Convertir des Images en PDF pour l'Impression [2026]",
    description:
      "Guide pour convertir vos images en PDF haute qualite pour l'impression. Combinez plusieurs images en un seul fichier.",
    url: "https://heictojpg.fr/convertir-image-en-pdf-pour-impression",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Convertir des Images en PDF pour l'Impression [2026]",
    description:
      "Guide pour convertir vos images en PDF haute qualite pour l'impression. Combinez plusieurs images en un seul fichier.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-image-en-pdf-pour-impression",
  },
};

export default function ConvertirImageEnPdfPourImpression() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment convertir des images en PDF pour l'impression",
    description:
      "Etapes pour creer un PDF haute qualite a partir de vos images pour une impression professionnelle.",
    totalTime: "PT5M",
    step: [
      {
        "@type": "HowToStep",
        name: "Preparer des images en haute resolution",
        text: "Assurez-vous que vos images sont en haute resolution (300 DPI minimum) et aux bonnes dimensions pour le format d'impression souhaite.",
        url: "https://heictojpg.fr/convertir-image-en-pdf-pour-impression#etape-1",
      },
      {
        "@type": "HowToStep",
        name: "Regler les DPI a 300",
        text: "Verifiez et ajustez la resolution de vos images a 300 DPI pour garantir une impression nette et sans pixellisation.",
        url: "https://heictojpg.fr/convertir-image-en-pdf-pour-impression#etape-2",
      },
      {
        "@type": "HowToStep",
        name: "Combiner les images en un seul PDF",
        text: "Utilisez un outil de conversion pour assembler vos images dans un seul fichier PDF, en choisissant l'ordre des pages et le format de page.",
        url: "https://heictojpg.fr/convertir-image-en-pdf-pour-impression#etape-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Convertir images en PDF pour impression",
              href: "/convertir-image-en-pdf-pour-impression",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment convertir des images en PDF pour l&apos;impression
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Vous avez plusieurs images a imprimer et souhaitez les regrouper
          dans un seul fichier PDF ? Decouvrez comment creer un PDF haute
          qualite a partir de vos photos, pret pour une impression
          professionnelle.
        </p>
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Convertissez vos images en PDF en un clic
          </h3>
          <p className="text-gray-600 mb-4">
            Combinez vos images en un seul PDF haute qualite et ajustez les
            DPI. Gratuit, sans inscription, traitement 100% local.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/convertir-images-en-pdf"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Convertir mes images en PDF
            </Link>
            <Link
              href="/changer-dpi-image"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Changer les DPI
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Pourquoi convertir des images en PDF pour l&apos;impression ?
            </h2>
            <p className="text-gray-600 mb-4">
              Le format PDF offre plusieurs avantages pour l&apos;impression :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Un seul fichier</strong> : regroupez toutes vos images
                dans un document unique, plus facile a envoyer a
                l&apos;imprimeur
              </li>
              <li>
                <strong>Mise en page preservee</strong> : le PDF garantit que
                la disposition sera identique sur tous les appareils
              </li>
              <li>
                <strong>Qualite preservee</strong> : le PDF peut encapsuler
                des images sans recompression
              </li>
              <li>
                <strong>Standard universel</strong> : tous les imprimeurs
                acceptent le PDF
              </li>
              <li>
                <strong>Multi-pages</strong> : ideal pour les catalogues,
                albums photos, portfolios
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 1 : Preparer des images haute resolution
            </h2>
            <p className="text-gray-600 mb-4">
              La qualite de votre PDF depend directement de la qualite de vos
              images source. Pour une impression professionnelle :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Format d&apos;impression
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Pixels minimum (300 DPI)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border-b p-3 font-medium">10 x 15 cm (photo standard)</td>
                    <td className="border-b p-3">1181 x 1772 px</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">A4 (21 x 29,7 cm)</td>
                    <td className="border-b p-3">2480 x 3508 px</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">A3 (29,7 x 42 cm)</td>
                    <td className="border-b p-3">3508 x 4961 px</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">30 x 40 cm (poster)</td>
                    <td className="border-b p-3">3543 x 4724 px</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">50 x 70 cm (affiche)</td>
                    <td className="border-b p-3">5906 x 8268 px</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              Si vos images n&apos;atteignent pas ces resolutions, vous pouvez
              imprimer en plus petit format ou accepter une qualite legerement
              inferieure (150-200 DPI reste correct pour un poster vu de loin).
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 2 : Regler les DPI a 300
            </h2>
            <p className="text-gray-600 mb-4">
              Les <strong>DPI</strong> (Dots Per Inch) determinent la densite
              de pixels a l&apos;impression. Un reglage de 300 DPI est le
              standard professionnel :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                <strong>300 DPI</strong> : qualite photo, impression nette a
                distance de lecture normale
              </li>
              <li>
                <strong>150 DPI</strong> : acceptable pour les affiches et
                posters (vus de loin)
              </li>
              <li>
                <strong>72 DPI</strong> : qualite ecran uniquement, insuffisant
                pour l&apos;impression
              </li>
            </ul>
            <p className="text-gray-600">
              Utilisez notre{" "}
              <Link
                href="/changer-dpi-image"
                className="text-blue-600 hover:text-blue-800"
              >
                outil de changement de DPI
              </Link>{" "}
              pour ajuster la resolution de vos images avant de les convertir
              en PDF.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 3 : Combiner les images en un seul PDF
            </h2>
            <p className="text-gray-600 mb-4">
              Une fois vos images preparees, combinez-les en un seul PDF :
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-4">
              <li>
                Rendez-vous sur notre{" "}
                <Link
                  href="/convertir-images-en-pdf"
                  className="text-blue-600 hover:text-blue-800"
                >
                  outil de conversion images vers PDF
                </Link>
              </li>
              <li>
                Deposez toutes vos images dans la zone de depot
              </li>
              <li>
                Reorganisez l&apos;ordre des pages si necessaire par
                glisser-deposer
              </li>
              <li>
                Selectionnez le format de page (A4, A3, personnalise)
              </li>
              <li>
                Telechargez votre PDF pret pour l&apos;impression
              </li>
            </ol>
            <p className="text-gray-600">
              Le PDF genere conserve la qualite originale de vos images, sans
              recompression supplementaire.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conseils pour un PDF d&apos;impression parfait
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                <strong>Ajoutez des fonds perdus</strong> (bleed) : 3 a 5 mm
                de debord si vos images vont jusqu&apos;au bord de la page
              </li>
              <li>
                <strong>Verifiez les couleurs</strong> : si possible, utilisez
                l&apos;espace CMYK pour les impressions professionnelles
              </li>
              <li>
                <strong>Evitez la surcompression</strong> : un PDF pour
                impression doit etre plus lourd qu&apos;un PDF pour email
              </li>
              <li>
                <strong>Demandez un bon a tirer</strong> (BAT) : avant le
                tirage final, verifiez une epreuve avec votre imprimeur
              </li>
              <li>
                <strong>Utilisez des images TIFF</strong> pour la meilleure
                qualite possible
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Guides associes
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/convertir-image-pour-impression"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Preparer une image pour l&apos;impression
                </h3>
                <p className="text-sm text-gray-600">
                  300 DPI, TIFF, CMYK : tout pour une impression de qualite.
                </p>
              </Link>
              <Link
                href="/compresser-pdf-pour-email"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Compresser un PDF pour email
                </h3>
                <p className="text-sm text-gray-600">
                  Reduire la taille d&apos;un PDF pour l&apos;envoi par email.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
