import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir HEIC pour WordPress [2026] | heictojpg.fr",
  description:
    "WordPress ne supporte pas le format HEIC. Decouvrez comment convertir vos photos HEIC en JPG ou WebP pour les utiliser sur votre site WordPress. Outil gratuit en ligne.",
  keywords: [
    "convertir heic wordpress",
    "heic wordpress",
    "wordpress heic non supporte",
    "heic en jpg wordpress",
    "heic en webp wordpress",
  ],
  openGraph: {
    type: "website",
    title: "Convertir HEIC pour WordPress [2026]",
    description:
      "WordPress ne supporte pas le HEIC. Convertissez vos photos en JPG ou WebP pour les utiliser sur votre site.",
    url: "https://heictojpg.fr/convertir-heic-pour-wordpress",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Convertir HEIC pour WordPress [2026]",
    description:
      "WordPress ne supporte pas le HEIC. Convertissez vos photos en JPG ou WebP pour les utiliser sur votre site.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-heic-pour-wordpress",
  },
};

export default function ConvertirHeicPourWordpress() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Pourquoi WordPress ne supporte pas le format HEIC ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WordPress ne supporte pas le HEIC car ce format d'Apple n'est pas un standard web universel. Les navigateurs web (Chrome, Firefox, Edge) ne peuvent pas afficher les fichiers HEIC directement. Il faut les convertir en JPEG ou WebP avant de les uploader sur WordPress.",
        },
      },
      {
        "@type": "Question",
        name: "Quel format choisir pour convertir mes HEIC : JPG ou WebP ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pour WordPress, le WebP est le meilleur choix en 2026 : il offre une meilleure compression que le JPEG avec une qualite equivalente, et WordPress le supporte nativement depuis la version 5.8. Le JPEG reste un bon choix si vous avez besoin d'une compatibilite maximale.",
        },
      },
      {
        "@type": "Question",
        name: "Comment convertir un fichier HEIC en JPG en ligne ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Utilisez un outil en ligne gratuit comme heictojpg.fr : deposez vos fichiers HEIC, ils sont convertis instantanement en JPG ou WebP directement dans votre navigateur, sans rien installer.",
        },
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Convertir HEIC pour WordPress",
              href: "/convertir-heic-pour-wordpress",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Convertir HEIC pour WordPress : le guide complet
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Vous essayez d&apos;uploader une photo iPhone sur WordPress et
          obtenez une erreur ? C&apos;est normal : WordPress ne supporte pas
          le format HEIC. Decouvrez comment convertir vos photos rapidement
          pour les utiliser sur votre site.
        </p>
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Convertissez vos HEIC en un clic
          </h3>
          <p className="text-gray-600 mb-4">
            Transformez vos photos iPhone en JPG ou WebP directement dans votre
            navigateur. Gratuit, rapide et sans inscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/convertir-heic-en-jpg"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Convertir HEIC en JPG
            </Link>
            <Link
              href="/convertir-heic-en-webp"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Convertir HEIC en WebP
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Pourquoi WordPress refuse les fichiers HEIC ?
            </h2>
            <p className="text-gray-600 mb-4">
              Le format <strong>HEIC</strong> (High Efficiency Image Container)
              est le format photo par defaut des iPhone depuis iOS 11. Il offre
              une excellente compression, mais pose un probleme majeur pour le
              web :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                <strong>WordPress bloque l&apos;upload</strong> : le HEIC ne
                fait pas partie des types MIME autorises par defaut
              </li>
              <li>
                <strong>Les navigateurs ne l&apos;affichent pas</strong> :
                Chrome, Firefox et Edge ne supportent pas le HEIC nativement
              </li>
              <li>
                <strong>Pas de standard web</strong> : contrairement au JPEG et
                au WebP, le HEIC n&apos;est pas un format web universel
              </li>
            </ul>
            <p className="text-gray-600">
              Meme si des plugins WordPress permettent d&apos;autoriser
              l&apos;upload de HEIC, les images ne pourront{" "}
              <strong>pas etre affichees</strong> dans les navigateurs de vos
              visiteurs. La conversion est donc indispensable.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              HEIC vers JPG ou HEIC vers WebP : que choisir ?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Critere
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      HEIC &rarr; JPG
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      HEIC &rarr; WebP
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border-b p-3 font-medium">Compatibilite WordPress</td>
                    <td className="border-b p-3">Toutes versions</td>
                    <td className="border-b p-3">WordPress 5.8+</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Taille du fichier</td>
                    <td className="border-b p-3">Moyen</td>
                    <td className="border-b p-3">25-35% plus leger</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Qualite visuelle</td>
                    <td className="border-b p-3">Excellente</td>
                    <td className="border-b p-3">Excellente</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Compatibilite navigateur</td>
                    <td className="border-b p-3">100%</td>
                    <td className="border-b p-3">97%+</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Recommandation</td>
                    <td className="border-b p-3">Valeur sure</td>
                    <td className="border-b p-3">Choix optimal 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 mt-4">
              Notre recommandation : privilegiez le{" "}
              <strong>WebP</strong> si votre WordPress est en version 5.8 ou
              superieure (ce qui est le cas de la grande majorite des sites en
              2026). Sinon, optez pour le JPG.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Comment convertir vos HEIC pour WordPress
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-4">
              <li>
                <strong>Rendez-vous sur notre outil de conversion</strong> :{" "}
                <Link
                  href="/convertir-heic-en-jpg"
                  className="text-blue-600 hover:text-blue-800"
                >
                  HEIC vers JPG
                </Link>{" "}
                ou{" "}
                <Link
                  href="/convertir-heic-en-webp"
                  className="text-blue-600 hover:text-blue-800"
                >
                  HEIC vers WebP
                </Link>
              </li>
              <li>
                <strong>Deposez vos fichiers HEIC</strong> : vous pouvez en
                convertir plusieurs a la fois
              </li>
              <li>
                <strong>Telechargez les fichiers convertis</strong> : ils sont
                prets a etre uploades sur WordPress
              </li>
              <li>
                <strong>Uploadez dans WordPress</strong> : via Medias &gt;
                Ajouter ou directement dans l&apos;editeur de blocs
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Astuce : configurer l&apos;iPhone pour eviter le HEIC
            </h2>
            <p className="text-gray-600 mb-4">
              Si vous publiez regulierement des photos iPhone sur WordPress,
              vous pouvez configurer votre iPhone pour qu&apos;il prenne
              directement des photos en JPEG :
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4">
              <li>
                Ouvrez <strong>Reglages</strong> &gt;{" "}
                <strong>Appareil photo</strong>
              </li>
              <li>
                Appuyez sur <strong>Formats</strong>
              </li>
              <li>
                Selectionnez <strong>Le plus compatible</strong> (au lieu de
                Haute efficacite)
              </li>
            </ol>
            <p className="text-gray-600">
              Attention : ce reglage augmente la taille de vos photos et
              desactive les videos 4K 60fps et les photos ProRAW. La
              conversion a posteriori avec notre outil reste la solution la
              plus flexible.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Guides associes
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/convertir-photo-iphone-pour-pc"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Convertir photos iPhone pour PC
                </h3>
                <p className="text-sm text-gray-600">
                  Transferer et convertir vos photos HEIC pour Windows.
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
                  Guide complet d&apos;optimisation d&apos;images WordPress.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
