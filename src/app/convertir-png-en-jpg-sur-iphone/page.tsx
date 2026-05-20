import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertir PNG en JPG sur iPhone [2026] | heictojpg.fr",
  description:
    "Apprenez à convertir vos images PNG en JPG sur iPhone. Utilisez les Raccourcis iOS, l'app Fichiers ou convertissez en ligne avec heictojpg.fr. Guide complet.",
  openGraph: {
    type: "website",
    title: "Convertir PNG en JPG sur iPhone - Guide complet [2026]",
    description:
      "Apprenez à convertir vos images PNG en JPG sur iPhone via les Raccourcis iOS, l'app Fichiers ou en ligne.",
    url: "https://heictojpg.fr/convertir-png-en-jpg-sur-iphone",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Convertir PNG en JPG sur iPhone - Guide complet [2026]",
    description:
      "Apprenez à convertir vos images PNG en JPG sur iPhone via les Raccourcis iOS, l'app Fichiers ou en ligne.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/convertir-png-en-jpg-sur-iphone",
  },
};

export default function ConvertirPngIphone() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment convertir PNG en JPG sur iPhone",
    description: "3 methodes pour convertir vos images PNG en JPG sur iPhone : Raccourcis iOS, app Fichiers ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Raccourcis iOS",
        text: "Creez un raccourci qui convertit vos images PNG en JPEG automatiquement via l'app Raccourcis.",
        url: "https://heictojpg.fr/convertir-png-en-jpg-sur-iphone#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : App Fichiers (copier-coller)",
        text: "Enregistrez l'image PNG dans Fichiers, puis copiez-collez le fichier. iOS cree automatiquement une copie JPG.",
        url: "https://heictojpg.fr/convertir-png-en-jpg-sur-iphone#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : Convertir en ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/convertir-png-en-jpg dans Safari, selectionnez vos images PNG, et telechargez les fichiers JPG convertis.",
        url: "https://heictojpg.fr/convertir-png-en-jpg-sur-iphone#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir PNG en JPG sur iPhone", href: "/convertir-png-en-jpg-sur-iphone" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment convertir PNG en JPG sur iPhone
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Le format PNG est très répandu pour les captures d&apos;écran et les
          images avec transparence sur iPhone. Cependant, les fichiers PNG sont
          souvent plus lourds que les JPG. Découvrez trois méthodes simples pour
          convertir vos images PNG en JPG directement depuis votre iPhone.
        </p>
      </PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Convertissez vos images PNG instantanément
        </h3>
        <p className="text-gray-600 mb-4">
          Utilisez notre outil gratuit en ligne pour convertir vos fichiers
          PNG en JPG en quelques secondes, directement depuis Safari sur
          votre iPhone.
        </p>
        <Link
          href="/convertir-png-en-jpg"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Convertir mes images PNG en JPG
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 id="methode-1" className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 1 : Utiliser les Raccourcis iOS
          </h2>
          <p className="text-gray-600 mb-4">
            L&apos;application Raccourcis d&apos;Apple vous permet de créer un
            raccourci personnalisé qui convertit automatiquement vos images PNG
            en JPG en un seul geste.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez l&apos;application <strong>Raccourcis</strong> sur votre iPhone.
            </li>
            <li>
              Créez un nouveau raccourci et ajoutez l&apos;action{" "}
              <strong>&quot;Convertir l&apos;image&quot;</strong>. Choisissez
              JPEG comme format de sortie.
            </li>
            <li>
              Ajoutez l&apos;action <strong>&quot;Enregistrer dans l&apos;album photo&quot;</strong>{" "}
              pour sauvegarder le résultat.
            </li>
            <li>
              Depuis l&apos;app Photos, sélectionnez votre image PNG, appuyez
              sur <strong>Partager</strong> et choisissez votre raccourci. La
              conversion est instantanée.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 id="methode-2" className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 2 : Utiliser l&apos;application Fichiers (copier-coller)
          </h2>
          <p className="text-gray-600 mb-4">
            L&apos;application Fichiers d&apos;iOS permet de convertir
            automatiquement un PNG en JPG grâce à une simple opération de
            copier-coller.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez l&apos;application <strong>Photos</strong> et sélectionnez
              l&apos;image PNG que vous souhaitez convertir.
            </li>
            <li>
              Appuyez sur le bouton <strong>Partager</strong> puis choisissez{" "}
              <strong>&quot;Enregistrer dans Fichiers&quot;</strong>.
            </li>
            <li>
              Ouvrez l&apos;application <strong>Fichiers</strong>, maintenez le
              doigt sur l&apos;image et choisissez{" "}
              <strong>&quot;Copier&quot;</strong>.
            </li>
            <li>
              Maintenez le doigt sur un espace vide dans le dossier et
              choisissez <strong>&quot;Coller&quot;</strong>. iOS crée une copie
              au format JPG automatiquement.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 id="methode-3" className="text-2xl font-semibold text-gray-800 mb-4">
            Méthode 3 : En ligne avec heictojpg.fr
          </h2>
          <p className="text-gray-600 mb-4">
            Pour convertir rapidement une ou plusieurs images PNG sans créer
            de raccourci, utilisez notre convertisseur en ligne directement
            depuis Safari.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>
              Ouvrez Safari et rendez-vous sur{" "}
              <Link href="/convertir-png-en-jpg" className="text-blue-600 hover:text-blue-800">
                heictojpg.fr/convertir-png-en-jpg
              </Link>
              .
            </li>
            <li>
              Appuyez sur la zone de conversion et sélectionnez{" "}
              <strong>&quot;Photothèque&quot;</strong> pour choisir vos images
              PNG.
            </li>
            <li>
              La conversion est instantanée. Téléchargez vos images JPG et
              retrouvez-les dans votre dossier Téléchargements.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-600 mb-4">
            Vous pouvez utiliser les Raccourcis iOS pour automatiser la
            conversion PNG vers JPG, ou l&apos;app Fichiers pour une méthode
            rapide par copier-coller. Pour une conversion ponctuelle ou en lot
            sans configuration, notre outil en ligne{" "}
            <Link href="/convertir-png-en-jpg" className="text-blue-600 hover:text-blue-800">
              heictojpg.fr/convertir-png-en-jpg
            </Link>{" "}
            est la solution la plus pratique : rapide, gratuit et sans
            installation.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/convertir-png-en-jpg-sur-mac" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Mac</h3>
              <p className="text-sm text-gray-600">Guide de conversion PNG en JPG sur macOS.</p>
            </Link>
            <Link href="/convertir-png-en-jpg-sur-windows" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-800">Sur Windows</h3>
              <p className="text-sm text-gray-600">Guide de conversion PNG en JPG sur PC.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
