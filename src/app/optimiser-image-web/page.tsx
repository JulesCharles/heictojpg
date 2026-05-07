import type { Metadata } from "next";
import Link from "next/link";
import ImageOptimizerForm from "@/components/ImageOptimizerForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdBanner from "@/components/AdBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Optimiser une image pour le web en ligne | heictojpg.fr",
  description:
    "Optimisez vos images pour le web : convertissez en WebP ou AVIF, ajustez la qualit\u00e9 et redimensionnez. Am\u00e9liorez vos Core Web Vitals. Gratuit, rapide, sans inscription.",
  keywords: [
    "optimiser image web",
    "compresser image webp",
    "convertir image avif",
    "optimisation image en ligne",
    "r\u00e9duire taille image web",
    "image performance web",
    "core web vitals image",
    "compresser image pour site",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/optimiser-image-web",
    siteName: "heictojpg.fr",
    title: "Optimiser une image pour le web gratuitement en ligne",
    description:
      "Optimisez vos images pour le web : convertissez en WebP ou AVIF, ajustez la qualit\u00e9 et redimensionnez. Gratuit, sans inscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimiser une image pour le web gratuitement en ligne",
    description:
      "Optimisez vos images pour le web : convertissez en WebP ou AVIF, ajustez la qualit\u00e9 et redimensionnez. Gratuit, sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/optimiser-image-web",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Optimiseur d\u2019images pour le web",
      url: "https://heictojpg.fr/optimiser-image-web",
      description:
        "Optimisez vos images pour le web en les convertissant en WebP ou AVIF, en ajustant la qualit\u00e9 et en redimensionnant. Gratuit et sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Pourquoi optimiser ses images pour le web ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Des images optimis\u00e9es r\u00e9duisent le temps de chargement des pages, am\u00e9liorent l\u2019exp\u00e9rience utilisateur et le r\u00e9f\u00e9rencement SEO. Google utilise les Core Web Vitals, dont le Largest Contentful Paint (LCP), directement li\u00e9 au poids des images.",
          },
        },
        {
          "@type": "Question",
          name: "Quel format choisir entre WebP, AVIF et JPG ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le WebP offre un excellent compromis taille/qualit\u00e9 et est support\u00e9 par tous les navigateurs modernes. L\u2019AVIF offre une compression encore meilleure mais avec un support navigateur l\u00e9g\u00e8rement moindre. Le JPG reste le choix le plus compatible pour les anciens navigateurs.",
          },
        },
        {
          "@type": "Question",
          name: "L\u2019outil est-il gratuit ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre optimiseur d\u2019images est enti\u00e8rement gratuit, sans inscription requise. Vos images sont trait\u00e9es directement dans votre navigateur et ne sont pas stock\u00e9es sur nos serveurs.",
          },
        },
        {
          "@type": "Question",
          name: "Quelle qualit\u00e9 choisir pour mes images web ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pour la plupart des usages web, une qualit\u00e9 entre 75 et 85 % en WebP offre un excellent compromis. Les images de hero ou de portfolio peuvent \u00eatre r\u00e9gl\u00e9es \u00e0 90 %, tandis que les vignettes peuvent descendre \u00e0 60-70 %.",
          },
        },
      ],
    },
  ],
};

export default function OptimiserImageWeb() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Optimiser une image pour le web", href: "/optimiser-image-web" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Optimiser une image pour le web
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Convertissez vos images en WebP ou AVIF, ajustez la qualit&eacute; et
          redimensionnez-les pour un chargement ultra-rapide. Outil gratuit, s&eacute;curis&eacute;
          et sans inscription.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageOptimizerForm />
      </div>

      <AdBanner slot="SLOT_1" format="horizontal" />

      {/* SEO Content Section */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi optimiser vos images pour le web ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Les images repr&eacute;sentent en moyenne 50 % du poids total d&apos;une page web.
            Des fichiers trop lourds ralentissent consid&eacute;rablement le temps de chargement,
            d&eacute;gradent l&apos;exp&eacute;rience utilisateur et p&eacute;nalisent votre r&eacute;f&eacute;rencement naturel.
            Optimiser vos images est l&apos;un des leviers les plus efficaces pour am&eacute;liorer
            la performance de votre site internet.
          </p>

          <p className="text-gray-600 mb-4">
            Google mesure la rapidit&eacute; de votre site via les <strong>Core Web Vitals</strong>,
            trois indicateurs cl&eacute;s dont le <strong>Largest Contentful Paint (LCP)</strong>.
            Le LCP correspond au temps de chargement du plus grand &eacute;l&eacute;ment visible de la page,
            souvent une image. Si vos images ne sont pas optimis&eacute;es, votre score LCP sera
            mauvais, ce qui impacte directement votre positionnement dans les r&eacute;sultats de recherche.
            Un LCP inf&eacute;rieur &agrave; 2,5 secondes est consid&eacute;r&eacute; comme bon par Google.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            WebP vs JPEG : quel format choisir ?
          </h3>

          <p className="text-gray-600 mb-4">
            Le format <strong>WebP</strong>, d&eacute;velopp&eacute; par Google, offre une compression
            25 &agrave; 35 % sup&eacute;rieure au JPEG &agrave; qualit&eacute; visuelle &eacute;quivalente. Il est
            d&eacute;sormais support&eacute; par tous les navigateurs modernes (Chrome, Firefox, Safari, Edge)
            et constitue le choix recommand&eacute; pour la plupart des sites web. Le format
            <strong> AVIF</strong>, plus r&eacute;cent, pousse la compression encore plus loin avec des gains
            de 40 &agrave; 50 % par rapport au JPEG, mais son support navigateur est encore en progression.
          </p>

          <p className="text-gray-600 mb-4">
            Le JPEG reste pertinent pour garantir la compatibilit&eacute; avec les navigateurs
            les plus anciens ou pour les cas o&ugrave; vous avez besoin d&apos;un format universellement
            reconnu. Notre outil vous permet de choisir librement entre WebP, AVIF et JPG
            selon vos besoins sp&eacute;cifiques.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Bonnes pratiques pour la vitesse de chargement
          </h3>

          <ul className="text-gray-600 space-y-2">
            <li>
              &bull;{" "}
              <strong>Redimensionnez vos images</strong> : ne servez pas une image de 4000 px
              de large si elle s&apos;affiche en 800 px. Utilisez le champ &laquo; largeur maximale &raquo;
              pour adapter la taille &agrave; l&apos;affichage r&eacute;el.
            </li>
            <li>
              &bull;{" "}
              <strong>Choisissez la bonne qualit&eacute;</strong> : pour le web, une qualit&eacute; de
              75-85 % en WebP est g&eacute;n&eacute;ralement imperceptible &agrave; l&apos;&oelig;il nu tout en
              r&eacute;duisant drastiquement le poids du fichier.
            </li>
            <li>
              &bull;{" "}
              <strong>Privil&eacute;giez les formats modernes</strong> : WebP pour la compatibilit&eacute;
              et AVIF pour la performance maximale. Utilisez le JPG comme fallback si n&eacute;cessaire.
            </li>
            <li>
              &bull;{" "}
              <strong>Lazy loading</strong> : combinez l&apos;optimisation des images avec
              l&apos;attribut <code>loading=&quot;lazy&quot;</code> pour ne charger les images
              que lorsqu&apos;elles entrent dans le viewport.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Questions fr&eacute;quentes
        </h2>

        <div className="prose prose-gray max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Pourquoi optimiser ses images pour le web ?
          </h3>
          <p className="text-gray-600 mb-6">
            Des images optimis&eacute;es r&eacute;duisent le temps de chargement de vos pages,
            am&eacute;liorent l&apos;exp&eacute;rience utilisateur et boostent votre SEO. Google
            p&eacute;nalise les sites lents dans ses r&eacute;sultats de recherche, et les images
            sont souvent le premier facteur de lenteur. En optimisant vos visuels, vous
            gagnez en performance et en visibilit&eacute;.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Quel format choisir entre WebP, AVIF et JPG ?
          </h3>
          <p className="text-gray-600 mb-6">
            Le <strong>WebP</strong> est le meilleur choix polyvalent : il est support&eacute; par
            tous les navigateurs modernes et offre une compression 25-35 % meilleure que le
            JPEG. L&apos;<strong>AVIF</strong> est id&eacute;al si vous visez la performance maximale,
            avec des gains allant jusqu&apos;&agrave; 50 %. Le <strong>JPG</strong> reste utile pour
            la compatibilit&eacute; avec les anciens syst&egrave;mes.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            L&apos;outil est-il gratuit et s&eacute;curis&eacute; ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, notre optimiseur d&apos;images est 100 % gratuit et sans inscription.
            Vos fichiers sont trait&eacute;s de mani&egrave;re s&eacute;curis&eacute;e et ne sont jamais
            stock&eacute;s sur nos serveurs. Le traitement s&apos;effectue de mani&egrave;re instantan&eacute;e
            et vos images restent priv&eacute;es.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Quelle qualit&eacute; choisir pour mes images ?
          </h3>
          <p className="text-gray-600 mb-6">
            Pour la plupart des sites web, une qualit&eacute; entre 75 et 85 % en WebP offre
            un excellent compromis entre taille de fichier et qualit&eacute; visuelle. Pour les
            images de hero ou de portfolio, montez &agrave; 90 %. Pour les miniatures et vignettes,
            60-70 % suffit largement avec une diff&eacute;rence imperceptible &agrave; l&apos;&oelig;il nu.
          </p>
        </div>
      </div>

      <AdBanner slot="SLOT_2" format="horizontal" />

      {/* Related tools */}
      <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">D&eacute;couvrez nos autres outils</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/compresser-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Compresser une image</h3>
            <p className="text-sm text-gray-600">R&eacute;duisez le poids de vos images JPG, PNG et WebP.</p>
          </Link>
          <Link href="/convertir-jpg-en-webp" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">JPG &rarr; WebP</h3>
            <p className="text-sm text-gray-600">Convertissez vos images JPG en WebP pour le web.</p>
          </Link>
          <Link href="/convertir-png-en-webp" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">PNG &rarr; WebP</h3>
            <p className="text-sm text-gray-600">Transformez vos images PNG en WebP optimis&eacute;.</p>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
