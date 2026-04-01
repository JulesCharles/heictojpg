import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir JPG en PNG gratuitement en ligne",
  description:
    "Convertissez vos images JPG en PNG en un clic. Obtenez la transparence et une qualite sans perte. Outil gratuit, rapide et sans inscription.",
  keywords: [
    "convertir jpg en png",
    "jpg to png",
    "conversion jpg png",
    "jpg vers png gratuit",
    "convertisseur jpg png",
    "ajouter transparence jpg",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-jpg-en-png",
    siteName: "heictojpg.fr",
    title: "Convertir JPG en PNG gratuitement en ligne",
    description:
      "Convertissez vos images JPG en PNG en un clic. Transparence et qualite sans perte.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir JPG en PNG gratuitement en ligne",
    description:
      "Convertissez vos images JPG en PNG en un clic. Transparence et qualite sans perte.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-jpg-en-png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur JPG en PNG",
      url: "https://heictojpg.fr/convertir-jpg-en-png",
      description:
        "Convertissez vos images JPG en PNG gratuitement en ligne. Outil rapide, sans inscription.",
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
          name: "Pourquoi convertir JPG en PNG ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le format PNG supporte la transparence et offre une compression sans perte, ce qui le rend ideal pour les logos, les graphiques et les images necessitant une qualite parfaite au pixel pres.",
          },
        },
        {
          "@type": "Question",
          name: "La conversion JPG en PNG est-elle gratuite ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre outil de conversion JPG en PNG est entierement gratuit, sans inscription requise et sans limitation d'usage.",
          },
        },
        {
          "@type": "Question",
          name: "Le fichier PNG sera-t-il plus volumineux que le JPG ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, les fichiers PNG sont generalement plus volumineux que les JPG car le format PNG utilise une compression sans perte qui preserve chaque pixel de l'image originale.",
          },
        },
      ],
    },
  ],
};

export default function ConvertirJpgEnPng() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Convertir JPG en PNG gratuitement
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos images JPG en fichiers PNG avec support de la
          transparence et compression sans perte. Notre convertisseur en ligne
          est rapide, securise et entierement gratuit. Aucune inscription
          requise.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="Convertir JPG en PNG"
          acceptedFormats=".jpg,.jpeg,image/jpeg"
          acceptLabel="Selectionner un fichier JPG"
          outputFormat="png"
          apiEndpoint="/api/convert-image"
          outputExtension=".png"
          acceptedMimeTypes={["image/jpeg"]}
          acceptedExtensions={[".jpg", ".jpeg"]}
          errorMessage="Veuillez selectionner un fichier JPG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi convertir JPG en PNG ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format JPG (ou JPEG) est le format le plus repandu pour les
            photographies numeriques. Il offre une excellente compression, mais
            utilise un algorithme avec perte qui peut degrader la qualite de
            l&apos;image a chaque sauvegarde. Le format PNG, en revanche, utilise
            une compression sans perte qui preserve chaque pixel de l&apos;image
            originale.
          </p>

          <p className="text-gray-600 mb-4">
            L&apos;un des principaux avantages du format PNG est le support de la
            transparence (canal alpha). Contrairement au JPG qui ne gere pas la
            transparence, le PNG permet de creer des images avec des zones
            transparentes, ce qui est essentiel pour les logos, les icones et
            les elements graphiques destines a etre superposes sur differents
            arriere-plans.
          </p>

          <p className="text-gray-600 mb-4">
            Pour les graphistes, les developpeurs web et les createurs de
            contenu, le format PNG est souvent indispensable. Convertir vos
            images JPG en PNG vous permet de travailler avec un format sans
            perte, ideal pour l&apos;edition repetee, la superposition de calques
            et la creation de visuels professionnels.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Avantages du format PNG
          </h3>

          <ul className="text-gray-600 space-y-2">
            <li>
              •{" "}
              <strong>Transparence :</strong> le PNG supporte le canal alpha,
              permettant des zones transparentes dans vos images, ideal pour les
              logos et les icones
            </li>
            <li>
              •{" "}
              <strong>Qualite sans perte :</strong> aucune degradation de
              l&apos;image lors de la compression, chaque pixel est preserve
              fidelement
            </li>
            <li>
              •{" "}
              <strong>Design graphique :</strong> format privilegie pour les
              maquettes, les elements d&apos;interface et les compositions visuelles
              professionnelles
            </li>
            <li>
              •{" "}
              <strong>Texte et graphiques :</strong> le PNG offre une nettete
              superieure pour les captures d&apos;ecran, les schemas et les images
              contenant du texte
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Questions frequentes
        </h2>

        <div className="prose prose-gray max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Pourquoi convertir JPG en PNG ?
          </h3>
          <p className="text-gray-600 mb-6">
            Le format PNG offre des avantages uniques par rapport au JPG : le
            support de la transparence, une compression sans perte et une
            meilleure nettete pour les textes et graphiques. Il est ideal pour
            le design graphique, les logos et les images necessitant une qualite
            parfaite.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            La conversion JPG en PNG est-elle gratuite ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, notre outil est 100 % gratuit et sans aucune limitation.
            Convertissez autant de fichiers JPG en PNG que necessaire, sans
            inscription et sans filigrane ajoute a vos images.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Le fichier PNG sera-t-il plus volumineux que le JPG ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, en regle generale, un fichier PNG est plus volumineux qu&apos;un
            fichier JPG de meme resolution. Cela est du a la compression sans
            perte du PNG qui conserve chaque detail de l&apos;image. C&apos;est le prix
            a payer pour une qualite parfaite et le support de la transparence.
          </p>
        </div>
      </div>

      {/* Autres outils */}
      <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Découvrez nos autres outils</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">HEIC → JPG</h3>
            <p className="text-sm text-gray-600">Convertissez vos photos iPhone HEIC en JPG.</p>
          </Link>
          <Link href="/convertir-png-en-jpg" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">PNG → JPG</h3>
            <p className="text-sm text-gray-600">Convertissez vos images PNG en JPG.</p>
          </Link>
          <Link href="/convertir-webp-en-jpg" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">WebP → JPG</h3>
            <p className="text-sm text-gray-600">Transformez vos images WebP en JPG.</p>
          </Link>
          <Link href="/compresser-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Compresser image</h3>
            <p className="text-sm text-gray-600">Réduisez le poids de vos images.</p>
          </Link>
        </div>
        <p className="mt-6 text-gray-600">Consultez aussi notre <Link href="/blog/meilleurs-formats-image-2025" className="text-blue-600 hover:text-blue-800">guide complet des formats d'image</Link> et notre <Link href="/faq" className="text-blue-600 hover:text-blue-800">FAQ</Link>.</p>
      </div>
    </div>
  );
}
