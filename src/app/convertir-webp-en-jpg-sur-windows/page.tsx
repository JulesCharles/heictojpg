import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir WebP en JPG sur Windows [2026] | heictojpg.fr",
  description:
    "Apprenez à convertir vos images WebP en JPG sur Windows. Utilisez Paint, l'application Photos ou convertissez en ligne avec heictojpg.fr. Guide complet.",
  openGraph: {
    type: "website",
    title: "Convertir WebP en JPG sur Windows - Guide complet [2026]",
    description:
      "Apprenez à convertir vos images WebP en JPG sur Windows via Paint, Photos ou en ligne.",
    url: "https://heictojpg.fr/convertir-webp-en-jpg-sur-windows",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Convertir WebP en JPG sur Windows - Guide complet [2026]",
    description:
      "Apprenez à convertir vos images WebP en JPG sur Windows via Paint, Photos ou en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-webp-en-jpg-sur-windows",
  },
};

export default function ConvertirWebpWindows() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment convertir WebP en JPG sur Windows",
    description: "3 methodes pour convertir vos images WebP en JPG sur Windows : Paint, Photos ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Paint (Ouvrir WebP > Enregistrer sous > JPEG)",
        text: "Ouvrez votre image WebP dans Paint, puis utilisez Enregistrer sous pour la sauvegarder au format JPEG.",
        url: "https://heictojpg.fr/convertir-webp-en-jpg-sur-windows#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Photos Windows",
        text: "Ouvrez l'image WebP dans l'application Photos Windows et utilisez la fonction Enregistrer une copie pour la convertir en JPG.",
        url: "https://heictojpg.fr/convertir-webp-en-jpg-sur-windows#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Convertir en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/convertir-webp-en-jpg, selectionnez vos images WebP, et telechargez les fichiers JPG convertis.",
        url: "https://heictojpg.fr/convertir-webp-en-jpg-sur-windows#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir WebP en JPG sur Windows", href: "/convertir-webp-en-jpg-sur-windows" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment convertir WebP en JPG sur Windows
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Le format WebP est largement utilisé sur le web, mais il n&apos;est
          pas toujours compatible avec tous les logiciels Windows. Si vous avez
          besoin de convertir des images WebP en JPG, voici trois méthodes
          simples et gratuites disponibles sur votre PC.
        </p>
      </PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Convertissez vos images WebP instantanément
        </h3>
        <p className="text-gray-600 mb-4">
          Utilisez notre outil gratuit en ligne pour convertir vos fichiers
          WebP en JPG en quelques secondes, directement depuis votre navigateur.
        </p>
        <Link
          href="/convertir-webp-en-jpg"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Convertir mes images WebP en JPG
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 id="methode-1" className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 1 : Utiliser Paint (Ouvrir WebP &gt; Enregistrer sous &gt; JPEG)
          </h2>
          <p className="text-gray-600 mb-4">
            Paint, disponible sur toutes les versions de Windows, prend en
            charge le format WebP et permet de le convertir facilement en JPG.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Faites un clic droit sur votre image WebP, sélectionnez{" "}
              <strong>Ouvrir avec &gt; Paint</strong>.
            </li>
            <li>
              Dans Paint, cliquez sur{" "}
              <strong>Fichier &gt; Enregistrer sous &gt; Image JPEG</strong>.
            </li>
            <li>
              Choisissez l&apos;emplacement de sauvegarde et cliquez sur{" "}
              <strong>Enregistrer</strong>. Votre image est maintenant au format
              JPG.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 id="methode-2" className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 2 : Utiliser Photos Windows
          </h2>
          <p className="text-gray-600 mb-4">
            L&apos;application Photos intégrée à Windows 10 et 11 peut ouvrir
            les fichiers WebP et vous permettre de les enregistrer dans un
            autre format.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Double-cliquez sur votre image WebP pour l&apos;ouvrir dans
              l&apos;application <strong>Photos</strong>.
            </li>
            <li>
              Cliquez sur le menu <strong>...</strong> (trois points) puis
              sélectionnez <strong>&quot;Enregistrer une copie&quot;</strong>.
            </li>
            <li>
              Dans la boîte de dialogue, changez le type de fichier en{" "}
              <strong>.jpg</strong> et cliquez sur <strong>Enregistrer</strong>.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 id="methode-3" className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 3 : En ligne avec heictojpg.fr
          </h2>
          <p className="text-gray-600 mb-4">
            Pour convertir rapidement vos images WebP sans ouvrir de logiciel,
            utilisez notre convertisseur en ligne directement depuis votre
            navigateur.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez votre navigateur et rendez-vous sur{" "}
              <Link href="/convertir-webp-en-jpg" className="text-blue-600 hover:text-blue-800">
                heictojpg.fr/convertir-webp-en-jpg
              </Link>
              .
            </li>
            <li>
              Glissez-déposez vos images WebP dans la zone de conversion ou
              cliquez pour sélectionner vos fichiers.
            </li>
            <li>
              La conversion est instantanée. Téléchargez vos images JPG en un
              clic.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-600 mb-4">
            Paint est la méthode la plus simple pour convertir du WebP en JPG
            sur Windows, et l&apos;application Photos offre une alternative
            pratique. Pour une conversion ponctuelle ou en lot sans logiciel,
            notre outil en ligne{" "}
            <Link href="/convertir-webp-en-jpg" className="text-blue-600 hover:text-blue-800">
              heictojpg.fr/convertir-webp-en-jpg
            </Link>{" "}
            est la solution la plus pratique : rapide, gratuit et sans
            installation.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/convertir-webp-en-jpg-sur-iphone" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur iPhone</h3>
              <p className="text-sm text-gray-600">Guide de conversion WebP en JPG sur iOS.</p>
            </Link>
            <Link href="/convertir-webp-en-jpg-sur-mac" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Mac</h3>
              <p className="text-sm text-gray-600">Guide de conversion WebP en JPG sur macOS.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
