import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Supprimer le Fond d'une Image sur Windows [2026] | heictojpg.fr",
  description:
    "Apprenez a supprimer le fond d'une image sur Windows. Utilisez Paint 3D, Photos Windows 11 ou notre outil en ligne. Guide complet et gratuit.",
  openGraph: {
    type: "website",
    title: "Supprimer le Fond d'une Image sur Windows - Guide complet [2026]",
    description:
      "3 methodes pour supprimer le fond d'une image sur Windows : Paint 3D, Photos Windows 11 ou en ligne avec heictojpg.fr.",
    url: "https://heictojpg.fr/supprimer-fond-image-sur-windows",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Supprimer le Fond d'une Image sur Windows - Guide complet [2026]",
    description:
      "3 methodes pour supprimer le fond d'une image sur Windows : Paint 3D, Photos Windows 11 ou en ligne avec heictojpg.fr.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/supprimer-fond-image-sur-windows",
  },
};

export default function SupprimerFondImageWindows() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment supprimer le fond d'une image sur Windows",
    description: "3 methodes pour supprimer l'arriere-plan d'une image sur Windows : Paint 3D, Photos Windows 11 ou en ligne.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        name: "Methode 1 : Paint 3D - Selection magique",
        text: "Ouvrez l'image dans Paint 3D, utilisez la Selection magique pour detourer le sujet, puis supprimez l'arriere-plan.",
        url: "https://heictojpg.fr/supprimer-fond-image-sur-windows#methode-1",
      },
      {
        "@type": "HowToStep",
        name: "Methode 2 : Photos Windows 11 - Supprimer l'arriere-plan",
        text: "Ouvrez l'image dans l'app Photos de Windows 11 et utilisez la fonctionnalite IA Supprimer l'arriere-plan.",
        url: "https://heictojpg.fr/supprimer-fond-image-sur-windows#methode-2",
      },
      {
        "@type": "HowToStep",
        name: "Methode 3 : En ligne avec heictojpg.fr",
        text: "Ouvrez heictojpg.fr/supprimer-fond-image, deposez votre image et telechargez le resultat sans arriere-plan.",
        url: "https://heictojpg.fr/supprimer-fond-image-sur-windows#methode-3",
      },
    ],
  };

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Supprimer le fond d'une image sur Windows", href: "/supprimer-fond-image-sur-windows" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Comment supprimer le fond d&apos;une image sur Windows
        </h1>

        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Vous souhaitez supprimer l&apos;arriere-plan d&apos;une image sur
          votre PC Windows ? Que vous soyez sur Windows 10 ou Windows 11,
          plusieurs outils integres permettent de detourer un sujet sans
          logiciel tiers. Decouvrez trois methodes simples pour obtenir une
          image sur fond transparent.
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
            l&apos;arriere-plan de vos photos en quelques secondes,
            directement depuis votre navigateur sur PC.
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
              Methode 1 : Paint 3D - Selection magique (Windows 10)
            </h2>
            <p className="text-gray-600 mb-4">
              Paint 3D, disponible sur Windows 10, integre un outil de
              Selection magique qui permet de detourer automatiquement un
              sujet et de supprimer l&apos;arriere-plan.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez votre image dans <strong>Paint 3D</strong> (clic droit
                sur le fichier &gt; Modifier avec Paint 3D).
              </li>
              <li>
                Cliquez sur <strong>&quot;Selection magique&quot;</strong> dans
                la barre d&apos;outils superieure. Ajustez le cadre autour du
                sujet a conserver, puis cliquez sur{" "}
                <strong>&quot;Suivant&quot;</strong>.
              </li>
              <li>
                Paint 3D detecte automatiquement le sujet. Affinez la
                selection si necessaire avec les outils{" "}
                <strong>&quot;Ajouter&quot;</strong> et{" "}
                <strong>&quot;Supprimer&quot;</strong>. Validez, selectionnez
                le sujet detoure, puis copiez-le ou enregistrez l&apos;image
                au format PNG pour conserver la transparence.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Methode 2 : Photos Windows 11 - Supprimer l&apos;arriere-plan
              (fonctionnalite IA)
            </h2>
            <p className="text-gray-600 mb-4">
              L&apos;application Photos de Windows 11 integre une
              fonctionnalite de suppression d&apos;arriere-plan basee sur
              l&apos;intelligence artificielle, accessible en un clic.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez votre image dans l&apos;application{" "}
                <strong>Photos</strong> de Windows 11 (double-cliquez sur le
                fichier).
              </li>
              <li>
                Cliquez sur l&apos;icone <strong>&quot;Modifier
                l&apos;image&quot;</strong> (ou appuyez sur Ctrl+E), puis
                selectionnez l&apos;option{" "}
                <strong>&quot;Supprimer l&apos;arriere-plan&quot;</strong> dans
                la barre d&apos;outils.
              </li>
              <li>
                L&apos;IA detecte et supprime automatiquement
                l&apos;arriere-plan. Vous pouvez ajuster le resultat si
                necessaire, puis enregistrez l&apos;image au format PNG pour
                conserver le fond transparent.
              </li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Methode 3 : En ligne avec heictojpg.fr
            </h2>
            <p className="text-gray-600 mb-4">
              Pour une suppression rapide et precise du fond, utilisez notre
              outil en ligne qui fonctionne directement dans votre navigateur,
              sans logiciel a installer.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                Ouvrez votre navigateur et rendez-vous sur{" "}
                <Link href="/supprimer-fond-image" className="text-blue-600 hover:text-blue-800">
                  heictojpg.fr/supprimer-fond-image
                </Link>
                .
              </li>
              <li>
                Glissez-deposez votre image sur la zone de depot ou cliquez
                pour selectionner un fichier depuis votre PC.
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
              Sur Windows 10, Paint 3D et sa Selection magique offrent un
              detourage efficace. Sur Windows 11, la fonctionnalite IA de
              l&apos;app Photos simplifie encore le processus. Pour une
              solution universelle qui fonctionne sur toutes les versions de
              Windows, notre outil en ligne{" "}
              <Link href="/supprimer-fond-image" className="text-blue-600 hover:text-blue-800">
                heictojpg.fr/supprimer-fond-image
              </Link>{" "}
              est la solution la plus pratique : gratuit, sans installation et
              accessible depuis n&apos;importe quel navigateur.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guides pour autres appareils</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/supprimer-fond-image-sur-iphone" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-800">Sur iPhone</h3>
                <p className="text-sm text-gray-600">Supprimer le fond d&apos;une image sur iPhone.</p>
              </Link>
              <Link href="/supprimer-fond-image-sur-mac" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-800">Sur Mac</h3>
                <p className="text-sm text-gray-600">Supprimer le fond d&apos;une image sur macOS.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
