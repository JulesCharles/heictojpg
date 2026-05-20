import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title:
    "Photo d'Identité en Ligne Gratuit - Recadrer aux Normes | heictojpg.fr",
  description:
    "Créez votre photo d'identité en ligne gratuitement aux normes françaises : 35x45mm, 600x800px minimum, fond uni clair, 300 DPI. Recadrez et redimensionnez votre photo.",
  keywords: [
    "photo identité en ligne",
    "photo identité gratuit",
    "recadrer photo identité",
    "photo identité normes françaises",
    "photo identité 35x45mm",
    "photo identité 600x800",
  ],
  openGraph: {
    type: "website",
    title: "Photo d'Identité en Ligne Gratuit - Recadrer aux Normes",
    description:
      "Créez votre photo d'identité en ligne aux normes françaises. Recadrez, redimensionnez et ajustez le DPI gratuitement.",
    url: "https://heictojpg.fr/photo-identite-en-ligne",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Photo d'Identité en Ligne Gratuit - Recadrer aux Normes",
    description:
      "Créez votre photo d'identité en ligne aux normes françaises. Recadrez, redimensionnez et ajustez le DPI gratuitement.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/photo-identite-en-ligne",
  },
};

export default function PhotoIdentiteEnLigne() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment faire une photo d'identité en ligne aux normes françaises",
    description:
      "3 étapes pour créer une photo d'identité conforme aux normes françaises : recadrer, redimensionner et ajuster le DPI.",
    totalTime: "PT5M",
    step: [
      {
        "@type": "HowToStep",
        name: "Recadrer la photo au format 35x45mm",
        text: "Utilisez un outil de recadrage pour découper votre photo au ratio 35x45mm (rapport 7:9). Le visage doit occuper 70 à 80% de la hauteur de la photo, du menton au sommet du crâne.",
        url: "https://heictojpg.fr/photo-identite-en-ligne#etape-1",
      },
      {
        "@type": "HowToStep",
        name: "Redimensionner à 600x800 pixels minimum",
        text: "Redimensionnez votre photo recadrée à au moins 600x800 pixels pour garantir une qualité d'impression suffisante. La résolution idéale est 827x1063 pixels pour un rendu optimal à 300 DPI.",
        url: "https://heictojpg.fr/photo-identite-en-ligne#etape-2",
      },
      {
        "@type": "HowToStep",
        name: "Vérifier le DPI et exporter à 300 DPI",
        text: "Assurez-vous que votre photo est enregistrée à 300 DPI (points par pouce) pour une impression nette. Exportez au format JPG avec une qualité de 90% minimum.",
        url: "https://heictojpg.fr/photo-identite-en-ligne#etape-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Photo d'identité en ligne",
              href: "/photo-identite-en-ligne",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Photo d&apos;identité en ligne : recadrer aux normes françaises
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Besoin d&apos;une photo d&apos;identité pour un passeport, une carte
          d&apos;identité ou un permis de conduire ? Vous pouvez la préparer
          vous-même en respectant les normes officielles françaises. Découvrez
          les dimensions requises et comment recadrer votre photo aux bonnes
          proportions.
        </p>
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Recadrez et redimensionnez votre photo d&apos;identité
          </h3>
          <p className="text-gray-600 mb-4">
            Utilisez nos outils gratuits pour recadrer votre photo au bon
            format et la redimensionner aux dimensions requises. Tout se passe
            dans votre navigateur.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/recadrer-image"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Recadrer ma photo
            </Link>
            <Link
              href="/redimensionner-image"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Redimensionner ma photo
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Les normes françaises pour la photo d&apos;identité
            </h2>
            <p className="text-gray-600 mb-4">
              En France, les photos d&apos;identité doivent répondre à des
              critères stricts définis par le Ministère de l&apos;Intérieur.
              Voici les exigences principales :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Critère
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Norme requise
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border-b p-3 font-medium">
                      Dimensions physiques
                    </td>
                    <td className="border-b p-3">
                      <strong>35 x 45 mm</strong> (largeur x hauteur)
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">
                      Résolution minimale
                    </td>
                    <td className="border-b p-3">
                      <strong>600 x 800 pixels</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">
                      Résolution recommandée
                    </td>
                    <td className="border-b p-3">
                      <strong>827 x 1063 pixels</strong> (300 DPI)
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">DPI</td>
                    <td className="border-b p-3">
                      <strong>300 DPI</strong> (points par pouce)
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Fond</td>
                    <td className="border-b p-3">
                      <strong>Uni et clair</strong> (gris clair ou bleu clair,
                      pas blanc pur)
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">
                      Taille du visage
                    </td>
                    <td className="border-b p-3">
                      <strong>32 à 36 mm</strong> de hauteur (du menton au
                      sommet du crâne)
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Expression</td>
                    <td className="border-b p-3">
                      Neutre, bouche fermée, yeux ouverts
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Format fichier</td>
                    <td className="border-b p-3">
                      <strong>JPG</strong> (JPEG), qualité 90% minimum
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 1 : Recadrer la photo au format 35x45mm
            </h2>
            <p className="text-gray-600 mb-4">
              La première étape consiste à recadrer votre photo au bon ratio.
              Le format 35x45mm correspond à un{" "}
              <strong>rapport 7:9</strong> (largeur:hauteur).
            </p>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Conseils pour un bon cadrage :
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                Le <strong>visage</strong> doit occuper environ 70 à 80% de la
                hauteur de la photo
              </li>
              <li>
                Le <strong>menton</strong> doit être entièrement visible, avec
                un petit espace en dessous
              </li>
              <li>
                Le <strong>sommet du crâne</strong> (ou des cheveux) doit être
                visible avec un petit espace au-dessus
              </li>
              <li>
                Le visage doit être <strong>centré horizontalement</strong>
              </li>
              <li>
                Regard dirigé vers l&apos;objectif,{" "}
                <strong>face à l&apos;appareil</strong>
              </li>
            </ul>
            <p className="text-gray-600">
              Utilisez notre{" "}
              <Link
                href="/recadrer-image"
                className="text-blue-600 hover:text-blue-800"
              >
                outil de recadrage d&apos;image
              </Link>{" "}
              pour découper votre photo au ratio exact 7:9.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 2 : Redimensionner à 600x800 pixels minimum
            </h2>
            <p className="text-gray-600 mb-4">
              Une fois votre photo recadrée au bon ratio, vous devez la
              redimensionner aux bonnes dimensions en pixels. Voici les options :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                <strong>Minimum requis</strong> : 600 x 800 pixels (suffisant
                pour les démarches en ligne)
              </li>
              <li>
                <strong>Recommandé</strong> : 827 x 1063 pixels (correspond
                exactement à 35x45mm en 300 DPI)
              </li>
              <li>
                <strong>Maximum</strong> : pas de limite haute, mais inutile de
                dépasser 1200 x 1543 pixels
              </li>
            </ul>
            <p className="text-gray-600 mb-4">
              Si votre photo est trop grande (ce qui est le cas avec les
              smartphones modernes), il faut la réduire. Si elle est trop
              petite, il faudra reprendre la photo avec une meilleure
              résolution.
            </p>
            <p className="text-gray-600">
              Notre{" "}
              <Link
                href="/redimensionner-image"
                className="text-blue-600 hover:text-blue-800"
              >
                outil de redimensionnement
              </Link>{" "}
              vous permet de spécifier les dimensions exactes en pixels.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 3 : Vérifier le DPI et exporter
            </h2>
            <p className="text-gray-600 mb-4">
              Le DPI (dots per inch, ou points par pouce) détermine la qualité
              d&apos;impression de votre photo. Pour une photo d&apos;identité,
              la norme est de <strong>300 DPI</strong>.
            </p>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Comment obtenir 300 DPI :
            </h3>
            <p className="text-gray-600 mb-4">
              Si votre photo mesure 35x45mm et que vous l&apos;exportez en
              827x1063 pixels, elle sera automatiquement à 300 DPI. C&apos;est
              une simple question de rapport entre les dimensions physiques et
              le nombre de pixels :
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 text-sm font-mono">
                DPI = pixels / (mm / 25.4)
              </p>
              <p className="text-gray-600 text-sm mt-2">
                827 pixels / (35mm / 25.4) = 827 / 1.378 = ~600 DPI en largeur
              </p>
              <p className="text-gray-600 text-sm">
                Pour exactement 300 DPI : 35mm = 413 pixels, 45mm = 531 pixels
                (minimum absolu)
              </p>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Conseils pour l&apos;export :
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Exportez au format <strong>JPG</strong> avec une qualité de 90%
                minimum
              </li>
              <li>
                Vérifiez que le fichier pèse entre{" "}
                <strong>50 Ko et 2 Mo</strong> (exigence de la plupart des
                plateformes en ligne)
              </li>
              <li>
                Si votre photo est en HEIC (iPhone), convertissez-la en JPG
                avec notre{" "}
                <Link
                  href="/"
                  className="text-blue-600 hover:text-blue-800"
                >
                  convertisseur HEIC vers JPG
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Les erreurs courantes à éviter
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                <strong>Fond non conforme</strong> : évitez le blanc pur (trop
                contrasté) et les fonds colorés. Privilégiez un gris clair ou
                bleu clair uni, sans motifs ni ombres.
              </li>
              <li>
                <strong>Visage trop petit ou trop grand</strong> : le visage
                doit mesurer entre 32 et 36mm de hauteur sur la photo imprimée.
                Trop loin ou trop près de l&apos;objectif causera un refus.
              </li>
              <li>
                <strong>Photo floue ou pixelisée</strong> : assurez-vous que la
                résolution est suffisante (600x800px minimum). Ne zoomez pas
                numériquement sur une photo existante.
              </li>
              <li>
                <strong>Ombres sur le visage</strong> : utilisez un éclairage
                frontal et uniforme. Evitez les contre-jours et les flashs
                directs qui créent des ombres dures.
              </li>
              <li>
                <strong>Accessoires interdits</strong> : pas de lunettes de
                soleil, pas de chapeau, pas de foulard couvrant le visage (sauf
                motif religieux sous conditions).
              </li>
              <li>
                <strong>Mauvais format de fichier</strong> : utilisez toujours
                le JPG. Les fichiers PNG, HEIC ou WebP peuvent être refusés
                par les plateformes de demande en ligne.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Prendre la photo chez soi : conseils pratiques
            </h2>
            <p className="text-gray-600 mb-4">
              Vous pouvez tout à fait prendre votre photo d&apos;identité
              vous-même avec un smartphone. Voici comment obtenir un résultat
              conforme :
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                <strong>Trouvez un mur uni et clair</strong> : un mur gris
                clair ou blanc cassé est idéal. Eloignez-vous du mur d&apos;environ
                50 cm pour éviter les ombres.
              </li>
              <li>
                <strong>Eclairage</strong> : placez-vous face à une fenêtre
                pour un éclairage naturel et uniforme. Evitez le flash.
              </li>
              <li>
                <strong>Position</strong> : utilisez un trépied ou demandez à
                quelqu&apos;un de vous photographier. Le téléphone doit être à
                hauteur des yeux, à environ 1 à 1,5 mètre de distance.
              </li>
              <li>
                <strong>Regardez droit</strong> : fixez l&apos;objectif,
                expression neutre, bouche fermée, yeux ouverts.
              </li>
              <li>
                <strong>Prenez plusieurs photos</strong> : vous pourrez choisir
                la meilleure et la recadrer ensuite.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Où utiliser votre photo d&apos;identité numérique
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>France Identité</strong> : l&apos;application
                officielle pour les demandes de carte d&apos;identité et
                passeport
              </li>
              <li>
                <strong>ANTS</strong> : pour les demandes de permis de conduire
                et carte grise
              </li>
              <li>
                <strong>Photo sur planche</strong> : imprimez 4 ou 8 photos sur
                une planche au format 10x15cm pour les photomatons
              </li>
              <li>
                <strong>Visa</strong> : certaines ambassades acceptent les
                photos numériques au format français
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conclusion
            </h2>
            <p className="text-gray-600 mb-4">
              Créer une photo d&apos;identité conforme aux normes françaises
              est tout à fait possible depuis chez soi avec un smartphone et
              les bons outils. Recadrez votre photo au format 35x45mm avec
              notre{" "}
              <Link
                href="/recadrer-image"
                className="text-blue-600 hover:text-blue-800"
              >
                outil de recadrage
              </Link>
              , redimensionnez-la à 600x800 pixels minimum avec notre{" "}
              <Link
                href="/redimensionner-image"
                className="text-blue-600 hover:text-blue-800"
              >
                outil de redimensionnement
              </Link>
              , et exportez en JPG à 300 DPI. Tous nos outils sont gratuits et
              fonctionnent directement dans votre navigateur.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Guides associés
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
                  Réduisez la taille de vos images pour les envoyer par email.
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
                  Convertissez vos photos iPhone au format JPG compatible.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
