import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Preparer une Image pour l'Impression [2026] | heictojpg.fr",
  description:
    "Comment preparer une image pour l'impression : 300 DPI minimum, format TIFF ou PDF, CMYK vs RGB. Guide complet pour des impressions de qualite professionnelle.",
  keywords: [
    "image pour impression",
    "300 dpi impression",
    "convertir image impression",
    "cmyk rgb impression",
    "tiff pour impression",
    "preparer image imprimeur",
  ],
  openGraph: {
    type: "website",
    title: "Preparer une Image pour l'Impression [2026]",
    description:
      "Guide pour preparer vos images pour l'impression : 300 DPI, format TIFF/PDF, espace colorimetrique CMYK.",
    url: "https://heictojpg.fr/convertir-image-pour-impression",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Preparer une Image pour l'Impression [2026]",
    description:
      "Guide pour preparer vos images pour l'impression : 300 DPI, format TIFF/PDF, espace colorimetrique CMYK.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-image-pour-impression",
  },
};

export default function ConvertirImagePourImpression() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment preparer une image pour l'impression",
    description:
      "Etapes pour preparer vos images pour une impression de qualite professionnelle : resolution, format et espace colorimetrique.",
    totalTime: "PT5M",
    step: [
      {
        "@type": "HowToStep",
        name: "Verifier la resolution (300 DPI minimum)",
        text: "Assurez-vous que votre image a une resolution d'au moins 300 DPI (pixels par pouce) pour eviter le flou a l'impression.",
        url: "https://heictojpg.fr/convertir-image-pour-impression#etape-1",
      },
      {
        "@type": "HowToStep",
        name: "Choisir le bon format (TIFF ou PDF)",
        text: "Utilisez le format TIFF pour une qualite maximale sans perte, ou le PDF pour des documents multi-pages. Evitez le JPEG pour l'impression professionnelle.",
        url: "https://heictojpg.fr/convertir-image-pour-impression#etape-2",
      },
      {
        "@type": "HowToStep",
        name: "Comprendre CMYK vs RGB",
        text: "L'impression utilise l'espace colorimetrique CMYK (Cyan, Magenta, Jaune, Noir) tandis que les ecrans utilisent le RGB. Convertissez vos images en CMYK si votre imprimeur le demande.",
        url: "https://heictojpg.fr/convertir-image-pour-impression#etape-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Preparer image pour impression",
              href: "/convertir-image-pour-impression",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment preparer une image pour l&apos;impression
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Une image qui rend bien a l&apos;ecran peut etre floue ou terne une
          fois imprimee. Decouvrez les regles essentielles pour preparer vos
          images et obtenir des impressions de qualite professionnelle.
        </p>
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Preparez vos images pour l&apos;impression
          </h3>
          <p className="text-gray-600 mb-4">
            Changez les DPI et convertissez vos images en TIFF directement
            dans votre navigateur. Gratuit et sans inscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/changer-dpi-image"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Changer les DPI
            </Link>
            <Link
              href="/convertir-jpg-en-tiff"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Convertir en TIFF
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              La resolution : 300 DPI minimum
            </h2>
            <p className="text-gray-600 mb-4">
              La resolution d&apos;une image se mesure en{" "}
              <strong>DPI</strong> (Dots Per Inch, ou points par pouce).
              C&apos;est le facteur le plus important pour la qualite
              d&apos;impression :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Resolution
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Qualite
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Usage
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border-b p-3 font-medium">72 DPI</td>
                    <td className="border-b p-3">Basse (ecran uniquement)</td>
                    <td className="border-b p-3">Web, reseaux sociaux</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">150 DPI</td>
                    <td className="border-b p-3">Moyenne</td>
                    <td className="border-b p-3">Impression basique, journaux</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">300 DPI</td>
                    <td className="border-b p-3">Haute (standard pro)</td>
                    <td className="border-b p-3">Impression professionnelle, photos</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">600 DPI</td>
                    <td className="border-b p-3">Tres haute</td>
                    <td className="border-b p-3">Impression fine art, grand format</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 mt-4">
              Important : augmenter les DPI d&apos;une image basse resolution
              ne la rendra pas plus nette. Il faut que l&apos;image ait{" "}
              <strong>suffisamment de pixels</strong> au depart. Par exemple,
              pour imprimer une photo A4 (21 x 29,7 cm) a 300 DPI, il faut une
              image d&apos;au moins <strong>2480 x 3508 pixels</strong>.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Calculer la taille d&apos;impression
            </h2>
            <p className="text-gray-600 mb-4">
              Pour savoir a quelle taille vous pouvez imprimer votre image en
              qualite 300 DPI, utilisez cette formule :
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 font-mono text-center">
                Taille d&apos;impression (cm) = (Pixels / DPI) x 2,54
              </p>
            </div>
            <p className="text-gray-600 mb-4">
              Exemples concrets :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Photo 4000 x 3000 px a 300 DPI ={" "}
                <strong>33,9 x 25,4 cm</strong> (un peu plus grand que A4)
              </li>
              <li>
                Photo 2000 x 1500 px a 300 DPI ={" "}
                <strong>16,9 x 12,7 cm</strong> (format carte postale)
              </li>
              <li>
                Photo 1200 x 800 px a 300 DPI ={" "}
                <strong>10,2 x 6,8 cm</strong> (petite photo)
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Choisir le bon format : TIFF ou PDF
            </h2>
            <p className="text-gray-600 mb-4">
              Le format de fichier a un impact direct sur la qualite
              d&apos;impression :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-3 mb-4">
              <li>
                <strong>TIFF</strong> : le format de reference pour
                l&apos;impression. Sans perte de qualite, il preserve tous les
                details de votre image. Fichiers volumineux mais qualite
                maximale.
              </li>
              <li>
                <strong>PDF</strong> : ideal pour les documents multi-pages ou
                les mises en page complexes. Preserve la qualite et les polices.
              </li>
              <li>
                <strong>JPEG</strong> : acceptable pour l&apos;impression a
                domicile, mais la compression avec perte peut etre visible sur
                les tirages professionnels. Utilisez une qualite de 95-100%.
              </li>
              <li>
                <strong>PNG</strong> : bon pour les images avec des aplats de
                couleur et de la transparence, mais les fichiers sont lourds.
              </li>
            </ul>
            <p className="text-gray-600">
              Convertissez vos images en TIFF avec notre{" "}
              <Link
                href="/convertir-jpg-en-tiff"
                className="text-blue-600 hover:text-blue-800"
              >
                outil de conversion JPG vers TIFF
              </Link>
              .
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              CMYK vs RGB : quelle difference ?
            </h2>
            <p className="text-gray-600 mb-4">
              Les ecrans et les imprimantes n&apos;utilisent pas le meme
              systeme de couleurs :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-3 mb-4">
              <li>
                <strong>RGB</strong> (Rouge, Vert, Bleu) : modele utilise par
                les ecrans. Les couleurs sont creees par la lumiere. Plus de
                couleurs disponibles, gamme etendue.
              </li>
              <li>
                <strong>CMYK</strong> (Cyan, Magenta, Jaune, Noir) : modele
                utilise par les imprimantes. Les couleurs sont creees par des
                pigments. Gamme plus reduite que le RGB.
              </li>
            </ul>
            <p className="text-gray-600 mb-4">
              Consequence pratique : certaines couleurs vives (bleus electriques,
              verts fluo) que vous voyez a l&apos;ecran en RGB ne peuvent pas
              etre reproduites a l&apos;identique en impression CMYK. Elles
              apparaitront plus ternes.
            </p>
            <p className="text-gray-600">
              Conseil : demandez a votre imprimeur s&apos;il a besoin de
              fichiers en CMYK. Pour une impression a domicile, le RGB convient
              generalement.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Checklist avant impression
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                Resolution de <strong>300 DPI</strong> minimum
              </li>
              <li>
                Nombre de pixels suffisant pour la taille d&apos;impression
                souhaitee
              </li>
              <li>
                Format <strong>TIFF</strong> ou <strong>PDF</strong> pour
                l&apos;impression professionnelle
              </li>
              <li>
                Fond perdu (bleed) de 3 a 5 mm si l&apos;image va jusqu&apos;au
                bord
              </li>
              <li>
                Espace colorimetrique adapte (CMYK si demande par
                l&apos;imprimeur)
              </li>
              <li>
                Verifier le rendu des couleurs sur une epreuve avant le tirage
                final
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Guides associes
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/redimensionner-image-pour-cv"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Redimensionner une photo pour CV
                </h3>
                <p className="text-sm text-gray-600">
                  Preparer une photo aux dimensions standard 35x45mm.
                </p>
              </Link>
              <Link
                href="/convertir-image-en-pdf-pour-impression"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Convertir images en PDF pour impression
                </h3>
                <p className="text-sm text-gray-600">
                  Combiner vos images en un seul PDF haute qualite.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
