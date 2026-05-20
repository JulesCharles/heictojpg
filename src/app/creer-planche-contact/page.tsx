import type { Metadata } from "next";
import ContactSheetForm from "@/components/ContactSheetForm";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdBanner from "@/components/AdBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Creer une planche contact en ligne | heictojpg.fr",
  description:
    "Creez une planche contact (mosaique photo) en ligne gratuitement. Assemblez vos images en une grille personnalisable. Sans inscription.",
  keywords: [
    "planche contact",
    "mosaique photo",
    "contact sheet",
    "grille photos",
    "assembler images",
    "mosaique images en ligne",
    "planche contact en ligne",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/creer-planche-contact",
    siteName: "heictojpg.fr",
    title: "Creer une planche contact en ligne gratuitement",
    description:
      "Assemblez vos photos en une planche contact ou mosaique. Colonnes, espacement et couleur de fond personnalisables.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creer une planche contact en ligne gratuitement",
    description:
      "Assemblez vos photos en une planche contact ou mosaique. Colonnes, espacement et couleur de fond personnalisables.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/creer-planche-contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Createur de planche contact en ligne",
      url: "https://heictojpg.fr/creer-planche-contact",
      description:
        "Creez une planche contact ou mosaique photo en ligne gratuitement. Personnalisez colonnes, espacement et couleur de fond.",
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
          name: "Qu&apos;est-ce qu&apos;une planche contact ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Une planche contact est une image unique qui regroupe plusieurs photos sous forme de grille ou de mosaique. Elle permet de visualiser rapidement un ensemble de cliches sur une seule page.",
          },
        },
        {
          "@type": "Question",
          name: "Combien d&apos;images puis-je assembler ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vous pouvez assembler autant d&apos;images que vous le souhaitez, avec un minimum de 2. Le nombre de colonnes est ajustable de 2 a 6 pour s&apos;adapter a vos besoins.",
          },
        },
        {
          "@type": "Question",
          name: "Quels formats d&apos;image sont acceptes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre outil accepte les formats JPG, JPEG, PNG et WebP. La planche contact finale est exportee au format JPG haute qualite.",
          },
        },
        {
          "@type": "Question",
          name: "La creation de planche contact est-elle gratuite ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, l&apos;outil est entierement gratuit, sans inscription requise et sans filigrane sur vos images.",
          },
        },
      ],
    },
  ],
};

export default function CreerPlancheContact() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Planche contact", href: "/creer-planche-contact" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Creer une planche contact en ligne
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Assemblez vos photos en une planche contact ou mosaique personnalisable.
          Choisissez le nombre de colonnes, l&apos;espacement et la couleur de fond.
          Gratuit, rapide et sans inscription.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ContactSheetForm />
      </div>

      <AdBanner slot="SLOT_1" format="horizontal" />

      {/* SEO content */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Qu&apos;est-ce qu&apos;une planche contact ?
        </h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Une planche contact (ou contact sheet en anglais) est une technique issue de la
            photographie argentique. A l&apos;origine, les photographes posaient leurs negatifs
            directement sur du papier photo pour obtenir un apercu rapide de toutes les images
            d&apos;une pellicule sur une seule feuille. Aujourd&apos;hui, la planche contact
            numerique reprend ce concept en assemblant plusieurs images en une grille unique.
          </p>
          <p className="text-gray-600 mb-4">
            Notre outil en ligne vous permet de creer facilement une planche contact a partir de
            vos photos JPG, PNG ou WebP. Chaque image est redimensionnee et placee dans une grille
            reguliere avec l&apos;espacement et la couleur de fond de votre choix. Le resultat est
            une image JPEG haute qualite prete a etre partagee, imprimee ou archivee.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Cas d&apos;utilisation
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>
              • <strong>Photographie professionnelle :</strong> presentez une selection de cliches
              a vos clients pour validation (proofing). La planche contact offre une vue d&apos;ensemble
              rapide de toute une seance photo.
            </li>
            <li>
              • <strong>Portfolio et book :</strong> creez des mosaiques visuelles pour mettre en
              valeur vos meilleures images sur les reseaux sociaux ou votre site web.
            </li>
            <li>
              • <strong>Archivage et catalogage :</strong> generez un index visuel de vos
              collections de photos pour retrouver facilement un cliche sans parcourir des centaines
              de fichiers.
            </li>
            <li>
              • <strong>Communication et presentation :</strong> integrez une planche contact dans
              un document, une presentation ou un e-mail pour montrer plusieurs images d&apos;un
              coup sans envoyer de multiples fichiers.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Comment ca fonctionne ?
          </h3>
          <p className="text-gray-600 mb-4">
            L&apos;utilisation est simple : deposez vos images dans la zone de depot, choisissez le
            nombre de colonnes (de 2 a 6), reglez l&apos;espacement entre les vignettes et
            selectionnez une couleur de fond. Cliquez sur &quot;Creer la planche contact&quot; et
            telechargez votre image en quelques secondes. Toutes les images sont redimensionnees
            automatiquement pour un rendu uniforme.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Questions frequentes
        </h2>
        <div className="prose prose-gray max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Qu&apos;est-ce qu&apos;une planche contact ?
          </h3>
          <p className="text-gray-600 mb-6">
            Une planche contact est une image unique qui rassemble plusieurs photos sous forme de
            grille. Issue de la photographie argentique, elle permet de visualiser rapidement un
            ensemble de cliches sur une seule page. C&apos;est un outil indispensable pour les
            photographes, designers et toute personne souhaitant presenter plusieurs images de
            maniere organisee.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Combien d&apos;images puis-je assembler ?
          </h3>
          <p className="text-gray-600 mb-6">
            Vous pouvez assembler autant d&apos;images que vous le souhaitez, avec un minimum de 2.
            Le nombre de colonnes est ajustable de 2 a 6. Les lignes sont calculees
            automatiquement en fonction du nombre d&apos;images et de colonnes choisies.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Quels formats d&apos;image sont acceptes ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre outil accepte les formats d&apos;image les plus courants : JPG, JPEG, PNG et
            WebP. La planche contact generee est exportee au format JPEG haute qualite (92 %).
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            La creation de planche contact est-elle gratuite ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, notre outil est 100 % gratuit. Aucune inscription n&apos;est requise, aucun
            filigrane n&apos;est ajoute et vos images ne sont pas conservees sur nos serveurs
            apres le traitement.
          </p>
        </div>
      </div>

      <RelatedTools currentPath="/creer-planche-contact" />
    </div>
    </>
  );
}
