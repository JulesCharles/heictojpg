import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Optimiser ses Images pour WordPress [2026] | heictojpg.fr",
  description:
    "Comment optimiser vos images pour WordPress : poids max 200 Ko, format WebP, dimensions adaptees au theme, lazy loading. Guide complet et outils gratuits en ligne.",
  keywords: [
    "optimiser image wordpress",
    "compresser image wordpress",
    "webp wordpress",
    "taille image wordpress",
    "optimisation image site web",
  ],
  openGraph: {
    type: "website",
    title: "Optimiser ses Images pour WordPress [2026]",
    description:
      "Guide complet pour optimiser vos images WordPress : poids, format, dimensions et lazy loading.",
    url: "https://heictojpg.fr/optimiser-image-pour-wordpress",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Optimiser ses Images pour WordPress [2026]",
    description:
      "Guide complet pour optimiser vos images WordPress : poids, format, dimensions et lazy loading.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/optimiser-image-pour-wordpress",
  },
};

export default function OptimiserImagePourWordpress() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment optimiser ses images pour WordPress",
    description:
      "4 etapes pour optimiser vos images WordPress : reduire le poids, convertir en WebP, adapter les dimensions et activer le lazy loading.",
    totalTime: "PT5M",
    step: [
      {
        "@type": "HowToStep",
        name: "Reduire le poids a 200 Ko maximum",
        text: "Compressez chaque image pour qu'elle ne depasse pas 200 Ko. Cela garantit un chargement rapide de vos pages WordPress.",
        url: "https://heictojpg.fr/optimiser-image-pour-wordpress#etape-1",
      },
      {
        "@type": "HowToStep",
        name: "Convertir vos images en WebP",
        text: "Le format WebP offre une compression superieure de 25 a 35% par rapport au JPEG, tout en conservant une qualite equivalente. WordPress supporte nativement le WebP depuis la version 5.8.",
        url: "https://heictojpg.fr/optimiser-image-pour-wordpress#etape-2",
      },
      {
        "@type": "HowToStep",
        name: "Adapter les dimensions au theme",
        text: "Redimensionnez vos images selon les dimensions requises par votre theme WordPress. Une image de 1200px de large suffit pour la plupart des themes.",
        url: "https://heictojpg.fr/optimiser-image-pour-wordpress#etape-3",
      },
      {
        "@type": "HowToStep",
        name: "Activer le lazy loading",
        text: "Activez le lazy loading pour que les images ne se chargent que lorsqu'elles apparaissent a l'ecran. WordPress l'active par defaut depuis la version 5.5.",
        url: "https://heictojpg.fr/optimiser-image-pour-wordpress#etape-4",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Optimiser images pour WordPress",
              href: "/optimiser-image-pour-wordpress",
            },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment optimiser ses images pour WordPress
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Des images trop lourdes ralentissent votre site WordPress, nuisent au
          SEO et font fuir vos visiteurs. Decouvrez comment optimiser vos
          images en 4 etapes simples pour un site rapide et bien reference.
        </p>
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Optimisez vos images pour le web en un clic
          </h3>
          <p className="text-gray-600 mb-4">
            Compressez et convertissez vos images en WebP directement dans votre
            navigateur. Aucune inscription requise, traitement 100% local.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/optimiser-image-web"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Optimiser mes images pour le web
            </Link>
            <Link
              href="/convertir-jpg-en-webp"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Convertir en WebP
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Pourquoi optimiser les images sur WordPress ?
            </h2>
            <p className="text-gray-600 mb-4">
              Les images representent en moyenne <strong>50 a 70%</strong> du
              poids total d&apos;une page web. Sur WordPress, un manque
              d&apos;optimisation peut avoir des consequences serieuses :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Temps de chargement rallonge</strong> : chaque seconde
                supplementaire fait perdre 7% de conversions
              </li>
              <li>
                <strong>Penalite SEO</strong> : Google prend en compte la
                vitesse de chargement (Core Web Vitals) dans son classement
              </li>
              <li>
                <strong>Consommation de bande passante</strong> : couts
                d&apos;hebergement plus eleves
              </li>
              <li>
                <strong>Mauvaise experience mobile</strong> : les utilisateurs
                sur 4G/5G subissent des chargements lents
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 1 : Viser 200 Ko maximum par image
            </h2>
            <p className="text-gray-600 mb-4">
              La regle d&apos;or pour WordPress : chaque image ne doit pas
              depasser <strong>200 Ko</strong>. C&apos;est le compromis ideal
              entre qualite visuelle et performance.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Type d&apos;image
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Poids recommande
                    </th>
                    <th className="border-b p-3 text-gray-700 font-semibold">
                      Qualite
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border-b p-3 font-medium">Image de hero / banniere</td>
                    <td className="border-b p-3">150 - 200 Ko</td>
                    <td className="border-b p-3">80-85%</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Image d&apos;article</td>
                    <td className="border-b p-3">80 - 150 Ko</td>
                    <td className="border-b p-3">75-80%</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Vignette / thumbnail</td>
                    <td className="border-b p-3">30 - 60 Ko</td>
                    <td className="border-b p-3">70-75%</td>
                  </tr>
                  <tr>
                    <td className="border-b p-3 font-medium">Logo / icone</td>
                    <td className="border-b p-3">10 - 30 Ko</td>
                    <td className="border-b p-3">PNG ou SVG</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 2 : Utiliser le format WebP
            </h2>
            <p className="text-gray-600 mb-4">
              Le <strong>WebP</strong> est le format ideal pour WordPress en
              2026. Il offre une compression superieure de 25 a 35% par rapport
              au JPEG, tout en conservant une qualite equivalente.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                <strong>Support natif</strong> : WordPress accepte le WebP
                depuis la version 5.8 (juillet 2021)
              </li>
              <li>
                <strong>Compatibilite navigateurs</strong> : 97%+ des
                navigateurs supportent le WebP en 2026
              </li>
              <li>
                <strong>Gain de poids</strong> : une image JPEG de 200 Ko ne
                pese que 130-150 Ko en WebP
              </li>
            </ul>
            <p className="text-gray-600">
              Convertissez facilement vos images en WebP avec notre{" "}
              <Link
                href="/convertir-jpg-en-webp"
                className="text-blue-600 hover:text-blue-800"
              >
                outil de conversion JPG vers WebP
              </Link>
              .
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 3 : Adapter les dimensions au theme
            </h2>
            <p className="text-gray-600 mb-4">
              Inutile d&apos;uploader une image de 4000px de large si votre
              zone de contenu n&apos;en fait que 800px. Voici les dimensions
              recommandees selon l&apos;usage :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                <strong>Image mise en avant</strong> : 1200 x 628 px (ideal
                pour le partage sur les reseaux sociaux)
              </li>
              <li>
                <strong>Image dans le contenu</strong> : 800 - 1200 px de
                largeur maximum
              </li>
              <li>
                <strong>Banniere / hero</strong> : 1920 x 600-800 px
              </li>
              <li>
                <strong>Vignette</strong> : 300 x 300 px ou 400 x 400 px
              </li>
            </ul>
            <p className="text-gray-600">
              Verifiez les reglages de votre theme WordPress dans{" "}
              <strong>Reglages &gt; Medias</strong> pour connaitre les tailles
              generees automatiquement.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8" id="etape-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Etape 4 : Activer le lazy loading
            </h2>
            <p className="text-gray-600 mb-4">
              Le <strong>lazy loading</strong> (chargement paresseux) permet de
              ne charger les images que lorsqu&apos;elles entrent dans le
              champ de vision de l&apos;utilisateur. Cela accelere
              considerablement le chargement initial de la page.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                WordPress ajoute automatiquement{" "}
                <code className="bg-gray-100 px-1 rounded">loading=&quot;lazy&quot;</code>{" "}
                aux images depuis la version 5.5
              </li>
              <li>
                Les images au-dessus de la ligne de flottaison (hero, logo) ne
                doivent <strong>pas</strong> avoir de lazy loading
              </li>
              <li>
                Ajoutez{" "}
                <code className="bg-gray-100 px-1 rounded">fetchpriority=&quot;high&quot;</code>{" "}
                a votre image LCP (Largest Contentful Paint)
              </li>
            </ul>
            <p className="text-gray-600">
              Conseil : utilisez un plugin de cache comme WP Rocket ou
              LiteSpeed Cache pour optimiser automatiquement le lazy loading.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Checklist rapide d&apos;optimisation WordPress
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                Chaque image fait <strong>moins de 200 Ko</strong>
              </li>
              <li>
                Les images sont au format <strong>WebP</strong> (ou JPEG en
                fallback)
              </li>
              <li>
                Les dimensions correspondent aux besoins du theme (pas de
                surdimensionnement)
              </li>
              <li>
                Le lazy loading est actif sur toutes les images sous la ligne de
                flottaison
              </li>
              <li>
                Les attributs <strong>alt</strong> sont renseignes pour chaque
                image (SEO + accessibilite)
              </li>
              <li>
                Les noms de fichiers sont descriptifs (ex:{" "}
                <code className="bg-gray-100 px-1 rounded">chaussure-running-nike.webp</code>{" "}
                plutot que <code className="bg-gray-100 px-1 rounded">IMG_4523.jpg</code>)
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
                href="/optimiser-image-pour-shopify"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">
                  Optimiser images pour Shopify
                </h3>
                <p className="text-sm text-gray-600">
                  Guide d&apos;optimisation pour les boutiques Shopify.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
