import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Compresser une Image pour l'Envoyer par Email [2026] | heictojpg.fr",
  description:
    "Comment compresser une image pour l'envoyer par email sans dépasser les limites de pièce jointe. Guide pratique : Gmail (25 Mo), Outlook (20 Mo), Yahoo (10 Mo). Outil gratuit en ligne.",
  keywords: [
    "compresser image pour email",
    "réduire taille image email",
    "compresser photo email",
    "pièce jointe trop lourde",
    "compresser image en ligne",
  ],
  openGraph: {
    type: "website",
    title: "Compresser une Image pour l'Envoyer par Email [2026]",
    description:
      "Guide pratique pour compresser vos images avant envoi par email. Respectez les limites Gmail, Outlook et Yahoo.",
    url: "https://heictojpg.fr/compresser-image-pour-email",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Compresser une Image pour l'Envoyer par Email [2026]",
    description:
      "Guide pratique pour compresser vos images avant envoi par email. Respectez les limites Gmail, Outlook et Yahoo.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/compresser-image-pour-email",
  },
};

export default function CompresserImagePourEmail() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment compresser une image pour l'envoyer par email",
    description:
      "3 étapes pour compresser vos images et respecter les limites de pièce jointe des messageries email.",
    totalTime: "PT2M",
    step: [
      {
        "@type": "HowToStep",
        name: "Redimensionner l'image à 1920px maximum",
        text: "Utilisez un outil de redimensionnement pour réduire la résolution de votre image à 1920px de large maximum. Pour un email, une résolution Full HD est largement suffisante.",
        url: "https://heictojpg.fr/compresser-image-pour-email#etape-1",
      },
      {
        "@type": "HowToStep",
        name: "Compresser l'image à 70-80% de qualité",
        text: "Compressez votre image en réglant la qualité entre 70% et 80%. La différence visuelle est imperceptible mais le gain de taille est considérable.",
        url: "https://heictojpg.fr/compresser-image-pour-email#etape-2",
      },
      {
        "@type": "HowToStep",
        name: "Choisir le bon format : JPG plutôt que PNG",
        text: "Enregistrez votre image au format JPG plutôt que PNG. Le JPG est bien plus léger pour les photos et parfaitement adapté à l'envoi par email.",
        url: "https://heictojpg.fr/compresser-image-pour-email#etape-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Compresser une image pour email",
              href: "/compresser-image-pour-email",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment compresser une image pour l&apos;envoyer par email
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Votre pièce jointe est trop lourde et votre email ne part pas ?
          Les messageries imposent des limites strictes sur la taille des
          fichiers joints. Découvrez comment compresser vos images rapidement
          pour les envoyer par email sans problème.
        </p>
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Compressez vos images en un clic
          </h3>
          <p className="text-gray-600 mb-4">
            Utilisez notre outil gratuit pour compresser vos images directement
            dans votre navigateur. Aucune inscription requise, traitement 100%
            local.
          </p>
          <Link
            href="/compresser-image"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Compresser mes images maintenant
          </Link>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Les limites de taille des pièces jointes par messagerie
            </h2>
            <p className="text-gray-600 mb-4">
              Chaque service de messagerie impose une limite maximale pour les
              pièces jointes. Si votre fichier dépasse cette limite, l&apos;email
              ne pourra tout simplement pas être envoyé. Voici les limites des
              principaux fournisseurs en 2026 :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Messagerie
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Limite par pièce jointe
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Remarque
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border-b p-3 font-medium">Gmail</td>
                    <td className="border-b p-3">25 Mo</td>
                    <td className="border-b p-3">
                      Au-delà, Gmail propose un lien Google Drive
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Outlook / Hotmail</td>
                    <td className="border-b p-3">20 Mo</td>
                    <td className="border-b p-3">
                      Peut proposer OneDrive pour les fichiers volumineux
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Yahoo Mail</td>
                    <td className="border-b p-3">25 Mo</td>
                    <td className="border-b p-3">
                      Limite stricte, pas d&apos;alternative cloud intégrée
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Orange / Wanadoo</td>
                    <td className="border-b p-3">10 Mo</td>
                    <td className="border-b p-3">
                      Limite la plus restrictive des fournisseurs français
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Free (Zimbra)</td>
                    <td className="border-b p-3">10 Mo</td>
                    <td className="border-b p-3">
                      Pensez à compresser fortement vos images
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              Attention : ces limites s&apos;appliquent à la taille totale de
              toutes les pièces jointes combinées, pas à chaque fichier
              individuellement.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 1 : Redimensionner l&apos;image à 1920px maximum
            </h2>
            <p className="text-gray-600 mb-4">
              Les photos prises avec un smartphone moderne font souvent 4000 à
              8000 pixels de large. Pour un email, c&apos;est beaucoup trop. Une
              résolution de <strong>1920px de large</strong> (Full HD) est
              largement suffisante pour que votre correspondant puisse voir
              l&apos;image en détail sur son écran.
            </p>
            <p className="text-gray-600 mb-4">
              En réduisant la résolution de 4000px à 1920px, vous divisez déjà
              la taille du fichier par <strong>3 à 4</strong>.
            </p>
            <p className="text-gray-600">
              Utilisez notre{" "}
              <Link
                href="/redimensionner-image"
                className="text-blue-600 hover:text-blue-800"
              >
                outil de redimensionnement d&apos;image
              </Link>{" "}
              pour ajuster la taille de vos photos en quelques secondes.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 2 : Compresser l&apos;image à 70-80% de qualité
            </h2>
            <p className="text-gray-600 mb-4">
              La compression JPEG permet de réduire considérablement le poids
              d&apos;une image. Un réglage de qualité entre{" "}
              <strong>70% et 80%</strong> offre le meilleur compromis entre
              qualité visuelle et taille de fichier.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                <strong>Qualité 100%</strong> : fichier volumineux, aucune perte
                visible
              </li>
              <li>
                <strong>Qualité 80%</strong> : réduction de 50-60% de la taille,
                perte quasi invisible
              </li>
              <li>
                <strong>Qualité 70%</strong> : réduction de 60-70%, légère perte
                sur les détails fins
              </li>
              <li>
                <strong>Qualité 50%</strong> : réduction massive, perte visible
                sur les zooms
              </li>
            </ul>
            <p className="text-gray-600">
              Pour un envoi par email, 70-80% est le réglage idéal. Votre
              correspondant ne verra aucune différence à l&apos;écran.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 3 : Choisir le bon format (JPG plutôt que PNG)
            </h2>
            <p className="text-gray-600 mb-4">
              Le format de votre image a un impact majeur sur sa taille :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                <strong>JPG</strong> : idéal pour les photos, compression avec
                perte, fichiers légers (200 Ko - 1 Mo pour une photo)
              </li>
              <li>
                <strong>PNG</strong> : idéal pour les captures d&apos;écran et
                logos, sans perte, fichiers 3 à 5 fois plus lourds qu&apos;un
                JPG
              </li>
              <li>
                <strong>HEIC</strong> : format Apple, excellente compression
                mais incompatible avec certains systèmes
              </li>
            </ul>
            <p className="text-gray-600">
              Pour un envoi par email, le <strong>JPG est le meilleur choix</strong>.
              Il est universel, léger et parfaitement adapté aux photos. Si vous
              avez des images PNG, vous pouvez les{" "}
              <Link
                href="/convertir-png-en-jpg"
                className="text-blue-600 hover:text-blue-800"
              >
                convertir en JPG
              </Link>{" "}
              pour réduire leur taille.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Exemple concret : une photo de 5 Mo réduite à 300 Ko
            </h2>
            <p className="text-gray-600 mb-4">
              Prenons l&apos;exemple d&apos;une photo prise avec un iPhone 16 :
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                <strong>Photo originale</strong> : 4032 x 3024 px, format HEIC,{" "}
                <strong>5 Mo</strong>
              </li>
              <li>
                <strong>Après redimensionnement</strong> à 1920 x 1440 px :{" "}
                <strong>2 Mo</strong>
              </li>
              <li>
                <strong>Après compression</strong> à 75% en JPG :{" "}
                <strong>300 Ko</strong>
              </li>
            </ol>
            <p className="text-gray-600 mt-4">
              Résultat : vous pouvez envoyer{" "}
              <strong>plus de 30 photos</strong> dans un seul email Gmail, au
              lieu de 5 avec les fichiers originaux.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Astuces supplémentaires pour alléger vos emails
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                Si vous envoyez <strong>plusieurs photos</strong>, compressez-les
                dans un fichier ZIP pour gagner encore quelques pourcents.
              </li>
              <li>
                Pour les <strong>documents scannés</strong>, convertissez-les en
                PDF plutôt qu&apos;en image : le PDF est généralement plus léger.
              </li>
              <li>
                Si la qualité n&apos;est pas critique (aperçu, référence
                rapide), réduisez la qualité à <strong>50-60%</strong> pour des
                fichiers encore plus petits.
              </li>
              <li>
                Pensez à <strong>supprimer les métadonnées EXIF</strong> de vos
                photos (localisation, modèle d&apos;appareil) pour gagner
                quelques Ko et protéger votre vie privée.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conclusion
            </h2>
            <p className="text-gray-600 mb-4">
              Compresser une image pour l&apos;envoyer par email est simple et
              rapide en suivant ces 3 étapes : redimensionner, compresser et
              choisir le bon format. Avec notre outil{" "}
              <Link
                href="/compresser-image"
                className="text-blue-600 hover:text-blue-800"
              >
                de compression d&apos;image
              </Link>
              , tout se fait directement dans votre navigateur, gratuitement et
              sans inscription.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Guides associés
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/reduire-taille-photo-pour-email"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Réduire la taille d&apos;une photo
                </h3>
                <p className="text-sm text-gray-600">
                  Guide pour réduire le poids des photos iPhone pour l&apos;email.
                </p>
              </Link>
              <Link
                href="/convertir-heic-en-jpg-sur-iphone"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Convertir HEIC en JPG sur iPhone
                </h3>
                <p className="text-sm text-gray-600">
                  Convertissez vos photos HEIC avant de les envoyer par email.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
