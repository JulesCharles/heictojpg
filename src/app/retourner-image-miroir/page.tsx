import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Retourner une Image en Miroir Gratuit en Ligne | heictojpg.fr",
  description:
    "Retournez vos images en miroir horizontal (gauche/droite, ideal pour les selfies) ou vertical (haut/bas, pour les documents scannes). Gratuit, sans inscription.",
  keywords: [
    "retourner image miroir",
    "miroir horizontal image",
    "miroir vertical image",
    "flip image en ligne",
    "inverser image gratuit",
    "selfie miroir",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/retourner-image-miroir",
    siteName: "heictojpg.fr",
    title: "Retourner une Image en Miroir Gratuit en Ligne",
    description:
      "Retournez vos images en miroir horizontal ou vertical. Corrigez les selfies, les scans et creez des effets artistiques. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/retourner-image-miroir" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Retourner une Image en Miroir Gratuit en Ligne",
      url: "https://heictojpg.fr/retourner-image-miroir",
      description:
        "Retournez vos images en miroir horizontal (gauche/droite) ou vertical (haut/bas). Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quelle difference entre miroir horizontal et vertical ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le miroir horizontal inverse gauche et droite, comme si vous regardiez votre image dans un miroir classique. Le miroir vertical inverse le haut et le bas, comme un reflet dans l'eau. Le miroir horizontal est le plus couramment utilise, notamment pour corriger les selfies.",
          },
        },
        {
          "@type": "Question",
          name: "La qualite est-elle affectee ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non, le retournement en miroir est une operation sans perte. L'image conserve exactement la meme qualite, resolution et taille. Les pixels sont simplement reorganises sans re-compression.",
          },
        },
        {
          "@type": "Question",
          name: "Comment retourner un selfie ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Les selfies pris avec la camera frontale sont souvent affiches en miroir. Pour obtenir une image telle que les autres vous voient, utilisez le miroir horizontal (flop). Importez votre selfie et cliquez sur 'Miroir horizontal'.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            {
              label: "Retourner une image en miroir",
              href: "/retourner-image-miroir",
            },
          ]}
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Retourner une image en miroir gratuitement
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Inversez vos images en miroir horizontal (gauche/droite) ou vertical
          (haut/bas). Corrigez les selfies pris en miroir, retournez les
          documents scannes ou creez des effets artistiques. Compatible avec
          tous les formats d&apos;image courants.
        </p>
      </PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-16">
          <Client />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Quand utiliser le miroir d&apos;image ?
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Le retournement en miroir est indispensable dans plusieurs
              situations courantes. Les selfies pris avec la camera frontale
              d&apos;un smartphone sont automatiquement affiches en miroir : le
              texte apparait inverse et votre visage n&apos;est pas tel que les
              autres le voient. Un simple miroir horizontal corrige
              instantanement ce probleme.
            </p>
            <p className="text-gray-600 mb-4">
              Le miroir vertical est particulierement utile pour les documents
              scannes a l&apos;envers ou les photos prises avec un appareil mal
              oriente. En combinant le miroir avec la{" "}
              <a href="/pivoter-image" className="text-blue-600 hover:underline">
                rotation d&apos;image
              </a>
              , vous pouvez corriger n&apos;importe quelle orientation.
            </p>
            <p className="text-gray-600 mb-4">
              Les graphistes et photographes utilisent egalement le miroir pour
              creer des effets de symetrie artistiques, composer des motifs
              repetes ou simplement ajuster la direction du regard d&apos;un
              sujet dans une photo. Vous pouvez aussi{" "}
              <a
                href="/recadrer-image"
                className="text-blue-600 hover:underline"
              >
                recadrer votre image
              </a>{" "}
              ou{" "}
              <a
                href="/redimensionner-image"
                className="text-blue-600 hover:underline"
              >
                la redimensionner
              </a>{" "}
              apres l&apos;avoir retournee.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Questions frequentes
          </h2>
          <div className="prose prose-gray max-w-none">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Quelle difference entre miroir horizontal et vertical ?
              </h3>
              <p className="text-gray-600 mb-4">
                Le miroir horizontal inverse gauche et droite, comme si vous
                regardiez votre image dans un miroir classique. Le miroir
                vertical inverse le haut et le bas, comme un reflet dans
                l&apos;eau. Le miroir horizontal est le plus couramment utilise,
                notamment pour corriger les selfies.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                La qualite est-elle affectee ?
              </h3>
              <p className="text-gray-600 mb-4">
                Non, le retournement en miroir est une operation sans perte.
                L&apos;image conserve exactement la meme qualite, resolution et
                taille. Les pixels sont simplement reorganises sans
                re-compression.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Comment retourner un selfie ?
              </h3>
              <p className="text-gray-600 mb-4">
                Les selfies pris avec la camera frontale sont souvent affiches
                en miroir. Pour obtenir une image telle que les autres vous
                voient, utilisez le miroir horizontal. Importez votre selfie,
                selectionnez &laquo;&nbsp;Miroir horizontal&nbsp;&raquo; et
                lancez le traitement.
              </p>
            </div>
          </div>
        </div>

        <RelatedTools currentPath="/retourner-image-miroir" />
      </div>
    </>
  );
}
