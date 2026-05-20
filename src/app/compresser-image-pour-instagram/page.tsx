import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Compresser une Image pour Instagram [2026] | heictojpg.fr",
  description:
    "Comment compresser et optimiser vos images pour Instagram : resolution 1080px, format JPG qualite 90%+, eviter la compression agressive d'Instagram. Guide complet.",
  keywords: [
    "compresser image instagram",
    "taille image instagram",
    "qualite photo instagram",
    "resolution instagram",
    "optimiser photo instagram",
  ],
  openGraph: {
    type: "website",
    title: "Compresser une Image pour Instagram [2026]",
    description:
      "Guide pour optimiser vos photos Instagram : resolution, qualite et format ideal pour eviter la compression agressive.",
    url: "https://heictojpg.fr/compresser-image-pour-instagram",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Compresser une Image pour Instagram [2026]",
    description:
      "Guide pour optimiser vos photos Instagram : resolution, qualite et format ideal pour eviter la compression agressive.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/compresser-image-pour-instagram",
  },
};

export default function CompresserImagePourInstagram() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment compresser une image pour Instagram",
    description:
      "Etapes pour optimiser vos photos avant de les publier sur Instagram et eviter la compression agressive de la plateforme.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Redimensionner a 1080 pixels de large",
        text: "Instagram affiche les photos a 1080px de large maximum. Uploadez une image de exactement 1080px pour eviter le redimensionnement et la perte de qualite.",
        url: "https://heictojpg.fr/compresser-image-pour-instagram#etape-1",
      },
      {
        "@type": "HowToStep",
        name: "Exporter en JPEG qualite 90%+",
        text: "Exportez votre image en JPEG avec une qualite de 90% ou plus. Instagram recompresse toutes les images, donc il faut partir d'une qualite elevee.",
        url: "https://heictojpg.fr/compresser-image-pour-instagram#etape-2",
      },
      {
        "@type": "HowToStep",
        name: "Respecter les ratios d'aspect",
        text: "Utilisez les ratios acceptes par Instagram : 1:1 (carre), 4:5 (portrait) ou 1.91:1 (paysage) pour eviter le recadrage automatique.",
        url: "https://heictojpg.fr/compresser-image-pour-instagram#etape-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Compresser image pour Instagram",
              href: "/compresser-image-pour-instagram",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment compresser une image pour Instagram
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Vos photos perdent en qualite quand vous les publiez sur Instagram ?
          C&apos;est normal : Instagram compresse agressivement toutes les
          images. Decouvrez comment preparer vos photos pour minimiser cette
          perte de qualite.
        </p>
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Optimisez vos photos pour Instagram
          </h3>
          <p className="text-gray-600 mb-4">
            Compressez et redimensionnez vos images aux dimensions exactes
            d&apos;Instagram. Gratuit, sans inscription, traitement local.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/compresser-image"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Compresser mes images
            </Link>
            <Link
              href="/redimensionner-image-pour-instagram"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Redimensionner pour Instagram
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Pourquoi Instagram degrade la qualite de vos photos ?
            </h2>
            <p className="text-gray-600 mb-4">
              Instagram traite des milliards d&apos;images. Pour reduire les
              couts de stockage et accelerer le chargement, la plateforme{" "}
              <strong>recompresse systematiquement</strong> chaque image
              uploadee :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Les images sont compressees en <strong>JPEG qualite
                environ 70-75%</strong>
              </li>
              <li>
                Les images trop grandes sont{" "}
                <strong>redimensionnees</strong> (perte de qualite
                supplementaire)
              </li>
              <li>
                Les images avec un ratio non standard sont{" "}
                <strong>recadrees automatiquement</strong>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Les dimensions recommandees pour Instagram
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Type de publication
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Ratio
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Dimensions ideales
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border-b p-3 font-medium">Post carre</td>
                    <td className="border-b p-3">1:1</td>
                    <td className="border-b p-3">1080 x 1080 px</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Post portrait</td>
                    <td className="border-b p-3">4:5</td>
                    <td className="border-b p-3">1080 x 1350 px</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Post paysage</td>
                    <td className="border-b p-3">1.91:1</td>
                    <td className="border-b p-3">1080 x 566 px</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Story / Reel</td>
                    <td className="border-b p-3">9:16</td>
                    <td className="border-b p-3">1080 x 1920 px</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Photo de profil</td>
                    <td className="border-b p-3">1:1</td>
                    <td className="border-b p-3">320 x 320 px</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              Conseil : le format <strong>portrait 4:5</strong> (1080 x 1350 px)
              occupe le plus d&apos;espace dans le fil d&apos;actualite et
              genere le plus d&apos;engagement.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 1 : Redimensionner a exactement 1080 px de large
            </h2>
            <p className="text-gray-600 mb-4">
              La regle d&apos;or : uploadez toujours une image de{" "}
              <strong>exactement 1080 pixels de large</strong>. Si votre image
              est plus grande, Instagram la redimensionnera et la
              recompressera, causant une double perte de qualite.
            </p>
            <p className="text-gray-600 mb-4">
              Si votre image est plus petite que 1080px, Instagram
              l&apos;agrandira, ce qui la rendra floue. C&apos;est encore pire.
            </p>
            <p className="text-gray-600">
              Utilisez notre{" "}
              <Link
                href="/redimensionner-image-pour-instagram"
                className="text-blue-600 hover:text-blue-800"
              >
                outil de redimensionnement pour Instagram
              </Link>{" "}
              pour obtenir les dimensions exactes.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 2 : Exporter en JPEG qualite 90%+
            </h2>
            <p className="text-gray-600 mb-4">
              Comme Instagram va recompresser votre image, il faut partir
              d&apos;une qualite elevee pour que le resultat final reste
              acceptable :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                Exportez en <strong>JPEG qualite 90-95%</strong> : c&apos;est
                le sweet spot avant la compression Instagram
              </li>
              <li>
                Evitez le 100% : le fichier sera plus lourd sans gain visible
                apres compression Instagram
              </li>
              <li>
                Le <strong>PNG est deconseille</strong> : Instagram le convertit
                en JPEG, ce qui ajoute une etape de degradation
              </li>
            </ul>
            <p className="text-gray-600">
              Compressez vos photos avec notre{" "}
              <Link
                href="/compresser-image"
                className="text-blue-600 hover:text-blue-800"
              >
                outil de compression
              </Link>{" "}
              en reglant la qualite a 90%.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 3 : Respecter les ratios d&apos;aspect
            </h2>
            <p className="text-gray-600 mb-4">
              Si votre image n&apos;a pas un ratio supporte par Instagram, la
              plateforme la <strong>recadrera automatiquement</strong>, ce qui
              peut couper des elements importants de votre composition.
            </p>
            <p className="text-gray-600 mb-4">
              Les ratios acceptes sont :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>1:1</strong> (carre) : le format classique Instagram
              </li>
              <li>
                <strong>4:5</strong> (portrait) : le format qui prend le plus
                de place dans le feed
              </li>
              <li>
                <strong>1.91:1</strong> (paysage) : le format le plus large
                accepte
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Astuces avancees pour Instagram
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                <strong>Ajoutez un leger grain</strong> : paradoxalement, un
                leger bruit/grain peut masquer les artefacts de compression
              </li>
              <li>
                <strong>Evitez les degrades subtils</strong> : la compression
                JPEG cree du banding (bandes visibles) dans les degrades doux
              </li>
              <li>
                <strong>Augmentez legerement la nettete</strong> : la
                compression reduit la nettete, un sharpen prealable compense
              </li>
              <li>
                <strong>Espace colorimetrique sRGB</strong> : Instagram
                convertit tout en sRGB, exportez directement dans cet espace
                pour eviter les shifts de couleur
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
                  Reduire le poids de vos photos pour l&apos;envoi par email.
                </p>
              </Link>
              <Link
                href="/optimiser-image-pour-wordpress"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Optimiser images pour WordPress
                </h3>
                <p className="text-sm text-gray-600">
                  Guide complet d&apos;optimisation pour WordPress.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
