import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir JPG en PNG gratuitement en ligne",
  description:
    "Convertissez vos images JPG en PNG en un clic. Obtenez la transparence et une qualité sans perte. Outil gratuit, rapide et sans inscription.",
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
      "Convertissez vos images JPG en PNG en un clic. Transparence et qualité sans perte.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir JPG en PNG gratuitement en ligne",
    description:
      "Convertissez vos images JPG en PNG en un clic. Transparence et qualité sans perte.",
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
            text: "Le format PNG supporte la transparence et offre une compression sans perte, ce qui le rend idéal pour les logos, les graphiques et les images nécessitant une qualité parfaite au pixel près.",
          },
        },
        {
          "@type": "Question",
          name: "La conversion JPG en PNG est-elle gratuite ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre outil de conversion JPG en PNG est entièrement gratuit, sans inscription requise et sans limitation d'usage.",
          },
        },
        {
          "@type": "Question",
          name: "Le fichier PNG sera-t-il plus volumineux que le JPG ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, les fichiers PNG sont généralement plus volumineux que les JPG car le format PNG utilise une compression sans perte qui préserve chaque pixel de l'image originale.",
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
          est rapide, sécurisé et entièrement gratuit. Aucune inscription
          requise.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="Convertir JPG en PNG"
          acceptedFormats=".jpg,.jpeg,image/jpeg"
          acceptLabel="Sélectionner un fichier JPG"
          outputFormat="png"
          apiEndpoint="/api/convert-image"
          outputExtension=".png"
          acceptedMimeTypes={["image/jpeg"]}
          acceptedExtensions={[".jpg", ".jpeg"]}
          errorMessage="Veuillez sélectionner un fichier JPG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi convertir JPG en PNG ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format JPG (ou JPEG) est le format le plus répandu pour les
            photographies numériques. Il offre une excellente compression, mais
            utilise un algorithme avec perte qui peut dégrader la qualité de
            l&apos;image a chaque sauvegarde. Le format PNG, en revanche, utilise
            une compression sans perte qui préserve chaque pixel de l&apos;image
            originale.
          </p>

          <p className="text-gray-600 mb-4">
            L&apos;un des principaux avantages du format PNG est le support de la
            transparence (canal alpha). Contrairement au JPG qui ne gère pas la
            transparence, le PNG permet de créer des images avec des zones
            transparentes, ce qui est essentiel pour les logos, les icônes et
            les éléments graphiques destinés à être superposés sur différents
            arrière-plans.
          </p>

          <p className="text-gray-600 mb-4">
            Pour les graphistes, les développeurs web et les créateurs de
            contenu, le format PNG est souvent indispensable. Convertir vos
            images JPG en PNG vous permet de travailler avec un format sans
            perte, idéal pour l&apos;édition répétée, la superposition de calques
            et la création de visuels professionnels.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Avantages du format PNG
          </h3>

          <ul className="text-gray-600 space-y-2">
            <li>
              •{" "}
              <strong>Transparence :</strong> le PNG supporte le canal alpha,
              permettant des zones transparentes dans vos images, idéal pour les
              logos et les icônes
            </li>
            <li>
              •{" "}
              <strong>Qualité sans perte :</strong> aucune dégradation de
              l&apos;image lors de la compression, chaque pixel est préservé
              fidèlement
            </li>
            <li>
              •{" "}
              <strong>Design graphique :</strong> format privilégié pour les
              maquettes, les éléments d&apos;interface et les compositions visuelles
              professionnelles
            </li>
            <li>
              •{" "}
              <strong>Texte et graphiques :</strong> le PNG offre une netteté
              supérieure pour les captures d&apos;écran, les schémas et les images
              contenant du texte
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Questions fréquentes
        </h2>

        <div className="prose prose-gray max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Pourquoi convertir JPG en PNG ?
          </h3>
          <p className="text-gray-600 mb-6">
            Le format PNG offre des avantages uniques par rapport au JPG : le
            support de la transparence, une compression sans perte et une
            meilleure netteté pour les textes et graphiques. Il est idéal pour
            le design graphique, les logos et les images nécessitant une qualité
            parfaite.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            La conversion JPG en PNG est-elle gratuite ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, notre outil est 100 % gratuit et sans aucune limitation.
            Convertissez autant de fichiers JPG en PNG que nécessaire, sans
            inscription et sans filigrane ajouté à vos images.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Le fichier PNG sera-t-il plus volumineux que le JPG ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, en règle générale, un fichier PNG est plus volumineux qu&apos;un
            fichier JPG de même résolution. Cela est dû à la compression sans
            perte du PNG qui conserve chaque détail de l&apos;image. C&apos;est le prix
            à payer pour une qualité parfaite et le support de la transparence.
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
