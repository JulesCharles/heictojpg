import type { Metadata } from "next";
import Link from "next/link";
import ImageConvertForm from "@/components/ImageConvertForm";

export const metadata: Metadata = {
  title: "Convertir PNG en JPG gratuitement en ligne",
  description:
    "Convertissez vos images PNG en JPG en un clic. Outil gratuit, rapide et sans inscription. Réduisez la taille de vos fichiers PNG en les convertissant au format JPG.",
  keywords: [
    "convertir png en jpg",
    "png to jpg",
    "conversion png jpg",
    "png vers jpg gratuit",
    "convertisseur png",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-png-en-jpg",
    siteName: "heictojpg.fr",
    title: "Convertir PNG en JPG gratuitement en ligne",
    description:
      "Convertissez vos images PNG en JPG en un clic. Gratuit, rapide, sans inscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir PNG en JPG gratuitement en ligne",
    description:
      "Convertissez vos images PNG en JPG en un clic. Gratuit, rapide, sans inscription.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-png-en-jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur PNG en JPG",
      url: "https://heictojpg.fr/convertir-png-en-jpg",
      description:
        "Convertissez vos images PNG en JPG gratuitement en ligne. Outil rapide, sans inscription.",
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
          name: "La conversion PNG en JPG est-elle gratuite ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre outil de conversion PNG en JPG est entièrement gratuit, sans inscription requise et sans limitation d'usage.",
          },
        },
        {
          "@type": "Question",
          name: "La qualité de l'image est-elle conservée ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le format JPG utilise une compression avec perte, mais notre outil optimise la qualité pour obtenir le meilleur rapport taille/qualité possible.",
          },
        },
        {
          "@type": "Question",
          name: "Mes fichiers sont-ils conservés sur vos serveurs ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non, aucun fichier n'est conservé sur nos serveurs. La conversion s'effectue en mémoire et toutes les données temporaires sont supprimées immédiatement après le téléchargement.",
          },
        },
      ],
    },
  ],
};

export default function ConvertirPngEnJpg() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Convertir PNG en JPG gratuitement
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos images PNG en fichiers JPG optimisés en quelques
          secondes. Notre convertisseur en ligne est rapide, sécurisé et
          entièrement gratuit. Aucune inscription requise, aucun fichier
          conservé sur nos serveurs.
        </p>
      </div>

      <div className="mb-16">
        <ImageConvertForm
          title="Convertir PNG en JPG"
          acceptedFormats=".png,image/png"
          acceptLabel="Sélectionner un fichier PNG"
          outputFormat="jpg"
          apiEndpoint="/api/convert-image"
          outputExtension=".jpg"
          acceptedMimeTypes={["image/png"]}
          acceptedExtensions={[".png"]}
          errorMessage="Veuillez sélectionner un fichier PNG valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Pourquoi convertir PNG en JPG ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Le format PNG (Portable Network Graphics) est un format d&apos;image
            sans perte très utilisé pour les graphiques, les captures d&apos;écran
            et les images avec transparence. Cependant, les fichiers PNG sont
            souvent beaucoup plus volumineux que leurs équivalents JPG, ce qui
            peut poser problème pour le partage en ligne ou l&apos;envoi par email.
          </p>

          <p className="text-gray-600 mb-4">
            En convertissant vos fichiers PNG en JPG, vous pouvez réduire
            considérablement la taille de vos images, parfois de 50 à 80 %. Le
            format JPG utilise une compression avec perte qui élimine les
            données visuelles imperceptibles à l&apos;oeil nu, tout en conservant
            une excellente qualité d&apos;image pour la plupart des usages
            quotidiens.
          </p>

          <p className="text-gray-600 mb-4">
            Le format JPG est le standard universel pour les photographies
            numériques. Il est supporté par absolument tous les navigateurs web,
            systèmes d&apos;exploitation, réseaux sociaux et applications de
            messagerie. Convertir vos PNG en JPG garantit une compatibilité
            maximale avec tous vos outils et plateformes.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Quand utiliser PNG vs JPG ?
          </h3>

          <ul className="text-gray-600 space-y-2">
            <li>
              •{" "}
              <strong>Utilisez JPG pour :</strong> les photographies, les images
              destinées au web, les envois par email, les publications sur les
              réseaux sociaux
            </li>
            <li>
              •{" "}
              <strong>Conservez le PNG pour :</strong> les logos avec
              transparence, les captures d&apos;écran de texte, les graphiques
              vectoriels, les images nécessitant une qualité parfaite au pixel
              près
            </li>
            <li>
              •{" "}
              <strong>Taille de fichier :</strong> un JPG est généralement 5 à
              10 fois plus léger qu&apos;un PNG pour une photo de même résolution
            </li>
            <li>
              •{" "}
              <strong>Optimisation web :</strong> convertir vos images PNG en JPG
              améliore significativement la vitesse de chargement de vos pages
              web et votre score SEO
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
            La conversion PNG en JPG est-elle gratuite ?
          </h3>
          <p className="text-gray-600 mb-6">
            Oui, notre outil est 100 % gratuit et sans aucune limitation. Vous
            pouvez convertir autant de fichiers PNG en JPG que vous le
            souhaitez, sans inscription et sans filigrane ajouté à vos images.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            La qualité de l&apos;image est-elle conservée ?
          </h3>
          <p className="text-gray-600 mb-6">
            Le format JPG utilise une compression avec perte, ce qui signifie
            qu&apos;une légère réduction de qualité est possible. Cependant, notre
            outil optimise les paramètres de compression pour offrir le meilleur
            rapport qualité/taille possible. Pour la plupart des usages
            (photos, web, email), la différence est imperceptible.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Mes fichiers sont-ils conservés sur vos serveurs ?
          </h3>
          <p className="text-gray-600 mb-6">
            Non, la confidentialité de vos données est notre priorité. Aucun
            fichier n&apos;est stocké sur nos serveurs. La conversion s&apos;effectue en
            mémoire et toutes les données temporaires sont supprimées
            immédiatement après le téléchargement de votre image convertie.
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
          <Link href="/convertir-webp-en-jpg" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">WebP → JPG</h3>
            <p className="text-sm text-gray-600">Transformez vos images WebP en JPG.</p>
          </Link>
          <Link href="/convertir-jpg-en-png" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">JPG → PNG</h3>
            <p className="text-sm text-gray-600">Convertissez en PNG pour la transparence.</p>
          </Link>
          <Link href="/compresser-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Compresser image</h3>
            <p className="text-sm text-gray-600">Réduisez le poids de vos images.</p>
          </Link>
        </div>
        <p className="mt-6 text-gray-600">Consultez aussi notre <Link href="/blog/optimiser-photos-web-heic-jpg-webp" className="text-blue-600 hover:text-blue-800">guide sur l'optimisation des photos pour le web</Link> et notre <Link href="/faq" className="text-blue-600 hover:text-blue-800">FAQ</Link>.</p>
      </div>
    </div>
  );
}
