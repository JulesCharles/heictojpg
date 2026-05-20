import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Redimensionner une Photo pour CV [2026] | heictojpg.fr",
  description:
    "Comment redimensionner une photo pour un CV : dimensions standard 35x45mm (413x531px a 300 DPI), poids max 2 Mo, format JPG. Outil gratuit en ligne.",
  keywords: [
    "redimensionner photo cv",
    "taille photo cv",
    "dimension photo cv",
    "photo identite cv",
    "recadrer photo cv",
    "photo cv en ligne",
  ],
  openGraph: {
    type: "website",
    title: "Redimensionner une Photo pour CV [2026]",
    description:
      "Guide pour redimensionner votre photo de CV aux dimensions standard 35x45mm. Outil gratuit en ligne.",
    url: "https://heictojpg.fr/redimensionner-image-pour-cv",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Redimensionner une Photo pour CV [2026]",
    description:
      "Guide pour redimensionner votre photo de CV aux dimensions standard 35x45mm. Outil gratuit en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/redimensionner-image-pour-cv",
  },
};

export default function RedimensionnerImagePourCv() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment redimensionner une photo pour un CV",
    description:
      "Etapes pour preparer une photo aux dimensions standard d'un CV : recadrer, redimensionner et exporter au bon format.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Recadrer la photo au bon ratio",
        text: "Recadrez votre portrait au ratio 35:45 (soit environ 3.5:4.5). Le visage doit occuper 70 a 80% du cadre.",
        url: "https://heictojpg.fr/redimensionner-image-pour-cv#etape-1",
      },
      {
        "@type": "HowToStep",
        name: "Redimensionner a 413 x 531 pixels",
        text: "Redimensionnez la photo a 413 x 531 pixels, ce qui correspond aux dimensions standard de 35 x 45 mm a 300 DPI.",
        url: "https://heictojpg.fr/redimensionner-image-pour-cv#etape-2",
      },
      {
        "@type": "HowToStep",
        name: "Exporter en JPG de moins de 2 Mo",
        text: "Enregistrez la photo au format JPEG avec une qualite de 85-90%. Le fichier final doit peser moins de 2 Mo.",
        url: "https://heictojpg.fr/redimensionner-image-pour-cv#etape-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Redimensionner photo pour CV",
              href: "/redimensionner-image-pour-cv",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment redimensionner une photo pour un CV
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Une photo de CV bien dimensionnee donne une impression
          professionnelle. Decouvrez les dimensions standard, le format
          ideal et comment preparer votre photo en quelques clics.
        </p>
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Preparez votre photo de CV en un clic
          </h3>
          <p className="text-gray-600 mb-4">
            Redimensionnez et recadrez votre photo aux dimensions standard
            d&apos;un CV. Gratuit, sans inscription, traitement 100% local.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/redimensionner-image"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Redimensionner ma photo
            </Link>
            <Link
              href="/recadrer-image"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Recadrer ma photo
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Les dimensions standard d&apos;une photo de CV
            </h2>
            <p className="text-gray-600 mb-4">
              En France, la photo de CV suit les memes dimensions qu&apos;une
              photo d&apos;identite :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Parametre
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Valeur standard
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border-b p-3 font-medium">Dimensions physiques</td>
                    <td className="border-b p-3">35 x 45 mm</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Pixels (300 DPI)</td>
                    <td className="border-b p-3">413 x 531 px</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Ratio</td>
                    <td className="border-b p-3">7:9 (proche du 3:4)</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Format de fichier</td>
                    <td className="border-b p-3">JPEG (.jpg)</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Poids maximum</td>
                    <td className="border-b p-3">2 Mo</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Resolution</td>
                    <td className="border-b p-3">300 DPI (pour impression)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              Note : pour un CV uniquement numerique (PDF envoye par email),
              une resolution de 150 DPI (207 x 266 px) est suffisante.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 1 : Recadrer la photo au bon ratio
            </h2>
            <p className="text-gray-600 mb-4">
              Avant de redimensionner, il faut recadrer votre photo pour
              obtenir le bon ratio et le bon cadrage :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                Le <strong>visage</strong> doit occuper 70 a 80% de la hauteur
                de l&apos;image
              </li>
              <li>
                Laissez un peu d&apos;espace au-dessus de la tete et en dessous
                du menton
              </li>
              <li>
                Centrez le visage horizontalement
              </li>
              <li>
                Le cadrage doit aller <strong>du haut du crane au haut des
                epaules</strong>
              </li>
            </ul>
            <p className="text-gray-600">
              Utilisez notre{" "}
              <Link
                href="/recadrer-image"
                className="text-blue-600 hover:text-blue-800"
              >
                outil de recadrage
              </Link>{" "}
              pour ajuster le cadrage de votre photo.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 2 : Redimensionner a 413 x 531 pixels
            </h2>
            <p className="text-gray-600 mb-4">
              Une fois recadree, redimensionnez votre photo aux dimensions
              exactes :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                <strong>413 x 531 px</strong> pour un CV imprime a 300 DPI
              </li>
              <li>
                <strong>207 x 266 px</strong> pour un CV numerique (150 DPI)
              </li>
            </ul>
            <p className="text-gray-600">
              Rendez-vous sur notre{" "}
              <Link
                href="/redimensionner-image"
                className="text-blue-600 hover:text-blue-800"
              >
                outil de redimensionnement
              </Link>{" "}
              et entrez les dimensions souhaitees.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 3 : Exporter en JPG (moins de 2 Mo)
            </h2>
            <p className="text-gray-600 mb-4">
              Le format <strong>JPEG</strong> est le standard pour les photos
              de CV. Il est accepte par toutes les plateformes de recrutement
              et s&apos;integre facilement dans un document Word ou PDF.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Qualite recommandee : <strong>85-90%</strong> pour un bon
                compromis poids/qualite
              </li>
              <li>
                Le fichier final doit peser <strong>moins de 2 Mo</strong>{" "}
                (generalement 50 a 200 Ko pour ces dimensions)
              </li>
              <li>
                Evitez le PNG : il produit des fichiers plus lourds sans
                benefice visible pour une photo
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conseils pour une bonne photo de CV
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                <strong>Eclairage naturel</strong> : placez-vous face a une
                fenetre pour un eclairage doux et uniforme
              </li>
              <li>
                <strong>Fond neutre</strong> : un fond blanc, gris clair ou
                beige est ideal
              </li>
              <li>
                <strong>Tenue professionnelle</strong> : adaptee au secteur
                vise
              </li>
              <li>
                <strong>Regard vers l&apos;objectif</strong> : sourire
                naturel, expression ouverte
              </li>
              <li>
                <strong>Photo recente</strong> : moins de 6 mois pour refleter
                votre apparence actuelle
              </li>
              <li>
                <strong>Pas de selfie</strong> : demandez a quelqu&apos;un de
                vous photographier ou utilisez un retardateur
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Guides associes
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/creer-favicon-en-ligne"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Creer un favicon en ligne
                </h3>
                <p className="text-sm text-gray-600">
                  Redimensionner et convertir une image en favicon ICO.
                </p>
              </Link>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
