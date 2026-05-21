import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Compter les Couleurs d'une Image en Ligne Gratuit | heictojpg.fr",
  description:
    "Analysez le nombre de couleurs uniques dans une image. Visualisez la distribution des couleurs, les teintes dominantes et ajustez la tolerance de regroupement. Gratuit, sans inscription.",
  keywords: [
    "compter couleurs image",
    "nombre couleurs image",
    "analyse couleurs image",
    "palette couleurs image",
    "couleurs dominantes image",
    "distribution couleurs",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/compter-couleurs-image",
    siteName: "heictojpg.fr",
    title: "Compter les Couleurs d'une Image en Ligne Gratuit",
    description:
      "Analysez le nombre de couleurs uniques dans une image. Visualisez la distribution et les teintes dominantes. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/compter-couleurs-image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Compter les Couleurs d'une Image en Ligne Gratuit",
      url: "https://heictojpg.fr/compter-couleurs-image",
      description:
        "Analysez le nombre de couleurs uniques dans une image. Visualisez la distribution des couleurs et les teintes dominantes.",
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
          name: "Pourquoi compter les couleurs d'une image ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Compter les couleurs est utile pour optimiser les palettes GIF (limitees a 256 couleurs), verifier la diversite chromatique d'un design, preparer une image pour l'impression professionnelle ou evaluer l'accessibilite des contrastes.",
          },
        },
        {
          "@type": "Question",
          name: "Que signifie la tolerance ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La tolerance permet de regrouper les couleurs visuellement similaires. Avec une tolerance de 0, chaque nuance unique est comptee separement. En augmentant la tolerance, les couleurs proches sont fusionnees en un seul groupe, donnant une vue plus synthetique de la palette.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de couleurs peut contenir un JPG ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un fichier JPG utilise 24 bits par pixel (8 bits par canal RGB), ce qui permet theoriquement 16,7 millions de couleurs uniques. En pratique, une photo typique contient entre quelques milliers et quelques centaines de milliers de couleurs distinctes.",
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
              label: "Compter les couleurs d'une image",
              href: "/compter-couleurs-image",
            },
          ]}
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Compter les couleurs d&apos;une image gratuitement
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Analysez le nombre de couleurs uniques dans votre image. Visualisez la
          distribution des teintes dominantes et ajustez la tolerance pour
          regrouper les couleurs similaires. Compatible avec tous les formats
          d&apos;image courants.
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
            Pourquoi analyser les couleurs d&apos;une image ?
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Connaitre le nombre de couleurs d&apos;une image est essentiel
              dans de nombreux contextes professionnels. Si vous preparez un GIF
              anime, vous devez optimiser la palette a 256 couleurs maximum :
              savoir combien de couleurs contient votre image source vous aide a
              choisir la meilleure strategie de reduction. Pour l&apos;impression
              professionnelle, une analyse des couleurs permet de verifier que
              votre image utilise une gamme adaptee au profil CMJN cible.
            </p>
            <p className="text-gray-600 mb-4">
              L&apos;analyse des couleurs est egalement precieuse pour
              l&apos;accessibilite web. En identifiant les couleurs dominantes,
              vous pouvez verifier les ratios de contraste et vous assurer que
              votre contenu visuel est lisible par tous. Les designers utilisent
              ces informations pour extraire des palettes harmonieuses a partir
              de photos de reference. Decouvrez aussi notre{" "}
              <a
                href="/convertisseur-couleurs"
                className="text-blue-600 hover:underline"
              >
                convertisseur de couleurs
              </a>{" "}
              pour explorer les codes HEX, RGB et HSL.
            </p>
            <p className="text-gray-600 mb-4">
              Notre outil fonctionne entierement dans votre navigateur : aucune
              image n&apos;est envoyee sur un serveur. L&apos;analyse est
              instantanee et respecte totalement votre vie privee. Vous pouvez
              aussi{" "}
              <a
                href="/convertir-image-noir-et-blanc"
                className="text-blue-600 hover:underline"
              >
                convertir votre image en noir et blanc
              </a>{" "}
              ou{" "}
              <a
                href="/lire-metadonnees-image"
                className="text-blue-600 hover:underline"
              >
                lire ses metadonnees EXIF
              </a>
              .
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
                Pourquoi compter les couleurs d&apos;une image ?
              </h3>
              <p className="text-gray-600 mb-4">
                Compter les couleurs est utile pour optimiser les palettes GIF
                (limitees a 256 couleurs), verifier la diversite chromatique
                d&apos;un design, preparer une image pour l&apos;impression
                professionnelle ou evaluer l&apos;accessibilite des contrastes
                de votre contenu visuel.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Que signifie la tolerance ?
              </h3>
              <p className="text-gray-600 mb-4">
                La tolerance permet de regrouper les couleurs visuellement
                similaires. Avec une tolerance de 0, chaque nuance unique (meme
                un seul pixel different) est comptee separement. En augmentant la
                tolerance, les couleurs proches sont fusionnees en un seul
                groupe, donnant une vue plus synthetique de la palette reelle de
                votre image.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Combien de couleurs peut contenir un JPG ?
              </h3>
              <p className="text-gray-600 mb-4">
                Un fichier JPG utilise 24 bits par pixel (8 bits par canal RGB),
                ce qui permet theoriquement jusqu&apos;a 16,7 millions de
                couleurs uniques. En pratique, une photo typique contient entre
                quelques milliers et quelques centaines de milliers de couleurs
                distinctes, selon la complexite de la scene et le niveau de
                compression.
              </p>
            </div>
          </div>
        </div>

        <RelatedTools currentPath="/compter-couleurs-image" />
      </div>
    </>
  );
}
