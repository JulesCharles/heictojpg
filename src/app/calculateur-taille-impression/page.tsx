import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Calculateur Taille d'Impression — Pixels vers CM en 1 Clic",
  description:
    "Quelle taille fera votre image une fois imprimée ? Entrez vos pixels et DPI, obtenez la taille en cm ou pouces instantanément. Formats A4, A3, 10x15 inclus. Gratuit.",
  keywords: [
    "calculateur taille impression",
    "pixels en cm",
    "dpi calculateur",
    "taille impression photo",
    "pixels dpi cm",
    "resolution impression",
    "convertir pixels centimetres",
    "format impression photo",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/calculateur-taille-impression",
    siteName: "heictojpg.fr",
    title: "Calculateur Taille d'Impression — Pixels vers CM en 1 Clic",
    description:
      "Quelle taille fera votre image une fois imprimée ? Entrez vos pixels et DPI, obtenez la taille en cm ou pouces instantanément. Formats A4, A3, 10x15 inclus. Gratuit.",
  },
  alternates: { canonical: "https://heictojpg.fr/calculateur-taille-impression" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Calculateur Taille d'Impression",
      url: "https://heictojpg.fr/calculateur-taille-impression",
      description:
        "Calculez la taille d'impression de vos images en fonction des pixels et du DPI. Convertissez pixels en cm ou cm en pixels.",
      applicationCategory: "UtilityApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien de DPI faut-il pour une impression de qualite ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pour une impression de qualite photographique, 300 DPI est le standard recommande. Un minimum de 150 DPI est acceptable pour les grands formats vus de loin (affiches, bannieres). En dessous de 150 DPI, l'image apparaitra pixelisee.",
          },
        },
        {
          "@type": "Question",
          name: "Comment calculer la taille d'impression a partir des pixels ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La formule est simple : taille en cm = (nombre de pixels / DPI) x 2.54. Par exemple, une image de 3000 pixels de large a 300 DPI donne 3000 / 300 x 2.54 = 25.4 cm.",
          },
        },
        {
          "@type": "Question",
          name: "Quelle resolution pour imprimer en A4 ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pour une impression A4 (21 x 29.7 cm) a 300 DPI, vous avez besoin d'une image d'au moins 2480 x 3508 pixels. A 150 DPI, 1240 x 1754 pixels suffisent.",
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
          items={[{ label: "Calculateur taille d'impression", href: "/calculateur-taille-impression" }]}
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Calculateur de taille d&apos;impression
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Calculez la taille reelle d&apos;impression de vos images a partir de leurs dimensions en pixels et de
          la resolution DPI. Ou inversement, determinez combien de pixels sont necessaires pour imprimer au
          format souhaite.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-16">
          <Client />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Comprendre la relation entre pixels, DPI et taille d&apos;impression
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              La taille d&apos;impression d&apos;une image depend de deux facteurs : le nombre de pixels et la
              resolution d&apos;impression (DPI, dots per inch ou points par pouce). Plus une image contient de
              pixels, plus elle peut etre imprimee en grand format tout en conservant une bonne qualite. La
              formule est : taille en cm = (pixels / DPI) x 2.54.
            </p>
            <p className="text-gray-600 mb-4">
              Le DPI standard pour l&apos;impression photographique est de 300. Cela signifie que chaque pouce
              (2.54 cm) du tirage contient 300 points d&apos;encre. Pour les affiches ou les bannieres vues de
              loin, 150 DPI peuvent suffire. Pour l&apos;affichage ecran, 72 ou 96 DPI sont utilises, mais ces
              valeurs sont trop faibles pour l&apos;impression.
            </p>
            <p className="text-gray-600 mb-4">
              Avant d&apos;envoyer une image a l&apos;impression, utilisez notre calculateur pour verifier que
              vos dimensions en pixels sont suffisantes pour le format souhaite. Si la resolution effective est
              inferieure a 150 DPI, l&apos;image risque d&apos;apparaitre floue ou pixelisee sur le tirage
              final.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
          <div className="prose prose-gray max-w-none">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Combien de DPI faut-il pour une impression de qualite ?
              </h3>
              <p className="text-gray-600 mb-4">
                Pour une impression de qualite photographique, 300 DPI est le standard recommande. Un minimum de
                150 DPI est acceptable pour les grands formats vus de loin (affiches, bannieres). En dessous de
                150 DPI, l&apos;image apparaitra pixelisee.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Comment calculer la taille d&apos;impression a partir des pixels ?
              </h3>
              <p className="text-gray-600 mb-4">
                La formule est simple : taille en cm = (nombre de pixels / DPI) x 2.54. Par exemple, une image
                de 3000 pixels de large a 300 DPI donne 3000 / 300 x 2.54 = 25.4 cm. Notre calculateur effectue
                ce calcul automatiquement.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Quelle resolution pour imprimer en A4 ?
              </h3>
              <p className="text-gray-600 mb-4">
                Pour une impression A4 (21 x 29.7 cm) a 300 DPI, vous avez besoin d&apos;une image d&apos;au
                moins 2480 x 3508 pixels. A 150 DPI, 1240 x 1754 pixels suffisent. Consultez le tableau de
                notre calculateur pour d&apos;autres formats courants.
              </p>
            </div>
          </div>
        </div>

        <RelatedTools currentPath="/calculateur-taille-impression" />
      </div>
    </>
  );
}
