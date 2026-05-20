import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";
import AdBanner from "@/components/AdBanner";
import TextOnImageForm from "@/components/TextOnImageForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Ajouter du texte sur une image en ligne | heictojpg.fr",
  description: "Ajoutez du texte sur vos photos en ligne gratuitement. Personnalisez la police, la couleur, la taille et la position. Sans inscription, rapide et simple.",
  keywords: ["ajouter texte image", "texte sur photo", "ecrire sur image", "annotation image", "texte photo en ligne", "watermark texte", "meme generator"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/ajouter-texte-image",
    siteName: "heictojpg.fr",
    title: "Ajouter du texte sur une image en ligne gratuitement",
    description: "Ajoutez du texte sur vos photos en ligne gratuitement. Personnalisez la police, la couleur, la taille et la position.",
  },
  alternates: { canonical: "https://heictojpg.fr/ajouter-texte-image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Ajouter du texte sur une image",
      url: "https://heictojpg.fr/ajouter-texte-image",
      description: "Ajoutez du texte sur vos photos en ligne gratuitement. Personnalisez la police, la couleur, la taille et la position.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quels formats d&apos;image sont accept\u00e9s ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L&apos;outil accepte les formats JPG, JPEG, PNG et WebP. L&apos;image de sortie est toujours en JPEG haute qualit\u00e9.",
          },
        },
        {
          "@type": "Question",
          name: "Le texte est-il int\u00e9gr\u00e9 d\u00e9finitivement dans l&apos;image ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, le texte est fusionn\u00e9 avec l&apos;image de mani\u00e8re permanente. Il ne peut pas \u00eatre retir\u00e9 apr\u00e8s t\u00e9l\u00e9chargement. Conservez toujours votre image originale.",
          },
        },
        {
          "@type": "Question",
          name: "Puis-je utiliser cet outil pour cr\u00e9er des m\u00e8mes ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolument ! Choisissez une grande taille de police, une couleur blanche et positionnez le texte en haut ou en bas de l&apos;image pour un rendu classique de m\u00e8me.",
          },
        },
        {
          "@type": "Question",
          name: "Mes images sont-elles stock\u00e9es sur le serveur ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non, le traitement est effectu\u00e9 en temps r\u00e9el et aucune image n&apos;est conserv\u00e9e sur nos serveurs. Votre vie priv\u00e9e est totalement respect\u00e9e.",
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

        <Breadcrumbs items={[{ label: "Ajouter du texte sur une image", href: "/ajouter-texte-image" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Ajouter du texte sur une image</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Personnalisez vos photos en ajoutant du texte directement sur l&apos;image. Choisissez la taille, la couleur et la position du texte. Ideal pour les reseaux sociaux, les memes, les filigranes et les annotations.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <TextOnImageForm />
      </div>

      <AdBanner slot="SLOT_1" format="horizontal" />

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi ajouter du texte sur une image ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Ajouter du texte sur une image est une pratique courante dans de nombreux contextes : creation de contenu pour les reseaux sociaux, annotation de captures d&apos;ecran, ajout de filigranes pour proteger vos photos, ou encore creation de memes viraux.
          </p>
          <p className="text-gray-600 mb-4">
            Les photographes et les createurs de contenu utilisent souvent du texte superpose pour ajouter leur signature, un copyright ou l&apos;URL de leur site web. C&apos;est une methode simple et efficace pour proteger ses images tout en assurant la visibilite de sa marque.
          </p>
          <p className="text-gray-600 mb-4">
            Pour les reseaux sociaux comme Instagram, Facebook ou Twitter, ajouter du texte sur une image permet de creer des visuels accrocheurs sans utiliser de logiciel complexe comme Photoshop. Citations inspirantes, annonces promotionnelles, infographies simples : les possibilites sont infinies.
          </p>
          <p className="text-gray-600 mb-4">
            Notre outil vous permet de personnaliser entierement le rendu : choisissez la taille de la police (de 16 a 120 pixels), la couleur exacte via un selecteur ou un code hexadecimal, et positionnez le texte precisement grace aux curseurs de position horizontale et verticale.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quels formats d&apos;image sont acceptes ?</h3>
            <p className="text-gray-600 mb-4">
              L&apos;outil accepte les formats JPG, JPEG, PNG et WebP. L&apos;image de sortie est toujours en JPEG haute qualite (92%). Pour conserver la transparence, utilisez une image PNG en entree et notez que le fond transparent sera converti en blanc.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le texte est-il integre definitivement dans l&apos;image ?</h3>
            <p className="text-gray-600 mb-4">
              Oui, le texte est fusionne avec l&apos;image de maniere permanente. Il ne peut pas etre retire apres telechargement. Conservez toujours votre image originale si vous souhaitez pouvoir modifier le texte ulterieurement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je utiliser cet outil pour creer des memes ?</h3>
            <p className="text-gray-600 mb-4">
              Absolument ! Choisissez une grande taille de police (80-120px), une couleur blanche (#ffffff) et positionnez le texte en haut ou en bas de l&apos;image pour un rendu classique de meme. Vous pouvez traiter l&apos;image deux fois pour ajouter du texte en haut et en bas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mes images sont-elles stockees sur le serveur ?</h3>
            <p className="text-gray-600 mb-4">
              Non, le traitement est effectue en temps reel et aucune image n&apos;est conservee sur nos serveurs. Votre vie privee est totalement respectee. L&apos;image est traitee en memoire puis immediatement renvoyee a votre navigateur.
            </p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/ajouter-texte-image" />
    </div>
    </>
  );
}
