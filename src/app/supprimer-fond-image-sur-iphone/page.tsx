import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Supprimer le Fond d'une Image sur iPhone [2026] | heictojpg.fr",
  description:
    "Apprenez a supprimer le fond d'une image sur iPhone. Utilisez le detourage natif iOS 16+, les Raccourcis iOS ou notre outil en ligne. Guide complet et gratuit.",
  openGraph: {
    type: "website",
    title: "Supprimer le Fond d'une Image sur iPhone - Guide complet [2026]",
    description:
      "3 methodes pour supprimer le fond d'une image sur iPhone : detourage natif, Raccourcis iOS ou en ligne avec heictojpg.fr.",
    url: "https://heictojpg.fr/supprimer-fond-image-sur-iphone",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Supprimer le Fond d'une Image sur iPhone - Guide complet [2026]",
    description:
      "3 methodes pour supprimer le fond d'une image sur iPhone : detourage natif, Raccourcis iOS ou en ligne avec heictojpg.fr.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/supprimer-fond-image-sur-iphone",
  },
};

export default function SupprimerFondImageIphone() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment supprimer le fond d'une image sur iPhone",
    description: "3 methodes pour supprimer l'arriere-plan d'une image sur iPhone : detourage natif iOS 16+, Raccourcis iOS ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Detourage natif iOS 16+",
        text: "Ouvrez l'image dans Photos, maintenez le doigt sur le sujet jusqu'a ce qu'il se detoure, puis copiez ou partagez le sujet sans arriere-plan.",
        url: "https://heictojpg.fr/supprimer-fond-image-sur-iphone#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Raccourcis iOS",
        text: "Creez un raccourci avec l'action Supprimer l'arriere-plan pour automatiser la suppression du fond sur vos images.",
        url: "https://heictojpg.fr/supprimer-fond-image-sur-iphone#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : En ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/supprimer-fond-image dans Safari, deposez votre image et telechargez le resultat sans arriere-plan.",
        url: "https://heictojpg.fr/supprimer-fond-image-sur-iphone#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Supprimer le fond d'une image sur iPhone", href: "/supprimer-fond-image-sur-iphone" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment supprimer le fond d&apos;une image sur iPhone
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Besoin de supprimer l&apos;arriere-plan d&apos;une photo directement
          depuis votre iPhone ? Depuis iOS 16, Apple integre un outil de
          detourage natif puissant. Decouvrez trois methodes simples pour
          obtenir un sujet detoure sur fond transparent, sans application
          tierce.
        </p>
      </PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-blue-50 rounded-lg p-6 mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Supprimez le fond de vos images instantanement
          </h3>
          <p className="text-gray-600 mb-4">
            Utilisez notre outil gratuit en ligne pour supprimer
            l&apos;arriere-plan de vos photos en quelques secondes, directement
            depuis Safari sur votre iPhone.
          </p>
          <Link
            href="/supprimer-fond-image"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Supprimer le fond de mon image
          </Link>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Methode 1 : Detourage natif iOS 16+ (maintenir le sujet dans Photos)
            </h2>
            <p className="text-gray-600 mb-4">
              Depuis iOS 16, l&apos;app Photos integre une fonction de
              detourage automatique. Il suffit de maintenir le doigt sur le
              sujet pour l&apos;isoler de l&apos;arriere-plan.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez l&apos;application <strong>Photos</strong> et
                selectionnez l&apos;image dont vous souhaitez supprimer le fond.
              </li>
              <li>
                Maintenez le doigt appuye sur le sujet principal de la photo.
                Vous verrez une animation lumineuse autour du sujet lorsqu&apos;il
                est detecte.
              </li>
              <li>
                Relacher le doigt : un menu apparait avec les options{" "}
                <strong>&quot;Copier&quot;</strong> et{" "}
                <strong>&quot;Partager&quot;</strong>. Copiez le sujet detoure
                pour le coller dans une autre app, ou partagez-le directement.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Methode 2 : Raccourcis iOS avec l&apos;action
              &quot;Supprimer l&apos;arriere-plan&quot;
            </h2>
            <p className="text-gray-600 mb-4">
              L&apos;app Raccourcis d&apos;Apple permet de creer une
              automatisation pour supprimer l&apos;arriere-plan de plusieurs
              images en lot, grace a l&apos;action dediee disponible depuis
              iOS 16.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez l&apos;application <strong>Raccourcis</strong> et creez
                un nouveau raccourci.
              </li>
              <li>
                Ajoutez l&apos;action{" "}
                <strong>&quot;Supprimer l&apos;arriere-plan&quot;</strong> depuis
                la bibliotheque d&apos;actions (recherchez &quot;arriere-plan&quot;).
              </li>
              <li>
                Ajoutez une action <strong>&quot;Enregistrer dans
                l&apos;album photo&quot;</strong> ou{" "}
                <strong>&quot;Enregistrer le fichier&quot;</strong> pour sauvegarder
                le resultat. Lancez le raccourci depuis le menu Partager sur
                n&apos;importe quelle image.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Methode 3 : En ligne avec heictojpg.fr
            </h2>
            <p className="text-gray-600 mb-4">
              Pour supprimer le fond d&apos;une image rapidement sans
              manipulations complexes, utilisez notre outil en ligne
              directement depuis Safari.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez Safari et rendez-vous sur{" "}
                <Link href="/supprimer-fond-image" className="text-blue-600 hover:text-blue-800">
                  heictojpg.fr/supprimer-fond-image
                </Link>
                .
              </li>
              <li>
                Appuyez sur la zone de depot et selectionnez{" "}
                <strong>&quot;Phototheque&quot;</strong> pour choisir votre
                image.
              </li>
              <li>
                La suppression du fond est automatique. Telechargez votre image
                avec un fond transparent au format PNG.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conclusion
            </h2>
            <p className="text-gray-600 mb-4">
              Sur iPhone, le detourage natif iOS 16+ est la methode la plus
              rapide pour isoler un sujet. Les Raccourcis iOS permettent
              d&apos;automatiser le processus pour traiter plusieurs images.
              Pour une solution universelle sans installation, notre outil en
              ligne{" "}
              <Link href="/supprimer-fond-image" className="text-blue-600 hover:text-blue-800">
                heictojpg.fr/supprimer-fond-image
              </Link>{" "}
              est la solution la plus pratique : rapide, gratuit et accessible
              depuis n&apos;importe quel navigateur.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/supprimer-fond-image-sur-mac" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-800">Sur Mac</h3>
                <p className="text-sm text-gray-600">Supprimer le fond d&apos;une image sur macOS.</p>
              </Link>
              <Link href="/supprimer-fond-image-sur-windows" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-800">Sur Windows</h3>
                <p className="text-sm text-gray-600">Supprimer le fond d&apos;une image sur PC.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
