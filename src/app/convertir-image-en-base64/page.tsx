import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Convertir Image en Base64 en Ligne Gratuit | heictojpg.fr",
  description:
    "Convertissez vos images en Base64 et inversement. Generez le Data URL, la balise HTML et le CSS. Outil gratuit, sans inscription, traitement 100% local.",
  keywords: [
    "image en base64",
    "convertir image base64",
    "base64 en image",
    "data url image",
    "encodage base64",
    "base64 encoder",
    "image to base64 online",
    "base64 decoder image",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-image-en-base64",
    siteName: "heictojpg.fr",
    title: "Convertir Image en Base64 en Ligne Gratuit",
    description:
      "Convertissez vos images en Base64 et inversement. Generez le Data URL, la balise HTML et le CSS.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-image-en-base64" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertir Image en Base64",
      url: "https://heictojpg.fr/convertir-image-en-base64",
      description:
        "Convertissez vos images en Base64 et inversement. Generez le Data URL, la balise HTML et le CSS. Traitement 100% local dans votre navigateur.",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Qu'est-ce que l'encodage Base64 d'une image ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le Base64 est un systeme d'encodage qui convertit des donnees binaires (comme une image) en une chaine de texte composee uniquement de caracteres ASCII. Cela permet d'integrer une image directement dans du code HTML, CSS ou JSON sans fichier separe.",
          },
        },
        {
          "@type": "Question",
          name: "Pourquoi la taille augmente-t-elle de 33% en Base64 ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L'encodage Base64 utilise 4 caracteres ASCII pour representer 3 octets de donnees binaires. Ce ratio 4:3 entraine une augmentation d'environ 33% de la taille. C'est le prix a payer pour avoir une representation textuelle des donnees binaires.",
          },
        },
        {
          "@type": "Question",
          name: "Quand utiliser des images en Base64 ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Les images Base64 sont utiles pour les petites icones et logos (moins de 10 Ko), les emails HTML qui doivent etre autonomes, les feuilles de style CSS pour eviter des requetes HTTP supplementaires, et les applications hors ligne. Pour les grandes images, il vaut mieux utiliser des fichiers classiques.",
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
          items={[{ label: "Convertir image en Base64", href: "/convertir-image-en-base64" }]}
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Convertir une image en Base64 en ligne
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Encodez vos images en Base64 pour les integrer directement dans votre code HTML, CSS ou vos emails.
          Ou decodez une chaine Base64 pour recuperer l&apos;image originale. Tout se passe dans votre
          navigateur, aucun fichier n&apos;est envoye a un serveur.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-16">
          <Client />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Qu&apos;est-ce que le Base64 et quand l&apos;utiliser ?
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Le Base64 est un systeme d&apos;encodage qui transforme des donnees binaires en une chaine de
              caracteres ASCII. Pour les images, cela signifie que vous pouvez representer un fichier JPG, PNG
              ou SVG sous forme de texte, directement integrable dans du code source. Le resultat est ce
              qu&apos;on appelle un Data URL, de la forme{" "}
              <code className="bg-gray-100 px-1 rounded">data:image/png;base64,iVBOR...</code>.
            </p>
            <p className="text-gray-600 mb-4">
              Les cas d&apos;utilisation courants incluent : les petites icones et logos dans les feuilles de
              style CSS (evitant des requetes HTTP supplementaires), les emails HTML ou les images doivent etre
              embarquees pour s&apos;afficher sans telechargement externe, et les applications monopage ou hors
              ligne. Les Data URL sont aussi pratiques pour stocker des miniatures dans des bases de donnees ou
              des fichiers JSON.
            </p>
            <p className="text-gray-600 mb-4">
              Attention toutefois : l&apos;encodage Base64 augmente la taille des donnees d&apos;environ 33%.
              Une image de 30 Ko deviendra environ 40 Ko en Base64. Pour les images volumineuses (au-dela de 10
              Ko), il est generalement preferable d&apos;utiliser un fichier image classique servi par un CDN,
              car le Base64 ne beneficie pas de la mise en cache du navigateur et alourdit le code source.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
          <div className="prose prose-gray max-w-none">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Qu&apos;est-ce que l&apos;encodage Base64 d&apos;une image ?
              </h3>
              <p className="text-gray-600 mb-4">
                Le Base64 est un systeme d&apos;encodage qui convertit des donnees binaires (comme une image)
                en une chaine de texte composee uniquement de caracteres ASCII. Cela permet d&apos;integrer une
                image directement dans du code HTML, CSS ou JSON sans fichier separe.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Pourquoi la taille augmente-t-elle de 33% en Base64 ?
              </h3>
              <p className="text-gray-600 mb-4">
                L&apos;encodage Base64 utilise 4 caracteres ASCII pour representer 3 octets de donnees
                binaires. Ce ratio 4:3 entraine une augmentation d&apos;environ 33% de la taille. C&apos;est le
                prix a payer pour avoir une representation textuelle des donnees binaires.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Quand utiliser des images en Base64 ?
              </h3>
              <p className="text-gray-600 mb-4">
                Les images Base64 sont utiles pour les petites icones et logos (moins de 10 Ko), les emails HTML
                qui doivent etre autonomes, les feuilles de style CSS pour eviter des requetes HTTP
                supplementaires, et les applications hors ligne. Pour les grandes images, il vaut mieux utiliser
                des fichiers classiques.
              </p>
            </div>
          </div>
        </div>

        <RelatedTools currentPath="/convertir-image-en-base64" />
      </div>
    </>
  );
}
